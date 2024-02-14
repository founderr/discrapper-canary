"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("627445"),
  i = n.n(l),
  r = n("77078"),
  u = n("612039"),
  o = n("90592"),
  d = n("527866"),
  c = n("642906"),
  I = n("85336"),
  _ = n("286350"),
  f = n("153727"),
  T = n("39065"),
  S = n("628738"),
  N = n("650484"),
  E = n("367767"),
  P = n("215774"),
  A = n("782340"),
  C = n("112885");

function m(e) {
  let {
    application: t,
    backButtonEligible: n,
    prevStep: l,
    showGuildPicker: m,
    handleStepChange: O,
    trialFooterMessageOverride: p,
    reviewWarningMessage: R,
    planGroup: L,
    openInvoiceId: M,
    analyticsData: g,
    analyticsLocation: U,
    eligibleApplicationSubscriptionGuilds: B,
    listing: h,
    handleClose: x
  } = e, {
    activeSubscription: y,
    setUpdatedSubscription: b,
    contextMetadata: v,
    currencies: D,
    paymentSources: j,
    priceOptions: k,
    purchaseError: H,
    purchaseTokenAuthState: F,
    selectedPlan: G,
    setCurrency: w,
    setPaymentSourceId: V,
    setPurchaseState: Y,
    setPurchaseError: K,
    step: W,
    purchaseState: z,
    subscriptionMetadataRequest: X,
    setSubscriptionMetadataRequest: Z,
    setHasAcceptedTerms: Q
  } = (0, c.usePaymentContext)();
  i(null != G, "Expected plan to be selected"), i(null != W, "Step should be set");
  let J = s.useRef(null),
    [q, $] = (0, u.default)(!1, 500),
    [ee, et] = s.useState(null == X ? void 0 : X.guild_id),
    en = (0, o.isApplicationUserSubscription)(h.sku_flags);
  s.useEffect(() => {
    null != H && null != J.current && J.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [H]);
  let ea = s.useCallback(e => {
      b(e), O(I.Step.CONFIRM)
    }, [O, b]),
    es = s.useCallback(e => {
      et(e), Z({
        ...X,
        guild_id: e
      })
    }, [et, Z, X]),
    el = s.useRef(null);
  return z === _.PurchaseState.PURCHASING ? (0, a.jsx)(S.default, {}) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(f.default, {
      className: C.breadcrumbs
    }), (0, a.jsxs)(N.PaymentPortalBody, {
      children: [(0, a.jsx)(E.default, {}), en && (0, a.jsxs)("div", {
        className: C.userSubscriptionDetailsContainer,
        children: [(0, a.jsx)(r.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: A.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: A.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
            applicationName: t.name
          })
        })]
      }), m && !en && (0, a.jsxs)("div", {
        className: C.guildPickerContainer,
        children: [(0, a.jsx)(r.FormTitle, {
          tag: r.FormTitleTags.H5,
          children: A.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
        }), (0, a.jsx)(r.FormText, {
          type: r.FormText.Types.DESCRIPTION,
          className: C.guildPickerDescription,
          children: A.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
        }), (0, a.jsx)(P.GuildPickerDropdown, {
          selectedGuildId: ee,
          onGuildChange: es,
          eligibleApplicationSubscriptionGuilds: B
        })]
      }), (0, a.jsx)(d.default, {
        selectedPlanId: G.id,
        paymentSources: j,
        onPaymentSourceChange: e => V(null != e ? e.id : null),
        priceOptions: k,
        currencies: D,
        onCurrencyChange: e => w(e),
        handlePaymentSourceAdd: () => O(I.Step.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: Q,
        legalTermsNodeRef: el,
        hasLegalTermsFlash: q,
        trialFooterMessageOverride: p,
        reviewWarningMessage: R,
        metadata: m || en ? void 0 : X,
        purchaseState: z,
        hideSubscriptionDetails: !0,
        handleClose: x
      })]
    }), (0, a.jsx)(N.PaymentPortalFooter, {
      children: (0, a.jsx)(T.default, {
        premiumSubscription: null != y ? y : null,
        setPurchaseState: Y,
        onBack: () => null != l && O(l),
        onNext: ea,
        onPurchaseError: e => K(e),
        legalTermsNodeRef: el,
        flashLegalTerms: () => $(!0),
        analyticsLocation: U,
        baseAnalyticsData: g,
        flowStartTime: v.startTime,
        planGroup: L,
        purchaseTokenAuthState: F,
        openInvoiceId: M,
        metadata: en ? void 0 : X,
        backButtonEligible: n,
        invoiceError: null,
        disablePurchase: (null == X ? void 0 : X.guild_id) == null && !en
      })
    })]
  })
}