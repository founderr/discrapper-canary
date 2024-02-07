"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  i = n("627445"),
  r = n.n(i),
  s = n("77078"),
  u = n("612039"),
  o = n("90592"),
  c = n("527866"),
  d = n("642906"),
  f = n("85336"),
  I = n("286350"),
  _ = n("153727"),
  S = n("39065"),
  T = n("628738"),
  P = n("650484"),
  E = n("367767"),
  N = n("215774"),
  A = n("782340"),
  m = n("945598");

function p(e) {
  let {
    application: t,
    backButtonEligible: n,
    prevStep: i,
    showGuildPicker: p,
    handleStepChange: C,
    trialFooterMessageOverride: O,
    reviewWarningMessage: R,
    planGroup: g,
    openInvoiceId: M,
    analyticsData: L,
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
    purchaseError: w,
    purchaseTokenAuthState: H,
    selectedPlan: F,
    setCurrency: G,
    setPaymentSourceId: V,
    setPurchaseState: K,
    setPurchaseError: Y,
    step: W,
    purchaseState: z,
    subscriptionMetadataRequest: Z,
    setSubscriptionMetadataRequest: X,
    setHasAcceptedTerms: Q
  } = (0, d.usePaymentContext)();
  r(null != F, "Expected plan to be selected"), r(null != W, "Step should be set");
  let q = l.useRef(null),
    [J, $] = (0, u.default)(!1, 500),
    [ee, et] = l.useState(null == Z ? void 0 : Z.guild_id),
    en = (0, o.isApplicationUserSubscription)(v.sku_flags);
  l.useEffect(() => {
    null != w && null != q.current && q.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [w]);
  let ea = l.useCallback(e => {
      y(e), C(f.Step.CONFIRM)
    }, [C, y]),
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
    }), (0, a.jsxs)(P.PaymentPortalBody, {
      children: [(0, a.jsx)(E.default, {}), en && (0, a.jsxs)("div", {
        className: m.userSubscriptionDetailsContainer,
        children: [(0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: A.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
        }), (0, a.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: A.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
            applicationName: t.name
          })
        })]
      }), p && !en && (0, a.jsxs)("div", {
        className: m.guildPickerContainer,
        children: [(0, a.jsx)(s.FormTitle, {
          tag: s.FormTitleTags.H5,
          children: A.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
        }), (0, a.jsx)(s.FormText, {
          type: s.FormText.Types.DESCRIPTION,
          className: m.guildPickerDescription,
          children: A.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
        }), (0, a.jsx)(N.GuildPickerDropdown, {
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
        handlePaymentSourceAdd: () => C(f.Step.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: Q,
        legalTermsNodeRef: ei,
        hasLegalTermsFlash: J,
        trialFooterMessageOverride: O,
        reviewWarningMessage: R,
        metadata: p || en ? void 0 : Z,
        purchaseState: z,
        hideSubscriptionDetails: !0,
        handleClose: x
      })]
    }), (0, a.jsx)(P.PaymentPortalFooter, {
      children: (0, a.jsx)(S.default, {
        premiumSubscription: null != B ? B : null,
        setPurchaseState: K,
        onBack: () => null != i && C(i),
        onNext: ea,
        onPurchaseError: e => Y(e),
        legalTermsNodeRef: ei,
        flashLegalTerms: () => $(!0),
        analyticsLocation: h,
        baseAnalyticsData: L,
        flowStartTime: b.startTime,
        planGroup: g,
        purchaseTokenAuthState: H,
        openInvoiceId: M,
        metadata: en ? void 0 : Z,
        backButtonEligible: n,
        invoiceError: null,
        disablePurchase: (null == Z ? void 0 : Z.guild_id) == null && !en
      })
    })]
  })
}