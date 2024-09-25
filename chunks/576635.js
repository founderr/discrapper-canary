n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(47120);
var i = n(866442),
    a = n(442837),
    o = n(410030),
    s = n(607070),
    l = n(220082),
    u = n(44315),
    c = n(168631),
    d = n(981631);
function _(e) {
    var t, n, r;
    let { user: _, displayProfile: E, pendingThemeColors: f, pendingAvatar: h, isPreview: p } = e,
        m = (0, o.ZP)(),
        I = (0, a.e7)([s.Z], () => s.Z.syncProfileThemeWithUserTheme),
        T = null != h ? h : null == _ ? void 0 : _.getAvatarURL(null == E ? void 0 : E.guildId, 80),
        g = (0, u.Sl)(d.Ilk.PRIMARY_530).hex,
        [S, A] = (0, l.Cf)(T, g, !1);
    if (!(null == E ? void 0 : E.canEditThemes) && !p)
        return {
            theme: m,
            primaryColor: null,
            secondaryColor: null
        };
    let v = null == E ? void 0 : E.getPreviewThemeColors(f),
        N = null !== (t = null == v ? void 0 : v[0]) && void 0 !== t ? t : (0, i._i)(S),
        O = null !== (n = null == v ? void 0 : v[1]) && void 0 !== n ? n : (0, i._i)(A);
    return {
        theme: I ? m : null !== (r = (0, c.V3)(N)) && void 0 !== r ? r : m,
        primaryColor: N,
        secondaryColor: O
    };
}
