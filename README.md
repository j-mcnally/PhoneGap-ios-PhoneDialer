Usage
=====

```javascript

Error return by the plugin : ["feature","empty"]

phonedialer.dial("123", function(err) {
            if (err == "feature")
                alert("Your device doesn't support this feature.");
            if (err == "empty")
                alert("Unknown phone number");
});

```

Installation
============

cordova add plugin "current repo"

Problem
=======

If you get this error : PhoneDialerPlugin[...] CDVPlugin class PhoneDialer (pluginName: PhoneDialer) does not exist. 
Check if the PhoneDialer.m exist in the Compile Sources at "Build Phases section" on your xcode project.
