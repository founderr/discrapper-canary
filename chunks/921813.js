t.d(n, {
    Z: function () {
        return v;
    }
});
var i = t(735250);
t(470079);
var a = t(481060), r = t(680295), o = t(318661), s = t(721987), l = t(438163), c = t(502762), d = t(204197), u = t(654904), f = t(450734), p = t(225089), _ = t(853726), m = t(165747), C = t(981631), b = t(228168), g = t(523940);
function v(e) {
    let {
            user: n,
            guild: t,
            canUsePremiumCustomization: v,
            onUpsellClick: x,
            pendingBanner: h,
            pendingBio: E,
            pendingPronouns: T,
            pendingAvatar: I,
            pendingAvatarDecoration: S,
            pendingNickname: A,
            pendingGlobalName: N,
            pendingThemeColors: y,
            pendingProfileEffectId: P,
            avatarClassName: j,
            isTryItOutFlow: O = !1,
            disabledInputs: Z = !1,
            hideCustomStatus: B = !1,
            hideBioSection: k = !1,
            hideMessageInput: w = !0,
            hideExampleButton: R = !1
        } = e, M = (0, o.ZP)(n.id, null == t ? void 0 : t.id), {
            avatarSrc: L,
            avatarDecorationSrc: D
        } = (0, d.Z)({
            user: n,
            guildId: null == t ? void 0 : t.id,
            avatarDecorationOverride: S,
            avatarOverride: I,
            size: a.AvatarSizes.SIZE_80,
            showPending: !0
        }), G = (0, u.ZT)({
            pendingProfileEffectId: P,
            displayProfile: M
        }), {
            theme: H,
            primaryColor: F
        } = (0, s.Z)({
            user: n,
            displayProfile: M,
            pendingThemeColors: y,
            isPreview: v
        });
    return (0, i.jsxs)(c.Z, {
        user: n,
        displayProfile: M,
        profileType: b.y0.BITE_SIZE,
        pendingThemeColors: y,
        pendingProfileEffectId: G,
        className: g.container,
        forceShowPremium: v,
        children: [
            (0, i.jsxs)('header', {
                className: g.header,
                children: [
                    (0, i.jsx)(p.Z, {
                        user: n,
                        displayProfile: M,
                        guildId: null == t ? void 0 : t.id,
                        canUsePremiumCustomization: v,
                        pendingBanner: h,
                        hasProfileEffect: null != G,
                        isTryItOutFlow: O,
                        disabledInputs: Z,
                        onUpsellClick: () => null == x ? void 0 : x({ object: C.qAy.EDIT_PROFILE_BANNER })
                    }),
                    (0, i.jsx)(f.Z, {
                        user: n,
                        guild: t,
                        displayProfile: M,
                        canUsePremiumCustomization: v,
                        previewAvatar: L,
                        previewAvatarDecoration: D,
                        previewTheme: H,
                        previewPrimaryColor: F,
                        className: j,
                        disabledInputs: Z,
                        isTryItOutFlow: O,
                        onUpsellClick: () => null == x ? void 0 : x({ object: C.qAy.AVATAR })
                    }),
                    !B && (0, i.jsx)(l.Z, {
                        user: n,
                        profileType: b.y0.BITE_SIZE
                    })
                ]
            }),
            (0, i.jsx)(_.Z, {
                user: n,
                displayProfile: M,
                guild: t,
                pendingAvatar: I,
                pendingNickname: A,
                pendingGlobalName: N,
                pendingBio: E,
                pendingPronouns: T,
                isTryItOutFlow: O,
                hideBioSection: k
            }),
            (0, i.jsx)(m.Z, {
                user: n,
                hideMessageInput: w,
                hideExampleButton: R
            }),
            null != G && (0, i.jsx)(r.Z, { profileEffectId: G })
        ]
    });
}
