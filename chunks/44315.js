r.d(n, {
    K3: function () {
        return m;
    },
    Lq: function () {
        return h;
    },
    O0: function () {
        return g;
    },
    Sl: function () {
        return p;
    }
});
var i = r(757143);
var a = r(192379),
    s = r(688619),
    o = r.n(s),
    l = r(691324),
    u = r(399606),
    c = r(692547),
    d = r(410030),
    f = r(607070);
function _(e) {
    return e.toUpperCase().replace(/-/g, '_');
}
function h(e) {
    return c.Z.unsafe_rawColors[_(e)].css;
}
function p(e) {
    return null != e ? l.b[e] : null;
}
function m(e) {
    let n = (0, u.e7)([f.Z], () => f.Z.saturation);
    return a.useMemo(() => {
        if (null == e) return null;
        if ('currentColor' === e || e.startsWith('var(')) return e;
        let r = o()(e);
        return r.set('hsl.s', r.get('hsl.s') * n).hex();
    }, [e, n]);
}
function g(e, n) {
    let r = (0, d.Fg)(),
        i = (0, u.e7)([f.Z], () => f.Z.saturation);
    return a.useMemo(
        () =>
            null == e
                ? null
                : {
                      hex: c.Z.colors[_(e)]
                          .resolve({
                              theme: null != n ? n : r,
                              saturation: i
                          })
                          .hex()
                  },
        [e, i, r, n]
    );
}
r(981631);
