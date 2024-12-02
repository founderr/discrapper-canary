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
    l = t(200651),
    i = t(192379),
    r = t(512722),
    a = t.n(r),
    s = t(75124),
    c = t(252759),
    u = t(772848),
    d = t(442837),
    p = t(780384),
    f = t(481060),
    m = t(355467),
    _ = t(179360),
    S = t(723484),
    g = t(330726),
    h = t(100527),
    E = t(906732),
    P = t(15640),
    I = t(89057),
    T = t(600164),
    x = t(232127),
    y = t(563132),
    C = t(409813),
    b = t(45572),
    N = t(98278),
    k = t(431369),
    A = t(176919),
    M = t(3409),
    v = t(185139),
    L = t(210887),
    R = t(430824),
    j = t(314884),
    B = t(975060),
    Z = t(853872),
    D = t(509545),
    O = t(78839),
    U = t(626135),
    w = t(267642),
    F = t(74538),
    W = t(212895),
    G = t(296848),
    Y = t(518062),
    H = t(4434),
    V = t(333451),
    z = t(981631),
    X = t(474936),
    K = t(231338),
    $ = t(388032),
    q = t(122959);
(o || (o = {})).PREMIUM = 'discord://app/settings/nitro';
let J = X.Xh.NONE_MONTH,
    Q = [C.h8.PLAN_SELECT, C.h8.REVIEW, C.h8.CONFIRM],
    ee = [C.h8.PLAN_SELECT, C.h8.ADD_PAYMENT_STEPS, C.h8.REVIEW, C.h8.CONFIRM];
async function en(e) {
    await (0, _.X8)();
    let n = (0, w.vx)(j.Z.boostSlots);
    return (0, _.W3)(
        e,
        n.map((e) => e.id)
    );
}
function et(e) {
    let n,
        { transitionState: t, onClose: o, closeGuildPerksModal: r, analyticsLocations: _, analyticsLocation: et, analyticsSourceLocation: eo, guildId: el, onSubscribeComplete: ei, totalNumberOfSlotsToAssign: er = 1, disablePremiumUpsell: ea = !1, onSubscriptionConfirmation: es, applicationId: ec } = e,
        { activeSubscription: eu, blockedPayments: ed } = (0, y.usePaymentContext)(),
        ep = (0, d.e7)([O.ZP], () => O.ZP.hasFetchedSubscriptions()),
        ef = null != eu ? eu.paymentSourceId : null,
        em = (0, d.e7)([D.Z], () => (null != eu ? (0, G.oE)(eu.planId) : null)),
        e_ = (0, d.e7)([D.Z], () => null == eu || null != D.Z.get(eu.planId)),
        eS = (0, d.e7)([D.Z], () => (null == em ? D.Z.get(J) : em)),
        eg = (0, d.e7)([L.Z], () => L.Z.theme),
        eh = i.useRef((0, w.vx)(j.Z.boostSlots)).current,
        eE = (0, d.e7)([Z.Z], () => Z.Z.defaultPaymentSourceId),
        eP = (0, M.fL)(null != ef ? ef : ep ? eE : null),
        { paymentSources: eI, setPurchaseError: eT, paymentSourceId: ex, setIsSubmittingCurrentStep: ey, paymentAuthenticationState: eC, setPaymentSourceId: eb, isSubmittingCurrentStep: eN, paymentError: ek, purchaseError: eA, purchaseErrorBlockRef: eM } = eP,
        ev = Object.keys(eI).length > 0,
        [eL, eR] = i.useState(er - eh.length),
        [ej, eB] = i.useState(!1),
        eZ = (0, d.e7)([B.Z], () => B.Z.popupCallbackCalled),
        eD = (0, P.V)(),
        eO = i.useMemo(
            () =>
                null != eu && e_ && eD
                    ? (0, k.g)(eu, eL)
                    : [
                          {
                              planId: X.Xh.PREMIUM_MONTH_GUILD,
                              quantity: eL
                          }
                      ],
            [eu, e_, eL, eD]
        ),
        [eU, ew] = (0, s.Z)(() => [(0, u.Z)(), Date.now()]),
        { analyticsLocations: eF } = (0, E.ZP)(_, h.Z.GUILD_BOOST_PURCHASE_MODAL),
        eW = i.useMemo(() => {
            var e, n;
            return {
                load_id: eU,
                payment_type: K.Zu[K.GZ.SUBSCRIPTION],
                sku_id: X.Si.GUILD,
                subscription_type: z.NYc.PREMIUM,
                subscription_plan_id:
                    null !==
                        (n =
                            null ===
                                (e = eO.find((e) => {
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
        }, [eU, et, eF, eo, eO, eL]);
    i.useEffect(() => {
        (0, W.i1)(ex);
    }, [ex]),
        i.useEffect(() => {
            (async () => {
                if (!0 === eZ)
                    try {
                        if (null == B.Z.redirectedPaymentId) return;
                        await (0, m.OP)(B.Z.redirectedPaymentId), eJ(C.h8.CONFIRM), eX(b.A.COMPLETED), null != el && (await en(el)), null != ei && ei();
                    } catch (e) {
                        eX(b.A.FAIL),
                            eT(e),
                            U.default.track(z.rMx.PAYMENT_FLOW_FAILED, {
                                ...eW,
                                payment_error_code: null == e ? void 0 : e.code,
                                payment_gateway: z.gg$.STRIPE,
                                payment_source_id: ex,
                                duration_ms: Date.now() - ew
                            });
                    } finally {
                        ey(!1), (0, m.K2)();
                    }
            })();
        }, [eZ]),
        i.useEffect(() => {
            !O.ZP.hasFetchedSubscriptions() && (0, m.jg)(),
                (0, x.U)({
                    ...eW,
                    guild_id: el,
                    application_id: ec
                }),
                null != eu &&
                    null != eu.renewalMutations &&
                    U.default.track(z.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: et,
                        guild_id: el
                    });
        }, []);
    let [eG, eY] = i.useState(Q),
        [eH, eV] = i.useState(C.h8.PLAN_SELECT),
        [ez, eX] = i.useState(b.A.WAITING),
        [eK, e$] = i.useState(!0),
        eq = (0, c.Z)(() => Date.now(), [eH]),
        eJ = i.useCallback(
            (e, n) => {
                eV(e), eT(null);
                let t = Date.now();
                U.default.track(z.rMx.PAYMENT_FLOW_STEP, {
                    ...eW,
                    from_step: null != n ? n : eH,
                    to_step: e === C.h8.ADD_PAYMENT_STEPS ? C.h8.PAYMENT_TYPE : e,
                    step_duration_ms: t - eq,
                    flow_duration_ms: t - ew,
                    guild_id: el,
                    application_id: ec
                });
            },
            [eT, eW, eH, eq, ew, el, ec]
        ),
        eQ = () => {
            o(ez === b.A.COMPLETED);
        },
        e0 = null != eu && eu.isPurchasedExternally;
    i.useEffect(() => {
        eC !== A.wr.PENDING && eH !== C.h8.CONFIRM && null != ef && (eG !== Q && eY(Q), !Q.includes(eH) && eH !== C.h8.PREMIUM_UPSELL && eJ(C.h8.REVIEW)), eH === C.h8.ADD_PAYMENT_STEPS && eG !== ee && eY(ee), e0 && eH !== C.h8.PLAN_SELECT && eV(C.h8.PLAN_SELECT);
    }, [eH, eJ, e0, eC, eu, ef, eG]),
        (0, A.bp)(eH, eC, eJ, eX),
        (0, C.dZ)(eH, ez, eX);
    let e8 = i.useRef(null),
        [e2, e1] = (0, g.Z)(!1, 500),
        [e7, e9] = i.useState(null),
        [e3, e5] = i.useState([]),
        [e6, e4] = i.useState(!1);
    i.useEffect(() => {
        let e;
        if (!!eD) null != D.Z.get(X.Xh.PREMIUM_MONTH_GUILD) && e5((e = (0, W.DE)(X.Xh.PREMIUM_MONTH_GUILD, ex, !1))), null == ex && null != eu && null != eu.paymentSourceId ? e9(eu.currency) : null != e && e9(e[0]);
    }, [ex, eu, eD, JSON.stringify(e3)]);
    let ne = (0, M.vP)({
        paymentModalArgs: eP,
        initialStep: C.h8.PAYMENT_TYPE,
        prependSteps: [C.h8.PLAN_SELECT],
        appendSteps: [C.h8.REVIEW, C.h8.CONFIRM],
        breadcrumpSteps: eG,
        currentBreadcrumpStep: eH,
        onReturn: () => {
            eJ(Object.values(eI).length < 1 ? C.h8.PLAN_SELECT : C.h8.REVIEW, C.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            eJ(C.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                o = Date.now();
            U.default.track(z.rMx.PAYMENT_FLOW_STEP, {
                ...eW,
                from_step: n,
                to_step: t,
                step_duration_ms: o - eq,
                flow_duration_ms: o - ew,
                guild_id: el
            });
        }
    });
    if (ed) n = (0, l.jsx)(I.Vq, { onClose: eQ });
    else if (ep && e_ && eD && null != e7 && '' !== e7) {
        if (null == eu ? void 0 : eu.isPausedOrPausePending)
            n = (0, l.jsx)(f.ModalContent, {
                children: (0, l.jsx)('p', {
                    className: q.copy,
                    children: $.intl.string($.t.mOWsFx)
                })
            });
        else if (null != eu && null != eu.renewalMutations)
            n = (0, l.jsx)(f.ModalContent, {
                children: (0, l.jsx)('p', {
                    className: q.copy,
                    children: $.intl.string($.t.npfhh4)
                })
            });
        else if (eH === C.h8.PREMIUM_UPSELL) {
            a()(null != eS, 'Missing nextPremiumSubscriptionPlan'), a()(e7, 'Currency not defined');
            let e =
                null != ex
                    ? {
                          paymentSourceId: ex,
                          currency: e7
                      }
                    : { currency: e7 };
            n = (0, l.jsx)(V.Z, {
                premiumSubscriptionPlan: eS,
                analyticsLocation: et,
                analyticsSourceLocation: eo,
                onClose: eQ,
                onBack: () => eJ(C.h8.PLAN_SELECT),
                onSkip: () => eJ(null != ef || ev ? C.h8.REVIEW : C.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: es,
                priceOptions: e
            });
        } else {
            let e, t, o, i;
            a()(e7, 'Currency not defined');
            let s =
                null != ex
                    ? {
                          paymentSourceId: ex,
                          currency: e7
                      }
                    : { currency: e7 };
            switch (eH) {
                case C.h8.PLAN_SELECT:
                    a()(null != el, 'Missing guildId'),
                        a()(null != eS, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, l.jsx)(H.CP, {
                            premiumSubscriptionPlan: eS,
                            numGuildBoosts: eL,
                            setNumGuildBoosts: eR,
                            setForceDisableSubmitButton: e$,
                            premiumSubscription: eu,
                            existingAvailableSlots: eh,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = 'discord://app/settings/nitro';
                                    return;
                                }
                                eQ(), null != r && r(), (0, N.z)();
                            },
                            guildId: el,
                            priceOptions: s
                        })),
                        e0 &&
                            null != eu &&
                            null != eu.paymentGateway &&
                            (e = (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(f.FormErrorBlock, {
                                        className: q.externalErrorBlock,
                                        children: $.intl.format($.t['/m3Y3t'], { paymentGatewayName: K.Vz[eu.paymentGateway] })
                                    }),
                                    e
                                ]
                            })),
                        (o = (0, l.jsx)(f.Button, {
                            look: f.Button.Looks.LINK,
                            color: (0, p.ap)(eg) ? f.Button.Colors.PRIMARY : f.Button.Colors.WHITE,
                            onClick: eQ,
                            children: $.intl.string($.t.oEAioK)
                        })),
                        (i = (0, l.jsx)(f.Button, {
                            type: 'submit',
                            disabled: eK || 0 === eL || e0,
                            onClick: () => {
                                if (!ea && (null == em || em.premiumSubscriptionType !== X.p9.TIER_2)) {
                                    eJ(C.h8.PREMIUM_UPSELL);
                                    return;
                                }
                                eJ(null != ef || ev ? C.h8.REVIEW : C.h8.ADD_PAYMENT_STEPS);
                            },
                            children: $.intl.string($.t['3PatS0'])
                        }));
                    break;
                case C.h8.ADD_PAYMENT_STEPS:
                    break;
                case C.h8.AWAITING_AUTHENTICATION:
                    e = (0, l.jsx)(S.F, { className: q.__invalid_body });
                    break;
                case C.h8.REVIEW:
                    a()(null != eS, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, l.jsx)(H.Gq, {
                            paymentSources: eI,
                            priceOptions: s,
                            currentPremiumSubscription: eu,
                            premiumSubscriptionPaymentSourceId: ef,
                            premiumSubscriptionPlan: eS,
                            newAdditionalPlans: eO,
                            onPaymentSourceChange: (e) => eb(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                eJ(C.h8.ADD_PAYMENT_STEPS), eb(null);
                            },
                            onPurchaseTermsChange: eB,
                            legalTermsNodeRef: e8,
                            hasLegalTermsFlash: e2
                        })),
                        (t = C.h8.PLAN_SELECT),
                        (i = ej
                            ? (0, l.jsx)(f.Button, {
                                  color: f.Button.Colors.GREEN,
                                  type: 'submit',
                                  submitting: eN,
                                  onClick: async () => {
                                      a()(null != eO, 'Missing newAdditionalPlans');
                                      let e = null != ex ? eI[ex] : null;
                                      eT(null);
                                      try {
                                          if (
                                              (eX(b.A.PURCHASING),
                                              ey(!0),
                                              a()(null != ex, 'Missing paymentSourceId'),
                                              U.default.track(z.rMx.PAYMENT_FLOW_COMPLETED, {
                                                  ...eW,
                                                  duration_ms: Date.now() - ew,
                                                  guild_id: el,
                                                  application_id: ec
                                              }),
                                              e6)
                                          )
                                              return;
                                          if (null == eu || null == em) {
                                              a()(null != e, 'Missing paymentSource');
                                              let n = await (0, m.XW)({
                                                  items: eO,
                                                  paymentSource: e,
                                                  currency: s.currency
                                              });
                                              if (n.redirectConfirmation) {
                                                  e4(null != n.redirectURL);
                                                  return;
                                              }
                                          } else {
                                              let n = { items: (0, F.MY)(eu, eO) };
                                              (n.currency = eu.currency), null == n.currency && (n.currency = s.currency), (n.paymentSource = null != ef ? eI[ef] : void 0), null == n.paymentSource && (a()(null != e, 'Missing paymentSource'), (n.paymentSource = e), (n.currency = s.currency));
                                              let t = await (0, m.Mg)(eu, n, eF);
                                              if (t.redirectConfirmation) {
                                                  e4(null != t.redirectURL);
                                                  return;
                                              }
                                          }
                                          eJ(C.h8.CONFIRM), eX(b.A.COMPLETED), null != el && (await en(el)), null != ei && ei();
                                      } catch (n) {
                                          eX(b.A.FAIL),
                                              eT(n),
                                              U.default.track(z.rMx.PAYMENT_FLOW_FAILED, {
                                                  ...eW,
                                                  payment_error_code: null == n ? void 0 : n.code,
                                                  payment_gateway: null != e ? (e.type === z.HeQ.CARD ? z.gg$.STRIPE : z.gg$.BRAINTREE) : null,
                                                  payment_source_id: ex,
                                                  duration_ms: Date.now() - ew
                                              });
                                      } finally {
                                          !e6 && ey(!1);
                                      }
                                  },
                                  children: $.intl.string($.t.eUEeCg)
                              })
                            : (0, l.jsx)(f.Tooltip, {
                                  text: $.intl.string($.t.XdvBLS),
                                  children: (e) =>
                                      (0, l.jsx)(f.Button, {
                                          ...e,
                                          color: f.Button.Colors.GREEN,
                                          onClick: () => {
                                              null != e8.current && (e8.current.scrollIntoView({ behavior: 'smooth' }), e1(!0));
                                          },
                                          type: 'submit',
                                          children: $.intl.string($.t.eUEeCg)
                                      })
                              }));
                    break;
                case C.h8.CONFIRM:
                    var nn;
                    let c = R.Z.getGuild(el);
                    e = (0, l.jsx)(H.R7, {
                        guild: c,
                        guildBoostQuantity: eL + eh.length,
                        onClose: eQ,
                        withAnimation: !1,
                        paymentSourceType: null === (nn = eI[null != ex ? ex : '']) || void 0 === nn ? void 0 : nn.type
                    });
            }
            let u = null != ek && null == (0, C.ly)(ek) ? ek : eA;
            n =
                eH === C.h8.ADD_PAYMENT_STEPS
                    ? ne
                    : (0, l.jsx)(v.Z, {
                          hideBreadcrumbs: eH === C.h8.CONFIRM,
                          steps: eG,
                          currentStep: eH,
                          paymentError: u,
                          purchaseErrorBlockRef: eM,
                          hasCurrencies: e3.length > 1,
                          body: e,
                          footer:
                              eH !== C.h8.CONFIRM
                                  ? (0, l.jsxs)(f.ModalFooter, {
                                        direction: T.Z.Direction.HORIZONTAL,
                                        align: T.Z.Align.CENTER,
                                        justify: T.Z.Justify.END,
                                        children: [
                                            null != t
                                                ? (0, l.jsx)('div', {
                                                      className: q.backStep,
                                                      children: (0, l.jsx)(f.Button, {
                                                          color: (0, p.ap)(eg) ? f.Button.Colors.PRIMARY : f.Button.Colors.WHITE,
                                                          look: f.Button.Looks.LINK,
                                                          size: f.Button.Sizes.NONE,
                                                          onClick: () => {
                                                              null != t && eJ(t);
                                                          },
                                                          children: $.intl.string($.t['13/7kZ'])
                                                      })
                                                  })
                                                : null,
                                            (0, l.jsxs)('div', {
                                                className: q.footerRight,
                                                children: [o, i]
                                            })
                                        ]
                                    })
                                  : null
                      });
        }
    } else
        n = (0, l.jsx)('div', {
            className: q.loadingWrapper,
            children: (0, l.jsx)(f.Spinner, {})
        });
    let nt = null;
    return (
        !ed &&
            eH !== C.h8.PREMIUM_UPSELL &&
            (nt = (0, l.jsx)(Y.Z, {
                onClose: eQ,
                currentStep: eH,
                purchaseState: ez
            })),
        (0, l.jsxs)(f.ModalRoot, {
            transitionState: t,
            children: [nt, n]
        })
    );
}
function eo(e) {
    let n = (0, d.e7)([O.ZP], () => O.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, E.ZP)(h.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, l.jsx)(E.Gt, {
        value: t,
        children: (0, l.jsx)(y.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(et, { ...e })
        })
    });
}
