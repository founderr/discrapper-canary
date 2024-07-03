t.d(n, {
    Z: function () {
        return x;
    }
});
var i = t(735250);
t(470079);
var a = t(481060), r = t(680295), o = t(751009), s = t(318661), l = t(721987), c = t(438163), d = t(502762), u = t(204197), f = t(654904), p = t(450734), _ = t(225089), m = t(853726), C = t(165747), b = t(981631), g = t(228168), v = t(523940);
function x(e) {
    let {
            user: n,
            guild: t,
            canUsePremiumCustomization: x,
            onUpsellClick: h,
            pendingBanner: E,
            pendingBio: T,
            pendingPronouns: I,
            pendingAvatar: S,
            pendingAvatarDecoration: A,
            pendingNickname: N,
            pendingGlobalName: y,
            pendingThemeColors: P,
            pendingProfileEffectId: j,
            avatarClassName: O,
            isTryItOutFlow: Z = !1,
            disabledInputs: B = !1,
            hideCustomStatus: k = !1,
            hideBioSection: w = !1,
            hideMessageInput: R = !0,
            hideExampleButton: M = !1
        } = e, L = (0, s.ZP)(n.id, null == t ? void 0 : t.id), {
            avatarSrc: D,
            avatarDecorationSrc: G
        } = (0, u.Z)({
            user: n,
            guildId: null == t ? void 0 : t.id,
            avatarDecorationOverride: A,
            avatarOverride: S,
            size: a.AvatarSizes.SIZE_80,
            showPending: !0
        }), H = (0, f.ZT)({
            pendingProfileEffectId: j,
            displayProfile: L
        }), {
            theme: F,
            primaryColor: W
        } = (0, l.Z)({
            user: n,
            displayProfile: L,
            pendingThemeColors: P,
            isPreview: x
        }), {
            accountPopoutStatusEditEnabled: U,
            profileStatusEditEnabled: z
        } = (0, o.K)({
            location: 'ProfileCustomizationPreview',
            autoTrackExposure: !k
        });
    return (0, i.jsxs)(d.Z, {
        user: n,
        displayProfile: L,
        profileType: g.y0.BITE_SIZE,
        pendingThemeColors: P,
        pendingProfileEffectId: H,
        className: v.container,
        forceShowPremium: x,
        children: [
            (0, i.jsxs)('header', {
                className: v.header,
                children: [
                    (0, i.jsx)(_.Z, {
                        user: n,
                        displayProfile: L,
                        guildId: null == t ? void 0 : t.id,
                        canUsePremiumCustomization: x,
                        pendingBanner: E,
                        hasProfileEffect: null != H,
                        isTryItOutFlow: Z,
                        disabledInputs: B,
                        onUpsellClick: () => null == h ? void 0 : h({ object: b.qAy.EDIT_PROFILE_BANNER })
                    }),
                    (0, i.jsx)(p.Z, {
                        user: n,
                        guild: t,
                        displayProfile: L,
                        canUsePremiumCustomization: x,
                        previewAvatar: D,
                        previewAvatarDecoration: G,
                        previewTheme: F,
                        previewPrimaryColor: W,
                        className: O,
                        disabledInputs: B,
                        isTryItOutFlow: Z,
                        onUpsellClick: () => null == h ? void 0 : h({ object: b.qAy.AVATAR })
                    }),
                    !k && (0, i.jsx)(c.Z, {
                        user: n,
                        profileType: g.y0.BITE_SIZE,
                        editEnabled: U || z
                    })
                ]
            }),
            (0, i.jsx)(m.Z, {
                user: n,
                displayProfile: L,
                guild: t,
                pendingAvatar: S,
                pendingNickname: N,
                pendingGlobalName: y,
                pendingBio: T,
                pendingPronouns: I,
                isTryItOutFlow: Z,
                hideBioSection: w
            }),
            (0, i.jsx)(C.Z, {
                user: n,
                hideMessageInput: R,
                hideExampleButton: M
            }),
            null != H && (0, i.jsx)(r.Z, { profileEffectId: H })
        ]
    });
}
