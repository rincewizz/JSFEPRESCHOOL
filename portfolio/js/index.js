
let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");

function showMenu(){
    burger.classList.toggle("burger--active");
    menu.classList.toggle("menu--show");
    document.body.classList.toggle("body--menu-open");
}
function hideMenu(e){
    if(e.target && e.target.classList.contains("menu__link")) {
        showMenu();
    }
}


burger.addEventListener("click", showMenu, false);
menu.addEventListener("click", hideMenu, false);


let btnWinter = document.querySelector(".button--winter");
let btnSpring = document.querySelector(".button--spring");
let btnSummer = document.querySelector(".button--summer");
let btnAutumn = document.querySelector(".button--autumn");

btnWinter.addEventListener("click", (e)=> showGallery({category:"winter", btn:e.target}) );
btnSpring.addEventListener("click", (e)=> showGallery({category:"spring", btn:e.target}) );
btnSummer.addEventListener("click", (e)=> showGallery({category:"summer", btn:e.target}) );
btnAutumn.addEventListener("click", (e)=> showGallery({category:"autumn", btn:e.target}) );

function showGallery({path="./gallery/", category, imgs=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"], btn=null}){
    
    document.querySelectorAll(".portfolio__btn").forEach( el => el.classList.add("button--border") );
    btn.classList.remove("button--border");

    let gallery = document.querySelector(".gallery__photos");
    gallery.innerHTML="";
    for(img of imgs){
        gallery.innerHTML+=`<a href="${path}${category}/${img}" class="gallery__link">
                            <img src="${path}${category}/${img}" alt="photo${img}" class="gallery__img">
                           </a>`;
    }
}


let langEn = document.querySelector(".lang__link--en");
let langRu = document.querySelector(".lang__link--ru");

langEn.addEventListener("click", (e)=> { e.preventDefault(); translate("en"); } );
langRu.addEventListener("click", (e)=> { e.preventDefault(); translate("ru"); } );

function translate(lang){
    for( [key,val] of Object.entries(i18Obj[lang]) ){
        document.querySelectorAll(`*[data-i18n="${key}"]`).forEach( el => el.innerText=val);
    }
    langEn.classList.toggle("lang__link--active");
    langRu.classList.toggle("lang__link--active");
    
}


/*
let selfcheck =`
Score: 85/75

✅ Вёрстка соответствует макету. Ширина экрана 768px +48
    🞦 блок <header> +6
    🞦 секция hero +6
    🞦 секция skills +6
    🞦 секция portfolio +6
    🞦 секция video +6
    🞦 секция price +6
    🞦 секция contacts +6
    🞦 блок <footer> +6
✅ Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15
    🞦 нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5
    🞦 нет полосы прокрутки при ширине страницы от 768рх до 480рх +5
    🞦 нет полосы прокрутки при ширине страницы от 480рх до 320рх +5
✅ На ширине экрана 768рх и меньше реализовано адаптивное меню +22
    🞦 при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2
    🞦 при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4
    🞦 высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4
    🞦 при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4
    🞦 бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2
    🞦 ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2
    🞦 при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4
`;
console.log(selfcheck); 
*/