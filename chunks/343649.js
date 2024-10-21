t.r(n),
    t.d(n, {
        GuildBoostPurchaseModal: function () {
            return et;
        },
        default: function () {
            return eo;
        }
    }),
    t(47120);
var o,
    r = t(200651),
    l = t(192379),
    i = t(512722),
    a = t.n(i),
    s = t(75124),
    c = t(252759),
    u = t(772848),
    d = t(442837),
    p = t(780384),
    f = t(481060),
    _ = t(355467),
    m = t(179360),
    S = t(723484),
    E = t(330726),
    h = t(100527),
    g = t(906732),
    I = t(15640),
    T = t(89057),
    P = t(600164),
    M = t(232127),
    C = t(598),
    b = t(409813),
    x = t(45572),
    v = t(98278),
    N = t(431369),
    R = t(176919),
    A = t(3409),
    y = t(185139),
    L = t(210887),
    k = t(430824),
    O = t(314884),
    U = t(975060),
    D = t(853872),
    B = t(509545),
    Z = t(78839),
    j = t(626135),
    w = t(267642),
    F = t(74538),
    G = t(212895),
    W = t(296848),
    Y = t(518062),
    H = t(4434),
    V = t(333451),
    K = t(981631),
    X = t(474936),
    z = t(231338),
    $ = t(689938),
    q = t(312094);
(o || (o = {})).PREMIUM = 'discord://app/settings/nitro';
let J = X.Xh.NONE_MONTH,
    Q = [b.h8.PLAN_SELECT, b.h8.REVIEW, b.h8.CONFIRM],
    ee = [b.h8.PLAN_SELECT, b.h8.ADD_PAYMENT_STEPS, b.h8.REVIEW, b.h8.CONFIRM];
async function en(e) {
    await (0, m.X8)();
    let n = (0, w.vx)(O.Z.boostSlots);
    return (0, m.W3)(
        e,
        n.map((e) => e.id)
    );
}
function et(e) {
    let n,
        { transitionState: t, onClose: o, closeGuildPerksModal: i, analyticsLocations: m, analyticsLocation: et, analyticsSourceLocation: eo, guildId: er, onSubscribeComplete: el, totalNumberOfSlotsToAssign: ei = 1, disablePremiumUpsell: ea = !1, onSubscriptionConfirmation: es, applicationId: ec } = e,
        { activeSubscription: eu, blockedPayments: ed } = (0, C.usePaymentContext)(),
        ep = (0, d.e7)([Z.ZP], () => Z.ZP.hasFetchedSubscriptions()),
        ef = null != eu ? eu.paymentSourceId : null,
        e_ = (0, d.e7)([B.Z], () => (null != eu ? (0, W.oE)(eu.planId) : null)),
        em = (0, d.e7)([B.Z], () => null == eu || null != B.Z.get(eu.planId)),
        eS = (0, d.e7)([B.Z], () => (null == e_ ? B.Z.get(J) : e_)),
        eE = (0, d.e7)([L.Z], () => L.Z.theme),
        eh = l.useRef((0, w.vx)(O.Z.boostSlots)).current,
        eg = (0, d.e7)([D.Z], () => D.Z.defaultPaymentSourceId),
        eI = (0, A.fL)(null != ef ? ef : ep ? eg : null),
        { paymentSources: eT, setPurchaseError: eP, paymentSourceId: eM, setIsSubmittingCurrentStep: eC, paymentAuthenticationState: eb, setPaymentSourceId: ex, isSubmittingCurrentStep: ev, paymentError: eN, purchaseError: eR, purchaseErrorBlockRef: eA } = eI,
        ey = Object.keys(eT).length > 0,
        [eL, ek] = l.useState(ei - eh.length),
        [eO, eU] = l.useState(!1),
        eD = (0, d.e7)([U.Z], () => U.Z.popupCallbackCalled),
        eB = (0, I.V)(),
        eZ = l.useMemo(
            () =>
                null != eu && em && eB
                    ? (0, N.g)(eu, eL)
                    : [
                          {
                              planId: X.Xh.PREMIUM_MONTH_GUILD,
                              quantity: eL
                          }
                      ],
            [eu, em, eL, eB]
        ),
        [ej, ew] = (0, s.Z)(() => [(0, u.Z)(), Date.now()]),
        { analyticsLocations: eF } = (0, g.ZP)(m, h.Z.GUILD_BOOST_PURCHASE_MODAL),
        eG = l.useMemo(() => {
            var e, n;
            return {
                load_id: ej,
                payment_type: z.Zu[z.GZ.SUBSCRIPTION],
                sku_id: X.Si.GUILD,
                subscription_type: K.NYc.PREMIUM,
                subscription_plan_id:
                    null !==
                        (n =
                            null ===
                                (e = eZ.find((e) => {
                                    let { planId: n } = e;
                                    return X.Z1.has(n);
                                })) || void 0 === e
                                ? void 0
                                : e.planId) && void 0 !== n
                        ? n
                        : X.Xh.PREMIUM_MONTH_GUILD,
                quantity: eL,
                location: et,
                source: eo,
                location_stack: eF
            };
        }, [ej, et, eF, eo, eZ, eL]);
    l.useEffect(() => {
        (0, G.i1)(eM);
    }, [eM]),
        l.useEffect(() => {
            (async () => {
                if (!0 === eD)
                    try {
                        if (null == U.Z.redirectedPaymentId) return;
                        await (0, _.OP)(U.Z.redirectedPaymentId), eJ(b.h8.CONFIRM), eX(x.A.COMPLETED), null != er && (await en(er)), null != el && el();
                    } catch (e) {
                        eX(x.A.FAIL),
                            eP(e),
                            j.default.track(K.rMx.PAYMENT_FLOW_FAILED, {
                                ...eG,
                                payment_error_code: null == e ? void 0 : e.code,
                                payment_gateway: K.gg$.STRIPE,
                                payment_source_id: eM,
                                duration_ms: Date.now() - ew
                            });
                    } finally {
                        eC(!1), (0, _.K2)();
                    }
            })();
        }, [eD]),
        l.useEffect(() => {
            !Z.ZP.hasFetchedSubscriptions() && (0, _.jg)(),
                (0, M.U)({
                    ...eG,
                    guild_id: er,
                    application_id: ec
                }),
                null != eu &&
                    null != eu.renewalMutations &&
                    j.default.track(K.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: et,
                        guild_id: er
                    });
        }, []);
    let [eW, eY] = l.useState(Q),
        [eH, eV] = l.useState(b.h8.PLAN_SELECT),
        [eK, eX] = l.useState(x.A.WAITING),
        [ez, e$] = l.useState(!0),
        eq = (0, c.Z)(() => Date.now(), [eH]),
        eJ = l.useCallback(
            (e, n) => {
                eV(e), eP(null);
                let t = Date.now();
                j.default.track(K.rMx.PAYMENT_FLOW_STEP, {
                    ...eG,
                    from_step: null != n ? n : eH,
                    to_step: e === b.h8.ADD_PAYMENT_STEPS ? b.h8.PAYMENT_TYPE : e,
                    step_duration_ms: t - eq,
                    flow_duration_ms: t - ew,
                    guild_id: er,
                    application_id: ec
                });
            },
            [eP, eG, eH, eq, ew, er, ec]
        ),
        eQ = () => {
            o(eK === x.A.COMPLETED);
        },
        e0 = null != eu && eu.isPurchasedExternally;
    l.useEffect(() => {
        eb !== R.wr.PENDING && eH !== b.h8.CONFIRM && null != ef && (eW !== Q && eY(Q), !Q.includes(eH) && eH !== b.h8.PREMIUM_UPSELL && eJ(b.h8.REVIEW)), eH === b.h8.ADD_PAYMENT_STEPS && eW !== ee && eY(ee), e0 && eH !== b.h8.PLAN_SELECT && eV(b.h8.PLAN_SELECT);
    }, [eH, eJ, e0, eb, eu, ef, eW]),
        (0, R.bp)(eH, eb, eJ, eX),
        (0, b.dZ)(eH, eK, eX);
    let e1 = l.useRef(null),
        [e8, e2] = (0, E.Z)(!1, 500),
        [e7, e9] = l.useState(null),
        [e4, e5] = l.useState([]),
        [e6, e3] = l.useState(!1);
    l.useEffect(() => {
        let e;
        if (!!eB) null != B.Z.get(X.Xh.PREMIUM_MONTH_GUILD) && e5((e = (0, G.DE)(X.Xh.PREMIUM_MONTH_GUILD, eM, !1))), null == eM && null != eu && null != eu.paymentSourceId ? e9(eu.currency) : null != e && e9(e[0]);
    }, [eM, eu, eB, JSON.stringify(e4)]);
    let ne = (0, A.vP)({
        paymentModalArgs: eI,
        initialStep: b.h8.PAYMENT_TYPE,
        prependSteps: [b.h8.PLAN_SELECT],
        appendSteps: [b.h8.REVIEW, b.h8.CONFIRM],
        breadcrumpSteps: eW,
        currentBreadcrumpStep: eH,
        onReturn: () => {
            eJ(Object.values(eT).length < 1 ? b.h8.PLAN_SELECT : b.h8.REVIEW, b.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            eJ(b.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                o = Date.now();
            j.default.track(K.rMx.PAYMENT_FLOW_STEP, {
                ...eG,
                from_step: n,
                to_step: t,
                step_duration_ms: o - eq,
                flow_duration_ms: o - ew,
                guild_id: er
            });
        }
    });
    if (ed) n = (0, r.jsx)(T.Vq, { onClose: eQ });
    else if (ep && em && eB && null != e7 && '' !== e7) {
        if (null == eu ? void 0 : eu.isPausedOrPausePending)
            n = (0, r.jsx)(f.ModalContent, {
                children: (0, r.jsx)('p', {
                    className: q.copy,
                    children: $.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION
                })
            });
        else if (null != eu && null != eu.renewalMutations)
            n = (0, r.jsx)(f.ModalContent, {
                children: (0, r.jsx)('p', {
                    className: q.copy,
                    children: $.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_PENDING_MUTATION
                })
            });
        else if (eH === b.h8.PREMIUM_UPSELL) {
            a()(null != eS, 'Missing nextPremiumSubscriptionPlan'), a()(e7, 'Currency not defined');
            let e =
                null != eM
                    ? {
                          paymentSourceId: eM,
                          currency: e7
                      }
                    : { currency: e7 };
            n = (0, r.jsx)(V.Z, {
                premiumSubscriptionPlan: eS,
                analyticsLocation: et,
                analyticsSourceLocation: eo,
                onClose: eQ,
                onBack: () => eJ(b.h8.PLAN_SELECT),
                onSkip: () => eJ(null != ef || ey ? b.h8.REVIEW : b.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: es,
                priceOptions: e
            });
        } else {
            let e, t, o, l;
            a()(e7, 'Currency not defined');
            let s =
                null != eM
                    ? {
                          paymentSourceId: eM,
                          currency: e7
                      }
                    : { currency: e7 };
            switch (eH) {
                case b.h8.PLAN_SELECT:
                    a()(null != er, 'Missing guildId'),
                        a()(null != eS, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, r.jsx)(H.CP, {
                            premiumSubscriptionPlan: eS,
                            numGuildBoosts: eL,
                            setNumGuildBoosts: ek,
                            setForceDisableSubmitButton: e$,
                            premiumSubscription: eu,
                            existingAvailableSlots: eh,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = 'discord://app/settings/nitro';
                                    return;
                                }
                                eQ(), null != i && i(), (0, v.z)();
                            },
                            guildId: er,
                            priceOptions: s
                        })),
                        e0 &&
                            null != eu &&
                            null != eu.paymentGateway &&
                            (e = (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(f.FormErrorBlock, {
                                        className: q.externalErrorBlock,
                                        children: $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_EXTERNAL.format({ paymentGatewayName: z.Vz[eu.paymentGateway] })
                                    }),
                                    e
                                ]
                            })),
                        (o = (0, r.jsx)(f.Button, {
                            look: f.Button.Looks.LINK,
                            color: (0, p.ap)(eE) ? f.Button.Colors.PRIMARY : f.Button.Colors.WHITE,
                            onClick: eQ,
                            children: $.Z.Messages.NEVERMIND
                        })),
                        (l = (0, r.jsx)(f.Button, {
                            type: 'submit',
                            disabled: ez || 0 === eL || e0,
                            onClick: () => {
                                if (!ea && (null == e_ || e_.premiumSubscriptionType !== X.p9.TIER_2)) {
                                    eJ(b.h8.PREMIUM_UPSELL);
                                    return;
                                }
                                eJ(null != ef || ey ? b.h8.REVIEW : b.h8.ADD_PAYMENT_STEPS);
                            },
                            children: $.Z.Messages.CONTINUE
                        }));
                    break;
                case b.h8.ADD_PAYMENT_STEPS:
                    break;
                case b.h8.AWAITING_AUTHENTICATION:
                    e = (0, r.jsx)(S.F, { className: q.__invalid_body });
                    break;
                case b.h8.REVIEW:
                    a()(null != eS, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, r.jsx)(H.Gq, {
                            paymentSources: eT,
                            priceOptions: s,
                            currentPremiumSubscription: eu,
                            premiumSubscriptionPaymentSourceId: ef,
                            premiumSubscriptionPlan: eS,
                            newAdditionalPlans: eZ,
                            onPaymentSourceChange: (e) => ex(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                eJ(b.h8.ADD_PAYMENT_STEPS), ex(null);
                            },
                            onPurchaseTermsChange: eU,
                            legalTermsNodeRef: e1,
                            hasLegalTermsFlash: e8
                        })),
                        (t = b.h8.PLAN_SELECT),
                        (l = eO
                            ? (0, r.jsx)(f.Button, {
                                  color: f.Button.Colors.GREEN,
                                  type: 'submit',
                                  submitting: ev,
                                  onClick: async () => {
                                      a()(null != eZ, 'Missing newAdditionalPlans');
                                      let e = null != eM ? eT[eM] : null;
                                      eP(null);
                                      try {
                                          if (
                                              (eX(x.A.PURCHASING),
                                              eC(!0),
                                              a()(null != eM, 'Missing paymentSourceId'),
                                              j.default.track(K.rMx.PAYMENT_FLOW_COMPLETED, {
                                                  ...eG,
                                                  duration_ms: Date.now() - ew,
                                                  guild_id: er,
                                                  application_id: ec
                                              }),
                                              e6)
                                          )
                                              return;
                                          if (null == eu || null == e_) {
                                              a()(null != e, 'Missing paymentSource');
                                              let n = await (0, _.XW)({
                                                  items: eZ,
                                                  paymentSource: e,
                                                  currency: s.currency
                                              });
                                              if (n.redirectConfirmation) {
                                                  e3(null != n.redirectURL);
                                                  return;
                                              }
                                          } else {
                                              let n = { items: (0, F.MY)(eu, eZ) };
                                              (n.currency = eu.currency), null == n.currency && (n.currency = s.currency), (n.paymentSource = null != ef ? eT[ef] : void 0), null == n.paymentSource && (a()(null != e, 'Missing paymentSource'), (n.paymentSource = e), (n.currency = s.currency));
                                              let t = await (0, _.Mg)(eu, n, eF);
                                              if (t.redirectConfirmation) {
                                                  e3(null != t.redirectURL);
                                                  return;
                                              }
                                          }
                                          eJ(b.h8.CONFIRM), eX(x.A.COMPLETED), null != er && (await en(er)), null != el && el();
                                      } catch (n) {
                                          eX(x.A.FAIL),
                                              eP(n),
                                              j.default.track(K.rMx.PAYMENT_FLOW_FAILED, {
                                                  ...eG,
                                                  payment_error_code: null == n ? void 0 : n.code,
                                                  payment_gateway: null != e ? (e.type === K.HeQ.CARD ? K.gg$.STRIPE : K.gg$.BRAINTREE) : null,
                                                  payment_source_id: eM,
                                                  duration_ms: Date.now() - ew
                                              });
                                      } finally {
                                          !e6 && eC(!1);
                                      }
                                  },
                                  children: $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
                              })
                            : (0, r.jsx)(f.Tooltip, {
                                  text: $.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                                  children: (e) =>
                                      (0, r.jsx)(f.Button, {
                                          ...e,
                                          color: f.Button.Colors.GREEN,
                                          onClick: () => {
                                              null != e1.current && (e1.current.scrollIntoView({ behavior: 'smooth' }), e2(!0));
                                          },
                                          type: 'submit',
                                          children: $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
                                      })
                              }));
                    break;
                case b.h8.CONFIRM:
                    var nn;
                    let c = k.Z.getGuild(er);
                    e = (0, r.jsx)(H.R7, {
                        guild: c,
                        guildBoostQuantity: eL + eh.length,
                        onClose: eQ,
                        withAnimation: !1,
                        paymentSourceType: null === (nn = eT[null != eM ? eM : '']) || void 0 === nn ? void 0 : nn.type
                    });
            }
            let u = null != eN && null == (0, b.ly)(eN) ? eN : eR;
            n =
                eH === b.h8.ADD_PAYMENT_STEPS
                    ? ne
                    : (0, r.jsx)(y.Z, {
                          hideBreadcrumbs: eH === b.h8.CONFIRM,
                          steps: eW,
                          currentStep: eH,
                          paymentError: u,
                          purchaseErrorBlockRef: eA,
                          hasCurrencies: e4.length > 1,
                          body: e,
                          footer:
                              eH !== b.h8.CONFIRM
                                  ? (0, r.jsxs)(f.ModalFooter, {
                                        direction: P.Z.Direction.HORIZONTAL,
                                        align: P.Z.Align.CENTER,
                                        justify: P.Z.Justify.END,
                                        children: [
                                            null != t
                                                ? (0, r.jsx)('div', {
                                                      className: q.backStep,
                                                      children: (0, r.jsx)(f.Button, {
                                                          color: (0, p.ap)(eE) ? f.Button.Colors.PRIMARY : f.Button.Colors.WHITE,
                                                          look: f.Button.Looks.LINK,
                                                          size: f.Button.Sizes.NONE,
                                                          onClick: () => {
                                                              null != t && eJ(t);
                                                          },
                                                          children: $.Z.Messages.BACK
                                                      })
                                                  })
                                                : null,
                                            (0, r.jsxs)('div', {
                                                className: q.footerRight,
                                                children: [o, l]
                                            })
                                        ]
                                    })
                                  : null
                      });
        }
    } else
        n = (0, r.jsx)('div', {
            className: q.loadingWrapper,
            children: (0, r.jsx)(f.Spinner, {})
        });
    let nt = null;
    return (
        !ed &&
            eH !== b.h8.PREMIUM_UPSELL &&
            (nt = (0, r.jsx)(Y.Z, {
                onClose: eQ,
                currentStep: eH,
                purchaseState: eK
            })),
        (0, r.jsxs)(f.ModalRoot, {
            transitionState: t,
            children: [nt, n]
        })
    );
}
function eo(e) {
    let n = (0, d.e7)([Z.ZP], () => Z.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, g.ZP)(h.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, r.jsx)(g.Gt, {
        value: t,
        children: (0, r.jsx)(C.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, r.jsx)(et, { ...e })
        })
    });
}
