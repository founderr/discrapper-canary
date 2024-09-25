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
    r = t(735250),
    a = t(470079),
    i = t(512722),
    c = t.n(i),
    l = t(77866),
    s = t(792986),
    d = t(772848),
    u = t(442837),
    p = t(780384),
    _ = t(481060),
    f = t(355467),
    m = t(179360),
    g = t(723484),
    h = t(330726),
    b = t(100527),
    S = t(906732),
    I = t(15640),
    E = t(89057),
    P = t(600164),
    T = t(232127),
    x = t(598),
    M = t(409813),
    y = t(45572),
    v = t(98278),
    N = t(431369),
    C = t(176919),
    R = t(3409),
    A = t(185139),
    L = t(210887),
    k = t(430824),
    O = t(314884),
    w = t(975060),
    U = t(853872),
    D = t(509545),
    B = t(78839),
    Z = t(626135),
    j = t(267642),
    W = t(74538),
    F = t(212895),
    G = t(296848),
    H = t(518062),
    Y = t(4434),
    V = t(333451),
    K = t(981631),
    q = t(474936),
    X = t(231338),
    z = t(689938),
    $ = t(312094);
(o || (o = {})).PREMIUM = 'discord://app/settings/nitro';
let J = q.Xh.NONE_MONTH,
    Q = [M.h8.PLAN_SELECT, M.h8.REVIEW, M.h8.CONFIRM],
    ee = [M.h8.PLAN_SELECT, M.h8.ADD_PAYMENT_STEPS, M.h8.REVIEW, M.h8.CONFIRM];
async function en(e) {
    await (0, m.X8)();
    let n = (0, j.vx)(O.Z.boostSlots);
    return (0, m.W3)(
        e,
        n.map((e) => e.id)
    );
}
function et(e) {
    let n,
        { transitionState: t, onClose: o, closeGuildPerksModal: i, analyticsLocations: m, analyticsLocation: et, analyticsSourceLocation: eo, guildId: er, onSubscribeComplete: ea, totalNumberOfSlotsToAssign: ei = 1, disablePremiumUpsell: ec = !1, onSubscriptionConfirmation: el, applicationId: es } = e,
        { activeSubscription: ed, blockedPayments: eu } = (0, x.usePaymentContext)(),
        ep = (0, u.e7)([B.ZP], () => B.ZP.hasFetchedSubscriptions()),
        e_ = null != ed ? ed.paymentSourceId : null,
        ef = (0, u.e7)([D.Z], () => (null != ed ? (0, G.oE)(ed.planId) : null)),
        em = (0, u.e7)([D.Z], () => null == ed || null != D.Z.get(ed.planId)),
        eg = (0, u.e7)([D.Z], () => (null == ef ? D.Z.get(J) : ef)),
        eh = (0, u.e7)([L.Z], () => L.Z.theme),
        eb = a.useRef((0, j.vx)(O.Z.boostSlots)).current,
        eS = (0, u.e7)([U.Z], () => U.Z.defaultPaymentSourceId),
        eI = (0, R.fL)(null != e_ ? e_ : ep ? eS : null),
        { paymentSources: eE, setPurchaseError: eP, paymentSourceId: eT, setIsSubmittingCurrentStep: ex, paymentAuthenticationState: eM, setPaymentSourceId: ey, isSubmittingCurrentStep: ev, paymentError: eN, purchaseError: eC, purchaseErrorBlockRef: eR } = eI,
        eA = Object.keys(eE).length > 0,
        [eL, ek] = a.useState(ei - eb.length),
        [eO, ew] = a.useState(!1),
        eU = (0, u.e7)([w.Z], () => w.Z.popupCallbackCalled),
        eD = (0, I.V)(),
        eB = a.useMemo(
            () =>
                null != ed && em && eD
                    ? (0, N.g)(ed, eL)
                    : [
                          {
                              planId: q.Xh.PREMIUM_MONTH_GUILD,
                              quantity: eL
                          }
                      ],
            [ed, em, eL, eD]
        ),
        [eZ, ej] = (0, l.Z)(() => [(0, d.Z)(), Date.now()]),
        { analyticsLocations: eW } = (0, S.ZP)(m, b.Z.GUILD_BOOST_PURCHASE_MODAL),
        eF = a.useMemo(() => {
            var e, n;
            return {
                load_id: eZ,
                payment_type: X.Zu[X.GZ.SUBSCRIPTION],
                sku_id: q.Si.GUILD,
                subscription_type: K.NYc.PREMIUM,
                subscription_plan_id:
                    null !==
                        (n =
                            null ===
                                (e = eB.find((e) => {
                                    let { planId: n } = e;
                                    return q.Z1.has(n);
                                })) || void 0 === e
                                ? void 0
                                : e.planId) && void 0 !== n
                        ? n
                        : q.Xh.PREMIUM_MONTH_GUILD,
                quantity: eL,
                location: et,
                source: eo,
                location_stack: eW
            };
        }, [eZ, et, eW, eo, eB, eL]);
    a.useEffect(() => {
        (0, F.i1)(eT);
    }, [eT]),
        a.useEffect(() => {
            (async () => {
                if (!0 === eU)
                    try {
                        if (null == w.Z.redirectedPaymentId) return;
                        await (0, f.OP)(w.Z.redirectedPaymentId), eJ(M.h8.CONFIRM), eq(y.A.COMPLETED), null != er && (await en(er)), null != ea && ea();
                    } catch (e) {
                        eq(y.A.FAIL),
                            eP(e),
                            Z.default.track(K.rMx.PAYMENT_FLOW_FAILED, {
                                ...eF,
                                payment_error_code: null == e ? void 0 : e.code,
                                payment_gateway: K.gg$.STRIPE,
                                payment_source_id: eT,
                                duration_ms: Date.now() - ej
                            });
                    } finally {
                        ex(!1), (0, f.K2)();
                    }
            })();
        }, [eU]),
        a.useEffect(() => {
            !B.ZP.hasFetchedSubscriptions() && (0, f.jg)(),
                (0, T.U)({
                    ...eF,
                    guild_id: er,
                    application_id: es
                }),
                null != ed &&
                    null != ed.renewalMutations &&
                    Z.default.track(K.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: et,
                        guild_id: er
                    });
        }, []);
    let [eG, eH] = a.useState(Q),
        [eY, eV] = a.useState(M.h8.PLAN_SELECT),
        [eK, eq] = a.useState(y.A.WAITING),
        [eX, ez] = a.useState(!0),
        e$ = (0, s.Z)(() => Date.now(), [eY]),
        eJ = a.useCallback(
            (e, n) => {
                eV(e), eP(null);
                let t = Date.now();
                Z.default.track(K.rMx.PAYMENT_FLOW_STEP, {
                    ...eF,
                    from_step: null != n ? n : eY,
                    to_step: e === M.h8.ADD_PAYMENT_STEPS ? M.h8.PAYMENT_TYPE : e,
                    step_duration_ms: t - e$,
                    flow_duration_ms: t - ej,
                    guild_id: er,
                    application_id: es
                });
            },
            [eP, eF, eY, e$, ej, er, es]
        ),
        eQ = () => {
            o(eK === y.A.COMPLETED);
        },
        e0 = null != ed && ed.isPurchasedExternally;
    a.useEffect(() => {
        eM !== C.wr.PENDING && eY !== M.h8.CONFIRM && null != e_ && (eG !== Q && eH(Q), !Q.includes(eY) && eY !== M.h8.PREMIUM_UPSELL && eJ(M.h8.REVIEW)), eY === M.h8.ADD_PAYMENT_STEPS && eG !== ee && eH(ee), e0 && eY !== M.h8.PLAN_SELECT && eV(M.h8.PLAN_SELECT);
    }, [eY, eJ, e0, eM, ed, e_, eG]),
        (0, C.bp)(eY, eM, eJ, eq),
        (0, M.dZ)(eY, eK, eq);
    let e1 = a.useRef(null),
        [e7, e8] = (0, h.Z)(!1, 500),
        [e2, e4] = a.useState(null),
        [e6, e3] = a.useState([]),
        [e5, e9] = a.useState(!1);
    a.useEffect(() => {
        let e;
        if (!!eD) null != D.Z.get(q.Xh.PREMIUM_MONTH_GUILD) && e3((e = (0, F.DE)(q.Xh.PREMIUM_MONTH_GUILD, eT, !1))), null == eT && null != ed && null != ed.paymentSourceId ? e4(ed.currency) : null != e && e4(e[0]);
    }, [eT, ed, eD, JSON.stringify(e6)]);
    let ne = (0, R.vP)({
        paymentModalArgs: eI,
        initialStep: M.h8.PAYMENT_TYPE,
        prependSteps: [M.h8.PLAN_SELECT],
        appendSteps: [M.h8.REVIEW, M.h8.CONFIRM],
        breadcrumpSteps: eG,
        currentBreadcrumpStep: eY,
        onReturn: () => {
            eJ(Object.values(eE).length < 1 ? M.h8.PLAN_SELECT : M.h8.REVIEW, M.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            eJ(M.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                o = Date.now();
            Z.default.track(K.rMx.PAYMENT_FLOW_STEP, {
                ...eF,
                from_step: n,
                to_step: t,
                step_duration_ms: o - e$,
                flow_duration_ms: o - ej,
                guild_id: er
            });
        }
    });
    if (eu) n = (0, r.jsx)(E.Vq, { onClose: eQ });
    else if (ep && em && eD && null != e2 && '' !== e2) {
        if (null == ed ? void 0 : ed.isPausedOrPausePending)
            n = (0, r.jsx)(_.ModalContent, {
                children: (0, r.jsx)('p', {
                    className: $.copy,
                    children: z.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION
                })
            });
        else if (null != ed && null != ed.renewalMutations)
            n = (0, r.jsx)(_.ModalContent, {
                children: (0, r.jsx)('p', {
                    className: $.copy,
                    children: z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_PENDING_MUTATION
                })
            });
        else if (eY === M.h8.PREMIUM_UPSELL) {
            c()(null != eg, 'Missing nextPremiumSubscriptionPlan'), c()(e2, 'Currency not defined');
            let e =
                null != eT
                    ? {
                          paymentSourceId: eT,
                          currency: e2
                      }
                    : { currency: e2 };
            n = (0, r.jsx)(V.Z, {
                premiumSubscriptionPlan: eg,
                analyticsLocation: et,
                analyticsSourceLocation: eo,
                onClose: eQ,
                onBack: () => eJ(M.h8.PLAN_SELECT),
                onSkip: () => eJ(null != e_ || eA ? M.h8.REVIEW : M.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: el,
                priceOptions: e
            });
        } else {
            let e, t, o, a;
            c()(e2, 'Currency not defined');
            let l =
                null != eT
                    ? {
                          paymentSourceId: eT,
                          currency: e2
                      }
                    : { currency: e2 };
            switch (eY) {
                case M.h8.PLAN_SELECT:
                    c()(null != er, 'Missing guildId'),
                        c()(null != eg, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, r.jsx)(Y.CP, {
                            premiumSubscriptionPlan: eg,
                            numGuildBoosts: eL,
                            setNumGuildBoosts: ek,
                            setForceDisableSubmitButton: ez,
                            premiumSubscription: ed,
                            existingAvailableSlots: eb,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = 'discord://app/settings/nitro';
                                    return;
                                }
                                eQ(), null != i && i(), (0, v.z)();
                            },
                            guildId: er,
                            priceOptions: l
                        })),
                        e0 &&
                            null != ed &&
                            null != ed.paymentGateway &&
                            (e = (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(_.FormErrorBlock, {
                                        className: $.externalErrorBlock,
                                        children: z.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_EXTERNAL.format({ paymentGatewayName: X.Vz[ed.paymentGateway] })
                                    }),
                                    e
                                ]
                            })),
                        (o = (0, r.jsx)(_.Button, {
                            look: _.Button.Looks.LINK,
                            color: (0, p.ap)(eh) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
                            onClick: eQ,
                            children: z.Z.Messages.NEVERMIND
                        })),
                        (a = (0, r.jsx)(_.Button, {
                            type: 'submit',
                            disabled: eX || 0 === eL || e0,
                            onClick: () => {
                                if (!ec && (null == ef || ef.premiumSubscriptionType !== q.p9.TIER_2)) {
                                    eJ(M.h8.PREMIUM_UPSELL);
                                    return;
                                }
                                eJ(null != e_ || eA ? M.h8.REVIEW : M.h8.ADD_PAYMENT_STEPS);
                            },
                            children: z.Z.Messages.CONTINUE
                        }));
                    break;
                case M.h8.ADD_PAYMENT_STEPS:
                    break;
                case M.h8.AWAITING_AUTHENTICATION:
                    e = (0, r.jsx)(g.F, { className: $.__invalid_body });
                    break;
                case M.h8.REVIEW:
                    c()(null != eg, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, r.jsx)(Y.Gq, {
                            paymentSources: eE,
                            priceOptions: l,
                            currentPremiumSubscription: ed,
                            premiumSubscriptionPaymentSourceId: e_,
                            premiumSubscriptionPlan: eg,
                            newAdditionalPlans: eB,
                            onPaymentSourceChange: (e) => ey(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                eJ(M.h8.ADD_PAYMENT_STEPS), ey(null);
                            },
                            onPurchaseTermsChange: ew,
                            legalTermsNodeRef: e1,
                            hasLegalTermsFlash: e7
                        })),
                        (t = M.h8.PLAN_SELECT),
                        (a = eO
                            ? (0, r.jsx)(_.Button, {
                                  color: _.Button.Colors.GREEN,
                                  type: 'submit',
                                  submitting: ev,
                                  onClick: async () => {
                                      c()(null != eB, 'Missing newAdditionalPlans');
                                      let e = null != eT ? eE[eT] : null;
                                      eP(null);
                                      try {
                                          if (
                                              (eq(y.A.PURCHASING),
                                              ex(!0),
                                              c()(null != eT, 'Missing paymentSourceId'),
                                              Z.default.track(K.rMx.PAYMENT_FLOW_COMPLETED, {
                                                  ...eF,
                                                  duration_ms: Date.now() - ej,
                                                  guild_id: er,
                                                  application_id: es
                                              }),
                                              e5)
                                          )
                                              return;
                                          if (null == ed || null == ef) {
                                              c()(null != e, 'Missing paymentSource');
                                              let n = await (0, f.XW)({
                                                  items: eB,
                                                  paymentSource: e,
                                                  currency: l.currency
                                              });
                                              if (n.redirectConfirmation) {
                                                  e9(null != n.redirectURL);
                                                  return;
                                              }
                                          } else {
                                              let n = { items: (0, W.MY)(ed, eB) };
                                              (n.currency = ed.currency), null == n.currency && (n.currency = l.currency), (n.paymentSource = null != e_ ? eE[e_] : void 0), null == n.paymentSource && (c()(null != e, 'Missing paymentSource'), (n.paymentSource = e), (n.currency = l.currency));
                                              let t = await (0, f.Mg)(ed, n, eW);
                                              if (t.redirectConfirmation) {
                                                  e9(null != t.redirectURL);
                                                  return;
                                              }
                                          }
                                          eJ(M.h8.CONFIRM), eq(y.A.COMPLETED), null != er && (await en(er)), null != ea && ea();
                                      } catch (n) {
                                          eq(y.A.FAIL),
                                              eP(n),
                                              Z.default.track(K.rMx.PAYMENT_FLOW_FAILED, {
                                                  ...eF,
                                                  payment_error_code: null == n ? void 0 : n.code,
                                                  payment_gateway: null != e ? (e.type === K.HeQ.CARD ? K.gg$.STRIPE : K.gg$.BRAINTREE) : null,
                                                  payment_source_id: eT,
                                                  duration_ms: Date.now() - ej
                                              });
                                      } finally {
                                          !e5 && ex(!1);
                                      }
                                  },
                                  children: z.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
                              })
                            : (0, r.jsx)(_.Tooltip, {
                                  text: z.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                                  children: (e) =>
                                      (0, r.jsx)(_.Button, {
                                          ...e,
                                          color: _.Button.Colors.GREEN,
                                          onClick: () => {
                                              null != e1.current && (e1.current.scrollIntoView({ behavior: 'smooth' }), e8(!0));
                                          },
                                          type: 'submit',
                                          children: z.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
                                      })
                              }));
                    break;
                case M.h8.CONFIRM:
                    var nn;
                    let s = k.Z.getGuild(er);
                    e = (0, r.jsx)(Y.R7, {
                        guild: s,
                        guildBoostQuantity: eL + eb.length,
                        onClose: eQ,
                        withAnimation: !1,
                        paymentSourceType: null === (nn = eE[null != eT ? eT : '']) || void 0 === nn ? void 0 : nn.type
                    });
            }
            let d = null != eN && null == (0, M.ly)(eN) ? eN : eC;
            n =
                eY === M.h8.ADD_PAYMENT_STEPS
                    ? ne
                    : (0, r.jsx)(A.Z, {
                          hideBreadcrumbs: eY === M.h8.CONFIRM,
                          steps: eG,
                          currentStep: eY,
                          paymentError: d,
                          purchaseErrorBlockRef: eR,
                          hasCurrencies: e6.length > 1,
                          body: e,
                          footer:
                              eY !== M.h8.CONFIRM
                                  ? (0, r.jsxs)(_.ModalFooter, {
                                        direction: P.Z.Direction.HORIZONTAL,
                                        align: P.Z.Align.CENTER,
                                        justify: P.Z.Justify.END,
                                        children: [
                                            null != t
                                                ? (0, r.jsx)('div', {
                                                      className: $.backStep,
                                                      children: (0, r.jsx)(_.Button, {
                                                          color: (0, p.ap)(eh) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
                                                          look: _.Button.Looks.LINK,
                                                          size: _.Button.Sizes.NONE,
                                                          onClick: () => {
                                                              null != t && eJ(t);
                                                          },
                                                          children: z.Z.Messages.BACK
                                                      })
                                                  })
                                                : null,
                                            (0, r.jsxs)('div', {
                                                className: $.footerRight,
                                                children: [o, a]
                                            })
                                        ]
                                    })
                                  : null
                      });
        }
    } else
        n = (0, r.jsx)('div', {
            className: $.loadingWrapper,
            children: (0, r.jsx)(_.Spinner, {})
        });
    let nt = null;
    return (
        !eu &&
            eY !== M.h8.PREMIUM_UPSELL &&
            (nt = (0, r.jsx)(H.Z, {
                onClose: eQ,
                currentStep: eY,
                purchaseState: eK
            })),
        (0, r.jsxs)(_.ModalRoot, {
            transitionState: t,
            children: [nt, n]
        })
    );
}
function eo(e) {
    let n = (0, u.e7)([B.ZP], () => B.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, S.ZP)(b.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, r.jsx)(S.Gt, {
        value: t,
        children: (0, r.jsx)(x.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, r.jsx)(et, { ...e })
        })
    });
}
