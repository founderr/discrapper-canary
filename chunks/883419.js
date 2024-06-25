t.d(n, {
  Z: function() {
    return m
  }
}), t(47120), t(789020);
var r = t(735250),
  s = t(470079),
  a = t(512722),
  l = t.n(a),
  i = t(481060),
  o = t(330726),
  u = t(716534),
  c = t(171246),
  d = t(598),
  I = t(409813),
  _ = t(45572),
  T = t(51499),
  E = t(678334),
  N = t(456251),
  S = t(614277),
  h = t(698708),
  p = t(43542),
  C = t(689938),
  A = t(12094);

function m(e) {
  var n;
  let {
    backButtonEligible: t,
    prevStep: a,
    showGuildPicker: m,
    handleStepChange: O,
    trialFooterMessageOverride: P,
    reviewWarningMessage: f,
    planGroup: g,
    openInvoiceId: R,
    analyticsData: v,
    analyticsLocation: x,
    eligibleApplicationSubscriptionGuilds: L,
    handleClose: M
  } = e, {
    activeSubscription: b,
    application: U,
    setUpdatedSubscription: Z,
    contextMetadata: B,
    currencies: j,
    paymentSources: y,
    priceOptions: k,
    purchaseError: D,
    purchaseTokenAuthState: w,
    selectedPlan: F,
    selectedSku: H,
    setCurrency: V,
    setPaymentSourceId: G,
    setPurchaseState: W,
    setPurchaseError: K,
    purchaseState: Y,
    subscriptionMetadataRequest: X,
    setSubscriptionMetadataRequest: z,
    setHasAcceptedTerms: J
  } = (0, d.usePaymentContext)();
  l()(null != F, "Expected plan to be selected"), l()(null != U, "Expected application");
  let q = s.useRef(null),
    [Q, $] = (0, o.Z)(!1, 500),
    [ee, en] = s.useState(null == X ? void 0 : X.guild_id),
    et = (0, c.KW)(null !== (n = null == H ? void 0 : H.flags) && void 0 !== n ? n : 0);
  s.useEffect(() => {
    null != D && null != q.current && q.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [D]);
  let er = s.useCallback(e => {
      Z(e), O(I.h8.CONFIRM)
    }, [O, Z]),
    es = s.useCallback(e => {
      en(e), z({
        ...X,
        guild_id: e
      })
    }, [en, z, X]),
    ea = s.useRef(null);
  return Y === _.A.PURCHASING ? (0, r.jsx)(N.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(T.Z, {
      className: A.breadcrumbs
    }), (0, r.jsxs)(S.C3, {
      children: [(0, r.jsx)(h.Z, {}), et && (0, r.jsxs)("div", {
        className: A.userSubscriptionDetailsContainer,
        children: [(0, r.jsx)(i.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: C.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
        }), (0, r.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: C.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
            applicationName: U.name
          })
        })]
      }), m && !et && (0, r.jsxs)("div", {
        className: A.guildPickerContainer,
        children: [(0, r.jsx)(i.FormTitle, {
          tag: i.FormTitleTags.H5,
          children: C.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
        }), (0, r.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: A.guildPickerDescription,
          children: C.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
        }), (0, r.jsx)(p.y, {
          selectedGuildId: ee,
          onGuildChange: es,
          eligibleApplicationSubscriptionGuilds: L
        })]
      }), (0, r.jsx)(u.Z, {
        selectedPlanId: F.id,
        paymentSources: y,
        onPaymentSourceChange: e => G(null != e ? e.id : null),
        priceOptions: k,
        currencies: j,
        onCurrencyChange: e => V(e),
        handlePaymentSourceAdd: () => O(I.h8.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: J,
        legalTermsNodeRef: ea,
        hasLegalTermsFlash: Q,
        trialFooterMessageOverride: P,
        reviewWarningMessage: f,
        metadata: m || et ? void 0 : X,
        purchaseState: Y,
        hideSubscriptionDetails: !0,
        handleClose: M
      })]
    }), (0, r.jsx)(S.O3, {
      children: (0, r.jsx)(E.Z, {
        premiumSubscription: null != b ? b : null,
        setPurchaseState: W,
        onBack: () => null != a && O(a),
        onNext: er,
        onPurchaseError: e => K(e),
        legalTermsNodeRef: ea,
        flashLegalTerms: () => $(!0),
        analyticsLocation: x,
        baseAnalyticsData: v,
        flowStartTime: B.startTime,
        planGroup: g,
        purchaseTokenAuthState: w,
        openInvoiceId: R,
        metadata: et ? void 0 : X,
        backButtonEligible: t,
        invoiceError: null,
        disablePurchase: (null == X ? void 0 : X.guild_id) == null && !et
      })
    })]
  })
}