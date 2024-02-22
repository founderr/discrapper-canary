"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  i = n("627445"),
  r = n.n(i),
  s = n("77078"),
  u = n("612039"),
  o = n("90592"),
  d = n("527866"),
  c = n("642906"),
  f = n("85336"),
  I = n("286350"),
  _ = n("153727"),
  S = n("39065"),
  E = n("628738"),
  T = n("650484"),
  A = n("367767"),
  P = n("215774"),
  N = n("782340"),
  m = n("112885");

function C(e) {
  let {
    application: t,
    backButtonEligible: n,
    prevStep: i,
    showGuildPicker: C,
    handleStepChange: O,
    trialFooterMessageOverride: p,
    reviewWarningMessage: L,
    planGroup: h,
    openInvoiceId: R,
    analyticsData: M,
    analyticsLocation: g,
    eligibleApplicationSubscriptionGuilds: b,
    listing: U,
    handleClose: B
  } = e, {
    activeSubscription: x,
    setUpdatedSubscription: y,
    contextMetadata: k,
    currencies: D,
    paymentSources: v,
    priceOptions: j,
    purchaseError: H,
    purchaseTokenAuthState: F,
    selectedPlan: G,
    setCurrency: w,
    setPaymentSourceId: V,
    setPurchaseState: Y,
    setPurchaseError: K,
    step: W,
    purchaseState: X,
    subscriptionMetadataRequest: z,
    setSubscriptionMetadataRequest: Z,
    setHasAcceptedTerms: Q
  } = (0, c.usePaymentContext)();
  r(null != G, "Expected plan to be selected"), r(null != W, "Step should be set");
  let J = l.useRef(null),
    [q, $] = (0, u.default)(!1, 500),
    [ee, et] = l.useState(null == z ? void 0 : z.guild_id),
    en = (0, o.isApplicationUserSubscription)(U.sku_flags);
  l.useEffect(() => {
    null != H && null != J.current && J.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [H]);
  let ea = l.useCallback(e => {
      y(e), O(f.Step.CONFIRM)
    }, [O, y]),
    el = l.useCallback(e => {
      et(e), Z({
        ...z,
        guild_id: e
      })
    }, [et, Z, z]),
    ei = l.useRef(null);
  return X === I.PurchaseState.PURCHASING ? (0, a.jsx)(E.default, {}) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(_.default, {
      className: m.breadcrumbs
    }), (0, a.jsxs)(T.PaymentPortalBody, {
      children: [(0, a.jsx)(A.default, {}), en && (0, a.jsxs)("div", {
        className: m.userSubscriptionDetailsContainer,
        children: [(0, a.jsx)(s.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: N.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
        }), (0, a.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: N.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
            applicationName: t.name
          })
        })]
      }), C && !en && (0, a.jsxs)("div", {
        className: m.guildPickerContainer,
        children: [(0, a.jsx)(s.FormTitle, {
          tag: s.FormTitleTags.H5,
          children: N.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
        }), (0, a.jsx)(s.FormText, {
          type: s.FormText.Types.DESCRIPTION,
          className: m.guildPickerDescription,
          children: N.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
        }), (0, a.jsx)(P.GuildPickerDropdown, {
          selectedGuildId: ee,
          onGuildChange: el,
          eligibleApplicationSubscriptionGuilds: b
        })]
      }), (0, a.jsx)(d.default, {
        selectedPlanId: G.id,
        paymentSources: v,
        onPaymentSourceChange: e => V(null != e ? e.id : null),
        priceOptions: j,
        currencies: D,
        onCurrencyChange: e => w(e),
        handlePaymentSourceAdd: () => O(f.Step.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: Q,
        legalTermsNodeRef: ei,
        hasLegalTermsFlash: q,
        trialFooterMessageOverride: p,
        reviewWarningMessage: L,
        metadata: C || en ? void 0 : z,
        purchaseState: X,
        hideSubscriptionDetails: !0,
        handleClose: B
      })]
    }), (0, a.jsx)(T.PaymentPortalFooter, {
      children: (0, a.jsx)(S.default, {
        premiumSubscription: null != x ? x : null,
        setPurchaseState: Y,
        onBack: () => null != i && O(i),
        onNext: ea,
        onPurchaseError: e => K(e),
        legalTermsNodeRef: ei,
        flashLegalTerms: () => $(!0),
        analyticsLocation: g,
        baseAnalyticsData: M,
        flowStartTime: k.startTime,
        planGroup: h,
        purchaseTokenAuthState: F,
        openInvoiceId: R,
        metadata: en ? void 0 : z,
        backButtonEligible: n,
        invoiceError: null,
        disablePurchase: (null == z ? void 0 : z.guild_id) == null && !en
      })
    })]
  })
}