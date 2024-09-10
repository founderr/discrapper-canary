t(47120);
var s = t(735250);
t(470079);
var a = t(120356),
    l = t.n(a),
    r = t(979554),
    i = t(442837),
    o = t(481060),
    d = t(1585),
    c = t(125988),
    u = t(987209),
    E = t(921813),
    h = t(731896),
    C = t(484459),
    f = t(594174),
    x = t(937615),
    p = t(583434),
    m = t(689938),
    T = t(696307),
    I = t(223223);
let S = (e) => {
        let { avatarDecoration: n } = e,
            t = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
            { avatarDecorationSrc: a } = (0, c.Z)({
                user: t,
                avatarDecorationOverride: n,
                size: (0, d.y9)(o.AvatarSizes.SIZE_40)
            });
        return (0, s.jsx)('img', {
            src: a,
            alt: n.label,
            className: T.avatarDecoration
        });
    },
    v = (e) => {
        var n;
        let { profileEffect: t } = e,
            a = (0, h.V)(t.id),
            { accessibilityLabel: l, thumbnailPreviewSrc: r, title: i } = null !== (n = null == a ? void 0 : a.config) && void 0 !== n ? n : {};
        return (0, s.jsxs)('div', {
            className: T.profileEffectContainer,
            children: [
                (0, s.jsx)('img', {
                    src: I,
                    alt: l,
                    className: T.profileEffectBackground
                }),
                (0, s.jsx)('img', {
                    className: T.profileEffect,
                    src: r,
                    alt: i
                })
            ]
        });
    };
n.Z = (e) => {
    let { selectedSkuId: n, selectedSkuPricePreview: t, className: a } = e,
        { product: d } = (0, p.T)(n),
        { giftRecipient: c, giftRecipientError: h } = (0, u.wD)(),
        I = (0, i.e7)([f.default], () => f.default.getCurrentUser());
    if (null == d || null == t) return null;
    let [g] = d.items,
        _ = null != c && c.id !== (null == I ? void 0 : I.id);
    return (0, s.jsxs)('div', {
        className: a,
        children: [
            (0, s.jsxs)('div', {
                className: T.previewTitleContainer,
                children: [
                    (0, s.jsx)(o.FormTitle, {
                        className: T.previewTitle,
                        children: m.Z.Messages.COLLECTIBLES_GIFT_LABEL
                    }),
                    _ &&
                        (0, s.jsx)(
                            o.Popout,
                            {
                                preload: () => (0, C.Z)(c.id, c.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, s.jsx)(E.Z, {
                                        ...e,
                                        user: c,
                                        pendingAvatar: c.getAvatarURL(null, (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80)),
                                        pendingAvatarDecoration: g.type === r.Z.AVATAR_DECORATION ? g : null,
                                        pendingProfileEffectId: g.type === r.Z.PROFILE_EFFECT ? g.id : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0
                                    }),
                                align: 'center',
                                position: 'right',
                                children: (e) =>
                                    (0, s.jsx)(o.Clickable, {
                                        ...e,
                                        className: T.previewLink,
                                        children: (0, s.jsx)(o.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-link',
                                            children: m.Z.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
                                        })
                                    })
                            },
                            c.id
                        )
                ]
            }),
            (0, s.jsxs)('div', {
                className: l()(T.previewContainer, { [T.previewContainerError]: null != h }),
                children: [
                    g.type === r.Z.AVATAR_DECORATION && (0, s.jsx)(S, { avatarDecoration: g }),
                    g.type === r.Z.PROFILE_EFFECT && (0, s.jsx)(v, { profileEffect: g }),
                    (0, s.jsxs)('div', {
                        className: T.previewTextContainer,
                        children: [
                            (0, s.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                children: d.name
                            }),
                            (0, s.jsx)(o.Heading, {
                                variant: 'heading-sm/medium',
                                color: 'header-secondary',
                                children: g.type === r.Z.AVATAR_DECORATION ? m.Z.Messages.USER_SETTINGS_AVATAR_DECORATION : g.type === r.Z.PROFILE_EFFECT ? m.Z.Messages.USER_SETTINGS_PROFILE_EFFECT : null
                            })
                        ]
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        children: (0, x.T4)(t.amount, t.currency)
                    })
                ]
            }),
            null != h &&
                (0, s.jsx)(o.Text, {
                    className: T.recipientError,
                    variant: 'text-sm/normal',
                    color: 'status-danger-background',
                    children: h
                })
        ]
    });
};
