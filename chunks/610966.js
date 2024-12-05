n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(866442),
    r = n(692547),
    l = n(481060),
    a = n(220082),
    o = n(193528),
    c = n(993413),
    d = n(388032);
function u(e) {
    var t;
    let { user: n, savedUserColor: u, pendingColor: m, setPendingAccentColor: g } = e,
        h = n.getAvatarURL(null, 80),
        p = (0, l.useToken)(r.Z.unsafe_rawColors.PRIMARY_530).hex(),
        x = (0, a.Cf)(h, p, !1),
        T = (0, s._i)(x[0]);
    return (0, i.jsx)(c.Z, {
        title: d.intl.string(d.t['/X3fkZ']),
        children: (0, i.jsx)(o.Z, {
            onChange: (e) => g(e),
            color: null !== (t = null != m ? m : u) && void 0 !== t ? t : T,
            suggestedColors: x,
            showEyeDropper: !0
        })
    });
}
