var mySwiper = new Swiper('#swiper1', {
  autoplay: true, //可选选项，自动滑动
  loop: true,
  pagination: {
    el: '.swiper-pagination1',
  },
})

//如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
// new Swiper('.swiper')
// var mySwiper = document.querySelector('.swiper').swiper
// mySwiper.slideNext()
