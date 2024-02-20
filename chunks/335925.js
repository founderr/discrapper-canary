"use strict";
var r, a, o, i, u = n("503486"),
  s = n("145661"),
  l = n("886639"),
  c = n("125359"),
  f = n("59393"),
  d = n("664144"),
  p = n("574430"),
  h = n("484320"),
  m = n("382780"),
  _ = n("79807"),
  y = n("69600"),
  g = n("106106"),
  v = u.setImmediate,
  b = u.clearImmediate,
  M = u.process,
  w = u.Dispatch,
  Function = u.Function,
  MessageChannel = u.MessageChannel,
  String = u.String,
  k = 0,
  L = {},
  D = "onreadystatechange";
d(function() {
  r = u.location
});
var S = function(e) {
    if (f(L, e)) {
      var t = L[e];
      delete L[e], t()
    }
  },
  T = function(e) {
    return function() {
      S(e)
    }
  },
  Y = function(e) {
    S(e.data)
  },
  x = function(e) {
    u.postMessage(String(e), r.protocol + "//" + r.host)
  };
(!v || !b) && (v = function(e) {
  _(arguments.length, 1);
  var t = c(e) ? e : Function(e),
    n = h(arguments, 1);
  return L[++k] = function() {
    s(t, void 0, n)
  }, a(k), k
}, b = function(e) {
  delete L[e]
}, g ? a = function(e) {
  M.nextTick(T(e))
} : w && w.now ? a = function(e) {
  w.now(T(e))
} : MessageChannel && !y ? (i = (o = new MessageChannel).port2, o.port1.onmessage = Y, a = l(i.postMessage, i)) : u.addEventListener && c(u.postMessage) && !u.importScripts && r && "file:" !== r.protocol && !d(x) ? (a = x, u.addEventListener("message", Y, !1)) : a = D in m("script") ? function(e) {
  p.appendChild(m("script"))[D] = function() {
    p.removeChild(this), S(e)
  }
} : function(e) {
  setTimeout(T(e), 0)
}), e.exports = {
  set: v,
  clear: b
}