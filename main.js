

// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  // console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", function() {


gsap.registerPlugin(ScrollTrigger);

var path = `M 10 100 Q 700 100 1390 100`;
var finalPath = `M 10 100 Q 700 100 1390 100`;

const string = document.querySelector(".string");

string.addEventListener("mousemove", (e) => {
  path = `M 10 100 Q ${e.x} ${e.y*0.7} 1390 100`

  gsap.to("svg path" , {
    attr: {d:path},
    duration: 0.2,
    ease: "power3.out"
  })

})


string.addEventListener("mouseleave" , () => {
  gsap.to("svg path" , {
    attr: {d: finalPath},
    duration: 1.5,
    ease: "elastic.out(1, 0.2)"
  })
})

const container = document.querySelector(".container");
const cursor = document.querySelector(".cursor");
const images = document.querySelectorAll(".overlay");
const page4 = document.querySelector(".page_4");

container.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 0.7,
    ease: "easeIn"

  })
})


images.forEach((image) => {
  image.addEventListener("mouseenter", function(e) {
    gsap.killTweensOf(cursor);
    cursor.innerHTML = "we take things beyond imagination"
    gsap.to(cursor, {
      height: "30px",
      width: "300px",
      duration: 0.7,
      borderRadius: "12px",
      ease: "easeInOut"
    });
  });

  image.addEventListener("mouseleave", function(e) {
    gsap.killTweensOf(cursor);

    cursor.innerHTML = " "


    gsap.to(cursor, {
      height: "20px",
      width: "20px",
      duration: 0.1,
      borderRadius: "50%",
      ease: "easeInOut"
    });
  });
});


page4.addEventListener("mouseenter", () => {
  cursor.style.backgroundColor = "#f30856"; 
});

page4.addEventListener("mouseleave", () => {
  cursor.style.backgroundColor = "#D9FF06"; 
});

window.addEventListener("wheel" , function(e) {
  if(e.deltaY > 0 ){
    gsap.to(".move" , {
      transform: "translateX(-200%)",
      duration: 2,
      repeat: -1,
      ease: "none"
    })

  }else{

    gsap.to(".move" , {
      transform: "translateX(0%)",
      duration: 2,
      repeat: -1,
      ease: "none"
    })

  }
})

var h3Elements = document.querySelectorAll(" h3");

h3Elements.forEach((h3) => {
  var h3text = h3.textContent;
  var splittedh3 = h3text.split("");
  var value = "";

  splittedh3.forEach((item) => {
    value += `<span class="c">${item}</span>`;
  });

  h3.innerHTML = value;
});

gsap.from("h3 .c", {
  y: 90,
  opacity: 0,
  duration: 0.3,
  delay: 0.5,
  stagger: 0.05, 
 
});




var pElements = document.querySelectorAll(".page_2 p");

pElements.forEach((p) => {
  var ptext = p.textContent;
  var splittedp = ptext.split("");
  var value = "";

  splittedp.forEach((item) => {
    value += `<span class="c">${item}</span>`;
  });

  p.innerHTML = value;
});

gsap.from("p .c", {
  y: 20,
  opacity: 0,
  duration: 0.1,
  stagger: 0.05, 
  
});






ScrollTrigger.refresh();

 

const paragraphs = document.querySelectorAll(".page_2 p");

paragraphs.forEach((p) => {
  gsap.from(p, {
    x: 50,
    opacity: 0,
    duration: 0.3,
    stagger: 0.3,
    scrollTrigger: {
      trigger: p,
      scroller: "body",
      start: "top 60%",
      end: "top 30%",   
      scrub: 1,
    },
  });
});

// const tl = gsap.timeline();
  
// tl.from("h3" , {
//   y: 120,
//   opacity: 0,
//   duration: 1.5,
//   delay: 0.5,
//   stagger: 0.2
// })

// tl.from("h4" ,{
//   opacity: 0,
// })




// const tl3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".page_3",
//     scroller: "body",
//     start: "top 75%",
//     end: "top 50%",
//     scrub: 1,
//   },
// });

// tl3.from(".page_3 .up", {
//   x: "100px",
//   opacity: 0,
// }, "text") 

// tl3.from(".page_3 .down", {
//   x: "-100px",
//   opacity: 0,
// }, "text"); 






const tl = gsap.timeline();
tl.from("h3", {
  y: 120,
  opacity: 0,
  duration: 1.5,
  delay: 0.5,
  stagger: 0.2,
})
.from("h4", {
  opacity: 0,
});


const tlPage3 = gsap.timeline({
  scrollTrigger: {
    trigger: "h2",
    scroller: "body",
    start: "top 75%",
    end: "top 50%",
    scrub: true,
    toggleActions: "play none none none",
  },
});

tlPage3.from(".page_3 .up", {
  x: "100px",
  opacity: 0,
}, "text")
.from(".page_3 .down", {
  x: "-100px",
  opacity: 0,
}, "text");



const page4h3 = document.querySelectorAll(".page_4 h3").forEach((p4h3) => {

  // var p4h3text = p4h3.textContent;
  // var splitted_p4h3 = p4h3text.split("");
  // var value = "";

  // splitted_p4h3.forEach((item) => {
  //   value += `<span class="c">${item}</span>`;
  // });

  // p4h3.innerHTML = value;


  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: p4h3,
      scroller: "body",
      start: "top 60%",
      end: "top 20%",
      scrub: 1,
    },
  });

  tl4.from(p4h3 , {
    x: 10,
    opacity: 1,
    duration: 0.3,
    delay: 0.5,
  
  })
  

})
});









