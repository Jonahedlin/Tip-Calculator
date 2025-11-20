var text = document.getElementById('text');
var buttons = document.getElementById('buttons');

let Total =170.00;
var onepercen= Total* 1/100;
var twopercen = Total* 2/100;
var fivepercen = Total* 5/100;
var tenpercen = Total * 10/100;
var fiftpercen = Total * 15/100;
var custompercen;
var buttonNum=0;
var finalOut=0;

function clickYes(){
    text.innerHTML= '<span id="text">'+
            'Great!! Please select a Tip Amount'+
            '<p>'+
            'Purchase Total: $'+ Total +
            '</p>'+
        '</span>';
    buttons.innerHTML=
        '<span id="buttons">'+
        '<input type="button" value="1%" id="percen1" onclick="Percen1()">'+
        '<input type="button" value="2%" id="percen2" onclick="Percen2()">'+
        '<input type="button" value="5%" id="percen5" onclick="Percen5()">'+
        '<input type="button" value="10%" id="percen10" onclick="Percen10()">'+
        '<input type="button" value="15%" id="percen15" onclick="Percen15()">'+
        '<input type="button" value="Custom" id="percenCustom" onclick="customPercen()">'+
        '</span>';
    
}
function clickNo(){
    text.innerHTML=' <span id="text">'+
            'Okay... See You Soon!!'+
        '</span>';
    buttons.innerHTML="";
    text.className='textenhanced';
}

function Percen1(){
    text.innerHTML=
            '<span id="text">'+
              '<p>'+
                  'Your tip will be: $'+ onepercen +
              '</p>'+
            '</span>';

    buttons.innerHTML= '<span id="buttons">'+
        '<input type="button" value="Enter" id="enter" onclick="enter()">'+
        '<input type="button" value="Edit" id="edit" onclick="edit()">'+
        '</span>';
        finalOut=onepercen;
}


function Percen2(){
    text.innerHTML=
            '<span id="text">'+
              '<p>'+
                  'Your tip will be: $'+ twopercen +
              '</p>'+
            '</span>';
    buttons.innerHTML= '<span id="buttons">'+
        '<input type="button" value="Enter" id="enter" onclick="enter()">'+
        '<input type="button" value="Edit" id="edit" onclick="edit()">'+
        '</span>';
        finalOut=twopercen;
}

function Percen5(){
    text.innerHTML=
            '<span id="text">'+
              '<p>'+
                  'Your tip will be: $'+ fivepercen +
              '</p>'+
            '</span>';
    buttons.innerHTML= '<span id="buttons">'+
        '<input type="button" value="Enter" id="enter" onclick="enter()">'+
        '<input type="button" value="Edit" id="edit" onclick="edit()">'+
        '</span>';
        finalOut=fivepercen;
}
function Percen10(){
    text.innerHTML=
            '<span id="text">'+
              '<p>'+
                  'Your tip will be: $'+ tenpercen +
              '</p>'+
            '</span>';
    buttons.innerHTML= '<span id="buttons">'+
        '<input type="button" value="Enter" id="enter" onclick="enter()">'+
        '<input type="button" value="Edit" id="edit" onclick="edit()">'+
        '</span>';
        finalOut=tenpercen;
}

function Percen15(){
    text.innerHTML=
            '<span id="text">'+
              '<p>'+
                  'Your tip will be: $'+ fiftpercen +
              '</p>'+
            '</span>';
    buttons.innerHTML= '<span id="buttons">'+
        '<input type="button" value="Enter" id="enter" onclick="enter()">'+
        '<input type="button" value="Edit" id="edit" onclick="edit()">'+
        '</span>';

        finalOut = fiftpercen;
}

function enter(){
    if(finalOut!=0){
     text.innerHTML=' <span id="text">'+
            'Thank You!! See You Soon!'+
        '</span>'+
        '<p>'+
            '<span id="finalText">'+
            'Your tip was $'+ finalOut +
            '</span>'+
        '</p>';
    text.className='textenhanced';
    buttons.innerHTML="";
    }
    else{
        updateVal();
    }
}

function edit(){
   text.innerHTML= '<span id="text">'+
            'Great!! Please select a Tip Amount'+
            '<p>'+
            'Purchase Total: $'+ Total +
            '</p>'+
        '</span>';
    buttons.innerHTML=
        '<span id="buttons">'+
        '<input type="button" value="1%" id="percen1" onclick="Percen1()">'+
        '<input type="button" value="2%" id="percen2" onclick="Percen2()">'+
        '<input type="button" value="5%" id="percen5" onclick="Percen5()">'+
        '<input type="button" value="10%" id="percen10" onclick="Percen10()">'+
        '<input type="button" value="15%" id="percen15" onclick="Percen15()">'+
        '<input type="button" value="Custom" id="percenCustom" onclick="customPercen()">'+
        '</span>';
}
function customPercen(){    
     

     text.innerHTML='<span id="text">'+
            'Sure! Please enter a custom tip (%)'+
         '</span>';
     buttons.innerHTML= '<span id="buttons">'+
            '<input type="range" value="0" min="0" max="100" step="1" id="customtip" oninput="output.value = this.value">'+
            '<output id="output">' + 0 +'</output>'+
            '<input type="button" value="Enter" id="enter" onclick="enter()">'+
        '</span>';
    var customTip = document.getElementById('customtip');
    var out = customTip.value;
    buttons.innerHTML+= '<p>'+
            '<span id="text">'+
            'Your tip was $'+ out +
            '</span>'+
        '</p>'
    
    finalOut= out;
    
}
function updateVal(){
   var val= document.getElementById('output').value;
   finalOut = Total * val/100;
} 