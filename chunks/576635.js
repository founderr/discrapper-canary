n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var r = n(866442),
    i = n(442837),
    a = n(410030),
    s = n(607070),
    o = n(220082),
    l = n(44315),
    u = n(168631),
    c = n(981631);
function d(e) {
    var t, n, d;
    let { user: f, displayProfile: _, pendingThemeColors: h, pendingAvatar: p, isPreview: m } = e,
        g = (0, a.ZP)(),
        E = (0, i.e7)([s.Z], () => s.Z.syncProfileThemeWithUserTheme),
        v = null != p ? p : null == f ? void 0 : f.getAvatarURL(null == _ ? void 0 : _.guildId, 80),
        I = (0, l.Sl)(c.Ilk.PRIMARY_530).hex,
        [S, b] = (0, o.Cf)(v, I, !1);
    if (!(null == _ ? void 0 : _.canEditThemes) && !m)
        return {
            theme: g,
            primaryColor: null,
            secondaryColor: null
        };
    let T = null == _ ? void 0 : _.getPreviewThemeColors(h),
        y = null !== (t = null == T ? void 0 : T[0]) && void 0 !== t ? t : (0, r._i)(S),
        A = null !== (n = null == T ? void 0 : T[1]) && void 0 !== n ? n : (0, r._i)(b);
    return {
        theme: E ? g : null !== (d = (0, u.V3)(y)) && void 0 !== d ? d : g,
        primaryColor: y,
        secondaryColor: A
    };
}
