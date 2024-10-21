t.d(s, {
    R: function () {
        return V;
    }
}),
    t(411104);
var n = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(512722),
    o = t.n(r),
    l = t(442837),
    c = t(481060),
    d = t(366939),
    _ = t(100527),
    u = t(906732),
    E = t(975298),
    T = t(710845),
    S = t(963249),
    I = t(301766),
    N = t(509545),
    m = t(78839),
    A = t(931331),
    C = t(754347),
    g = t(122289),
    h = t(74538),
    O = t(212895),
    p = t(296848),
    R = t(140465),
    x = t(879463),
    M = t(104494),
    f = t(987997),
    D = t(833569),
    L = t(823188),
    P = t(474936),
    b = t(981631),
    Z = t(689938),
    v = t(353740);
let j = new T.Z('SubscriptionHeader.tsx'),
    B = {
        page: b.ZY5.USER_SETTINGS,
        section: b.jXE.SETTINGS_PREMIUM,
        object: b.qAy.CARD
    },
    U = [b.O0b.PAUSED, b.O0b.PAUSE_PENDING, b.O0b.BILLING_RETRY];
function G(e) {
    let { wordMark: s, subscriptionInfo: t, buttons: a, statusClasses: r, shouldUseDiscountMarketing: o, discountAmount: l } = e;
    return (0, n.jsxs)('div', {
        className: i()(v.banner, r),
        children: [
            (0, n.jsx)('div', { className: v.bannerBackgroundImage }),
            (0, n.jsxs)('div', {
                className: v.detailsContainer,
                children: [
                    (0, n.jsx)('div', { className: v.image }),
                    (0, n.jsxs)('div', {
                        className: v.details,
                        children: [
                            (0, n.jsxs)('div', {
                                className: v.headerLabel,
                                children: [
                                    s,
                                    o &&
                                        null != l &&
                                        (0, n.jsx)(L.Cy, {
                                            text: Z.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: l }),
                                            className: v.discountPill,
                                            colorOptions: L.VE.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1
                                        })
                                ]
                            }),
                            t
                        ]
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: v.buttons,
                children: a
            })
        ]
    });
}
function F(e) {
    let { wordMark: s, subscriptionInfo: t, buttons: a, statusClasses: r, shouldUseDiscountMarketing: o, discountAmount: l } = e;
    return (0, n.jsxs)('div', {
        className: i()(v.banner, r, v.repositioned),
        children: [
            (0, n.jsx)('div', { className: v.bannerBackgroundImage }),
            (0, n.jsx)('div', {
                className: v.detailsContainer,
                children: (0, n.jsx)('div', {
                    className: v.details,
                    children: (0, n.jsxs)('div', {
                        className: v.headerLabel,
                        children: [
                            (0, n.jsx)('div', { className: v.image }),
                            (0, n.jsxs)('div', {
                                className: v.headerColumnB,
                                children: [
                                    s,
                                    o &&
                                        null != l &&
                                        (0, n.jsx)(L.Cy, {
                                            text: Z.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: l }),
                                            className: v.discountPill,
                                            colorOptions: L.VE.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1
                                        }),
                                    t
                                ]
                            })
                        ]
                    })
                })
            }),
            (0, n.jsx)('div', {
                className: v.buttons,
                children: a
            })
        ]
    });
}
function y() {
    return (0, n.jsxs)('div', {
        className: v.wordMark,
        children: [
            (0, n.jsx)(C.Z, {
                className: v.discordWordmark,
                'aria-label': Z.Z.Messages.PREMIUM_TIER_1
            }),
            (0, n.jsx)('div', { className: v.classicWordmark })
        ]
    });
}
function V() {
    let { analyticsLocations: e } = (0, u.ZP)(_.Z.ACCOUNT_CREDIT_BANNER);
    return (0, n.jsx)(G, {
        wordMark: (0, n.jsx)(y, {}),
        subscriptionInfo: (0, n.jsx)('div', {
            className: v.planInfo,
            children: Z.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_DESCRIPTION
        }),
        buttons: (0, n.jsx)(f.Z, {
            className: v.toolsButton,
            onClick: () =>
                (0, S.Z)({
                    subscriptionTier: P.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: B
                }),
            children: Z.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_CTA
        }),
        statusClasses: { [v.tier1]: !0 }
    });
}
s.Z = function (e) {
    var s;
    let { subscription: a, renewalInvoicePreview: r, paymentSource: T, busy: L, analyticsLocation: V } = e,
        { analyticsLocations: Y } = (0, u.ZP)(_.Z.SUBSCRIPTION_HEADER),
        { fractionalState: k } = (0, E.Z)({ forceFetch: !1 }),
        w = k === P.a$.FP_SUB,
        { enabled: H } = (0, x.ZP)({ location: 'subscription_header' });
    (!P.pj.has(a.planId) || !b.JwP.ALL_PAUSEABLE.has(a.status)) && (H = !1);
    let W = (0, M.Ng)(),
        K = null == W ? void 0 : null === (s = W.discount) || void 0 === s ? void 0 : s.amount,
        z = (0, R.t7)(),
        Q = (0, R.lr)(),
        X = (0, l.e7)([m.ZP], () => m.ZP.inReverseTrial()),
        q = () => {
            if (a.status === b.O0b.ACTIVE || a.status === b.O0b.PAST_DUE || a.status === b.O0b.PAUSED) ee(D.Steps.PAUSE_SELECT);
        },
        J = () => {
            if (a.status === b.O0b.ACTIVE || a.status === b.O0b.PAST_DUE || a.status === b.O0b.PAUSE_PENDING) ee();
        },
        $ = () => {
            if (a.status === b.O0b.BILLING_RETRY) ee(D.Steps.CONFIRM);
        },
        ee = (e) => {
            (0, c.openModalLazy)(async () => {
                let { default: s } = await Promise.resolve().then(t.bind(t, 833569));
                return (t) =>
                    (0, n.jsx)(s, {
                        ...t,
                        premiumSubscription: a,
                        analyticsLocation: V,
                        analyticsLocations: Y,
                        initialStep: e
                    });
            });
        },
        es = () => {
            if (null != a && null != a.planIdFromItems) {
                let e = N.Z.get(a.planIdFromItems);
                if (null == e) {
                    j.info('Plan not fetched for plan id: '.concat(a.planIdFromItems));
                    return;
                }
                let s = (0, O.DE)(e, null == T ? void 0 : T.id, !1),
                    t = s.length > 0 ? s[0] : a.currency,
                    n = !1;
                1 === s.length && (null == T ? void 0 : T.id) === a.paymentSourceId && (0, O.tD)(e.id, t, null == T ? void 0 : T.id) && (n = !0),
                    n
                        ? d.O5(a, Y)
                        : (0, S.Z)({
                              initialPlanId: a.planIdFromItems,
                              analyticsLocations: Y,
                              analyticsLocation: V,
                              analyticsObject: B,
                              subscription: a
                          });
            }
        },
        et = () => {
            if (!U.includes(a.status) || null == a.pauseEndsAt) {
                (0, g.q2)(Error('Invalid subscription to resume'), {
                    extra: {
                        subscriptionId: a.id,
                        status: a.status,
                        pauseEndsAt: a.pauseEndsAt
                    }
                });
                return;
            }
            a.status === b.O0b.PAUSED
                ? (0, S.Z)({
                      initialPlanId: a.planIdFromItems,
                      analyticsLocations: Y,
                      analyticsLocation: V,
                      analyticsObject: B,
                      subscription: a,
                      skipConfirm: !0
                  })
                : d.v4(a, Y);
        },
        en = () => {
            if (a.status === b.O0b.PAUSED) ee(D.Steps.PAUSE_SELECT);
        },
        ea = () => {
            ee(D.Steps.WHAT_YOU_LOSE);
        },
        ei = h.ZP.getPlanIdFromInvoice(a, r);
    if ((0, I.Q0)(ei)) return null;
    let er = h.ZP.getStatusFromInvoice(a, r),
        eo = h.ZP.getPremiumType(ei),
        el = {
            [v.tier0]: eo === P.p9.TIER_0,
            [v.tier1]: eo === P.p9.TIER_1,
            [v.tier2]: eo === P.p9.TIER_2,
            [v.canceled]: er === b.O0b.CANCELED,
            [v.pausePending]: er === b.O0b.PAUSE_PENDING,
            [v.paused]: er === b.O0b.PAUSED && !w,
            [v.failedPayment]: (0, h.zV)(er)
        },
        ec = null;
    switch (eo) {
        case P.p9.TIER_0:
            ec = (0, n.jsxs)('div', {
                className: v.wordMark,
                children: [
                    (0, n.jsx)(C.Z, {
                        className: v.discordWordmark,
                        'aria-label': Z.Z.Messages.PREMIUM_TIER_0
                    }),
                    (0, n.jsx)('div', { className: v.basicWordmark })
                ]
            });
            break;
        case P.p9.TIER_1:
            ec = (0, n.jsx)(y, {});
            break;
        case P.p9.TIER_2:
            ec = (0, n.jsx)(A.Z, {
                className: v.planName,
                'aria-label': Z.Z.Messages.PREMIUM_TITLE
            });
    }
    let ed = U.includes(a.status) && !w ? F : G;
    return (0, n.jsx)(ed, {
        wordMark: ec,
        subscriptionInfo: ((e) => {
            o()(null != r, 'Expected renewalInvoicePreview');
            let s = h.ZP.getReverseTrialWeeks(a.trialId);
            return (0, n.jsx)('div', {
                className: v.planInfo,
                children: X
                    ? Z.Z.Messages.REVERSE_TRIAL_SUBSCRIBER_MANAGEMENT_SUBHEADER.format({ weeks: s })
                    : (0, h.qV)({
                          planId: e,
                          subscription: a,
                          renewalInvoicePreview: r,
                          hasDiscountApplied: z,
                          activeDiscountInfo: Q
                      })
            });
        })(ei),
        buttons: (() => {
            let { status: e } = a;
            if (a.isPurchasedExternally) {
                let e = (0, h.JE)(a.paymentGateway, 'SUBSCRIPTION_MANAGEMENT');
                return (0, n.jsx)(c.Anchor, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, n.jsx)(c.Button, {
                        className: i()(v.toolsButton, v.externalButton),
                        size: c.Button.Sizes.SMALL,
                        look: c.ButtonLooks.OUTLINED,
                        color: c.ButtonColors.WHITE,
                        submitting: L,
                        children: Z.Z.Messages.BILLING_MANAGE_SUBSCRIPTION
                    })
                });
            }
            function s() {
                let e = h.ZP.isSwitchingPlansDisabled(a, k),
                    s = h.ZP.getSwitchingPlansDisabledMessage(a);
                return (0, n.jsxs)('div', {
                    className: v.toolsButtons,
                    children: [
                        H
                            ? (0, n.jsx)(c.Button, {
                                  className: v.toolsButton,
                                  size: c.Button.Sizes.SMALL,
                                  look: c.ButtonLooks.LINK,
                                  color: c.ButtonColors.WHITE,
                                  submitting: L,
                                  onClick: q,
                                  children: Z.Z.Messages.PREMIUM_PAUSE_OR_CANCEL_SUBSCRIPTION
                              })
                            : (0, n.jsx)(c.Button, {
                                  className: v.toolsButton,
                                  size: c.Button.Sizes.SMALL,
                                  look: c.ButtonLooks.LINK,
                                  color: c.ButtonColors.WHITE,
                                  submitting: L,
                                  onClick: J,
                                  children: Z.Z.Messages.CANCEL
                              }),
                        (0, n.jsx)(c.Tooltip, {
                            text: s,
                            children: (s) =>
                                (0, n.jsx)(f.Z, {
                                    ...s,
                                    disabled: e,
                                    className: v.toolsButton,
                                    onClick: () => {
                                        (0, S.Z)({
                                            analyticsLocations: Y,
                                            analyticsLocation: V,
                                            analyticsObject: B,
                                            subscription: a
                                        });
                                    },
                                    children: Z.Z.Messages.PREMIUM_SWITCH_PLANS
                                })
                        })
                    ]
                });
            }
            if (h.ZP.isBaseSubscriptionCanceled(a))
                return (0, n.jsx)(c.Button, {
                    className: v.toolsButton,
                    size: c.Button.Sizes.SMALL,
                    color: c.ButtonColors.BRAND_INVERTED,
                    submitting: L,
                    onClick: es,
                    children: Z.Z.Messages.RESUBSCRIBE
                });
            switch (e) {
                case b.O0b.BILLING_RETRY:
                    return (0, n.jsx)(c.Button, {
                        className: v.billingRetryCancel,
                        size: c.Button.Sizes.SMALL,
                        color: c.ButtonColors.CUSTOM,
                        submitting: L,
                        onClick: $,
                        children: Z.Z.Messages.CANCEL
                    });
                case b.O0b.PAUSE_PENDING:
                    return (0, n.jsxs)('div', {
                        className: v.toolsButtons,
                        children: [
                            (0, n.jsx)(c.Button, {
                                className: v.toolsButton,
                                size: c.Button.Sizes.SMALL,
                                look: c.ButtonLooks.LINK,
                                color: c.ButtonColors.WHITE,
                                submitting: L,
                                onClick: J,
                                children: Z.Z.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
                            }),
                            (0, n.jsx)(c.Button, {
                                className: v.toolsButton,
                                size: c.Button.Sizes.SMALL,
                                color: c.ButtonColors.BRAND_INVERTED,
                                submitting: L,
                                onClick: et,
                                children: Z.Z.Messages.CANCEL_PAUSE
                            })
                        ]
                    });
                case b.O0b.PAUSED:
                    if (w) return s();
                    let { durations: t } = (0, p.AT)(a);
                    return (0, n.jsxs)('div', {
                        className: v.toolsButtons,
                        children: [
                            t.length > 0
                                ? (0, n.jsx)(c.Button, {
                                      className: v.linkButton,
                                      size: c.Button.Sizes.SMALL,
                                      look: c.ButtonLooks.LINK,
                                      color: c.ButtonColors.WHITE,
                                      submitting: L,
                                      onClick: en,
                                      children: Z.Z.Messages.PREMIUM_CANCEL_OR_EXTEND_PAUSE_SUBSCRIPTION
                                  })
                                : (0, n.jsx)(c.Button, {
                                      className: v.linkButton,
                                      size: c.Button.Sizes.SMALL,
                                      look: c.ButtonLooks.LINK,
                                      color: c.ButtonColors.WHITE,
                                      submitting: L,
                                      onClick: ea,
                                      children: Z.Z.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
                                  }),
                            (0, n.jsx)(c.Button, {
                                className: v.toolsButton,
                                size: c.Button.Sizes.SMALL,
                                color: c.ButtonColors.BRAND_INVERTED,
                                submitting: L,
                                onClick: et,
                                children: Z.Z.Messages.RESUME
                            })
                        ]
                    });
                case b.O0b.ACTIVE:
                case b.O0b.PAST_DUE:
                    return s();
            }
        })(),
        statusClasses: el,
        shouldUseDiscountMarketing: z,
        discountAmount: K
    });
};
