
const words = ["Hi, welcome to my website.", "I'm Chad, or also known as @clew-bot on GitHub", "I'm a junior web developer specializing in js.", "how are you doing?", "feel free to take a look around the site...more updates coming in the future.", "thanks for visiting :)"];
let cursor = gsap.to('.cursor', {opacity:0, ease: "power3.inOut", repeat:-1})
// repeat for how many times we want to run the function //
let masterTl = gsap.timeline({repeat: 0}).pause()
let boxTl = gsap.timeline()

boxTl.to('.box', {duration:3, width:"17vw", delay: 0.5, ease: "power4.inOut"})
  .from('.hi', {duration:3, y:"7vw", ease: "power3.out"})
  .to('.box', {duration:3, height:"7vw", ease: "elastic.out", onComplete: () => masterTl.play() })
  .to('.box', {duration:4, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})
words.forEach(word => {
  let tl = gsap.timeline({repeat:1, yoyo: true, repeatDelay:1})
  tl.to('.text', {duration: 1, text: word})
  masterTl.add(tl)
})