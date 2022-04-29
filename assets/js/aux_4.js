
function processNumber(){
    number = document.getElementById('number').value;
    result =  Number(number.toString().split('').reverse().join(''));
    console.log(number.toString().split(''));
    console.log(result);
    document.getElementById('result_a').value = result;

    result_b = '';
    if (number == result ){
        result_b = "Si es capicua."
    
    }else{
        result_b ="No es capicua."
    }
    document.getElementById('result_b').value =result_b;

    number_split = number.toString().split('');
    console.log(number_split.length);
    if(number_split.length == 4) {
        result_sum_a = parseInt(number_split[0]) + parseInt(number_split[1]) + parseInt(number_split[2]);
        
        console.log(result_sum_a);
        result_c = Math.pow(result_sum_a , number_split[3]);
        document.getElementById('result_c').value =result_c;
    }

    number_split = number.toString().split('');
    console.log(number_split.length);
    if(number_split.length == 4) {
        result_sum_b = parseInt(number_split[1]) + parseInt(number_split[2]) + parseInt(number_split[3]);
        
        console.log(result_sum_b);
        result_d = Math.pow(result_sum_b , number_split[0]);
        document.getElementById('result_d').value =result_d;
    }

    const max = number_split.reduce((a,b)=>Math.max(a,b), -Infinity);
    console.log(max);
    document.getElementById('max').value = max;

    const min = number_split.reduce((a,b)=>Math.min(a,b), Infinity);
    console.log(min);
    document.getElementById('min').value = min;

}