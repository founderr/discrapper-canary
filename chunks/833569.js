n.r(t),
    n.d(t, {
        Steps: function () {
            return i;
        },
        default: function () {
            return X;
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
    E = n(600164),
    _ = n(509545),
    I = n(626135),
    f = n(122289),
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
    B = n(807163),
    L = n(311821),
    Z = n(139255),
    F = n(798769),
    M = n(459965),
    k = n(119269),
    w = n(474936),
    U = n(735825),
    V = n(981631),
    G = n(388032),
    Y = n(957112);
((s = i || (i = {}))[(s.WHAT_YOU_LOSE = 1)] = 'WHAT_YOU_LOSE'), (s[(s.CONFIRM = 2)] = 'CONFIRM'), (s[(s.PREVIEW = 3)] = 'PREVIEW'), (s[(s.CONFIRM_DISCOUNT = 4)] = 'CONFIRM_DISCOUNT'), (s[(s.DISCOUNT_APPLIED = 5)] = 'DISCOUNT_APPLIED'), (s[(s.PAUSE_SELECT = 6)] = 'PAUSE_SELECT'), (s[(s.PAUSE_CONFIRM = 7)] = 'PAUSE_CONFIRM');
async function H(e) {
    let { premiumSubscription: t, onClose: n, setHasError: i, setIsCancelling: s, analyticsLocations: r, analyticsLocation: l } = e;
    try {
        if ((s(!0), i(!1), [V.O0b.PAST_DUE, V.O0b.PAUSED, V.O0b.BILLING_RETRY].includes(t.status))) await (0, p.EO)(t.id, r, l);
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
function z(e) {
    var t;
    let { premiumSubscription: n, premiumType: i, setStep: s, onClose: a, whatYouLoseExperienceEnabled: o, analyticsLocation: c } = e,
        d = (0, C.Q)(),
        [u, m] = l.useState(!1),
        [p, S] = l.useState(!1),
        _ = (0, x.ZP)(),
        { analyticsLocations: I } = (0, T.ZP)(),
        f = null;
    switch (n.status) {
        case V.O0b.PAST_DUE:
        case V.O0b.PAUSED:
        case V.O0b.BILLING_RETRY:
            f = G.intl.string(G.t.FClXh4);
            break;
        default:
            switch (i) {
                case w.p9.TIER_0:
                    f = d
                        ? G.intl.format(G.t['l+A50N'], {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: N.Z.getArticleURL(V.BhN.BLOCKED_PAYMENTS)
                          })
                        : G.intl.format(G.t.Y6Wfa2, { date: n.currentPeriodEnd });
                    break;
                case w.p9.TIER_1:
                    f = d
                        ? G.intl.format(G.t.QN7eIi, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: N.Z.getArticleURL(V.BhN.BLOCKED_PAYMENTS)
                          })
                        : G.intl.format(G.t.X7i9Dw, { date: n.currentPeriodEnd });
                    break;
                default:
                    f = d
                        ? G.intl.format(G.t.vuSNho, {
                              date: n.currentPeriodEnd,
                              helpdeskArticle: N.Z.getArticleURL(V.BhN.BLOCKED_PAYMENTS)
                          })
                        : G.intl.format(G.t.fCdmNj, { date: n.currentPeriodEnd });
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
                  children: G.intl.string(G.t.PDTjLC)
              })
            : (0, r.jsx)(g.Button, {
                  color: g.Button.Colors.RED,
                  disabled: u,
                  onClick: async () => {
                      await H({
                          setHasError: S,
                          onClose: a,
                          premiumSubscription: n,
                          setIsCancelling: m,
                          analyticsLocations: I,
                          analyticsLocation: c
                      });
                  },
                  children: o ? G.intl.string(G.t['cY+Ooa']) : G.intl.formatToPlainString(G.t['V3+Rpa'], { planPremiumType: A.ZP.getDisplayPremiumType(n.planId) })
              }),
        j = (0, r.jsx)(g.Button, {
            look: g.Button.Looks.LINK,
            color: (0, h.ap)(_) ? g.Button.Colors.PRIMARY : g.Button.Colors.WHITE,
            onClick: a,
            children: o ? G.intl.string(G.t.h9tkAA) : G.intl.string(G.t['ETE/oK'])
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o
                ? (0, r.jsx)(F.Z, {
                      premiumType: i,
                      className: Y.cancellationHeader,
                      onClose: a
                  })
                : (0, r.jsxs)(g.ModalHeader, {
                      separator: !1,
                      children: [
                          (0, r.jsx)(g.FormTitle, {
                              tag: g.FormTitleTags.H4,
                              children: G.intl.format(G.t.ZpiGy8, { planPremiumType: A.ZP.getDisplayPremiumType(n.planId) })
                          }),
                          (0, r.jsx)(g.ModalCloseButton, { onClick: a })
                      ]
                  }),
            (0, r.jsxs)(g.ModalContent, {
                className: Y.body,
                children: [
                    p
                        ? (0, r.jsx)(g.FormErrorBlock, {
                              className: Y.errorBlock,
                              children: G.intl.string(G.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)('div', { className: Y.cancelImage }),
                    (0, r.jsx)('div', { children: f })
                ]
            }),
            (0, r.jsxs)(g.ModalFooter, {
                justify: E.Z.Justify.START,
                children: [v, j]
            })
        ]
    });
}
function W(e) {
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
        a = (0, m.e7)([_.Z], () => _.Z.get(i.planId));
    if (null == l || null == a) return (0, r.jsx)(g.Spinner, { className: Y.loading });
    let { intervalType: o, intervalCount: c } = A.ZP.getIntervalForInvoice(l);
    return (0, r.jsxs)('div', {
        className: Y.__invalid_bodyText,
        children: [
            (0, r.jsx)('div', {
                className: Y.renewalInvoiceDate,
                children:
                    0 !== l.total
                        ? G.intl.format(G.t.ycyeBw, {
                              renewalDate: l.subscriptionPeriodStart,
                              rate: (0, b.og)((0, b.T4)(l.total, l.currency), o, c)
                          })
                        : G.intl.format(G.t['+y0Tj4'], { renewalDate: l.subscriptionPeriodStart })
            }),
            (0, r.jsxs)(R.PO, {
                children: [
                    (0, r.jsx)(R.q9, { children: G.intl.string(G.t.iqhIp6) }),
                    (0, r.jsx)(R.R$, {
                        label: G.intl.formatToPlainString(G.t.r3jVZm, { planName: A.ZP.getDisplayName(a.id) }),
                        value: (0, A.PK)(a),
                        className: Y.invoiceCancelRow
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
function K(e) {
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
                className: o()(Y.previewStep, Y.body),
                children: [
                    u
                        ? (0, r.jsx)(g.FormErrorBlock, {
                              className: Y.errorBlock,
                              children: G.intl.string(G.t['5mlOCQ'])
                          })
                        : null,
                    (0, r.jsx)(W, { premiumSubscription: t })
                ]
            }),
            (0, r.jsxs)(g.ModalFooter, {
                align: E.Z.Align.CENTER,
                justify: E.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(g.Button, {
                        color: g.Button.Colors.RED,
                        disabled: c,
                        onClick: async () => {
                            await H({
                                setHasError: m,
                                onClose: s,
                                premiumSubscription: t,
                                setIsCancelling: d,
                                analyticsLocations: h,
                                analyticsLocation: a
                            });
                        },
                        children: G.intl.format(G.t['V3+Rpa'], { planPremiumType: A.ZP.getDisplayPremiumType(t.planId) })
                    }),
                    (0, r.jsx)(L.Z, { onClick: i })
                ]
            })
        ]
    });
}
function q(e) {
    var t;
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: null === (t = (0, A.Af)(e)) || void 0 === t ? void 0 : t.id,
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
    var t;
    let n,
        { premiumSubscription: i, transitionState: s, onClose: a, analyticsLocations: o, analyticsLocation: d, initialStep: m } = e,
        p = l.useRef(new c.qA()),
        [C, E] = l.useState(null),
        _ = (0, O.yQ)(),
        N = (null == _ ? void 0 : _.showCard) === !0,
        b = (null == _ ? void 0 : _.tenureRewardType) === U.nW.AVATAR_DECO,
        v = null === (t = (0, A.Af)(i)) || void 0 === t ? void 0 : t.planId,
        R = null != v ? A.ZP.getPremiumType(v) : null;
    u()(null != R, 'Should not be cancelling Nitro without premiumType');
    let L = (0, x.ZP)();
    l.useEffect(() => {
        I.default.track(V.rMx.CANCELLATION_FLOW_STARTED, q(i));
    }, [i]);
    let Z = R === w.p9.TIER_0 || R === w.p9.TIER_1 || R === w.p9.TIER_2;
    null == m && (m = Z ? 1 : 2);
    let { analyticsLocations: F } = (0, T.ZP)(o, S.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL),
        [H, W, X, J] = (function (e, t, n) {
            let [i, s] = l.useState(e),
                [r, a] = l.useState(Date.now()),
                [o] = l.useState(Date.now()),
                c = l.useCallback(
                    (e) => {
                        I.default.track(V.rMx.CANCELLATION_FLOW_STEP, {
                            from_step: Q[i],
                            to_step: Q[e],
                            step_duration_ms: Date.now() - r,
                            flow_duration_ms: Date.now() - o,
                            location_stack: n,
                            ...q(t)
                        }),
                            s(e),
                            a(Date.now());
                    },
                    [n, o, r, i, t]
                );
            return [i, c, r, o];
        })(m, i, o),
        [$, ee] = l.useState(null);
    (0, M.w)(i, a, !1);
    let et = (e) => {
            a(),
                I.default.track(V.rMx.CANCELLATION_FLOW_STEP, {
                    from_step: Q[e],
                    to_step: null,
                    step_duration_ms: Date.now() - X,
                    flow_duration_ms: Date.now() - J,
                    location_stack: o,
                    ...q(i)
                });
        },
        en = (0, j.UV)(),
        { churnUserDiscountOffer: ei, isFetchingChurnDiscountOffer: es } = (0, j.WR)(!en || 1 !== H);
    switch (H) {
        case 6:
            n = (0, r.jsx)(y.of, {
                premiumSubscription: i,
                premiumType: R,
                setStep: W,
                onClose: () => et(H),
                pauseDuration: $,
                setPauseDuration: ee,
                footer: (0, r.jsxs)('div', {
                    className: Y.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(g.Button, {
                            disabled: null === $,
                            onClick: () => {
                                0 === $ ? W(1) : W(7);
                            },
                            children: G.intl.string(G.t['3PatS0'])
                        }),
                        (0, r.jsx)(g.Button, {
                            look: g.Button.Looks.LINK,
                            color: (0, h.wj)(L) ? g.Button.Colors.WHITE : g.Button.Colors.PRIMARY,
                            onClick: a,
                            children: G.intl.string(G.t.h9tkAA)
                        })
                    ]
                }),
                analyticsLocation: d
            });
            break;
        case 7:
            if (null == $) {
                let e = Error('No pause duration to set');
                throw (
                    ((0, f.q2)(e, {
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
                premiumType: R,
                setStep: W,
                onClose: () => et(H),
                analyticsLocation: d,
                pauseDuration: $
            });
            break;
        case 1:
            n = (0, r.jsx)(B.Z, {
                premiumType: R,
                titleText: G.intl.string(G.t.PWq8TE),
                subtitleText: N ? G.intl.string(G.t.QagLCA) : G.intl.format(G.t.nsGVzs, {}),
                subtitleClassName: N ? Y.subtitleSection : void 0,
                subtitleIcon:
                    N &&
                    (0, r.jsx)('div', {
                        className: Y.subtitleIcon,
                        children: (0, r.jsx)(k.ZP, {
                            staticPercentage: 100,
                            iconClassName: Y.iconClassName,
                            showAnimations: !1,
                            innerCircleClassName: Y.innerCircle,
                            progressCircleVariation: b ? k.Qo.AVATAR_DECO : k.Qo.NITRO_GEM,
                            avatarDecoAssetDescription: b ? 'Gear Spin' : void 0,
                            avatarDecoAssetId: b ? U.VA : void 0,
                            progressCircleStrokeSize: 5,
                            backgroundCircleSize: '38%'
                        })
                    }),
                footer: (0, r.jsxs)('div', {
                    className: Y.whatYouLoseButtonContainer,
                    children: [
                        (0, r.jsx)(g.Button, {
                            onClick: () => W(2),
                            children: G.intl.string(G.t['3PatS0'])
                        }),
                        (0, r.jsx)(g.Button, {
                            look: g.Button.Looks.LINK,
                            color: (0, h.wj)(L) ? g.Button.Colors.WHITE : g.Button.Colors.PRIMARY,
                            onClick: () => et(H),
                            children: G.intl.string(G.t.h9tkAA)
                        })
                    ]
                }),
                onClose: () => et(H),
                onDiscountClaim: () => W(4),
                onContinue: () => W(2),
                isLoading: en && es,
                churnUserDiscountOffer: ei,
                analyticsLocations: F
            });
            break;
        case 2:
            n = (0, r.jsx)(z, {
                premiumSubscription: i,
                premiumType: R,
                setStep: W,
                onClose: () => et(H),
                whatYouLoseExperienceEnabled: Z,
                analyticsLocation: d
            });
            break;
        case 3:
            n = (0, r.jsx)(K, {
                premiumSubscription: i,
                premiumType: R,
                onBack: () => W(2),
                onClose: () => et(H),
                analyticsLocation: d
            });
            break;
        case 4:
            n = (0, r.jsx)(P.Z, {
                premiumSubscription: i,
                premiumType: R,
                onClose: () => et(H),
                onConfirm: () => W(5),
                userDiscountOffer: ei
            });
            break;
        case 5:
            n = (0, r.jsx)(D.D, {
                premiumSubscription: i,
                premiumType: R,
                onClose: () => et(H),
                confettiCanvas: C,
                userDiscountOffer: ei
            });
            break;
        default:
            throw Error('Unexpected step: '.concat(H));
    }
    return (0, r.jsxs)(T.Gt, {
        value: F,
        children: [
            (0, r.jsx)(c.O_, {
                ref: E,
                className: Y.confettiCanvas,
                environment: p.current
            }),
            (0, r.jsx)(g.ModalRoot, {
                transitionState: s,
                children: n
            })
        ]
    });
}
