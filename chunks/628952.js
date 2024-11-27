t(47120);
var i = t(200651);
t(192379);
var a = t(120356),
    r = t.n(a),
    o = t(979554),
    l = t(442837),
    s = t(481060),
    d = t(987209),
    c = t(921813),
    u = t(484459),
    f = t(594174),
    p = t(937615),
    m = t(583434),
    _ = t(905357),
    g = t(473608),
    b = t(388032),
    h = t(505069);
n.Z = (e) => {
    let { skuId: n, skuPricePreview: t, isSelected: a, onSelect: x, shouldDisplayHeader: C = !1, className: v } = e,
        { product: I } = (0, m.T)(n),
        { giftRecipient: S, giftRecipientError: T } = (0, d.wD)(),
        j = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        y = (0, _.k)(I);
    if (null == I || null == t) return null;
    let [E] = I.items,
        N = null != S && S.id !== (null == j ? void 0 : j.id);
    return (0, i.jsxs)('div', {
        className: v,
        children: [
            C &&
                (0, i.jsxs)('div', {
                    className: h.previewTitleContainer,
                    children: [
                        (0, i.jsx)(s.FormTitle, {
                            className: h.previewTitle,
                            children: b.intl.string(b.t.PpoJzs)
                        }),
                        N &&
                            (0, i.jsx)(
                                s.Popout,
                                {
                                    preload: () => (0, u.Z)(S.id, S.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, i.jsx)(c.Z, {
                                            ...e,
                                            user: S,
                                            pendingAvatar: S.getAvatarURL(null, (0, s.getAvatarSize)(s.AvatarSizes.SIZE_80)),
                                            pendingAvatarDecoration: E.type === o.Z.AVATAR_DECORATION ? E : null,
                                            pendingProfileEffectId: E.type === o.Z.PROFILE_EFFECT ? E.id : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0
                                        }),
                                    align: 'center',
                                    position: 'right',
                                    children: (e) =>
                                        (0, i.jsx)(s.Clickable, {
                                            ...e,
                                            className: h.previewLink,
                                            children: (0, i.jsx)(s.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-link',
                                                children: b.intl.string(b.t['2GnJQE'])
                                            })
                                        })
                                },
                                S.id
                            )
                    ]
                }),
            (0, i.jsxs)(s.Clickable, {
                tag: 'div',
                onClick: () => {
                    null != n && null != x && x(n);
                },
                className: r()(h.previewContainer, {
                    [h.previewContainerSelected]: a && null == T,
                    [h.previewContainerError]: a && null != T
                }),
                children: [
                    (0, i.jsxs)('div', {
                        className: h.giftInfoContainer,
                        children: [
                            (0, i.jsx)(g.O, {
                                product: I,
                                fallbackLabel: null
                            }),
                            (0, i.jsxs)('div', {
                                className: h.previewTextContainer,
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-md/semibold',
                                        children: y
                                    }),
                                    (0, i.jsx)(s.Heading, {
                                        variant: 'heading-sm/medium',
                                        color: 'header-secondary',
                                        children: E.type === o.Z.AVATAR_DECORATION ? b.intl.string(b.t['7v0T9P']) : E.type === o.Z.PROFILE_EFFECT ? b.intl.string(b.t.wR5wOj) : null
                                    })
                                ]
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/semibold',
                                children: (0, p.T4)(t.amount, t.currency)
                            })
                        ]
                    }),
                    a &&
                        null != T &&
                        (0, i.jsx)('div', {
                            className: h.recipientError,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'status-danger-background',
                                children: T
                            })
                        })
                ]
            })
        ]
    });
};
