window.onerror = function(m,u,l,c) {
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest();
    var msg = "msg="+encodeURIComponent(m)+"&url="+encodeURIComponent(u)+"&line="+l+"&col="+c+"&href="+encodeURIComponent(window.location.href);
    xhr.open("GET", "/window.onerror?"+msg, true);
    xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhr.send();
  }
};
