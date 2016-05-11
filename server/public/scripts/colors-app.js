$(document).ready(function(){
    var setcolor = function(){
        var savedColor = random(0, 15);
        var firstColor = '#'+savedColor.colorOne;
        var secondColor = '#'+savedColor.colorTwo;
        $('#child').remove();
        $('#target').append('<div id="child" style="color:'+firstColor+'; background-color:'+
                              secondColor+';">EPILEPSY <br/> RULES!!</div>');
    };
        setInterval(setcolor, 50);
}); //END OF DOCUMENT READY

var random = function(min, max){
    /* THIS FUNCTION PRODUCES 6 RANDOM NUMBERS TO CREATE 2 HEXIDECIMAL COLOR NUMBERS
       AND ALSO ENSURES THAT THE SECOND COLOR WILL ALWAYS CONTRAST WITH THE FIRST */
    var number = {};
    number.colorOne;
    number.colorTwo;
    for(i=0; i<6; i++){
        var randNumOne = Math.floor(Math.random()*(1+max-min)+min);
        var randNumTwo;
        switch(randNumOne<16){
            case randNumOne==0:randNumOne='0';randNumTwo='f';break;
            case randNumOne==1:randNumOne='1';randNumTwo='e';break;
            case randNumOne==2:randNumOne='2';randNumTwo='d';break;
            case randNumOne==3:randNumOne='3';randNumTwo='c';break;
            case randNumOne==4:randNumOne='4';randNumTwo='b';break;
            case randNumOne==5:randNumOne='5';randNumTwo='a';break;
            case randNumOne==6:randNumOne='6';randNumTwo='0';break;
            case randNumOne==7:randNumOne='7';randNumTwo='1';break;
            case randNumOne==8:randNumOne='8';randNumTwo='2';break;
            case randNumOne==9:randNumOne='9';randNumTwo='3';break;
            case randNumOne==10:randNumOne='a';randNumTwo='4';break;
            case randNumOne==11:randNumOne='b';randNumTwo='5';break;
            case randNumOne==12:randNumOne='c';randNumTwo='6';break;
            case randNumOne==13:randNumOne='d';randNumTwo='7';break;
            case randNumOne==14:randNumOne='e';randNumTwo='8';break;
            case randNumOne==15:randNumOne='f';randNumTwo='9';break;
        }
        if(number.colorOne===undefined){
            number.colorOne=randNumOne;
            number.colorTwo=randNumTwo;
        }else{
            number.colorOne=number.colorOne+randNumOne;
            number.colorTwo=number.colorTwo+randNumTwo;
        }
    }
    return number;
};
/*

developed by Milesjohnson777
milesjohnsonwashere@gmail.com

*/
