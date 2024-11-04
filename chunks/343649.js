t.r(n),
    t.d(n, {
        GuildBoostPurchaseModal: function () {
            return et;
        },
        default: function () {
            return er;
        }
    }),
    t(47120);
var r,
    o = t(200651),
    i = t(192379),
    l = t(512722),
    a = t.n(l),
    s = t(75124),
    c = t(252759),
    u = t(772848),
    d = t(442837),
    p = t(780384),
    f = t(481060),
    m = t(355467),
    h = t(179360),
    _ = t(723484),
    g = t(330726),
    S = t(100527),
    E = t(906732),
    b = t(15640),
    x = t(89057),
    P = t(600164),
    C = t(232127),
    v = t(598),
    T = t(409813),
    I = t(45572),
    y = t(98278),
    A = t(431369),
    N = t(176919),
    k = t(3409),
    M = t(185139),
    R = t(210887),
    L = t(430824),
    O = t(314884),
    j = t(975060),
    B = t(853872),
    Z = t(509545),
    D = t(78839),
    w = t(626135),
    U = t(267642),
    F = t(74538),
    W = t(212895),
    G = t(296848),
    Y = t(518062),
    H = t(4434),
    V = t(333451),
    X = t(981631),
    z = t(474936),
    K = t(231338),
    q = t(388032),
    $ = t(312094);
(r || (r = {})).PREMIUM = 'discord://app/settings/nitro';
let J = z.Xh.NONE_MONTH,
    Q = [T.h8.PLAN_SELECT, T.h8.REVIEW, T.h8.CONFIRM],
    ee = [T.h8.PLAN_SELECT, T.h8.ADD_PAYMENT_STEPS, T.h8.REVIEW, T.h8.CONFIRM];
async function en(e) {
    await (0, h.X8)();
    let n = (0, U.vx)(O.Z.boostSlots);
    return (0, h.W3)(
        e,
        n.map((e) => e.id)
    );
}
function et(e) {
    let n,
        { transitionState: t, onClose: r, closeGuildPerksModal: l, analyticsLocations: h, analyticsLocation: et, analyticsSourceLocation: er, guildId: eo, onSubscribeComplete: ei, totalNumberOfSlotsToAssign: el = 1, disablePremiumUpsell: ea = !1, onSubscriptionConfirmation: es, applicationId: ec } = e,
        { activeSubscription: eu, blockedPayments: ed } = (0, v.usePaymentContext)(),
        ep = (0, d.e7)([D.ZP], () => D.ZP.hasFetchedSubscriptions()),
        ef = null != eu ? eu.paymentSourceId : null,
        em = (0, d.e7)([Z.Z], () => (null != eu ? (0, G.oE)(eu.planId) : null)),
        eh = (0, d.e7)([Z.Z], () => null == eu || null != Z.Z.get(eu.planId)),
        e_ = (0, d.e7)([Z.Z], () => (null == em ? Z.Z.get(J) : em)),
        eg = (0, d.e7)([R.Z], () => R.Z.theme),
        eS = i.useRef((0, U.vx)(O.Z.boostSlots)).current,
        eE = (0, d.e7)([B.Z], () => B.Z.defaultPaymentSourceId),
        eb = (0, k.fL)(null != ef ? ef : ep ? eE : null),
        { paymentSources: ex, setPurchaseError: eP, paymentSourceId: eC, setIsSubmittingCurrentStep: ev, paymentAuthenticationState: eT, setPaymentSourceId: eI, isSubmittingCurrentStep: ey, paymentError: eA, purchaseError: eN, purchaseErrorBlockRef: ek } = eb,
        eM = Object.keys(ex).length > 0,
        [eR, eL] = i.useState(el - eS.length),
        [eO, ej] = i.useState(!1),
        eB = (0, d.e7)([j.Z], () => j.Z.popupCallbackCalled),
        eZ = (0, b.V)(),
        eD = i.useMemo(
            () =>
                null != eu && eh && eZ
                    ? (0, A.g)(eu, eR)
                    : [
                          {
                              planId: z.Xh.PREMIUM_MONTH_GUILD,
                              quantity: eR
                          }
                      ],
            [eu, eh, eR, eZ]
        ),
        [ew, eU] = (0, s.Z)(() => [(0, u.Z)(), Date.now()]),
        { analyticsLocations: eF } = (0, E.ZP)(h, S.Z.GUILD_BOOST_PURCHASE_MODAL),
        eW = i.useMemo(() => {
            var e, n;
            return {
                load_id: ew,
                payment_type: K.Zu[K.GZ.SUBSCRIPTION],
                sku_id: z.Si.GUILD,
                subscription_type: X.NYc.PREMIUM,
                subscription_plan_id:
                    null !==
                        (n =
                            null ===
                                (e = eD.find((e) => {
                                    let { planId: n } = e;
                                    return z.Z1.has(n);
                                })) || void 0 === e
                                ? void 0
                                : e.planId) && void 0 !== n
                        ? n
                        : z.Xh.PREMIUM_MONTH_GUILD,
                quantity: eR,
                location: et,
                source: er,
                location_stack: eF
            };
        }, [ew, et, eF, er, eD, eR]);
    i.useEffect(() => {
        (0, W.i1)(eC);
    }, [eC]),
        i.useEffect(() => {
            (async () => {
                if (!0 === eB)
                    try {
                        if (null == j.Z.redirectedPaymentId) return;
                        await (0, m.OP)(j.Z.redirectedPaymentId), eJ(T.h8.CONFIRM), ez(I.A.COMPLETED), null != eo && (await en(eo)), null != ei && ei();
                    } catch (e) {
                        ez(I.A.FAIL),
                            eP(e),
                            w.default.track(X.rMx.PAYMENT_FLOW_FAILED, {
                                ...eW,
                                payment_error_code: null == e ? void 0 : e.code,
                                payment_gateway: X.gg$.STRIPE,
                                payment_source_id: eC,
                                duration_ms: Date.now() - eU
                            });
                    } finally {
                        ev(!1), (0, m.K2)();
                    }
            })();
        }, [eB]),
        i.useEffect(() => {
            !D.ZP.hasFetchedSubscriptions() && (0, m.jg)(),
                (0, C.U)({
                    ...eW,
                    guild_id: eo,
                    application_id: ec
                }),
                null != eu &&
                    null != eu.renewalMutations &&
                    w.default.track(X.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: et,
                        guild_id: eo
                    });
        }, []);
    let [eG, eY] = i.useState(Q),
        [eH, eV] = i.useState(T.h8.PLAN_SELECT),
        [eX, ez] = i.useState(I.A.WAITING),
        [eK, eq] = i.useState(!0),
        e$ = (0, c.Z)(() => Date.now(), [eH]),
        eJ = i.useCallback(
            (e, n) => {
                eV(e), eP(null);
                let t = Date.now();
                w.default.track(X.rMx.PAYMENT_FLOW_STEP, {
                    ...eW,
                    from_step: null != n ? n : eH,
                    to_step: e === T.h8.ADD_PAYMENT_STEPS ? T.h8.PAYMENT_TYPE : e,
                    step_duration_ms: t - e$,
                    flow_duration_ms: t - eU,
                    guild_id: eo,
                    application_id: ec
                });
            },
            [eP, eW, eH, e$, eU, eo, ec]
        ),
        eQ = () => {
            r(eX === I.A.COMPLETED);
        },
        e0 = null != eu && eu.isPurchasedExternally;
    i.useEffect(() => {
        eT !== N.wr.PENDING && eH !== T.h8.CONFIRM && null != ef && (eG !== Q && eY(Q), !Q.includes(eH) && eH !== T.h8.PREMIUM_UPSELL && eJ(T.h8.REVIEW)), eH === T.h8.ADD_PAYMENT_STEPS && eG !== ee && eY(ee), e0 && eH !== T.h8.PLAN_SELECT && eV(T.h8.PLAN_SELECT);
    }, [eH, eJ, e0, eT, eu, ef, eG]),
        (0, N.bp)(eH, eT, eJ, ez),
        (0, T.dZ)(eH, eX, ez);
    let e1 = i.useRef(null),
        [e8, e2] = (0, g.Z)(!1, 500),
        [e7, e9] = i.useState(null),
        [e4, e5] = i.useState([]),
        [e3, e6] = i.useState(!1);
    i.useEffect(() => {
        let e;
        if (!!eZ) null != Z.Z.get(z.Xh.PREMIUM_MONTH_GUILD) && e5((e = (0, W.DE)(z.Xh.PREMIUM_MONTH_GUILD, eC, !1))), null == eC && null != eu && null != eu.paymentSourceId ? e9(eu.currency) : null != e && e9(e[0]);
    }, [eC, eu, eZ, JSON.stringify(e4)]);
    let ne = (0, k.vP)({
        paymentModalArgs: eb,
        initialStep: T.h8.PAYMENT_TYPE,
        prependSteps: [T.h8.PLAN_SELECT],
        appendSteps: [T.h8.REVIEW, T.h8.CONFIRM],
        breadcrumpSteps: eG,
        currentBreadcrumpStep: eH,
        onReturn: () => {
            eJ(Object.values(ex).length < 1 ? T.h8.PLAN_SELECT : T.h8.REVIEW, T.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            eJ(T.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                r = Date.now();
            w.default.track(X.rMx.PAYMENT_FLOW_STEP, {
                ...eW,
                from_step: n,
                to_step: t,
                step_duration_ms: r - e$,
                flow_duration_ms: r - eU,
                guild_id: eo
            });
        }
    });
    if (ed) n = (0, o.jsx)(x.Vq, { onClose: eQ });
    else if (ep && eh && eZ && null != e7 && '' !== e7) {
        if (null == eu ? void 0 : eu.isPausedOrPausePending)
            n = (0, o.jsx)(f.ModalContent, {
                children: (0, o.jsx)('p', {
                    className: $.copy,
                    children: q.intl.string(q.t.mOWsFx)
                })
            });
        else if (null != eu && null != eu.renewalMutations)
            n = (0, o.jsx)(f.ModalContent, {
                children: (0, o.jsx)('p', {
                    className: $.copy,
                    children: q.intl.string(q.t.npfhh4)
                })
            });
        else if (eH === T.h8.PREMIUM_UPSELL) {
            a()(null != e_, 'Missing nextPremiumSubscriptionPlan'), a()(e7, 'Currency not defined');
            let e =
                null != eC
                    ? {
                          paymentSourceId: eC,
                          currency: e7
                      }
                    : { currency: e7 };
            n = (0, o.jsx)(V.Z, {
                premiumSubscriptionPlan: e_,
                analyticsLocation: et,
                analyticsSourceLocation: er,
                onClose: eQ,
                onBack: () => eJ(T.h8.PLAN_SELECT),
                onSkip: () => eJ(null != ef || eM ? T.h8.REVIEW : T.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: es,
                priceOptions: e
            });
        } else {
            let e, t, r, i;
            a()(e7, 'Currency not defined');
            let s =
                null != eC
                    ? {
                          paymentSourceId: eC,
                          currency: e7
                      }
                    : { currency: e7 };
            switch (eH) {
                case T.h8.PLAN_SELECT:
                    a()(null != eo, 'Missing guildId'),
                        a()(null != e_, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, o.jsx)(H.CP, {
                            premiumSubscriptionPlan: e_,
                            numGuildBoosts: eR,
                            setNumGuildBoosts: eL,
                            setForceDisableSubmitButton: eq,
                            premiumSubscription: eu,
                            existingAvailableSlots: eS,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = 'discord://app/settings/nitro';
                                    return;
                                }
                                eQ(), null != l && l(), (0, y.z)();
                            },
                            guildId: eo,
                            priceOptions: s
                        })),
                        e0 &&
                            null != eu &&
                            null != eu.paymentGateway &&
                            (e = (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(f.FormErrorBlock, {
                                        className: $.externalErrorBlock,
                                        children: q.intl.format(q.t['/m3Y3t'], { paymentGatewayName: K.Vz[eu.paymentGateway] })
                                    }),
                                    e
                                ]
                            })),
                        (r = (0, o.jsx)(f.Button, {
                            look: f.Button.Looks.LINK,
                            color: (0, p.ap)(eg) ? f.Button.Colors.PRIMARY : f.Button.Colors.WHITE,
                            onClick: eQ,
                            children: q.intl.string(q.t.oEAioK)
                        })),
                        (i = (0, o.jsx)(f.Button, {
                            type: 'submit',
                            disabled: eK || 0 === eR || e0,
                            onClick: () => {
                                if (!ea && (null == em || em.premiumSubscriptionType !== z.p9.TIER_2)) {
                                    eJ(T.h8.PREMIUM_UPSELL);
                                    return;
                                }
                                eJ(null != ef || eM ? T.h8.REVIEW : T.h8.ADD_PAYMENT_STEPS);
                            },
                            children: q.intl.string(q.t['3PatS0'])
                        }));
                    break;
                case T.h8.ADD_PAYMENT_STEPS:
                    break;
                case T.h8.AWAITING_AUTHENTICATION:
                    e = (0, o.jsx)(_.F, { className: $.__invalid_body });
                    break;
                case T.h8.REVIEW:
                    a()(null != e_, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, o.jsx)(H.Gq, {
                            paymentSources: ex,
                            priceOptions: s,
                            currentPremiumSubscription: eu,
                            premiumSubscriptionPaymentSourceId: ef,
                            premiumSubscriptionPlan: e_,
                            newAdditionalPlans: eD,
                            onPaymentSourceChange: (e) => eI(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                eJ(T.h8.ADD_PAYMENT_STEPS), eI(null);
                            },
                            onPurchaseTermsChange: ej,
                            legalTermsNodeRef: e1,
                            hasLegalTermsFlash: e8
                        })),
                        (t = T.h8.PLAN_SELECT),
                        (i = eO
                            ? (0, o.jsx)(f.Button, {
                                  color: f.Button.Colors.GREEN,
                                  type: 'submit',
                                  submitting: ey,
                                  onClick: async () => {
                                      a()(null != eD, 'Missing newAdditionalPlans');
                                      let e = null != eC ? ex[eC] : null;
                                      eP(null);
                                      try {
                                          if (
                                              (ez(I.A.PURCHASING),
                                              ev(!0),
                                              a()(null != eC, 'Missing paymentSourceId'),
                                              w.default.track(X.rMx.PAYMENT_FLOW_COMPLETED, {
                                                  ...eW,
                                                  duration_ms: Date.now() - eU,
                                                  guild_id: eo,
                                                  application_id: ec
                                              }),
                                              e3)
                                          )
                                              return;
                                          if (null == eu || null == em) {
                                              a()(null != e, 'Missing paymentSource');
                                              let n = await (0, m.XW)({
                                                  items: eD,
                                                  paymentSource: e,
                                                  currency: s.currency
                                              });
                                              if (n.redirectConfirmation) {
                                                  e6(null != n.redirectURL);
                                                  return;
                                              }
                                          } else {
                                              let n = { items: (0, F.MY)(eu, eD) };
                                              (n.currency = eu.currency), null == n.currency && (n.currency = s.currency), (n.paymentSource = null != ef ? ex[ef] : void 0), null == n.paymentSource && (a()(null != e, 'Missing paymentSource'), (n.paymentSource = e), (n.currency = s.currency));
                                              let t = await (0, m.Mg)(eu, n, eF);
                                              if (t.redirectConfirmation) {
                                                  e6(null != t.redirectURL);
                                                  return;
                                              }
                                          }
                                          eJ(T.h8.CONFIRM), ez(I.A.COMPLETED), null != eo && (await en(eo)), null != ei && ei();
                                      } catch (n) {
                                          ez(I.A.FAIL),
                                              eP(n),
                                              w.default.track(X.rMx.PAYMENT_FLOW_FAILED, {
                                                  ...eW,
                                                  payment_error_code: null == n ? void 0 : n.code,
                                                  payment_gateway: null != e ? (e.type === X.HeQ.CARD ? X.gg$.STRIPE : X.gg$.BRAINTREE) : null,
                                                  payment_source_id: eC,
                                                  duration_ms: Date.now() - eU
                                              });
                                      } finally {
                                          !e3 && ev(!1);
                                      }
                                  },
                                  children: q.intl.string(q.t.eUEeCg)
                              })
                            : (0, o.jsx)(f.Tooltip, {
                                  text: q.intl.string(q.t.XdvBLS),
                                  children: (e) =>
                                      (0, o.jsx)(f.Button, {
                                          ...e,
                                          color: f.Button.Colors.GREEN,
                                          onClick: () => {
                                              null != e1.current && (e1.current.scrollIntoView({ behavior: 'smooth' }), e2(!0));
                                          },
                                          type: 'submit',
                                          children: q.intl.string(q.t.eUEeCg)
                                      })
                              }));
                    break;
                case T.h8.CONFIRM:
                    var nn;
                    let c = L.Z.getGuild(eo);
                    e = (0, o.jsx)(H.R7, {
                        guild: c,
                        guildBoostQuantity: eR + eS.length,
                        onClose: eQ,
                        withAnimation: !1,
                        paymentSourceType: null === (nn = ex[null != eC ? eC : '']) || void 0 === nn ? void 0 : nn.type
                    });
            }
            let u = null != eA && null == (0, T.ly)(eA) ? eA : eN;
            n =
                eH === T.h8.ADD_PAYMENT_STEPS
                    ? ne
                    : (0, o.jsx)(M.Z, {
                          hideBreadcrumbs: eH === T.h8.CONFIRM,
                          steps: eG,
                          currentStep: eH,
                          paymentError: u,
                          purchaseErrorBlockRef: ek,
                          hasCurrencies: e4.length > 1,
                          body: e,
                          footer:
                              eH !== T.h8.CONFIRM
                                  ? (0, o.jsxs)(f.ModalFooter, {
                                        direction: P.Z.Direction.HORIZONTAL,
                                        align: P.Z.Align.CENTER,
                                        justify: P.Z.Justify.END,
                                        children: [
                                            null != t
                                                ? (0, o.jsx)('div', {
                                                      className: $.backStep,
                                                      children: (0, o.jsx)(f.Button, {
                                                          color: (0, p.ap)(eg) ? f.Button.Colors.PRIMARY : f.Button.Colors.WHITE,
                                                          look: f.Button.Looks.LINK,
                                                          size: f.Button.Sizes.NONE,
                                                          onClick: () => {
                                                              null != t && eJ(t);
                                                          },
                                                          children: q.intl.string(q.t['13/7kZ'])
                                                      })
                                                  })
                                                : null,
                                            (0, o.jsxs)('div', {
                                                className: $.footerRight,
                                                children: [r, i]
                                            })
                                        ]
                                    })
                                  : null
                      });
        }
    } else
        n = (0, o.jsx)('div', {
            className: $.loadingWrapper,
            children: (0, o.jsx)(f.Spinner, {})
        });
    let nt = null;
    return (
        !ed &&
            eH !== T.h8.PREMIUM_UPSELL &&
            (nt = (0, o.jsx)(Y.Z, {
                onClose: eQ,
                currentStep: eH,
                purchaseState: eX
            })),
        (0, o.jsxs)(f.ModalRoot, {
            transitionState: t,
            children: [nt, n]
        })
    );
}
function er(e) {
    let n = (0, d.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, E.ZP)(S.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, o.jsx)(E.Gt, {
        value: t,
        children: (0, o.jsx)(v.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, o.jsx)(et, { ...e })
        })
    });
}
