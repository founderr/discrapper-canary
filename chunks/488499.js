n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var o = n(180781),
    a = n(321867),
    r = n(486324);
function c(e) {
    let { type: t, analyticsPage: n, analyticsSection: c, isGIF: l, banner: s } = e;
    return [r.pC.BANNER, r.pC.AVATAR].includes(t) && l
        ? (0, i.jsx)(a.Z, {
              analyticsSection: c,
              type: t
          })
        : t === r.pC.GUILD_BANNER
          ? (0, i.jsx)(o.Z, {
                analyticsSection: c,
                analyticsPage: n,
                isGIF: l,
                banner: s
            })
          : null;
}
