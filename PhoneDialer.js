var PhoneDialer = function() {

}

PhoneDialer.prototype.dial = function(phnum) {
     if(device.platform == 'iOS') {
        cordova.exec(null, null, "PhoneDialer", "dialPhone", [{"number" : phnum }]);
    } else {
        document.location.href = "tel:" + phnum
    }
};

if(!window.plugins) {
    window.plugins = {};
}
if(!window.plugins.phoneDialer) {
    window.plugins.phoneDialer = new PhoneDialer();
}
