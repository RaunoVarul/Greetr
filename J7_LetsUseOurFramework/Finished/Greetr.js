;(function(global, $) {
    
    // uue objekti loomiseks
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    
    // toetatud keeled ja pole niisama nähtaval
    var supportedLangs = ['en', 'es'];
    
    // mitteametlik tervitus
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    // ametlik tervitus
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    // logimis sõnum
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };
    
    // prototüüp hoiab meetodeid et mälu säästa.
    Greetr.prototype = {
        
        // 'this' viitab kutsutavale objektile käituse ajal.
        fullName: function() {
            return this.firstName + ' ' + this.lastName;   
        },
        
        validate: function() {
            // kontrollib keelekasutust
            // viitab mitte nähtavale funktsioonile.
             if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";   
             }
        },
        
        // Tagastab sõnumi õiges keeles kasutades syntaxit
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },
        
        // meetodid tagastavad ennast sisaldavad sõnumi
        greet: function(formal) {
            var msg;
            
            // kui pole defineeritud või tühi tagastab false
            if (formal) {
                msg = this.formalGreeting();  
            }
            else {
                msg = this.greeting();  
            }

            if (console) {
                console.log(msg);
            }

            // 'this' viitab kutsutavale objektile käituse ajal
            // teeb ahelmeetodi
            return this;
        },
        
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
            
            // teeb ahelaks
            return this;
        },
                            
        setLang: function(lang) {
            
            // määrab keele
            this.language = lang;
        
            // valideerib
            this.validate();
            
            // teeb ahelaks
            return this;
        },
        
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';   
            }
            
            if (!selector) {
                throw 'Missing jQuery selector';   
            }
            
            // tuvastab sõnumi (ametlik või mitte)
            var msg;
            if (formal) {
                msg = this.formalGreeting();   
            }
            else {
                msg = this.greeting();   
            }
            
            // paneb sõnumi määratud kohta
            $(selector).html(msg);
            
            // teeb ahelaks
            return this;
        }
        
    };
    
    // objekt tehakse siin, lubab uuendada objekti ilma uut välja kutsumata
    Greetr.init = function(firstName, lastName, language) {
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
        self.validate();
        
    }
    
    // jqueryst pärit nipp, et ei peaks uuesti 'new' kutsuma
    Greetr.init.prototype = Greetr.prototype;
    
    // kinnitatakse greetr globaalsele objektile, ja lisatakse lühend G$ et ei peaks trükkima palju.
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));