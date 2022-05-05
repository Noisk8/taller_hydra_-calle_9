

//EJEMPLO 1

shape(10, () => a.fft[0]*1.5)
  .modulateKaleid(noise(15, 0.5))
  .colorama()
  .repeat(9, 5)
  .out(o0);

render(o0)
a.show();

//EJEMPLO 2


s0.initVideo('https://media.giphy.com/media/JPhi4r49unFbN8VsAB/giphy.mp4') // initialize a webcam in source buffer s0
//src(s0).out() // render source buffer s0

src(s0)
  .blend(o0, 0.4)
  //.saturate(1.01)
  .modulate(o0, 0.03)
        .modulate(o0,0.1)
.brightness(0.5)
.blend(shape(6, 0.1, 0.5)
       .modulate(o0,0.1)
             .repeat(2)
       .modulateRepeat(osc(10))
       .modulateRotate(osc(20))
       , () => a.fft[1]*2)
.modulate(o0, 0.5*a.fft[0])
.blend(solid(0,[1,0,0.5],[1,0,0.5]),0.1)
  .out()

a.show()


// EJEMPLO AUDIO Y VIDEO 

s0.initVideo("https://media.giphy.com/media/JPhi4r49unFbN8VsAB/giphy.mp4");

a.show();
a.setBins(3);

osc( 50, 0.5, 0 )
.modulate(
  src(s0) , 3
)
.saturate( 0.7 )
.scale(
  () => a.fft[0]*2
).out( o0 );

render(o0);

// EJEMPLO 4

render(o0)


//audio activated webcam filter

s0.initVideo('https://media.giphy.com/media/JPhi4r49unFbN8VsAB/giphy.mp4')
a.show()
src(s0).thresh(() => a.fft[2]*2, 1.5).posterize(4,1).pixelate(1000,1000)
  
  
  .out()

