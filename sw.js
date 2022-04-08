self.addEventListener('install' , (event)=>{
    console.log("sw is installed")
    event.waitUntil(
    caches.open("static")
    .then((Cache)=>{
        Cache.addAll([
            'https://akhil24-abd.github.io/foodwebsite/',
            'https://akhil24-abd.github.io/foodwebsite/js/script.js',
            'https://akhil24-abd.github.io/foodwebsite/css/style.css',
            'https://akhil24-abd.github.io/foodwebsite/images/about-icon-1.png',
            'https://akhil24-abd.github.io/foodwebsite/images/about-icon-2.png',
            'https://akhil24-abd.github.io/foodwebsite/images/about-icon-3.png',
            'https://akhil24-abd.github.io/foodwebsite/images/about-icon-4.png',
            'https://akhil24-abd.github.io/foodwebsite/images/about-img-1.png',
            'https://akhil24-abd.github.io/foodwebsite/images/about-img.png',
            'https://akhil24-abd.github.io/foodwebsite/images/blog-img-1.jpg',
            'https://akhil24-abd.github.io/foodwebsite/images/blog-img-2.jpg',
            'https://akhil24-abd.github.io/foodwebsite/images/blog-img-3.jpg',
            'https://akhil24-abd.github.io/foodwebsite/images/blog-img-4.jpg',
            'https://akhil24-abd.github.io/foodwebsite/images/blog-img-5.jpg',
            'https://akhil24-abd.github.io/foodwebsite/images/blog-img-6.jpg',
            'https://akhil24-abd.github.io/foodwebsite/images/food-galler-img-1.jpg',
            'https://akhil24-abd.github.io/foodwebsite/images/food-galler-img-2.jpg',
            'https://akhil24-abd.github.io/foodwebsite/images/food-galler-img-3.jpg',
            'https://akhil24-abd.github.io/foodwebsite/images/food-galler-img-4.jpg',
            'https://akhil24-abd.github.io/foodwebsite/images/food-galler-img-5.jpg',
            'https://akhil24-abd.github.io/foodwebsite/images/food-galler-img-6.jpg',
            'https://akhil24-abd.github.io/foodwebsite/images/food-img-1.png',
            'https://akhil24-abd.github.io/foodwebsite/images/food-img-2.png',
            'https://akhil24-abd.github.io/foodwebsite/images/food-img-3.png',
            'https://akhil24-abd.github.io/foodwebsite/images/food-img-4.png',
            'https://akhil24-abd.github.io/foodwebsite/images/food-img-5.png',
            'https://akhil24-abd.github.io/foodwebsite/images/home-slide-1.jpg',
            'https://akhil24-abd.github.io/foodwebsite/images/home-slide-2.jpg',
            'https://akhil24-abd.github.io/foodwebsite/images/home-slide-3.jpg'
        ]).catch((error)=>{
            console.log(error)
        })
    })
    );
})

self.addEventListener('activate' , ()=>{
    console.log("sw is Activated")
})

