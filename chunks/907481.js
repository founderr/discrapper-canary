"use strict";
n("808653");
var r, i = n("129752").codes,
  o = i.ERR_MISSING_ARGS,
  s = i.ERR_STREAM_DESTROYED;

function a(e) {
  if (e) throw e
}

function c(e) {
  e()
}

function u(e, t) {
  return e.pipe(t)
}
e.exports = function() {
  for (var e, t, i = arguments.length, l = Array(i), d = 0; d < i; d++) l[d] = arguments[d];
  var f = (e = l).length && "function" == typeof e[e.length - 1] ? e.pop() : a;
  if (Array.isArray(l[0]) && (l = l[0]), l.length < 2) throw new o("streams");
  var p = l.map(function(e, i) {
    var o, a, u, d, h, v, g, b, m = i < l.length - 1;
    return o = e, a = m, u = i > 0, h = d = function(e) {
        !t && (t = e), e && p.forEach(c), !m && (p.forEach(c), f(t))
      }, v = !1, d = function() {
        !v && (v = !0, h.apply(void 0, arguments))
      }, g = !1, o.on("close", function() {
        g = !0
      }), void 0 === r && (r = n("362796")), r(o, {
        readable: a,
        writable: u
      }, function(e) {
        if (e) return d(e);
        g = !0, d()
      }), b = !1,
      function(e) {
        if (!g) {
          if (!b) {
            var t;
            if (b = !0, (t = o).setHeader && "function" == typeof t.abort) return o.abort();
            if ("function" == typeof o.destroy) return o.destroy();
            d(e || new s("pipe"))
          }
        }
      }
  });
  return l.reduce(u)
}