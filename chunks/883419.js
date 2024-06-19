n.d(t, {
  Z: function() {
    return f
  }
}), n(47120), n(789020);
var r = n(735250),
  s = n(470079),
  a = n(512722),
  l = n.n(a),
  i = n(481060),
  u = n(330726),
  o = n(716534),
  c = n(171246),
  d = n(598),
  I = n(409813),
  _ = n(45572),
  E = n(51499),
  A = n(678334),
  N = n(456251),
  C = n(614277),
  O = n(698708),
  T = n(43542),
  S = n(689938),
  P = n(12094);

function f(e) {
  var t;
  let {
    backButtonEligible: n,
    prevStep: a,
    showGuildPicker: f,
    handleStepChange: h,
    trialFooterMessageOverride: R,
    reviewWarningMessage: L,
    planGroup: m,
    openInvoiceId: p,
    analyticsData: M,
    analyticsLocation: g,
    eligibleApplicationSubscriptionGuilds: Z,
    handleClose: U
  } = e, {
    activeSubscription: b,
    application: x,
    setUpdatedSubscription: B,
    contextMetadata: D,
    currencies: v,
    paymentSources: j,
    priceOptions: y,
    purchaseError: k,
    purchaseTokenAuthState: H,
    selectedPlan: G,
    selectedSku: Y,
    setCurrency: F,
    setPaymentSourceId: w,
    setPurchaseState: W,
    setPurchaseError: V,
    purchaseState: K,
    subscriptionMetadataRequest: Q,
    setSubscriptionMetadataRequest: X,
    setHasAcceptedTerms: z
  } = (0, d.usePaymentContext)();
  l()(null != G, "Expected plan to be selected"), l()(null != x, "Expected application");
  let q = s.useRef(null),
    [J, $] = (0, u.Z)(!1, 500),
    [ee, et] = s.useState(null == Q ? void 0 : Q.guild_id),
    en = (0, c.KW)(null !== (t = null == Y ? void 0 : Y.flags) && void 0 !== t ? t : 0);
  s.useEffect(() => {
    null != k && null != q.current && q.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [k]);
  let er = s.useCallback(e => {
      B(e), h(I.h8.CONFIRM)
    }, [h, B]),
    es = s.useCallback(e => {
      et(e), X({
        ...Q,
        guild_id: e
      })
    }, [et, X, Q]),
    ea = s.useRef(null);
  return K === _.A.PURCHASING ? (0, r.jsx)(N.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(E.Z, {
      className: P.breadcrumbs
    }), (0, r.jsxs)(C.C3, {
      children: [(0, r.jsx)(O.Z, {}), en && (0, r.jsxs)("div", {
        className: P.userSubscriptionDetailsContainer,
        children: [(0, r.jsx)(i.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: S.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
        }), (0, r.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: S.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
            applicationName: x.name
          })
        })]
      }), f && !en && (0, r.jsxs)("div", {
        className: P.guildPickerContainer,
        children: [(0, r.jsx)(i.FormTitle, {
          tag: i.FormTitleTags.H5,
          children: S.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
        }), (0, r.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: P.guildPickerDescription,
          children: S.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
        }), (0, r.jsx)(T.y, {
          selectedGuildId: ee,
          onGuildChange: es,
          eligibleApplicationSubscriptionGuilds: Z
        })]
      }), (0, r.jsx)(o.Z, {
        selectedPlanId: G.id,
        paymentSources: j,
        onPaymentSourceChange: e => w(null != e ? e.id : null),
        priceOptions: y,
        currencies: v,
        onCurrencyChange: e => F(e),
        handlePaymentSourceAdd: () => h(I.h8.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: z,
        legalTermsNodeRef: ea,
        hasLegalTermsFlash: J,
        trialFooterMessageOverride: R,
        reviewWarningMessage: L,
        metadata: f || en ? void 0 : Q,
        purchaseState: K,
        hideSubscriptionDetails: !0,
        handleClose: U
      })]
    }), (0, r.jsx)(C.O3, {
      children: (0, r.jsx)(A.Z, {
        premiumSubscription: null != b ? b : null,
        setPurchaseState: W,
        onBack: () => null != a && h(a),
        onNext: er,
        onPurchaseError: e => V(e),
        legalTermsNodeRef: ea,
        flashLegalTerms: () => $(!0),
        analyticsLocation: g,
        baseAnalyticsData: M,
        flowStartTime: D.startTime,
        planGroup: m,
        purchaseTokenAuthState: H,
        openInvoiceId: p,
        metadata: en ? void 0 : Q,
        backButtonEligible: n,
        invoiceError: null,
        disablePurchase: (null == Q ? void 0 : Q.guild_id) == null && !en
      })
    })]
  })
}