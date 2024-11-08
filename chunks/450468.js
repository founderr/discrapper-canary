n.r(t),
    n.d(t, {
        default: function () {
            return b;
        }
    }),
    n(47120),
    n(411104);
var i,
    s,
    r = n(200651),
    l = n(192379),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    m = n(355467),
    h = n(179360),
    g = n(100527),
    p = n(906732),
    x = n(600164),
    S = n(431369),
    T = n(210887),
    C = n(78839),
    _ = n(74538),
    E = n(388032),
    f = n(121254);
async function I(e, t, n, i) {
    await (0, h.bG)(n), await (0, m.Mg)(e, { items: (0, _.MY)(e, t) }, i);
}
function N(e) {
    let { premiumSubscription: t, guildBoostSlotId: n, onNext: i, onClose: s } = e,
        [a, m] = l.useState(!1),
        h = (0, c.e7)([T.Z], () => T.Z.theme),
        { analyticsLocations: g } = (0, p.ZP)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(u.ModalHeader, {
                separator: !1,
                children: [
                    (0, r.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H4,
                        children: E.intl.string(E.t.l52ih4)
                    }),
                    (0, r.jsx)(u.ModalCloseButton, { onClick: s })
                ]
            }),
            (0, r.jsx)(u.ModalContent, {
                className: f.body,
                children: E.intl.string(E.t.DY2CXl)
            }),
            (0, r.jsxs)(u.ModalFooter, {
                justify: x.Z.Justify.START,
                children: [
                    (0, r.jsx)(u.Button, {
                        onClick: async () => {
                            try {
                                m(!0);
                                let e = (0, S.g)(t, 1);
                                o()((0, _.uV)(e) <= (0, _.uV)(t.additionalPlans), 'Uncanceling should not increase the number of guild subscriptions'), await I(t, e, n, g), i();
                            } catch (e) {
                                m(!1);
                            }
                        },
                        submitting: a,
                        children: E.intl.string(E.t.etZP4O)
                    }),
                    (0, r.jsx)(u.Button, {
                        look: u.Button.Looks.LINK,
                        color: (0, d.ap)(h) ? u.Button.Colors.PRIMARY : u.Button.Colors.WHITE,
                        onClick: s,
                        disabled: a,
                        children: E.intl.string(E.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
function A(e) {
    let { onClose: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(u.ModalHeader, {
                separator: !1,
                children: [
                    (0, r.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H4,
                        children: E.intl.string(E.t.H9QUAA)
                    }),
                    (0, r.jsx)(u.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, r.jsxs)(u.ModalContent, {
                className: f.body,
                children: [(0, r.jsx)('div', { className: f.uncancelImage }), (0, r.jsx)('div', { children: E.intl.string(E.t.G27uHR) })]
            }),
            (0, r.jsx)(u.ModalFooter, {
                children: (0, r.jsx)(u.Button, {
                    onClick: t,
                    children: E.intl.string(E.t.BddRzc)
                })
            })
        ]
    });
}
function b(e) {
    let t,
        { guildBoostSlotId: n, transitionState: i, onClose: s } = e,
        { analyticsLocations: a } = (0, p.ZP)(g.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
    l.useEffect(() => {
        !C.ZP.hasFetchedSubscriptions() && (0, m.jg)();
    }, []);
    let o = (0, c.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
        [d, h] = l.useState(1);
    if (null == o) t = (0, r.jsx)(u.ModalContent, { children: (0, r.jsx)(u.Spinner, {}) });
    else
        switch (d) {
            case 1:
                t = (0, r.jsx)(N, {
                    premiumSubscription: o,
                    guildBoostSlotId: n,
                    onNext: () => h(2),
                    onClose: s
                });
                break;
            case 2:
                t = (0, r.jsx)(A, { onClose: s });
                break;
            default:
                throw Error('Unexpected step: '.concat(d));
        }
    return (0, r.jsx)(p.Gt, {
        value: a,
        children: (0, r.jsx)(u.ModalRoot, {
            transitionState: i,
            children: t
        })
    });
}
((s = i || (i = {}))[(s.START = 1)] = 'START'), (s[(s.CONFIRM = 2)] = 'CONFIRM');
