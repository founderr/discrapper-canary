n.d(t, {
    K3: function () {
        return h;
    },
    Lq: function () {
        return E;
    },
    O0: function () {
        return p;
    },
    Sl: function () {
        return f;
    }
});
var r = n(757143);
var i = n(470079),
    a = n(688619),
    o = n.n(a),
    s = n(691324),
    l = n(399606),
    u = n(692547),
    c = n(410030),
    d = n(607070);
function _(e) {
    return e.toUpperCase().replace(/-/g, '_');
}
function E(e) {
    return u.Z.unsafe_rawColors[_(e)].css;
}
function f(e) {
    return null != e ? s.b[e] : null;
}
function h(e) {
    let t = (0, l.e7)([d.Z], () => d.Z.saturation);
    return i.useMemo(() => {
        if (null == e) return null;
        if ('currentColor' === e || e.startsWith('var(')) return e;
        let n = o()(e);
        return n.set('hsl.s', n.get('hsl.s') * t).hex();
    }, [e, t]);
}
function p(e, t) {
    let n = (0, c.Fg)(),
        r = (0, l.e7)([d.Z], () => d.Z.saturation);
    return i.useMemo(
        () =>
            null == e
                ? null
                : {
                      hex: u.Z.colors[_(e)]
                          .resolve({
                              theme: null != t ? t : n,
                              saturation: r
                          })
                          .hex()
                  },
        [e, r, n, t]
    );
}
n(981631);
