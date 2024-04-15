"use strict";
n.r(t), n.d(t, {
  GuildBoostPurchaseModal: function() {
    return ee
  },
  default: function() {
    return et
  }
}), n("47120");
var l, s = n("735250"),
  a = n("470079"),
  i = n("512722"),
  u = n.n(i),
  r = n("207561"),
  o = n("153832"),
  c = n("442837"),
  d = n("780384"),
  S = n("481060"),
  p = n("355467"),
  E = n("179360"),
  m = n("723484"),
  P = n("330726"),
  _ = n("100527"),
  f = n("906732"),
  I = n("15640"),
  T = n("89057"),
  M = n("598"),
  A = n("409813"),
  N = n("45572"),
  C = n("98278"),
  y = n("431369"),
  R = n("176919"),
  L = n("3409"),
  h = n("185139"),
  U = n("210887"),
  g = n("430824"),
  O = n("314884"),
  b = n("975060"),
  D = n("853872"),
  x = n("509545"),
  B = n("78839"),
  v = n("285952"),
  j = n("626135"),
  G = n("267642"),
  k = n("74538"),
  F = n("212895"),
  w = n("296848"),
  W = n("518062"),
  H = n("4434"),
  Y = n("333451"),
  V = n("981631"),
  K = n("474936"),
  z = n("231338"),
  Z = n("689938"),
  q = n("885888");
(l || (l = {})).PREMIUM = "discord://app/settings/nitro";
let J = K.SubscriptionPlans.NONE_MONTH,
  X = [A.Step.PLAN_SELECT, A.Step.REVIEW, A.Step.CONFIRM],
  Q = [A.Step.PLAN_SELECT, A.Step.ADD_PAYMENT_STEPS, A.Step.REVIEW, A.Step.CONFIRM];
async function $(e) {
  await (0, E.fetchGuildBoostSlots)();
  let t = (0, G.getAvailableGuildBoostSlots)(O.default.boostSlots);
  return (0, E.applyToGuild)(e, t.map(e => e.id))
}

function ee(e) {
  let t, {
      transitionState: n,
      onClose: l,
      closeGuildPerksModal: i,
      analyticsLocations: E,
      analyticsLocation: ee,
      analyticsSourceLocation: et,
      guildId: en,
      onSubscribeComplete: el,
      totalNumberOfSlotsToAssign: es = 1,
      disablePremiumUpsell: ea = !1,
      onSubscriptionConfirmation: ei,
      applicationId: eu
    } = e,
    {
      activeSubscription: er,
      blockedPayments: eo
    } = (0, M.usePaymentContext)(),
    ec = (0, c.useStateFromStores)([B.default], () => B.default.hasFetchedSubscriptions()),
    ed = null != er ? er.paymentSourceId : null,
    eS = (0, c.useStateFromStores)([x.default], () => null != er ? (0, w.getOrFetchSubscriptionPlan)(er.planId) : null),
    ep = (0, c.useStateFromStores)([x.default], () => null == er || null != x.default.get(er.planId)),
    eE = (0, c.useStateFromStores)([x.default], () => null == eS ? x.default.get(J) : eS),
    em = (0, c.useStateFromStores)([U.default], () => U.default.theme),
    eP = a.useRef((0, G.getAvailableGuildBoostSlots)(O.default.boostSlots)).current,
    e_ = (0, c.useStateFromStores)([D.default], () => D.default.defaultPaymentSourceId),
    ef = (0, L.useSharedPaymentModal)(null != ed ? ed : ec ? e_ : null),
    {
      paymentSources: eI,
      setPurchaseError: eT,
      paymentSourceId: eM,
      setIsSubmittingCurrentStep: eA,
      paymentAuthenticationState: eN,
      setPaymentSourceId: eC,
      isSubmittingCurrentStep: ey,
      paymentError: eR,
      purchaseError: eL,
      purchaseErrorBlockRef: eh
    } = ef,
    eU = Object.keys(eI).length > 0,
    [eg, eO] = a.useState(es - eP.length),
    [eb, eD] = a.useState(!1),
    ex = (0, c.useStateFromStores)([b.default], () => b.default.popupCallbackCalled),
    eB = (0, I.useSubscriptionPlansLoaded)(),
    ev = a.useMemo(() => null != er && ep && eB ? (0, y.calculateAdditionalPlansWithPremiumGuildAdjustment)(er, eg) : [{
      planId: K.SubscriptionPlans.PREMIUM_MONTH_GUILD,
      quantity: eg
    }], [er, ep, eg, eB]),
    [ej, eG] = (0, r.useLazyValue)(() => [(0, o.v4)(), Date.now()]),
    {
      analyticsLocations: ek
    } = (0, f.default)(E, _.default.GUILD_BOOST_PURCHASE_MODAL),
    eF = a.useMemo(() => {
      var e, t;
      return {
        load_id: ej,
        payment_type: z.PurchaseTypeToAnalyticsPaymentType[z.PurchaseTypes.SUBSCRIPTION],
        sku_id: K.PremiumSubscriptionSKUs.GUILD,
        subscription_type: V.SubscriptionTypes.PREMIUM,
        subscription_plan_id: null !== (t = null === (e = ev.find(e => {
          let {
            planId: t
          } = e;
          return K.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
        })) || void 0 === e ? void 0 : e.planId) && void 0 !== t ? t : K.SubscriptionPlans.PREMIUM_MONTH_GUILD,
        quantity: eg,
        location: ee,
        source: et,
        location_stack: ek
      }
    }, [ej, ee, ek, et, ev, eg]);
  a.useEffect(() => {
    (0, F.fetchSubscriptionPlansOnNewPaymentSource)(eM)
  }, [eM]), a.useEffect(() => {
    (async () => {
      if (!0 === ex) try {
        if (null == b.default.redirectedPaymentId) return;
        await (0, p.redirectedPaymentSucceeded)(b.default.redirectedPaymentId), eJ(A.Step.CONFIRM), eK(N.PurchaseState.COMPLETED), null != en && await $(en), null != el && el()
      } catch (e) {
        eK(N.PurchaseState.FAIL), eT(e), j.default.track(V.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...eF,
          payment_error_code: null == e ? void 0 : e.code,
          payment_gateway: V.PaymentGateways.STRIPE,
          payment_source_id: eM,
          duration_ms: Date.now() - eG
        })
      } finally {
        eA(!1), (0, p.resetPaymentIntentId)()
      }
    })()
  }, [ex]), a.useEffect(() => {
    !B.default.hasFetchedSubscriptions() && (0, p.fetchSubscriptions)(), j.default.track(V.AnalyticEvents.PAYMENT_FLOW_STARTED, {
      ...eF,
      guild_id: en,
      application_id: eu
    }), null != er && null != er.renewalMutations && j.default.track(V.AnalyticEvents.PREMIUM_GUILD_PENDING_MODAL, {
      location: ee,
      guild_id: en
    })
  }, []);
  let [ew, eW] = a.useState(X), [eH, eY] = a.useState(A.Step.PLAN_SELECT), [eV, eK] = a.useState(N.PurchaseState.WAITING), [ez, eZ] = a.useState(!0), eq = (0, r.useStableMemo)(() => Date.now(), [eH]), eJ = a.useCallback((e, t) => {
    eY(e), eT(null);
    let n = Date.now();
    j.default.track(V.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...eF,
      from_step: null != t ? t : eH,
      to_step: e === A.Step.ADD_PAYMENT_STEPS ? A.Step.PAYMENT_TYPE : e,
      step_duration_ms: n - eq,
      flow_duration_ms: n - eG,
      guild_id: en,
      application_id: eu
    })
  }, [eT, eF, eH, eq, eG, en, eu]), eX = () => {
    l(eV === N.PurchaseState.COMPLETED)
  }, eQ = null != er && er.isPurchasedExternally;
  a.useEffect(() => {
    eN !== R.PaymentAuthenticationState.PENDING && eH !== A.Step.CONFIRM && null != ed && (ew !== X && eW(X), !X.includes(eH) && eH !== A.Step.PREMIUM_UPSELL && eJ(A.Step.REVIEW)), eH === A.Step.ADD_PAYMENT_STEPS && ew !== Q && eW(Q), eQ && eH !== A.Step.PLAN_SELECT && eY(A.Step.PLAN_SELECT)
  }, [eH, eJ, eQ, eN, er, ed, ew]), (0, R.usePaymentStepForAuthentication)(eH, eN, eJ), (0, A.usePurchaseStateForStep)(eH, eV, eK);
  let e$ = a.useRef(null),
    [e0, e1] = (0, P.default)(!1, 500),
    [e2, e5] = a.useState(null),
    [e3, e4] = a.useState([]),
    [e7, e8] = a.useState(!1);
  a.useEffect(() => {
    let e;
    if (!!eB) null != x.default.get(K.SubscriptionPlans.PREMIUM_MONTH_GUILD) && e4(e = (0, F.getCurrencies)(K.SubscriptionPlans.PREMIUM_MONTH_GUILD, eM, !1)), null == eM && null != er && null != er.paymentSourceId ? e5(er.currency) : null != e && e5(e[0])
  }, [eM, er, eB, JSON.stringify(e3)]);
  let e9 = (0, L.AddPaymentFlow)({
    paymentModalArgs: ef,
    initialStep: A.Step.PAYMENT_TYPE,
    prependSteps: [A.Step.PLAN_SELECT],
    appendSteps: [A.Step.REVIEW, A.Step.CONFIRM],
    breadcrumpSteps: ew,
    currentBreadcrumpStep: eH,
    onReturn: () => {
      eJ(Object.values(eI).length < 1 ? A.Step.PLAN_SELECT : A.Step.REVIEW, A.Step.PAYMENT_TYPE)
    },
    onComplete: e => {
      eJ(A.Step.REVIEW, e)
    },
    onStepChange: e => {
      let {
        currentStep: t,
        toStep: n
      } = e, l = Date.now();
      j.default.track(V.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...eF,
        from_step: t,
        to_step: n,
        step_duration_ms: l - eq,
        flow_duration_ms: l - eG,
        guild_id: en
      })
    }
  });
  if (eo) t = (0, s.jsx)(T.BlockedPaymentsContentModal, {
    onClose: eX
  });
  else if (ec && ep && eB && null != e2 && "" !== e2) {
    if (null == er ? void 0 : er.isPausedOrPausePending) t = (0, s.jsx)(S.ModalContent, {
      children: (0, s.jsx)("p", {
        className: q.copy,
        children: Z.default.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION
      })
    });
    else if (null != er && null != er.renewalMutations) t = (0, s.jsx)(S.ModalContent, {
      children: (0, s.jsx)("p", {
        className: q.copy,
        children: Z.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_PENDING_MUTATION
      })
    });
    else if (eH === A.Step.PREMIUM_UPSELL) {
      u()(null != eE, "Missing nextPremiumSubscriptionPlan"), u()(e2, "Currency not defined");
      let e = null != eM ? {
        paymentSourceId: eM,
        currency: e2
      } : {
        currency: e2
      };
      t = (0, s.jsx)(Y.default, {
        premiumSubscriptionPlan: eE,
        analyticsLocation: ee,
        analyticsSourceLocation: et,
        onClose: eX,
        onBack: () => eJ(A.Step.PLAN_SELECT),
        onSkip: () => eJ(null != ed || eU ? A.Step.REVIEW : A.Step.ADD_PAYMENT_STEPS),
        onSubscriptionConfirmation: ei,
        priceOptions: e
      })
    } else {
      let e, n, l, a;
      u()(e2, "Currency not defined");
      let r = null != eM ? {
        paymentSourceId: eM,
        currency: e2
      } : {
        currency: e2
      };
      switch (eH) {
        case A.Step.PLAN_SELECT:
          u()(null != en, "Missing guildId"), u()(null != eE, "Missing nextPremiumSubscriptionPlan"), e = (0, s.jsx)(H.GuildBoostingPlanSelect, {
            premiumSubscriptionPlan: eE,
            numGuildBoosts: eg,
            setNumGuildBoosts: eO,
            setForceDisableSubmitButton: eZ,
            premiumSubscription: er,
            existingAvailableSlots: eP,
            onClickPremiumSubscriptionLink: () => {
              if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return
              }
              eX(), null != i && i(), (0, C.navigateToPremiumMarketingPage)()
            },
            guildId: en,
            priceOptions: r
          }), eQ && null != er && null != er.paymentGateway && (e = (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(S.FormErrorBlock, {
              className: q.externalErrorBlock,
              children: Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_EXTERNAL.format({
                paymentGatewayName: z.PaymentGatewayToFriendlyName[er.paymentGateway]
              })
            }), e]
          })), l = (0, s.jsx)(S.Button, {
            look: S.Button.Looks.LINK,
            color: (0, d.isThemeLight)(em) ? S.Button.Colors.PRIMARY : S.Button.Colors.WHITE,
            onClick: eX,
            children: Z.default.Messages.NEVERMIND
          }), a = (0, s.jsx)(S.Button, {
            type: "submit",
            disabled: ez || 0 === eg || eQ,
            onClick: () => {
              if (!ea && (null == eS || eS.premiumSubscriptionType !== K.PremiumTypes.TIER_2)) {
                eJ(A.Step.PREMIUM_UPSELL);
                return
              }
              eJ(null != ed || eU ? A.Step.REVIEW : A.Step.ADD_PAYMENT_STEPS)
            },
            children: Z.default.Messages.CONTINUE
          });
          break;
        case A.Step.ADD_PAYMENT_STEPS:
          break;
        case A.Step.AWAITING_AUTHENTICATION:
          e = (0, s.jsx)(m.AwaitingAuthenticationStepBody, {
            className: q.__invalid_body
          });
          break;
        case A.Step.REVIEW:
          u()(null != eE, "Missing nextPremiumSubscriptionPlan"), e = (0, s.jsx)(H.GuildBoostingReview, {
            paymentSources: eI,
            priceOptions: r,
            currentPremiumSubscription: er,
            premiumSubscriptionPaymentSourceId: ed,
            premiumSubscriptionPlan: eE,
            newAdditionalPlans: ev,
            onPaymentSourceChange: e => eC(null != e ? e.id : null),
            onPaymentSourceAdd: () => {
              eJ(A.Step.ADD_PAYMENT_STEPS), eC(null)
            },
            onPurchaseTermsChange: eD,
            legalTermsNodeRef: e$,
            hasLegalTermsFlash: e0
          }), n = A.Step.PLAN_SELECT, a = eb ? (0, s.jsx)(S.Button, {
            color: S.Button.Colors.GREEN,
            type: "submit",
            submitting: ey,
            onClick: async () => {
              u()(null != ev, "Missing newAdditionalPlans");
              let e = null != eM ? eI[eM] : null;
              eT(null);
              try {
                if (eK(N.PurchaseState.PURCHASING), eA(!0), u()(null != eM, "Missing paymentSourceId"), j.default.track(V.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                    ...eF,
                    duration_ms: Date.now() - eG,
                    guild_id: en,
                    application_id: eu
                  }), e7) return;
                if (null == er || null == eS) {
                  u()(null != e, "Missing paymentSource");
                  let t = await (0, p.createSubscription)({
                    items: ev,
                    paymentSource: e,
                    currency: r.currency
                  });
                  if (t.redirectConfirmation) {
                    e8(null != t.redirectURL);
                    return
                  }
                } else {
                  let t = {
                    items: (0, k.getItemsFromNewAdditionalPlans)(er, ev)
                  };
                  t.currency = er.currency, null == t.currency && (t.currency = r.currency), t.paymentSource = null != ed ? eI[ed] : void 0, null == t.paymentSource && (u()(null != e, "Missing paymentSource"), t.paymentSource = e, t.currency = r.currency);
                  let n = await (0, p.updateSubscription)(er, t, ek);
                  if (n.redirectConfirmation) {
                    e8(null != n.redirectURL);
                    return
                  }
                }
                eJ(A.Step.CONFIRM), eK(N.PurchaseState.COMPLETED), null != en && await $(en), null != el && el()
              } catch (t) {
                eK(N.PurchaseState.FAIL), eT(t), j.default.track(V.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                  ...eF,
                  payment_error_code: null == t ? void 0 : t.code,
                  payment_gateway: null != e ? e.type === V.PaymentSourceTypes.CARD ? V.PaymentGateways.STRIPE : V.PaymentGateways.BRAINTREE : null,
                  payment_source_id: eM,
                  duration_ms: Date.now() - eG
                })
              } finally {
                !e7 && eA(!1)
              }
            },
            children: Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
          }) : (0, s.jsx)(S.Tooltip, {
            text: Z.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
            children: e => (0, s.jsx)(S.Button, {
              ...e,
              color: S.Button.Colors.GREEN,
              onClick: () => {
                null != e$.current && (e$.current.scrollIntoView({
                  behavior: "smooth"
                }), e1(!0))
              },
              type: "submit",
              children: Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
            })
          });
          break;
        case A.Step.CONFIRM:
          var e6;
          let o = g.default.getGuild(en);
          e = (0, s.jsx)(H.GuildBoostingConfirmation, {
            guild: o,
            guildBoostQuantity: eg + eP.length,
            onClose: eX,
            withAnimation: !1,
            paymentSourceType: null === (e6 = eI[null != eM ? eM : ""]) || void 0 === e6 ? void 0 : e6.type
          })
      }
      let c = null != eR && null == (0, A.errorToStep)(eR) ? eR : eL;
      t = eH === A.Step.ADD_PAYMENT_STEPS ? e9 : (0, s.jsx)(h.default, {
        hideBreadcrumbs: eH === A.Step.CONFIRM,
        steps: ew,
        currentStep: eH,
        paymentError: c,
        purchaseErrorBlockRef: eh,
        hasCurrencies: e3.length > 1,
        body: e,
        footer: eH !== A.Step.CONFIRM ? (0, s.jsxs)(S.ModalFooter, {
          direction: v.default.Direction.HORIZONTAL,
          align: v.default.Align.CENTER,
          justify: v.default.Justify.END,
          children: [null != n ? (0, s.jsx)("div", {
            className: q.backStep,
            children: (0, s.jsx)(S.Button, {
              color: (0, d.isThemeLight)(em) ? S.Button.Colors.PRIMARY : S.Button.Colors.WHITE,
              look: S.Button.Looks.LINK,
              size: S.Button.Sizes.NONE,
              onClick: () => {
                null != n && eJ(n)
              },
              children: Z.default.Messages.BACK
            })
          }) : null, (0, s.jsxs)("div", {
            className: q.footerRight,
            children: [l, a]
          })]
        }) : null
      })
    }
  } else t = (0, s.jsx)("div", {
    className: q.loadingWrapper,
    children: (0, s.jsx)(S.Spinner, {})
  });
  let te = null;
  return !eo && eH !== A.Step.PREMIUM_UPSELL && (te = (0, s.jsx)(W.default, {
    onClose: eX,
    currentStep: eH,
    purchaseState: eV
  })), (0, s.jsxs)(S.ModalRoot, {
    transitionState: n,
    children: [te, t]
  })
}

function et(e) {
  let t = (0, c.useStateFromStores)([B.default], () => B.default.getPremiumTypeSubscription()),
    {
      analyticsLocations: n
    } = (0, f.default)(_.default.GUILD_BOOST_PURCHASE_MODAL);
  return (0, s.jsx)(f.AnalyticsLocationProvider, {
    value: n,
    children: (0, s.jsx)(M.PaymentContextProvider, {
      activeSubscription: t,
      stepConfigs: [],
      skuIDs: [],
      children: (0, s.jsx)(ee, {
        ...e
      })
    })
  })
}