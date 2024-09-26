n.d(t, {
    h: function () {
        return g;
    },
    x: function () {
        return R;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    l = n.n(i),
    s = n(442837),
    a = n(481060),
    o = n(596454),
    c = n(131388),
    u = n(409813),
    d = n(430824),
    h = n(73346),
    _ = n(817460),
    f = n(584825),
    E = n(570533),
    p = n(629262),
    m = n(575460),
    I = n(293810),
    C = n(689938),
    S = n(265746);
let g = (e) => {
        let { onClose: t, listing: n, step: i, guildId: s } = e,
            o = (0, f.YB)(s),
            d = (0, c.Z)(I.Xy),
            _ = (() => {
                var e;
                if (d) return null;
                let t = (null == o ? void 0 : null === (e = o.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null ? (0, h._W)(o.cover_image_asset.application_id, o.cover_image_asset, 440) : void 0;
                return null == t && i !== u.h8.CONFIRM
                    ? null
                    : null == t
                      ? (0, r.jsx)('div', { className: S.headerImageEmpty })
                      : (0, r.jsx)('img', {
                            src: t,
                            alt: '',
                            className: S.headerImage
                        });
            })();
        return (0, r.jsxs)('div', {
            className: l()(S.headerContainer, { [S.headerEmpty]: d || null == _ }),
            children: [
                _,
                (() => {
                    if (i !== u.h8.CONFIRM) return null;
                    let e = null == n.image_asset ? void 0 : (0, h._W)(n.application_id, n.image_asset, 80);
                    return (0, r.jsx)('div', {
                        className: S.tierImageContainer,
                        children: (0, r.jsx)('img', {
                            src: e,
                            alt: '',
                            className: S.tierImage
                        })
                    });
                })(),
                (0, r.jsx)(a.Clickable, {
                    className: S.closeContainer,
                    onClick: () => t(!1),
                    'aria-label': C.Z.Messages.CLOSE,
                    children: (0, r.jsx)(a.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: S.closeIcon
                    })
                })
            ]
        });
    },
    R = (e) => {
        let { onClose: t, listing: n, guildId: i } = e,
            l = (0, s.e7)([d.Z], () => d.Z.getGuild(i), [i]),
            c = (0, E.Z)(i).filter((e) => e.roles.includes(n.role_id)),
            u = n.role_benefits.benefits.filter(_.rC).slice(0, null === c.length ? 4 : 3),
            h = (0, p.Z)(u).slice(0, null === c.length ? 4 : 3);
        return (0, r.jsxs)('div', {
            className: S.confirmationContainer,
            children: [
                (0, r.jsx)(a.Heading, {
                    className: S.confirmationHeader,
                    variant: 'heading-xl/semibold',
                    color: 'header-secondary',
                    children: C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE.format({ serverName: null == l ? void 0 : l.toString() })
                }),
                (0, r.jsx)(a.Text, {
                    className: S.confirmationSubtitle,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({ tier: n.name })
                }),
                h.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: S.confirmationSectionLabel,
                                children: C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CHANNEL_PREVIEW
                            }),
                            (0, r.jsx)('div', {
                                className: S.confirmationBenefits,
                                children: h.map((e) =>
                                    (0, r.jsx)(
                                        m.Z,
                                        {
                                            benefit: e,
                                            guildId: i,
                                            onClick: () => t(!0)
                                        },
                                        (0, _.ab)(e)
                                    )
                                )
                            })
                        ]
                    }),
                (() => {
                    var e;
                    if (0 === c.length) return null;
                    let t = c[0];
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: S.confirmationSectionLabel,
                                children: C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_PREVIEW_TITLE
                            }),
                            (0, r.jsxs)('div', {
                                className: S.emojiBenefitsRow,
                                children: [
                                    (0, r.jsx)(o.Z, {
                                        emojiId: t.id,
                                        emojiName: t.name,
                                        animated: null !== (e = t.animated) && void 0 !== e && e,
                                        className: S.emojiImage
                                    }),
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsx)(a.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                className: S.emojiName,
                                                children: C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_TEXT
                                            }),
                                            (0, r.jsx)(a.Text, {
                                                color: 'interactive-normal',
                                                variant: 'text-sm/normal',
                                                children: C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_DESCRIPTION.format({ count: c.length })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    });
                })(),
                (0, r.jsx)(a.Button, {
                    className: S.confirmationButton,
                    onClick: () => t(!0),
                    children: C.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                })
            ]
        });
    };
