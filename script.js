function navAnimation(){
    var nav = document.querySelector("nav");

nav.addEventListener("mouseenter", function(){
    let timeline = gsap.timeline();

    timeline.to("#nav-bottom",{
        height:"21vh"
    })
    timeline.to(".nav-part2 h5",{
        display:"block",
        duration: 0.1
    })
    timeline.to(".nav-part2 h5 span",{
        y:0,
        stagger:{
            amount:0.4
        }
    })
})

nav.addEventListener("mouseleave", function(){
    let timeline = gsap.timeline();

    timeline.to(".nav-part2 h5 span",{
        y:25,
        stagger:{
            amount:0.2
        }
    })
    timeline.to(".nav-part2 h5",{
        display:"none",
        duration:0.1
    })
    timeline.to("#nav-bottom",{
        height: 0,
        duration:0.1
    }) 
})
}

navAnimation();

function page2Animation(){
    var relem = document.querySelectorAll(".right-elem");

relem.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave", function(){
        gsap.to(elem.childNodes[3],{
            opacity: 0,
            scale:1
        })
    })
    elem.addEventListener("mousemove", function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-50,
            y:dets.y - elem.getBoundingClientRect().y-190
        })
    })
})
}
page2Animation();

function page3VideoAnimation(){
    
var pae3Center = document.querySelector(".page3-center");
var video = document.querySelector("#page3 video");

pae3Center.addEventListener("click", function(){
    video.play()
    gsap.to(video, {
        transform:"scaleX(1) scaleY(1)",
        opacity:1
    })
})

video.addEventListener("click",function(){
    video.pause()
    gsap.to(video, {
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0
    })
})
}

page3VideoAnimation();

function page4VideoAnimation(){
    var sections = document.querySelectorAll(".sec-right")

sections.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })

    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
})
}

page4VideoAnimation();

function page6Animation(){
    gsap.from("#btm6-part2 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm6-part2",
            scroller:"body",
            start:"top 80%",
            end:"top 10%",
            scrub: true
        }
    })
}

page6Animation();