var exec = require('cordova/exec');
var platformId = require('cordova/platform').id;

module.exports = {

    /**
     * Call the native dialer
     *
     * @param {String}      The phone number to call.
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