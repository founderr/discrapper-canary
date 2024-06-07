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
  _ = n("723484"),
  P = n("330726"),
  m = n("100527"),
  I = n("906732"),
  f = n("15640"),
  T = n("89057"),
  M = n("598"),
  N = n("409813"),
  A = n("45572"),
  L = n("98278"),
  R = n("431369"),
  y = n("176919"),
  C = n("3409"),
  h = n("185139"),
  U = n("210887"),
  g = n("430824"),
  O = n("314884"),
  b = n("975060"),
  D = n("853872"),
  x = n("509545"),
  B = n("78839"),
  k = n("285952"),
  j = n("626135"),
  v = n("267642"),
  G = n("74538"),
  F = n("212895"),
  w = n("296848"),
  W = n("518062"),
  Y = n("4434"),
  H = n("333451"),
  V = n("981631"),
  K = n("474936"),
  z = n("231338"),
  J = n("689938"),
  X = n("732998");
(l || (l = {})).PREMIUM = "discord://app/settings/nitro";
let q = K.SubscriptionPlans.NONE_MONTH,
  Q = [N.Step.PLAN_SELECT, N.Step.REVIEW, N.Step.CONFIRM],
  Z = [N.Step.PLAN_SELECT, N.Step.ADD_PAYMENT_STEPS, N.Step.REVIEW, N.Step.CONFIRM];
async function $(e) {
  await (0, E.fetchGuildBoostSlots)();
  let t = (0, v.getAvailableGuildBoostSlots)(O.default.boostSlots);
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
    eE = (0, c.useStateFromStores)([x.default], () => null == eS ? x.default.get(q) : eS),
    e_ = (0, c.useStateFromStores)([U.default], () => U.default.theme),
    eP = a.useRef((0, v.getAvailableGuildBoostSlots)(O.default.boostSlots)).current,
    em = (0, c.useStateFromStores)([D.default], () => D.default.defaultPaymentSourceId),
    eI = (0, C.useSharedPaymentModal)(null != ed ? ed : ec ? em : null),
    {
      paymentSources: ef,
      setPurchaseError: eT,
      paymentSourceId: eM,
      setIsSubmittingCurrentStep: eN,
      paymentAuthenticationState: eA,
      setPaymentSourceId: eL,
      isSubmittingCurrentStep: eR,
      paymentError: ey,
      purchaseError: eC,
      purchaseErrorBlockRef: eh
    } = eI,
    eU = Object.keys(ef).length > 0,
    [eg, eO] = a.useState(es - eP.length),
    [eb, eD] = a.useState(!1),
    ex = (0, c.useStateFromStores)([b.default], () => b.default.popupCallbackCalled),
    eB = (0, f.useSubscriptionPlansLoaded)(),
    ek = a.useMemo(() => null != er && ep && eB ? (0, R.calculateAdditionalPlansWithPremiumGuildAdjustment)(er, eg) : [{
      planId: K.SubscriptionPlans.PREMIUM_MONTH_GUILD,
      quantity: eg
    }], [er, ep, eg, eB]),
    [ej, ev] = (0, r.useLazyValue)(() => [(0, o.v4)(), Date.now()]),
    {
      analyticsLocations: eG
    } = (0, I.default)(E, m.default.GUILD_BOOST_PURCHASE_MODAL),
    eF = a.useMemo(() => {
      var e, t;
      return {
        load_id: ej,
        payment_type: z.PurchaseTypeToAnalyticsPaymentType[z.PurchaseTypes.SUBSCRIPTION],
        sku_id: K.PremiumSubscriptionSKUs.GUILD,
        subscription_type: V.SubscriptionTypes.PREMIUM,
        subscription_plan_id: null !== (t = null === (e = ek.find(e => {
          let {
            planId: t
          } = e;
          return K.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
        })) || void 0 === e ? void 0 : e.planId) && void 0 !== t ? t : K.SubscriptionPlans.PREMIUM_MONTH_GUILD,
        quantity: eg,
        location: ee,
        source: et,
        location_stack: eG
      }
    }, [ej, ee, eG, et, ek, eg]);
  a.useEffect(() => {
    (0, F.fetchSubscriptionPlansOnNewPaymentSource)(eM)
  }, [eM]), a.useEffect(() => {
    (async () => {
      if (!0 === ex) try {
        if (null == b.default.redirectedPaymentId) return;
        await (0, p.redirectedPaymentSucceeded)(b.default.redirectedPaymentId), eq(N.Step.CONFIRM), eK(A.PurchaseState.COMPLETED), null != en && await $(en), null != el && el()
      } catch (e) {
        eK(A.PurchaseState.FAIL), eT(e), j.default.track(V.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...eF,
          payment_error_code: null == e ? void 0 : e.code,
          payment_gateway: V.PaymentGateways.STRIPE,
          payment_source_id: eM,
          duration_ms: Date.now() - ev
        })
      } finally {
        eN(!1), (0, p.resetPaymentIntentId)()
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
  let [ew, eW] = a.useState(Q), [eY, eH] = a.useState(N.Step.PLAN_SELECT), [eV, eK] = a.useState(A.PurchaseState.WAITING), [ez, eJ] = a.useState(!0), eX = (0, r.useStableMemo)(() => Date.now(), [eY]), eq = a.useCallback((e, t) => {
    eH(e), eT(null);
    let n = Date.now();
    j.default.track(V.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...eF,
      from_step: null != t ? t : eY,
      to_step: e === N.Step.ADD_PAYMENT_STEPS ? N.Step.PAYMENT_TYPE : e,
      step_duration_ms: n - eX,
      flow_duration_ms: n - ev,
      guild_id: en,
      application_id: eu
    })
  }, [eT, eF, eY, eX, ev, en, eu]), eQ = () => {
    l(eV === A.PurchaseState.COMPLETED)
  }, eZ = null != er && er.isPurchasedExternally;
  a.useEffect(() => {
    eA !== y.PaymentAuthenticationState.PENDING && eY !== N.Step.CONFIRM && null != ed && (ew !== Q && eW(Q), !Q.includes(eY) && eY !== N.Step.PREMIUM_UPSELL && eq(N.Step.REVIEW)), eY === N.Step.ADD_PAYMENT_STEPS && ew !== Z && eW(Z), eZ && eY !== N.Step.PLAN_SELECT && eH(N.Step.PLAN_SELECT)
  }, [eY, eq, eZ, eA, er, ed, ew]), (0, y.usePaymentStepForAuthentication)(eY, eA, eq), (0, N.usePurchaseStateForStep)(eY, eV, eK);
  let e$ = a.useRef(null),
    [e0, e1] = (0, P.default)(!1, 500),
    [e3, e4] = a.useState(null),
    [e5, e2] = a.useState([]),
    [e7, e8] = a.useState(!1);
  a.useEffect(() => {
    let e;
    if (!!eB) null != x.default.get(K.SubscriptionPlans.PREMIUM_MONTH_GUILD) && e2(e = (0, F.getCurrencies)(K.SubscriptionPlans.PREMIUM_MONTH_GUILD, eM, !1)), null == eM && null != er && null != er.paymentSourceId ? e4(er.currency) : null != e && e4(e[0])
  }, [eM, er, eB, JSON.stringify(e5)]);
  let e9 = (0, C.AddPaymentFlow)({
    paymentModalArgs: eI,
    initialStep: N.Step.PAYMENT_TYPE,
    prependSteps: [N.Step.PLAN_SELECT],
    appendSteps: [N.Step.REVIEW, N.Step.CONFIRM],
    breadcrumpSteps: ew,
    currentBreadcrumpStep: eY,
    onReturn: () => {
      eq(Object.values(ef).length < 1 ? N.Step.PLAN_SELECT : N.Step.REVIEW, N.Step.PAYMENT_TYPE)
    },
    onComplete: e => {
      eq(N.Step.REVIEW, e)
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
        step_duration_ms: l - eX,
        flow_duration_ms: l - ev,
        guild_id: en
      })
    }
  });
  if (eo) t = (0, s.jsx)(T.BlockedPaymentsContentModal, {
    onClose: eQ
  });
  else if (ec && ep && eB && null != e3 && "" !== e3) {
    if (null == er ? void 0 : er.isPausedOrPausePending) t = (0, s.jsx)(S.ModalContent, {
      children: (0, s.jsx)("p", {
        className: X.copy,
        children: J.default.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION
      })
    });
    else if (null != er && null != er.renewalMutations) t = (0, s.jsx)(S.ModalContent, {
      children: (0, s.jsx)("p", {
        className: X.copy,
        children: J.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_PENDING_MUTATION
      })
    });
    else if (eY === N.Step.PREMIUM_UPSELL) {
      u()(null != eE, "Missing nextPremiumSubscriptionPlan"), u()(e3, "Currency not defined");
      let e = null != eM ? {
        paymentSourceId: eM,
        currency: e3
      } : {
        currency: e3
      };
      t = (0, s.jsx)(H.default, {
        premiumSubscriptionPlan: eE,
        analyticsLocation: ee,
        analyticsSourceLocation: et,
        onClose: eQ,
        onBack: () => eq(N.Step.PLAN_SELECT),
        onSkip: () => eq(null != ed || eU ? N.Step.REVIEW : N.Step.ADD_PAYMENT_STEPS),
        onSubscriptionConfirmation: ei,
        priceOptions: e
      })
    } else {
      let e, n, l, a;
      u()(e3, "Currency not defined");
      let r = null != eM ? {
        paymentSourceId: eM,
        currency: e3
      } : {
        currency: e3
      };
      switch (eY) {
        case N.Step.PLAN_SELECT:
          u()(null != en, "Missing guildId"), u()(null != eE, "Missing nextPremiumSubscriptionPlan"), e = (0, s.jsx)(Y.GuildBoostingPlanSelect, {
            premiumSubscriptionPlan: eE,
            numGuildBoosts: eg,
            setNumGuildBoosts: eO,
            setForceDisableSubmitButton: eJ,
            premiumSubscription: er,
            existingAvailableSlots: eP,
            onClickPremiumSubscriptionLink: () => {
              if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return
              }
              eQ(), null != i && i(), (0, L.navigateToPremiumMarketingPage)()
            },
            guildId: en,
            priceOptions: r
          }), eZ && null != er && null != er.paymentGateway && (e = (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(S.FormErrorBlock, {
              className: X.externalErrorBlock,
              children: J.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_EXTERNAL.format({
                paymentGatewayName: z.PaymentGatewayToFriendlyName[er.paymentGateway]
              })
            }), e]
          })), l = (0, s.jsx)(S.Button, {
            look: S.Button.Looks.LINK,
            color: (0, d.isThemeLight)(e_) ? S.Button.Colors.PRIMARY : S.Button.Colors.WHITE,
            onClick: eQ,
            children: J.default.Messages.NEVERMIND
          }), a = (0, s.jsx)(S.Button, {
            type: "submit",
            disabled: ez || 0 === eg || eZ,
            onClick: () => {
              if (!ea && (null == eS || eS.premiumSubscriptionType !== K.PremiumTypes.TIER_2)) {
                eq(N.Step.PREMIUM_UPSELL);
                return
              }
              eq(null != ed || eU ? N.Step.REVIEW : N.Step.ADD_PAYMENT_STEPS)
            },
            children: J.default.Messages.CONTINUE
          });
          break;
        case N.Step.ADD_PAYMENT_STEPS:
          break;
        case N.Step.AWAITING_AUTHENTICATION:
          e = (0, s.jsx)(_.AwaitingAuthenticationStepBody, {
            className: X.__invalid_body
          });
          break;
        case N.Step.REVIEW:
          u()(null != eE, "Missing nextPremiumSubscriptionPlan"), e = (0, s.jsx)(Y.GuildBoostingReview, {
            paymentSources: ef,
            priceOptions: r,
            currentPremiumSubscription: er,
            premiumSubscriptionPaymentSourceId: ed,
            premiumSubscriptionPlan: eE,
            newAdditionalPlans: ek,
            onPaymentSourceChange: e => eL(null != e ? e.id : null),
            onPaymentSourceAdd: () => {
              eq(N.Step.ADD_PAYMENT_STEPS), eL(null)
            },
            onPurchaseTermsChange: eD,
            legalTermsNodeRef: e$,
            hasLegalTermsFlash: e0
          }), n = N.Step.PLAN_SELECT, a = eb ? (0, s.jsx)(S.Button, {
            color: S.Button.Colors.GREEN,
            type: "submit",
            submitting: eR,
            onClick: async () => {
              u()(null != ek, "Missing newAdditionalPlans");
              let e = null != eM ? ef[eM] : null;
              eT(null);
              try {
                if (eK(A.PurchaseState.PURCHASING), eN(!0), u()(null != eM, "Missing paymentSourceId"), j.default.track(V.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                    ...eF,
                    duration_ms: Date.now() - ev,
                    guild_id: en,
                    application_id: eu
                  }), e7) return;
                if (null == er || null == eS) {
                  u()(null != e, "Missing paymentSource");
                  let t = await (0, p.createSubscription)({
                    items: ek,
                    paymentSource: e,
                    currency: r.currency
                  });
                  if (t.redirectConfirmation) {
                    e8(null != t.redirectURL);
                    return
                  }
                } else {
                  let t = {
                    items: (0, G.getItemsFromNewAdditionalPlans)(er, ek)
                  };
                  t.currency = er.currency, null == t.currency && (t.currency = r.currency), t.paymentSource = null != ed ? ef[ed] : void 0, null == t.paymentSource && (u()(null != e, "Missing paymentSource"), t.paymentSource = e, t.currency = r.currency);
                  let n = await (0, p.updateSubscription)(er, t, eG);
                  if (n.redirectConfirmation) {
                    e8(null != n.redirectURL);
                    return
                  }
                }
                eq(N.Step.CONFIRM), eK(A.PurchaseState.COMPLETED), null != en && await $(en), null != el && el()
              } catch (t) {
                eK(A.PurchaseState.FAIL), eT(t), j.default.track(V.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                  ...eF,
                  payment_error_code: null == t ? void 0 : t.code,
                  payment_gateway: null != e ? e.type === V.PaymentSourceTypes.CARD ? V.PaymentGateways.STRIPE : V.PaymentGateways.BRAINTREE : null,
                  payment_source_id: eM,
                  duration_ms: Date.now() - ev
                })
              } finally {
                !e7 && eN(!1)
              }
            },
            children: J.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
          }) : (0, s.jsx)(S.Tooltip, {
            text: J.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
            children: e => (0, s.jsx)(S.Button, {
              ...e,
              color: S.Button.Colors.GREEN,
              onClick: () => {
                null != e$.current && (e$.current.scrollIntoView({
                  behavior: "smooth"
                }), e1(!0))
              },
              type: "submit",
              children: J.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
            })
          });
          break;
        case N.Step.CONFIRM:
          var e6;
          let o = g.default.getGuild(en);
          e = (0, s.jsx)(Y.GuildBoostingConfirmation, {
            guild: o,
            guildBoostQuantity: eg + eP.length,
            onClose: eQ,
            withAnimation: !1,
            paymentSourceType: null === (e6 = ef[null != eM ? eM : ""]) || void 0 === e6 ? void 0 : e6.type
          })
      }
      let c = null != ey && null == (0, N.errorToStep)(ey) ? ey : eC;
      t = eY === N.Step.ADD_PAYMENT_STEPS ? e9 : (0, s.jsx)(h.default, {
        hideBreadcrumbs: eY === N.Step.CONFIRM,
        steps: ew,
        currentStep: eY,
        paymentError: c,
        purchaseErrorBlockRef: eh,
        hasCurrencies: e5.length > 1,
        body: e,
        footer: eY !== N.Step.CONFIRM ? (0, s.jsxs)(S.ModalFooter, {
          direction: k.default.Direction.HORIZONTAL,
          align: k.default.Align.CENTER,
          justify: k.default.Justify.END,
          children: [null != n ? (0, s.jsx)("div", {
            className: X.backStep,
            children: (0, s.jsx)(S.Button, {
              color: (0, d.isThemeLight)(e_) ? S.Button.Colors.PRIMARY : S.Button.Colors.WHITE,
              look: S.Button.Looks.LINK,
              size: S.Button.Sizes.NONE,
              onClick: () => {
                null != n && eq(n)
              },
              children: J.default.Messages.BACK
            })
          }) : null, (0, s.jsxs)("div", {
            className: X.footerRight,
            children: [l, a]
          })]
        }) : null
      })
    }
  } else t = (0, s.jsx)("div", {
    className: X.loadingWrapper,
    children: (0, s.jsx)(S.Spinner, {})
  });
  let te = null;
  return !eo && eY !== N.Step.PREMIUM_UPSELL && (te = (0, s.jsx)(W.default, {
    onClose: eQ,
    currentStep: eY,
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
    } = (0, I.default)(m.default.GUILD_BOOST_PURCHASE_MODAL);
  return (0, s.jsx)(I.AnalyticsLocationProvider, {
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