t.r(n), t.d(n, {
  GuildBoostPurchaseModal: function() {
    return en
  },
  default: function() {
    return et
  }
}), t(47120);
var l, s = t(735250),
  i = t(470079),
  o = t(512722),
  r = t.n(o),
  a = t(77866),
  u = t(792986),
  c = t(772848),
  E = t(442837),
  d = t(780384),
  _ = t(481060),
  p = t(355467),
  S = t(179360),
  P = t(723484),
  I = t(330726),
  M = t(100527),
  T = t(906732),
  m = t(15640),
  h = t(89057),
  N = t(598),
  A = t(409813),
  L = t(45572),
  R = t(98278),
  C = t(431369),
  U = t(176919),
  f = t(3409),
  y = t(185139),
  g = t(210887),
  O = t(430824),
  Z = t(314884),
  D = t(975060),
  x = t(853872),
  k = t(509545),
  j = t(78839),
  b = t(285952),
  B = t(626135),
  v = t(267642),
  G = t(74538),
  F = t(212895),
  w = t(296848),
  W = t(518062),
  Y = t(4434),
  H = t(333451),
  V = t(981631),
  X = t(474936),
  K = t(231338),
  z = t(689938),
  q = t(597881);
(l || (l = {})).PREMIUM = "discord://app/settings/nitro";
let J = X.Xh.NONE_MONTH,
  $ = [A.h8.PLAN_SELECT, A.h8.REVIEW, A.h8.CONFIRM],
  Q = [A.h8.PLAN_SELECT, A.h8.ADD_PAYMENT_STEPS, A.h8.REVIEW, A.h8.CONFIRM];
async function ee(e) {
  await (0, S.X8)();
  let n = (0, v.vx)(Z.Z.boostSlots);
  return (0, S.W3)(e, n.map(e => e.id))
}

function en(e) {
  let n, {
      transitionState: t,
      onClose: l,
      closeGuildPerksModal: o,
      analyticsLocations: S,
      analyticsLocation: en,
      analyticsSourceLocation: et,
      guildId: el,
      onSubscribeComplete: es,
      totalNumberOfSlotsToAssign: ei = 1,
      disablePremiumUpsell: eo = !1,
      onSubscriptionConfirmation: er,
      applicationId: ea
    } = e,
    {
      activeSubscription: eu,
      blockedPayments: ec
    } = (0, N.usePaymentContext)(),
    eE = (0, E.e7)([j.ZP], () => j.ZP.hasFetchedSubscriptions()),
    ed = null != eu ? eu.paymentSourceId : null,
    e_ = (0, E.e7)([k.Z], () => null != eu ? (0, w.oE)(eu.planId) : null),
    ep = (0, E.e7)([k.Z], () => null == eu || null != k.Z.get(eu.planId)),
    eS = (0, E.e7)([k.Z], () => null == e_ ? k.Z.get(J) : e_),
    eP = (0, E.e7)([g.Z], () => g.Z.theme),
    eI = i.useRef((0, v.vx)(Z.Z.boostSlots)).current,
    eM = (0, E.e7)([x.Z], () => x.Z.defaultPaymentSourceId),
    eT = (0, f.fL)(null != ed ? ed : eE ? eM : null),
    {
      paymentSources: em,
      setPurchaseError: eh,
      paymentSourceId: eN,
      setIsSubmittingCurrentStep: eA,
      paymentAuthenticationState: eL,
      setPaymentSourceId: eR,
      isSubmittingCurrentStep: eC,
      paymentError: eU,
      purchaseError: ef,
      purchaseErrorBlockRef: ey
    } = eT,
    eg = Object.keys(em).length > 0,
    [eO, eZ] = i.useState(ei - eI.length),
    [eD, ex] = i.useState(!1),
    ek = (0, E.e7)([D.Z], () => D.Z.popupCallbackCalled),
    ej = (0, m.V)(),
    eb = i.useMemo(() => null != eu && ep && ej ? (0, C.g)(eu, eO) : [{
      planId: X.Xh.PREMIUM_MONTH_GUILD,
      quantity: eO
    }], [eu, ep, eO, ej]),
    [eB, ev] = (0, a.Z)(() => [(0, c.Z)(), Date.now()]),
    {
      analyticsLocations: eG
    } = (0, T.ZP)(S, M.Z.GUILD_BOOST_PURCHASE_MODAL),
    eF = i.useMemo(() => {
      var e, n;
      return {
        load_id: eB,
        payment_type: K.Zu[K.GZ.SUBSCRIPTION],
        sku_id: X.Si.GUILD,
        subscription_type: V.NYc.PREMIUM,
        subscription_plan_id: null !== (n = null === (e = eb.find(e => {
          let {
            planId: n
          } = e;
          return X.Z1.has(n)
        })) || void 0 === e ? void 0 : e.planId) && void 0 !== n ? n : X.Xh.PREMIUM_MONTH_GUILD,
        quantity: eO,
        location: en,
        source: et,
        location_stack: eG
      }
    }, [eB, en, eG, et, eb, eO]);
  i.useEffect(() => {
    (0, F.i1)(eN)
  }, [eN]), i.useEffect(() => {
    (async () => {
      if (!0 === ek) try {
        if (null == D.Z.redirectedPaymentId) return;
        await (0, p.OP)(D.Z.redirectedPaymentId), eJ(A.h8.CONFIRM), eX(L.A.COMPLETED), null != el && await ee(el), null != es && es()
      } catch (e) {
        eX(L.A.FAIL), eh(e), B.default.track(V.rMx.PAYMENT_FLOW_FAILED, {
          ...eF,
          payment_error_code: null == e ? void 0 : e.code,
          payment_gateway: V.gg$.STRIPE,
          payment_source_id: eN,
          duration_ms: Date.now() - ev
        })
      } finally {
        eA(!1), (0, p.K2)()
      }
    })()
  }, [ek]), i.useEffect(() => {
    !j.ZP.hasFetchedSubscriptions() && (0, p.jg)(), B.default.track(V.rMx.PAYMENT_FLOW_STARTED, {
      ...eF,
      guild_id: el,
      application_id: ea
    }), null != eu && null != eu.renewalMutations && B.default.track(V.rMx.PREMIUM_GUILD_PENDING_MODAL, {
      location: en,
      guild_id: el
    })
  }, []);
  let [ew, eW] = i.useState($), [eY, eH] = i.useState(A.h8.PLAN_SELECT), [eV, eX] = i.useState(L.A.WAITING), [eK, ez] = i.useState(!0), eq = (0, u.Z)(() => Date.now(), [eY]), eJ = i.useCallback((e, n) => {
    eH(e), eh(null);
    let t = Date.now();
    B.default.track(V.rMx.PAYMENT_FLOW_STEP, {
      ...eF,
      from_step: null != n ? n : eY,
      to_step: e === A.h8.ADD_PAYMENT_STEPS ? A.h8.PAYMENT_TYPE : e,
      step_duration_ms: t - eq,
      flow_duration_ms: t - ev,
      guild_id: el,
      application_id: ea
    })
  }, [eh, eF, eY, eq, ev, el, ea]), e$ = () => {
    l(eV === L.A.COMPLETED)
  }, eQ = null != eu && eu.isPurchasedExternally;
  i.useEffect(() => {
    eL !== U.wr.PENDING && eY !== A.h8.CONFIRM && null != ed && (ew !== $ && eW($), !$.includes(eY) && eY !== A.h8.PREMIUM_UPSELL && eJ(A.h8.REVIEW)), eY === A.h8.ADD_PAYMENT_STEPS && ew !== Q && eW(Q), eQ && eY !== A.h8.PLAN_SELECT && eH(A.h8.PLAN_SELECT)
  }, [eY, eJ, eQ, eL, eu, ed, ew]), (0, U.bp)(eY, eL, eJ), (0, A.dZ)(eY, eV, eX);
  let e0 = i.useRef(null),
    [e8, e3] = (0, I.Z)(!1, 500),
    [e7, e1] = i.useState(null),
    [e5, e4] = i.useState([]),
    [e2, e9] = i.useState(!1);
  i.useEffect(() => {
    let e;
    if (!!ej) null != k.Z.get(X.Xh.PREMIUM_MONTH_GUILD) && e4(e = (0, F.DE)(X.Xh.PREMIUM_MONTH_GUILD, eN, !1)), null == eN && null != eu && null != eu.paymentSourceId ? e1(eu.currency) : null != e && e1(e[0])
  }, [eN, eu, ej, JSON.stringify(e5)]);
  let e6 = (0, f.vP)({
    paymentModalArgs: eT,
    initialStep: A.h8.PAYMENT_TYPE,
    prependSteps: [A.h8.PLAN_SELECT],
    appendSteps: [A.h8.REVIEW, A.h8.CONFIRM],
    breadcrumpSteps: ew,
    currentBreadcrumpStep: eY,
    onReturn: () => {
      eJ(Object.values(em).length < 1 ? A.h8.PLAN_SELECT : A.h8.REVIEW, A.h8.PAYMENT_TYPE)
    },
    onComplete: e => {
      eJ(A.h8.REVIEW, e)
    },
    onStepChange: e => {
      let {
        currentStep: n,
        toStep: t
      } = e, l = Date.now();
      B.default.track(V.rMx.PAYMENT_FLOW_STEP, {
        ...eF,
        from_step: n,
        to_step: t,
        step_duration_ms: l - eq,
        flow_duration_ms: l - ev,
        guild_id: el
      })
    }
  });
  if (ec) n = (0, s.jsx)(h.Vq, {
    onClose: e$
  });
  else if (eE && ep && ej && null != e7 && "" !== e7) {
    if (null == eu ? void 0 : eu.isPausedOrPausePending) n = (0, s.jsx)(_.ModalContent, {
      children: (0, s.jsx)("p", {
        className: q.copy,
        children: z.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION
      })
    });
    else if (null != eu && null != eu.renewalMutations) n = (0, s.jsx)(_.ModalContent, {
      children: (0, s.jsx)("p", {
        className: q.copy,
        children: z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_PENDING_MUTATION
      })
    });
    else if (eY === A.h8.PREMIUM_UPSELL) {
      r()(null != eS, "Missing nextPremiumSubscriptionPlan"), r()(e7, "Currency not defined");
      let e = null != eN ? {
        paymentSourceId: eN,
        currency: e7
      } : {
        currency: e7
      };
      n = (0, s.jsx)(H.Z, {
        premiumSubscriptionPlan: eS,
        analyticsLocation: en,
        analyticsSourceLocation: et,
        onClose: e$,
        onBack: () => eJ(A.h8.PLAN_SELECT),
        onSkip: () => eJ(null != ed || eg ? A.h8.REVIEW : A.h8.ADD_PAYMENT_STEPS),
        onSubscriptionConfirmation: er,
        priceOptions: e
      })
    } else {
      let e, t, l, i;
      r()(e7, "Currency not defined");
      let a = null != eN ? {
        paymentSourceId: eN,
        currency: e7
      } : {
        currency: e7
      };
      switch (eY) {
        case A.h8.PLAN_SELECT:
          r()(null != el, "Missing guildId"), r()(null != eS, "Missing nextPremiumSubscriptionPlan"), e = (0, s.jsx)(Y.CP, {
            premiumSubscriptionPlan: eS,
            numGuildBoosts: eO,
            setNumGuildBoosts: eZ,
            setForceDisableSubmitButton: ez,
            premiumSubscription: eu,
            existingAvailableSlots: eI,
            onClickPremiumSubscriptionLink: () => {
              if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return
              }
              e$(), null != o && o(), (0, R.z)()
            },
            guildId: el,
            priceOptions: a
          }), eQ && null != eu && null != eu.paymentGateway && (e = (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(_.FormErrorBlock, {
              className: q.externalErrorBlock,
              children: z.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_EXTERNAL.format({
                paymentGatewayName: K.Vz[eu.paymentGateway]
              })
            }), e]
          })), l = (0, s.jsx)(_.Button, {
            look: _.Button.Looks.LINK,
            color: (0, d.ap)(eP) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
            onClick: e$,
            children: z.Z.Messages.NEVERMIND
          }), i = (0, s.jsx)(_.Button, {
            type: "submit",
            disabled: eK || 0 === eO || eQ,
            onClick: () => {
              if (!eo && (null == e_ || e_.premiumSubscriptionType !== X.p9.TIER_2)) {
                eJ(A.h8.PREMIUM_UPSELL);
                return
              }
              eJ(null != ed || eg ? A.h8.REVIEW : A.h8.ADD_PAYMENT_STEPS)
            },
            children: z.Z.Messages.CONTINUE
          });
          break;
        case A.h8.ADD_PAYMENT_STEPS:
          break;
        case A.h8.AWAITING_AUTHENTICATION:
          e = (0, s.jsx)(P.F, {
            className: q.__invalid_body
          });
          break;
        case A.h8.REVIEW:
          r()(null != eS, "Missing nextPremiumSubscriptionPlan"), e = (0, s.jsx)(Y.Gq, {
            paymentSources: em,
            priceOptions: a,
            currentPremiumSubscription: eu,
            premiumSubscriptionPaymentSourceId: ed,
            premiumSubscriptionPlan: eS,
            newAdditionalPlans: eb,
            onPaymentSourceChange: e => eR(null != e ? e.id : null),
            onPaymentSourceAdd: () => {
              eJ(A.h8.ADD_PAYMENT_STEPS), eR(null)
            },
            onPurchaseTermsChange: ex,
            legalTermsNodeRef: e0,
            hasLegalTermsFlash: e8
          }), t = A.h8.PLAN_SELECT, i = eD ? (0, s.jsx)(_.Button, {
            color: _.Button.Colors.GREEN,
            type: "submit",
            submitting: eC,
            onClick: async () => {
              r()(null != eb, "Missing newAdditionalPlans");
              let e = null != eN ? em[eN] : null;
              eh(null);
              try {
                if (eX(L.A.PURCHASING), eA(!0), r()(null != eN, "Missing paymentSourceId"), B.default.track(V.rMx.PAYMENT_FLOW_COMPLETED, {
                    ...eF,
                    duration_ms: Date.now() - ev,
                    guild_id: el,
                    application_id: ea
                  }), e2) return;
                if (null == eu || null == e_) {
                  r()(null != e, "Missing paymentSource");
                  let n = await (0, p.XW)({
                    items: eb,
                    paymentSource: e,
                    currency: a.currency
                  });
                  if (n.redirectConfirmation) {
                    e9(null != n.redirectURL);
                    return
                  }
                } else {
                  let n = {
                    items: (0, G.MY)(eu, eb)
                  };
                  n.currency = eu.currency, null == n.currency && (n.currency = a.currency), n.paymentSource = null != ed ? em[ed] : void 0, null == n.paymentSource && (r()(null != e, "Missing paymentSource"), n.paymentSource = e, n.currency = a.currency);
                  let t = await (0, p.Mg)(eu, n, eG);
                  if (t.redirectConfirmation) {
                    e9(null != t.redirectURL);
                    return
                  }
                }
                eJ(A.h8.CONFIRM), eX(L.A.COMPLETED), null != el && await ee(el), null != es && es()
              } catch (n) {
                eX(L.A.FAIL), eh(n), B.default.track(V.rMx.PAYMENT_FLOW_FAILED, {
                  ...eF,
                  payment_error_code: null == n ? void 0 : n.code,
                  payment_gateway: null != e ? e.type === V.HeQ.CARD ? V.gg$.STRIPE : V.gg$.BRAINTREE : null,
                  payment_source_id: eN,
                  duration_ms: Date.now() - ev
                })
              } finally {
                !e2 && eA(!1)
              }
            },
            children: z.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
          }) : (0, s.jsx)(_.Tooltip, {
            text: z.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
            children: e => (0, s.jsx)(_.Button, {
              ...e,
              color: _.Button.Colors.GREEN,
              onClick: () => {
                null != e0.current && (e0.current.scrollIntoView({
                  behavior: "smooth"
                }), e3(!0))
              },
              type: "submit",
              children: z.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
            })
          });
          break;
        case A.h8.CONFIRM:
          var ne;
          let u = O.Z.getGuild(el);
          e = (0, s.jsx)(Y.R7, {
            guild: u,
            guildBoostQuantity: eO + eI.length,
            onClose: e$,
            withAnimation: !1,
            paymentSourceType: null === (ne = em[null != eN ? eN : ""]) || void 0 === ne ? void 0 : ne.type
          })
      }
      let c = null != eU && null == (0, A.ly)(eU) ? eU : ef;
      n = eY === A.h8.ADD_PAYMENT_STEPS ? e6 : (0, s.jsx)(y.Z, {
        hideBreadcrumbs: eY === A.h8.CONFIRM,
        steps: ew,
        currentStep: eY,
        paymentError: c,
        purchaseErrorBlockRef: ey,
        hasCurrencies: e5.length > 1,
        body: e,
        footer: eY !== A.h8.CONFIRM ? (0, s.jsxs)(_.ModalFooter, {
          direction: b.Z.Direction.HORIZONTAL,
          align: b.Z.Align.CENTER,
          justify: b.Z.Justify.END,
          children: [null != t ? (0, s.jsx)("div", {
            className: q.backStep,
            children: (0, s.jsx)(_.Button, {
              color: (0, d.ap)(eP) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
              look: _.Button.Looks.LINK,
              size: _.Button.Sizes.NONE,
              onClick: () => {
                null != t && eJ(t)
              },
              children: z.Z.Messages.BACK
            })
          }) : null, (0, s.jsxs)("div", {
            className: q.footerRight,
            children: [l, i]
          })]
        }) : null
      })
    }
  } else n = (0, s.jsx)("div", {
    className: q.loadingWrapper,
    children: (0, s.jsx)(_.Spinner, {})
  });
  let nn = null;
  return !ec && eY !== A.h8.PREMIUM_UPSELL && (nn = (0, s.jsx)(W.Z, {
    onClose: e$,
    currentStep: eY,
    purchaseState: eV
  })), (0, s.jsxs)(_.ModalRoot, {
    transitionState: t,
    children: [nn, n]
  })
}

function et(e) {
  let n = (0, E.e7)([j.ZP], () => j.ZP.getPremiumTypeSubscription()),
    {
      analyticsLocations: t
    } = (0, T.ZP)(M.Z.GUILD_BOOST_PURCHASE_MODAL);
  return (0, s.jsx)(T.Gt, {
    value: t,
    children: (0, s.jsx)(N.PaymentContextProvider, {
      activeSubscription: n,
      stepConfigs: [],
      skuIDs: [],
      children: (0, s.jsx)(en, {
        ...e
      })
    })
  })
}