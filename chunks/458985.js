"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  s = n("627445"),
  l = n.n(s),
  u = n("77078"),
  a = n("612039"),
  o = n("90592"),
  c = n("527866"),
  d = n("642906"),
  f = n("85336"),
  I = n("286350"),
  _ = n("153727"),
  E = n("39065"),
  S = n("628738"),
  T = n("650484"),
  N = n("367767"),
  p = n("215774"),
  C = n("782340"),
  m = n("945598");

function P(e) {
  let {
    application: t,
    backButtonEligible: n,
    prevStep: s,
    showGuildPicker: P,
    handleStepChange: h,
    trialFooterMessageOverride: R,
    reviewWarningMessage: L,
    planGroup: M,
    openInvoiceId: v,
    analyticsData: A,
    analyticsLocation: g,
    eligibleApplicationSubscriptionGuilds: O,
    listing: U,
    handleClose: x
  } = e, {
    activeSubscription: D,
    setUpdatedSubscription: y,
    contextMetadata: G,
    currencies: B,
    paymentSources: b,
    priceOptions: F,
    purchaseError: j,
    purchaseTokenAuthState: w,
    selectedPlan: H,
    setCurrency: V,
    setPaymentSourceId: k,
    setPurchaseState: Y,
    setPurchaseError: K,
    step: Z,
    purchaseState: z,
    subscriptionMetadataRequest: W,
    setSubscriptionMetadataRequest: X,
    setHasAcceptedTerms: q
  } = (0, d.usePaymentContext)();
  l(null != H, "Expected plan to be selected"), l(null != Z, "Step should be set");
  let Q = i.useRef(null),
    [J, $] = (0, a.default)(!1, 500),
    [ee, et] = i.useState(null == W ? void 0 : W.guild_id),
    en = (0, o.isApplicationUserSubscription)(U.sku_flags);
  i.useEffect(() => {
    null != j && null != Q.current && Q.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [j]);
  let er = i.useCallback(e => {
      y(e), h(f.Step.CONFIRM)
    }, [h, y]),
    ei = i.useCallback(e => {
      et(e), X({
        ...W,
        guild_id: e
      })
    }, [et, X, W]),
    es = i.useRef(null);
  return z === I.PurchaseState.PURCHASING ? (0, r.jsx)(S.default, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.default, {
      className: m.breadcrumbs
    }), (0, r.jsxs)(T.PaymentPortalBody, {
      children: [(0, r.jsx)(N.default, {}), en && (0, r.jsxs)("div", {
        className: m.userSubscriptionDetailsContainer,
        children: [(0, r.jsx)(u.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: C.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: C.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
            applicationName: t.name
          })
        })]
      }), P && !en && (0, r.jsxs)("div", {
        className: m.guildPickerContainer,
        children: [(0, r.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H5,
          children: C.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
        }), (0, r.jsx)(u.FormText, {
          type: u.FormText.Types.DESCRIPTION,
          className: m.guildPickerDescription,
          children: C.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
        }), (0, r.jsx)(p.GuildPickerDropdown, {
          selectedGuildId: ee,
          onGuildChange: ei,
          eligibleApplicationSubscriptionGuilds: O
        })]
      }), (0, r.jsx)(c.default, {
        selectedPlanId: H.id,
        paymentSources: b,
        onPaymentSourceChange: e => k(null != e ? e.id : null),
        priceOptions: F,
        currencies: B,
        onCurrencyChange: e => V(e),
        handlePaymentSourceAdd: () => h(f.Step.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: q,
        legalTermsNodeRef: es,
        hasLegalTermsFlash: J,
        trialFooterMessageOverride: R,
        reviewWarningMessage: L,
        metadata: P || en ? void 0 : W,
        purchaseState: z,
        hideSubscriptionDetails: !0,
        handleClose: x
      })]
    }), (0, r.jsx)(T.PaymentPortalFooter, {
      children: (0, r.jsx)(E.default, {
        premiumSubscription: null != D ? D : null,
        setPurchaseState: Y,
        onBack: () => null != s && h(s),
        onNext: er,
        onPurchaseError: e => K(e),
        legalTermsNodeRef: es,
        flashLegalTerms: () => $(!0),
        analyticsLocation: g,
        baseAnalyticsData: A,
        flowStartTime: G.startTime,
        planGroup: M,
        purchaseTokenAuthState: w,
        openInvoiceId: v,
        metadata: en ? void 0 : W,
        backButtonEligible: n,
        invoiceError: null,
        disablePurchase: (null == W ? void 0 : W.guild_id) == null && !en
      })
    })]
  })
}