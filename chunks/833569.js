n.r(t),
    n.d(t, {
        Steps: function () {
            return i;
        },
        default: function () {
            return Q;
        }
    }),
    n(47120),
    n(411104);
var i,
    s,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(703533),
    d = n(512722),
    u = n.n(d),
    m = n(442837),
    h = n(780384),
    g = n(481060),
    p = n(355467),
    x = n(410030),
    S = n(100527),
    T = n(906732),
    C = n(211242),
    _ = n(600164),
    E = n(509545),
    f = n(626135),
    I = n(122289),
    N = n(63063),
    A = n(74538),
    b = n(937615),
    v = n(374649),
    j = n(140465),
    O = n(314684),
    R = n(653798),
    P = n(625881),
    D = n(440984),
    y = n(398775),
    B = n(973159),
    L = n(311821),
    Z = n(42818),
    F = n(798769),
    M = n(459965),
    k = n(119269),
    w = n(474936),
    U = n(981631),
    V = n(388032),
    G = n(134086);
((s = i || (i = {}))[(s.WHAT_YOU_LOSE = 1)] = 'WHAT_YOU_LOSE'), (s[(s.CONFIRM = 2)] = 'CONFIRM'), (s[(s.PREVIEW = 3)] = 'PREVIEW'), (s[(s.CONFIRM_DISCOUNT = 4)] = 'CONFIRM_DISCOUNT'), (s[(s.DISCOUNT_APPLIED = 5)] = 'DISCOUNT_APPLIED'), (s[(s.PAUSE_SELECT = 6)] = 'PAUSE_SELECT'), (s[(s.PAUSE_CONFIRM = 7)] = 'PAUSE_CONFIRM');
async function Y(e) {
    let { premiumSubscription: t, onClose: n, setHasError: i, setIsCancelling: s, analyticsLocations: r, analyticsLocation: l } = e;
    try {
        if ((s(!0), i(!1), [U.O0b.PAST_DUE, U.O0b.PAUSED, U.O0b.BILLING_RETRY].includes(t.status))) await (0, p.EO)(t.id, r, l);
        else {
            var a, o;
            let e = null !== (o = null === (a = t.renewalMutations) || void 0 === a ? void 0 : a.items) && void 0 !== o ? o : t.items;
            await (0, p.Mg)(t, { items: (0, A.Ue)(e) }, r, l);
        }
        n();
    } catch {
        i(!0), s(!1);
    }
}
function H(e) {
    var t;
    let { premiumSubscription: n, premiumType: i, setStep: s, onClose: a, whatYouLoseExperienceEnabled: o, analyticsLocation: c } = e,
        d = (0, C.Q)(),
        [u, m] = l.useState(!1),
        [p, S] = l.useState(!1),
        E = (0, x.ZP)(),
        { analyticsLocations: f } = (0, T.ZP)(),
        I = null;
    switch (n.status) {
        case U.O0b.PAST_DUE:
        case U.O0b.PAUSED:
        case U.O0b.BILLING_RETRY:
            I = V.intl.string(V.t.FClXh4);
            break;
        default:
            switch (i) {
                case w.p9.TIER_0:
                    I = d
                        ? V.intl.format(V.t['l+A50N'], {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: N.Z.getArticleURL(U.BhN.BLOCKED_PAYMENTS)
                          })
                        : V.intl.format(V.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    break;
                case w.p9.TIER_1:
                    I = d
                        ? V.intl.format(V.t.QN7eIi, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: N.Z.getArticleURL(U.BhN.BLOCKED_PAYMENTS)
                          })
                        : V.intl.format(V.t.X7i9Dw, { date: n.currentPeriodEnd });
                    break;
                default:
                    I = d
                        ? V.intl.format(V.t.vuSNho, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: N.Z.getArticleURL(U.BhN.BLOCKED_PAYMENTS)
                          })
                        : V.intl.format(V.t.fCdmNj, { date: n.currentPeriodEnd });
            }
    }
    let b =
            (n.items.some((e) => {
                let { planId: t } = e;
                return !w.dJ.has(t);
            }) &&
                null == n.renewalMutations) ||
            (null === (t = n.renewalMutations) || void 0 === t
                ? void 0
                : t.items.find((e) => {
                      let { planId: t } = e;
                      return !w.dJ.has(t);
                  })) != null,
        v = b
            ? (0, r.jsx)(g.Button, {
                  onClick: () => s(3),
                  children: V.intl.string(V.t.PDTjLC)
              })
            : (0, r.jsx)(g.Button, {
                  color: g.Button.Colors.RED,
                  disabled: u,
                  onClick: async () => {
                      await Y({
                          setHasError: S,
                          onClose: a,
                          premiumSubscription: n,
                          setIsCancelling: m,
                          analyticsLocations: f,
                          analyticsLocation: c
                      });
                  },
                  children: o ? V.intl.string(V.t['cY+Ooa']) : V.intl.formatToPlainString(V.t['V3+Rpa'], { planPremiumType: A.ZP.getDisplayPremiumType(n.planId) })
              }),
        j = (0, r.jsx)(g.Button, {
            look: g.Button.Looks.LINK,
            color: (0, h.ap)(E) ? g.Button.Colors.PRIMARY : g.Button.Colors.WHITE,
            onClick: a,
            children: o ? V.intl.string(V.t.h9tkAA) : V.intl.string(V.t['ETE/oK'])
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o
                ? (0, r.jsx)(F.Z, {
                      premiumType: i,
                      className: G.cancellationHeader,
                      onClose: a
                  })
                : (0, r.jsxs)(g.ModalHeader, {
                      separator: !1,
                      children: [
                          (0, r.jsx)(g.FormTitle, {
                              tag: g.FormTitleTags.H4,
                              children: V.intl.format(V.t.ZpiGy8, { planPremiumType: A.ZP.getDisplayPremiumType(n.planId) })
                          }),
                          (0, r.jsx)(g.ModalCloseButton, { onClick: a })
                      ]
                  }),
            (0, r.jsxs)(g.ModalContent, {
                className: G.body,
                children: [
                    p
                        ? (0, r.jsx)(g.FormErrorBlock, {
                              className: G.errorBlock,
                              children: V.intl.string(V.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)('div', { className: G.cancelImage }),
                    (0, r.jsx)('div', { children: I })
                ]
            }),
            (0, r.jsxs)(g.ModalFooter, {
                justify: _.Z.Justify.START,
                children: [v, j]
            })
        ]
    });
}
function z(e) {
    var t, n;
    let { premiumSubscription: i } = e,
        { analyticsLocations: s } = (0, T.ZP)(),
        [l] = (0, v.ED)({
            subscriptionId: i.id,
            items: (0, A.Ue)(null !== (n = null === (t = i.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== n ? n : i.items),
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: S.Z.CANCEL_INVOICE_PREVIEW
        }),
        a = (0, m.e7)([E.Z], () => E.Z.get(i.planId));
    if (null == l || null == a) return (0, r.jsx)(g.Spinner, { className: G.loading });
    let { intervalType: o, intervalCount: c } = A.ZP.getIntervalForInvoice(l);
    return (0, r.jsxs)('div', {
        className: G.__invalid_bodyText,
        children: [
            (0, r.jsx)('div', {
                className: G.renewalInvoiceDate,
                children:
                    0 !== l.total
                        ? V.intl.format(V.t.ycyeBw, {
                              renewalDate: l.subscriptionPeriodStart,
                              rate: (0, b.og)((0, b.T4)(l.total, l.currency), o, c)
                          })
                        : V.intl.format(V.t['+y0Tj4'], { renewalDate: l.subscriptionPeriodStart })
            }),
            (0, r.jsxs)(R.PO, {
                children: [
                    (0, r.jsx)(R.q9, { children: V.intl.string(V.t.iqhIp6) }),
                    (0, r.jsx)(R.R$, {
                        label: V.intl.formatToPlainString(V.t.r3jVZm, { planName: A.ZP.getDisplayName(a.id) }),
                        value: (0, A.PK)(a),
                        className: G.invoiceCancelRow
                    }),
                    (0, r.jsx)(R.KU, {}),
                    (0, r.jsx)(Z.nd, {
                        premiumSubscription: i,
                        renewalInvoice: l,
                        isUpdate: !0
                    })
                ]
            })
        ]
    });
}
function W(e) {
    let { premiumSubscription: t, premiumType: n, onBack: i, onClose: s, analyticsLocation: a } = e,
        [c, d] = l.useState(!1),
        [u, m] = l.useState(!1),
        { analyticsLocations: h } = (0, T.ZP)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(F.Z, {
                premiumType: n,
                onClose: s
            }),
            (0, r.jsxs)(g.ModalContent, {
                className: o()(G.previewStep, G.body),
                children: [
                    u
                        ? (0, r.jsx)(g.FormErrorBlock, {
                              className: G.errorBlock,
                              children: V.intl.string(V.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)(z, { premiumSubscription: t })
                ]
            }),
            (0, r.jsxs)(g.ModalFooter, {
                align: _.Z.Align.CENTER,
                justify: _.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(g.Button, {
                        color: g.Button.Colors.RED,
                        disabled: c,
                        onClick: async () => {
                            await Y({
                                setHasError: m,
                                onClose: s,
                                premiumSubscription: t,
                                setIsCancelling: d,
                                analyticsLocations: h,
                                analyticsLocation: a
                            });
                        },
                        children: V.intl.format(V.t['V3+Rpa'], { planPremiumType: A.ZP.getDisplayPremiumType(t.planId) })
                    }),
                    (0, r.jsx)(L.Z, { onClick: i })
                ]
            })
        ]
    });
}
function K(e) {
    var t;
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: null === (t = (0, A.Af)(e)) || void 0 === t ? void 0 : t.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status
    };
}
let q = {
    1: "What You're Losing",
    2: 'Confirm Cancellation',
    3: 'Preview Updated Subscription',
    4: 'Redeem Churn Discount Started',
    5: 'Redeem Churn Discount Completed',
    6: 'Select Pause Duration',
    7: 'Confirm Pause Duration'
};
function Q(e) {
    var t;
    let n,
        { premiumSubscription: i, transitionState: s, onClose: a, analyticsLocations: o, analyticsLocation: d, initialStep: m } = e,
        p = l.useRef(new c.qA()),
        [C, _] = l.useState(null),
        E = (0, O.yQ)(),
        N = (null == E ? void 0 : E.showCard) === !0,
        b = null === (t = (0, A.Af)(i)) || void 0 === t ? void 0 : t.planId,
        v = null != b ? A.ZP.getPremiumType(b) : null;
    u()(null != v, 'Should not be cancelling Nitro without premiumType');
    let R = (0, x.ZP)();
    l.useEffect(() => {
        f.default.track(U.rMx.CANCELLATION_FLOW_STARTED, K(i));
    }, [i]);
    let L = v === w.p9.TIER_0 || v === w.p9.TIER_1 || v === w.p9.TIER_2;
    null == m && (m = L ? 1 : 2);
    let { analyticsLocations: Z } = (0, T.ZP)(o, S.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [F, Y, z, Q] = (function (e, t, n) {
            let [i, s] = l.useState(e),
                [r, a] = l.useState(Date.now()),
                [o] = l.useState(Date.now()),
                c = l.useCallback(
                    (e) => {
                        f.default.track(U.rMx.CANCELLATION_FLOW_STEP, {
                            from_step: q[i],
                            to_step: q[e],
                            step_duration_ms: Date.now() - r,
                            flow_duration_ms: Date.now() - o,
                            location_stack: n,
                            ...K(t)
                        }),
                            s(e),
                            a(Date.now());
                    },
                    [n, o, r, i, t]
                );
            return [i, c, r, o];
        })(m, i, o),
        [X, J] = l.useState(null);
    (0, M.w)(i, a, !1);
    let $ = (e) => {
            a(),
                f.default.track(U.rMx.CANCELLATION_FLOW_STEP, {
                    from_step: q[e],
                    to_step: null,
                    step_duration_ms: Date.now() - z,
                    flow_duration_ms: Date.now() - Q,
                    location_stack: o,
                    ...K(i)
                });
        },
        ee = (0, j.UV)(),
        { churnUserDiscountOffer: et, isFetchingChurnDiscountOffer: en } = (0, j.WR)(!ee || 1 !== F);
    switch (F) {
        case 6:
            n = (0, r.jsx)(y.of, {
                premiumSubscription: i,
                premiumType: v,
                setStep: Y,
                onClose: () => $(F),
                pauseDuration: X,
                setPauseDuration: J,
                footer: (0, r.jsxs)('div', {
                    className: G.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(g.Button, {
                            disabled: null === X,
                            onClick: () => {
                                0 === X ? Y(1) : Y(7);
                            },
                            children: V.intl.string(V.t['3PatS0'])
                        }),
                        (0, r.jsx)(g.Button, {
                            look: g.Button.Looks.LINK,
                            color: (0, h.wj)(R) ? g.Button.Colors.WHITE : g.Button.Colors.PRIMARY,
                            onClick: a,
                            children: V.intl.string(V.t.h9tkAA)
                        })
                    ]
                }),
                analyticsLocation: d
            });
            break;
        case 7:
            if (null == X) {
                let e = Error('No pause duration to set');
                throw (
                    ((0, I.q2)(e, {
                        extra: {
                            subscriptionId: i.id,
                            status: i.status
                        }
                    }),
                    e)
                );
            }
            n = (0, r.jsx)(y.Sz, {
                premiumSubscription: i,
                premiumType: v,
                setStep: Y,
                onClose: () => $(F),
                analyticsLocation: d,
                pauseDuration: X
            });
            break;
        case 1:
            n = (0, r.jsx)(B.Z, {
                premiumType: v,
                titleText: V.intl.string(V.t.PWq8TE),
                subtitleText: N ? V.intl.string(V.t.QagLCA) : V.intl.format(V.t.nsGVzs, {}),
                subtitleClassName: N ? G.subtitleSection : void 0,
                subtitleIcon:
                    N &&
                    (0, r.jsx)('div', {
                        className: G.subtitleIcon,
                        children: (0, r.jsx)(k.Z, {
                            staticPercentage: 100,
                            iconClassName: G.iconClassName,
                            showAnimations: !1,
                            innerCircleClassName: G.innerCircle,
                            progressCircleStrokeSize: 5,
                            backgroundCircleSize: '38%'
                        })
                    }),
                footer: (0, r.jsxs)('div', {
                    className: G.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(g.Button, {
                            onClick: () => Y(2),
                            children: V.intl.string(V.t['3PatS0'])
                        }),
                        (0, r.jsx)(g.Button, {
                            look: g.Button.Looks.LINK,
                            color: (0, h.wj)(R) ? g.Button.Colors.WHITE : g.Button.Colors.PRIMARY,
                            onClick: () => $(F),
                            children: V.intl.string(V.t.h9tkAA)
                        })
                    ]
                }),
                onClose: () => $(F),
                onDiscountClaim: () => Y(4),
                onContinue: () => Y(2),
                isLoading: ee && en,
                churnUserDiscountOffer: et,
                analyticsLocations: Z
            });
            break;
        case 2:
            n = (0, r.jsx)(H, {
                premiumSubscription: i,
                premiumType: v,
                setStep: Y,
                onClose: () => $(F),
                whatYouLoseExperienceEnabled: L,
                analyticsLocation: d
            });
            break;
        case 3:
            n = (0, r.jsx)(W, {
                premiumSubscription: i,
                premiumType: v,
                onBack: () => Y(2),
                onClose: () => $(F),
                analyticsLocation: d
            });
            break;
        case 4:
            n = (0, r.jsx)(P.Z, {
                premiumSubscription: i,
                premiumType: v,
                onClose: () => $(F),
                onConfirm: () => Y(5),
                userDiscountOffer: et
            });
            break;
        case 5:
            n = (0, r.jsx)(D.D, {
                premiumSubscription: i,
                premiumType: v,
                onClose: () => $(F),
                confettiCanvas: C,
                userDiscountOffer: et
            });
            break;
        default:
            throw Error('Unexpected step: '.concat(F));
    }
    return (0, r.jsxs)(T.Gt, {
        value: Z,
        children: [
            (0, r.jsx)(c.O_, {
                ref: _,
                className: G.confettiCanvas,
                environment: p.current
            }),
            (0, r.jsx)(g.ModalRoot, {
                transitionState: s,
                children: n
            })
        ]
    });
}
