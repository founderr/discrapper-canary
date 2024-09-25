n.d(t, {
    h: function () {
        return g;
    },
    x: function () {
        return T;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    l = n.n(i),
    s = n(442837),
    a = n(481060),
    o = n(596454),
    u = n(131388),
    c = n(409813),
    d = n(430824),
    h = n(73346),
    _ = n(817460),
    f = n(584825),
    E = n(570533),
    p = n(629262),
    m = n(575460),
    C = n(293810),
    S = n(689938),
    I = n(265746);
let g = (e) => {
        let { onClose: t, listing: n, step: i, guildId: s } = e,
            o = (0, f.YB)(s),
            d = (0, u.Z)(C.Xy),
            _ = (() => {
                var e;
                if (d) return null;
                let t = (null == o ? void 0 : null === (e = o.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null ? (0, h._W)(o.cover_image_asset.application_id, o.cover_image_asset, 440) : void 0;
                return null == t && i !== c.h8.CONFIRM
                    ? null
                    : null == t
                      ? (0, r.jsx)('div', { className: I.headerImageEmpty })
                      : (0, r.jsx)('img', {
                            src: t,
                            alt: '',
                            className: I.headerImage
                        });
            })();
        return (0, r.jsxs)('div', {
            className: l()(I.headerContainer, { [I.headerEmpty]: d || null == _ }),
            children: [
                _,
                (() => {
                    if (i !== c.h8.CONFIRM) return null;
                    let e = null == n.image_asset ? void 0 : (0, h._W)(n.application_id, n.image_asset, 80);
                    return (0, r.jsx)('div', {
                        className: I.tierImageContainer,
                        children: (0, r.jsx)('img', {
                            src: e,
                            alt: '',
                            className: I.tierImage
                        })
                    });
                })(),
                (0, r.jsx)(a.Clickable, {
                    className: I.closeContainer,
                    onClick: () => t(!1),
                    'aria-label': S.Z.Messages.CLOSE,
                    children: (0, r.jsx)(a.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: I.closeIcon
                    })
                })
            ]
        });
    },
    T = (e) => {
        let { onClose: t, listing: n, guildId: i } = e,
            l = (0, s.e7)([d.Z], () => d.Z.getGuild(i), [i]),
            u = (0, E.Z)(i).filter((e) => e.roles.includes(n.role_id)),
            c = n.role_benefits.benefits.filter(_.rC).slice(0, null === u.length ? 4 : 3),
            h = (0, p.Z)(c).slice(0, null === u.length ? 4 : 3);
        return (0, r.jsxs)('div', {
            className: I.confirmationContainer,
            children: [
                (0, r.jsx)(a.Heading, {
                    className: I.confirmationHeader,
                    variant: 'heading-xl/semibold',
                    color: 'header-secondary',
                    children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE.format({ serverName: null == l ? void 0 : l.toString() })
                }),
                (0, r.jsx)(a.Text, {
                    className: I.confirmationSubtitle,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({ tier: n.name })
                }),
                h.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: I.confirmationSectionLabel,
                                children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CHANNEL_PREVIEW
                            }),
                            (0, r.jsx)('div', {
                                className: I.confirmationBenefits,
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
                    if (0 === u.length) return null;
                    let t = u[0];
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: I.confirmationSectionLabel,
                                children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_PREVIEW_TITLE
                            }),
                            (0, r.jsxs)('div', {
                                className: I.emojiBenefitsRow,
                                children: [
                                    (0, r.jsx)(o.Z, {
                                        emojiId: t.id,
                                        emojiName: t.name,
                                        animated: null !== (e = t.animated) && void 0 !== e && e,
                                        className: I.emojiImage
                                    }),
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsx)(a.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                className: I.emojiName,
                                                children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_TEXT
                                            }),
                                            (0, r.jsx)(a.Text, {
                                                color: 'interactive-normal',
                                                variant: 'text-sm/normal',
                                                children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_DESCRIPTION.format({ count: u.length })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    });
                })(),
                (0, r.jsx)(a.Button, {
                    className: I.confirmationButton,
                    onClick: () => t(!0),
                    children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                })
            ]
        });
    };
