//ресурсы по типу Udemy или Coursera низкооплачиваемые курсы фронтенд

//https://www.w3schools.com/howto/howto_js_lightbox.asp сайт со слайдерами
    /*когда пишу скрипт в футере, в хэде ссылка <script type="text/javascript" src="main.js">>не нужна*/
  let slideIndex = 0;
  showSlides(slideIndex); 

function plusSlides(n) {
  showSlides(slideIndex += n);
}      
function currentSlide(n) {
  showSlides(slideIndex = n);
} 
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (let i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Слайдер Токаревской
let images = [{
    url: "https://img.favcars.com/mini/hatch/mini_hatch_2010_wallpapers_14_1280x960.jpg",
    title: "Mini Cooper черный"
  }, {
    url: "https://img.favcars.com/mini/cabrio/mini_cabrio_2009_pictures_5_1280x960.jpg",
    title: "Mini Cooper красный"
  }, {
    url: "https://www.t-r-n.ru/files/modification-images/cb/a8/5c/f9/40061_tmb940.jpg",
    title: "Mini Cooper синий"
  }, {
    url: "https://i.pinimg.com/736x/c5/d9/14/c5d9142556fe74c49a2c1c2d4ea6d46a.jpg",
    title: "Mini Cooper бордовый"
  },{
    url: "https://postila.ru/data/29/9a/52/00/299a520014c873af8eb5481bce94d635088a70e17ced4352b5f4ff1f0985c616.gif",
    title: "Mini Cooper белый"
  }, {
    url:"https://ru.w3docs.com/uploads/media/default/0001/03/66cf5094908491e69d8187bcf934050a4800b37f.jpeg",
    title: 'City'
  }, {
    url:"https://images.unsplash.com/photo-1661068791384-c2f5d470505a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE3MjMxNzg&ixlib=rb-1.2.1&q=80&w=400",
    title: "LA"
  }, {
    url:"https://images.unsplash.com/photo-1660236860897-5617655e8f47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNjA2OTE&ixlib=rb-1.2.1&q=80&w=400",
    title:'sea' 
  }, {
    url:"https://images.unsplash.com/photo-1661630802936-5ff15855cd1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIwNjEyNjU&ixlib=rb-1.2.1&q=80&w=400",
    title:'buildings'
  }, {
    url:'public/images/3-fig.png',
    title:'city'
  }
  ];

function initSlider(options) {
  if (!images || !images.length) return;
  
  options = options || {
    titles: false,
    dots: true,
    autoplay: false
  };
  
  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__arrows");
  let sliderDots = document.querySelector(".slider__dots");
  
    initImages();
    initArrows();
  
  if (options.dots) {
    initDots();
  }
  
  if (options.titles) {
    initTitles();
  }
  
  if (options.autoplay) {
    initAutoplay();
  }
  
  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}
        "style="background-image:url(${images[index].url});" 
        data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  
  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  
  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }
  
function moveSlider(num) {
  sliderImages.querySelector(".active").classList.remove("active");
  sliderImages.querySelector(".n" + num).classList.add("active");
  if (options.dots) {
  sliderDots.querySelector(".active").classList.remove("active");
  sliderDots.querySelector(".n" + num).classList.add("active");
  }
  if (options.titles) changeTitle(num);
}
  
function initTitles() {
  let titleDiv = `<div class="slider__images-title">${images[0].title}</div>`;
  sliderImages.innerHTML += cropTitle(titleDiv, 50);
}
  
function changeTitle(num) {
  if (!images[num].title) return;
  let sliderTitle = sliderImages.querySelector(".slider__images-title");
  sliderTitle.innerText = cropTitle(images[num].title, 50);
}
  
function cropTitle(title, size) {
  if (title.length <= size) {
    return title;
  } else {
    return title.substr(0, size) + "...";
  }
}
   
function initAutoplay() {
/*отключаем автомат.перелисывания фото
  setInterval(() => {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, options.autoplayInterval);*/
  }
}

let sliderOptions = {
  dots: true,
  titles: true,
  autoplay: true,
  autoplayInterval: 5000
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.imgDropShevronLinkItemListContentHeaderNavig')) {
    var dropdowns = document.getElementsByClassName("dropdownShevron-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Исчезнавение и появление фотки при клике на другой элиментможно так писать, как сделал я
const cardOff = document.querySelector('.cardOffFilterImgHeader');

cardOff.addEventListener('click', () => {//function show
  const photoOff = document.querySelector('.filterImgHeader-2');//Можно спрятать и вернуть любой элемент filterImgHeader 
  if (photoOff.style.display == "block") {
     photoOff.style.display = "none";
      return true;
  } else { // иначе он не найден
    photoOff.style.display = "block";
     return false;
  }
  //alert('hi'); просто для проверки работы кода
});

//можно так писать, как сделал Макс
/*const cardOff = document.querySelector('.cardOff-mountains');

cardOff.addEventListener('click', function show(event) {
event.stopPropagation();//можно не писать
const photoOff = document.querySelector('.photoOff')
if (photoOff.style.display == 'none') {
  photoOff.style.display = 'block';
  } else {
   photoOff.style.display = 'none';
  }
   //alert('hi');         
});*/

//Смена цвета у слов // массив цветов
let colorNames = ["blue", "cyan", "red", "gold", "green", "yellow"];

// функция поиска random-числа
const random = (min, max) => {
  max = colorNames.length - 1;
  const rand = min + Math.round(Math.random() * (max - min));
  return rand;
};

// найти элементы для изменения свойств
let paragraphs = document.getElementsByClassName("item-list__main__invitation");/*если поставить вместо item-list__main__invitation  list__main__invitation, то все буквы будет мигать одинаково*/

// менять цвет каждую секунду, присвоив каждому эл-ту массива paragraphs новое значение
/*setInterval(() => {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = colorNames[random(0)];
  }
}, 3000);
console.log(colorNames);*/

const btn = document.querySelector('.inp3g');
const div = document.querySelector('.btn_icon');
btn.addEventListener('click', () => {
  btn.classList.toggle('btn--magics');
  div.style.animationIterationCount=50;
}); 

document.getElementsByTagName("p")[0].style.fontSize = "4vw";
const p = document.querySelector("p");//[0].style.fontSize = "7vw";
p.addEventListener('mousemove', (event) => {
  p.classList.toggle('p--magic');
  p.style.animationIterationCount=15;//когда подключу при косании мышкой, махнет 15 раз
  p.innerHTML = "👋 HI";//поменяет текст в <р>
  p.style.color = "red";
  //p.style.marginLeft = "90px";
  event.stopPropagation();//чтоб событие не всплывало
  //p.style.transform = "1.05";
});

document.getElementsByTagName("video")[0];// чтоб видео поехало и нужно в цсс подкльчить nimation-duration: 35s;
const video = document.querySelector('.video__one__main');
video.addEventListener('mousemove', (event) => {
event.stopPropagation();//чтоб событие не всплывало 
video.play();// включает видео прикосновение мыши
//video.pause();кода включено вместе с плэй, мышкой можно водить по видео, изображение будет двигаться
video.style.cursor = "pointer";
return true;
});

$(document).ready(function () {
      // обрабатываем нажатие на кнопку
      $("#submit").click(function () {
        // очищаем переменную, в которой будет наш поисковый запрос
        var term = "";
        // и переменную, которая отвечает за количество найденных совпадений
        var n = "0";
        // убираем всю подсветку из прошлого поиска, если она была
        $('body').removeHighlight();
        // скрываем блок с текстом о количестве найденных результатов
        $("h4.results").hide().empty();
        // с помощью магии jQuery берём текст из строки поиска и кладём его в переменную term
        term = $('#term').attr('value');
        // если строка поиска пустая — выводим сообщение
        if ($('#term').val() == "") {
          $("h4.results").fadeIn().append("Вы ничего не ввели :(");
          return false;
          // иначе, если в строке поиска что-то было…
        } else {
          // в блоке content, где у нас находится весь текст, плагином подсвечиваем все найденные совпадения (если совпадений не будет — не будет и подсветки)
          $('.content').highlight(term);
          // берём количество совпадений
          n = $("span.highlight").length;
          // если совпадений нет — в разделе results пишем, что ничего не нашли
          if (n == 0) {
            $("h4.results").fadeIn().append("Ничего такого в тексте нет");
            // иначе в том же разделе пишем число совпадений  
          } else {
            $("h4.results").fadeIn().append('Найдено совпадений:' + n);
          }
          return false;
        }
      });
    });

/* Пока не работает, потому что элементы переплетаются с эл-и др-о слайдера. Нужно разобраться.//Slider - 3 автомат со стопом
var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
  controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide(){
  goToSlide(currentSlide+1);
}

function previousSlide(){
  goToSlide(currentSlide-1);
}

function goToSlide(n){
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');
pauseButton.style.position = "absolute";
pauseButton.style.width = "55px"; //"662px"нужно если делать большую кнопку внизу
pauseButton.style.height = "55px"; //"67px"нужно если делать большую кнопку внизу
pauseButton.style.top = "318px";
pauseButton.style.left = "480px";
pauseButton.style.transform = "rotate(0deg)";

function pauseSlideshow(){
  pauseButton.innerHTML = '&#9658;'; // play character
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow(){
  pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
  playing = true;
  slideInterval = setInterval(nextSlide,5000);
}

pauseButton.onclick = function(){//onmousemove поставить можно, но работает не очень
  if(playing){ pauseSlideshow(); }
  else{ playSlideshow(); }
};

var next = document.getElementById('next');
next.onclick = function(){//onmousemove поставить можно, но работает не очень
  pauseSlideshow();
  nextSlide();
};
next.style.position = "absolute";
next.style.width = "80px";
next.style.height = "616px";
next.style.top = "50px";
next.style.left = "882px";

var previous = document.getElementById('previous');
previous.onclick = function(){//onmousemove поставить можно, но работает не очень
  pauseSlideshow();
  previousSlide(); 
};
previous.style.position = "absolute";
previous.style.width = "80px";
previous.style.height = "616px";
previous.style.top = "50px";
*/
