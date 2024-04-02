var n;
(t = e.exports = o.debug = o.default = o).coerce = function(e) {
  return e instanceof Error ? e.stack || e.message : e
}, t.disable = function() {
  t.enable("")
}, t.enable = function(e) {
  t.save(e), t.names = [], t.skips = [];
  for (var r = ("string" == typeof e ? e : "").split(/[\s,]+/), n = r.length, o = 0; o < n; o++) r[o] && ("-" === (e = r[o].replace(/\*/g, ".*?"))[0] ? t.skips.push(RegExp("^" + e.substr(1) + "$")) : t.names.push(RegExp("^" + e + "$")))
}, t.enabled = function(e) {
  var r, n;
  for (r = 0, n = t.skips.length; r < n; r++)
    if (t.skips[r].test(e)) return !1;
  for (r = 0, n = t.names.length; r < n; r++)
    if (t.names[r].test(e)) return !0;
  return !1
}, t.humanize = r("684247"), t.names = [], t.skips = [], t.formatters = {};

function o(e) {
  function r() {
    if (r.enabled) {
      var e = +new Date,
        o = e - (n || e);
      r.diff = o, r.prev = n, r.curr = e, n = e;
      for (var a = Array(arguments.length), i = 0; i < a.length; i++) a[i] = arguments[i];
      a[0] = t.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
      var s = 0;
      a[0] = a[0].replace(/%([a-zA-Z%])/g, function(e, n) {
        if ("%%" === e) return e;
        s++;
        var o = t.formatters[n];
        if ("function" == typeof o) {
          var i = a[s];
          e = o.call(r, i), a.splice(s, 1), s--
        }
        return e
      }), t.formatArgs.call(r, a), (r.log || t.log || console.log.bind(console)).apply(r, a)
    }
  }
  return r.namespace = e, r.enabled = t.enabled(e), r.useColors = t.useColors(), r.color = function(e) {
    var r, n = 0;
    for (r in e) n = (n << 5) - n + e.charCodeAt(r) | 0;
    return t.colors[Math.abs(n) % t.colors.length]
  }(e), "function" == typeof t.init && t.init(r), r
}