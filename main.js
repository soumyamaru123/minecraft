var canvas = new fabric.canvas('mycanvas');

player_x=10;
player_y=10;

block_img_width=30;
block_img_height=30;

var player_object="";
var block_img_object="";

function player_update(){
    fabric.image.fromURL("player.png",function(img){
        player_object=img;
        player_object.scaletowidth(150);
        player_object.scaletoheight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_img){
    fabric.image.fromURL(get_img,function(img){
        block_img_object=img;
        block_img_object.scaletowidth(block_img_width);
        block_img_object.scaletoheight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });    
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
keypressed = e.keycode;
console.log(keypressed);
}

if (e.shiftkey == true && keypressed == '80'){
    console.log("p and shift pressed together");
    block_img_width=block_img_width+10;
    block_img_height=block_img_height+10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;


}

if (e.shiftkey == true && keypressed == '77'){
    console.log("m and shift pressed together");
    block_img_width=block_img_width-10;
    block_img_height=block_img_height-10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;


}

if (keypressed=='37'){
    left();
    console.log("left");
}

if (keypressed=='38'){
    up();
    console.log("up");
}

if (keypressed=='39'){
    right();
    console.log("right");
}

if (keypressed=='40'){
    down();
    console.log("down");
}

if (keypressed=='87'){
    new_img('wall.jpg');
    console.log("w");
}

if (keypressed=='71'){
    new_img('ground.png');
    console.log("g");
}

if (keypressed=='76'){
    new_img('light_green.png');
    console.log("l");
}

if (keypressed=='84'){
    new_img('trunk.jpg');
    console.log("t");
}

if (keypressed=='82'){
    new_img('roof.jpg');
    console.log("r");
}

if (keypressed=='89'){
    new_img('yellow_wall.png');
    console.log("y");
}

if (keypressed=='68'){
    new_img('dark_green.png');
    console.log("d");
}

if (keypressed=='85'){
    new_img('unique.png');
    console.log("u");
}

if (keypressed=='67'){
    new_img('cloud.jpg');
    console.log("l");
}

function up(){
  
}




