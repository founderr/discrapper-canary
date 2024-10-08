a.d(n, {
    Z: function () {
        return C;
    }
});
var i = a(735250);
a(470079);
var s = a(120356),
    r = a.n(s),
    o = a(481060),
    l = a(680295),
    t = a(687158),
    c = a(576635),
    u = a(518950),
    d = a(438163),
    A = a(502762),
    E = a(150039),
    _ = a(450734),
    I = a(225089),
    p = a(853726),
    P = a(165747),
    v = a(981631),
    m = a(228168),
    N = a(706995);
function C(e) {
    let { user: n, guild: a, canUsePremiumCustomization: s, onUpsellClick: C, pendingBanner: T, pendingBio: f, pendingPronouns: L, pendingAvatar: R, pendingAvatarDecoration: M, pendingNickname: S, pendingGlobalName: Z, pendingThemeColors: g, pendingProfileEffectId: h, avatarClassName: U, containerClassName: x, isTryItOutFlow: j = !1, disabledInputs: y = !1, hideCustomStatus: O = !1, hideBioSection: B = !1, hideMessageInput: b = !0, hideExampleButton: w = !1 } = e,
        D = (0, t.ZP)(n.id, null == a ? void 0 : a.id),
        { avatarSrc: k, avatarDecorationSrc: V } = (0, u.Z)({
            user: n,
            guildId: null == a ? void 0 : a.id,
            avatarDecorationOverride: M,
            avatarOverride: R,
            size: o.AvatarSizes.SIZE_80,
            showPending: !0
        }),
        F = (0, E.ZT)({
            pendingProfileEffectId: h,
            displayProfile: D
        }),
        { theme: z, primaryColor: G } = (0, c.Z)({
            user: n,
            displayProfile: D,
            pendingThemeColors: g,
            isPreview: s
        });
    return (0, i.jsxs)(A.Z, {
        user: n,
        displayProfile: D,
        profileType: m.y0.BITE_SIZE,
        pendingThemeColors: g,
        pendingProfileEffectId: F,
        className: r()(N.container, x),
        forceShowPremium: s,
        children: [
            (0, i.jsxs)('header', {
                className: N.header,
                children: [
                    (0, i.jsx)(I.Z, {
                        user: n,
                        displayProfile: D,
                        guildId: null == a ? void 0 : a.id,
                        canUsePremiumCustomization: s,
                        pendingBanner: T,
                        isTryItOutFlow: j,
                        disabledInputs: y,
                        onUpsellClick: () => (null == C ? void 0 : C({ object: v.qAy.EDIT_PROFILE_BANNER }))
                    }),
                    (0, i.jsx)(_.Z, {
                        user: n,
                        guild: a,
                        displayProfile: D,
                        canUsePremiumCustomization: s,
                        previewAvatar: k,
                        previewAvatarDecoration: V,
                        previewTheme: z,
                        previewPrimaryColor: G,
                        className: U,
                        disabledInputs: y,
                        isTryItOutFlow: j,
                        onUpsellClick: () => (null == C ? void 0 : C({ object: v.qAy.AVATAR }))
                    }),
                    !O &&
                        (0, i.jsx)(d.Z, {
                            user: n,
                            profileType: m.y0.BITE_SIZE
                        })
                ]
            }),
            (0, i.jsx)(p.Z, {
                user: n,
                displayProfile: D,
                guild: a,
                pendingAvatar: R,
                pendingNickname: S,
                pendingGlobalName: Z,
                pendingBio: f,
                pendingPronouns: L,
                isTryItOutFlow: j,
                hideBioSection: B
            }),
            (0, i.jsx)(P.Z, {
                user: n,
                hideMessageInput: b,
                hideExampleButton: w
            }),
            null != F && (0, i.jsx)(l.Z, { profileEffectId: F })
        ]
    });
}
