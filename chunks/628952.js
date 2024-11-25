t(47120);
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    a = t(979554),
    s = t(442837),
    o = t(481060),
    d = t(987209),
    c = t(921813),
    u = t(484459),
    h = t(594174),
    m = t(937615),
    x = t(583434),
    f = t(905357),
    v = t(473608),
    p = t(388032),
    g = t(505069);
n.Z = (e) => {
    let { skuId: n, skuPricePreview: t, isSelected: l, onSelect: C, shouldDisplayHeader: j = !1, className: I } = e,
        { product: T } = (0, x.T)(n),
        { giftRecipient: E, giftRecipientError: N } = (0, d.wD)(),
        S = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        Z = (0, f.k)(T);
    if (null == T || null == t) return null;
    let [y] = T.items,
        P = null != E && E.id !== (null == S ? void 0 : S.id);
    return (0, i.jsxs)('div', {
        className: I,
        children: [
            j &&
                (0, i.jsxs)('div', {
                    className: g.previewTitleContainer,
                    children: [
                        (0, i.jsx)(o.FormTitle, {
                            className: g.previewTitle,
                            children: p.intl.string(p.t.PpoJzs)
                        }),
                        P &&
                            (0, i.jsx)(
                                o.Popout,
                                {
                                    preload: () => (0, u.Z)(E.id, E.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, i.jsx)(c.Z, {
                                            ...e,
                                            user: E,
                                            pendingAvatar: E.getAvatarURL(null, (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80)),
                                            pendingAvatarDecoration: y.type === a.Z.AVATAR_DECORATION ? y : null,
                                            pendingProfileEffectId: y.type === a.Z.PROFILE_EFFECT ? y.id : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0
                                        }),
                                    align: 'center',
                                    position: 'right',
                                    children: (e) =>
                                        (0, i.jsx)(o.Clickable, {
                                            ...e,
                                            className: g.previewLink,
                                            children: (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-link',
                                                children: p.intl.string(p.t['2GnJQE'])
                                            })
                                        })
                                },
                                E.id
                            )
                    ]
                }),
            (0, i.jsxs)(o.Clickable, {
                tag: 'div',
                onClick: () => {
                    null != n && null != C && C(n);
                },
                className: r()(g.previewContainer, {
                    [g.previewContainerSelected]: l && null == N,
                    [g.previewContainerError]: l && null != N
                }),
                children: [
                    (0, i.jsxs)('div', {
                        className: g.giftInfoContainer,
                        children: [
                            (0, i.jsx)(v.O, {
                                product: T,
                                fallbackLabel: null
                            }),
                            (0, i.jsxs)('div', {
                                className: g.previewTextContainer,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/semibold',
                                        children: Z
                                    }),
                                    (0, i.jsx)(o.Heading, {
                                        variant: 'heading-sm/medium',
                                        color: 'header-secondary',
                                        children: y.type === a.Z.AVATAR_DECORATION ? p.intl.string(p.t['7v0T9P']) : y.type === a.Z.PROFILE_EFFECT ? p.intl.string(p.t.wR5wOj) : null
                                    })
                                ]
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                children: (0, m.T4)(t.amount, t.currency)
                            })
                        ]
                    }),
                    l &&
                        null != N &&
                        (0, i.jsx)('div', {
                            className: g.recipientError,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'status-danger-background',
                                children: N
                            })
                        })
                ]
            })
        ]
    });
};
