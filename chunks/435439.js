t.d(n, {
    Z: function () {
        return _;
    }
});
var l = t(735250),
    a = t(481060),
    i = t(374129),
    r = t(639351),
    o = t(908841),
    s = t(410441),
    c = t(206583),
    u = t(689938);
let d = {
        [c.kG.SPOTIFY]: o.Z,
        [c.kG.CRUNCHYROLL]: a.CrunchyrollNeutralIcon,
        [c.kG.XBOX]: r.Z,
        [c.kG.PLAYSTATION]: i.Z
    },
    m = {
        [c.kG.SPOTIFY]: () => u.Z.Messages.SPOTIFY,
        [c.kG.CRUNCHYROLL]: () => u.Z.Messages.CRUNCHYROLL,
        [c.kG.XBOX]: () => u.Z.Messages.XBOX,
        [c.kG.PLAYSTATION]: () => u.Z.Messages.PLAYSTATION
    };
function _(e) {
    var n;
    let { type: t, 'aria-label': a, ...i } = e,
        r = d[t];
    if (null == r) return null;
    let o = null != a ? a : null === (n = m[t]) || void 0 === n ? void 0 : n.call(m);
    return (0, l.jsx)(s.Z, {
        Icon: r,
        ...i,
        'aria-label': o
    });
}
