t(47120);
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    a = t(979554),
    s = t(442837),
    o = t(481060),
    d = t(1585),
    c = t(125988),
    u = t(987209),
    h = t(921813),
    m = t(731896),
    f = t(484459),
    x = t(594174),
    v = t(937615),
    p = t(583434),
    g = t(905357),
    C = t(388032),
    j = t(424188),
    I = t(223223);
let E = (e) => {
        let { avatarDecoration: n } = e,
            t = (0, s.e7)([x.default], () => x.default.getCurrentUser()),
            { avatarDecorationSrc: l } = (0, c.Z)({
                user: t,
                avatarDecorationOverride: n,
                size: (0, d.y9)(o.AvatarSizes.SIZE_40)
            });
        return (0, i.jsx)('img', {
            src: l,
            alt: n.label,
            className: j.avatarDecoration
        });
    },
    T = (e) => {
        var n;
        let { profileEffect: t } = e,
            l = (0, m.V)(t.id),
            { accessibilityLabel: r, thumbnailPreviewSrc: a, title: s } = null !== (n = null == l ? void 0 : l.config) && void 0 !== n ? n : {};
        return (0, i.jsxs)('div', {
            className: j.profileEffectContainer,
            children: [
                (0, i.jsx)('img', {
                    src: I,
                    alt: r,
                    className: j.profileEffectBackground
                }),
                (0, i.jsx)('img', {
                    className: j.profileEffect,
                    src: a,
                    alt: s
                })
            ]
        });
    };
n.Z = (e) => {
    let { skuId: n, skuPricePreview: t, isSelected: l, onSelect: d, shouldDisplayHeader: c = !1, className: m } = e,
        { product: I } = (0, p.T)(n),
        { giftRecipient: N, giftRecipientError: S } = (0, u.wD)(),
        Z = (0, s.e7)([x.default], () => x.default.getCurrentUser()),
        y = (0, g.k)(I);
    if (null == I || null == t) return null;
    let [A] = I.items,
        P = null != N && N.id !== (null == Z ? void 0 : Z.id);
    return (0, i.jsxs)('div', {
        className: m,
        children: [
            c &&
                (0, i.jsxs)('div', {
                    className: j.previewTitleContainer,
                    children: [
                        (0, i.jsx)(o.FormTitle, {
                            className: j.previewTitle,
                            children: C.intl.string(C.t.PpoJzs)
                        }),
                        P &&
                            (0, i.jsx)(
                                o.Popout,
                                {
                                    preload: () => (0, f.Z)(N.id, N.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, i.jsx)(h.Z, {
                                            ...e,
                                            user: N,
                                            pendingAvatar: N.getAvatarURL(null, (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80)),
                                            pendingAvatarDecoration: A.type === a.Z.AVATAR_DECORATION ? A : null,
                                            pendingProfileEffectId: A.type === a.Z.PROFILE_EFFECT ? A.id : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0
                                        }),
                                    align: 'center',
                                    position: 'right',
                                    children: (e) =>
                                        (0, i.jsx)(o.Clickable, {
                                            ...e,
                                            className: j.previewLink,
                                            children: (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-link',
                                                children: C.intl.string(C.t['2GnJQE'])
                                            })
                                        })
                                },
                                N.id
                            )
                    ]
                }),
            (0, i.jsxs)(o.Clickable, {
                tag: 'div',
                onClick: () => {
                    null != n && null != d && d(n);
                },
                className: r()(j.previewContainer, {
                    [j.previewContainerSelected]: l && null == S,
                    [j.previewContainerError]: l && null != S
                }),
                children: [
                    (0, i.jsxs)('div', {
                        className: j.giftInfoContainer,
                        children: [
                            A.type === a.Z.AVATAR_DECORATION && (0, i.jsx)(E, { avatarDecoration: A }),
                            A.type === a.Z.PROFILE_EFFECT && (0, i.jsx)(T, { profileEffect: A }),
                            (0, i.jsxs)('div', {
                                className: j.previewTextContainer,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/semibold',
                                        children: y
                                    }),
                                    (0, i.jsx)(o.Heading, {
                                        variant: 'heading-sm/medium',
                                        color: 'header-secondary',
                                        children: A.type === a.Z.AVATAR_DECORATION ? C.intl.string(C.t['7v0T9P']) : A.type === a.Z.PROFILE_EFFECT ? C.intl.string(C.t.wR5wOj) : null
                                    })
                                ]
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                children: (0, v.T4)(t.amount, t.currency)
                            })
                        ]
                    }),
                    l &&
                        null != S &&
                        (0, i.jsx)('div', {
                            className: j.recipientError,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'status-danger-background',
                                children: S
                            })
                        })
                ]
            })
        ]
    });
};
