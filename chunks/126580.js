var r = n("27556");
e.exports = function(e, t) {
  if (e !== t) {
    var n = void 0 !== e,
      i = null === e,
      o = e == e,
      s = r(e),
      a = void 0 !== t,
      c = null === t,
      u = t == t,
      l = r(t);
    if (!c && !l && !s && e > t || s && a && u && !c && !l || i && a && u || !n && u || !o) return 1;
    if (!i && !s && !l && e < t || l && n && o && !i && !s || c && n && o || !a && o || !u) return -1
  }
  return 0
}