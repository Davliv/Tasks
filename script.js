var event = document.getElementById('event');
event.addEventListener('click',function(){
    var name = document.getElementById('name');
    alert ('hello ' + name.value);
})

var event2 = document.getElementById('event2');
event2.addEventListener('click',function(){
    var word = document.getElementById('word');
    alert ('character ' + word.value + ' ' + word.value.length);
})

var event3 = document.getElementById('event3');
var event3 = document.getElementById('event3');
event3.addEventListener('click',function(){
    var total = document.getElementById('author');
    var total1 = document.getElementById('quotes');
    alert (total.value + ' @ grel e ' + 'ays toxer@ ' + total1.value);
})


function plus () {
    var num1,num2,result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;
    document.getElementById('out').innerHTML = result;
}

function minus () {
    var num1,num2,result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;
    document.getElementById('out').innerHTML = result;
}

function multiply () {
    var num1,num2,result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 * num2;
    document.getElementById('out').innerHTML = result;
}

function division () {
    var num1,num2,result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 / num2;
    document.getElementById('out').innerHTML = result;
}

function balance () {
    var num1,num2,result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 % num2;
    document.getElementById('out').innerHTML = result;
}




function hashvark () {
    var num1,num2,result;
    num1 = document.getElementById('n3').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n4').value;
    num2 = parseInt(num2);

    result = num2 - num1;
    var today = new Date();
    var year = today.getFullYear();
    var total = year + result;
    document.getElementById('aaa').innerHTML = 'dzez mancel e ashxatelu ' + result + ' tari' + ' hima ' + year + ' tvakann e aysinqn duq kgnaq toshaki ' + total ;

    
}


function LengthConverter (){
    var num1,num2,result;
    num1 = document.getElementById('n5').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('n6').value;
    num2 = parseFloat(num2);

    result = num2 * num1;

    document.getElementById('bbb').innerHTML = result * 0.09290304 + " wow";
}

function WidthConverter (){
    var num1,num2,result;
    num1 = document.getElementById('n5').value;
    num1 = parseFloat(num1);
    num2 = document.getElementById('n6').value;
    num2 = parseFloat(num2);

    result = num1 * num2;
    document.getElementById('bbb').innerHTML = 'klini ' + result + ' fut';
}

function pizza (){
    var num1,num2,result;
    const pizza = 8;
    num1 = document.getElementById('n7').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n8').value;
    num2 = parseInt(num2);

     var total = num2 * pizza;
     result = total / num1;
    document.getElementById('ccc').innerHTML =  'amen mek@ kuti ' + result + ' ktor pizza ';
}