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
    u = t(252759),
    c = t(772848),
    d = t(442837),
    p = t(780384),
    f = t(481060),
    m = t(355467),
    _ = t(179360),
    S = t(723484),
    E = t(330726),
    h = t(100527),
    g = t(906732),
    P = t(15640),
    T = t(89057),
    I = t(600164),
    x = t(232127),
    C = t(563132),
    b = t(409813),
    N = t(45572),
    y = t(98278),
    A = t(431369),
    k = t(176919),
    M = t(3409),
    v = t(185139),
    R = t(210887),
    L = t(430824),
    j = t(314884),
    B = t(975060),
    Z = t(853872),
    O = t(509545),
    D = t(78839),
    U = t(626135),
    w = t(267642),
    F = t(74538),
    W = t(212895),
    G = t(296848),
    Y = t(518062),
    H = t(4434),
    V = t(333451),
    X = t(981631),
    z = t(474936),
    K = t(231338),
    $ = t(388032),
    q = t(122959);
(o || (o = {})).PREMIUM = 'discord://app/settings/nitro';
let J = z.Xh.NONE_MONTH,
    Q = [b.h8.PLAN_SELECT, b.h8.REVIEW, b.h8.CONFIRM],
    ee = [b.h8.PLAN_SELECT, b.h8.ADD_PAYMENT_STEPS, b.h8.REVIEW, b.h8.CONFIRM];
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
        { transitionState: t, onClose: o, closeGuildPerksModal: r, analyticsLocations: _, analyticsLocation: et, analyticsSourceLocation: eo, guildId: el, onSubscribeComplete: ei, totalNumberOfSlotsToAssign: er = 1, disablePremiumUpsell: ea = !1, onSubscriptionConfirmation: es, applicationId: eu } = e,
        { activeSubscription: ec, blockedPayments: ed } = (0, C.usePaymentContext)(),
        ep = (0, d.e7)([D.ZP], () => D.ZP.hasFetchedSubscriptions()),
        ef = null != ec ? ec.paymentSourceId : null,
        em = (0, d.e7)([O.Z], () => (null != ec ? (0, G.oE)(ec.planId) : null)),
        e_ = (0, d.e7)([O.Z], () => null == ec || null != O.Z.get(ec.planId)),
        eS = (0, d.e7)([O.Z], () => (null == em ? O.Z.get(J) : em)),
        eE = (0, d.e7)([R.Z], () => R.Z.theme),
        eh = i.useRef((0, w.vx)(j.Z.boostSlots)).current,
        eg = (0, d.e7)([Z.Z], () => Z.Z.defaultPaymentSourceId),
        eP = (0, M.fL)(null != ef ? ef : ep ? eg : null),
        { paymentSources: eT, setPurchaseError: eI, paymentSourceId: ex, setIsSubmittingCurrentStep: eC, paymentAuthenticationState: eb, setPaymentSourceId: eN, isSubmittingCurrentStep: ey, paymentError: eA, purchaseError: ek, purchaseErrorBlockRef: eM } = eP,
        ev = Object.keys(eT).length > 0,
        [eR, eL] = i.useState(er - eh.length),
        [ej, eB] = i.useState(!1),
        eZ = (0, d.e7)([B.Z], () => B.Z.popupCallbackCalled),
        eO = (0, P.V)(),
        eD = i.useMemo(
            () =>
                null != ec && e_ && eO
                    ? (0, A.g)(ec, eR)
                    : [
                          {
                              planId: z.Xh.PREMIUM_MONTH_GUILD,
                              quantity: eR
                          }
                      ],
            [ec, e_, eR, eO]
        ),
        [eU, ew] = (0, s.Z)(() => [(0, c.Z)(), Date.now()]),
        { analyticsLocations: eF } = (0, g.ZP)(_, h.Z.GUILD_BOOST_PURCHASE_MODAL),
        eW = i.useMemo(() => {
            var e, n;
            return {
                load_id: eU,
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
                source: eo,
                location_stack: eF
            };
        }, [eU, et, eF, eo, eD, eR]);
    i.useEffect(() => {
        (0, W.i1)(ex);
    }, [ex]),
        i.useEffect(() => {
            (async () => {
                if (!0 === eZ)
                    try {
                        if (null == B.Z.redirectedPaymentId) return;
                        await (0, m.OP)(B.Z.redirectedPaymentId), eJ(b.h8.CONFIRM), ez(N.A.COMPLETED), null != el && (await en(el)), null != ei && ei();
                    } catch (e) {
                        ez(N.A.FAIL),
                            eI(e),
                            U.default.track(X.rMx.PAYMENT_FLOW_FAILED, {
                                ...eW,
                                payment_error_code: null == e ? void 0 : e.code,
                                payment_gateway: X.gg$.STRIPE,
                                payment_source_id: ex,
                                duration_ms: Date.now() - ew
                            });
                    } finally {
                        eC(!1), (0, m.K2)();
                    }
            })();
        }, [eZ]),
        i.useEffect(() => {
            !D.ZP.hasFetchedSubscriptions() && (0, m.jg)(),
                (0, x.U)({
                    ...eW,
                    guild_id: el,
                    application_id: eu
                }),
                null != ec &&
                    null != ec.renewalMutations &&
                    U.default.track(X.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: et,
                        guild_id: el
                    });
        }, []);
    let [eG, eY] = i.useState(Q),
        [eH, eV] = i.useState(b.h8.PLAN_SELECT),
        [eX, ez] = i.useState(N.A.WAITING),
        [eK, e$] = i.useState(!0),
        eq = (0, u.Z)(() => Date.now(), [eH]),
        eJ = i.useCallback(
            (e, n) => {
                eV(e), eI(null);
                let t = Date.now();
                U.default.track(X.rMx.PAYMENT_FLOW_STEP, {
                    ...eW,
                    from_step: null != n ? n : eH,
                    to_step: e === b.h8.ADD_PAYMENT_STEPS ? b.h8.PAYMENT_TYPE : e,
                    step_duration_ms: t - eq,
                    flow_duration_ms: t - ew,
                    guild_id: el,
                    application_id: eu
                });
            },
            [eI, eW, eH, eq, ew, el, eu]
        ),
        eQ = () => {
            o(eX === N.A.COMPLETED);
        },
        e0 = null != ec && ec.isPurchasedExternally;
    i.useEffect(() => {
        eb !== k.wr.PENDING && eH !== b.h8.CONFIRM && null != ef && (eG !== Q && eY(Q), !Q.includes(eH) && eH !== b.h8.PREMIUM_UPSELL && eJ(b.h8.REVIEW)), eH === b.h8.ADD_PAYMENT_STEPS && eG !== ee && eY(ee), e0 && eH !== b.h8.PLAN_SELECT && eV(b.h8.PLAN_SELECT);
    }, [eH, eJ, e0, eb, ec, ef, eG]),
        (0, k.bp)(eH, eb, eJ, ez),
        (0, b.dZ)(eH, eX, ez);
    let e8 = i.useRef(null),
        [e1, e2] = (0, E.Z)(!1, 500),
        [e7, e9] = i.useState(null),
        [e5, e3] = i.useState([]),
        [e4, e6] = i.useState(!1);
    i.useEffect(() => {
        let e;
        if (!!eO) null != O.Z.get(z.Xh.PREMIUM_MONTH_GUILD) && e3((e = (0, W.DE)(z.Xh.PREMIUM_MONTH_GUILD, ex, !1))), null == ex && null != ec && null != ec.paymentSourceId ? e9(ec.currency) : null != e && e9(e[0]);
    }, [ex, ec, eO, JSON.stringify(e5)]);
    let ne = (0, M.vP)({
        paymentModalArgs: eP,
        initialStep: b.h8.PAYMENT_TYPE,
        prependSteps: [b.h8.PLAN_SELECT],
        appendSteps: [b.h8.REVIEW, b.h8.CONFIRM],
        breadcrumpSteps: eG,
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
            U.default.track(X.rMx.PAYMENT_FLOW_STEP, {
                ...eW,
                from_step: n,
                to_step: t,
                step_duration_ms: o - eq,
                flow_duration_ms: o - ew,
                guild_id: el
            });
        }
    });
    if (ed) n = (0, l.jsx)(T.Vq, { onClose: eQ });
    else if (ep && e_ && eO && null != e7 && '' !== e7) {
        if (null == ec ? void 0 : ec.isPausedOrPausePending)
            n = (0, l.jsx)(f.ModalContent, {
                children: (0, l.jsx)('p', {
                    className: q.copy,
                    children: $.intl.string($.t.mOWsFx)
                })
            });
        else if (null != ec && null != ec.renewalMutations)
            n = (0, l.jsx)(f.ModalContent, {
                children: (0, l.jsx)('p', {
                    className: q.copy,
                    children: $.intl.string($.t.npfhh4)
                })
            });
        else if (eH === b.h8.PREMIUM_UPSELL) {
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
                onBack: () => eJ(b.h8.PLAN_SELECT),
                onSkip: () => eJ(null != ef || ev ? b.h8.REVIEW : b.h8.ADD_PAYMENT_STEPS),
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
                case b.h8.PLAN_SELECT:
                    a()(null != el, 'Missing guildId'),
                        a()(null != eS, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, l.jsx)(H.CP, {
                            premiumSubscriptionPlan: eS,
                            numGuildBoosts: eR,
                            setNumGuildBoosts: eL,
                            setForceDisableSubmitButton: e$,
                            premiumSubscription: ec,
                            existingAvailableSlots: eh,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = 'discord://app/settings/nitro';
                                    return;
                                }
                                eQ(), null != r && r(), (0, y.z)();
                            },
                            guildId: el,
                            priceOptions: s
                        })),
                        e0 &&
                            null != ec &&
                            null != ec.paymentGateway &&
                            (e = (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(f.FormErrorBlock, {
                                        className: q.externalErrorBlock,
                                        children: $.intl.format($.t['/m3Y3t'], { paymentGatewayName: K.Vz[ec.paymentGateway] })
                                    }),
                                    e
                                ]
                            })),
                        (o = (0, l.jsx)(f.Button, {
                            look: f.Button.Looks.LINK,
                            color: (0, p.ap)(eE) ? f.Button.Colors.PRIMARY : f.Button.Colors.WHITE,
                            onClick: eQ,
                            children: $.intl.string($.t.oEAioK)
                        })),
                        (i = (0, l.jsx)(f.Button, {
                            type: 'submit',
                            disabled: eK || 0 === eR || e0,
                            onClick: () => {
                                if (!ea && (null == em || em.premiumSubscriptionType !== z.p9.TIER_2)) {
                                    eJ(b.h8.PREMIUM_UPSELL);
                                    return;
                                }
                                eJ(null != ef || ev ? b.h8.REVIEW : b.h8.ADD_PAYMENT_STEPS);
                            },
                            children: $.intl.string($.t['3PatS0'])
                        }));
                    break;
                case b.h8.ADD_PAYMENT_STEPS:
                    break;
                case b.h8.AWAITING_AUTHENTICATION:
                    e = (0, l.jsx)(S.F, { className: q.__invalid_body });
                    break;
                case b.h8.REVIEW:
                    a()(null != eS, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, l.jsx)(H.Gq, {
                            paymentSources: eT,
                            priceOptions: s,
                            currentPremiumSubscription: ec,
                            premiumSubscriptionPaymentSourceId: ef,
                            premiumSubscriptionPlan: eS,
                            newAdditionalPlans: eD,
                            onPaymentSourceChange: (e) => eN(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                eJ(b.h8.ADD_PAYMENT_STEPS), eN(null);
                            },
                            onPurchaseTermsChange: eB,
                            legalTermsNodeRef: e8,
                            hasLegalTermsFlash: e1
                        })),
                        (t = b.h8.PLAN_SELECT),
                        (i = ej
                            ? (0, l.jsx)(f.Button, {
                                  color: f.Button.Colors.GREEN,
                                  type: 'submit',
                                  submitting: ey,
                                  onClick: async () => {
                                      a()(null != eD, 'Missing newAdditionalPlans');
                                      let e = null != ex ? eT[ex] : null;
                                      eI(null);
                                      try {
                                          if (
                                              (ez(N.A.PURCHASING),
                                              eC(!0),
                                              a()(null != ex, 'Missing paymentSourceId'),
                                              U.default.track(X.rMx.PAYMENT_FLOW_COMPLETED, {
                                                  ...eW,
                                                  duration_ms: Date.now() - ew,
                                                  guild_id: el,
                                                  application_id: eu
                                              }),
                                              e4)
                                          )
                                              return;
                                          if (null == ec || null == em) {
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
                                              let n = { items: (0, F.MY)(ec, eD) };
                                              (n.currency = ec.currency), null == n.currency && (n.currency = s.currency), (n.paymentSource = null != ef ? eT[ef] : void 0), null == n.paymentSource && (a()(null != e, 'Missing paymentSource'), (n.paymentSource = e), (n.currency = s.currency));
                                              let t = await (0, m.Mg)(ec, n, eF);
                                              if (t.redirectConfirmation) {
                                                  e6(null != t.redirectURL);
                                                  return;
                                              }
                                          }
                                          eJ(b.h8.CONFIRM), ez(N.A.COMPLETED), null != el && (await en(el)), null != ei && ei();
                                      } catch (n) {
                                          ez(N.A.FAIL),
                                              eI(n),
                                              U.default.track(X.rMx.PAYMENT_FLOW_FAILED, {
                                                  ...eW,
                                                  payment_error_code: null == n ? void 0 : n.code,
                                                  payment_gateway: null != e ? (e.type === X.HeQ.CARD ? X.gg$.STRIPE : X.gg$.BRAINTREE) : null,
                                                  payment_source_id: ex,
                                                  duration_ms: Date.now() - ew
                                              });
                                      } finally {
                                          !e4 && eC(!1);
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
                                              null != e8.current && (e8.current.scrollIntoView({ behavior: 'smooth' }), e2(!0));
                                          },
                                          type: 'submit',
                                          children: $.intl.string($.t.eUEeCg)
                                      })
                              }));
                    break;
                case b.h8.CONFIRM:
                    var nn;
                    let u = L.Z.getGuild(el);
                    e = (0, l.jsx)(H.R7, {
                        guild: u,
                        guildBoostQuantity: eR + eh.length,
                        onClose: eQ,
                        withAnimation: !1,
                        paymentSourceType: null === (nn = eT[null != ex ? ex : '']) || void 0 === nn ? void 0 : nn.type
                    });
            }
            let c = null != eA && null == (0, b.ly)(eA) ? eA : ek;
            n =
                eH === b.h8.ADD_PAYMENT_STEPS
                    ? ne
                    : (0, l.jsx)(v.Z, {
                          hideBreadcrumbs: eH === b.h8.CONFIRM,
                          steps: eG,
                          currentStep: eH,
                          paymentError: c,
                          purchaseErrorBlockRef: eM,
                          hasCurrencies: e5.length > 1,
                          body: e,
                          footer:
                              eH !== b.h8.CONFIRM
                                  ? (0, l.jsxs)(f.ModalFooter, {
                                        direction: I.Z.Direction.HORIZONTAL,
                                        align: I.Z.Align.CENTER,
                                        justify: I.Z.Justify.END,
                                        children: [
                                            null != t
                                                ? (0, l.jsx)('div', {
                                                      className: q.backStep,
                                                      children: (0, l.jsx)(f.Button, {
                                                          color: (0, p.ap)(eE) ? f.Button.Colors.PRIMARY : f.Button.Colors.WHITE,
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
            eH !== b.h8.PREMIUM_UPSELL &&
            (nt = (0, l.jsx)(Y.Z, {
                onClose: eQ,
                currentStep: eH,
                purchaseState: eX
            })),
        (0, l.jsxs)(f.ModalRoot, {
            transitionState: t,
            children: [nt, n]
        })
    );
}
function eo(e) {
    let n = (0, d.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, g.ZP)(h.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, l.jsx)(g.Gt, {
        value: t,
        children: (0, l.jsx)(C.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(et, { ...e })
        })
    });
}
