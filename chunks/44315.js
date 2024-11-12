n.d(t, {
    K3: function () {
        return p;
    },
    Lq: function () {
        return f;
    },
    O0: function () {
        return h;
    },
    Sl: function () {
        return _;
    }
}),
    n(757143);
var r = n(192379),
    i = n(688619),
    a = n.n(i),
    s = n(691324),
    o = n(399606),
    l = n(692547),
    u = n(410030),
    c = n(607070);
function d(e) {
    return e.toUpperCase().replace(/-/g, '_');
}
function f(e) {
    return l.Z.unsafe_rawColors[d(e)].css;
}
function _(e) {
    return null != e ? s.b[e] : null;
}
function p(e) {
    let t = (0, o.e7)([c.Z], () => c.Z.saturation);
    return r.useMemo(() => {
        if (null == e) return null;
        if ('currentColor' === e || e.startsWith('var(')) return e;
        let n = a()(e);
        return n.set('hsl.s', n.get('hsl.s') * t).hex();
    }, [e, t]);
}
function h(e, t) {
    let n = (0, u.Fg)(),
        i = (0, o.e7)([c.Z], () => c.Z.saturation);
    return r.useMemo(
        () =>
            null == e
                ? null
                : {
                      hex: l.Z.colors[d(e)]
                          .resolve({
                              theme: null != t ? t : n,
                              saturation: i
                          })
                          .hex()
                  },
        [e, i, n, t]
    );
}
n(981631);
