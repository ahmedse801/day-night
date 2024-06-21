let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mauntains3 = document.getElementById('mauntains3');
let mauntains4 = document.getElementById('mauntains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let CODE = document.querySelector('.code');;





window.onscroll = function () {
    let value = scrollY ;
    stars.style.left = value + 'px';
    boat.style.left = value * 3 + 'px';
    moon.style.top = value *3 + 'px';
    mauntains3.style.top = value *1.5 + 'px';
    mauntains4.style.top = value *1.2 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    CODE.style.fontSize = value  + 'px';
    if(scrollY >= 68) {
        CODE.style.fontSize = 68  + 'px';
        // CODE.style.position = 'fixed';
      }
      if(scrollY >= 170 ) {
        document.querySelector('.main').style.background = 'linear-gradient(to top, #87b6d3, transparent)' ;


      }else {
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)' ;
      }
   
   
}