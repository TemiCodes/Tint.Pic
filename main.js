function preload() {
    
}
function setup() {
    canvas=createCanvas(400,401)
    canvas.position(110,250)
    video=createCapture(VIDEO)
    video.hide()
    tint_Color=""
}
function draw() {
    image(video,0,0,400,401)
    tint(tint_Color)
}

function apply_Tint() {
    tint_Color=document.getElementById("color_Name").value
}
function take_Snapshot() {
    save("yourname.png")
}