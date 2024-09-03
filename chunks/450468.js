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
    i = t(735250),
    r = t(470079),
    o = t(512722),
    l = t.n(o),
    c = t(442837),
    d = t(780384),
    u = t(481060),
    _ = t(355467),
    E = t(179360),
    T = t(100527),
    I = t(906732),
    S = t(600164),
    N = t(431369),
    m = t(210887),
    C = t(78839),
    g = t(74538),
    A = t(689938),
    h = t(514121);
async function O(e, s, t, n) {
    await (0, E.bG)(t), await (0, _.Mg)(e, { items: (0, g.MY)(e, s) }, n);
}
function p(e) {
    let { premiumSubscription: s, guildBoostSlotId: t, onNext: n, onClose: a } = e,
        [o, _] = r.useState(!1),
        E = (0, c.e7)([m.Z], () => m.Z.theme),
        { analyticsLocations: T } = (0, I.ZP)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(u.ModalHeader, {
                separator: !1,
                children: [
                    (0, i.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H4,
                        children: A.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_TITLE
                    }),
                    (0, i.jsx)(u.ModalCloseButton, { onClick: a })
                ]
            }),
            (0, i.jsx)(u.ModalContent, {
                className: h.body,
                children: A.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_DESCRIPTION
            }),
            (0, i.jsxs)(u.ModalFooter, {
                justify: S.Z.Justify.START,
                children: [
                    (0, i.jsx)(u.Button, {
                        onClick: async () => {
                            try {
                                _(!0);
                                let e = (0, N.g)(s, 1);
                                l()((0, g.uV)(e) <= (0, g.uV)(s.additionalPlans), 'Uncanceling should not increase the number of guild subscriptions'), await O(s, e, t, T), n();
                            } catch (e) {
                                _(!1);
                            }
                        },
                        submitting: o,
                        children: A.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_BUTTON
                    }),
                    (0, i.jsx)(u.Button, {
                        look: u.Button.Looks.LINK,
                        color: (0, d.ap)(E) ? u.Button.Colors.PRIMARY : u.Button.Colors.WHITE,
                        onClick: a,
                        disabled: o,
                        children: A.Z.Messages.NEVERMIND
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
            (0, i.jsxs)(u.ModalHeader, {
                separator: !1,
                children: [
                    (0, i.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H4,
                        children: A.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_TITLE
                    }),
                    (0, i.jsx)(u.ModalCloseButton, { onClick: s })
                ]
            }),
            (0, i.jsxs)(u.ModalContent, {
                className: h.body,
                children: [(0, i.jsx)('div', { className: h.uncancelImage }), (0, i.jsx)('div', { children: A.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_DESCRIPTION })]
            }),
            (0, i.jsx)(u.ModalFooter, {
                children: (0, i.jsx)(u.Button, {
                    onClick: s,
                    children: A.Z.Messages.OKAY
                })
            })
        ]
    });
}
function x(e) {
    let s,
        { guildBoostSlotId: t, transitionState: n, onClose: a } = e,
        { analyticsLocations: o } = (0, I.ZP)(T.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
    r.useEffect(() => {
        !C.ZP.hasFetchedSubscriptions() && (0, _.jg)();
    }, []);
    let l = (0, c.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
        [d, E] = r.useState(1);
    if (null == l) s = (0, i.jsx)(u.ModalContent, { children: (0, i.jsx)(u.Spinner, {}) });
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
    return (0, i.jsx)(I.Gt, {
        value: o,
        children: (0, i.jsx)(u.ModalRoot, {
            transitionState: n,
            children: s
        })
    });
}
((a = n || (n = {}))[(a.START = 1)] = 'START'), (a[(a.CONFIRM = 2)] = 'CONFIRM');
