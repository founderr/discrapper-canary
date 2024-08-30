t.d(s, {
    Z: function () {
        return u;
    }
});
var n = t(735250);
t(470079);
var a = t(866442),
    i = t(692547),
    r = t(481060),
    o = t(220082),
    l = t(193528),
    c = t(993413),
    d = t(689938);
function u(e) {
    var s;
    let { user: t, savedUserColor: u, pendingColor: _, setPendingAccentColor: E } = e,
        T = t.getAvatarURL(null, 80),
        I = (0, r.useToken)(i.Z.unsafe_rawColors.PRIMARY_530).hex(),
        S = (0, o.Cf)(T, I, !1),
        N = (0, a._i)(S[0]);
    return (0, n.jsx)(c.Z, {
        title: d.Z.Messages.USER_SETTINGS_BANNER_COLOR_TITLE,
        children: (0, n.jsx)(l.Z, {
            onChange: (e) => E(e),
            color: null !== (s = null != _ ? _ : u) && void 0 !== s ? s : N,
            suggestedColors: S,
            showEyeDropper: !0
        })
    });
}
