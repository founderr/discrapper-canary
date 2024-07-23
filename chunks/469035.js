var r = [],
  n = new MessageChannel(),
  a = function() {
this.postMessage(void 0);
  }.bind(n.port2);
n.port1.onmessage = function() {
  var e = r;
  r = [];
  for (var t = performance.now(), n = 0; n < e.length; n++)
e[n](t);
}, n = null, t.Z = function(e) {
  1 === r.push(e) && requestAnimationFrame(a);
};