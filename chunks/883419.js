n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120),
    n(789020);
var r = n(735250),
    a = n(470079),
    i = n(512722),
    l = n.n(i),
    s = n(442837),
    o = n(481060),
    u = n(330726),
    c = n(716534),
    d = n(664891),
    h = n(171246),
    I = n(430824),
    _ = n(598),
    f = n(409813),
    m = n(45572),
    E = n(51499),
    S = n(678334),
    p = n(456251),
    T = n(614277),
    C = n(698708),
    N = n(689938),
    A = n(748605);
function O(e) {
    var t, n;
    let { backButtonEligible: i, prevStep: O, handleStepChange: P, trialFooterMessageOverride: b, reviewWarningMessage: g, planGroup: R, openInvoiceId: v, analyticsData: x, analyticsLocation: L, handleClose: M } = e,
        { activeSubscription: k, application: j, setUpdatedSubscription: B, contextMetadata: Z, currencies: U, paymentSources: y, priceOptions: D, purchaseError: w, purchaseTokenAuthState: F, selectedPlan: H, selectedSku: V, setCurrency: W, setPaymentSourceId: G, setPurchaseState: K, setPurchaseError: Y, purchaseState: X, subscriptionMetadataRequest: z, setHasAcceptedTerms: J } = (0, _.usePaymentContext)();
    l()(null != H, 'Expected plan to be selected'), l()(null != j, 'Expected application');
    let q = a.useRef(null),
        [Q, $] = (0, u.Z)(!1, 500),
        ee = null == z ? void 0 : z.guild_id,
        et = (0, s.e7)([I.Z], () => I.Z.getGuild(ee), [ee]),
        [en, er] = a.useState(null),
        ea = (0, h.KW)(null !== (t = null == V ? void 0 : V.flags) && void 0 !== t ? t : 0);
    a.useEffect(() => {
        null != w && null != q.current && q.current.scrollIntoView({ behavior: 'smooth' });
    }, [w]);
    let ei = a.useCallback(
            (e) => {
                B(e), P(f.h8.CONFIRM);
            },
            [P, B]
        ),
        el = a.useRef(null);
    return X === m.A.PURCHASING
        ? (0, r.jsx)(p.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(E.Z, { className: A.breadcrumbs }),
                  (0, r.jsxs)(T.C3, {
                      children: [
                          (0, r.jsx)(C.Z, {}),
                          ea &&
                              (0, r.jsxs)('div', {
                                  className: A.userSubscriptionDetailsContainer,
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          variant: 'eyebrow',
                                          color: 'header-secondary',
                                          children: N.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
                                      }),
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'interactive-normal',
                                          children: N.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({ applicationName: j.name })
                                      })
                                  ]
                              }),
                          !ea &&
                              (0, r.jsxs)('div', {
                                  className: A.guildPickerContainer,
                                  children: [
                                      (0, r.jsx)(o.FormTitle, {
                                          tag: o.FormTitleTags.H5,
                                          children: N.Z.Messages.SERVER
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: A.guildNameContainer,
                                          children: [
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-md/normal',
                                                  children: N.Z.Messages.FORM_LABEL_SERVER_NAME
                                              }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-md/normal',
                                                  lineClamp: 1,
                                                  children: null !== (n = null == et ? void 0 : et.name) && void 0 !== n ? n : N.Z.Messages.UNKNOWN_GUILD
                                              })
                                          ]
                                      })
                                  ]
                              }),
                          null == k
                              ? (0, r.jsx)(c.Z, {
                                    selectedPlanId: H.id,
                                    paymentSources: y,
                                    onPaymentSourceChange: (e) => G(null != e ? e.id : null),
                                    priceOptions: D,
                                    currencies: U,
                                    onCurrencyChange: (e) => W(e),
                                    handlePaymentSourceAdd: () => P(f.h8.ADD_PAYMENT_STEPS),
                                    setHasAcceptedTerms: J,
                                    legalTermsNodeRef: el,
                                    hasLegalTermsFlash: Q,
                                    trialFooterMessageOverride: b,
                                    reviewWarningMessage: g,
                                    metadata: ea ? void 0 : z,
                                    purchaseState: X,
                                    hideSubscriptionDetails: !0,
                                    handleClose: M
                                })
                              : (0, r.jsx)(d.Z, {
                                    premiumSubscription: k,
                                    paymentSources: y,
                                    priceOptions: D,
                                    onPaymentSourceChange: (e) => G(null != e ? e.id : null),
                                    onPaymentSourceAdd: () => {
                                        P(f.h8.ADD_PAYMENT_STEPS);
                                    },
                                    planId: H.id,
                                    setHasAcceptedTerms: J,
                                    legalTermsNodeRef: el,
                                    hasLegalTermsFlash: Q,
                                    onInvoiceError: (e) => {
                                        er(e);
                                    },
                                    planGroup: R,
                                    currencies: U,
                                    onCurrencyChange: (e) => W(e),
                                    hasOpenInvoice: null != v,
                                    purchaseState: X,
                                    handleClose: M
                                })
                      ]
                  }),
                  (0, r.jsx)(T.O3, {
                      children: (0, r.jsx)(S.Z, {
                          premiumSubscription: null != k ? k : null,
                          setPurchaseState: K,
                          onBack: () => null != O && P(O),
                          onNext: ei,
                          onPurchaseError: (e) => Y(e),
                          legalTermsNodeRef: el,
                          flashLegalTerms: () => $(!0),
                          analyticsLocation: L,
                          baseAnalyticsData: x,
                          flowStartTime: Z.startTime,
                          planGroup: R,
                          purchaseTokenAuthState: F,
                          openInvoiceId: v,
                          metadata: ea ? void 0 : z,
                          backButtonEligible: i,
                          invoiceError: en,
                          disablePurchase: (null == z ? void 0 : z.guild_id) == null && !ea
                      })
                  })
              ]
          });
}
