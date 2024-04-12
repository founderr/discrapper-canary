"use strict";
n.r(t), n.d(t, {
  GuildBoostPurchaseModal: function() {
    return ee
  },
  default: function() {
    return et
  }
}), n("47120");
var i, l = n("735250"),
  s = n("470079"),
  a = n("512722"),
  u = n.n(a),
  o = n("207561"),
  r = n("153832"),
  c = n("442837"),
  d = n("780384"),
  S = n("481060"),
  p = n("355467"),
  m = n("179360"),
  E = n("723484"),
  P = n("330726"),
  _ = n("100527"),
  f = n("906732"),
  I = n("15640"),
  h = n("89057"),
  M = n("598"),
  T = n("409813"),
  y = n("45572"),
  N = n("98278"),
  A = n("431369"),
  R = n("176919"),
  L = n("3409"),
  C = n("185139"),
  U = n("210887"),
  g = n("430824"),
  O = n("314884"),
  D = n("975060"),
  b = n("853872"),
  v = n("509545"),
  x = n("78839"),
  B = n("285952"),
  F = n("626135"),
  G = n("267642"),
  j = n("74538"),
  k = n("212895"),
  w = n("296848"),
  W = n("518062"),
  Y = n("4434"),
  H = n("333451"),
  V = n("981631"),
  K = n("474936"),
  z = n("231338"),
  q = n("689938"),
  J = n("885888");
(i || (i = {})).PREMIUM = "discord://app/settings/nitro";
let X = K.SubscriptionPlans.NONE_MONTH,
  Q = [T.Step.PLAN_SELECT, T.Step.REVIEW, T.Step.CONFIRM],
  Z = [T.Step.PLAN_SELECT, T.Step.ADD_PAYMENT_STEPS, T.Step.REVIEW, T.Step.CONFIRM];
async function $(e) {
  await (0, m.fetchGuildBoostSlots)();
  let t = (0, G.getAvailableGuildBoostSlots)(O.default.boostSlots);
  return (0, m.applyToGuild)(e, t.map(e => e.id))
}

function ee(e) {
  let t, {
      transitionState: n,
      onClose: i,
      closeGuildPerksModal: a,
      analyticsLocations: m,
      analyticsLocation: ee,
      analyticsSourceLocation: et,
      guildId: en,
      onSubscribeComplete: ei,
      totalNumberOfSlotsToAssign: el = 1,
      disablePremiumUpsell: es = !1,
      onSubscriptionConfirmation: ea,
      applicationId: eu
    } = e,
    {
      activeSubscription: eo,
      blockedPayments: er
    } = (0, M.usePaymentContext)(),
    ec = (0, c.useStateFromStores)([x.default], () => x.default.hasFetchedSubscriptions()),
    ed = null != eo ? eo.paymentSourceId : null,
    eS = (0, c.useStateFromStores)([v.default], () => null != eo ? (0, w.getOrFetchSubscriptionPlan)(eo.planId) : null),
    ep = (0, c.useStateFromStores)([v.default], () => null == eo || null != v.default.get(eo.planId)),
    em = (0, c.useStateFromStores)([v.default], () => null == eS ? v.default.get(X) : eS),
    eE = (0, c.useStateFromStores)([U.default], () => U.default.theme),
    eP = s.useRef((0, G.getAvailableGuildBoostSlots)(O.default.boostSlots)).current,
    e_ = (0, c.useStateFromStores)([b.default], () => b.default.defaultPaymentSourceId),
    ef = (0, L.useSharedPaymentModal)(null != ed ? ed : ec ? e_ : null),
    {
      paymentSources: eI,
      setPurchaseError: eh,
      paymentSourceId: eM,
      setIsSubmittingCurrentStep: eT,
      paymentAuthenticationState: ey,
      setPaymentSourceId: eN,
      isSubmittingCurrentStep: eA,
      paymentError: eR,
      purchaseError: eL,
      purchaseErrorBlockRef: eC
    } = ef,
    eU = Object.keys(eI).length > 0,
    [eg, eO] = s.useState(el - eP.length),
    [eD, eb] = s.useState(!1),
    ev = (0, c.useStateFromStores)([D.default], () => D.default.popupCallbackCalled),
    ex = (0, I.useSubscriptionPlansLoaded)(),
    eB = s.useMemo(() => null != eo && ep && ex ? (0, A.calculateAdditionalPlansWithPremiumGuildAdjustment)(eo, eg) : [{
      planId: K.SubscriptionPlans.PREMIUM_MONTH_GUILD,
      quantity: eg
    }], [eo, ep, eg, ex]),
    [eF, eG] = (0, o.useLazyValue)(() => [(0, r.v4)(), Date.now()]),
    {
      analyticsLocations: ej
    } = (0, f.default)(m, _.default.GUILD_BOOST_PURCHASE_MODAL),
    ek = s.useMemo(() => {
      var e, t;
      return {
        load_id: eF,
        payment_type: z.PurchaseTypeToAnalyticsPaymentType[z.PurchaseTypes.SUBSCRIPTION],
        sku_id: K.PremiumSubscriptionSKUs.GUILD,
        subscription_type: V.SubscriptionTypes.PREMIUM,
        subscription_plan_id: null !== (t = null === (e = eB.find(e => {
          let {
            planId: t
          } = e;
          return K.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
        })) || void 0 === e ? void 0 : e.planId) && void 0 !== t ? t : K.SubscriptionPlans.PREMIUM_MONTH_GUILD,
        quantity: eg,
        location: ee,
        source: et,
        location_stack: ej
      }
    }, [eF, ee, ej, et, eB, eg]);
  s.useEffect(() => {
    (0, k.fetchSubscriptionPlansOnNewPaymentSource)(eM)
  }, [eM]), s.useEffect(() => {
    (async () => {
      if (!0 === ev) try {
        if (null == D.default.redirectedPaymentId) return;
        await (0, p.redirectedPaymentSucceeded)(D.default.redirectedPaymentId), eX(T.Step.CONFIRM), eK(y.PurchaseState.COMPLETED), null != en && await $(en), null != ei && ei()
      } catch (e) {
        eK(y.PurchaseState.FAIL), eh(e), F.default.track(V.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...ek,
          payment_error_code: null == e ? void 0 : e.code,
          payment_gateway: V.PaymentGateways.STRIPE,
          payment_source_id: eM,
          duration_ms: Date.now() - eG
        })
      } finally {
        eT(!1), (0, p.resetPaymentIntentId)()
      }
    })()
  }, [ev]), s.useEffect(() => {
    !x.default.hasFetchedSubscriptions() && (0, p.fetchSubscriptions)(), F.default.track(V.AnalyticEvents.PAYMENT_FLOW_STARTED, {
      ...ek,
      guild_id: en,
      application_id: eu
    }), null != eo && null != eo.renewalMutations && F.default.track(V.AnalyticEvents.PREMIUM_GUILD_PENDING_MODAL, {
      location: ee,
      guild_id: en
    })
  }, []);
  let [ew, eW] = s.useState(Q), [eY, eH] = s.useState(T.Step.PLAN_SELECT), [eV, eK] = s.useState(y.PurchaseState.WAITING), [ez, eq] = s.useState(!0), eJ = (0, o.useStableMemo)(() => Date.now(), [eY]), eX = s.useCallback((e, t) => {
    eH(e), eh(null);
    let n = Date.now();
    F.default.track(V.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...ek,
      from_step: null != t ? t : eY,
      to_step: e === T.Step.ADD_PAYMENT_STEPS ? T.Step.PAYMENT_TYPE : e,
      step_duration_ms: n - eJ,
      flow_duration_ms: n - eG,
      guild_id: en,
      application_id: eu
    })
  }, [eh, ek, eY, eJ, eG, en, eu]), eQ = () => {
    i(eV === y.PurchaseState.COMPLETED)
  }, eZ = null != eo && eo.isPurchasedExternally;
  s.useEffect(() => {
    ey !== R.PaymentAuthenticationState.PENDING && eY !== T.Step.CONFIRM && null != ed && (ew !== Q && eW(Q), !Q.includes(eY) && eY !== T.Step.PREMIUM_UPSELL && eX(T.Step.REVIEW)), eY === T.Step.ADD_PAYMENT_STEPS && ew !== Z && eW(Z), eZ && eY !== T.Step.PLAN_SELECT && eH(T.Step.PLAN_SELECT)
  }, [eY, eX, eZ, ey, eo, ed, ew]), (0, R.usePaymentStepForAuthentication)(eY, ey, eX), (0, T.usePurchaseStateForStep)(eY, eV, eK);
  let e$ = s.useRef(null),
    [e0, e3] = (0, P.default)(!1, 500),
    [e1, e4] = s.useState(null),
    [e7, e5] = s.useState([]),
    [e8, e9] = s.useState(!1);
  s.useEffect(() => {
    let e;
    if (!!ex) null != v.default.get(K.SubscriptionPlans.PREMIUM_MONTH_GUILD) && e5(e = (0, k.getCurrencies)(K.SubscriptionPlans.PREMIUM_MONTH_GUILD, eM, !1)), null == eM && null != eo && null != eo.paymentSourceId ? e4(eo.currency) : null != e && e4(e[0])
  }, [eM, eo, ex, JSON.stringify(e7)]);
  let e2 = (0, L.AddPaymentFlow)({
    paymentModalArgs: ef,
    initialStep: T.Step.PAYMENT_TYPE,
    prependSteps: [T.Step.PLAN_SELECT],
    appendSteps: [T.Step.REVIEW, T.Step.CONFIRM],
    breadcrumpSteps: ew,
    currentBreadcrumpStep: eY,
    onReturn: () => {
      eX(Object.values(eI).length < 1 ? T.Step.PLAN_SELECT : T.Step.REVIEW, T.Step.PAYMENT_TYPE)
    },
    onComplete: e => {
      eX(T.Step.REVIEW, e)
    },
    onStepChange: e => {
      let {
        currentStep: t,
        toStep: n
      } = e, i = Date.now();
      F.default.track(V.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...ek,
        from_step: t,
        to_step: n,
        step_duration_ms: i - eJ,
        flow_duration_ms: i - eG,
        guild_id: en
      })
    }
  });
  if (er) t = (0, l.jsx)(h.BlockedPaymentsContentModal, {
    onClose: eQ
  });
  else if (ec && ep && ex && null != e1 && "" !== e1) {
    if (null == eo ? void 0 : eo.isPausedOrPausePending) t = (0, l.jsx)(S.ModalContent, {
      children: (0, l.jsx)("p", {
        className: J.copy,
        children: q.default.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION
      })
    });
    else if (null != eo && null != eo.renewalMutations) t = (0, l.jsx)(S.ModalContent, {
      children: (0, l.jsx)("p", {
        className: J.copy,
        children: q.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_PENDING_MUTATION
      })
    });
    else if (eY === T.Step.PREMIUM_UPSELL) {
      u()(null != em, "Missing nextPremiumSubscriptionPlan"), u()(e1, "Currency not defined");
      let e = null != eM ? {
        paymentSourceId: eM,
        currency: e1
      } : {
        currency: e1
      };
      t = (0, l.jsx)(H.default, {
        premiumSubscriptionPlan: em,
        analyticsLocation: ee,
        analyticsSourceLocation: et,
        onClose: eQ,
        onBack: () => eX(T.Step.PLAN_SELECT),
        onSkip: () => eX(null != ed || eU ? T.Step.REVIEW : T.Step.ADD_PAYMENT_STEPS),
        onSubscriptionConfirmation: ea,
        priceOptions: e
      })
    } else {
      let e, n, i, s;
      u()(e1, "Currency not defined");
      let o = null != eM ? {
        paymentSourceId: eM,
        currency: e1
      } : {
        currency: e1
      };
      switch (eY) {
        case T.Step.PLAN_SELECT:
          u()(null != en, "Missing guildId"), u()(null != em, "Missing nextPremiumSubscriptionPlan"), e = (0, l.jsx)(Y.GuildBoostingPlanSelect, {
            premiumSubscriptionPlan: em,
            numGuildBoosts: eg,
            setNumGuildBoosts: eO,
            setForceDisableSubmitButton: eq,
            premiumSubscription: eo,
            existingAvailableSlots: eP,
            onClickPremiumSubscriptionLink: () => {
              if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return
              }
              eQ(), null != a && a(), (0, N.navigateToPremiumMarketingPage)()
            },
            guildId: en,
            priceOptions: o
          }), eZ && null != eo && null != eo.paymentGateway && (e = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(S.FormErrorBlock, {
              className: J.externalErrorBlock,
              children: q.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_EXTERNAL.format({
                paymentGatewayName: z.PaymentGatewayToFriendlyName[eo.paymentGateway]
              })
            }), e]
          })), i = (0, l.jsx)(S.Button, {
            look: S.Button.Looks.LINK,
            color: (0, d.isThemeLight)(eE) ? S.Button.Colors.PRIMARY : S.Button.Colors.WHITE,
            onClick: eQ,
            children: q.default.Messages.NEVERMIND
          }), s = (0, l.jsx)(S.Button, {
            type: "submit",
            disabled: ez || 0 === eg || eZ,
            onClick: () => {
              if (!es && (null == eS || eS.premiumSubscriptionType !== K.PremiumTypes.TIER_2)) {
                eX(T.Step.PREMIUM_UPSELL);
                return
              }
              eX(null != ed || eU ? T.Step.REVIEW : T.Step.ADD_PAYMENT_STEPS)
            },
            children: q.default.Messages.CONTINUE
          });
          break;
        case T.Step.ADD_PAYMENT_STEPS:
          break;
        case T.Step.AWAITING_AUTHENTICATION:
          e = (0, l.jsx)(E.AwaitingAuthenticationStepBody, {
            className: J.__invalid_body
          });
          break;
        case T.Step.REVIEW:
          u()(null != em, "Missing nextPremiumSubscriptionPlan"), e = (0, l.jsx)(Y.GuildBoostingReview, {
            paymentSources: eI,
            priceOptions: o,
            currentPremiumSubscription: eo,
            premiumSubscriptionPaymentSourceId: ed,
            premiumSubscriptionPlan: em,
            newAdditionalPlans: eB,
            onPaymentSourceChange: e => eN(null != e ? e.id : null),
            onPaymentSourceAdd: () => {
              eX(T.Step.ADD_PAYMENT_STEPS), eN(null)
            },
            onPurchaseTermsChange: eb,
            legalTermsNodeRef: e$,
            hasLegalTermsFlash: e0
          }), n = T.Step.PLAN_SELECT, s = eD ? (0, l.jsx)(S.Button, {
            color: S.Button.Colors.GREEN,
            type: "submit",
            submitting: eA,
            onClick: async () => {
              u()(null != eB, "Missing newAdditionalPlans");
              let e = null != eM ? eI[eM] : null;
              eh(null);
              try {
                if (eK(y.PurchaseState.PURCHASING), eT(!0), u()(null != eM, "Missing paymentSourceId"), F.default.track(V.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                    ...ek,
                    duration_ms: Date.now() - eG,
                    guild_id: en,
                    application_id: eu
                  }), e8) return;
                if (null == eo || null == eS) {
                  u()(null != e, "Missing paymentSource");
                  let t = await (0, p.createSubscription)({
                    items: eB,
                    paymentSource: e,
                    currency: o.currency
                  });
                  if (t.redirectConfirmation) {
                    e9(null != t.redirectURL);
                    return
                  }
                } else {
                  let t = {
                    items: (0, j.getItemsFromNewAdditionalPlans)(eo, eB)
                  };
                  t.currency = eo.currency, null == t.currency && (t.currency = o.currency), t.paymentSource = null != ed ? eI[ed] : void 0, null == t.paymentSource && (u()(null != e, "Missing paymentSource"), t.paymentSource = e, t.currency = o.currency);
                  let n = await (0, p.updateSubscription)(eo, t, ej);
                  if (n.redirectConfirmation) {
                    e9(null != n.redirectURL);
                    return
                  }
                }
                eX(T.Step.CONFIRM), eK(y.PurchaseState.COMPLETED), null != en && await $(en), null != ei && ei()
              } catch (t) {
                eK(y.PurchaseState.FAIL), eh(t), F.default.track(V.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                  ...ek,
                  payment_error_code: null == t ? void 0 : t.code,
                  payment_gateway: null != e ? e.type === V.PaymentSourceTypes.CARD ? V.PaymentGateways.STRIPE : V.PaymentGateways.BRAINTREE : null,
                  payment_source_id: eM,
                  duration_ms: Date.now() - eG
                })
              } finally {
                !e8 && eT(!1)
              }
            },
            children: q.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
          }) : (0, l.jsx)(S.Tooltip, {
            text: q.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
            children: e => (0, l.jsx)(S.Button, {
              ...e,
              color: S.Button.Colors.GREEN,
              onClick: () => {
                null != e$.current && (e$.current.scrollIntoView({
                  behavior: "smooth"
                }), e3(!0))
              },
              type: "submit",
              children: q.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
            })
          });
          break;
        case T.Step.CONFIRM:
          var e6;
          let r = g.default.getGuild(en);
          e = (0, l.jsx)(Y.GuildBoostingConfirmation, {
            guild: r,
            guildBoostQuantity: eg + eP.length,
            onClose: eQ,
            withAnimation: !1,
            paymentSourceType: null === (e6 = eI[null != eM ? eM : ""]) || void 0 === e6 ? void 0 : e6.type
          })
      }
      let c = null != eR && null == (0, T.errorToStep)(eR) ? eR : eL;
      t = eY === T.Step.ADD_PAYMENT_STEPS ? e2 : (0, l.jsx)(C.default, {
        hideBreadcrumbs: eY === T.Step.CONFIRM,
        steps: ew,
        currentStep: eY,
        paymentError: c,
        purchaseErrorBlockRef: eC,
        hasCurrencies: e7.length > 1,
        body: e,
        footer: eY !== T.Step.CONFIRM ? (0, l.jsxs)(S.ModalFooter, {
          direction: B.default.Direction.HORIZONTAL,
          align: B.default.Align.CENTER,
          justify: B.default.Justify.END,
          children: [null != n ? (0, l.jsx)("div", {
            className: J.backStep,
            children: (0, l.jsx)(S.Button, {
              color: (0, d.isThemeLight)(eE) ? S.Button.Colors.PRIMARY : S.Button.Colors.WHITE,
              look: S.Button.Looks.LINK,
              size: S.Button.Sizes.NONE,
              onClick: () => {
                null != n && eX(n)
              },
              children: q.default.Messages.BACK
            })
          }) : null, (0, l.jsxs)("div", {
            className: J.footerRight,
            children: [i, s]
          })]
        }) : null
      })
    }
  } else t = (0, l.jsx)("div", {
    className: J.loadingWrapper,
    children: (0, l.jsx)(S.Spinner, {})
  });
  let te = null;
  return !er && eY !== T.Step.PREMIUM_UPSELL && (te = (0, l.jsx)(W.default, {
    onClose: eQ,
    currentStep: eY,
    purchaseState: eV
  })), (0, l.jsxs)(S.ModalRoot, {
    transitionState: n,
    children: [te, t]
  })
}

function et(e) {
  let t = (0, c.useStateFromStores)([x.default], () => x.default.getPremiumTypeSubscription()),
    {
      analyticsLocations: n
    } = (0, f.default)(_.default.GUILD_BOOST_PURCHASE_MODAL);
  return (0, l.jsx)(f.AnalyticsLocationProvider, {
    value: n,
    children: (0, l.jsx)(M.PaymentContextProvider, {
      activeSubscription: t,
      stepConfigs: [],
      skuIDs: [],
      children: (0, l.jsx)(ee, {
        ...e
      })
    })
  })
}