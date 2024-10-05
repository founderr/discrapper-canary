i.d(n, {
    Z: function () {
        return l;
    }
});
var t = i(735250);
i(470079);
var o = i(180781),
    a = i(321867),
    r = i(486324);
function l(e) {
    let { type: n, analyticsPage: i, analyticsSection: l, isGIF: s, banner: c } = e;
    return [r.pC.BANNER, r.pC.AVATAR].includes(n) && s
        ? (0, t.jsx)(a.Z, {
              analyticsSection: l,
              type: n
          })
        : n === r.pC.GUILD_BANNER
          ? (0, t.jsx)(o.Z, {
                analyticsSection: l,
                analyticsPage: i,
                isGIF: s,
                banner: c
            })
          : null;
}
