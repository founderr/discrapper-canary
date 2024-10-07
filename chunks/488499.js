n.d(t, {
    Z: function () {
        return c;
    }
});
var a = n(735250);
n(470079);
var o = n(180781),
    i = n(321867),
    r = n(486324);
function c(e) {
    let { type: t, analyticsPage: n, analyticsSection: c, isGIF: s, banner: l } = e;
    return [r.pC.BANNER, r.pC.AVATAR].includes(t) && s
        ? (0, a.jsx)(i.Z, {
              analyticsSection: c,
              type: t
          })
        : t === r.pC.GUILD_BANNER
          ? (0, a.jsx)(o.Z, {
                analyticsSection: c,
                analyticsPage: n,
                isGIF: s,
                banner: l
            })
          : null;
}
