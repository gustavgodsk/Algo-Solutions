
var angle = 0;
var slider;

function setup() {
  createCanvas(400, 300);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background("#111212");
  angle = slider.value();
  stroke(255);
  translate(200, height);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }

  //line(0, 0, 0, -len * 0.67);
}




setTimeout(function(){
  const kildekode = document.createElement("div");
  kildekode.className = "h1";
  kildekode.style.marginTop = "30px";
  kildekode.innerHTML = "<h1>fractal.<span>Kildekode</span>()</h1>"
  document.body.appendChild(kildekode);
  const div = document.createElement("div");
  div.className = "kildekode";
  document.body.appendChild(div);
  div.appendChild(document.getElementById("pre"));
}, 50);

