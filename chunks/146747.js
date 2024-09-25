n.r(r),
    n.d(r, {
        default: function () {
            return C;
        }
    });
var o = n(735250),
    l = n(470079),
    s = n(481060),
    c = n(100527),
    a = n(906732),
    t = n(598),
    i = n(409813),
    d = n(185139),
    u = n(263954),
    p = n(267642),
    _ = n(678558),
    m = n(981631),
    E = n(689938),
    N = n(797118),
    h = n(113207);
let f = 'premium-guild-subscription-upsell-modal-header';
function I(e) {
    let { title: r, subtitle: n, image: l } = e;
    return (0, o.jsxs)('div', {
        className: N.header,
        children: [
            (0, o.jsx)(s.Heading, {
                variant: 'heading-xl/semibold',
                id: f,
                color: 'header-primary',
                className: h.marginBottom8,
                children: r
            }),
            (0, o.jsx)(s.Text, {
                variant: 'text-md/normal',
                className: N.subtitleText,
                children: n
            }),
            l
        ]
    });
}
let x = (e) => {
        let { onClose: r, perks: n, perkIntro: l = E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER, headerProps: c } = e;
        return (0, o.jsxs)('div', {
            className: N.wrapper,
            children: [
                (0, o.jsx)(s.ModalCloseButton, {
                    className: N.closeButton,
                    onClick: () => {
                        r();
                    }
                }),
                (0, o.jsx)(T, {
                    headerProps: c,
                    perkIntro: l
                }),
                (0, o.jsx)('div', {
                    className: N.perks,
                    children: n.map((e, r) => {
                        let { icon: n, iconClassName: l, description: s, color: c } = e;
                        return (0, o.jsx)(
                            u.Z,
                            {
                                icon: n,
                                iconClassName: l,
                                description: s,
                                color: c
                            },
                            r
                        );
                    })
                })
            ]
        });
    },
    T = (e) => {
        let { headerProps: r, perkIntro: c } = e;
        return (0, o.jsxs)(l.Fragment, {
            children: [
                null != r
                    ? (0, o.jsx)(I, { ...r })
                    : (0, o.jsx)('img', {
                          className: N.heroImage,
                          src: n(438471),
                          alt: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
                      }),
                (0, o.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    className: N.heading,
                    children: c
                })
            ]
        });
    },
    S = (e) => {
        let { guild: r, targetBoostedGuildTier: n, onClose: l, analyticsSourceLocation: c } = e,
            a = {
                section: m.jXE.PREMIUM_GUILD_UPSELL_MODAL,
                object: m.qAy.BUTTON_CTA,
                objectType: null != n ? (0, p.ge)(n) : null
            };
        return (0, o.jsxs)(s.ModalFooter, {
            className: N.footer,
            children: [
                (0, o.jsx)(s.Button, {
                    size: s.Button.Sizes.SMALL,
                    color: s.Button.Colors.PRIMARY,
                    look: s.Button.Looks.LINK,
                    onClick: () => {
                        l();
                    },
                    children: E.Z.Messages.CLOSE
                }),
                (0, o.jsx)(_.Z, {
                    analyticsLocation: a,
                    analyticsSourceLocation: c,
                    guild: r,
                    targetBoostedGuildTier: n,
                    onClose: () => {
                        l();
                    }
                })
            ]
        });
    };
function C(e) {
    let { analyticsSourceLocation: r, guild: n, targetBoostedGuildTier: l, perks: u, perkIntro: p, headerProps: _, onClose: m, ...E } = e,
        { analyticsLocations: N } = (0, a.ZP)(c.Z.ACTIVITY_DIRECTORY);
    return (0, o.jsx)(a.Gt, {
        value: N,
        children: (0, o.jsx)(t.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, o.jsx)(s.ModalRoot, {
                ...E,
                'aria-labelledby': f,
                children: (0, o.jsx)(d.Z, {
                    hideBreadcrumbs: !0,
                    body: (0, o.jsx)(x, {
                        onClose: m,
                        perks: u,
                        perkIntro: p,
                        headerProps: _
                    }),
                    footer: (0, o.jsx)(S, {
                        guild: n,
                        targetBoostedGuildTier: l,
                        onClose: m,
                        analyticsSourceLocation: r
                    }),
                    steps: [i.h8.PREMIUM_GUILD_UPSELL],
                    currentStep: i.h8.PREMIUM_GUILD_UPSELL
                })
            })
        })
    });
}
