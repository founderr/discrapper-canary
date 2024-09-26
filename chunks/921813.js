n.d(t, {
    Z: function () {
        return f;
    }
});
var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    l = n(680295),
    o = n(687158),
    c = n(576635),
    d = n(518950),
    _ = n(438163),
    E = n(502762),
    u = n(654904),
    T = n(450734),
    I = n(225089),
    R = n(853726),
    g = n(165747),
    N = n(981631),
    C = n(228168),
    m = n(706995);
function f(e) {
    let { user: t, guild: n, canUsePremiumCustomization: a, onUpsellClick: f, pendingBanner: A, pendingBio: p, pendingPronouns: M, pendingAvatar: S, pendingAvatarDecoration: h, pendingNickname: x, pendingGlobalName: b, pendingThemeColors: O, pendingProfileEffectId: P, avatarClassName: v, containerClassName: L, isTryItOutFlow: Z = !1, disabledInputs: D = !1, hideCustomStatus: B = !1, hideBioSection: U = !1, hideMessageInput: j = !0, hideExampleButton: G = !1 } = e,
        w = (0, o.ZP)(t.id, null == n ? void 0 : n.id),
        { avatarSrc: y, avatarDecorationSrc: H } = (0, d.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: h,
            avatarOverride: S,
            size: i.AvatarSizes.SIZE_80,
            showPending: !0
        }),
        k = (0, u.ZT)({
            pendingProfileEffectId: P,
            displayProfile: w
        }),
        { theme: F, primaryColor: V } = (0, c.Z)({
            user: t,
            displayProfile: w,
            pendingThemeColors: O,
            isPreview: a
        });
    return (0, s.jsxs)(E.Z, {
        user: t,
        displayProfile: w,
        profileType: C.y0.BITE_SIZE,
        pendingThemeColors: O,
        pendingProfileEffectId: k,
        className: r()(m.container, L),
        forceShowPremium: a,
        children: [
            (0, s.jsxs)('header', {
                className: m.header,
                children: [
                    (0, s.jsx)(I.Z, {
                        user: t,
                        displayProfile: w,
                        guildId: null == n ? void 0 : n.id,
                        canUsePremiumCustomization: a,
                        pendingBanner: A,
                        isTryItOutFlow: Z,
                        disabledInputs: D,
                        onUpsellClick: () => (null == f ? void 0 : f({ object: N.qAy.EDIT_PROFILE_BANNER }))
                    }),
                    (0, s.jsx)(T.Z, {
                        user: t,
                        guild: n,
                        displayProfile: w,
                        canUsePremiumCustomization: a,
                        previewAvatar: y,
                        previewAvatarDecoration: H,
                        previewTheme: F,
                        previewPrimaryColor: V,
                        className: v,
                        disabledInputs: D,
                        isTryItOutFlow: Z,
                        onUpsellClick: () => (null == f ? void 0 : f({ object: N.qAy.AVATAR }))
                    }),
                    !B &&
                        (0, s.jsx)(_.Z, {
                            user: t,
                            profileType: C.y0.BITE_SIZE
                        })
                ]
            }),
            (0, s.jsx)(R.Z, {
                user: t,
                displayProfile: w,
                guild: n,
                pendingAvatar: S,
                pendingNickname: x,
                pendingGlobalName: b,
                pendingBio: p,
                pendingPronouns: M,
                isTryItOutFlow: Z,
                hideBioSection: U
            }),
            (0, s.jsx)(g.Z, {
                user: t,
                hideMessageInput: j,
                hideExampleButton: G
            }),
            null != k && (0, s.jsx)(l.Z, { profileEffectId: k })
        ]
    });
}
