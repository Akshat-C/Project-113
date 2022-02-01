function preload(){}

function setup()
{
    canvas = createCanvas(550, 350);
    canvas.position(400, 300);
    background("violet")

    video = createCapture(VIDEO);
    video.hide();
    tint_value = "";
}

function draw()
{
    fill("orange");
    stroke("orange");
    rect(10, 10, 60);

    fill("#0096FF");
    stroke("#0096FF");
    ellipse(275, 40, 405, 40);

    fill("orange");
    stroke("orange");
    rect(480, 10, 60);

    fill("green");
    stroke("green");
    ellipse(275, 310, 405, 40);

    fill("red");
    stroke("red");
    rect(480, 280, 60);

    fill("red");
    stroke("red");
    rect(10, 280, 60);

    fill("green");
    stroke("green");
    ellipse(40, 175, 40, 210);

    fill("#0096FF");
    stroke("#0096FF");
    ellipse(510, 175, 40, 210);
    
    image(video, 130, 75, 300, 200);
    tint(tint_value);
}

function take_snapshot()
{
    save("Filter_Img.png");
}

function change_tint()
{
    tint_value = document.getElementById("tint_name").value;
}


