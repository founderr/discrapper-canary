"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120"), n("789020");
var a = n("735250"),
  r = n("470079"),
  s = n("512722"),
  l = n.n(s),
  u = n("481060"),
  i = n("330726"),
  o = n("716534"),
  c = n("171246"),
  d = n("598"),
  f = n("409813"),
  _ = n("45572"),
  I = n("51499"),
  E = n("678334"),
  S = n("456251"),
  P = n("614277"),
  N = n("698708"),
  A = n("43542"),
  C = n("689938"),
  m = n("470493");

function T(e) {
  var t;
  let {
    backButtonEligible: n,
    prevStep: s,
    showGuildPicker: T,
    handleStepChange: p,
    trialFooterMessageOverride: O,
    reviewWarningMessage: R,
    planGroup: M,
    openInvoiceId: L,
    analyticsData: h,
    analyticsLocation: g,
    eligibleApplicationSubscriptionGuilds: y,
    handleClose: b
  } = e, {
    activeSubscription: U,
    application: x,
    setUpdatedSubscription: D,
    contextMetadata: v,
    currencies: B,
    paymentSources: k,
    priceOptions: j,
    purchaseError: G,
    purchaseTokenAuthState: H,
    selectedPlan: F,
    selectedSku: Y,
    setCurrency: w,
    setPaymentSourceId: W,
    setPurchaseState: V,
    setPurchaseError: Z,
    purchaseState: K,
    subscriptionMetadataRequest: z,
    setSubscriptionMetadataRequest: X,
    setHasAcceptedTerms: J
  } = (0, d.usePaymentContext)();
  l()(null != F, "Expected plan to be selected"), l()(null != x, "Expected application");
  let Q = r.useRef(null),
    [q, $] = (0, i.default)(!1, 500),
    [ee, et] = r.useState(null == z ? void 0 : z.guild_id),
    en = (0, c.isApplicationUserSubscription)(null !== (t = null == Y ? void 0 : Y.flags) && void 0 !== t ? t : 0);
  r.useEffect(() => {
    null != G && null != Q.current && Q.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [G]);
  let ea = r.useCallback(e => {
      D(e), p(f.Step.CONFIRM)
    }, [p, D]),
    er = r.useCallback(e => {
      et(e), X({
        ...z,
        guild_id: e
      })
    }, [et, X, z]),
    es = r.useRef(null);
  return K === _.PurchaseState.PURCHASING ? (0, a.jsx)(S.default, {}) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(I.default, {
      className: m.breadcrumbs
    }), (0, a.jsxs)(P.PaymentPortalBody, {
      children: [(0, a.jsx)(N.default, {}), en && (0, a.jsxs)("div", {
        className: m.userSubscriptionDetailsContainer,
        children: [(0, a.jsx)(u.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: C.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: C.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
            applicationName: x.name
          })
        })]
      }), T && !en && (0, a.jsxs)("div", {
        className: m.guildPickerContainer,
        children: [(0, a.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H5,
          children: C.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
        }), (0, a.jsx)(u.FormText, {
          type: u.FormText.Types.DESCRIPTION,
          className: m.guildPickerDescription,
          children: C.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
        }), (0, a.jsx)(A.GuildPickerDropdown, {
          selectedGuildId: ee,
          onGuildChange: er,
          eligibleApplicationSubscriptionGuilds: y
        })]
      }), (0, a.jsx)(o.default, {
        selectedPlanId: F.id,
        paymentSources: k,
        onPaymentSourceChange: e => W(null != e ? e.id : null),
        priceOptions: j,
        currencies: B,
        onCurrencyChange: e => w(e),
        handlePaymentSourceAdd: () => p(f.Step.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: J,
        legalTermsNodeRef: es,
        hasLegalTermsFlash: q,
        trialFooterMessageOverride: O,
        reviewWarningMessage: R,
        metadata: T || en ? void 0 : z,
        purchaseState: K,
        hideSubscriptionDetails: !0,
        handleClose: b
      })]
    }), (0, a.jsx)(P.PaymentPortalFooter, {
      children: (0, a.jsx)(E.default, {
        premiumSubscription: null != U ? U : null,
        setPurchaseState: V,
        onBack: () => null != s && p(s),
        onNext: ea,
        onPurchaseError: e => Z(e),
        legalTermsNodeRef: es,
        flashLegalTerms: () => $(!0),
        analyticsLocation: g,
        baseAnalyticsData: h,
        flowStartTime: v.startTime,
        planGroup: M,
        purchaseTokenAuthState: H,
        openInvoiceId: L,
        metadata: en ? void 0 : z,
        backButtonEligible: n,
        invoiceError: null,
        disablePurchase: (null == z ? void 0 : z.guild_id) == null && !en
      })
    })]
  })
}