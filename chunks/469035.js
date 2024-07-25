var n = [],
  r = new MessageChannel(),
  i = function() {
this.postMessage(void 0);
  }.bind(r.port2);
r.port1.onmessage = function() {
  var e = n;
  n = [];
  for (var t = performance.now(), r = 0; r < e.length; r++)
e[r](t);
}, r = null, t.Z = function(e) {
  1 === n.push(e) && requestAnimationFrame(i);
};