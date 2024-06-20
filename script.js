const API_KEY="816d62d557184ff9909a78e9d6ae204b";
const url="https://newsapi.org/v2/everything?q=";
window.addEventListener('load',()=>fetchNews("India"));

function reload(){
    window.location.reload();
}
async function fetchNews(query){
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}
function bindData(articles){
    const cardsContainer =document.getElementById('cards-container');
    const newsCardTemplate=document.getElementById('template-news-card')

   cardsContainer.innerHTML=' ';

   articles.forEach(article => {
      if(!article.urlToImage) return;

      const cardClone= newsCardTemplate.content.cloneNode(true);
      fillDataInCard(cardClone,article);
      cardsContainer.appendChild(cardClone);
   });
   
}

function fillDataInCard(cardClone,article){
    const newsImg=cardClone.querySelector('#news-img');
    const newsTitle=cardClone.querySelector('#news-title');
    const newsSource=cardClone.querySelector('#news-source');
    const newsDesc=cardClone.querySelector('#news-desc');

    newsImg.src=article.urlToImage;
    newsTitle.innerHTML=article.title;
    newsDesc.innerHTML=article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US",{timeZone:"Asia/Jakarta"

    });
    newsSource.innerHTML=`${article.source.name} • ${date}`;

    cardClone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url,"_blank");



    });
}
    let curSelectedNav=null;
    function onNavItemClick(id){
        fetchNews(id);
        const navItem =document.getElementById(id);
        curSelectedNav?.classList.remove('active');
        // curSelectedNav.classList.add('active');
        curSelectedNav=navItem;
        curSelectedNav.classList.add('active');
    }

const searchButton =document.getElementById('search-button');
const searchText=document.getElementById('search-text');

searchButton.addEventListener('click',()=>{
    const query=searchText.value;
    if(!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav=null;
});





// const API_KEY = "816d62d557184ff9909a78e9d6ae204b";
// const url = "https://newsapi.org/v2/everything?q=";

// window.addEventListener('load', () => fetchNews("India"));

// function reload() {
//     window.location.reload();
// }

// async function fetchNews(query) {
//     const today = new Date();
//     const twoDaysAgo = new Date(today);
//     twoDaysAgo.setDate(today.getDate()-1);

//     const fromDate = formatDate(twoDaysAgo);
//     const toDate = formatDate(today);

//     const res = await fetch(`${url}${query}&from=${fromDate}&to=${toDate}&apiKey=${API_KEY}`);
//     const data = await res.json();
//     bindData(data.articles);
// }

// function formatDate(date) {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
// }

// function bindData(articles) {
//     const cardsContainer = document.getElementById('cards-container');
//     const newsCardTemplate = document.getElementById('template-news-card');

//     cardsContainer.innerHTML = '';

//     articles.forEach(article => {
//         if (!article.urlToImage) return;

//         const cardClone = newsCardTemplate.content.cloneNode(true);
//         fillDataInCard(cardClone, article);
//         cardsContainer.appendChild(cardClone);
//     });
// }

// function fillDataInCard(cardClone, article) {
//     const newsImg = cardClone.querySelector('#news-img');
//     const newsTitle = cardClone.querySelector('#news-title');
//     const newsSource = cardClone.querySelector('#news-source');
//     const newsDesc = cardClone.querySelector('#news-desc');

//     newsImg.src = article.urlToImage;
//     newsTitle.innerHTML = article.title;
//     newsDesc.innerHTML = article.description;

//     const date = new Date(article.publishedAt).toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
//     newsSource.innerHTML = `${article.source.name} • ${date}`;

//     cardClone.firstElementChild.addEventListener('click', () => {
//         window.open(article.url, "_blank");
//     });
// }

// let curSelectedNav = null;

// function onNavItemClick(id) {
//     fetchNews(id);
//     const navItem = document.getElementById(id);
//     curSelectedNav?.classList.remove('active');
//     curSelectedNav = navItem;
//     curSelectedNav.classList.add('active');
// }

// const searchButton = document.getElementById('search-button');
// const searchText = document.getElementById('search-text');

// searchButton.addEventListener('click', () => {
//     const query = searchText.value;
//     if (!query) return;
//     fetchNews(query);
//     curSelectedNav?.classList.remove("active");
//     curSelectedNav = null;
// });
