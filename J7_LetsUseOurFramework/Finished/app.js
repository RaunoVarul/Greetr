// teeb uue objekti
var g = G$('John', 'Doe');

// määratakse keel ja tervitus
g.greet().setLang('es').greet(true).log();

// login nupu vajutamine
$('#login').click(function() {
   
    // Luuakse uus greetr objekt
    var loginGrtr = G$('John', 'Doe');
    
     // login peidetakse ekraanilt
    $('#logindiv').hide();
    
     // Tervitus, ka sisselogimise jaoks.
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
    
});