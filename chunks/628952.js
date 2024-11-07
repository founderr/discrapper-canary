t(47120);
var i = t(200651);
t(192379);
var a = t(120356),
    r = t.n(a),
    o = t(979554),
    l = t(442837),
    s = t(481060),
    d = t(1585),
    c = t(125988),
    u = t(987209),
    f = t(921813),
    p = t(731896),
    m = t(484459),
    g = t(594174),
    _ = t(937615),
    b = t(583434),
    h = t(388032),
    x = t(424188),
    C = t(223223);
let v = (e) => {
        let { avatarDecoration: n } = e,
            t = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
            { avatarDecorationSrc: a } = (0, c.Z)({
                user: t,
                avatarDecorationOverride: n,
                size: (0, d.y9)(s.AvatarSizes.SIZE_40)
            });
        return (0, i.jsx)('img', {
            src: a,
            alt: n.label,
            className: x.avatarDecoration
        });
    },
    S = (e) => {
        var n;
        let { profileEffect: t } = e,
            a = (0, p.V)(t.id),
            { accessibilityLabel: r, thumbnailPreviewSrc: o, title: l } = null !== (n = null == a ? void 0 : a.config) && void 0 !== n ? n : {};
        return (0, i.jsxs)('div', {
            className: x.profileEffectContainer,
            children: [
                (0, i.jsx)('img', {
                    src: C,
                    alt: r,
                    className: x.profileEffectBackground
                }),
                (0, i.jsx)('img', {
                    className: x.profileEffect,
                    src: o,
                    alt: l
                })
            ]
        });
    };
n.Z = (e) => {
    let { skuId: n, skuPricePreview: t, isSelected: a, onSelect: d, shouldDisplayHeader: c = !1, className: p } = e,
        { product: C } = (0, b.T)(n),
        { giftRecipient: I, giftRecipientError: j } = (0, u.wD)(),
        T = (0, l.e7)([g.default], () => g.default.getCurrentUser());
    if (null == C || null == t) return null;
    let [y] = C.items,
        E = null != I && I.id !== (null == T ? void 0 : T.id);
    return (0, i.jsxs)('div', {
        className: p,
        children: [
            c &&
                (0, i.jsxs)('div', {
                    className: x.previewTitleContainer,
                    children: [
                        (0, i.jsx)(s.FormTitle, {
                            className: x.previewTitle,
                            children: h.intl.string(h.t.PpoJzs)
                        }),
                        E &&
                            (0, i.jsx)(
                                s.Popout,
                                {
                                    preload: () => (0, m.Z)(I.id, I.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, i.jsx)(f.Z, {
                                            ...e,
                                            user: I,
                                            pendingAvatar: I.getAvatarURL(null, (0, s.getAvatarSize)(s.AvatarSizes.SIZE_80)),
                                            pendingAvatarDecoration: y.type === o.Z.AVATAR_DECORATION ? y : null,
                                            pendingProfileEffectId: y.type === o.Z.PROFILE_EFFECT ? y.id : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0
                                        }),
                                    align: 'center',
                                    position: 'right',
                                    children: (e) =>
                                        (0, i.jsx)(s.Clickable, {
                                            ...e,
                                            className: x.previewLink,
                                            children: (0, i.jsx)(s.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-link',
                                                children: h.intl.string(h.t['2GnJQE'])
                                            })
                                        })
                                },
                                I.id
                            )
                    ]
                }),
            (0, i.jsxs)(s.Clickable, {
                tag: 'div',
                onClick: () => {
                    null != n && null != d && d(n);
                },
                className: r()(x.previewContainer, {
                    [x.previewContainerSelected]: a && null == j,
                    [x.previewContainerError]: a && null != j
                }),
                children: [
                    (0, i.jsxs)('div', {
                        className: x.giftInfoContainer,
                        children: [
                            y.type === o.Z.AVATAR_DECORATION && (0, i.jsx)(v, { avatarDecoration: y }),
                            y.type === o.Z.PROFILE_EFFECT && (0, i.jsx)(S, { profileEffect: y }),
                            (0, i.jsxs)('div', {
                                className: x.previewTextContainer,
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-md/semibold',
                                        children: C.name
                                    }),
                                    (0, i.jsx)(s.Heading, {
                                        variant: 'heading-sm/medium',
                                        color: 'header-secondary',
                                        children: y.type === o.Z.AVATAR_DECORATION ? h.intl.string(h.t['7v0T9P']) : y.type === o.Z.PROFILE_EFFECT ? h.intl.string(h.t.wR5wOj) : null
                                    })
                                ]
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/semibold',
                                children: (0, _.T4)(t.amount, t.currency)
                            })
                        ]
                    }),
                    a &&
                        null != j &&
                        (0, i.jsx)('div', {
                            className: x.recipientError,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'status-danger-background',
                                children: j
                            })
                        })
                ]
            })
        ]
    });
};
