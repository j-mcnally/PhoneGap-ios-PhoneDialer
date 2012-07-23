
var PhoneDialer = function() {
    
}

// call this to register for push notifications
PhoneDialer.prototype.dial = function(phnum) {
    PhoneGap.exec(null, null, "PhoneDialer", "dialPhone", [{"number":phnum,}]);
};


cordova.addConstructor(function() {
    if(!window.plugins) {
        window.plugins = {};
    }
    window.plugins.phoneDialer = new PhoneDialer();
});