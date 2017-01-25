(function(global, $) {
    // konstruktor
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    //prototüüp
    Greetr.prototype = {};
    //uus objekt
    Greetr.init = function(firstName, lastName, language) {
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
    }
    
    Greetr.init.prototype = Greetr.prototype;
    //tehakse greetr globaalne lühend
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));