n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(735250);
n(470079);
var s = n(481060),
    i = n(680295),
    l = n(318661),
    a = n(721987),
    o = n(438163),
    c = n(502762),
    d = n(204197),
    u = n(654904),
    f = n(450734),
    m = n(225089),
    E = n(853726),
    p = n(165747),
    _ = n(981631),
    h = n(228168),
    g = n(60638);
function I(e) {
    let { user: t, guild: n, canUsePremiumCustomization: I, onUpsellClick: v, pendingBanner: C, pendingBio: x, pendingPronouns: A, pendingAvatar: P, pendingAvatarDecoration: Z, pendingNickname: T, pendingGlobalName: N, pendingThemeColors: S, pendingProfileEffectId: j, avatarClassName: R, isTryItOutFlow: M = !1, disabledInputs: O = !1, hideCustomStatus: L = !1, hideBioSection: y = !1, hideMessageInput: b = !0, hideExampleButton: B = !1 } = e,
        D = (0, l.ZP)(t.id, null == n ? void 0 : n.id),
        { avatarSrc: U, avatarDecorationSrc: k } = (0, d.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: Z,
            avatarOverride: P,
            size: s.AvatarSizes.SIZE_80,
            showPending: !0
        }),
        w = (0, u.ZT)({
            pendingProfileEffectId: j,
            displayProfile: D
        }),
        { theme: G, primaryColor: F } = (0, a.Z)({
            user: t,
            displayProfile: D,
            pendingThemeColors: S,
            isPreview: I
        });
    return (0, r.jsxs)(c.Z, {
        user: t,
        displayProfile: D,
        profileType: h.y0.BITE_SIZE,
        pendingThemeColors: S,
        pendingProfileEffectId: w,
        className: g.container,
        forceShowPremium: I,
        children: [
            (0, r.jsxs)('header', {
                className: g.header,
                children: [
                    (0, r.jsx)(m.Z, {
                        user: t,
                        displayProfile: D,
                        guildId: null == n ? void 0 : n.id,
                        canUsePremiumCustomization: I,
                        pendingBanner: C,
                        hasProfileEffect: null != w,
                        isTryItOutFlow: M,
                        disabledInputs: O,
                        onUpsellClick: () => (null == v ? void 0 : v({ object: _.qAy.EDIT_PROFILE_BANNER }))
                    }),
                    (0, r.jsx)(f.Z, {
                        user: t,
                        guild: n,
                        displayProfile: D,
                        canUsePremiumCustomization: I,
                        previewAvatar: U,
                        previewAvatarDecoration: k,
                        previewTheme: G,
                        previewPrimaryColor: F,
                        className: R,
                        disabledInputs: O,
                        isTryItOutFlow: M,
                        onUpsellClick: () => (null == v ? void 0 : v({ object: _.qAy.AVATAR }))
                    }),
                    !L &&
                        (0, r.jsx)(o.Z, {
                            user: t,
                            profileType: h.y0.BITE_SIZE
                        })
                ]
            }),
            (0, r.jsx)(E.Z, {
                user: t,
                displayProfile: D,
                guild: n,
                pendingAvatar: P,
                pendingNickname: T,
                pendingGlobalName: N,
                pendingBio: x,
                pendingPronouns: A,
                isTryItOutFlow: M,
                hideBioSection: y
            }),
            (0, r.jsx)(p.Z, {
                user: t,
                hideMessageInput: b,
                hideExampleButton: B
            }),
            null != w && (0, r.jsx)(i.Z, { profileEffectId: w })
        ]
    });
}
