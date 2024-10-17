n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(979554),
    l = n(442837),
    o = n(481060),
    c = n(1585),
    u = n(125988),
    d = n(987209),
    _ = n(921813),
    E = n(731896),
    I = n(484459),
    m = n(594174),
    T = n(937615),
    f = n(583434),
    h = n(689938),
    N = n(696307),
    p = n(223223);
let C = (e) => {
        let { avatarDecoration: t } = e,
            n = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
            { avatarDecorationSrc: a } = (0, u.Z)({
                user: n,
                avatarDecorationOverride: t,
                size: (0, c.y9)(o.AvatarSizes.SIZE_40)
            });
        return (0, i.jsx)('img', {
            src: a,
            alt: t.label,
            className: N.avatarDecoration
        });
    },
    g = (e) => {
        var t;
        let { profileEffect: n } = e,
            a = (0, E.V)(n.id),
            { accessibilityLabel: s, thumbnailPreviewSrc: r, title: l } = null !== (t = null == a ? void 0 : a.config) && void 0 !== t ? t : {};
        return (0, i.jsxs)('div', {
            className: N.profileEffectContainer,
            children: [
                (0, i.jsx)('img', {
                    src: p,
                    alt: s,
                    className: N.profileEffectBackground
                }),
                (0, i.jsx)('img', {
                    className: N.profileEffect,
                    src: r,
                    alt: l
                })
            ]
        });
    };
t.Z = (e) => {
    let { selectedSkuId: t, selectedSkuPricePreview: n, className: a } = e,
        { product: c } = (0, f.T)(t),
        { giftRecipient: u, giftRecipientError: E } = (0, d.wD)(),
        p = (0, l.e7)([m.default], () => m.default.getCurrentUser());
    if (null == c || null == n) return null;
    let [S] = c.items,
        A = null != u && u.id !== (null == p ? void 0 : p.id);
    return (0, i.jsxs)('div', {
        className: a,
        children: [
            (0, i.jsxs)('div', {
                className: N.previewTitleContainer,
                children: [
                    (0, i.jsx)(o.FormTitle, {
                        className: N.previewTitle,
                        children: h.Z.Messages.COLLECTIBLES_GIFT_LABEL
                    }),
                    A &&
                        (0, i.jsx)(
                            o.Popout,
                            {
                                preload: () => (0, I.Z)(u.id, u.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, i.jsx)(_.Z, {
                                        ...e,
                                        user: u,
                                        pendingAvatar: u.getAvatarURL(null, (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80)),
                                        pendingAvatarDecoration: S.type === r.Z.AVATAR_DECORATION ? S : null,
                                        pendingProfileEffectId: S.type === r.Z.PROFILE_EFFECT ? S.id : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0
                                    }),
                                align: 'center',
                                position: 'right',
                                children: (e) =>
                                    (0, i.jsx)(o.Clickable, {
                                        ...e,
                                        className: N.previewLink,
                                        children: (0, i.jsx)(o.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-link',
                                            children: h.Z.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
                                        })
                                    })
                            },
                            u.id
                        )
                ]
            }),
            (0, i.jsxs)('div', {
                className: s()(N.previewContainer, { [N.previewContainerError]: null != E }),
                children: [
                    S.type === r.Z.AVATAR_DECORATION && (0, i.jsx)(C, { avatarDecoration: S }),
                    S.type === r.Z.PROFILE_EFFECT && (0, i.jsx)(g, { profileEffect: S }),
                    (0, i.jsxs)('div', {
                        className: N.previewTextContainer,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                children: c.name
                            }),
                            (0, i.jsx)(o.Heading, {
                                variant: 'heading-sm/medium',
                                color: 'header-secondary',
                                children: S.type === r.Z.AVATAR_DECORATION ? h.Z.Messages.USER_SETTINGS_AVATAR_DECORATION : S.type === r.Z.PROFILE_EFFECT ? h.Z.Messages.USER_SETTINGS_PROFILE_EFFECT : null
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        children: (0, T.T4)(n.amount, n.currency)
                    })
                ]
            }),
            null != E &&
                (0, i.jsx)(o.Text, {
                    className: N.recipientError,
                    variant: 'text-sm/normal',
                    color: 'status-danger-background',
                    children: E
                })
        ]
    });
};
