var r = n(156741),
    i = n(729605),
    a = n(338752),
    o = n(474883),
    s = n(54659),
    l = Math.min,
    u = [].lastIndexOf,
    c = !!u && 1 / [1].lastIndexOf(1, -0) < 0,
    d = s('lastIndexOf'),
    _ = c || !d;
e.exports = _
    ? function (e) {
          if (c) return r(u, this, arguments) || 0;
          var t = i(this),
              n = o(t),
              s = n - 1;
          for (arguments.length > 1 && (s = l(s, a(arguments[1]))), s < 0 && (s = n + s); s >= 0; s--) if (s in t && t[s] === e) return s || 0;
          return -1;
      }
    : u;
