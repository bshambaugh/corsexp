// See: http://api.jquery.com/jQuery.ajaxPrefilter/
$.ajaxPrefilter( function( options ) {
  if( options.crossDomain ) {
     var newData = {};
     // Copy the options.data object to the newData.data property.
     // We need to do this becaused javascript doesn't deep-copy variables by default.
     newData.data = $.extend({}, options.data);
     newData.url = options.url;

     // Reset the options object - we'll repopulate the following lines.
    options = {};

    // set the proxy URL
    options.url = "http://mydomain.com/proxy";
    options.data = $.param(newData);
    options.crossDomain = false;
  }
});

// How to use the cross domain proxy
$.ajax({
  url: 'http://the-real-api-url.com/getdata',
  data: {
     username: 'myUsername',
     password: 'myPassword'
  },
  crossDomain: true, // set this to ensure our $.ajaxPrefilter hook fires
  processData: false // We want this to remain an object for $.ajaxPrefilter
}).success(function(data) { // Use the jQuery promises interface
    var jsonData = JSON.parse(data); // Assume it returns a JSON string
    console.log(jsonData); // Do whatever you want with the data
});

