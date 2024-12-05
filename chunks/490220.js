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
    let { user: u, disabledInputs: m, containerClassName: g } = e,
        { reducedMotion: h } = s.useContext(l.AccessibilityPreferencesContext),
        {
            pendingAvatar: p,
            pendingBanner: x,
            pendingThemeColors: T,
            pendingPronouns: S,
            pendingBio: _,
            tryItOutThemeColors: E,
            tryItOutAvatar: C,
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
        containerClassName: g,
        user: u,
        pendingPronouns: S,
        pendingBio: _,
        pendingBanner: null !== (t = null != f ? f : x) && void 0 !== t ? t : n(466045),
        pendingAvatar: null != C ? C : p,
        pendingThemeColors: null != E ? E : T,
        pendingAvatarDecoration: A,
        pendingProfileEffectId: N,
        avatarClassName: null != C || null != p || h.enabled ? void 0 : d.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        hideExampleButton: !0,
        disabledInputs: m
    });
}
