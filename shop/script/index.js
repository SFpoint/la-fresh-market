
class CatalogItem {
  constructor(title, newPrice, oldPrice, url, type, Class, id) {
    this.title = title;
    this.newPrice = newPrice;
    this.url = url;
    this.oldPrice = oldPrice;
    this.type = type;
    this.Class = Class ;
    this.id = id;
  }
  render() {
    return `<div class="${this.Class}" id="${this.id}">
    <a href="./ProductDescription.html"><img src="${this.url}" alt="img"></a>
    <svg class="heart" width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2901 1.24858C13.4776 -0.28267 10.6963 -0.0639195 8.97756 1.71733C7.22756 -0.0639195 4.44631 -0.28267 2.63381 1.24858C0.290062 3.21733 0.633812 6.43608 2.32131 8.15483L7.79006 13.7486C8.10256 14.0611 8.50881 14.2486 8.97756 14.2486C9.41506 14.2486 9.82131 14.0611 10.1338 13.7486L15.6338 8.15483C17.2901 6.43608 17.6338 3.21733 15.2901 1.24858ZM14.5401 7.09233L9.07131 12.6861C9.00881 12.7486 8.94631 12.7486 8.85256 12.6861L3.38381 7.09233C2.22756 5.93608 2.00881 3.74858 3.60256 2.40483C4.82131 1.37358 6.69631 1.52983 7.88381 2.71733L8.97756 3.84233L10.0713 2.71733C11.2276 1.52983 13.1026 1.37358 14.3213 2.37358C15.9151 3.74858 15.6963 5.93608 14.5401 7.09233Z" fill="black"/>
</svg>

      <div class="itemText">
      <h2>${this.title}</23>
      <p>${this.newPrice}<span>${this.oldPrice}</span></p>
      <button class="add${this.Class}">Ավելացնել զամբյուղ</button>
      <div class="adds${this.Class}"><button class="minus">-</button><p></p><button class="plus">+</button></div>
      </div>
    </div>`;
  }

  miniCartRender(){
    return `            <div class="purchase" id="purchase${this.id}">
    <a href="./ProductDescription.html"><img src="${this.url}" alt="img"></a>
    <div class="cartPrice">
        <h4>${this.title}</h4>
        <p>${this.newPrice}<span>${this.oldPrice}</span></p>
    </div>
    <div class="amount">
        <button>-</button><p>1</p><button>+</button>
    </div>
</div>`;
  }
  cartPageRender(){
    return `            
    <div class="purchase" id="${this.id}">
    <svg class="delete" width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.90723 13.053H9.65723C9.84473 13.053 10.0322 12.8967 10.0322 12.678V5.92798C10.0322 5.74048 9.84473 5.55298 9.65723 5.55298H8.90723C8.68848 5.55298 8.53223 5.74048 8.53223 5.92798V12.678C8.53223 12.8967 8.68848 13.053 8.90723 13.053ZM14.0322 2.55298H11.4385L10.376 0.802979C10.126 0.365479 9.62598 0.0529785 9.09473 0.0529785H5.93848C5.40723 0.0529785 4.90723 0.365479 4.65723 0.802979L3.59473 2.55298H1.03223C0.750977 2.55298 0.532227 2.80298 0.532227 3.05298V3.55298C0.532227 3.83423 0.750977 4.05298 1.03223 4.05298H1.53223V14.553C1.53223 15.3967 2.18848 16.053 3.03223 16.053H12.0322C12.8447 16.053 13.5322 15.3967 13.5322 14.553V4.05298H14.0322C14.2822 4.05298 14.5322 3.83423 14.5322 3.55298V3.05298C14.5322 2.80298 14.2822 2.55298 14.0322 2.55298ZM5.87598 1.64673C5.90723 1.61548 5.96973 1.55298 6.03223 1.55298C6.03223 1.55298 6.03223 1.55298 6.06348 1.55298H9.00098C9.06348 1.55298 9.12598 1.61548 9.15723 1.64673L9.68848 2.55298H5.34473L5.87598 1.64673ZM12.0322 14.553H3.03223V4.05298H12.0322V14.553ZM5.40723 13.053H6.15723C6.34473 13.053 6.53223 12.8967 6.53223 12.678V5.92798C6.53223 5.74048 6.34473 5.55298 6.15723 5.55298H5.40723C5.18848 5.55298 5.03223 5.74048 5.03223 5.92798V12.678C5.03223 12.8967 5.18848 13.053 5.40723 13.053Z" fill="black" fill-opacity="0.4"/>
</svg>

    <a href="./ProductDescription.html"><img src="${this.url}" alt="img"></a>
    <div class="cartPrice">
        <h3>${this.title}</h3>
        <p>${this.newPrice}<span>${this.oldPrice}</span></p>
    </div>
    <svg class="heart" width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2901 1.24858C13.4776 -0.28267 10.6963 -0.0639195 8.97756 1.71733C7.22756 -0.0639195 4.44631 -0.28267 2.63381 1.24858C0.290062 3.21733 0.633812 6.43608 2.32131 8.15483L7.79006 13.7486C8.10256 14.0611 8.50881 14.2486 8.97756 14.2486C9.41506 14.2486 9.82131 14.0611 10.1338 13.7486L15.6338 8.15483C17.2901 6.43608 17.6338 3.21733 15.2901 1.24858ZM14.5401 7.09233L9.07131 12.6861C9.00881 12.7486 8.94631 12.7486 8.85256 12.6861L3.38381 7.09233C2.22756 5.93608 2.00881 3.74858 3.60256 2.40483C4.82131 1.37358 6.69631 1.52983 7.88381 2.71733L8.97756 3.84233L10.0713 2.71733C11.2276 1.52983 13.1026 1.37358 14.3213 2.37358C15.9151 3.74858 15.6963 5.93608 14.5401 7.09233Z" fill="black"/>
</svg>

        <div class="amount">
        <button>-</button><p>1</p><button>+</button>
    </div>
</div>`;
  }

  
}



class Catalog {
  constructor() {
    this.catalog = [];
  }

  fetchitems() {
    this.items = [
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3.jpg", type: 'flowers', Class: 'salesItem', id: '1',},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (1).jpg", type: 'flowers', Class: 'newItem' , id: '2',},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (2).jpg", type: 'flowers', Class: 'hit' , id: '3'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (3).jpg", type: 'flowers', Class: 'salesItem' , id: '4'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (4).jpg", type: 'flowers', Class: 'salesItem' , id: '5'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (5).jpg", type: 'flowers', Class: 'salesItem' , id: '6'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (6).jpg", type: 'flowers', Class: 'salesItem' , id: '7'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (7).jpg", type: 'flowers', Class: 'salesItem' , id: '8'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (1).jpg", type: 'flowers', Class: 'salesItem' , id: '9'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (3).jpg", type: 'flowers', Class: 'salesItem' , id: '10'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (2).jpg", type: 'flowers', Class: 'salesItem' , id: '11'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (6).jpg", type: 'flowers', Class: 'salesItem' , id: '12'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (7).jpg", type: 'flowers', Class: 'salesItem' , id: '13'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (3).jpg", type: 'flowers', Class: 'salesItem' , id: '14'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (2).jpg", type: 'flowers', Class: 'salesItem' , id: '15'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (1).jpg", type: 'flowers', Class: 'newItem' , id: '16'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3.jpg", type: 'flowers', Class: 'newItem' , id: '17'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3.jpg", type: 'flowers', Class: 'newItem' , id: '18'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (3).jpg", type: 'flowers', Class: 'newItem' , id: '19'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (4).jpg", type: 'flowers', Class: 'newItem' , id: '20'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (5).jpg", type: 'flowers', Class: 'newItem' , id: '21'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (1).jpg", type: 'flowers', Class: 'newItem' , id: '22'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (2).jpg", type: 'flowers', Class: 'newItem' , id: '23'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (7).jpg", type: 'flowers', Class: 'newItem' , id: '24'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (7).jpg", type: 'flowers', Class: 'hit' , id: '25'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (7).jpg", type: 'flowers', Class: 'hit' , id: '26'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3.jpg", type: 'flowers', Class: 'hit' , id: '27'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3.jpg", type: 'flowers', Class: 'hit' , id: '28'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (1).jpg", type: 'flowers', Class: 'hit' , id: '29'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (2).jpg", type: 'flowers', Class: 'hit' , id: '30'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (7).jpg", type: 'flowers', Class: 'hit' , id: '31'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (5).jpg", type: 'flowers', Class: 'hit' , id: '32'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (4).jpg", type: 'flowers', Class: 'hit' , id: '33'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (4).jpg", type: 'flowers', Class: 'hit' , id: '34'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3.jpg", type: 'flowers', Class: 'hit' , id: '35'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (3).jpg", type: 'flowers', Class: 'hit' , id: '36'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (2).jpg", type: 'flowers', Class: 'salesItem', id: '1',},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (2).jpg", type: 'flowers', Class: 'newItem' , id: '2',},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (2).jpg", type: 'flowers', Class: 'hit' , id: '3'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3.jpg", type: 'flowers', Class: 'salesItem' , id: '4'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (1).jpg", type: 'flowers', Class: 'salesItem' , id: '5'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3.jpg", type: 'flowers', Class: 'salesItem' , id: '6'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (3).jpg", type: 'flowers', Class: 'salesItem' , id: '7'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (2).jpg", type: 'flowers', Class: 'salesItem' , id: '8'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (1).jpg", type: 'flowers', Class: 'salesItem' , id: '9'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (7).jpg", type: 'flowers', Class: 'salesItem' , id: '10'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (6).jpg", type: 'flowers', Class: 'salesItem' , id: '11'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (4).jpg", type: 'flowers', Class: 'salesItem' , id: '12'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (5).jpg", type: 'flowers', Class: 'salesItem' , id: '13'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (3).jpg", type: 'flowers', Class: 'salesItem' , id: '14'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (2).jpg", type: 'flowers', Class: 'salesItem' , id: '15'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (1).jpg", type: 'flowers', Class: 'newItem' , id: '16'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3.jpg", type: 'flowers', Class: 'newItem' , id: '17'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (2).jpg", type: 'flowers', Class: 'newItem' , id: '18'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (3).jpg", type: 'flowers', Class: 'newItem' , id: '19'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (4).jpg", type: 'flowers', Class: 'newItem' , id: '20'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (5).jpg", type: 'flowers', Class: 'newItem' , id: '21'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (1).jpg", type: 'flowers', Class: 'newItem' , id: '22'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (7).jpg", type: 'flowers', Class: 'newItem' , id: '23'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (6).jpg", type: 'flowers', Class: 'newItem' , id: '24'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (2).jpg", type: 'flowers', Class: 'hit' , id: '25'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (1).jpg", type: 'flowers', Class: 'hit' , id: '26'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3.jpg", type: 'flowers', Class: 'hit' , id: '27'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3.jpg", type: 'flowers', Class: 'hit' , id: '28'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (2).jpg", type: 'flowers', Class: 'hit' , id: '29'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (3).jpg", type: 'flowers', Class: 'hit' , id: '30'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (1).jpg", type: 'flowers', Class: 'hit' , id: '31'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (1).jpg", type: 'flowers', Class: 'hit' , id: '32'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (4).jpg", type: 'flowers', Class: 'hit' , id: '33'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (5).jpg", type: 'flowers', Class: 'hit' , id: '34'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (6).jpg", type: 'flowers', Class: 'hit' , id: '35'},
      { title: "Basket ‹LA MAMA› with spray roses", oldPrice: 6550,newPrice: 6550, url: "./images/image 3 (7).jpg", type: 'flowers', Class: 'hit' , id: '36'},
    ];
  }
  render() {
  }

}

const cart = []

export {CatalogItem, Catalog, cart}

