"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120"), n("789020");
var a = n("735250"),
  r = n("470079"),
  l = n("512722"),
  s = n.n(l),
  i = n("481060"),
  u = n("330726"),
  o = n("716534"),
  d = n("171246"),
  c = n("598"),
  I = n("409813"),
  _ = n("45572"),
  f = n("51499"),
  S = n("678334"),
  E = n("456251"),
  T = n("614277"),
  P = n("698708"),
  N = n("43542"),
  m = n("689938"),
  A = n("292180");

function C(e) {
  var t;
  let {
    backButtonEligible: n,
    prevStep: l,
    showGuildPicker: C,
    handleStepChange: p,
    trialFooterMessageOverride: O,
    reviewWarningMessage: R,
    planGroup: M,
    openInvoiceId: L,
    analyticsData: h,
    analyticsLocation: g,
    eligibleApplicationSubscriptionGuilds: x,
    handleClose: U
  } = e, {
    activeSubscription: B,
    application: v,
    setUpdatedSubscription: b,
    contextMetadata: y,
    currencies: j,
    paymentSources: D,
    priceOptions: k,
    purchaseError: F,
    purchaseTokenAuthState: H,
    selectedPlan: G,
    selectedSku: w,
    setCurrency: Y,
    setPaymentSourceId: V,
    setPurchaseState: W,
    setPurchaseError: K,
    purchaseState: z,
    subscriptionMetadataRequest: Z,
    setSubscriptionMetadataRequest: J,
    setHasAcceptedTerms: Q
  } = (0, c.usePaymentContext)();
  s()(null != G, "Expected plan to be selected"), s()(null != v, "Expected application");
  let X = r.useRef(null),
    [q, $] = (0, u.default)(!1, 500),
    [ee, et] = r.useState(null == Z ? void 0 : Z.guild_id),
    en = (0, d.isApplicationUserSubscription)(null !== (t = null == w ? void 0 : w.flags) && void 0 !== t ? t : 0);
  r.useEffect(() => {
    null != F && null != X.current && X.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [F]);
  let ea = r.useCallback(e => {
      b(e), p(I.Step.CONFIRM)
    }, [p, b]),
    er = r.useCallback(e => {
      et(e), J({
        ...Z,
        guild_id: e
      })
    }, [et, J, Z]),
    el = r.useRef(null);
  return z === _.PurchaseState.PURCHASING ? (0, a.jsx)(E.default, {}) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(f.default, {
      className: A.breadcrumbs
    }), (0, a.jsxs)(T.PaymentPortalBody, {
      children: [(0, a.jsx)(P.default, {}), en && (0, a.jsxs)("div", {
        className: A.userSubscriptionDetailsContainer,
        children: [(0, a.jsx)(i.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: m.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: m.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
            applicationName: v.name
          })
        })]
      }), C && !en && (0, a.jsxs)("div", {
        className: A.guildPickerContainer,
        children: [(0, a.jsx)(i.FormTitle, {
          tag: i.FormTitleTags.H5,
          children: m.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
        }), (0, a.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: A.guildPickerDescription,
          children: m.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
        }), (0, a.jsx)(N.GuildPickerDropdown, {
          selectedGuildId: ee,
          onGuildChange: er,
          eligibleApplicationSubscriptionGuilds: x
        })]
      }), (0, a.jsx)(o.default, {
        selectedPlanId: G.id,
        paymentSources: D,
        onPaymentSourceChange: e => V(null != e ? e.id : null),
        priceOptions: k,
        currencies: j,
        onCurrencyChange: e => Y(e),
        handlePaymentSourceAdd: () => p(I.Step.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: Q,
        legalTermsNodeRef: el,
        hasLegalTermsFlash: q,
        trialFooterMessageOverride: O,
        reviewWarningMessage: R,
        metadata: C || en ? void 0 : Z,
        purchaseState: z,
        hideSubscriptionDetails: !0,
        handleClose: U
      })]
    }), (0, a.jsx)(T.PaymentPortalFooter, {
      children: (0, a.jsx)(S.default, {
        premiumSubscription: null != B ? B : null,
        setPurchaseState: W,
        onBack: () => null != l && p(l),
        onNext: ea,
        onPurchaseError: e => K(e),
        legalTermsNodeRef: el,
        flashLegalTerms: () => $(!0),
        analyticsLocation: g,
        baseAnalyticsData: h,
        flowStartTime: y.startTime,
        planGroup: M,
        purchaseTokenAuthState: H,
        openInvoiceId: L,
        metadata: en ? void 0 : Z,
        backButtonEligible: n,
        invoiceError: null,
        disablePurchase: (null == Z ? void 0 : Z.guild_id) == null && !en
      })
    })]
  })
}