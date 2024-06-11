var r = n("525425"),
  i = n("228057"),
  a = n("142670"),
  o = n("161984"),
  s = n("671660"),
  u = n("443735"),
  c = n("402428"),
  l = n("521392"),
  d = n("207757"),
  f = n("807419"),
  p = n("706627"),
  h = n("667066"),
  m = n("556868"),
  g = n("292065"),
  _ = n("662506");
e.exports = function(e, t, n, b, v, y, E) {
  var S = g(e, n),
    x = g(t, n),
    w = E.get(x);
  if (w) {
    r(e, n, w);
    return
  }
  var T = y ? y(S, x, n + "", e, t, E) : void 0,
    C = void 0 === T;
  if (C) {
    var D = c(x),
      O = !D && d(x),
      M = !D && !O && m(x);
    T = x, D || O || M ? c(S) ? T = S : l(S) ? T = o(S) : O ? (C = !1, T = i(x, !0)) : M ? (C = !1, T = a(x, !0)) : T = [] : h(x) || u(x) ? (T = S, u(S) ? T = _(S) : (!p(S) || f(S)) && (T = s(x))) : C = !1
  }
  C && (E.set(x, T), v(T, x, b, y, E), E.delete(x)), r(e, n, T)
}