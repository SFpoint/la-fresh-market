import {CatalogItem, Catalog, cart} from './index.js'
const catalog = new Catalog
catalog.fetchitems()
catalog.render()

let itemRender = ''
catalog.items.forEach((item)=>{
    const Item = new CatalogItem(item.title, item.newPrice, item.oldPrice, item.url, item.type,  item.Class, item.id,)
    itemRender += Item.render()
    document.querySelector('.catalog').innerHTML = itemRender
})

function bannerScroll() {
    const buttons = document.querySelectorAll(".bannerKeyUp")
  const buttonss = document.querySelectorAll('.bannerKeyDown')
  const targets = document.querySelectorAll('.bannerImg')
  
  targets.forEach((target)=>{
    let count = 0;
    setInterval(() => {
      count++
      target.scrollTo({
        left: target.clientWidth * count,
        behavior: 'smooth'
      })
    if(count>=5){
      target.scrollTo({
        left: 0,
        behavior: 'smooth'
      })
      count = 0
    }
    }, 1500);
    buttonss.forEach((button) =>{
      button.addEventListener('click' , function(){
        count--
        target.scrollTo({
          left: target.clientWidth * count,
          behavior: "smooth"
        })
        if(count<=0){
          count=5
        }
      } )
    })
    buttons.forEach((button)=>{
      button.addEventListener("click" ,function(){
      count++
      target.scrollTo({
        left: target.clientWidth * count,
        behavior: "smooth"
      })
      if(count>=5){
        count = 0
        target.scrollTo({
          left: 0,
          behavior: 'smooth'
        })
      }
      } )
    })
  })
  }

  function addSalesitem() {
    const buttons = document.querySelectorAll(".addsalesItem")
    buttons.forEach((button)=>{
        button.addEventListener("click", (event)=>{
        button.nextElementSibling.style.display = 'flex'
        button.style.display = 'none'
        const current = event.target.parentElement.parentElement.parentElement
        const item = catalog.items.find((el) =>
          el.id === current.id
        )
        cart.push(item)
        cartRender()
    })
    })
  
    document.querySelectorAll('.addssalesItem').forEach((add)=>{
      const minus = add.firstElementChild
      const plus = add.lastElementChild
      let count = add.children[1]
      let currentCount = 1
      count.innerHTML = `${currentCount}`
      function Counter() {
          count.innerHTML = `${currentCount}`
      }
      
      minus.addEventListener("click" , (event)=>{
        const current = event.target.parentElement.parentElement.parentElement.parentElement
        const item = catalog.items.find((el) =>
          el.id === current.id
        )
          currentCount--
          if(currentCount >= 0){
            cart.splice( item , 1)
          }
          if(currentCount <= 0)
          {
            currentCount= 0
          }
          Counter()
      })
      plus.addEventListener("click" , (event)=>{
        const current = event.target.parentElement.parentElement.parentElement.parentElement
        const item = catalog.items.find((el) =>
          el.id = current.id
        )
        cart.push(item)
            currentCount++
  
          Counter()
      })
      
  
  })
  }
  function addNewProduct(){
    const buttons = document.querySelectorAll('.addnewItem')
    buttons.forEach((button)=>{
    button.addEventListener("click", (event)=>{
    button.nextElementSibling.style.display = 'flex'
    button.style.display = 'none'
        const current = event.target.parentElement.parentElement.parentElement
        const item = catalog.items.find((el) =>
          el.id === current.id
        )
        cart.push(item)
        cartRender()

})
})
    document.querySelectorAll('.addsnewItem').forEach((add)=>{
      const minus = add.firstElementChild
      const plus = add.lastElementChild
      let count = add.children[1]
      let currentCount = 1
      count.innerHTML = `${currentCount}`
      function Counter() {
          count.innerHTML = `${currentCount}`
      }
      minus.addEventListener("click" , (event)=>{
        const current = event.target.parentElement.parentElement.parentElement.parentElement
        const item = catalog.items.find((el) =>
          el.id === current.id
        )
          currentCount--
          if(currentCount >=0){
            cart.splice(item , 1)
          }
          if(currentCount <= 0)
          {
            currentCount= 0
          }
          Counter()
      })
      plus.addEventListener("click" , (event)=>{
        const current = event.target.parentElement.parentElement.parentElement.parentElement
        const item = catalog.items.find((el) =>
        el.id === current.id
      )
          currentCount++
          cart.push(item)
          Counter()
      })
    

})
  }
  function addHit() {
    const buttons = document.querySelectorAll('.addhit')
    buttons.forEach((button)=>{
        button.addEventListener("click", (event)=>{
        button.nextElementSibling.style.display = 'flex'
        button.style.display = 'none'
            const current = event.target.parentElement.parentElement.parentElement
            const item = catalog.items.find((el) =>
            el.id === current.id
          )
            cart.push(item)
            cartRender()

    })
    })
        document.querySelectorAll('.addshit').forEach((add)=>{
          const minus = add.firstElementChild
          const plus = add.lastElementChild
          let count = add.children[1]
          let currentCount = 1
          count.innerHTML = `${currentCount}`
          function Counter() {
              count.innerHTML = `${currentCount}`
          }
          minus.addEventListener("click" , (event)=>{
            const current = event.target.parentElement.parentElement.parentElement.parentElement
            const item = catalog.items.find((el) =>
            el.id === current.id
          )
              currentCount--
              if(currentCount >=0){
                cart.splice(item , 1)
              }
              if(currentCount <= 0)
              {
                currentCount= 0
              }
              Counter()
          })
          plus.addEventListener("click" , (event)=>{
            const current = event.target.parentElement.parentElement.parentElement.parentElement
            const item = catalog.items.find((el) =>
            el.id === current.id
          )
              currentCount++
              cart.push(item)
              Counter()
          })
        

    })
  }




function pagination() {
  const pageBar = document.querySelector('.pagination')
  const previous = pageBar.children[0]
  const first = pageBar.children[1]
  const second = pageBar.children[2]
  const third = pageBar.children[3]
  const fourth = pageBar.children[4]
  const fith = pageBar.children[5]
  const sixth = pageBar.children[6]
  const next = pageBar.children[7]
  const catalog = pageBar.previousElementSibling
  let count = 0 
  previous.addEventListener('click', ()=>{
    count--
    catalog.scrollTo({
      left: catalog.clientWidth * count,
      behavior: "smooth"
    })
    if(count<=0){
      count=0
    }
    pageBar.children[count+1].className ='active'
    pageBar.children[count+2].className =''
  })
  next.addEventListener('click', ()=>{
    count++
    catalog.scrollTo({
      left: catalog.clientWidth * count,
      behavior: "smooth"
    })
    if(count>=5){
      count=5
    }
    pageBar.children[count+1].className ='active'
    pageBar.children[count].className =''

  })
  first.addEventListener("click", ()=>{
    pageBar.children[count+1].className = ''
    first.className = 'active'
    count = 0
    catalog.scrollTo({
      left: catalog.clientWidth * count,
      behavior: "smooth"
    })
  })
  second.addEventListener("click", ()=>{
    pageBar.children[count+1].className = ''
    second.className = 'active'
    count = 1
    catalog.scrollTo({
      left: catalog.clientWidth * count,
      behavior: "smooth"
    })
  })
  third.addEventListener("click", ()=>{
    pageBar.children[count+1].className = ''
    third.className = 'active'
    count = 2
    catalog.scrollTo({
      left: catalog.clientWidth * count,
      behavior: "smooth"
    })
  })
  fourth.addEventListener("click", ()=>{
    pageBar.children[count+1].className = ''
    fourth.className = 'active'
    count = 3
    catalog.scrollTo({
      left: catalog.clientWidth * count,
      behavior: "smooth"
    })
  })
  fith.addEventListener("click", ()=>{
    pageBar.children[count+1].className = ''
    fith.className = 'active'
    count = 4
    catalog.scrollTo({
      left: catalog.clientWidth * count,
      behavior: "smooth"
    })
  })
  sixth.addEventListener("click", ()=>{
    pageBar.children[count+1].className = ''
    sixth.className = 'active'
    count = 5
    catalog.scrollTo({
      left: catalog.clientWidth * count,
      behavior: "smooth"
    })
  })
}

  addSalesitem()
  addNewProduct()
  addHit()
  pagination()
  bannerScroll()

  document.querySelector('.register').addEventListener('click', ()=>{
    document.querySelector('body').insertAdjacentHTML('afterbegin', 
    `<div class="registerBlock">
      <div class="registerContainer">
      <h2>Գրանցում</h2>
      <button class="closeWindow">&#10006</button>
      <input placeholder="Անուն" class="registerInput" type="text"/>
      <input placeholder="Ազգանուն" class="registerInput" type="text"/>
      <input placeholder="Էլ. հասցե" type="text"/>
      <input placeholder="Գաղտնաբառ" type="text"/>
      <div class="privacyPolicy">
      <label class="container">
        <input type="checkbox" checked="checked">
        <span class="checkmark"></span>
      </label>  
      <p>Ես ընդոնում եմ <a href="#">օգտագործման համաձայնագիրը</a></p>
      </div>
      <button class="registrBtn">Գրանցվել</button>
      <p>Սոց ցանցերի ոգնությամբ</p>
      <div class="mediaSocial">
      <div class="media"><svg width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.3322 9.04167H10.1938V12.5312H15.6971C15.5961 13.1042 15.3436 13.6771 14.9902 14.25C14.5358 15.0312 13.9805 15.6042 13.2736 16.0208C12.3648 16.5417 11.355 16.8021 10.1938 16.8021C9.08306 16.8021 8.07329 16.5417 7.16449 15.9688C6.2557 15.4479 5.49837 14.6667 4.99349 13.6771C4.43811 12.7396 4.18567 11.6458 4.18567 10.5C4.18567 9.35417 4.43811 8.3125 4.99349 7.32292C5.49837 6.38542 6.2557 5.60417 7.16449 5.03125C8.07329 4.51042 9.08306 4.19792 10.1938 4.19792C11.7085 4.19792 13.0212 4.71875 14.0309 5.70833L16.6564 3.10417C14.8388 1.38542 12.7182 0.5 10.1938 0.5C8.42671 0.5 6.81107 0.96875 5.29642 1.85417C3.78176 2.79167 2.62052 3.98958 1.76222 5.5C0.903909 7.0625 0.5 8.72917 0.5 10.5C0.5 12.3229 0.903909 13.9896 1.76222 15.5C2.62052 17.0625 3.78176 18.2604 5.29642 19.1458C6.81107 20.0833 8.42671 20.5 10.1938 20.5C12.0114 20.5 13.627 20.0833 15.0407 19.25C16.4544 18.4167 17.5147 17.2708 18.3225 15.8125C19.0798 14.3542 19.4837 12.6354 19.4837 10.7083C19.4837 10.1875 19.4332 9.66667 19.3322 9.04167ZM28.6726 9.40625H31.5V12.3229H28.6726V15.2396H25.8453V12.3229H23.0684V9.40625H25.8453V6.48958H28.6726V9.40625Z" fill="#323232"/>
      </svg></div>
      <div class="media"><svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5836 15.125L14.2964 10.4531H9.76545V7.40625C9.76545 6.08594 10.3764 4.86719 12.4127 4.86719H14.5V0.855469C14.5 0.855469 12.6164 0.5 10.8345 0.5C7.11818 0.5 4.67455 2.78516 4.67455 6.84766V10.4531H0.5V15.125H4.67455V26.5H9.76545V15.125H13.5836Z" fill="#323232"/>
      </svg>
      </div>
  
      </div>
      </div>
    </div>`)
    closeWindRegister ()
  })
  
  
  async function closeWindRegister () {
    const Btn = await document.querySelector('.closeWindow')
    Btn.addEventListener('click', ()=>{
      document.querySelector('.registerBlock').remove()
    })
  }
  
  document.querySelector('.logIn').addEventListener('click', ()=>{
    document.querySelector('body').insertAdjacentHTML('afterbegin', 
    `<div class="logInBlock">
      <div class="logInContainer">
      <h2>Մուտք</h2>
      <button class="closeWindow">&#10006</button>
      <input placeholder="Էլ. հասցե" type="text"/>
      <input placeholder="Գաղտնաբառ" type="text"/>
      <a>Մոռագել եք գաղտնաբառը</a>
      <button class="logInBtn">Գրանցվել</button>
      <p>Սոց ցանցերի ոգնությամբ</p>
      <div class="mediaSocial">
      <div class="media"><svg width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.3322 9.04167H10.1938V12.5312H15.6971C15.5961 13.1042 15.3436 13.6771 14.9902 14.25C14.5358 15.0312 13.9805 15.6042 13.2736 16.0208C12.3648 16.5417 11.355 16.8021 10.1938 16.8021C9.08306 16.8021 8.07329 16.5417 7.16449 15.9688C6.2557 15.4479 5.49837 14.6667 4.99349 13.6771C4.43811 12.7396 4.18567 11.6458 4.18567 10.5C4.18567 9.35417 4.43811 8.3125 4.99349 7.32292C5.49837 6.38542 6.2557 5.60417 7.16449 5.03125C8.07329 4.51042 9.08306 4.19792 10.1938 4.19792C11.7085 4.19792 13.0212 4.71875 14.0309 5.70833L16.6564 3.10417C14.8388 1.38542 12.7182 0.5 10.1938 0.5C8.42671 0.5 6.81107 0.96875 5.29642 1.85417C3.78176 2.79167 2.62052 3.98958 1.76222 5.5C0.903909 7.0625 0.5 8.72917 0.5 10.5C0.5 12.3229 0.903909 13.9896 1.76222 15.5C2.62052 17.0625 3.78176 18.2604 5.29642 19.1458C6.81107 20.0833 8.42671 20.5 10.1938 20.5C12.0114 20.5 13.627 20.0833 15.0407 19.25C16.4544 18.4167 17.5147 17.2708 18.3225 15.8125C19.0798 14.3542 19.4837 12.6354 19.4837 10.7083C19.4837 10.1875 19.4332 9.66667 19.3322 9.04167ZM28.6726 9.40625H31.5V12.3229H28.6726V15.2396H25.8453V12.3229H23.0684V9.40625H25.8453V6.48958H28.6726V9.40625Z" fill="#323232"/>
      </svg></div>
      <div class="media"><svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5836 15.125L14.2964 10.4531H9.76545V7.40625C9.76545 6.08594 10.3764 4.86719 12.4127 4.86719H14.5V0.855469C14.5 0.855469 12.6164 0.5 10.8345 0.5C7.11818 0.5 4.67455 2.78516 4.67455 6.84766V10.4531H0.5V15.125H4.67455V26.5H9.76545V15.125H13.5836Z" fill="#323232"/>
      </svg>
      </div>
  
      </div>
      </div>
    </div>`)
    closeWindLogIn ()
  })
  
  async function closeWindLogIn () {
    const Btn = await document.querySelector('.closeWindow')
    Btn.addEventListener('click', ()=>{
      document.querySelector('.logInBlock').remove()
    })
  }
  
  document.querySelector('.forgot').addEventListener('click', ()=>{
    document.querySelector('body').insertAdjacentHTML('afterbegin', 
    `<div class="forgotPasBlock">
      <div class="forgotPasContainer">
      <h2>Մոռացել եք գաղտնաբառը</h2>
      <button class="closeWindow">&#10006</button>
      <input placeholder="Էլ. հասցե" type="text"/>
      <button class="forgotPasBtn">Գրանցվել</button>
      <p>Սոց ցանցերի ոգնությամբ</p>
      </div>
    </div>`)
    closeWindForgotPas ()
    pasReset()
  })
  
  async function closeWindForgotPas () {
    const Btn = await document.querySelector('.closeWindow')
    Btn.addEventListener('click', ()=>{
      document.querySelector('.forgotPasBlock').remove()
    })
  }
  
  async function pasReset(){
    await document.querySelector('.forgotPasBtn').addEventListener('click', ()=>{
      document.querySelector('body').insertAdjacentHTML('afterbegin', 
    `<div class="pasResetBlock">
      <div class="pasResetContainer">
      <h2>Մոռացել եք գաղտնաբառը</h2>
      <button class="closeWindow">&#10006</button>
      <div class="pasResetPasswordInput">
      <input placeholder="Նոր գաղտնաբառ" type="password">
      <button><img src="./images/eye-slash.png" alt="img"></button>   
  </div>
  <div class="pasResetPasswordInput">
      <input placeholder="Կրկնել գաղտնաբառը" type="password">
      <button><img src="./images/eye-slash.png" alt="img"></button> 
  </div>
      <button class="pasResetBtn">Գրանցվել</button>
      </div>
    </div>`)
    document.querySelector('.forgotPasBlock').remove()
    showPas()
    closeWindpsaReset ()
    })}
  
  
    async function closeWindpsaReset () {
      const Btn = await document.querySelector('.closeWindow')
      Btn.addEventListener('click', ()=>{
        document.querySelector('.pasResetBlock').remove()
      })
    }


  const newArr = Array.from(document.querySelector('.catalog').children)
  
  newArr.forEach((item)=>{
    item.children[0].addEventListener('click' ,(event)=>{
      const current = event.target.parentElement.parentElement
      const item = catalog.items.find((el) =>
      el.id === current.id
    )

    localStorage.setItem("viewedItem", JSON.stringify(item));
    JSON.parse(localStorage.getItem("viewedItem"));
    })
  })

  
  function cartRender() {
    let arr = []
    if(localStorage.getItem("purchasedItems") !== null){
      arr = JSON.parse(localStorage.getItem("purchasedItems"))
      let cartListRender =''
    arr.forEach((item)=>{
      const miniCartItem = new CatalogItem(item.title, item.newPrice, item.oldPrice, item.url, item.type,  item.Class, item.id)
      cartListRender += miniCartItem.miniCartRender()   

    })
    document.querySelector('.cart').innerHTML = cartListRender
      localStorage.removeItem("purchasedItems")
    }else{
      arr = cart
      const miniCart = arr.reduce(( acc , current) =>{
        if (acc.includes(current)){
          return acc 
        }
        else{
          return [...acc, current]
        }
      },[])
      let cartListRender =''
      const initialValue = 0
      const sumWithInitial = cart.reduce(
        (acc, current) =>acc + current.newPrice,
        initialValue
      )
      document.querySelector(".order").children[0].children[0].innerHTML = `<p>Պատվիրել</p> <span>${sumWithInitial}</span>`
    miniCart.forEach((item)=>{
      const miniCartItem = new CatalogItem(item.title, item.newPrice, item.oldPrice, item.url, item.type,  item.Class, item.id)
      cartListRender += miniCartItem.miniCartRender()   
    })
    document.querySelector('.cart').innerHTML = cartListRender
    }
    cartItems()
  }
  
  cartRender()
    document.querySelector('.order').addEventListener('click', ()=>{
      let arr = []
      if(localStorage.getItem("purchasedItems") !== null){
        arr = JSON.parse(localStorage.getItem("purchasedItems"))
        const miniCart = arr.reduce(( acc , current) =>{
          if (acc.includes(current)){
            return acc 
          }
          else{
            return [...acc, current]
          }
        },[])
        localStorage.removeItem("purchasedItems")
        localStorage.setItem("purchasedItems", JSON.stringify(miniCart));
      }else{
        arr = cart
        const miniCart = arr.reduce(( acc , current) =>{
          if (acc.includes(current)){
            return acc 
          }
          else{
            return [...acc, current]
          }
        },[])
        localStorage.setItem("purchasedItems", JSON.stringify(miniCart));
      }
    
    })

    async function showPas() {
      await     document.querySelectorAll('.pasResetPasswordInput').forEach((el)=>{
          const input = el.children[0]
          const button =el.children[1]
          button.addEventListener("click", ()=>{
           if(input.type === "password"){
               input.type = 'text'
           }else{input.type = 'password'}
          })
       })
  }



  
  const favs = []
  document.querySelectorAll(".heart").forEach((heart)=>{
    heart.addEventListener("click", ()=>{
      const item = catalog.items.find((el) =>
      el.id === heart.parentElement.id
    )  
      if(heart.children[0].style.fill == ""){
        favs.push(item)
        localStorage.setItem("favourites", JSON.stringify(favs));
        heart.children[0].style.fill = "#EE0630"
      }else{
        heart.children[0].style.fill = ""
        favs.splice(item , 1)
      }
  })
  })


  function ListRender() {
    const hitList = [];
    let hitListRender = "";
    catalog.items.forEach((item) =>{
      if(item.Class === 'hit'){
        hitList.push(Object.assign(item))
      }
    })
  
    hitList.forEach((item) => {
      const hit = new CatalogItem(item.title, item.newPrice, item.oldPrice, item.url, item.type, item.Class, item.id,)
      hitListRender += hit.render()
      document.querySelector('.hitList').innerHTML = hitListRender
  
    })
    function addHit() {
      const buttons = document.querySelectorAll('.addhit')
      buttons.forEach((button)=>{
          button.addEventListener("click", (event)=>{
          button.nextElementSibling.style.display = 'flex'
          button.style.display = 'none'
              const current = event.target.parentElement.parentElement.parentElement
              const item = catalog.items.find((el) =>
              el.id === current.id
            )
              cart.push(item)
              cartRender()
      })
      })
          document.querySelectorAll('.addshit').forEach((add)=>{
            const minus = add.firstElementChild
            const plus = add.lastElementChild
            let count = add.children[1]
            let currentCount = 1
            count.innerHTML = `${currentCount}`
            function Counter() {
                count.innerHTML = `${currentCount}`
                const initialValue = 0
                const sumWithInitial = cart.reduce(
                  (acc, current) =>acc + current.newPrice,
                  initialValue
                )
                document.querySelector(".order").children[0].children[0].innerHTML = `<p>Պատվիրել</p> <span>${sumWithInitial}</span>`
            }
            minus.addEventListener("click" , (event)=>{
              const current = event.target.parentElement.parentElement.parentElement.parentElement
              const item = catalog.items.find((el) =>
              el.id === current.id
            )
                currentCount--
                if(currentCount >=0){
                  cart.splice(item , 1)
                }
                if(currentCount <= 0)
                {
                  document.getElementById(`purchase${current.id}`).remove()
                  add.previousElementSibling.style.display = "block"
                  currentCount= 0
                }
                if(add.previousElementSibling.style.display == "block"){
                  currentCount = 1
                }
                Counter()
            })
            plus.addEventListener("click" , (event)=>{
              const current = event.target.parentElement.parentElement.parentElement.parentElement
              const item = catalog.items.find((el) =>
              el.id === current.id
            )
                currentCount++
                cart.push(item)
                Counter()
            })
          
  
      })
    }
    addSalesitem()
    addNewProduct()
    addHit()
  }
  ListRender()


  const hitslider = document.querySelector('.hitList');
  let hitmouseDown = false;
  let hitstartX, hitscrollLeft;
  
  let hitstartDragging = function (e) {
    hitmouseDown = true;
    hitstartX = e.pageX - hitslider.offsetLeft;
    hitscrollLeft = hitslider.scrollLeft;
  };
  let hitstopDragging = function (event) {
    hitmouseDown = false;
  };
  
  hitslider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!hitmouseDown) { return; }
    const x = e.pageX - hitslider.offsetLeft;
    const scroll = x - hitstartX;
    hitslider.scrollLeft = hitscrollLeft - scroll;
  });
  
  // Add the event listeners
  hitslider.addEventListener('mousedown', hitstartDragging, false);
  hitslider.addEventListener('mouseup', hitstopDragging, false);
  hitslider.addEventListener('mouseleave', hitstopDragging, false);

  
  function hitScroll() {
    const hit = document.querySelector('.hits')
    let count = 0
    
    hit.children[0].addEventListener('click',  function(){
        count--
      hit.children[1].scrollTo({
        left: hit.clientWidth  * count,
        behavior: "smooth"
      })
      if (count < 0){
        count =0
      }
    })
    
    
    hit.children[2].addEventListener('click',  function(){
      count++
      hit.children[1].scrollTo({
        left: hit.clientWidth * count,
        behavior: "smooth"
      })
      if(count +1  > Math.round(hit.children[1].children.length / 5)){
        count =  Math.round(hit.children[1].children.length / 5) -1
      }
    })
    }
    hitScroll()


    async function cartItems() {
      await document.querySelectorAll(".purchase").forEach((purchase)=>{
        const minus = purchase.children[2].firstElementChild
        const plus = purchase.children[2].lastElementChild
        let count = purchase.children[2].children[1]
        const item = document.getElementById(`${purchase.id.replace("purchase", '')}`)
        let amount = item.children[2].children[0].lastElementChild.children[1].innerHTML
        plus.addEventListener("click", ()=>{
          amount++
          count.innerHTML =`${amount}`
          item.children[2].children[0].lastElementChild.children[1].innerHTML = `${amount}`
        })
        minus.addEventListener("click", ()=>{
          amount--
          if(amount <= 0){
            amount = 0
          }
          count.innerHTML =`${amount}`
          item.children[2].children[0].lastElementChild.children[1].innerHTML = `${amount}`
        })
      })
    }