var r = [],
  a = new MessageChannel(),
  n = function() {
this.postMessage(void 0);
  }.bind(a.port2);
a.port1.onmessage = function() {
  var e = r;
  r = [];
  for (var t = performance.now(), a = 0; a < e.length; a++)
e[a](t);
}, a = null, t.Z = function(e) {
  1 === r.push(e) && requestAnimationFrame(n);
};