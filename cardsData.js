// 卡片数据
// type: 'image' 或 'video'
// imageUrl: 图片URL（用于缩略图，视频卡片也需要提供缩略图）
// videoUrl: 视频URL（仅视频卡片需要）
const cards = [
  {
    id: '1',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Mountain Landscape',
    title: 'Mountain Landscape'
  },
  {
    id: '2',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    alt: 'Ocean View',
    title: 'Ocean View'
  },
  {
    id: '3',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    alt: 'Forest Video',
    title: 'Forest Video'
  },
  {
    id: '4',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop',
    alt: 'Desert Sunset',
    title: 'Desert Sunset'
  },
  {
    id: '5',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    alt: 'Mountain Lake Video',
    title: 'Mountain Lake Video'
  },
  {
    id: '6',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop',
    alt: 'Snowy Peak',
    title: 'Snowy Peak'
  },
  {
    id: '7',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
    alt: 'Nature Scene',
    title: 'Nature Scene'
  },
  {
    id: '8',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    alt: 'Tropical Beach Video',
    title: 'Tropical Beach Video'
  },
  {
    id: '9',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Mountain Range',
    title: 'Mountain Range'
  },
  {
    id: '10',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    alt: 'Coastal View',
    title: 'Coastal View'
  },
  {
    id: '11',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    alt: 'Green Forest',
    title: 'Green Forest'
  },
  {
    id: '12',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop',
    alt: 'Desert Dunes',
    title: 'Desert Dunes'
  },
  {
    id: '13',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=600&fit=crop',
    alt: 'Aurora Borealis',
    title: 'Aurora Borealis'
  },
  {
    id: '14',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    alt: 'Northern Lights Video',
    title: 'Northern Lights Video'
  },
  {
    id: '15',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Alpine Meadow',
    title: 'Alpine Meadow'
  },
  {
    id: '16',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop',
    alt: 'Tropical Paradise',
    title: 'Tropical Paradise'
  },
  {
    id: '17',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    alt: 'Mountain Adventure Video',
    title: 'Mountain Adventure Video'
  },
  {
    id: '18',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
    alt: 'Forest Path',
    title: 'Forest Path'
  },
  {
    id: '19',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop',
    alt: 'Desert Mirage',
    title: 'Desert Mirage'
  },
  {
    id: '20',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    alt: 'Ocean Waves Video',
    title: 'Ocean Waves Video'
  },
  {
    id: '21',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    alt: 'Misty Forest',
    title: 'Misty Forest'
  },
  {
    id: '22',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop',
    alt: 'Mountain Reflection',
    title: 'Mountain Reflection'
  },
  {
    id: '23',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop',
    alt: 'Snowy Landscape',
    title: 'Snowy Landscape'
  },
  {
    id: '24',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    alt: 'Nature Documentary Video',
    title: 'Nature Documentary Video'
  },
  {
    id: '25',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop',
    alt: 'Beach Sunset',
    title: 'Beach Sunset'
  },
  {
    id: '26',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Rocky Mountains',
    title: 'Rocky Mountains'
  },
  {
    id: '27',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    alt: 'Coastal Cliffs',
    title: 'Coastal Cliffs'
  },
  {
    id: '28',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    alt: 'Forest Journey Video',
    title: 'Forest Journey Video'
  },
  {
    id: '29',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop',
    alt: 'Sand Dunes',
    title: 'Sand Dunes'
  },
  {
    id: '30',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop',
    alt: 'Lake Serenity',
    title: 'Lake Serenity'
  },
  {
    id: '31',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
    alt: 'Wilderness',
    title: 'Wilderness'
  },
  {
    id: '32',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    alt: 'Adventure Video',
    title: 'Adventure Video'
  },
  {
    id: '33',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop',
    alt: 'Tropical Island',
    title: 'Tropical Island'
  },
  {
    id: '34',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Mountain Vista',
    title: 'Mountain Vista'
  },
  {
    id: '35',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    alt: 'Ocean Breeze',
    title: 'Ocean Breeze'
  },
  {
    id: '36',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    alt: 'Epic Journey Video',
    title: 'Epic Journey Video'
  },
  {
    id: '37',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop',
    alt: 'Desert Oasis',
    title: 'Desert Oasis'
  },
  {
    id: '38',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop',
    alt: 'Mountain Lake',
    title: 'Mountain Lake'
  },
  {
    id: '39',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
    alt: 'Nature Trail',
    title: 'Nature Trail'
  },
  {
    id: '40',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    alt: 'Scenic Drive Video',
    title: 'Scenic Drive Video'
  },
  {
    id: '41',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop',
    alt: 'Paradise Beach',
    title: 'Paradise Beach'
  },
  {
    id: '42',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Alpine Peak',
    title: 'Alpine Peak'
  },
  {
    id: '43',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    alt: 'Seaside View',
    title: 'Seaside View'
  },
  {
    id: '44',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    alt: 'Nature Exploration Video',
    title: 'Nature Exploration Video'
  },
  {
    id: '45',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop',
    alt: 'Desert Storm',
    title: 'Desert Storm'
  },
  {
    id: '46',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop',
    alt: 'Crystal Lake',
    title: 'Crystal Lake'
  },
  {
    id: '47',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
    alt: 'Forest Canopy',
    title: 'Forest Canopy'
  },
  {
    id: '48',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    alt: 'Mountain Expedition Video',
    title: 'Mountain Expedition Video'
  },
  {
    id: '49',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop',
    alt: 'Tropical Sunset',
    title: 'Tropical Sunset'
  },
  {
    id: '50',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Mountain Range',
    title: 'Mountain Range'
  },
  {
    id: '51',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    alt: 'Ocean Horizon',
    title: 'Ocean Horizon'
  },
  {
    id: '52',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    alt: 'Wildlife Video',
    title: 'Wildlife Video'
  },
  {
    id: '53',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop',
    alt: 'Desert Sunrise',
    title: 'Desert Sunrise'
  },
  {
    id: '54',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop',
    alt: 'Mountain Stream',
    title: 'Mountain Stream'
  },
  {
    id: '55',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
    alt: 'Ancient Forest',
    title: 'Ancient Forest'
  },
  {
    id: '56',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    alt: 'Adventure Travel Video',
    title: 'Adventure Travel Video'
  },
  {
    id: '57',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop',
    alt: 'Island Paradise',
    title: 'Island Paradise'
  },
  {
    id: '58',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Peak View',
    title: 'Peak View'
  },
  {
    id: '59',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    alt: 'Coastal Beauty',
    title: 'Coastal Beauty'
  },
  {
    id: '60',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    alt: 'Nature Walk Video',
    title: 'Nature Walk Video'
  },
  {
    id: '61',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop',
    alt: 'Desert Night',
    title: 'Desert Night'
  },
  {
    id: '62',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop',
    alt: 'Mountain Glory',
    title: 'Mountain Glory'
  },
  {
    id: '63',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
    alt: 'Forest Magic',
    title: 'Forest Magic'
  },
  {
    id: '64',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    alt: 'Outdoor Adventure Video',
    title: 'Outdoor Adventure Video'
  },
  {
    id: '65',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop',
    alt: 'Beach Paradise',
    title: 'Beach Paradise'
  },
  {
    id: '66',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Summit View',
    title: 'Summit View'
  },
  {
    id: '67',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    alt: 'Ocean Majesty',
    title: 'Ocean Majesty'
  },
  {
    id: '68',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    alt: 'Scenic Route Video',
    title: 'Scenic Route Video'
  },
  {
    id: '69',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop',
    alt: 'Desert Dreams',
    title: 'Desert Dreams'
  },
  {
    id: '70',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop',
    alt: 'Mountain Majesty',
    title: 'Mountain Majesty'
  },
  {
    id: '71',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
    alt: 'Forest Whisper',
    title: 'Forest Whisper'
  },
  {
    id: '72',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    alt: 'Nature Escape Video',
    title: 'Nature Escape Video'
  },
  {
    id: '73',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop',
    alt: 'Tropical Dream',
    title: 'Tropical Dream'
  },
  {
    id: '74',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Alpine Wonder',
    title: 'Alpine Wonder'
  },
  {
    id: '75',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    alt: 'Seaside Serenity',
    title: 'Seaside Serenity'
  },
  {
    id: '76',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    alt: 'Epic Nature Video',
    title: 'Epic Nature Video'
  },
  {
    id: '77',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop',
    alt: 'Desert Wonder',
    title: 'Desert Wonder'
  },
  {
    id: '78',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop',
    alt: 'Mountain Peace',
    title: 'Mountain Peace'
  },
  {
    id: '79',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
    alt: 'Forest Tranquility',
    title: 'Forest Tranquility'
  },
  {
    id: '80',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    alt: 'Journey Video',
    title: 'Journey Video'
  },
  {
    id: '81',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop',
    alt: 'Island Escape',
    title: 'Island Escape'
  },
  {
    id: '82',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Peak Adventure',
    title: 'Peak Adventure'
  },
  {
    id: '83',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    alt: 'Ocean Dreams',
    title: 'Ocean Dreams'
  },
  {
    id: '84',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    alt: 'Travel Video',
    title: 'Travel Video'
  },
  {
    id: '85',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop',
    alt: 'Desert Beauty',
    title: 'Desert Beauty'
  },
  {
    id: '86',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop',
    alt: 'Lake View',
    title: 'Lake View'
  },
  {
    id: '87',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
    alt: 'Nature Beauty',
    title: 'Nature Beauty'
  },
  {
    id: '88',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    alt: 'Exploration Video',
    title: 'Exploration Video'
  },
  {
    id: '89',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop',
    alt: 'Beach Bliss',
    title: 'Beach Bliss'
  },
  {
    id: '90',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Mountain Peak',
    title: 'Mountain Peak'
  },
  {
    id: '91',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    alt: 'Coastal Charm',
    title: 'Coastal Charm'
  },
  {
    id: '92',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    alt: 'Adventure Story Video',
    title: 'Adventure Story Video'
  },
  {
    id: '93',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop',
    alt: 'Desert Horizon',
    title: 'Desert Horizon'
  },
  {
    id: '94',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop',
    alt: 'Mountain Serenity',
    title: 'Mountain Serenity'
  },
  {
    id: '95',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
    alt: 'Forest Wonder',
    title: 'Forest Wonder'
  },
  {
    id: '96',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    alt: 'Wildlife Documentary Video',
    title: 'Wildlife Documentary Video'
  },
  {
    id: '97',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop',
    alt: 'Tropical Bliss',
    title: 'Tropical Bliss'
  },
  {
    id: '98',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Alpine Beauty',
    title: 'Alpine Beauty'
  },
  {
    id: '99',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
    alt: 'Ocean View',
    title: 'Ocean View'
  },
  {
    id: '100',
    type: 'video',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    alt: 'Final Adventure Video',
    title: 'Final Adventure Video'
  }
];

