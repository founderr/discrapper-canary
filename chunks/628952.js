t(47120);
var n = t(200651);
t(192379);
var r = t(120356),
    a = t.n(r),
    o = t(979554),
    s = t(442837),
    l = t(481060),
    c = t(987209),
    d = t(921813),
    u = t(484459),
    f = t(594174),
    p = t(583434),
    _ = t(905357),
    b = t(473608),
    m = t(388032),
    g = t(505069);
i.Z = (e) => {
    let { skuId: i, isSelected: t, price: r, onSelect: h, shouldDisplayHeader: x = !1, className: v } = e,
        { product: C } = (0, p.T)(i),
        { giftRecipient: I, giftRecipientError: S } = (0, c.wD)(),
        k = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        y = (0, _.k)(C);
    if (null == C) return null;
    let [T] = C.items,
        B = null != I && I.id !== (null == k ? void 0 : k.id);
    return (0, n.jsxs)('div', {
        className: v,
        children: [
            x &&
                (0, n.jsxs)('div', {
                    className: g.previewTitleContainer,
                    children: [
                        (0, n.jsx)(l.FormTitle, {
                            className: g.previewTitle,
                            children: m.intl.string(m.t.PpoJzs)
                        }),
                        B &&
                            (0, n.jsx)(
                                l.Popout,
                                {
                                    preload: () => (0, u.Z)(I.id, I.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, n.jsx)(d.Z, {
                                            ...e,
                                            user: I,
                                            pendingAvatar: I.getAvatarURL(null, (0, l.getAvatarSize)(l.AvatarSizes.SIZE_80)),
                                            pendingAvatarDecoration: T.type === o.Z.AVATAR_DECORATION ? T : null,
                                            pendingProfileEffectId: T.type === o.Z.PROFILE_EFFECT ? T.id : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0
                                        }),
                                    align: 'center',
                                    position: 'right',
                                    children: (e) =>
                                        (0, n.jsx)(l.Clickable, {
                                            ...e,
                                            className: g.previewLink,
                                            children: (0, n.jsx)(l.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-link',
                                                children: m.intl.string(m.t['2GnJQE'])
                                            })
                                        })
                                },
                                I.id
                            )
                    ]
                }),
            (0, n.jsxs)(l.Clickable, {
                tag: 'div',
                onClick: () => {
                    null != i && null != h && h(i);
                },
                className: a()(g.previewContainer, {
                    [g.previewContainerSelected]: t && null == S,
                    [g.previewContainerError]: t && null != S
                }),
                children: [
                    (0, n.jsxs)('div', {
                        className: g.giftInfoContainer,
                        children: [
                            (0, n.jsx)(b.O, {
                                product: C,
                                fallbackLabel: null
                            }),
                            (0, n.jsxs)('div', {
                                className: g.previewTextContainer,
                                children: [
                                    (0, n.jsx)(l.Text, {
                                        variant: 'text-md/semibold',
                                        children: y
                                    }),
                                    (0, n.jsx)(l.Heading, {
                                        variant: 'heading-sm/medium',
                                        color: 'header-secondary',
                                        children: T.type === o.Z.AVATAR_DECORATION ? m.intl.string(m.t['7v0T9P']) : T.type === o.Z.PROFILE_EFFECT ? m.intl.string(m.t.wR5wOj) : null
                                    })
                                ]
                            }),
                            (0, n.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                children: r
                            })
                        ]
                    }),
                    t &&
                        null != S &&
                        (0, n.jsx)('div', {
                            className: g.recipientError,
                            children: (0, n.jsx)(l.Text, {
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
