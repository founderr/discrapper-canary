"use strict";
n.r(t), n.d(t, {
  GuildBoostPurchaseModal: function() {
    return ee
  },
  default: function() {
    return et
  }
}), n("47120");
var s, a = n("735250"),
  l = n("470079"),
  u = n("512722"),
  r = n.n(u),
  i = n("207561"),
  o = n("153832"),
  c = n("442837"),
  d = n("780384"),
  S = n("481060"),
  E = n("355467"),
  _ = n("179360"),
  P = n("723484"),
  p = n("330726"),
  I = n("100527"),
  m = n("906732"),
  A = n("15640"),
  C = n("89057"),
  f = n("598"),
  N = n("409813"),
  T = n("45572"),
  M = n("98278"),
  R = n("431369"),
  L = n("176919"),
  y = n("3409"),
  O = n("185139"),
  g = n("210887"),
  U = n("430824"),
  h = n("314884"),
  D = n("975060"),
  G = n("853872"),
  B = n("509545"),
  b = n("78839"),
  k = n("285952"),
  v = n("626135"),
  Y = n("267642"),
  x = n("74538"),
  j = n("212895"),
  F = n("296848"),
  w = n("518062"),
  H = n("4434"),
  W = n("333451"),
  Z = n("981631"),
  V = n("474936"),
  K = n("231338"),
  z = n("689938"),
  J = n("885888");
(s || (s = {})).PREMIUM = "discord://app/settings/nitro";
let X = V.SubscriptionPlans.NONE_MONTH,
  q = [N.Step.PLAN_SELECT, N.Step.REVIEW, N.Step.CONFIRM],
  Q = [N.Step.PLAN_SELECT, N.Step.ADD_PAYMENT_STEPS, N.Step.REVIEW, N.Step.CONFIRM];
async function $(e) {
  await (0, _.fetchGuildBoostSlots)();
  let t = (0, Y.getAvailableGuildBoostSlots)(h.default.boostSlots);
  return (0, _.applyToGuild)(e, t.map(e => e.id))
}

function ee(e) {
  let t, {
      transitionState: n,
      onClose: s,
      closeGuildPerksModal: u,
      analyticsLocations: _,
      analyticsLocation: ee,
      analyticsSourceLocation: et,
      guildId: en,
      onSubscribeComplete: es,
      totalNumberOfSlotsToAssign: ea = 1,
      disablePremiumUpsell: el = !1,
      onSubscriptionConfirmation: eu,
      applicationId: er
    } = e,
    {
      activeSubscription: ei,
      blockedPayments: eo
    } = (0, f.usePaymentContext)(),
    ec = (0, c.useStateFromStores)([b.default], () => b.default.hasFetchedSubscriptions()),
    ed = null != ei ? ei.paymentSourceId : null,
    eS = (0, c.useStateFromStores)([B.default], () => null != ei ? (0, F.getOrFetchSubscriptionPlan)(ei.planId) : null),
    eE = (0, c.useStateFromStores)([B.default], () => null == ei || null != B.default.get(ei.planId)),
    e_ = (0, c.useStateFromStores)([B.default], () => null == eS ? B.default.get(X) : eS),
    eP = (0, c.useStateFromStores)([g.default], () => g.default.theme),
    ep = l.useRef((0, Y.getAvailableGuildBoostSlots)(h.default.boostSlots)).current,
    eI = (0, c.useStateFromStores)([G.default], () => G.default.defaultPaymentSourceId),
    em = (0, y.useSharedPaymentModal)(null != ed ? ed : ec ? eI : null),
    {
      paymentSources: eA,
      setPurchaseError: eC,
      paymentSourceId: ef,
      setIsSubmittingCurrentStep: eN,
      paymentAuthenticationState: eT,
      setPaymentSourceId: eM,
      isSubmittingCurrentStep: eR,
      paymentError: eL,
      purchaseError: ey,
      purchaseErrorBlockRef: eO
    } = em,
    eg = Object.keys(eA).length > 0,
    [eU, eh] = l.useState(ea - ep.length),
    [eD, eG] = l.useState(!1),
    eB = (0, c.useStateFromStores)([D.default], () => D.default.popupCallbackCalled),
    eb = (0, A.useSubscriptionPlansLoaded)(),
    ek = l.useMemo(() => null != ei && eE && eb ? (0, R.calculateAdditionalPlansWithPremiumGuildAdjustment)(ei, eU) : [{
      planId: V.SubscriptionPlans.PREMIUM_MONTH_GUILD,
      quantity: eU
    }], [ei, eE, eU, eb]),
    [ev, eY] = (0, i.useLazyValue)(() => [(0, o.v4)(), Date.now()]),
    {
      analyticsLocations: ex
    } = (0, m.default)(_, I.default.GUILD_BOOST_PURCHASE_MODAL),
    ej = l.useMemo(() => {
      var e, t;
      return {
        load_id: ev,
        payment_type: K.PurchaseTypeToAnalyticsPaymentType[K.PurchaseTypes.SUBSCRIPTION],
        sku_id: V.PremiumSubscriptionSKUs.GUILD,
        subscription_type: Z.SubscriptionTypes.PREMIUM,
        subscription_plan_id: null !== (t = null === (e = ek.find(e => {
          let {
            planId: t
          } = e;
          return V.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
        })) || void 0 === e ? void 0 : e.planId) && void 0 !== t ? t : V.SubscriptionPlans.PREMIUM_MONTH_GUILD,
        quantity: eU,
        location: ee,
        source: et,
        location_stack: ex
      }
    }, [ev, ee, ex, et, ek, eU]);
  l.useEffect(() => {
    (0, j.fetchSubscriptionPlansOnNewPaymentSource)(ef)
  }, [ef]), l.useEffect(() => {
    (async () => {
      if (!0 === eB) try {
        if (null == D.default.redirectedPaymentId) return;
        await (0, E.redirectedPaymentSucceeded)(D.default.redirectedPaymentId), eX(N.Step.CONFIRM), eV(T.PurchaseState.COMPLETED), null != en && await $(en), null != es && es()
      } catch (e) {
        eV(T.PurchaseState.FAIL), eC(e), v.default.track(Z.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...ej,
          payment_error_code: null == e ? void 0 : e.code,
          payment_gateway: Z.PaymentGateways.STRIPE,
          payment_source_id: ef,
          duration_ms: Date.now() - eY
        })
      } finally {
        eN(!1), (0, E.resetPaymentIntentId)()
      }
    })()
  }, [eB]), l.useEffect(() => {
    !b.default.hasFetchedSubscriptions() && (0, E.fetchSubscriptions)(), v.default.track(Z.AnalyticEvents.PAYMENT_FLOW_STARTED, {
      ...ej,
      guild_id: en,
      application_id: er
    }), null != ei && null != ei.renewalMutations && v.default.track(Z.AnalyticEvents.PREMIUM_GUILD_PENDING_MODAL, {
      location: ee,
      guild_id: en
    })
  }, []);
  let [eF, ew] = l.useState(q), [eH, eW] = l.useState(N.Step.PLAN_SELECT), [eZ, eV] = l.useState(T.PurchaseState.WAITING), [eK, ez] = l.useState(!0), eJ = (0, i.useStableMemo)(() => Date.now(), [eH]), eX = l.useCallback((e, t) => {
    eW(e), eC(null);
    let n = Date.now();
    v.default.track(Z.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...ej,
      from_step: null != t ? t : eH,
      to_step: e === N.Step.ADD_PAYMENT_STEPS ? N.Step.PAYMENT_TYPE : e,
      step_duration_ms: n - eJ,
      flow_duration_ms: n - eY,
      guild_id: en,
      application_id: er
    })
  }, [eC, ej, eH, eJ, eY, en, er]), eq = () => {
    s(eZ === T.PurchaseState.COMPLETED)
  }, eQ = null != ei && ei.isPurchasedExternally;
  l.useEffect(() => {
    eT !== L.PaymentAuthenticationState.PENDING && eH !== N.Step.CONFIRM && null != ed && (eF !== q && ew(q), !q.includes(eH) && eH !== N.Step.PREMIUM_UPSELL && eX(N.Step.REVIEW)), eH === N.Step.ADD_PAYMENT_STEPS && eF !== Q && ew(Q), eQ && eH !== N.Step.PLAN_SELECT && eW(N.Step.PLAN_SELECT)
  }, [eH, eX, eQ, eT, ei, ed, eF]), (0, L.usePaymentStepForAuthentication)(eH, eT, eX), (0, N.usePurchaseStateForStep)(eH, eZ, eV);
  let e$ = l.useRef(null),
    [e0, e1] = (0, p.default)(!1, 500),
    [e2, e3] = l.useState(null),
    [e5, e8] = l.useState([]),
    [e4, e7] = l.useState(!1);
  l.useEffect(() => {
    let e;
    if (!!eb) null != B.default.get(V.SubscriptionPlans.PREMIUM_MONTH_GUILD) && e8(e = (0, j.getCurrencies)(V.SubscriptionPlans.PREMIUM_MONTH_GUILD, ef, !1)), null == ef && null != ei && null != ei.paymentSourceId ? e3(ei.currency) : null != e && e3(e[0])
  }, [ef, ei, eb, JSON.stringify(e5)]);
  let e9 = (0, y.AddPaymentFlow)({
    paymentModalArgs: em,
    initialStep: N.Step.PAYMENT_TYPE,
    prependSteps: [N.Step.PLAN_SELECT],
    appendSteps: [N.Step.REVIEW, N.Step.CONFIRM],
    breadcrumpSteps: eF,
    currentBreadcrumpStep: eH,
    onReturn: () => {
      eX(Object.values(eA).length < 1 ? N.Step.PLAN_SELECT : N.Step.REVIEW, N.Step.PAYMENT_TYPE)
    },
    onComplete: e => {
      eX(N.Step.REVIEW, e)
    },
    onStepChange: e => {
      let {
        currentStep: t,
        toStep: n
      } = e, s = Date.now();
      v.default.track(Z.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...ej,
        from_step: t,
        to_step: n,
        step_duration_ms: s - eJ,
        flow_duration_ms: s - eY,
        guild_id: en
      })
    }
  });
  if (eo) t = (0, a.jsx)(C.BlockedPaymentsContentModal, {
    onClose: eq
  });
  else if (ec && eE && eb && null != e2 && "" !== e2) {
    if (null != ei && null != ei.renewalMutations) t = (0, a.jsx)(S.ModalContent, {
      children: (0, a.jsx)("p", {
        className: J.copy,
        children: z.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_PENDING_MUTATION
      })
    });
    else if (eH === N.Step.PREMIUM_UPSELL) {
      r()(null != e_, "Missing nextPremiumSubscriptionPlan"), r()(e2, "Currency not defined");
      let e = null != ef ? {
        paymentSourceId: ef,
        currency: e2
      } : {
        currency: e2
      };
      t = (0, a.jsx)(W.default, {
        premiumSubscriptionPlan: e_,
        analyticsLocation: ee,
        analyticsSourceLocation: et,
        onClose: eq,
        onBack: () => eX(N.Step.PLAN_SELECT),
        onSkip: () => eX(null != ed || eg ? N.Step.REVIEW : N.Step.ADD_PAYMENT_STEPS),
        onSubscriptionConfirmation: eu,
        priceOptions: e
      })
    } else {
      let e, n, s, l;
      r()(e2, "Currency not defined");
      let i = null != ef ? {
        paymentSourceId: ef,
        currency: e2
      } : {
        currency: e2
      };
      switch (eH) {
        case N.Step.PLAN_SELECT:
          r()(null != en, "Missing guildId"), r()(null != e_, "Missing nextPremiumSubscriptionPlan"), e = (0, a.jsx)(H.GuildBoostingPlanSelect, {
            premiumSubscriptionPlan: e_,
            numGuildBoosts: eU,
            setNumGuildBoosts: eh,
            setForceDisableSubmitButton: ez,
            premiumSubscription: ei,
            existingAvailableSlots: ep,
            onClickPremiumSubscriptionLink: () => {
              if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return
              }
              eq(), null != u && u(), (0, M.navigateToPremiumMarketingPage)()
            },
            guildId: en,
            priceOptions: i
          }), eQ && null != ei && null != ei.paymentGateway && (e = (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(S.FormErrorBlock, {
              className: J.externalErrorBlock,
              children: z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_EXTERNAL.format({
                paymentGatewayName: K.PaymentGatewayToFriendlyName[ei.paymentGateway]
              })
            }), e]
          })), s = (0, a.jsx)(S.Button, {
            look: S.Button.Looks.LINK,
            color: (0, d.isThemeLight)(eP) ? S.Button.Colors.PRIMARY : S.Button.Colors.WHITE,
            onClick: eq,
            children: z.default.Messages.NEVERMIND
          }), l = (0, a.jsx)(S.Button, {
            type: "submit",
            disabled: eK || 0 === eU || eQ,
            onClick: () => {
              if (!el && (null == eS || eS.premiumSubscriptionType !== V.PremiumTypes.TIER_2)) {
                eX(N.Step.PREMIUM_UPSELL);
                return
              }
              eX(null != ed || eg ? N.Step.REVIEW : N.Step.ADD_PAYMENT_STEPS)
            },
            children: z.default.Messages.CONTINUE
          });
          break;
        case N.Step.ADD_PAYMENT_STEPS:
          break;
        case N.Step.AWAITING_AUTHENTICATION:
          e = (0, a.jsx)(P.AwaitingAuthenticationStepBody, {
            className: J.__invalid_body
          });
          break;
        case N.Step.REVIEW:
          r()(null != e_, "Missing nextPremiumSubscriptionPlan"), e = (0, a.jsx)(H.GuildBoostingReview, {
            paymentSources: eA,
            priceOptions: i,
            currentPremiumSubscription: ei,
            premiumSubscriptionPaymentSourceId: ed,
            premiumSubscriptionPlan: e_,
            newAdditionalPlans: ek,
            onPaymentSourceChange: e => eM(null != e ? e.id : null),
            onPaymentSourceAdd: () => {
              eX(N.Step.ADD_PAYMENT_STEPS), eM(null)
            },
            onPurchaseTermsChange: eG,
            legalTermsNodeRef: e$,
            hasLegalTermsFlash: e0
          }), n = N.Step.PLAN_SELECT, l = eD ? (0, a.jsx)(S.Button, {
            color: S.Button.Colors.GREEN,
            type: "submit",
            submitting: eR,
            onClick: async () => {
              r()(null != ek, "Missing newAdditionalPlans");
              let e = null != ef ? eA[ef] : null;
              eC(null);
              try {
                if (eV(T.PurchaseState.PURCHASING), eN(!0), r()(null != ef, "Missing paymentSourceId"), v.default.track(Z.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                    ...ej,
                    duration_ms: Date.now() - eY,
                    guild_id: en,
                    application_id: er
                  }), e4) return;
                if (null == ei || null == eS) {
                  r()(null != e, "Missing paymentSource");
                  let t = await (0, E.createSubscription)({
                    items: ek,
                    paymentSource: e,
                    currency: i.currency
                  });
                  if (t.redirectConfirmation) {
                    e7(null != t.redirectURL);
                    return
                  }
                } else {
                  let t = {
                    items: (0, x.getItemsFromNewAdditionalPlans)(ei, ek)
                  };
                  t.currency = ei.currency, null == t.currency && (t.currency = i.currency), t.paymentSource = null != ed ? eA[ed] : void 0, null == t.paymentSource && (r()(null != e, "Missing paymentSource"), t.paymentSource = e, t.currency = i.currency);
                  let n = await (0, E.updateSubscription)(ei, t, ex);
                  if (n.redirectConfirmation) {
                    e7(null != n.redirectURL);
                    return
                  }
                }
                eX(N.Step.CONFIRM), eV(T.PurchaseState.COMPLETED), null != en && await $(en), null != es && es()
              } catch (t) {
                eV(T.PurchaseState.FAIL), eC(t), v.default.track(Z.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                  ...ej,
                  payment_error_code: null == t ? void 0 : t.code,
                  payment_gateway: null != e ? e.type === Z.PaymentSourceTypes.CARD ? Z.PaymentGateways.STRIPE : Z.PaymentGateways.BRAINTREE : null,
                  payment_source_id: ef,
                  duration_ms: Date.now() - eY
                })
              } finally {
                !e4 && eN(!1)
              }
            },
            children: z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
          }) : (0, a.jsx)(S.Tooltip, {
            text: z.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
            children: e => (0, a.jsx)(S.Button, {
              ...e,
              color: S.Button.Colors.GREEN,
              onClick: () => {
                null != e$.current && (e$.current.scrollIntoView({
                  behavior: "smooth"
                }), e1(!0))
              },
              type: "submit",
              children: z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
            })
          });
          break;
        case N.Step.CONFIRM:
          var e6;
          let o = U.default.getGuild(en);
          e = (0, a.jsx)(H.GuildBoostingConfirmation, {
            guild: o,
            guildBoostQuantity: eU + ep.length,
            onClose: eq,
            withAnimation: !1,
            paymentSourceType: null === (e6 = eA[null != ef ? ef : ""]) || void 0 === e6 ? void 0 : e6.type
          })
      }
      let c = null != eL && null == (0, N.errorToStep)(eL) ? eL : ey;
      t = eH === N.Step.ADD_PAYMENT_STEPS ? e9 : (0, a.jsx)(O.default, {
        hideBreadcrumbs: eH === N.Step.CONFIRM,
        steps: eF,
        currentStep: eH,
        paymentError: c,
        purchaseErrorBlockRef: eO,
        hasCurrencies: e5.length > 1,
        body: e,
        footer: eH !== N.Step.CONFIRM ? (0, a.jsxs)(S.ModalFooter, {
          direction: k.default.Direction.HORIZONTAL,
          align: k.default.Align.CENTER,
          justify: k.default.Justify.END,
          children: [null != n ? (0, a.jsx)("div", {
            className: J.backStep,
            children: (0, a.jsx)(S.Button, {
              color: (0, d.isThemeLight)(eP) ? S.Button.Colors.PRIMARY : S.Button.Colors.WHITE,
              look: S.Button.Looks.LINK,
              size: S.Button.Sizes.NONE,
              onClick: () => {
                null != n && eX(n)
              },
              children: z.default.Messages.BACK
            })
          }) : null, (0, a.jsxs)("div", {
            className: J.footerRight,
            children: [s, l]
          })]
        }) : null
      })
    }
  } else t = (0, a.jsx)("div", {
    className: J.loadingWrapper,
    children: (0, a.jsx)(S.Spinner, {})
  });
  let te = null;
  return !eo && eH !== N.Step.PREMIUM_UPSELL && (te = (0, a.jsx)(w.default, {
    onClose: eq,
    currentStep: eH,
    purchaseState: eZ
  })), (0, a.jsxs)(S.ModalRoot, {
    transitionState: n,
    children: [te, t]
  })
}

function et(e) {
  let t = (0, c.useStateFromStores)([b.default], () => b.default.getPremiumTypeSubscription()),
    {
      analyticsLocations: n
    } = (0, m.default)(I.default.GUILD_BOOST_PURCHASE_MODAL);
  return (0, a.jsx)(m.AnalyticsLocationProvider, {
    value: n,
    children: (0, a.jsx)(f.PaymentContextProvider, {
      activeSubscription: t,
      stepConfigs: [],
      skuIDs: [],
      children: (0, a.jsx)(ee, {
        ...e
      })
    })
  })
}