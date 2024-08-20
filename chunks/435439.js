t.d(n, {
    Z: function () {
        return d;
    }
});
var l = t(735250),
    i = t(481060),
    r = t(374129),
    a = t(639351),
    o = t(908841),
    s = t(410441),
    c = t(206583);
let u = {
    [c.kG.SPOTIFY]: o.Z,
    [c.kG.CRUNCHYROLL]: i.CrunchyrollNeutralIcon,
    [c.kG.XBOX]: a.Z,
    [c.kG.PLAYSTATION]: r.Z
};
function d(e) {
    let { type: n, ...t } = e,
        i = u[n];
    return null == i
        ? null
        : (0, l.jsx)(s.Z, {
              Icon: i,
              ...t
          });
}
