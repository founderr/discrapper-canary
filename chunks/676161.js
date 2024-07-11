t.d(n, {
    Z: function () {
        return s;
    }
}), t(724458);
var i = t(470079), l = t(700089), r = t(654455), a = t(496158);
function s(e) {
    let {
            channel: n,
            commands: t,
            limit: s = t.length
        } = e, o = (0, a.D)(n), c = (0, l.R)(o), u = i.useMemo(() => t.reduce((e, n) => (e[n.id] = n, e), {}), [t]);
    return i.useMemo(() => c.map(e => u[e]).filter(e => null != e).sort((e, n) => {
        let t = r.ZP.getScoreWithoutLoadingLatest(o, e);
        return r.ZP.getScoreWithoutLoadingLatest(o, n) - t;
    }).slice(0, s), [
        c,
        u,
        o,
        s
    ]);
}
