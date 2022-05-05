//EJEMPLO 1 
s0.initVideo('https://media.giphy.com/media/VdbIkRC3fxV0h7LqOC/giphy.mp4')
src(s0)
.add(o3,.2,.9)
.modulatePixelate(o0,100,100)
.color(.9,0,0.7)
.out(o0)


//EJEMPLO 2
render(o0)
s0.initVideo('https://media.giphy.com/media/JPhi4r49unFbN8VsAB/giphy.mp4')

speed = 0.5
fps = 20

src(o0)
  .blend(s0, [0.02, 0.002])
  .modulate(o0, 0.004)
  //.saturate(1.01)
 // .contrast(1.01)
  .colorama()
  .scale(1.01)
  .out()
  



//EJEMPLO 3


s0.initVideo('https://media.giphy.com/media/JPhi4r49unFbN8VsAB/giphy.mp4') // initialize a webcam in source buffer s0
src(s0).colorama(0.99) .modulateRepeatX(noise((() => (8* Math.sin(time *0.8))))) .out()

//EJEPMPLO 4


render(o0)
s0.initVideo('https://media.giphy.com/media/dagmJej5XZHp8bKnTb/giphy.mp4')

speed = 0.5
fps = 20

src(o0)
  .blend(s0, [0.02, 0.002])
  .modulate(o0, 0.004)
  //.saturate(1.01)
 // .contrast(1.01)
  .colorama()
  .scale(1.01)
  .out()

