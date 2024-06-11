"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("47120"), n("789020");
var a = n("735250"),
  r = n("470079"),
  s = n("512722"),
  l = n.n(s),
  i = n("481060"),
  u = n("330726"),
  o = n("716534"),
  d = n("171246"),
  c = n("598"),
  f = n("409813"),
  _ = n("45572"),
  I = n("51499"),
  E = n("678334"),
  S = n("456251"),
  P = n("614277"),
  A = n("698708"),
  C = n("43542"),
  N = n("689938"),
  T = n("470493");

function O(e) {
  var t;
  let {
    backButtonEligible: n,
    prevStep: s,
    showGuildPicker: O,
    handleStepChange: m,
    trialFooterMessageOverride: p,
    reviewWarningMessage: R,
    planGroup: L,
    openInvoiceId: M,
    analyticsData: h,
    analyticsLocation: g,
    eligibleApplicationSubscriptionGuilds: y,
    handleClose: U
  } = e, {
    activeSubscription: b,
    application: D,
    setUpdatedSubscription: x,
    contextMetadata: B,
    currencies: v,
    paymentSources: k,
    priceOptions: j,
    purchaseError: G,
    purchaseTokenAuthState: H,
    selectedPlan: Y,
    selectedSku: F,
    setCurrency: w,
    setPaymentSourceId: W,
    setPurchaseState: V,
    setPurchaseError: K,
    purchaseState: Z,
    subscriptionMetadataRequest: z,
    setSubscriptionMetadataRequest: X,
    setHasAcceptedTerms: Q
  } = (0, c.usePaymentContext)();
  l()(null != Y, "Expected plan to be selected"), l()(null != D, "Expected application");
  let J = r.useRef(null),
    [q, $] = (0, u.default)(!1, 500),
    [ee, et] = r.useState(null == z ? void 0 : z.guild_id),
    en = (0, d.isApplicationUserSubscription)(null !== (t = null == F ? void 0 : F.flags) && void 0 !== t ? t : 0);
  r.useEffect(() => {
    null != G && null != J.current && J.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [G]);
  let ea = r.useCallback(e => {
      x(e), m(f.Step.CONFIRM)
    }, [m, x]),
    er = r.useCallback(e => {
      et(e), X({
        ...z,
        guild_id: e
      })
    }, [et, X, z]),
    es = r.useRef(null);
  return Z === _.PurchaseState.PURCHASING ? (0, a.jsx)(S.default, {}) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(I.default, {
      className: T.breadcrumbs
    }), (0, a.jsxs)(P.PaymentPortalBody, {
      children: [(0, a.jsx)(A.default, {}), en && (0, a.jsxs)("div", {
        className: T.userSubscriptionDetailsContainer,
        children: [(0, a.jsx)(i.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: N.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: N.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
            applicationName: D.name
          })
        })]
      }), O && !en && (0, a.jsxs)("div", {
        className: T.guildPickerContainer,
        children: [(0, a.jsx)(i.FormTitle, {
          tag: i.FormTitleTags.H5,
          children: N.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
        }), (0, a.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: T.guildPickerDescription,
          children: N.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
        }), (0, a.jsx)(C.GuildPickerDropdown, {
          selectedGuildId: ee,
          onGuildChange: er,
          eligibleApplicationSubscriptionGuilds: y
        })]
      }), (0, a.jsx)(o.default, {
        selectedPlanId: Y.id,
        paymentSources: k,
        onPaymentSourceChange: e => W(null != e ? e.id : null),
        priceOptions: j,
        currencies: v,
        onCurrencyChange: e => w(e),
        handlePaymentSourceAdd: () => m(f.Step.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: Q,
        legalTermsNodeRef: es,
        hasLegalTermsFlash: q,
        trialFooterMessageOverride: p,
        reviewWarningMessage: R,
        metadata: O || en ? void 0 : z,
        purchaseState: Z,
        hideSubscriptionDetails: !0,
        handleClose: U
      })]
    }), (0, a.jsx)(P.PaymentPortalFooter, {
      children: (0, a.jsx)(E.default, {
        premiumSubscription: null != b ? b : null,
        setPurchaseState: V,
        onBack: () => null != s && m(s),
        onNext: ea,
        onPurchaseError: e => K(e),
        legalTermsNodeRef: es,
        flashLegalTerms: () => $(!0),
        analyticsLocation: g,
        baseAnalyticsData: h,
        flowStartTime: B.startTime,
        planGroup: L,
        purchaseTokenAuthState: H,
        openInvoiceId: M,
        metadata: en ? void 0 : z,
        backButtonEligible: n,
        invoiceError: null,
        disablePurchase: (null == z ? void 0 : z.guild_id) == null && !en
      })
    })]
  })
}