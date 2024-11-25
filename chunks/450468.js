n.r(t),
    n.d(t, {
        default: function () {
            return j;
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
    g = n(881052),
    p = n(128069),
    x = n(100527),
    S = n(906732),
    T = n(600164),
    C = n(431369),
    _ = n(210887),
    E = n(78839),
    f = n(74538),
    I = n(388032),
    N = n(69049);
async function A(e, t, n, i) {
    await (0, h.bG)(n), await (0, m.Mg)(e, { items: (0, f.MY)(e, t) }, i);
}
function b(e) {
    let { premiumSubscription: t, guildBoostSlotId: n, onNext: i, onClose: s } = e,
        [a, m] = l.useState(!1),
        h = (0, c.e7)([_.Z], () => _.Z.theme),
        { analyticsLocations: x } = (0, S.ZP)(),
        [E, b] = l.useState(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(u.ModalHeader, {
                separator: !1,
                children: [
                    (0, r.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H4,
                        children: I.intl.string(I.t.l52ih4)
                    }),
                    (0, r.jsx)(u.ModalCloseButton, { onClick: s })
                ]
            }),
            (0, r.jsxs)(u.ModalContent, {
                className: N.body,
                children: [
                    null !== E &&
                        (0, r.jsx)(u.FormErrorBlock, {
                            className: N.error,
                            children: E
                        }),
                    I.intl.string(I.t.DY2CXl)
                ]
            }),
            (0, r.jsxs)(u.ModalFooter, {
                justify: T.Z.Justify.START,
                children: [
                    (0, r.jsx)(u.Button, {
                        onClick: async () => {
                            try {
                                m(!0), b(null);
                                let e = (0, C.g)(t, 1);
                                o()((0, f.uV)(e) <= (0, f.uV)(t.additionalPlans), 'Uncanceling should not increase the number of guild subscriptions'), await A(t, e, n, x), i();
                            } catch (t) {
                                let e = t instanceof g.HF ? t : new g.HF(t, t.code);
                                b(I.intl.string(e.code === p.SM.BILLING_PAUSE_INVALID_UPDATE ? I.t.dq4vq6 : I.t['5mlOCQ'])), m(!1);
                            }
                        },
                        submitting: a,
                        children: I.intl.string(I.t.etZP4O)
                    }),
                    (0, r.jsx)(u.Button, {
                        look: u.Button.Looks.LINK,
                        color: (0, d.ap)(h) ? u.Button.Colors.PRIMARY : u.Button.Colors.WHITE,
                        onClick: s,
                        disabled: a,
                        children: I.intl.string(I.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
function v(e) {
    let { onClose: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(u.ModalHeader, {
                separator: !1,
                children: [
                    (0, r.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H4,
                        children: I.intl.string(I.t.H9QUAA)
                    }),
                    (0, r.jsx)(u.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, r.jsxs)(u.ModalContent, {
                className: N.body,
                children: [(0, r.jsx)('div', { className: N.uncancelImage }), (0, r.jsx)('div', { children: I.intl.string(I.t.G27uHR) })]
            }),
            (0, r.jsx)(u.ModalFooter, {
                children: (0, r.jsx)(u.Button, {
                    onClick: t,
                    children: I.intl.string(I.t.BddRzc)
                })
            })
        ]
    });
}
function j(e) {
    let t,
        { guildBoostSlotId: n, transitionState: i, onClose: s } = e,
        { analyticsLocations: a } = (0, S.ZP)(x.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
    l.useEffect(() => {
        !E.ZP.hasFetchedSubscriptions() && (0, m.jg)();
    }, []);
    let o = (0, c.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        [d, h] = l.useState(1);
    if (null == o) t = (0, r.jsx)(u.ModalContent, { children: (0, r.jsx)(u.Spinner, {}) });
    else
        switch (d) {
            case 1:
                t = (0, r.jsx)(b, {
                    premiumSubscription: o,
                    guildBoostSlotId: n,
                    onNext: () => h(2),
                    onClose: s
                });
                break;
            case 2:
                t = (0, r.jsx)(v, { onClose: s });
                break;
            default:
                throw Error('Unexpected step: '.concat(d));
        }
    return (0, r.jsx)(S.Gt, {
        value: a,
        children: (0, r.jsx)(u.ModalRoot, {
            transitionState: i,
            children: t
        })
    });
}
((s = i || (i = {}))[(s.START = 1)] = 'START'), (s[(s.CONFIRM = 2)] = 'CONFIRM');
