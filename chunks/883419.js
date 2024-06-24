n.d(t, {
  Z: function() {
    return f
  }
}), n(47120), n(789020);
var r = n(735250),
  a = n(470079),
  s = n(512722),
  l = n.n(s),
  i = n(481060),
  o = n(330726),
  u = n(716534),
  c = n(171246),
  d = n(598),
  I = n(409813),
  _ = n(45572),
  E = n(51499),
  C = n(678334),
  N = n(456251),
  A = n(614277),
  O = n(698708),
  h = n(43542),
  S = n(689938),
  T = n(12094);

function f(e) {
  var t;
  let {
    backButtonEligible: n,
    prevStep: s,
    showGuildPicker: f,
    handleStepChange: P,
    trialFooterMessageOverride: p,
    reviewWarningMessage: R,
    planGroup: m,
    openInvoiceId: L,
    analyticsData: g,
    analyticsLocation: M,
    eligibleApplicationSubscriptionGuilds: b,
    handleClose: v
  } = e, {
    activeSubscription: Z,
    application: x,
    setUpdatedSubscription: U,
    contextMetadata: B,
    currencies: D,
    paymentSources: y,
    priceOptions: k,
    purchaseError: j,
    purchaseTokenAuthState: H,
    selectedPlan: F,
    selectedSku: G,
    setCurrency: Y,
    setPaymentSourceId: w,
    setPurchaseState: W,
    setPurchaseError: V,
    purchaseState: K,
    subscriptionMetadataRequest: Q,
    setSubscriptionMetadataRequest: X,
    setHasAcceptedTerms: z
  } = (0, d.usePaymentContext)();
  l()(null != F, "Expected plan to be selected"), l()(null != x, "Expected application");
  let q = a.useRef(null),
    [J, $] = (0, o.Z)(!1, 500),
    [ee, et] = a.useState(null == Q ? void 0 : Q.guild_id),
    en = (0, c.KW)(null !== (t = null == G ? void 0 : G.flags) && void 0 !== t ? t : 0);
  a.useEffect(() => {
    null != j && null != q.current && q.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [j]);
  let er = a.useCallback(e => {
      U(e), P(I.h8.CONFIRM)
    }, [P, U]),
    ea = a.useCallback(e => {
      et(e), X({
        ...Q,
        guild_id: e
      })
    }, [et, X, Q]),
    es = a.useRef(null);
  return K === _.A.PURCHASING ? (0, r.jsx)(N.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(E.Z, {
      className: T.breadcrumbs
    }), (0, r.jsxs)(A.C3, {
      children: [(0, r.jsx)(O.Z, {}), en && (0, r.jsxs)("div", {
        className: T.userSubscriptionDetailsContainer,
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
        className: T.guildPickerContainer,
        children: [(0, r.jsx)(i.FormTitle, {
          tag: i.FormTitleTags.H5,
          children: S.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
        }), (0, r.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: T.guildPickerDescription,
          children: S.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
        }), (0, r.jsx)(h.y, {
          selectedGuildId: ee,
          onGuildChange: ea,
          eligibleApplicationSubscriptionGuilds: b
        })]
      }), (0, r.jsx)(u.Z, {
        selectedPlanId: F.id,
        paymentSources: y,
        onPaymentSourceChange: e => w(null != e ? e.id : null),
        priceOptions: k,
        currencies: D,
        onCurrencyChange: e => Y(e),
        handlePaymentSourceAdd: () => P(I.h8.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: z,
        legalTermsNodeRef: es,
        hasLegalTermsFlash: J,
        trialFooterMessageOverride: p,
        reviewWarningMessage: R,
        metadata: f || en ? void 0 : Q,
        purchaseState: K,
        hideSubscriptionDetails: !0,
        handleClose: v
      })]
    }), (0, r.jsx)(A.O3, {
      children: (0, r.jsx)(C.Z, {
        premiumSubscription: null != Z ? Z : null,
        setPurchaseState: W,
        onBack: () => null != s && P(s),
        onNext: er,
        onPurchaseError: e => V(e),
        legalTermsNodeRef: es,
        flashLegalTerms: () => $(!0),
        analyticsLocation: M,
        baseAnalyticsData: g,
        flowStartTime: B.startTime,
        planGroup: m,
        purchaseTokenAuthState: H,
        openInvoiceId: L,
        metadata: en ? void 0 : Q,
        backButtonEligible: n,
        invoiceError: null,
        disablePurchase: (null == Q ? void 0 : Q.guild_id) == null && !en
      })
    })]
  })
}