n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(588126),
    o = n(31590),
    c = n(25990),
    d = n(921813),
    u = n(293859);
function m(e) {
    var t;
    let { user: m, disabledInputs: h, containerClassName: g } = e,
        { reducedMotion: p } = s.useContext(l.AccessibilityPreferencesContext),
        {
            pendingAvatar: x,
            pendingBanner: S,
            pendingThemeColors: T,
            pendingPronouns: C,
            pendingBio: E,
            tryItOutThemeColors: _,
            tryItOutAvatar: f,
            tryItOutBanner: I,
            tryItOutAvatarDecoration: N,
            tryItOutProfileEffectId: A
        } = (0, r.cj)([c.Z], () => {
            let e = c.Z.getAllPending(),
                t = c.Z.getAllTryItOut();
            return {
                ...e,
                ...t
            };
        }),
        { enabled: b } = o.Z.useExperiment({ location: 'TryItOutPreview' }, { autoTrackExposure: !1 }),
        v = (0, a.Z)(N, !b);
    return (0, i.jsx)(d.Z, {
        containerClassName: g,
        user: m,
        pendingPronouns: C,
        pendingBio: E,
        pendingBanner: null !== (t = null != I ? I : S) && void 0 !== t ? t : n(466045),
        pendingAvatar: null != f ? f : x,
        pendingThemeColors: null != _ ? _ : T,
        pendingAvatarDecoration: v,
        pendingProfileEffectId: A,
        avatarClassName: null != f || null != x || p.enabled ? void 0 : u.spinningAvatar,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0,
        hideExampleButton: !0,
        disabledInputs: h
    });
}
