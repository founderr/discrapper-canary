n(47120);
var i = n(200651);
n(192379);
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
    f = n(937615),
    T = n(583434),
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
    let { skuId: t, skuPricePreview: n, isSelected: a, onSelect: c, shouldDisplayHeader: u = !1, className: E } = e,
        { product: p } = (0, T.T)(t),
        { giftRecipient: S, giftRecipientError: A } = (0, d.wD)(),
        x = (0, l.e7)([m.default], () => m.default.getCurrentUser());
    if (null == p || null == n) return null;
    let [R] = p.items,
        v = null != S && S.id !== (null == x ? void 0 : x.id);
    return (0, i.jsxs)('div', {
        className: E,
        children: [
            u &&
                (0, i.jsxs)('div', {
                    className: N.previewTitleContainer,
                    children: [
                        (0, i.jsx)(o.FormTitle, {
                            className: N.previewTitle,
                            children: h.Z.Messages.COLLECTIBLES_GIFT_LABEL
                        }),
                        v &&
                            (0, i.jsx)(
                                o.Popout,
                                {
                                    preload: () => (0, I.Z)(S.id, S.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, i.jsx)(_.Z, {
                                            ...e,
                                            user: S,
                                            pendingAvatar: S.getAvatarURL(null, (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80)),
                                            pendingAvatarDecoration: R.type === r.Z.AVATAR_DECORATION ? R : null,
                                            pendingProfileEffectId: R.type === r.Z.PROFILE_EFFECT ? R.id : null,
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
                                S.id
                            )
                    ]
                }),
            (0, i.jsxs)(o.Clickable, {
                tag: 'div',
                onClick: () => {
                    null != t && null != c && c(t);
                },
                className: s()(N.previewContainer, {
                    [N.previewContainerSelected]: a && null == A,
                    [N.previewContainerError]: null != A
                }),
                children: [
                    (0, i.jsxs)('div', {
                        className: N.giftInfoContainer,
                        children: [
                            R.type === r.Z.AVATAR_DECORATION && (0, i.jsx)(C, { avatarDecoration: R }),
                            R.type === r.Z.PROFILE_EFFECT && (0, i.jsx)(g, { profileEffect: R }),
                            (0, i.jsxs)('div', {
                                className: N.previewTextContainer,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/semibold',
                                        children: p.name
                                    }),
                                    (0, i.jsx)(o.Heading, {
                                        variant: 'heading-sm/medium',
                                        color: 'header-secondary',
                                        children: R.type === r.Z.AVATAR_DECORATION ? h.Z.Messages.USER_SETTINGS_AVATAR_DECORATION : R.type === r.Z.PROFILE_EFFECT ? h.Z.Messages.USER_SETTINGS_PROFILE_EFFECT : null
                                    })
                                ]
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                children: (0, f.T4)(n.amount, n.currency)
                            })
                        ]
                    }),
                    a &&
                        null != A &&
                        (0, i.jsx)('div', {
                            className: N.recipientError,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'status-danger-background',
                                children: A
                            })
                        })
                ]
            })
        ]
    });
};
