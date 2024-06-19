var e = r(299623),
  o = r(980855),
  i = r(49693),
  u = function(t) {
    return function(n, r, u) {
      var c, f = e(n),
        a = i(f),
        p = o(u, a);
      if (t && r != r) {
        for (; a > p;)
          if ((c = f[p++]) != c) return !0
      } else
        for (; a > p; p++)
          if ((t || p in f) && f[p] === r) return t || p || 0;
      return !t && -1
    }
  };
t.exports = {
  includes: u(!0),
  indexOf: u(!1)
}