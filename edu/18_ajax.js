// https://picsum.photos/v2/list?page=2&limit=100

// BaseURL: https://picsum.photos
// Resource/Path: /v2/list
// Parameter:
//   - page: number
//   - limit: number
// 특이사항: 이미지는 1000개가 준비되어 있다.
// 예제: https://picsum.photos/v2/list?page=2&limit=100
const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
  // 기존 이벤트 취소
  e.preventDefault();
  
  // 이벤트 객체에서 이벤트가 발생한 요소에 접근(e.target)해서 필요한 값 획득
  const page = e.target.page.value;
  const limit = e.target.limit.value;
  console.log(page, limit); 

});
