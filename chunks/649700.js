n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(588126),
    o = n(25990),
    c = n(921813),
    d = n(283655);
function u(e) {
    var t;
    let { user: u, disabledInputs: m, containerClassName: h } = e,
        { reducedMotion: g } = s.useContext(l.AccessibilityPreferencesContext),
        {
            pendingAvatar: p,
            pendingBanner: x,
            pendingThemeColors: S,
            pendingPronouns: T,
            pendingBio: C,
            tryItOutThemeColors: E,
            tryItOutAvatar: _,
            tryItOutBanner: f,
            tryItOutAvatarDecoration: I,
            tryItOutProfileEffectId: N
        } = (0, r.cj)([o.Z], () => {
            let e = o.Z.getAllPending(),
                t = o.Z.getAllTryItOut();
            return {
                ...e,
                ...t
            };
        }),
        A = (0, a.Z)(I, !1);
    return (0, i.jsx)(c.Z, {
        containerClassName: h,
        user: u,
        pendingPronouns: T,
        pendingBio: C,
        pendingBanner: null !== (t = null != f ? f : x) && void 0 !== t ? t : n(466045),
        pendingAvatar: null != _ ? _ : p,
        pendingThemeColors: null != E ? E : S,
        pendingAvatarDecoration: A,
        pendingProfileEffectId: N,
        avatarClassName: null != _ || null != p || g.enabled ? void 0 : d.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        hideExampleButton: !0,
        disabledInputs: m
    });
}
