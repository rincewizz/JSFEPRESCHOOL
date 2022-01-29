
document.addEventListener("DOMContentLoaded", () => {
    let theme = localStorage.getItem('theme');
    let lang = localStorage.getItem('lang');

    if(theme && theme=="light"){
        switchTheme();
    }
    if(lang){
       translate(lang);
    }
});

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

btnWinter.addEventListener("click", (e)=> showGallery({category:"winter", btn:e.target}) );
btnSpring.addEventListener("click", (e)=> showGallery({category:"spring", btn:e.target}) );
btnSummer.addEventListener("click", (e)=> showGallery({category:"summer", btn:e.target}) );
btnAutumn.addEventListener("click", (e)=> showGallery({category:"autumn", btn:e.target}) );



let langEn = document.querySelector(".lang__link--en");
let langRu = document.querySelector(".lang__link--ru");

function translate(lang){
    for( [key,val] of Object.entries(i18Obj[lang]) ){
        document.querySelectorAll(`*[data-i18n="${key}"]`).forEach( el => el.innerText=val);
    }
    langEn.classList.toggle("lang__link--active");
    langRu.classList.toggle("lang__link--active");

    localStorage.setItem('lang', lang);
}

langEn.addEventListener("click", (e)=> { e.preventDefault(); translate("en"); } );
langRu.addEventListener("click", (e)=> { e.preventDefault(); translate("ru"); } );


let themeBtn = document.querySelector(".theme-toggle");
themeBtn.addEventListener("click", switchTheme );

function switchTheme(){
    document.body.classList.toggle("body--white");
    let isWhite = document.body.classList.contains("body--white");
    localStorage.setItem('theme', isWhite ? "light" : "dark");
}


let btnsRipple = document.querySelectorAll('.button--ripple');

btnsRipple.forEach( el => { el.addEventListener('click', function (e) {
        const x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        const y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;

        const btnTop = e.target.offsetTop;
        const btnLeft = e.target.offsetLeft;

        const xInside = x - btnLeft;
        const yInside = y - btnTop;

        const circle = document.createElement('span');
        circle.classList.add('button__circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    });

});


let selfcheck =`
Score: 85/75

✅ Смена изображений в секции portfolio +25
    🞦 при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием +20
    🞦 кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5
✅ Перевод страницы на два языка +25
    🞦 при клике по надписи ru англоязычная страница переводится на русский язык +10
    🞦 при клике по надписи en русскоязычная страница переводится на английский язык +10
    🞦 надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем +5
✅ Переключение светлой и тёмной темы +25
    🞦 Блоки и секции header, hero, contacts, footer остались без изменений, в оставшихся секциях цвет фона и шрифта поменялись местами: фон стал белым, шрифт черным Макет в figma - светлая тема - 1
    🞦 На страницу добавлен переключатель при клике по которому:
        🟇 тёмная тема приложения сменяется светлой +10
        🟇 светлая тема приложения сменяется тёмной +10
        🟇 после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5
✅ Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5
✅ Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5
`;
console.log(selfcheck); 
