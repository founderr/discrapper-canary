t.r(s),
    t.d(s, {
        Steps: function () {
            return n;
        },
        default: function () {
            return X;
        }
    }),
    t(47120),
    t(411104);
var n,
    a,
    i = t(735250),
    r = t(470079),
    o = t(120356),
    l = t.n(o),
    c = t(887024),
    d = t(512722),
    _ = t.n(d),
    u = t(442837),
    E = t(780384),
    T = t(481060),
    S = t(355467),
    I = t(410030),
    N = t(100527),
    A = t(906732),
    m = t(211242),
    C = t(600164),
    g = t(509545),
    h = t(626135),
    O = t(122289),
    p = t(63063),
    R = t(74538),
    x = t(937615),
    f = t(374649),
    M = t(140465),
    D = t(314684),
    P = t(653798),
    L = t(625881),
    b = t(440984),
    Z = t(398775),
    v = t(973159),
    j = t(311821),
    B = t(42818),
    U = t(798769),
    G = t(459965),
    F = t(119269),
    y = t(474936),
    V = t(981631),
    Y = t(689938),
    w = t(134086);
((a = n || (n = {}))[(a.WHAT_YOU_LOSE = 1)] = 'WHAT_YOU_LOSE'), (a[(a.CONFIRM = 2)] = 'CONFIRM'), (a[(a.PREVIEW = 3)] = 'PREVIEW'), (a[(a.CONFIRM_DISCOUNT = 4)] = 'CONFIRM_DISCOUNT'), (a[(a.DISCOUNT_APPLIED = 5)] = 'DISCOUNT_APPLIED'), (a[(a.PAUSE_SELECT = 6)] = 'PAUSE_SELECT'), (a[(a.PAUSE_CONFIRM = 7)] = 'PAUSE_CONFIRM');
async function k(e) {
    let { premiumSubscription: s, onClose: t, setHasError: n, setIsCancelling: a, analyticsLocations: i, analyticsLocation: r } = e;
    try {
        if ((a(!0), n(!1), [V.O0b.PAST_DUE, V.O0b.PAUSED, V.O0b.BILLING_RETRY].includes(s.status))) await (0, S.EO)(s.id, i, r);
        else {
            var o, l;
            let e = null !== (l = null === (o = s.renewalMutations) || void 0 === o ? void 0 : o.items) && void 0 !== l ? l : s.items;
            await (0, S.Mg)(s, { items: (0, R.Ue)(e) }, i, r);
        }
        t();
    } catch {
        n(!0), a(!1);
    }
}
function H(e) {
    var s;
    let { premiumSubscription: t, premiumType: n, setStep: a, onClose: o, whatYouLoseExperienceEnabled: l, analyticsLocation: c } = e,
        d = (0, m.Q)(),
        [_, u] = r.useState(!1),
        [S, N] = r.useState(!1),
        g = (0, I.ZP)(),
        { analyticsLocations: h } = (0, A.ZP)(),
        O = null;
    switch (t.status) {
        case V.O0b.PAST_DUE:
        case V.O0b.PAUSED:
        case V.O0b.BILLING_RETRY:
            O = Y.Z.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY;
            break;
        default:
            switch (n) {
                case y.p9.TIER_0:
                    O = d
                        ? Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
                              date: t.currentPeriodEnd,
                              helpdeskArticle: p.Z.getArticleURL(V.BhN.BLOCKED_PAYMENTS)
                          })
                        : Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({ date: t.currentPeriodEnd });
                    break;
                case y.p9.TIER_1:
                    O = d
                        ? Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
                              date: t.currentPeriodEnd,
                              helpdeskArticle: p.Z.getArticleURL(V.BhN.BLOCKED_PAYMENTS)
                          })
                        : Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({ date: t.currentPeriodEnd });
                    break;
                default:
                    O = d
                        ? Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
                              date: t.currentPeriodEnd,
                              helpdeskArticle: p.Z.getArticleURL(V.BhN.BLOCKED_PAYMENTS)
                          })
                        : Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({ date: t.currentPeriodEnd });
            }
    }
    let x =
            (t.items.some((e) => {
                let { planId: s } = e;
                return !y.dJ.has(s);
            }) &&
                null == t.renewalMutations) ||
            (null === (s = t.renewalMutations) || void 0 === s
                ? void 0
                : s.items.find((e) => {
                      let { planId: s } = e;
                      return !y.dJ.has(s);
                  })) != null,
        f = x
            ? (0, i.jsx)(T.Button, {
                  onClick: () => a(3),
                  children: Y.Z.Messages.NEXT
              })
            : (0, i.jsx)(T.Button, {
                  color: T.Button.Colors.RED,
                  disabled: _,
                  onClick: async () => {
                      await k({
                          setHasError: N,
                          onClose: o,
                          premiumSubscription: t,
                          setIsCancelling: u,
                          analyticsLocations: h,
                          analyticsLocation: c
                      });
                  },
                  children: l ? Y.Z.Messages.CONFIRM : Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({ planPremiumType: R.ZP.getDisplayPremiumType(t.planId) })
              }),
        M = (0, i.jsx)(T.Button, {
            look: T.Button.Looks.LINK,
            color: (0, E.ap)(g) ? T.Button.Colors.PRIMARY : T.Button.Colors.WHITE,
            onClick: o,
            children: l ? Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : Y.Z.Messages.CANCEL
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l
                ? (0, i.jsx)(U.Z, {
                      premiumType: n,
                      className: w.cancellationHeader,
                      onClose: o
                  })
                : (0, i.jsxs)(T.ModalHeader, {
                      separator: !1,
                      children: [
                          (0, i.jsx)(T.FormTitle, {
                              tag: T.FormTitleTags.H4,
                              children: Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({ planPremiumType: R.ZP.getDisplayPremiumType(t.planId) })
                          }),
                          (0, i.jsx)(T.ModalCloseButton, { onClick: o })
                      ]
                  }),
            (0, i.jsxs)(T.ModalContent, {
                className: w.body,
                children: [
                    S
                        ? (0, i.jsx)(T.FormErrorBlock, {
                              className: w.errorBlock,
                              children: Y.Z.Messages.BILLING_ERROR_GENERIC
                          })
                        : null,
                    (0, i.jsx)('div', { className: w.cancelImage }),
                    (0, i.jsx)('div', { children: O })
                ]
            }),
            (0, i.jsxs)(T.ModalFooter, {
                justify: C.Z.Justify.START,
                children: [f, M]
            })
        ]
    });
}
function W(e) {
    var s, t;
    let { premiumSubscription: n } = e,
        { analyticsLocations: a } = (0, A.ZP)(),
        [r] = (0, f.ED)({
            subscriptionId: n.id,
            items: (0, R.Ue)(null !== (t = null === (s = n.renewalMutations) || void 0 === s ? void 0 : s.items) && void 0 !== t ? t : n.items),
            renewal: !0,
            analyticsLocations: a,
            analyticsLocation: N.Z.CANCEL_INVOICE_PREVIEW
        }),
        o = (0, u.e7)([g.Z], () => g.Z.get(n.planId));
    if (null == r || null == o) return (0, i.jsx)(T.Spinner, { className: w.loading });
    let { intervalType: l, intervalCount: c } = R.ZP.getIntervalForInvoice(r);
    return (0, i.jsxs)('div', {
        className: w.__invalid_bodyText,
        children: [
            (0, i.jsx)('div', {
                className: w.renewalInvoiceDate,
                children:
                    0 !== r.total
                        ? Y.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
                              renewalDate: r.subscriptionPeriodStart,
                              rate: (0, x.og)((0, x.T4)(r.total, r.currency), l, c)
                          })
                        : Y.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({ renewalDate: r.subscriptionPeriodStart })
            }),
            (0, i.jsxs)(P.PO, {
                children: [
                    (0, i.jsx)(P.q9, { children: Y.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES }),
                    (0, i.jsx)(P.R$, {
                        label: Y.Z.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({ planName: R.ZP.getDisplayName(o.id) }),
                        value: (0, R.PK)(o),
                        className: w.invoiceCancelRow
                    }),
                    (0, i.jsx)(P.KU, {}),
                    (0, i.jsx)(B.nd, {
                        premiumSubscription: n,
                        renewalInvoice: r,
                        isUpdate: !0
                    })
                ]
            })
        ]
    });
}
function K(e) {
    let { premiumSubscription: s, premiumType: t, onBack: n, onClose: a, analyticsLocation: o } = e,
        [c, d] = r.useState(!1),
        [_, u] = r.useState(!1),
        { analyticsLocations: E } = (0, A.ZP)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(U.Z, {
                premiumType: t,
                onClose: a
            }),
            (0, i.jsxs)(T.ModalContent, {
                className: l()(w.previewStep, w.body),
                children: [
                    _
                        ? (0, i.jsx)(T.FormErrorBlock, {
                              className: w.errorBlock,
                              children: Y.Z.Messages.BILLING_ERROR_GENERIC
                          })
                        : null,
                    (0, i.jsx)(W, { premiumSubscription: s })
                ]
            }),
            (0, i.jsxs)(T.ModalFooter, {
                align: C.Z.Align.CENTER,
                justify: C.Z.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(T.Button, {
                        color: T.Button.Colors.RED,
                        disabled: c,
                        onClick: async () => {
                            await k({
                                setHasError: u,
                                onClose: a,
                                premiumSubscription: s,
                                setIsCancelling: d,
                                analyticsLocations: E,
                                analyticsLocation: o
                            });
                        },
                        children: Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({ planPremiumType: R.ZP.getDisplayPremiumType(s.planId) })
                    }),
                    (0, i.jsx)(j.Z, { onClick: n })
                ]
            })
        ]
    });
}
function z(e) {
    var s;
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: null === (s = (0, R.Af)(e)) || void 0 === s ? void 0 : s.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status
    };
}
let Q = {
    1: "What You're Losing",
    2: 'Confirm Cancellation',
    3: 'Preview Updated Subscription',
    4: 'Redeem Churn Discount Started',
    5: 'Redeem Churn Discount Completed',
    6: 'Select Pause Duration',
    7: 'Confirm Pause Duration'
};
function X(e) {
    var s;
    let t,
        { premiumSubscription: n, transitionState: a, onClose: o, analyticsLocations: l, analyticsLocation: d, initialStep: u } = e,
        S = r.useRef(new c.qA()),
        [m, C] = r.useState(null),
        g = (0, D.yQ)(),
        p = (null == g ? void 0 : g.showCard) === !0,
        x = null === (s = (0, R.Af)(n)) || void 0 === s ? void 0 : s.planId,
        f = null != x ? R.ZP.getPremiumType(x) : null;
    _()(null != f, 'Should not be cancelling Nitro without premiumType');
    let P = (0, I.ZP)();
    r.useEffect(() => {
        h.default.track(V.rMx.CANCELLATION_FLOW_STARTED, z(n));
    }, [n]);
    let j = f === y.p9.TIER_0 || f === y.p9.TIER_1 || f === y.p9.TIER_2;
    null == u && (u = j ? 1 : 2);
    let { analyticsLocations: B } = (0, A.ZP)(l, N.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [U, k, W, X] = (function (e, s, t) {
            let [n, a] = r.useState(e),
                [i, o] = r.useState(Date.now()),
                [l] = r.useState(Date.now()),
                c = r.useCallback(
                    (e) => {
                        h.default.track(V.rMx.CANCELLATION_FLOW_STEP, {
                            from_step: Q[n],
                            to_step: Q[e],
                            step_duration_ms: Date.now() - i,
                            flow_duration_ms: Date.now() - l,
                            location_stack: t,
                            ...z(s)
                        }),
                            a(e),
                            o(Date.now());
                    },
                    [t, l, i, n, s]
                );
            return [n, c, i, l];
        })(u, n, l),
        [q, J] = r.useState(null);
    (0, G.w)(n, o, !1);
    let $ = (e) => {
            o(),
                h.default.track(V.rMx.CANCELLATION_FLOW_STEP, {
                    from_step: Q[e],
                    to_step: null,
                    step_duration_ms: Date.now() - W,
                    flow_duration_ms: Date.now() - X,
                    location_stack: l,
                    ...z(n)
                });
        },
        ee = (0, M.UV)(),
        { churnUserDiscountOffer: es, isFetchingChurnDiscountOffer: et } = (0, M.WR)(!ee || 1 !== U);
    switch (U) {
        case 6:
            t = (0, i.jsx)(Z.of, {
                premiumSubscription: n,
                premiumType: f,
                setStep: k,
                onClose: () => $(U),
                pauseDuration: q,
                setPauseDuration: J,
                footer: (0, i.jsxs)('div', {
                    className: w.whatYouLoseButtonContainer,
                    children: [
                        (0, i.jsx)(T.Button, {
                            disabled: null === q,
                            onClick: () => {
                                0 === q ? k(1) : k(7);
                            },
                            children: Y.Z.Messages.CONTINUE
                        }),
                        (0, i.jsx)(T.Button, {
                            look: T.Button.Looks.LINK,
                            color: (0, E.wj)(P) ? T.Button.Colors.WHITE : T.Button.Colors.PRIMARY,
                            onClick: o,
                            children: Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                        })
                    ]
                }),
                analyticsLocation: d
            });
            break;
        case 7:
            if (null == q) {
                let e = Error('No pause duration to set');
                throw (
                    ((0, O.q2)(e, {
                        extra: {
                            subscriptionId: n.id,
                            status: n.status
                        }
                    }),
                    e)
                );
            }
            t = (0, i.jsx)(Z.Sz, {
                premiumSubscription: n,
                premiumType: f,
                setStep: k,
                onClose: () => $(U),
                analyticsLocation: d,
                pauseDuration: q
            });
            break;
        case 1:
            t = (0, i.jsx)(v.Z, {
                premiumType: f,
                titleText: Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
                subtitleText: p ? Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE_TENURE_REWARD_V2 : Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
                subtitleClassName: p ? w.subtitleSection : void 0,
                subtitleIcon:
                    p &&
                    (0, i.jsx)('div', {
                        className: w.subtitleIcon,
                        children: (0, i.jsx)(F.Z, {
                            staticPercentage: 100,
                            iconClassName: w.iconClassName,
                            showAnimations: !1,
                            innerCircleClassName: w.innerCircle,
                            progressCircleStrokeSize: 5,
                            backgroundCircleSize: '38%'
                        })
                    }),
                footer: (0, i.jsxs)('div', {
                    className: w.whatYouLoseButtonContainer,
                    children: [
                        (0, i.jsx)(T.Button, {
                            onClick: () => k(2),
                            children: Y.Z.Messages.CONTINUE
                        }),
                        (0, i.jsx)(T.Button, {
                            look: T.Button.Looks.LINK,
                            color: (0, E.wj)(P) ? T.Button.Colors.WHITE : T.Button.Colors.PRIMARY,
                            onClick: () => $(U),
                            children: Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                        })
                    ]
                }),
                onClose: () => $(U),
                onDiscountClaim: () => k(4),
                onContinue: () => k(2),
                isLoading: ee && et,
                churnUserDiscountOffer: es,
                analyticsLocations: B
            });
            break;
        case 2:
            t = (0, i.jsx)(H, {
                premiumSubscription: n,
                premiumType: f,
                setStep: k,
                onClose: () => $(U),
                whatYouLoseExperienceEnabled: j,
                analyticsLocation: d
            });
            break;
        case 3:
            t = (0, i.jsx)(K, {
                premiumSubscription: n,
                premiumType: f,
                onBack: () => k(2),
                onClose: () => $(U),
                analyticsLocation: d
            });
            break;
        case 4:
            t = (0, i.jsx)(L.Z, {
                premiumSubscription: n,
                premiumType: f,
                onClose: () => $(U),
                onConfirm: () => k(5),
                userDiscountOffer: es
            });
            break;
        case 5:
            t = (0, i.jsx)(b.D, {
                premiumSubscription: n,
                premiumType: f,
                onClose: () => $(U),
                confettiCanvas: m,
                userDiscountOffer: es
            });
            break;
        default:
            throw Error('Unexpected step: '.concat(U));
    }
    return (0, i.jsxs)(A.Gt, {
        value: B,
        children: [
            (0, i.jsx)(c.O_, {
                ref: C,
                className: w.confettiCanvas,
                environment: S.current
            }),
            (0, i.jsx)(T.ModalRoot, {
                transitionState: a,
                children: t
            })
        ]
    });
}
