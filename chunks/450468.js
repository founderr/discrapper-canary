t.r(s),
    t.d(s, {
        default: function () {
            return x;
        }
    }),
    t(47120),
    t(411104);
var n,
    a,
    i = t(200651),
    r = t(192379),
    o = t(512722),
    l = t.n(o),
    c = t(442837),
    d = t(780384),
    _ = t(481060),
    u = t(355467),
    E = t(179360),
    T = t(100527),
    S = t(906732),
    I = t(600164),
    N = t(431369),
    m = t(210887),
    C = t(78839),
    A = t(74538),
    g = t(689938),
    h = t(946839);
async function O(e, s, t, n) {
    await (0, E.bG)(t), await (0, u.Mg)(e, { items: (0, A.MY)(e, s) }, n);
}
function p(e) {
    let { premiumSubscription: s, guildBoostSlotId: t, onNext: n, onClose: a } = e,
        [o, u] = r.useState(!1),
        E = (0, c.e7)([m.Z], () => m.Z.theme),
        { analyticsLocations: T } = (0, S.ZP)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(_.ModalHeader, {
                separator: !1,
                children: [
                    (0, i.jsx)(_.FormTitle, {
                        tag: _.FormTitleTags.H4,
                        children: g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_TITLE
                    }),
                    (0, i.jsx)(_.ModalCloseButton, { onClick: a })
                ]
            }),
            (0, i.jsx)(_.ModalContent, {
                className: h.body,
                children: g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_DESCRIPTION
            }),
            (0, i.jsxs)(_.ModalFooter, {
                justify: I.Z.Justify.START,
                children: [
                    (0, i.jsx)(_.Button, {
                        onClick: async () => {
                            try {
                                u(!0);
                                let e = (0, N.g)(s, 1);
                                l()((0, A.uV)(e) <= (0, A.uV)(s.additionalPlans), 'Uncanceling should not increase the number of guild subscriptions'), await O(s, e, t, T), n();
                            } catch (e) {
                                u(!1);
                            }
                        },
                        submitting: o,
                        children: g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_BUTTON
                    }),
                    (0, i.jsx)(_.Button, {
                        look: _.Button.Looks.LINK,
                        color: (0, d.ap)(E) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
                        onClick: a,
                        disabled: o,
                        children: g.Z.Messages.NEVERMIND
                    })
                ]
            })
        ]
    });
}
function R(e) {
    let { onClose: s } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(_.ModalHeader, {
                separator: !1,
                children: [
                    (0, i.jsx)(_.FormTitle, {
                        tag: _.FormTitleTags.H4,
                        children: g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_TITLE
                    }),
                    (0, i.jsx)(_.ModalCloseButton, { onClick: s })
                ]
            }),
            (0, i.jsxs)(_.ModalContent, {
                className: h.body,
                children: [(0, i.jsx)('div', { className: h.uncancelImage }), (0, i.jsx)('div', { children: g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_DESCRIPTION })]
            }),
            (0, i.jsx)(_.ModalFooter, {
                children: (0, i.jsx)(_.Button, {
                    onClick: s,
                    children: g.Z.Messages.OKAY
                })
            })
        ]
    });
}
function x(e) {
    let s,
        { guildBoostSlotId: t, transitionState: n, onClose: a } = e,
        { analyticsLocations: o } = (0, S.ZP)(T.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
    r.useEffect(() => {
        !C.ZP.hasFetchedSubscriptions() && (0, u.jg)();
    }, []);
    let l = (0, c.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
        [d, E] = r.useState(1);
    if (null == l) s = (0, i.jsx)(_.ModalContent, { children: (0, i.jsx)(_.Spinner, {}) });
    else
        switch (d) {
            case 1:
                s = (0, i.jsx)(p, {
                    premiumSubscription: l,
                    guildBoostSlotId: t,
                    onNext: () => E(2),
                    onClose: a
                });
                break;
            case 2:
                s = (0, i.jsx)(R, { onClose: a });
                break;
            default:
                throw Error('Unexpected step: '.concat(d));
        }
    return (0, i.jsx)(S.Gt, {
        value: o,
        children: (0, i.jsx)(_.ModalRoot, {
            transitionState: n,
            children: s
        })
    });
}
((a = n || (n = {}))[(a.START = 1)] = 'START'), (a[(a.CONFIRM = 2)] = 'CONFIRM');
