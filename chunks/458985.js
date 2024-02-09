"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  i = n("627445"),
  s = n.n(i),
  r = n("77078"),
  u = n("612039"),
  o = n("90592"),
  c = n("527866"),
  d = n("642906"),
  f = n("85336"),
  I = n("286350"),
  _ = n("153727"),
  S = n("39065"),
  T = n("628738"),
  N = n("650484"),
  E = n("367767"),
  P = n("215774"),
  A = n("782340"),
  m = n("945598");

function C(e) {
  let {
    application: t,
    backButtonEligible: n,
    prevStep: i,
    showGuildPicker: C,
    handleStepChange: p,
    trialFooterMessageOverride: O,
    reviewWarningMessage: R,
    planGroup: g,
    openInvoiceId: L,
    analyticsData: M,
    analyticsLocation: h,
    eligibleApplicationSubscriptionGuilds: U,
    listing: v,
    handleClose: x
  } = e, {
    activeSubscription: B,
    setUpdatedSubscription: y,
    contextMetadata: b,
    currencies: D,
    paymentSources: j,
    priceOptions: k,
    purchaseError: H,
    purchaseTokenAuthState: w,
    selectedPlan: F,
    setCurrency: G,
    setPaymentSourceId: V,
    setPurchaseState: Y,
    setPurchaseError: W,
    step: K,
    purchaseState: z,
    subscriptionMetadataRequest: Z,
    setSubscriptionMetadataRequest: X,
    setHasAcceptedTerms: Q
  } = (0, d.usePaymentContext)();
  s(null != F, "Expected plan to be selected"), s(null != K, "Step should be set");
  let q = l.useRef(null),
    [J, $] = (0, u.default)(!1, 500),
    [ee, et] = l.useState(null == Z ? void 0 : Z.guild_id),
    en = (0, o.isApplicationUserSubscription)(v.sku_flags);
  l.useEffect(() => {
    null != H && null != q.current && q.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [H]);
  let ea = l.useCallback(e => {
      y(e), p(f.Step.CONFIRM)
    }, [p, y]),
    el = l.useCallback(e => {
      et(e), X({
        ...Z,
        guild_id: e
      })
    }, [et, X, Z]),
    ei = l.useRef(null);
  return z === I.PurchaseState.PURCHASING ? (0, a.jsx)(T.default, {}) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(_.default, {
      className: m.breadcrumbs
    }), (0, a.jsxs)(N.PaymentPortalBody, {
      children: [(0, a.jsx)(E.default, {}), en && (0, a.jsxs)("div", {
        className: m.userSubscriptionDetailsContainer,
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
      }), C && !en && (0, a.jsxs)("div", {
        className: m.guildPickerContainer,
        children: [(0, a.jsx)(r.FormTitle, {
          tag: r.FormTitleTags.H5,
          children: A.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
        }), (0, a.jsx)(r.FormText, {
          type: r.FormText.Types.DESCRIPTION,
          className: m.guildPickerDescription,
          children: A.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
        }), (0, a.jsx)(P.GuildPickerDropdown, {
          selectedGuildId: ee,
          onGuildChange: el,
          eligibleApplicationSubscriptionGuilds: U
        })]
      }), (0, a.jsx)(c.default, {
        selectedPlanId: F.id,
        paymentSources: j,
        onPaymentSourceChange: e => V(null != e ? e.id : null),
        priceOptions: k,
        currencies: D,
        onCurrencyChange: e => G(e),
        handlePaymentSourceAdd: () => p(f.Step.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: Q,
        legalTermsNodeRef: ei,
        hasLegalTermsFlash: J,
        trialFooterMessageOverride: O,
        reviewWarningMessage: R,
        metadata: C || en ? void 0 : Z,
        purchaseState: z,
        hideSubscriptionDetails: !0,
        handleClose: x
      })]
    }), (0, a.jsx)(N.PaymentPortalFooter, {
      children: (0, a.jsx)(S.default, {
        premiumSubscription: null != B ? B : null,
        setPurchaseState: Y,
        onBack: () => null != i && p(i),
        onNext: ea,
        onPurchaseError: e => W(e),
        legalTermsNodeRef: ei,
        flashLegalTerms: () => $(!0),
        analyticsLocation: h,
        baseAnalyticsData: M,
        flowStartTime: b.startTime,
        planGroup: g,
        purchaseTokenAuthState: w,
        openInvoiceId: L,
        metadata: en ? void 0 : Z,
        backButtonEligible: n,
        invoiceError: null,
        disablePurchase: (null == Z ? void 0 : Z.guild_id) == null && !en
      })
    })]
  })
}