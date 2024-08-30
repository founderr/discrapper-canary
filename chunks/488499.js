n.d(i, {
    Z: function () {
        return s;
    }
});
var o = n(735250);
n(470079);
var t = n(180781),
    r = n(321867),
    a = n(486324);
function s(e) {
    let { type: i, analyticsPage: n, analyticsSection: s, isGIF: l, banner: c } = e;
    return [a.pC.BANNER, a.pC.AVATAR].includes(i) && l
        ? (0, o.jsx)(r.Z, {
              analyticsSection: s,
              type: i
          })
        : i === a.pC.GUILD_BANNER
          ? (0, o.jsx)(t.Z, {
                analyticsSection: s,
                analyticsPage: n,
                isGIF: l,
                banner: c
            })
          : null;
}
