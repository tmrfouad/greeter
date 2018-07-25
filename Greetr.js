(function(global, $) {

    // initiate the greeter function to insure its initialized properly.
    var greeter = function(fName, lName, lang){
        return new greeter.fn.init(fName, lName, lang);
    }

    // helper private variables
    var supportedLangs = ['en', 'es'];
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    // set the prototype for the greeter function to inherit
    // the main functionality.
    greeter.fn = greeter.prototype = {

        // get the full name.
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        // validate if the language used is supported by the library.
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid Language';
            }
        },

        // get the informal greeting with the provided language.
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        // get the formal greeting with the provided language.
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // get the greeting message.
        getGreeting(formal) {
            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            return msg;
        },

        // log the greeting on the console.
        greet: function(formal) {

            if (console) {
                console.log(this.getGreeting(formal));
            }

            return this;

        },

        // log the greeting activity on the console.
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        // set the current language of the greeting and log messages.
        setLang: function(lang) {

            this.language = lang;
            this.validate();

            return this;
        },

        // display the greeting in the selected element by
        // a jQuery selector.
        showGreeting: function(selector, formal) {

            if (!$) {
                throw 'jQuery not loaded!';
            }

            if (!selector) {
                throw 'Missing jQuery selector!';
            }

            var element = $(selector);

            element.text(this.getGreeting(formal));

            return this;
        }

    };

    // initiate the greeter object.
    var init = greeter.fn.init = function(fName, lName, lang){
        var self = this;
        self.firstName = fName || '';
        self.lastName = lName || '';
        self.language = lang || 'en';

        self.validate();
    }

    // set the prototype of the initiating function to the greeter
    // prototype so that the initialized object has the main
    // functionality.
    init.prototype = greeter.fn;

    // attach the greeter object to the global object
    // and make an g$ alias for it for accesability.
    global.greeter = global.g$ = greeter;

})(window, jQuery);