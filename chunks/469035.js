var n = [],
  i = new MessageChannel(),
  o = function() {
this.postMessage(void 0);
  }.bind(i.port2);
i.port1.onmessage = function() {
  var e = n;
  n = [];
  for (var t = performance.now(), i = 0; i < e.length; i++)
e[i](t);
}, i = null, t.Z = function(e) {
  1 === n.push(e) && requestAnimationFrame(o);
};