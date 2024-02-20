e.exports = function(e, n, t, u) {
  var f = -1,
    o = null == e ? 0 : e.length;
  for (u && o && (t = e[++f]); ++f < o;) t = n(t, e[f], f, e);
  return t
}