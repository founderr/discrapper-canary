"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("47120"), n("789020");
var r = n("735250"),
  a = n("470079"),
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

function m(e) {
  var t;
  let {
    backButtonEligible: n,
    prevStep: s,
    showGuildPicker: m,
    handleStepChange: O,
    trialFooterMessageOverride: p,
    reviewWarningMessage: R,
    planGroup: L,
    openInvoiceId: h,
    analyticsData: M,
    analyticsLocation: g,
    eligibleApplicationSubscriptionGuilds: y,
    handleClose: b
  } = e, {
    activeSubscription: U,
    application: x,
    setUpdatedSubscription: D,
    contextMetadata: B,
    currencies: v,
    paymentSources: k,
    priceOptions: j,
    purchaseError: G,
    purchaseTokenAuthState: H,
    selectedPlan: F,
    selectedSku: Y,
    setCurrency: w,
    setPaymentSourceId: W,
    setPurchaseState: V,
    setPurchaseError: K,
    purchaseState: Z,
    subscriptionMetadataRequest: z,
    setSubscriptionMetadataRequest: X,
    setHasAcceptedTerms: J
  } = (0, c.usePaymentContext)();
  l()(null != F, "Expected plan to be selected"), l()(null != x, "Expected application");
  let Q = a.useRef(null),
    [q, $] = (0, u.default)(!1, 500),
    [ee, et] = a.useState(null == z ? void 0 : z.guild_id),
    en = (0, d.isApplicationUserSubscription)(null !== (t = null == Y ? void 0 : Y.flags) && void 0 !== t ? t : 0);
  a.useEffect(() => {
    null != G && null != Q.current && Q.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [G]);
  let er = a.useCallback(e => {
      D(e), O(f.Step.CONFIRM)
    }, [O, D]),
    ea = a.useCallback(e => {
      et(e), X({
        ...z,
        guild_id: e
      })
    }, [et, X, z]),
    es = a.useRef(null);
  return Z === _.PurchaseState.PURCHASING ? (0, r.jsx)(S.default, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(I.default, {
      className: T.breadcrumbs
    }), (0, r.jsxs)(P.PaymentPortalBody, {
      children: [(0, r.jsx)(A.default, {}), en && (0, r.jsxs)("div", {
        className: T.userSubscriptionDetailsContainer,
        children: [(0, r.jsx)(i.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: N.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
        }), (0, r.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: N.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
            applicationName: x.name
          })
        })]
      }), m && !en && (0, r.jsxs)("div", {
        className: T.guildPickerContainer,
        children: [(0, r.jsx)(i.FormTitle, {
          tag: i.FormTitleTags.H5,
          children: N.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
        }), (0, r.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: T.guildPickerDescription,
          children: N.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
        }), (0, r.jsx)(C.GuildPickerDropdown, {
          selectedGuildId: ee,
          onGuildChange: ea,
          eligibleApplicationSubscriptionGuilds: y
        })]
      }), (0, r.jsx)(o.default, {
        selectedPlanId: F.id,
        paymentSources: k,
        onPaymentSourceChange: e => W(null != e ? e.id : null),
        priceOptions: j,
        currencies: v,
        onCurrencyChange: e => w(e),
        handlePaymentSourceAdd: () => O(f.Step.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: J,
        legalTermsNodeRef: es,
        hasLegalTermsFlash: q,
        trialFooterMessageOverride: p,
        reviewWarningMessage: R,
        metadata: m || en ? void 0 : z,
        purchaseState: Z,
        hideSubscriptionDetails: !0,
        handleClose: b
      })]
    }), (0, r.jsx)(P.PaymentPortalFooter, {
      children: (0, r.jsx)(E.default, {
        premiumSubscription: null != U ? U : null,
        setPurchaseState: V,
        onBack: () => null != s && O(s),
        onNext: er,
        onPurchaseError: e => K(e),
        legalTermsNodeRef: es,
        flashLegalTerms: () => $(!0),
        analyticsLocation: g,
        baseAnalyticsData: M,
        flowStartTime: B.startTime,
        planGroup: L,
        purchaseTokenAuthState: H,
        openInvoiceId: h,
        metadata: en ? void 0 : z,
        backButtonEligible: n,
        invoiceError: null,
        disablePurchase: (null == z ? void 0 : z.guild_id) == null && !en
      })
    })]
  })
}