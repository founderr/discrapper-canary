t(47120);
var s = t(735250);
t(470079);
var a = t(120356),
    l = t.n(a),
    i = t(979554),
    r = t(442837),
    o = t(481060),
    d = t(1585),
    c = t(125988),
    u = t(987209),
    E = t(921813),
    C = t(731896),
    h = t(484459),
    x = t(594174),
    f = t(937615),
    T = t(583434),
    p = t(689938),
    I = t(696307),
    m = t(223223);
let S = (e) => {
        let { avatarDecoration: n } = e,
            t = (0, r.e7)([x.default], () => x.default.getCurrentUser()),
            { avatarDecorationSrc: a } = (0, c.Z)({
                user: t,
                avatarDecorationOverride: n,
                size: (0, d.y9)(o.AvatarSizes.SIZE_40)
            });
        return (0, s.jsx)('img', {
            src: a,
            alt: n.label,
            className: I.avatarDecoration
        });
    },
    g = (e) => {
        var n;
        let { profileEffect: t } = e,
            a = (0, C.V)(t.id),
            { accessibilityLabel: l, thumbnailPreviewSrc: i, title: r } = null !== (n = null == a ? void 0 : a.config) && void 0 !== n ? n : {};
        return (0, s.jsxs)('div', {
            className: I.profileEffectContainer,
            children: [
                (0, s.jsx)('img', {
                    src: m,
                    alt: l,
                    className: I.profileEffectBackground
                }),
                (0, s.jsx)('img', {
                    className: I.profileEffect,
                    src: i,
                    alt: r
                })
            ]
        });
    };
n.Z = (e) => {
    let { selectedSkuId: n, selectedSkuPricePreview: t, className: a } = e,
        { product: d } = (0, T.T)(n),
        { giftRecipient: c, giftRecipientError: C } = (0, u.wD)(),
        m = (0, r.e7)([x.default], () => x.default.getCurrentUser());
    if (null == d || null == t) return null;
    let [_] = d.items,
        N = null != c && c.id !== (null == m ? void 0 : m.id);
    return (0, s.jsxs)('div', {
        className: a,
        children: [
            (0, s.jsxs)('div', {
                className: I.previewTitleContainer,
                children: [
                    (0, s.jsx)(o.FormTitle, {
                        className: I.previewTitle,
                        children: p.Z.Messages.COLLECTIBLES_GIFT_LABEL
                    }),
                    N &&
                        (0, s.jsx)(
                            o.Popout,
                            {
                                preload: () => (0, h.Z)(c.id, c.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, s.jsx)(E.Z, {
                                        ...e,
                                        user: c,
                                        pendingAvatar: c.getAvatarURL(null, (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80)),
                                        pendingAvatarDecoration: _.type === i.Z.AVATAR_DECORATION ? _ : null,
                                        pendingProfileEffectId: _.type === i.Z.PROFILE_EFFECT ? _.id : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0
                                    }),
                                align: 'center',
                                position: 'right',
                                children: (e) =>
                                    (0, s.jsx)(o.Clickable, {
                                        ...e,
                                        className: I.previewLink,
                                        children: (0, s.jsx)(o.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-link',
                                            children: p.Z.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
                                        })
                                    })
                            },
                            c.id
                        )
                ]
            }),
            (0, s.jsxs)('div', {
                className: l()(I.previewContainer, { [I.previewContainerError]: null != C }),
                children: [
                    _.type === i.Z.AVATAR_DECORATION && (0, s.jsx)(S, { avatarDecoration: _ }),
                    _.type === i.Z.PROFILE_EFFECT && (0, s.jsx)(g, { profileEffect: _ }),
                    (0, s.jsxs)('div', {
                        className: I.previewTextContainer,
                        children: [
                            (0, s.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                children: d.name
                            }),
                            (0, s.jsx)(o.Heading, {
                                variant: 'heading-sm/medium',
                                color: 'header-secondary',
                                children: _.type === i.Z.AVATAR_DECORATION ? p.Z.Messages.USER_SETTINGS_AVATAR_DECORATION : _.type === i.Z.PROFILE_EFFECT ? p.Z.Messages.USER_SETTINGS_PROFILE_EFFECT : null
                            })
                        ]
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        children: (0, f.T4)(t.amount, t.currency)
                    })
                ]
            }),
            null != C &&
                (0, s.jsx)(o.Text, {
                    className: I.recipientError,
                    variant: 'text-sm/normal',
                    color: 'status-danger-background',
                    children: C
                })
        ]
    });
};
