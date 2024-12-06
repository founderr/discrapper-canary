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
    d = n(617630);
function u(e) {
    var t;
    let { user: u, disabledInputs: m, containerClassName: h } = e,
        { reducedMotion: g } = s.useContext(l.AccessibilityPreferencesContext),
        {
            pendingAvatar: p,
            pendingBanner: x,
            pendingThemeColors: S,
            pendingPronouns: T,
            pendingBio: E,
            tryItOutThemeColors: _,
            tryItOutAvatar: C,
            tryItOutBanner: I,
            tryItOutAvatarDecoration: f,
            tryItOutProfileEffectId: N
        } = (0, r.cj)([o.Z], () => {
            let e = o.Z.getAllPending(),
                t = o.Z.getAllTryItOut();
            return {
                ...e,
                ...t
            };
        }),
        A = (0, a.Z)(f, !1);
    return (0, i.jsx)(c.Z, {
        containerClassName: h,
        user: u,
        pendingPronouns: T,
        pendingBio: E,
        pendingBanner: null !== (t = null != I ? I : x) && void 0 !== t ? t : n(466045),
        pendingAvatar: null != C ? C : p,
        pendingThemeColors: null != _ ? _ : S,
        pendingAvatarDecoration: A,
        pendingProfileEffectId: N,
        avatarClassName: null != C || null != p || g.enabled ? void 0 : d.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        hideExampleButton: !0,
        disabledInputs: m
    });
}
