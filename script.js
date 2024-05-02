var tl= gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
}})
tl.to("#fanta",{
    top:"125%",
    left:"6%"
},'a')
tl.to("#orangecut",{
    top:"165%",
    left:"27%",
},'a')
tl.to("#orangefull",{
    width:"19%",
    top:"164%",
    left:"75%",
},'a')

tl.to("#leafone",{
    top:"108%",
    left:"65%",
    zIndex:1,
    rotate:"190deg"
},'a')
tl.to("#leaftwo",{
    top:"108%",
    right:"65%",
    zIndex:1,
    rotate:"260deg"
},'a')



var tl2= gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 90%", 
    end:"50% 50%",
    scrub:true,
}})

tl2.from("#pepsiimage",{
    top:"50%",
    left:"-100%",
    rotate:"-90deg"
},'b')
tl2.from("#pepsilogo",{
    top:"50%",
    left:"-100%",
    rotate:"-90deg"
},'b')

tl2.from("#spriteimage",{
    top:"50%",
    right:"-100%",
    rotate:"90deg"
},'b')
tl2.from("#lemon",{
    top:"50%",
    right:"-100%",
    rotate:"90deg"
},'b')

tl2.to("#fanta",{
    width:"32%",
    top:"219.5%",
    left:"33.77%"
},'b')

tl2.to("#orangecut",{
    width:"20%",
    top:"233%",
    left:"50%",
    transform:"translate(-50%,-50%)"
},'b')

tl2.to("#leafone",{
    top:"265%",
    rotate:"450deg",
    bottom:"-50%",
    left:"2%"
},'b')
tl2.to("#leaftwo",{
    top:"215%",
    rotate:"480deg",
    bottom:"-50%",
    right:"2%"
},'b')