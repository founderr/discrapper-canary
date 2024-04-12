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
  h = n("15640"),
  I = n("89057"),
  M = n("598"),
  T = n("409813"),
  y = n("45572"),
  N = n("98278"),
  A = n("431369"),
  R = n("176919"),
  C = n("3409"),
  L = n("185139"),
  U = n("210887"),
  g = n("430824"),
  O = n("314884"),
  D = n("975060"),
  v = n("853872"),
  b = n("509545"),
  x = n("78839"),
  B = n("285952"),
  F = n("626135"),
  G = n("267642"),
  j = n("74538"),
  k = n("212895"),
  w = n("296848"),
  W = n("518062"),
  H = n("4434"),
  Y = n("333451"),
  V = n("981631"),
  K = n("474936"),
  z = n("231338"),
  Z = n("689938"),
  q = n("885888");
(i || (i = {})).PREMIUM = "discord://app/settings/nitro";
let J = K.SubscriptionPlans.NONE_MONTH,
  X = [T.Step.PLAN_SELECT, T.Step.REVIEW, T.Step.CONFIRM],
  Q = [T.Step.PLAN_SELECT, T.Step.ADD_PAYMENT_STEPS, T.Step.REVIEW, T.Step.CONFIRM];
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
    eS = (0, c.useStateFromStores)([b.default], () => null != eo ? (0, w.getOrFetchSubscriptionPlan)(eo.planId) : null),
    ep = (0, c.useStateFromStores)([b.default], () => null == eo || null != b.default.get(eo.planId)),
    em = (0, c.useStateFromStores)([b.default], () => null == eS ? b.default.get(J) : eS),
    eE = (0, c.useStateFromStores)([U.default], () => U.default.theme),
    eP = s.useRef((0, G.getAvailableGuildBoostSlots)(O.default.boostSlots)).current,
    e_ = (0, c.useStateFromStores)([v.default], () => v.default.defaultPaymentSourceId),
    ef = (0, C.useSharedPaymentModal)(null != ed ? ed : ec ? e_ : null),
    {
      paymentSources: eh,
      setPurchaseError: eI,
      paymentSourceId: eM,
      setIsSubmittingCurrentStep: eT,
      paymentAuthenticationState: ey,
      setPaymentSourceId: eN,
      isSubmittingCurrentStep: eA,
      paymentError: eR,
      purchaseError: eC,
      purchaseErrorBlockRef: eL
    } = ef,
    eU = Object.keys(eh).length > 0,
    [eg, eO] = s.useState(el - eP.length),
    [eD, ev] = s.useState(!1),
    eb = (0, c.useStateFromStores)([D.default], () => D.default.popupCallbackCalled),
    ex = (0, h.useSubscriptionPlansLoaded)(),
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
      if (!0 === eb) try {
        if (null == D.default.redirectedPaymentId) return;
        await (0, p.redirectedPaymentSucceeded)(D.default.redirectedPaymentId), eJ(T.Step.CONFIRM), eK(y.PurchaseState.COMPLETED), null != en && await $(en), null != ei && ei()
      } catch (e) {
        eK(y.PurchaseState.FAIL), eI(e), F.default.track(V.AnalyticEvents.PAYMENT_FLOW_FAILED, {
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
  }, [eb]), s.useEffect(() => {
    !x.default.hasFetchedSubscriptions() && (0, p.fetchSubscriptions)(), F.default.track(V.AnalyticEvents.PAYMENT_FLOW_STARTED, {
      ...ek,
      guild_id: en,
      application_id: eu
    }), null != eo && null != eo.renewalMutations && F.default.track(V.AnalyticEvents.PREMIUM_GUILD_PENDING_MODAL, {
      location: ee,
      guild_id: en
    })
  }, []);
  let [ew, eW] = s.useState(X), [eH, eY] = s.useState(T.Step.PLAN_SELECT), [eV, eK] = s.useState(y.PurchaseState.WAITING), [ez, eZ] = s.useState(!0), eq = (0, o.useStableMemo)(() => Date.now(), [eH]), eJ = s.useCallback((e, t) => {
    eY(e), eI(null);
    let n = Date.now();
    F.default.track(V.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...ek,
      from_step: null != t ? t : eH,
      to_step: e === T.Step.ADD_PAYMENT_STEPS ? T.Step.PAYMENT_TYPE : e,
      step_duration_ms: n - eq,
      flow_duration_ms: n - eG,
      guild_id: en,
      application_id: eu
    })
  }, [eI, ek, eH, eq, eG, en, eu]), eX = () => {
    i(eV === y.PurchaseState.COMPLETED)
  }, eQ = null != eo && eo.isPurchasedExternally;
  s.useEffect(() => {
    ey !== R.PaymentAuthenticationState.PENDING && eH !== T.Step.CONFIRM && null != ed && (ew !== X && eW(X), !X.includes(eH) && eH !== T.Step.PREMIUM_UPSELL && eJ(T.Step.REVIEW)), eH === T.Step.ADD_PAYMENT_STEPS && ew !== Q && eW(Q), eQ && eH !== T.Step.PLAN_SELECT && eY(T.Step.PLAN_SELECT)
  }, [eH, eJ, eQ, ey, eo, ed, ew]), (0, R.usePaymentStepForAuthentication)(eH, ey, eJ), (0, T.usePurchaseStateForStep)(eH, eV, eK);
  let e$ = s.useRef(null),
    [e0, e1] = (0, P.default)(!1, 500),
    [e2, e3] = s.useState(null),
    [e5, e7] = s.useState([]),
    [e4, e8] = s.useState(!1);
  s.useEffect(() => {
    let e;
    if (!!ex) null != b.default.get(K.SubscriptionPlans.PREMIUM_MONTH_GUILD) && e7(e = (0, k.getCurrencies)(K.SubscriptionPlans.PREMIUM_MONTH_GUILD, eM, !1)), null == eM && null != eo && null != eo.paymentSourceId ? e3(eo.currency) : null != e && e3(e[0])
  }, [eM, eo, ex, JSON.stringify(e5)]);
  let e9 = (0, C.AddPaymentFlow)({
    paymentModalArgs: ef,
    initialStep: T.Step.PAYMENT_TYPE,
    prependSteps: [T.Step.PLAN_SELECT],
    appendSteps: [T.Step.REVIEW, T.Step.CONFIRM],
    breadcrumpSteps: ew,
    currentBreadcrumpStep: eH,
    onReturn: () => {
      eJ(Object.values(eh).length < 1 ? T.Step.PLAN_SELECT : T.Step.REVIEW, T.Step.PAYMENT_TYPE)
    },
    onComplete: e => {
      eJ(T.Step.REVIEW, e)
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
        step_duration_ms: i - eq,
        flow_duration_ms: i - eG,
        guild_id: en
      })
    }
  });
  if (er) t = (0, l.jsx)(I.BlockedPaymentsContentModal, {
    onClose: eX
  });
  else if (ec && ep && ex && null != e2 && "" !== e2) {
    if (null == eo ? void 0 : eo.isPausedOrPausePending) t = (0, l.jsx)(S.ModalContent, {
      children: (0, l.jsx)("p", {
        className: q.copy,
        children: Z.default.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION
      })
    });
    else if (null != eo && null != eo.renewalMutations) t = (0, l.jsx)(S.ModalContent, {
      children: (0, l.jsx)("p", {
        className: q.copy,
        children: Z.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_PENDING_MUTATION
      })
    });
    else if (eH === T.Step.PREMIUM_UPSELL) {
      u()(null != em, "Missing nextPremiumSubscriptionPlan"), u()(e2, "Currency not defined");
      let e = null != eM ? {
        paymentSourceId: eM,
        currency: e2
      } : {
        currency: e2
      };
      t = (0, l.jsx)(Y.default, {
        premiumSubscriptionPlan: em,
        analyticsLocation: ee,
        analyticsSourceLocation: et,
        onClose: eX,
        onBack: () => eJ(T.Step.PLAN_SELECT),
        onSkip: () => eJ(null != ed || eU ? T.Step.REVIEW : T.Step.ADD_PAYMENT_STEPS),
        onSubscriptionConfirmation: ea,
        priceOptions: e
      })
    } else {
      let e, n, i, s;
      u()(e2, "Currency not defined");
      let o = null != eM ? {
        paymentSourceId: eM,
        currency: e2
      } : {
        currency: e2
      };
      switch (eH) {
        case T.Step.PLAN_SELECT:
          u()(null != en, "Missing guildId"), u()(null != em, "Missing nextPremiumSubscriptionPlan"), e = (0, l.jsx)(H.GuildBoostingPlanSelect, {
            premiumSubscriptionPlan: em,
            numGuildBoosts: eg,
            setNumGuildBoosts: eO,
            setForceDisableSubmitButton: eZ,
            premiumSubscription: eo,
            existingAvailableSlots: eP,
            onClickPremiumSubscriptionLink: () => {
              if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return
              }
              eX(), null != a && a(), (0, N.navigateToPremiumMarketingPage)()
            },
            guildId: en,
            priceOptions: o
          }), eQ && null != eo && null != eo.paymentGateway && (e = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(S.FormErrorBlock, {
              className: q.externalErrorBlock,
              children: Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_EXTERNAL.format({
                paymentGatewayName: z.PaymentGatewayToFriendlyName[eo.paymentGateway]
              })
            }), e]
          })), i = (0, l.jsx)(S.Button, {
            look: S.Button.Looks.LINK,
            color: (0, d.isThemeLight)(eE) ? S.Button.Colors.PRIMARY : S.Button.Colors.WHITE,
            onClick: eX,
            children: Z.default.Messages.NEVERMIND
          }), s = (0, l.jsx)(S.Button, {
            type: "submit",
            disabled: ez || 0 === eg || eQ,
            onClick: () => {
              if (!es && (null == eS || eS.premiumSubscriptionType !== K.PremiumTypes.TIER_2)) {
                eJ(T.Step.PREMIUM_UPSELL);
                return
              }
              eJ(null != ed || eU ? T.Step.REVIEW : T.Step.ADD_PAYMENT_STEPS)
            },
            children: Z.default.Messages.CONTINUE
          });
          break;
        case T.Step.ADD_PAYMENT_STEPS:
          break;
        case T.Step.AWAITING_AUTHENTICATION:
          e = (0, l.jsx)(E.AwaitingAuthenticationStepBody, {
            className: q.__invalid_body
          });
          break;
        case T.Step.REVIEW:
          u()(null != em, "Missing nextPremiumSubscriptionPlan"), e = (0, l.jsx)(H.GuildBoostingReview, {
            paymentSources: eh,
            priceOptions: o,
            currentPremiumSubscription: eo,
            premiumSubscriptionPaymentSourceId: ed,
            premiumSubscriptionPlan: em,
            newAdditionalPlans: eB,
            onPaymentSourceChange: e => eN(null != e ? e.id : null),
            onPaymentSourceAdd: () => {
              eJ(T.Step.ADD_PAYMENT_STEPS), eN(null)
            },
            onPurchaseTermsChange: ev,
            legalTermsNodeRef: e$,
            hasLegalTermsFlash: e0
          }), n = T.Step.PLAN_SELECT, s = eD ? (0, l.jsx)(S.Button, {
            color: S.Button.Colors.GREEN,
            type: "submit",
            submitting: eA,
            onClick: async () => {
              u()(null != eB, "Missing newAdditionalPlans");
              let e = null != eM ? eh[eM] : null;
              eI(null);
              try {
                if (eK(y.PurchaseState.PURCHASING), eT(!0), u()(null != eM, "Missing paymentSourceId"), F.default.track(V.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                    ...ek,
                    duration_ms: Date.now() - eG,
                    guild_id: en,
                    application_id: eu
                  }), e4) return;
                if (null == eo || null == eS) {
                  u()(null != e, "Missing paymentSource");
                  let t = await (0, p.createSubscription)({
                    items: eB,
                    paymentSource: e,
                    currency: o.currency
                  });
                  if (t.redirectConfirmation) {
                    e8(null != t.redirectURL);
                    return
                  }
                } else {
                  let t = {
                    items: (0, j.getItemsFromNewAdditionalPlans)(eo, eB)
                  };
                  t.currency = eo.currency, null == t.currency && (t.currency = o.currency), t.paymentSource = null != ed ? eh[ed] : void 0, null == t.paymentSource && (u()(null != e, "Missing paymentSource"), t.paymentSource = e, t.currency = o.currency);
                  let n = await (0, p.updateSubscription)(eo, t, ej);
                  if (n.redirectConfirmation) {
                    e8(null != n.redirectURL);
                    return
                  }
                }
                eJ(T.Step.CONFIRM), eK(y.PurchaseState.COMPLETED), null != en && await $(en), null != ei && ei()
              } catch (t) {
                eK(y.PurchaseState.FAIL), eI(t), F.default.track(V.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                  ...ek,
                  payment_error_code: null == t ? void 0 : t.code,
                  payment_gateway: null != e ? e.type === V.PaymentSourceTypes.CARD ? V.PaymentGateways.STRIPE : V.PaymentGateways.BRAINTREE : null,
                  payment_source_id: eM,
                  duration_ms: Date.now() - eG
                })
              } finally {
                !e4 && eT(!1)
              }
            },
            children: Z.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
          }) : (0, l.jsx)(S.Tooltip, {
            text: Z.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
            children: e => (0, l.jsx)(S.Button, {
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
        case T.Step.CONFIRM:
          var e6;
          let r = g.default.getGuild(en);
          e = (0, l.jsx)(H.GuildBoostingConfirmation, {
            guild: r,
            guildBoostQuantity: eg + eP.length,
            onClose: eX,
            withAnimation: !1,
            paymentSourceType: null === (e6 = eh[null != eM ? eM : ""]) || void 0 === e6 ? void 0 : e6.type
          })
      }
      let c = null != eR && null == (0, T.errorToStep)(eR) ? eR : eC;
      t = eH === T.Step.ADD_PAYMENT_STEPS ? e9 : (0, l.jsx)(L.default, {
        hideBreadcrumbs: eH === T.Step.CONFIRM,
        steps: ew,
        currentStep: eH,
        paymentError: c,
        purchaseErrorBlockRef: eL,
        hasCurrencies: e5.length > 1,
        body: e,
        footer: eH !== T.Step.CONFIRM ? (0, l.jsxs)(S.ModalFooter, {
          direction: B.default.Direction.HORIZONTAL,
          align: B.default.Align.CENTER,
          justify: B.default.Justify.END,
          children: [null != n ? (0, l.jsx)("div", {
            className: q.backStep,
            children: (0, l.jsx)(S.Button, {
              color: (0, d.isThemeLight)(eE) ? S.Button.Colors.PRIMARY : S.Button.Colors.WHITE,
              look: S.Button.Looks.LINK,
              size: S.Button.Sizes.NONE,
              onClick: () => {
                null != n && eJ(n)
              },
              children: Z.default.Messages.BACK
            })
          }) : null, (0, l.jsxs)("div", {
            className: q.footerRight,
            children: [i, s]
          })]
        }) : null
      })
    }
  } else t = (0, l.jsx)("div", {
    className: q.loadingWrapper,
    children: (0, l.jsx)(S.Spinner, {})
  });
  let te = null;
  return !er && eH !== T.Step.PREMIUM_UPSELL && (te = (0, l.jsx)(W.default, {
    onClose: eX,
    currentStep: eH,
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