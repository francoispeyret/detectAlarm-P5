var mic, fft;
var frequ1 = false;
var frequ2 = false;

function setup() {
   createCanvas(710,400);
   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT(0.8,512);
   fft.setInput(mic);
}

function draw() {
   background(200);

   var spectrum = fft.analyze();

   for (i = 0; i<spectrum.length; i++) {
       if(i > 100 && i < 105) {
           if(spectrum[i]>220) {
               frequ1 = true;
           }
       }
       if(i > 50 && i < 55) {
           if(spectrum[i]>180) {
               frequ2 = true;
           }
       }
   }

   if(frequ1 == true && frequ2 == true) {
       background(255,0,0);
   }
   frequ1 = false;
   frequ2 = false;

   beginShape();
   for (i = 0; i<spectrum.length; i++) {
       vertex(i, map(spectrum[i], 0, 255, height, 0) );
   }
   endShape();


   rect(45,30,10,70);
   rect(95,30,10,40);
}
