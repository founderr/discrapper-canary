t.d(s, {
    Z: function () {
        return _;
    }
});
var n = t(200651);
t(192379);
var a = t(866442),
    i = t(692547),
    r = t(481060),
    o = t(220082),
    l = t(193528),
    c = t(993413),
    d = t(689938);
function _(e) {
    var s;
    let { user: t, savedUserColor: _, pendingColor: u, setPendingAccentColor: E } = e,
        T = t.getAvatarURL(null, 80),
        S = (0, r.useToken)(i.Z.unsafe_rawColors.PRIMARY_530).hex(),
        I = (0, o.Cf)(T, S, !1),
        N = (0, a._i)(I[0]);
    return (0, n.jsx)(c.Z, {
        title: d.Z.Messages.USER_SETTINGS_BANNER_COLOR_TITLE,
        children: (0, n.jsx)(l.Z, {
            onChange: (e) => E(e),
            color: null !== (s = null != u ? u : _) && void 0 !== s ? s : N,
            suggestedColors: I,
            showEyeDropper: !0
        })
    });
}
