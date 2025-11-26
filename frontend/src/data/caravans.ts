export type Caravan = {
  id: number;
  name: string;
  description: string;
  basePrice: number;
  baseGuests: number;
  extraPersonPrice: number;
  imageUrl: string;
  maxGuests: number;
};

export const caravans: Caravan[] = [
  {
    id: 1,
    name: '봄꽃 카라반',
    description: '따스한 봄 햇살 아래 자연을 만끽할 수 있는 아늑한 카라반입니다. 꽃놀이 여행에 최적화되어 있습니다.',
    basePrice: 130000,
    baseGuests: 3,
    extraPersonPrice: 15000,
    imageUrl: 'https://file2.nocutnews.co.kr/newsroom/image/2025/05/07/202505071034161879_0.jpg',
    maxGuests: 4,
  },
  {
    id: 2,
    name: '여름 바람 카라반',
    description: '시원한 여름 바람과 함께 해변가 여행을 즐길 수 있는 카라반입니다. 물놀이 장비 보관 공간이 넉넉합니다.',
    basePrice: 160000,
    baseGuests: 4,
    extraPersonPrice: 20000,
    imageUrl: 'https://tourimage.interpark.com/BBS/Tour/FckUpload/201907/6370018668825118391.png',
    maxGuests: 6,
  },
  {
    id: 3,
    name: '가을 단풍 카라반',
    description: '아름다운 단풍을 배경으로 여유로운 시간을 보낼 수 있는 카라반입니다. 따뜻한 차 한 잔의 여유를 선사합니다.',
    basePrice: 140000,
    baseGuests: 2,
    extraPersonPrice: 18000,
    imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0.fwebp/?fname=http://t1.daumcdn.net/brunch/service/guest/image/XE1X_IuZb8bYqPBYdzT6cCSY6us.WEBP',
    maxGuests: 3,
  },
  {
    id: 4,
    name: '겨울 왕국 카라반',
    description: '눈 덮인 설경을 감상하며 따뜻하게 휴식을 취할 수 있는 겨울 전용 카라반입니다. 완벽한 난방 시설을 갖추고 있습니다.',
    basePrice: 190000,
    baseGuests: 2,
    extraPersonPrice: 25000,
    imageUrl: 'https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202412/28/allmystay/20241228212619599hzsh.png',
    maxGuests: 4,
  },
];
