var r = n(476508),
    i = n(570596),
    a = n(548828),
    o = n(831496),
    s = n(250765),
    l = n(730427),
    u = [].push;
e.exports = function (e) {
    var t,
        n,
        c,
        d,
        _ = arguments.length,
        E = _ > 1 ? arguments[1] : void 0;
    return (o(this), (t = void 0 !== E) && a(E), s(e))
        ? new this()
        : ((n = []),
          t
              ? ((c = 0),
                (d = r(E, _ > 2 ? arguments[2] : void 0)),
                l(e, function (e) {
                    i(u, n, d(e, c++));
                }))
              : l(e, u, { that: n }),
          new this(n));
};
