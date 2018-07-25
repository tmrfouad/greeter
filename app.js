// g$('Tamer', 'Fouad')
//     .greet()
//     .setLang('es')
//     .greet()
//     .setLang('en')
//     .greet(true)
//     .setLang('es')
//     .greet(true)
//     .setLang('fr')
//     .greet();

$('#logindiv').on('click', '#login', function() {
    var fName = $('#fName').val();
    var lName = $('#lName').val();
    var lang = $('#lang').val();
    g$(fName, lName, lang).showGreeting('#greeting', true).log();
});