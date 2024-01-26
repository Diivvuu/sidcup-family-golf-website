var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 250 + "px"
    blur.style.top = dets.y -250 + "px"
})

// cursor on navbar pending

//navbar gsap pending
// gsap.to("#nav", {
    // backgroundColor: #000,
    // 
// })