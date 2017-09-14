
var url = "http://bshambaugh.org";

     $.ajax({
           url: url,
           success: function(res, status, xhr) {
               if(xhr.status == 200) {
                 if(xhr.getResponseHeader("Link") != null) {
                    var string = xhr.getResponseHeader("Link");
                    var str = 'http://www.w3.org/ns/ldp#Resource';
                    var re = new RegExp(str, "ig");
                    var found = string.match(re);
                    document.write('LDP');
/*
                       ldpsparql.parseldp(url, function(duck) {
                       //  jqueryldphttp(url, function(duck) {
                        //   console.log(duck); 
                           fn(duck);
                          });
*/

                 } else {
                 //   document.write('File');

                 /*      parsefile(url, function(duck) {
                             fn(duck);
                        }); */

                 }
               }
           }
     })


