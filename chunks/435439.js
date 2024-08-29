l.d(n, {
    Z: function () {
        return E;
    }
});
var t = l(735250),
    r = l(481060),
    a = l(374129),
    i = l(639351),
    s = l(908841),
    u = l(410441),
    o = l(206583),
    c = l(689938);
let d = {
        [o.kG.SPOTIFY]: s.Z,
        [o.kG.CRUNCHYROLL]: r.CrunchyrollNeutralIcon,
        [o.kG.XBOX]: i.Z,
        [o.kG.PLAYSTATION]: a.Z
    },
    m = {
        [o.kG.SPOTIFY]: () => c.Z.Messages.SPOTIFY,
        [o.kG.CRUNCHYROLL]: () => c.Z.Messages.CRUNCHYROLL,
        [o.kG.XBOX]: () => c.Z.Messages.XBOX,
        [o.kG.PLAYSTATION]: () => c.Z.Messages.PLAYSTATION
    };
function E(e) {
    var n;
    let { type: l, 'aria-label': r, ...a } = e,
        i = d[l];
    if (null == i) return null;
    let s = null != r ? r : null === (n = m[l]) || void 0 === n ? void 0 : n.call(m);
    return (0, t.jsx)(u.Z, {
        Icon: i,
        ...a,
        'aria-label': s
    });
}
