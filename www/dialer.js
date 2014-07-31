var exec = require('cordova/exec');
var platformId = require('cordova/platform').id;

module.exports = {

    /**
     * Call the native dialer
     *
     * @param {String, Function}      The phone number to call, The callback error function
     */
    dial: function(phnum, error) {
        if (phnum == null)
            error("empty");
        if (platformId == 'ios') {
            exec(null, function(err) { 
                error(err);
            }, "PhoneDialer", "dial", [phnum]);
        } else {
            document.location.href = "tel:" + phnum
        }
    },
};