// 변수 선언
const nextBtn = document.querySelector('.next-btn');
const resetBtn = document.querySelector('.reset-btn');
const cardContainer = document.querySelector('.card-container');

const baseURL = 'https://picsum.photos/v2/list';
let page = 0;
const limit = 3;
let isBlocked = true;

// 다음 버튼
nextBtn.addEventListener('click', async () => {
  if(isBlocked) {

    try {
      // 페이지 값 변경
      page ++;
      const url = `${baseURL}?page=${page}&limit=${limit}`;
      const response = await axios.get(url);
      
      response.data.forEach((item) => {
        // 카드 컨텐츠 만들기
        const card = document.createElement('div');
        card.classList.add('card');
    
        const cardIMG = document.createElement('div');
        cardIMG.classList.add('card-img');
        cardIMG.style.backgroundImage = `url(${item.download_url})`;
    
        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = `${item.id} : ${item.author}`;
        
        card.appendChild(cardIMG);
        card.appendChild(cardText);
    
        cardContainer.appendChild(card);
      });
  
    } catch (error) {
      console.error(error);
    } finally {
      isBlocked = true;
    }
  }

});

// 초기화 버튼
resetBtn.addEventListener('click', () => {
  page = 0;
  cardContainer.textContent = '';
});
