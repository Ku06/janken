console.log(46);
$('#btn1').on('click', function () {

    const randomNumber = Math.ceil(Math.random() * 10);
    if (randomNumber >= 7 && randomNumber <= 10) {
        $('#result').html('グー');
        $('#result2').html('あいこ');
    } else if (randomNumber >= 4 && randomNumber <= 6) {
        $('#result').html('チョキ');
        $('#result2').html('勝ち');
    } else {
        $('#result').html('パー');
        $('#result2').html('負け');
    }
})

$('#btn2').on('click', function () {

    const randomNumber = Math.ceil(Math.random() * 10);
    if (randomNumber >= 7 && randomNumber <= 10) {
        $('#result').html('グー');
        $('#result2').html('負け');
    } else if (randomNumber >= 4 && randomNumber <= 6) {
        $('#result').html('チョキ');
        $('#result2').html('あいこ');
    } else {
        $('#result').html('パー');
        $('#result2').html('勝ち');
    }
})


$('#btn3').on('click', function () {

    const randomNumber = Math.ceil(Math.random() * 10);
    if (randomNumber >= 7 && randomNumber <= 10) {
        $('#result').html('グー');
        $('#result2').html('勝ち');
    } else if (randomNumber >= 4 && randomNumber <= 6) {
        $('#result').html('チョキ');
        $('#result2').html('負け');
    } else {
        $('#result').html('パー');
        $('#result2').html('あいこ');
    }
})

