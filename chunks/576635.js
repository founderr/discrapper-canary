r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(47120);
var a = r(866442),
    s = r(442837),
    o = r(410030),
    l = r(607070),
    u = r(220082),
    c = r(44315),
    d = r(168631),
    f = r(981631);
function _(e) {
    var n, r, i;
    let { user: _, displayProfile: h, pendingThemeColors: p, pendingAvatar: m, isPreview: g } = e,
        E = (0, o.ZP)(),
        v = (0, s.e7)([l.Z], () => l.Z.syncProfileThemeWithUserTheme),
        I = null != m ? m : null == _ ? void 0 : _.getAvatarURL(null == h ? void 0 : h.guildId, 80),
        T = (0, c.Sl)(f.Ilk.PRIMARY_530).hex,
        [b, y] = (0, u.Cf)(I, T, !1);
    if (!(null == h ? void 0 : h.canEditThemes) && !g)
        return {
            theme: E,
            primaryColor: null,
            secondaryColor: null
        };
    let S = null == h ? void 0 : h.getPreviewThemeColors(p),
        A = null !== (n = null == S ? void 0 : S[0]) && void 0 !== n ? n : (0, a._i)(b),
        N = null !== (r = null == S ? void 0 : S[1]) && void 0 !== r ? r : (0, a._i)(y);
    return {
        theme: v ? E : null !== (i = (0, d.V3)(A)) && void 0 !== i ? i : E,
        primaryColor: A,
        secondaryColor: N
    };
}
