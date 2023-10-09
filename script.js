let buttons = document.querySelectorAll("button");

function changecolorbyclick(){
    //Hex code-16777215 multiply by this number so that our number will become hexs decimal 
    const randomnum = Math.floor(Math.random()*16777215);

    //make random code
    const randomcode = '#'+randomnum.toString(16);
    console.log(randomcode);
    chnagecolor.style.backgroundColor = randomcode;
    setTimeout(tranformbutton0,100);
    buttons[0].style.transform = "scale(1.3)";
    function tranformbutton0(){
        buttons[0].style.transform = "scale(1)";
    }
    
}


const getshape = document.getElementById("changeId");

let isTriangle = true;
let isSquare = false;
let isCircle = false;
let isRectangle = false;
let isDiamond = false;

getshape.addEventListener("click",(e)=>{
    buttons[1].style.transform = "scale(1.3)";
    setTimeout(tranformbutton0,100);
    function tranformbutton0(){
        buttons[1].style.transform = "scale(1)";
    }
    if(isTriangle){
        var i = document.getElementById("triangle");
        i.id = "square";
        isTriangle = false;
        isSquare = true;

    }else if(isSquare){
        var i = document.getElementById("square");
        i.id = "circle";
        isSquare = false;
        isCircle = true;

    }else if(isCircle){
        var i = document.getElementById("circle");
        i.id = "rectangle";
        isCircle = false;
        isRectangle = true;

    }else if(isRectangle){
        var i = document.getElementById("rectangle");
        i.id = "diamond";
        isRectangle = false;
        isDiamond = true;
    }else{
        var i = document.getElementById("diamond");
        i.id = "triangle";
        isDiamond = false;
        isTriangle = true;
    }
})

