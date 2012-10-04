var PhoneDialer = function() {

}

PhoneDialer.prototype.dial = function(phnum) {
    cordova.exec("PhoneDialer.dialPhone", {"number" : phnum });
};

if(!window.plugins) {
    window.plugins = {};
}
if(!window.plugins.phoneDialer) {
    window.plugins.phoneDialer = new PhoneDialer();
}
