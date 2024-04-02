e.exports = function(e, n, o) {
  var a = document.head || document.getElementsByTagName("head")[0],
    i = document.createElement("script");
  "function" == typeof n && (o = n, n = {}), n = n || {}, o = o || function() {}, i.type = n.type || "text/javascript", i.charset = n.charset || "utf8", i.async = !("async" in n) || !!n.async, i.src = e, n.attrs && function(e, t) {
    for (var r in t) e.setAttribute(r, t[r])
  }(i, n.attrs), n.text && (i.text = "" + n.text), ("onload" in i ? t : r)(i, o), !i.onload && t(i, o), a.appendChild(i)
};

function t(e, t) {
  e.onload = function() {
    this.onerror = this.onload = null, t(null, e)
  }, e.onerror = function() {
    this.onerror = this.onload = null, t(Error("Failed to load " + this.src), e)
  }
}

function r(e, t) {
  e.onreadystatechange = function() {
    ("complete" == this.readyState || "loaded" == this.readyState) && (this.onreadystatechange = null, t(null, e))
  }
}