n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(735250);
n(470079);
var a = n(180781),
    o = n(321867),
    r = n(486324);
function s(e) {
    let { type: t, analyticsPage: n, analyticsSection: s, isGIF: l, banner: c } = e;
    return [r.pC.BANNER, r.pC.AVATAR].includes(t) && l
        ? (0, i.jsx)(o.Z, {
              analyticsSection: s,
              type: t
          })
        : t === r.pC.GUILD_BANNER
          ? (0, i.jsx)(a.Z, {
                analyticsSection: s,
                analyticsPage: n,
                isGIF: l,
                banner: c
            })
          : null;
}
