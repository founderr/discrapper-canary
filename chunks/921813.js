t.d(n, {
    Z: function () {
        return v;
    }
});
var i = t(200651);
t(192379);
var a = t(120356),
    r = t.n(a),
    o = t(481060),
    l = t(680295),
    s = t(687158),
    d = t(576635),
    c = t(518950),
    u = t(438163),
    f = t(502762),
    p = t(150039),
    m = t(450734),
    g = t(225089),
    _ = t(853726),
    b = t(165747),
    h = t(981631),
    x = t(228168),
    C = t(507472);
function v(e) {
    let { user: n, guild: t, canUsePremiumCustomization: a, onUpsellClick: v, pendingBanner: S, pendingBio: I, pendingPronouns: j, pendingAvatar: T, pendingAvatarDecoration: y, pendingNickname: E, pendingGlobalName: N, pendingThemeColors: k, pendingProfileEffectId: P, avatarClassName: B, containerClassName: A, isTryItOutFlow: Z = !1, disabledInputs: w = !1, hideCustomStatus: O = !1, hideBioSection: M = !1, hideMessageInput: R = !0, hideExampleButton: G = !1 } = e,
        L = (0, s.ZP)(n.id, null == t ? void 0 : t.id),
        { avatarSrc: D, avatarDecorationSrc: H } = (0, c.Z)({
            user: n,
            guildId: null == t ? void 0 : t.id,
            avatarDecorationOverride: y,
            avatarOverride: T,
            size: o.AvatarSizes.SIZE_80,
            showPending: !0
        }),
        F = (0, p.ZT)({
            pendingProfileEffectId: P,
            displayProfile: L
        }),
        { theme: W, primaryColor: z } = (0, d.Z)({
            user: n,
            displayProfile: L,
            pendingThemeColors: k,
            isPreview: a
        });
    return (0, i.jsxs)(f.Z, {
        user: n,
        displayProfile: L,
        profileType: x.y0.BITE_SIZE,
        pendingThemeColors: k,
        className: r()(C.container, A),
        forceShowPremium: a,
        children: [
            (0, i.jsxs)('header', {
                className: C.header,
                children: [
                    (0, i.jsx)(g.Z, {
                        user: n,
                        displayProfile: L,
                        guildId: null == t ? void 0 : t.id,
                        canUsePremiumCustomization: a,
                        pendingBanner: S,
                        isTryItOutFlow: Z,
                        disabledInputs: w,
                        onUpsellClick: () => (null == v ? void 0 : v({ object: h.qAy.EDIT_PROFILE_BANNER }))
                    }),
                    (0, i.jsx)(m.Z, {
                        user: n,
                        guild: t,
                        displayProfile: L,
                        canUsePremiumCustomization: a,
                        previewAvatar: D,
                        previewAvatarDecoration: H,
                        previewTheme: W,
                        previewPrimaryColor: z,
                        className: B,
                        disabledInputs: w,
                        isTryItOutFlow: Z,
                        onUpsellClick: () => (null == v ? void 0 : v({ object: h.qAy.AVATAR }))
                    }),
                    !O &&
                        (0, i.jsx)(u.Z, {
                            user: n,
                            profileType: x.y0.BITE_SIZE
                        })
                ]
            }),
            (0, i.jsx)(_.Z, {
                user: n,
                displayProfile: L,
                guild: t,
                pendingAvatar: T,
                pendingNickname: E,
                pendingGlobalName: N,
                pendingBio: I,
                pendingPronouns: j,
                isTryItOutFlow: Z,
                hideBioSection: M
            }),
            (0, i.jsx)(b.Z, {
                user: n,
                hideMessageInput: R,
                hideExampleButton: G
            }),
            null != F && (0, i.jsx)(l.Z, { profileEffectId: F })
        ]
    });
}
