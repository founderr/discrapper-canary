n.d(i, {
    Z: function () {
        return a;
    }
});
var t = n(200651);
n(192379);
var o = n(180781),
    r = n(321867),
    l = n(486324);
function a(e) {
    let { type: i, analyticsPage: n, analyticsSection: a, isGIF: c, banner: s } = e;
    return [l.pC.BANNER, l.pC.AVATAR].includes(i) && c
        ? (0, t.jsx)(r.Z, {
              analyticsSection: a,
              type: i
          })
        : i === l.pC.GUILD_BANNER
          ? (0, t.jsx)(o.Z, {
                analyticsSection: a,
                analyticsPage: n,
                isGIF: c,
                banner: s
            })
          : null;
}
