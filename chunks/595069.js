var r = n(668530),
    i = n(821819),
    a = n(96403),
    o = n(342545),
    s = n(625014).trim,
    l = n(219479),
    u = r.parseInt,
    c = r.Symbol,
    d = c && c.iterator,
    _ = /^[+-]?0x/i,
    E = a(_.exec),
    f =
        8 !== u(l + '08') ||
        22 !== u(l + '0x16') ||
        (d &&
            !i(function () {
                u(Object(d));
            }));
e.exports = f
    ? function (e, t) {
          var n = s(o(e));
          return u(n, t >>> 0 || (E(_, n) ? 16 : 10));
      }
    : u;
