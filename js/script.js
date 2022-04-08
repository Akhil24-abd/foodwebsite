let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

if("serviceWorker" in navigator){
   navigator.serviceWorker.register("https://akhil24-abd.github.io/foodwebsite/sw.js")
   .then(()=>{
      console.log("sw registered")
   })
}

var cacheName = 'geeks-cache-v1';
// Call Fetch Event
self.addEventListener('fetch', e => {
console.log('Service Worker: Fetching');
e.respondWith(
fetch(e.request)
.then(res => {
// The response is a stream and in order the browser
// to consume the response and in the same time the
// cache consuming the response it needs to be
// cloned in order to have two streams.
const resClone = res.clone();
// Open cache
caches.open(cacheName)
.then(cache => {
// Add response to cache
cache.put(e.request, resClone);
});
return res;
}).catch(
err => caches.match(e.request)
.then(res => res)
)
);
});

document.querySelector("button").addEventListener("click", async () => {
   var swRegistration = await navigator.serviceWorker.register("sw.js");
   swRegistration.sync.register("helloSync").then(function () {
   console.log("Sync success");
   });
   });
   function displayNotification() {
   if (Notification.permission == 'granted') {
   navigator.serviceWorker.getRegistration().then(function(reg) {
   reg.showNotification('Hello world!');
   });
   }
   }
   function myFunction() {
   const button = document.getElementById('notifications');
   button.addEventListener('click', () => {
   console.log("Ask for permission");
   Notification.requestPermission().then((result) => {
   if (result === 'granted') {
   Notification.requestPermission(function(status) {
   console.log('Notification permission status:', status);
   navigator.serviceWorker.getRegistration().then(function(reg) {
   reg.showNotification('Hello world!');
   });
   });
   }
   });
   })
   }
   
menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".food-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{
   food.onclick = () =>{
      previewContainer.style.display = 'flex';
      let name = food.getAttribute('data-name');
      previewBox.forEach(preveiw =>{
         let target = preveiw.getAttribute('data-target');
         if(name == target){
            preveiw.classList.add('active');
         }
      });
   };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
   previewContainer.style.display = 'none';
   previewBox.forEach(close =>{
      close.classList.remove('active');
   });
};

var swiper = new Swiper(".menu-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});

var swiper = new Swiper(".blogs-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   autoHeight:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});
