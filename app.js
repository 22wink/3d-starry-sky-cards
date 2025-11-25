// 卡片数据
const cards = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Mountain Landscape',
    title: 'Mountain Landscape'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    alt: 'Ocean View',
    title: 'Ocean View'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    alt: 'Forest Path',
    title: 'Forest Path'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop',
    alt: 'Desert Sunset',
    title: 'Desert Sunset'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop',
    alt: 'Mountain Lake',
    title: 'Mountain Lake'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop',
    alt: 'Snowy Peak',
    title: 'Snowy Peak'
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
    alt: 'Nature Scene',
    title: 'Nature Scene'
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop',
    alt: 'Tropical Beach',
    title: 'Tropical Beach'
  },
  {
    id: '9',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Mountain Range',
    title: 'Mountain Range'
  },
  {
    id: '10',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    alt: 'Coastal View',
    title: 'Coastal View'
  },
  {
    id: '11',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    alt: 'Green Forest',
    title: 'Green Forest'
  },
  {
    id: '12',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop',
    alt: 'Desert Dunes',
    title: 'Desert Dunes'
  }
];

// 状态管理
const state = {
  selectedCard: null,
  isFavorited: false,
  hoveredCardIndex: null
};

// 动画系统 - 简单的缓动函数
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// 动画管理器
class AnimationManager {
  constructor() {
    this.animations = new Map();
    this.idCounter = 0;
  }

  getUniqueKey(target, property) {
    // 为每个目标对象创建唯一标识
    if (!target._animId) {
      target._animId = this.idCounter++;
    }
    return `${target._animId}_${property}`;
  }

  animate(target, property, startValue, endValue, duration, easing = easeOutCubic, onComplete = null) {
    const key = this.getUniqueKey(target, property);
    
    // 如果已有相同动画，先停止并从当前值继续
    if (this.animations.has(key)) {
      const oldAnim = this.animations.get(key);
      startValue = oldAnim.currentValue;
      cancelAnimationFrame(oldAnim.frameId);
    }

    const startTime = performance.now();
    const anim = {
      target,
      property,
      startValue,
      endValue,
      duration,
      easing,
      onComplete,
      currentValue: startValue,
      frameId: null
    };

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easing(progress);
      
      anim.currentValue = startValue + (endValue - startValue) * eased;
      
      if (property === 'scale') {
        target.scale.set(anim.currentValue, anim.currentValue, anim.currentValue);
      } else if (property === 'opacity') {
        target.material.opacity = anim.currentValue;
      }
      
      if (progress < 1) {
        anim.frameId = requestAnimationFrame(update);
      } else {
        this.animations.delete(key);
        if (onComplete) onComplete();
      }
    };

    anim.frameId = requestAnimationFrame(update);
    this.animations.set(key, anim);
  }

  stop(target, property) {
    const key = this.getUniqueKey(target, property);
    if (this.animations.has(key)) {
      const anim = this.animations.get(key);
      cancelAnimationFrame(anim.frameId);
      this.animations.delete(key);
    }
  }
}

const animationManager = new AnimationManager();

// 初始化
let scene, camera, renderer, controls;
let starfieldScene, starfieldCamera, starfieldRenderer;
let cardObjects = [];
let raycaster, mouse;

// 初始化星空背景
function initStarfield() {
  const container = document.getElementById('starfield-container');
  
  starfieldScene = new THREE.Scene();
  starfieldCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  starfieldRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  starfieldRenderer.setSize(window.innerWidth, window.innerHeight);
  starfieldRenderer.setPixelRatio(window.devicePixelRatio);
  starfieldRenderer.setClearColor(0x000000, 1);
  container.appendChild(starfieldRenderer.domElement);

  // 创建星空
  const starsGeometry = new THREE.BufferGeometry();
  const starsCount = 10000;
  const positions = new Float32Array(starsCount * 3);

  for (let i = 0; i < starsCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
  }

  starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.7,
    sizeAttenuation: true
  });
  const stars = new THREE.Points(starsGeometry, starsMaterial);
  starfieldScene.add(stars);

  starfieldCamera.position.z = 10;

  function animateStarfield() {
    requestAnimationFrame(animateStarfield);
    stars.rotation.y += 0.0001;
    stars.rotation.x += 0.00005;
    starfieldRenderer.render(starfieldScene, starfieldCamera);
  }

  animateStarfield();

  window.addEventListener('resize', () => {
    starfieldCamera.aspect = window.innerWidth / window.innerHeight;
    starfieldCamera.updateProjectionMatrix();
    starfieldRenderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// 生成斐波那契球位置
function generateCardPositions(numCards) {
  const positions = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;

  for (let i = 0; i < numCards; i++) {
    const y = 1 - (i / (numCards - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = (2 * Math.PI * i) / goldenRatio;

    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    const layerRadius = 12 + (i % 3) * 4;

    positions.push({
      x: x * layerRadius,
      y: y * layerRadius,
      z: z * layerRadius,
      rotationX: Math.atan2(z, Math.sqrt(x * x + y * y)),
      rotationY: Math.atan2(x, z),
      rotationZ: (Math.random() - 0.5) * 0.2
    });
  }

  return positions;
}

// 创建卡片 HTML 元素
function createCardElement(card) {
  const div = document.createElement('div');
  div.className = 'card-html';
  div.innerHTML = `
    <img src="${card.imageUrl}" alt="${card.alt}" loading="lazy" draggable="false" />
    <p>${card.title}</p>
  `;
  return div;
}

// 初始化 3D 场景
function initScene() {
  const canvas = document.getElementById('canvas');
  
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 15);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // 环境光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  // 点光源
  const pointLight1 = new THREE.PointLight(0xffffff, 0.6);
  pointLight1.position.set(10, 10, 10);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xffffff, 0.3);
  pointLight2.position.set(-10, -10, -10);
  scene.add(pointLight2);

  // 创建参考球体
  const createWireframeSphere = (radius, color, opacity) => {
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: color,
      transparent: true,
      opacity: opacity,
      wireframe: true,
      depthWrite: false
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.renderOrder = 0; // 先渲染球体
    return sphere;
  };

  // 中心球体
  const centerSphere = createWireframeSphere(2, 0x1a1a2e, 0.15);
  scene.add(centerSphere);

  // 外层参考球体
  const outerSphere1 = createWireframeSphere(12, 0x31b8c6, 0.05);
  scene.add(outerSphere1);

  const outerSphere2 = createWireframeSphere(16, 0x31b8c6, 0.03);
  scene.add(outerSphere2);

  const outerSphere3 = createWireframeSphere(20, 0x31b8c6, 0.02);
  scene.add(outerSphere3);

  // 生成卡片位置
  const cardPositions = generateCardPositions(cards.length);

  // 创建卡片对象
  cards.forEach((card, index) => {
    const position = cardPositions[index];
    
    // 创建组
    const group = new THREE.Group();
    group.position.set(position.x, position.y, position.z);

    // 创建可点击的平面
    const planeGeometry = new THREE.PlaneGeometry(4.5, 6);
    const planeMaterial = new THREE.MeshBasicMaterial({ 
      transparent: true, 
      opacity: 0,
      side: THREE.DoubleSide
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.userData = { card, index };
    group.add(plane);

    // 创建 HTML 元素用于显示
    const cardElement = createCardElement(card);
    cardElement.style.pointerEvents = 'none';
    
    // 使用 Canvas 纹理渲染卡片
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 416;
    const ctx = canvas.getContext('2d');
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    
    const cardMaterial = new THREE.MeshStandardMaterial({ 
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: true
    });
    
    const cardMesh = new THREE.Mesh(planeGeometry, cardMaterial);
    cardMesh.position.set(0, 0, 0.01);
    cardMesh.renderOrder = 1; // 后渲染卡片，确保显示在球体前面
    cardMesh.userData = { card, index, element: cardElement, canvas, ctx };
    
    // 创建边框（使用EdgesGeometry创建边缘线条，增强发光效果）
    const edgesGeometry = new THREE.EdgesGeometry(planeGeometry);
    
    // 主边框 - 最亮的青色
    const borderMaterial = new THREE.LineBasicMaterial({
      color: 0x31b8c6,
      transparent: true,
      opacity: 0
    });
    const borderMesh = new THREE.LineSegments(edgesGeometry, borderMaterial);
    borderMesh.position.set(0, 0, 0.015);
    borderMesh.renderOrder = 2;
    
    // 内层发光边框 - 更亮的青色
    const borderGeometry2 = new THREE.EdgesGeometry(new THREE.PlaneGeometry(4.55, 6.05));
    const borderMaterial2 = new THREE.LineBasicMaterial({
      color: 0x7de8f5,
      transparent: true,
      opacity: 0
    });
    const borderMesh2 = new THREE.LineSegments(borderGeometry2, borderMaterial2);
    borderMesh2.position.set(0, 0, 0.016);
    borderMesh2.renderOrder = 3;
    
    // 中层发光边框
    const borderGeometry3 = new THREE.EdgesGeometry(new THREE.PlaneGeometry(4.58, 6.08));
    const borderMaterial3 = new THREE.LineBasicMaterial({
      color: 0x5dd5e8,
      transparent: true,
      opacity: 0
    });
    const borderMesh3 = new THREE.LineSegments(borderGeometry3, borderMaterial3);
    borderMesh3.position.set(0, 0, 0.0155);
    borderMesh3.renderOrder = 2.5;
    
    // 外层发光边框 - 更大的外发光
    const borderGeometry4 = new THREE.EdgesGeometry(new THREE.PlaneGeometry(4.65, 6.15));
    const borderMaterial4 = new THREE.LineBasicMaterial({
      color: 0x31b8c6,
      transparent: true,
      opacity: 0
    });
    const borderMesh4 = new THREE.LineSegments(borderGeometry4, borderMaterial4);
    borderMesh4.position.set(0, 0, 0.014);
    borderMesh4.renderOrder = 1;
    
    // 最外层发光边框 - 更大的外发光
    const borderGeometry5 = new THREE.EdgesGeometry(new THREE.PlaneGeometry(4.7, 6.2));
    const borderMaterial5 = new THREE.LineBasicMaterial({
      color: 0x31b8c6,
      transparent: true,
      opacity: 0
    });
    const borderMesh5 = new THREE.LineSegments(borderGeometry5, borderMaterial5);
    borderMesh5.position.set(0, 0, 0.013);
    borderMesh5.renderOrder = 0.5;
    
    // 绘制卡片背景和内容
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      // 绘制背景
      ctx.fillStyle = '#1F2121';
      ctx.fillRect(0, 0, 320, 416);
      
      // 绘制图片
      ctx.drawImage(img, 16, 16, 288, 320);
      
      // 绘制标题
      ctx.fillStyle = 'white';
      ctx.font = 'bold 24px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // 文本阴影
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      
      // 截断文本
      const maxWidth = 280;
      let title = card.title;
      const metrics = ctx.measureText(title);
      if (metrics.width > maxWidth) {
        title = title.substring(0, Math.floor(title.length * maxWidth / metrics.width) - 3) + '...';
      }
      
      ctx.fillText(title, 160, 360);
      
      // 更新纹理
      texture.needsUpdate = true;
    };
    img.src = card.imageUrl;
    
    group.add(cardMesh);
    group.add(borderMesh);
    group.add(borderMesh2);
    group.add(borderMesh3);
    group.add(borderMesh4);
    group.add(borderMesh5);

    cardObjects.push({
      group,
      plane,
      cardObject: cardMesh,
      borderMesh: borderMesh, // 主边框
      borderMesh2: borderMesh2, // 内层发光（最亮）
      borderMesh3: borderMesh3, // 中层发光
      borderMesh4: borderMesh4, // 外层发光
      borderMesh5: borderMesh5, // 最外层发光
      position,
      card,
      index,
      targetScale: 1, // 目标缩放值
      currentScale: 1 // 当前缩放值
    });

    scene.add(group);
  });

  // 射线检测器
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  // 轨道控制器
  initOrbitControls();

  // 事件监听
  setupEventListeners();

  // 动画循环
  animate();
}

// 简化的轨道控制器
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let cameraDistance = 15;
let cameraRotation = { x: 0, y: 0 };

// 惯性滚动相关
let rotationVelocity = { x: 0, y: 0 }; // 旋转速度
let velocityHistory = []; // 速度历史记录（用于平滑计算）
const maxHistoryLength = 3; // 保留最近3帧的速度
const friction = 0.95; // 摩擦力系数（0-1，越小衰减越快）
const minVelocity = 0.001; // 最小速度阈值，低于此值停止

// 防止拖拽后误触点击
let dragStartPosition = { x: 0, y: 0 };
let totalDragDistance = 0; // 总拖拽距离
let justFinishedDragging = false; // 是否刚刚完成拖拽
let dragEndTime = 0; // 拖拽结束时间
const DRAG_CLICK_THRESHOLD = 5; // 拖拽距离阈值（像素），超过此值认为是拖拽而非点击
const CLICK_IGNORE_DURATION = 150; // 拖拽结束后忽略点击的时长（毫秒）

function initOrbitControls() {
  const canvas = document.getElementById('canvas');
  
  canvas.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      dragStartPosition = { x: e.clientX, y: e.clientY };
      totalDragDistance = 0;
      // 停止惯性滚动
      rotationVelocity = { x: 0, y: 0 };
      velocityHistory = [];
      justFinishedDragging = false;
    }
  });

  canvas.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      // 计算当前帧的速度
      const currentVelocity = {
        y: deltaX * 0.005,
        x: deltaY * 0.005
      };

      // 添加到历史记录
      velocityHistory.push(currentVelocity);
      if (velocityHistory.length > maxHistoryLength) {
        velocityHistory.shift();
      }

      // 计算平均速度（用于惯性滚动，更平滑）
      if (velocityHistory.length > 0) {
        const avgVelocity = velocityHistory.reduce((acc, v) => ({
          x: acc.x + v.x,
          y: acc.y + v.y
        }), { x: 0, y: 0 });
        rotationVelocity = {
          x: avgVelocity.x / velocityHistory.length,
          y: avgVelocity.y / velocityHistory.length
        };
      }

      // 应用旋转
      cameraRotation.y += currentVelocity.y;
      cameraRotation.x += currentVelocity.x;
      cameraRotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, cameraRotation.x));

      // 累计拖拽距离
      const dragDeltaX = e.clientX - dragStartPosition.x;
      const dragDeltaY = e.clientY - dragStartPosition.y;
      totalDragDistance = Math.sqrt(dragDeltaX * dragDeltaX + dragDeltaY * dragDeltaY);

      previousMousePosition = { x: e.clientX, y: e.clientY };
    }
  });

  canvas.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      
      // 如果拖拽距离超过阈值，标记为刚刚完成拖拽
      if (totalDragDistance > DRAG_CLICK_THRESHOLD) {
        justFinishedDragging = true;
        dragEndTime = Date.now();
        
        // 使用最后的速度作为惯性速度
        if (velocityHistory.length > 0) {
          const lastVelocity = velocityHistory[velocityHistory.length - 1];
          rotationVelocity = {
            x: lastVelocity.x,
            y: lastVelocity.y
          };
        }
        
        // 如果速度很小，直接停止惯性
        if (Math.abs(rotationVelocity.x) < minVelocity && Math.abs(rotationVelocity.y) < minVelocity) {
          rotationVelocity = { x: 0, y: 0 };
        }
      } else {
        // 如果拖拽距离很小，认为是点击，不启动惯性
        rotationVelocity = { x: 0, y: 0 };
        justFinishedDragging = false;
      }
      
      // 清空速度历史
      velocityHistory = [];
    }
  });

  // 鼠标离开画布时停止惯性
  canvas.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      rotationVelocity = { x: 0, y: 0 };
      velocityHistory = [];
    }
  });

  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY * 0.01;
    cameraDistance += delta;
    cameraDistance = Math.max(5, Math.min(40, cameraDistance));
  });

  canvas.addEventListener('click', (e) => {
    // 如果刚刚完成拖拽且拖拽距离超过阈值，忽略点击
    if (justFinishedDragging && totalDragDistance > DRAG_CLICK_THRESHOLD) {
      const timeSinceDragEnd = Date.now() - dragEndTime;
      if (timeSinceDragEnd < CLICK_IGNORE_DURATION) {
        return; // 忽略点击
      }
    }
    
    if (!isDragging) {
      handleCardClick(e);
    }
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDragging) {
      handleCardHover(e);
    }
  });
}

function handleCardClick(e) {
  const rect = e.target.getBoundingClientRect();
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(
    cardObjects.map(obj => obj.plane),
    true
  );

  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;
    const cardData = cardObjects.find(obj => obj.plane === clickedObject);
    if (cardData) {
      openModal(cardData.card);
    }
  }
}

function handleCardHover(e) {
  const rect = e.target.getBoundingClientRect();
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(
    cardObjects.map(obj => obj.plane),
    true
  );

  let newHoveredIndex = null;
  
  if (intersects.length > 0) {
    const hoveredObject = intersects[0].object;
    const cardData = cardObjects.find(obj => obj.plane === hoveredObject);
    if (cardData) {
      newHoveredIndex = cardData.index;
    }
  }

  // 如果悬停的卡片改变了，更新状态
  if (newHoveredIndex !== state.hoveredCardIndex) {
    const oldHoveredIndex = state.hoveredCardIndex;
    state.hoveredCardIndex = newHoveredIndex;

    // 重置之前悬停的卡片（使用动画）
    if (oldHoveredIndex !== null) {
      const oldCard = cardObjects[oldHoveredIndex];
      if (oldCard) {
        // 动画重置缩放
        oldCard.targetScale = 1;
        animationManager.animate(
          oldCard.group,
          'scale',
          oldCard.currentScale,
          1,
          300,
          easeOutCubic
        );
        oldCard.currentScale = 1;
        
        // 动画隐藏所有边框
        if (oldCard.borderMesh) {
          animationManager.animate(oldCard.borderMesh, 'opacity', oldCard.borderMesh.material.opacity, 0, 250);
        }
        if (oldCard.borderMesh2) {
          animationManager.animate(oldCard.borderMesh2, 'opacity', oldCard.borderMesh2.material.opacity, 0, 250);
        }
        if (oldCard.borderMesh3) {
          animationManager.animate(oldCard.borderMesh3, 'opacity', oldCard.borderMesh3.material.opacity, 0, 250);
        }
        if (oldCard.borderMesh4) {
          animationManager.animate(oldCard.borderMesh4, 'opacity', oldCard.borderMesh4.material.opacity, 0, 250);
        }
        if (oldCard.borderMesh5) {
          animationManager.animate(oldCard.borderMesh5, 'opacity', oldCard.borderMesh5.material.opacity, 0, 250);
        }
      }
    }

    // 显示新悬停的卡片效果（使用动画）
    if (newHoveredIndex !== null) {
      const cardData = cardObjects[newHoveredIndex];
      
      // 动画放大效果
      cardData.targetScale = 1.15;
      animationManager.animate(
        cardData.group,
        'scale',
        cardData.currentScale,
        1.15,
        400,
        easeOutCubic
      );
      cardData.currentScale = 1.15;
      
      // 动画显示所有边框层，创建强烈的发光效果
      if (cardData.borderMesh) {
        animationManager.animate(cardData.borderMesh, 'opacity', cardData.borderMesh.material.opacity, 1.0, 350);
      }
      if (cardData.borderMesh2) {
        animationManager.animate(cardData.borderMesh2, 'opacity', cardData.borderMesh2.material.opacity, 0.9, 350);
      }
      if (cardData.borderMesh3) {
        animationManager.animate(cardData.borderMesh3, 'opacity', cardData.borderMesh3.material.opacity, 0.7, 350);
      }
      if (cardData.borderMesh4) {
        animationManager.animate(cardData.borderMesh4, 'opacity', cardData.borderMesh4.material.opacity, 0.5, 350);
      }
      if (cardData.borderMesh5) {
        animationManager.animate(cardData.borderMesh5, 'opacity', cardData.borderMesh5.material.opacity, 0.3, 350);
      }
      
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'auto';
    }
  }
}

// 更新相机位置
function updateCamera() {
  const x = Math.sin(cameraRotation.y) * Math.cos(cameraRotation.x) * cameraDistance;
  const y = Math.sin(cameraRotation.x) * cameraDistance;
  const z = Math.cos(cameraRotation.y) * Math.cos(cameraRotation.x) * cameraDistance;

  camera.position.set(x, y, z);
  camera.lookAt(0, 0, 0);
}

// 动画循环
function animate() {
  requestAnimationFrame(animate);

  // 应用惯性滚动（如果不在拖拽中且有速度）
  if (!isDragging && (Math.abs(rotationVelocity.x) > minVelocity || Math.abs(rotationVelocity.y) > minVelocity)) {
    // 应用速度到旋转
    cameraRotation.y += rotationVelocity.y;
    cameraRotation.x += rotationVelocity.x;
    cameraRotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, cameraRotation.x));

    // 应用摩擦力，逐渐衰减速度
    rotationVelocity.x *= friction;
    rotationVelocity.y *= friction;

    // 如果速度太小，直接停止
    if (Math.abs(rotationVelocity.x) < minVelocity) {
      rotationVelocity.x = 0;
    }
    if (Math.abs(rotationVelocity.y) < minVelocity) {
      rotationVelocity.y = 0;
    }
  }

  // 更新相机
  updateCamera();

  // 让卡片面向相机
  cardObjects.forEach(({ group }) => {
    group.lookAt(camera.position);
  });

  renderer.render(scene, camera);
}

// 模态框功能
function openModal(card) {
  state.selectedCard = card;
  const modal = document.getElementById('card-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');

  modalImage.src = card.imageUrl;
  modalImage.alt = card.alt;
  modalTitle.textContent = card.title;

  modal.classList.remove('hidden');

  // 3D 卡片悬停效果
  setupModalCard3D();
}

function closeModal() {
  const modal = document.getElementById('card-modal');
  modal.classList.add('hidden');
  state.selectedCard = null;
}

function setupModalCard3D() {
  const modalCard = document.getElementById('modal-card');
  let isHovered = false;

  modalCard.addEventListener('mouseenter', () => {
    isHovered = true;
  });

  modalCard.addEventListener('mouseleave', () => {
    isHovered = false;
    modalCard.style.transition = 'transform 0.5s ease-out';
    modalCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });

  modalCard.addEventListener('mousemove', (e) => {
    if (!isHovered) return;

    const rect = modalCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    modalCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
}

// 设置事件监听器
function setupEventListeners() {
  // 关闭按钮
  document.getElementById('close-btn').addEventListener('click', closeModal);

  // 背景点击关闭
  document.querySelector('.modal-backdrop').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  });

  // 下载按钮
  document.getElementById('download-btn').addEventListener('click', () => {
    if (state.selectedCard) {
      const link = document.createElement('a');
      link.href = state.selectedCard.imageUrl;
      link.download = state.selectedCard.title;
      link.click();
    }
  });

  // 收藏按钮
  const favoriteBtn = document.getElementById('favorite-btn');
  favoriteBtn.addEventListener('click', () => {
    state.isFavorited = !state.isFavorited;
    favoriteBtn.classList.toggle('favorited', state.isFavorited);
  });

  // 窗口大小调整
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// 初始化应用
function init() {
  initStarfield();
  initScene();
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

