// Маска номера телефона

$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};
$("#phone").click(function(){
    $(this).setCursorPosition(3);
}).mask("+38(999) 999-9999");



//Отправка данных AJAXом

$(function() {
    $('form').submit(function(e) {
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
        })
        e.preventDefault();
        $('form').css('display', 'none');
        $('#form_result').css('display', 'block');
    });
});



//Изменение языка

$('#en').click(function(){
    $('.nav-item:first .nav-link').text('Home');
    $('.nav-item:nth-child(2) .nav-link').text('Text block');
    $('.nav-item:nth-child(3) .nav-link').text('Slider');
    $('.hero .h3').text('Register');
    $('.hero .h4').text('Data has been sent');
    $('#name').attr('placeholder', 'Name');
    $('#last_name').attr('placeholder', 'Surname');
    $('#phone').attr('placeholder', 'Phone number');
    $('#btn').text('Send');
    $('#text .h3:first').text('What is the benefit?');
    $('#wallet .text').text('High fixed income. We are the largest financial institution in Ukraine. We earn for ourselves, we earn for you.');
    $('#shop .text').text('Confidence in the future and minimal risks. The return on assets has been tested by time.');
    $('#person .text').text('Easy and fast profit making. We withdraw earned funds as soon as possible to PrivatBank and Monobank cards.');
    $('#text .h3:last').text('How to start earning?');
    $('#text li:nth-child(1)').text('Fill out the registration form (form above)');
    $('#text li:nth-child(2)').text('Wait for a call from the official representative and confirm the registration');
    $('#text li:nth-child(3)').text('Choose the size of the investment and get the first income in 30 days.');
    $('.footer .text:nth-child(1)').text('Name: Stolyar Bogdan');
    $('.footer .text:nth-child(3)').html('Phone number: <a href="tel:+380965463243" class="link">+38(096)546-32-43</a>');
})

$('#ru').click(function(){
    $('.nav-item:first .nav-link').text('Главная');
    $('.nav-item:nth-child(2) .nav-link').text('Блок с текстом');
    $('.nav-item:nth-child(3) .nav-link').text('Слайдер');
    $('.hero .h3').text('Регистрация');
    $('.hero .h4').text('Данные отправленны');
    $('#name').attr('placeholder', 'Имя');
    $('#last_name').attr('placeholder', 'Фамилия');
    $('#phone').attr('placeholder', 'Номер телефона');
    $('#btn').text('Отправить');
    $('#text .h3:first').text('В чем выгода?');
    $('#wallet .text').text('Высокий неизменный доход. Мы – крупнейшая финансовая организация Украины. Зарабатываем себе, заработаем и вам.');
    $('#shop .text').text('Уверенность в завтрашнем дне и минимальные риски. Доходность активов проверена временем.');
    $('#person .text').text('Простое и быстрое извлечение прибыли. Выводим заработанные средства в кратчайшие сроки на карты «ПриватБанка» и «Монобанка».');
    $('#text .h3:last').text('Как начать зарабатывать?');
    $('#text li:nth-child(1)').text('Заполните форму для регистрации (форма выше)');
    $('#text li:nth-child(2)').text('Дождитесь звонка официального представителя и подтвердите регистрацию');
    $('#text li:nth-child(3)').text('Выберите размер инвестиции и получите первый доход уже через 30 дней.');
    $('.footer .text:nth-child(1)').text('Имя: Столяр Богдан');
    $('.footer .text:nth-child(3)').html('Номер телефона: <a href="tel:+380965463243" class="link">+38(096)546-32-43</a>');
})