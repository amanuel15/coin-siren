export async function GET() {
  return Response.json([
    {
      field: '마케팅',
      yoe: 2.5,
      first_name: 'Abhishek',
      last_name: 'Gupta',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      profile_picture: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      country_code: 'CO',
    },
    {
      field: '프로그램 제작자',
      yoe: 5,
      first_name: 'Amanuel',
      last_name: 'Genene',
      skills: ['웹사이트 개발', '모바일 개발', '영어 번역', '블로그 글 작성'],
      profile_picture: 'https://i.pravatar.cc/250?img=12',
      country_code: 'ET',
    },
    {
      field: '사진작가',
      yoe: 3.5,
      first_name: 'John',
      last_name: 'Doe',
      skills: ['편집', '색보정', '비디오그래피', '결혼식 계획'],
      profile_picture: 'https://i.pravatar.cc/250?img=57',
      country_code: 'CO',
    },
    {
      field: '마케팅',
      yoe: 2.5,
      first_name: 'Drumma',
      last_name: 'Akonalis',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      profile_picture: 'https://i.pravatar.cc/250?img=65',
      country_code: 'CO',
    },
  ]);
}
