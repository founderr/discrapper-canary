n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250),
    i = n(481060),
    a = n(374129),
    o = n(639351),
    s = n(908841),
    l = n(410441),
    u = n(206583),
    c = n(689938);
let d = {
        [u.kG.SPOTIFY]: s.Z,
        [u.kG.CRUNCHYROLL]: i.CrunchyrollNeutralIcon,
        [u.kG.XBOX]: o.Z,
        [u.kG.PLAYSTATION]: a.Z
    },
    _ = {
        [u.kG.SPOTIFY]: () => c.Z.Messages.SPOTIFY,
        [u.kG.CRUNCHYROLL]: () => c.Z.Messages.CRUNCHYROLL,
        [u.kG.XBOX]: () => c.Z.Messages.XBOX,
        [u.kG.PLAYSTATION]: () => c.Z.Messages.PLAYSTATION
    };
function E(e) {
    var t;
    let { type: n, 'aria-label': i, ...a } = e,
        o = d[n];
    if (null == o) return null;
    let s = null != i ? i : null === (t = _[n]) || void 0 === t ? void 0 : t.call(_);
    return (0, r.jsx)(l.Z, {
        Icon: o,
        ...a,
        'aria-label': s
    });
}
