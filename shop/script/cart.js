import {CatalogItem, Catalog} from './index.js'
const catalog = new Catalog
catalog.fetchitems()
catalog.render()

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

    const purchasedItems =  JSON.parse(localStorage.getItem("purchasedItems"))
    localStorage.removeItem('purchasedItems')
    let cartItemsRender = ''

    if(purchasedItems !== null){    purchasedItems.forEach((item) => {
      const cartItem = new CatalogItem(item.title, item.newPrice, item.oldPrice, item.url, item.type, item.Class, item.id, item.count)
      cartItemsRender += cartItem.cartPageRender()
      document.querySelector('.purchases').innerHTML = cartItemsRender
  const initialValue = 0
  const sumWithInitial = purchasedItems.reduce(
    (acc, current) =>acc + current.newPrice,
    initialValue
  )
  document.querySelector('.price').children[1].innerHTML = `${sumWithInitial} ֏`
  document.querySelector('.discount').children[1].innerHTML =`${(sumWithInitial / 100) * 40} ֏`
  document.querySelector('.total').children[1].innerHTML = `${sumWithInitial - ((sumWithInitial / 100) * 40)} ֏`
});}





if (purchasedItems !==null ){
  document.querySelector('.cartIsEmpty').style.display = 'none'
  document.querySelector('.basket').style.display = 'flex'
}

document.querySelector('.confirm').addEventListener("click", ()=>{
  const purchasedItems =  JSON.parse(localStorage.getItem("purchasedItems"))

  localStorage.setItem('prevOrder' , JSON.stringify(purchasedItems))
  document.querySelector('body').insertAdjacentHTML('afterbegin', 
    `<div class="confirmBlock">
      <div class="confirmContainer">
      <h2>Մուտք</h2>
      <button class="closeWindow">&#10006</button>
      <input placeholder="Անուն" type="text"/>
      <input placeholder="Ազգանուն" type="text"/>
      <input placeholder="Էլ. հասցե" type="text"/>
      <input placeholder="Հեռախոսահամար" type="text"/>
      <input placeholder="Փողոց, տուն, բնակարան " type="text"/>

      <h2>Վճարման տեսակ</h2>
      <form class="paymentType">
      <div class="payPal">
          <label class="container">
              <input name="payment" type="radio">
              <span class="checkmark"></span>
          </label>
          <P>PAYPAL</P>
      </div>
      <div class="stripe">
          <label class="container">
              <input name="payment" type="radio">
              <span class="checkmark"></span>
          </label>
          <p>STRIPE</p>
      </div>
  </form>
  <button class="confirmBtn">Գնել</button>
      </div>
    </div>`)
    closeWindConfirm ()

})

async function closeWindConfirm () {
  await document.querySelectorAll(".payPal").forEach((pay)=>{
    pay.addEventListener("click", ()=>{
      pay.children[0].children[0].checked = "true"
    })
  })
  await document.querySelectorAll(".stripe").forEach((pay)=>{
    pay.addEventListener("click", ()=>{
      pay.children[0].children[0].checked = "true"
    })
  })
  const Btn = await document.querySelector('.closeWindow')
  Btn.addEventListener('click', ()=>{
    document.querySelector('.confirmBlock').remove()
  })
}

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


const addressForm = document.querySelector('.address')
const checkbox = addressForm.children[1].children[0]
checkbox.addEventListener("click" ,()=>{
  if(addressForm.children[1].children[0].checked == true){
    document.querySelector('.map').style.display = 'block'
    addressForm.style.height = "fit-content"
    document.querySelectorAll('.address input').forEach((input)=>{
      input.style.display ="none"
    })
  }else{
    document.querySelector('.map').style.display = 'none'
    document.querySelectorAll('.address input').forEach((input)=>{
      input.style.display ="block"
    })
  }
})


document.querySelectorAll(".payPal").forEach((pay)=>{
  pay.addEventListener("click", ()=>{
    pay.children[0].children[0].checked = "true"
  })
})
document.querySelectorAll(".stripe").forEach((pay)=>{
  pay.addEventListener("click", ()=>{
    pay.children[0].children[0].checked = "true"
  })
})

document.querySelectorAll(".purchase").forEach((purchase)=>{
    const minus = purchase.children[4].firstElementChild
    const plus = purchase.children[4].lastElementChild
    let count = purchase.children[4].children[1]
    let amount = 1
    plus.addEventListener("click", ()=>{
      amount++
      count.innerHTML =`${amount}`
    })
    minus.addEventListener("click", ()=>{
      amount--
      if(amount <= 0){
        amount = 0
      }
      count.innerHTML =`${amount}`
    })
  })


  document.querySelectorAll(".delete").forEach((btn)=>{
    btn.addEventListener("click", ()=>{
      btn.parentElement.remove()
      const current = purchasedItems.find(el => el.id === btn.parentElement.id)
      purchasedItems.splice(current , 1)
      const initialValue = 0
      const sumWithInitial = purchasedItems.reduce(
        (acc, current) =>acc + current.newPrice,
        initialValue
      )
      document.querySelector('.price').children[1].innerHTML = `${sumWithInitial} ֏`
      document.querySelector('.discount').children[1].innerHTML =`${(sumWithInitial / 100) * 40} ֏`
      document.querySelector('.total').children[1].innerHTML = `${sumWithInitial - ((sumWithInitial / 100) * 40)} ֏`
        })
  })

document.querySelectorAll('.recepient input').forEach((inp)=>{
  inp.addEventListener("input" , (e)=>{
    e.keyCode == 13
    e.preventDefault()

  })
})