a.d(n, {
    Z: function () {
        return b;
    }
});
var t = a(735250);
a(470079);
var s = a(120356),
    c = a.n(s),
    o = a(481060),
    i = a(680295),
    r = a(687158),
    d = a(576635),
    l = a(518950),
    u = a(438163),
    A = a(502762),
    f = a(150039),
    p = a(450734),
    E = a(225089),
    _ = a(853726),
    L = a(165747),
    I = a(981631),
    P = a(228168),
    R = a(706995);
function b(e) {
    let { user: n, guild: a, canUsePremiumCustomization: s, onUpsellClick: b, pendingBanner: Z, pendingBio: N, pendingPronouns: m, pendingAvatar: T, pendingAvatarDecoration: v, pendingNickname: M, pendingGlobalName: C, pendingThemeColors: h, pendingProfileEffectId: S, avatarClassName: g, containerClassName: U, isTryItOutFlow: O = !1, disabledInputs: D = !1, hideCustomStatus: B = !1, hideBioSection: x = !1, hideMessageInput: y = !0, hideExampleButton: j = !1 } = e,
        w = (0, r.ZP)(n.id, null == a ? void 0 : a.id),
        { avatarSrc: k, avatarDecorationSrc: V } = (0, l.Z)({
            user: n,
            guildId: null == a ? void 0 : a.id,
            avatarDecorationOverride: v,
            avatarOverride: T,
            size: o.AvatarSizes.SIZE_80,
            showPending: !0
        }),
        F = (0, f.ZT)({
            pendingProfileEffectId: S,
            displayProfile: w
        }),
        { theme: z, primaryColor: K } = (0, d.Z)({
            user: n,
            displayProfile: w,
            pendingThemeColors: h,
            isPreview: s
        });
    return (0, t.jsxs)(A.Z, {
        user: n,
        displayProfile: w,
        profileType: P.y0.BITE_SIZE,
        pendingThemeColors: h,
        pendingProfileEffectId: F,
        className: c()(R.container, U),
        forceShowPremium: s,
        children: [
            (0, t.jsxs)('header', {
                className: R.header,
                children: [
                    (0, t.jsx)(E.Z, {
                        user: n,
                        displayProfile: w,
                        guildId: null == a ? void 0 : a.id,
                        canUsePremiumCustomization: s,
                        pendingBanner: Z,
                        isTryItOutFlow: O,
                        disabledInputs: D,
                        onUpsellClick: () => (null == b ? void 0 : b({ object: I.qAy.EDIT_PROFILE_BANNER }))
                    }),
                    (0, t.jsx)(p.Z, {
                        user: n,
                        guild: a,
                        displayProfile: w,
                        canUsePremiumCustomization: s,
                        previewAvatar: k,
                        previewAvatarDecoration: V,
                        previewTheme: z,
                        previewPrimaryColor: K,
                        className: g,
                        disabledInputs: D,
                        isTryItOutFlow: O,
                        onUpsellClick: () => (null == b ? void 0 : b({ object: I.qAy.AVATAR }))
                    }),
                    !B &&
                        (0, t.jsx)(u.Z, {
                            user: n,
                            profileType: P.y0.BITE_SIZE
                        })
                ]
            }),
            (0, t.jsx)(_.Z, {
                user: n,
                displayProfile: w,
                guild: a,
                pendingAvatar: T,
                pendingNickname: M,
                pendingGlobalName: C,
                pendingBio: N,
                pendingPronouns: m,
                isTryItOutFlow: O,
                hideBioSection: x
            }),
            (0, t.jsx)(L.Z, {
                user: n,
                hideMessageInput: y,
                hideExampleButton: j
            }),
            null != F && (0, t.jsx)(i.Z, { profileEffectId: F })
        ]
    });
}
