const COMMON = (function () {
  const loadHTML = (dom, fileName, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) { 
          dom.innerHTML = this.responseText; 
          if (callback) { callback(); }
        }
        if (this.status == 400) { dom.innerHTML = 'Page not found'; }
      }
    };
    xhttp.open('GET', fileName, true);
    xhttp.send();
  };

  const get = (url, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) { callback(JSON.parse(this.responseText)); }
        if (this.status == 400) { dom.innerHTML = 'Page not found'; }
      }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
  };

  const post = (url, params, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) { callback(JSON.parse(this.responseText)); }
        if (this.status == 400) { dom.innerHTML = 'Page not found'; }
      }
    };
    xhttp.open('POST', url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(params));
  };



  return {
    get: get,
    post: post,
    loadHTML: loadHTML    
  };

})();