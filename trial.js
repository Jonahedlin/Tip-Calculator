function Percen(){
    text = document.getElementById('text');
    buttons = document.getElementById('buttons');
    button1 = document.getElementById('percen1')
    var onepercen= Total* 1/100;
    var twopercen = Total* 2/100;
    var fivepercen = Total* 5/100;
    var tenpercen = Total * 10/100;
    var fiftpercen = Total * 15/100;
    var custompercen;
    var buttonNum=0;

    switch (buttons){
        case button1:
             text.innerHTML= '<span id="text">'+
            '<p>'+
                'Your tip will be: $'+ onepercen +
            '</p>'+
        '</span>'
        break;

        case button2:
             text.innerHTML= '<span id="text">'+
            '<p>'+
                'Your tip will be: $'+ twopercen +
            '</p>'+
        '</span>'
        break;

        case button5:
             text.innerHTML= '<span id="text">'+
            '<p>'+
                'Your tip will be: $'+ fivepercen +
            '</p>'+
        '</span>'
        break;

        case button10:
             text.innerHTML= '<span id="text">'+
            '<p>'+
                'Your tip will be: $'+ tenpercen +
            '</p>'+
        '</span>'
        break;

        case buttonCustom:
             text.innerHTML= '<span id="text">'+
            '<p>'+
                'Your tip will be: $'+ custompercen +
            '</p>'+
        '</span>'
        break;
    }


   
}

//the index' pasted function starts here

function Percen(){
     text = document.getElementById('text');
     buttons = document.getElementById('buttons');
     button1 = document.getElementById('percen1');
     button2 = document.getElementById('percen2');
     button5 = document.getElementById('percen5');
     button10 = document.getElementById('percen10');
     button15 = document.getElementById('percen15');
     buttonCustom = document.getElementById('custompercen');
     var onepercen= Total* 1/100;
     var twopercen = Total* 2/100;
     var fivepercen = Total* 5/100;
     var tenpercen = Total * 10/100;
     var fiftpercen = Total * 15/100;
     var custompercen;
     var buttonNum=0;

     //for(buttonNum: buttonNum<5: buttonNum++){
     //    if(button +buttonNum){}
     //}

       if(buttons1){
          text.innerHTML= '<span id="text">'+
              '<p>'+
                  'Your tip will be: $'+ onepercen +
              '</p>'+
          '</span>'
        }
     else if(button2){
         text.innerHTML= '<span id="text">'+
             '<p>'+
                 'Your tip will be: $'+ twopercen +
             '</p>'+
         '</span>'
     }
     else if(button5){
         text.innerHTML= '<span id="text">'+
             '<p>'+
                 'Your tip will be: $'+ fivepercen +
             '</p>'+
         '</span>'
     }
     else if(button10){
         text.innerHTML= '<span id="text">'+
             '<p>'+
                 'Your tip will be: $'+ tenpercen +
             '</p>'+
         '</span>'
     }
     else if(button15){
         text.innerHTML= '<span id="text">'+
             '<p>'+
                 'Your tip will be: $'+ fiftpercen +
             '</p>'+
         '</span>'
     }

  }