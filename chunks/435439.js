t.d(n, {
    Z: function () {
        return f;
    }
});
var l = t(200651),
    i = t(481060),
    r = t(374129),
    a = t(639351),
    o = t(908841),
    s = t(410441),
    c = t(206583),
    u = t(388032);
let d = {
        [c.kG.SPOTIFY]: o.Z,
        [c.kG.CRUNCHYROLL]: i.CrunchyrollNeutralIcon,
        [c.kG.XBOX]: a.Z,
        [c.kG.PLAYSTATION]: r.Z
    },
    m = {
        [c.kG.SPOTIFY]: () => u.intl.string(u.t['0ZB/XF']),
        [c.kG.CRUNCHYROLL]: () => u.intl.string(u.t.jdJYX1),
        [c.kG.XBOX]: () => u.intl.string(u.t['Nfvo7+']),
        [c.kG.PLAYSTATION]: () => u.intl.string(u.t.fFl4jo)
    };
function f(e) {
    var n;
    let { type: t, 'aria-label': i, ...r } = e,
        a = d[t];
    if (null == a) return null;
    let o = null != i ? i : null === (n = m[t]) || void 0 === n ? void 0 : n.call(m);
    return (0, l.jsx)(s.Z, {
        Icon: a,
        ...r,
        'aria-label': o
    });
}
