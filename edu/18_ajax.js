// 예제: https://picsum.photos/v2/list?page=2&limit=100
const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // 기존 이벤트 취소
  
  const baseURL = 'https://picsum.photos';
  const path = '/v2/list';

  // 이벤트 객체에서 이벤트가 발생한 요소에 접근(e.target)해서 필요한 값 획득
  const page = e.target.page.value;
  const limit = e.target.limit.value;

  // console.log(typeof page); // HTML에서 반환되는 값이 string
  // console.log(typeof limit); // HTML에서 반환되는 값이 string

  const url = `${baseURL}${path}?page=${page}&limit=${limit}`;

  try {
    const response = await axios.get(url);

    const cardContainer = document.querySelector('.card-container');
    cardContainer.textContent = '';

    response.data.forEach((item) => {
      const cardImg = document.createElement('div');
      cardImg.classList.add('card-img');
      cardImg.style.backgroundImage = `url('${item.download_url}')`;
      
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = `${item.id} : ${item.author}`;
      
      const card = document.createElement('div');
      card.classList.add('card');
      card.appendChild(cardImg);
      card.appendChild(cardText);

      cardContainer.appendChild(card);

    })

  } catch (error) {
    console.error(error);
  }

});
