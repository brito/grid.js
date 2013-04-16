
function CORS( url, method ){
  var xhr = new this['XMLHttpRequest'];
  xhr.open( method || 'GET', url );
  var cors = {
    send: function(){ xhr.send(); return cors },
    done: function(f){ xhr.onload = (f || dbg).bind(cors, xhr); return cors },
    fail: function(f){ xhr.onerror = (f || dbg).bind(cors, xhr); return cors },
    xhr: xhr };
  
  xhr.send();
  return cors;

  function dbg(){ console.warn.apply(cors, arguments) }
}


assert ( CORS('http://updates.html5rocks.com').ok ),
assert ( 'undefined' != typeof new CORS ),
assert ( CORS() instance of XMLHttpRequest );
  
  
/* Learn more about CORS at enable-cors.org */
