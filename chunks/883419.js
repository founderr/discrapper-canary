t.d(n, {
    Z: function () {
        return O;
    }
}),
    t(47120),
    t(789020);
var i = t(200651),
    r = t(192379),
    o = t(512722),
    a = t.n(o),
    s = t(442837),
    l = t(481060),
    c = t(330726),
    d = t(716534),
    u = t(664891),
    _ = t(171246),
    p = t(430824),
    f = t(598),
    I = t(409813),
    C = t(45572),
    m = t(51499),
    b = t(678334),
    S = t(456251),
    h = t(614277),
    T = t(698708),
    g = t(689938),
    x = t(748605);
function O(e) {
    var n, t;
    let { backButtonEligible: o, prevStep: O, handleStepChange: N, trialFooterMessageOverride: A, reviewWarningMessage: P, planGroup: E, openInvoiceId: v, analyticsData: R, analyticsLocation: L, handleClose: M } = e,
        { activeSubscription: B, application: k, setUpdatedSubscription: j, contextMetadata: y, currencies: U, paymentSources: Z, priceOptions: D, purchaseError: H, purchaseTokenAuthState: F, selectedPlan: w, selectedSku: W, setCurrency: G, setPaymentSourceId: V, setPurchaseState: K, setPurchaseError: Y, purchaseState: z, subscriptionMetadataRequest: q, setHasAcceptedTerms: J } = (0, f.usePaymentContext)();
    a()(null != w, 'Expected plan to be selected'), a()(null != k, 'Expected application');
    let X = r.useRef(null),
        [Q, $] = (0, c.Z)(!1, 500),
        ee = null == q ? void 0 : q.guild_id,
        en = (0, s.e7)([p.Z], () => p.Z.getGuild(ee), [ee]),
        [et, ei] = r.useState(null),
        er = (0, _.KW)(null !== (n = null == W ? void 0 : W.flags) && void 0 !== n ? n : 0);
    r.useEffect(() => {
        null != H && null != X.current && X.current.scrollIntoView({ behavior: 'smooth' });
    }, [H]);
    let eo = r.useCallback(
            (e) => {
                j(e), N(I.h8.CONFIRM);
            },
            [N, j]
        ),
        ea = r.useRef(null);
    return z === C.A.PURCHASING
        ? (0, i.jsx)(S.Z, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(m.Z, { className: x.breadcrumbs }),
                  (0, i.jsxs)(h.C3, {
                      children: [
                          (0, i.jsx)(T.Z, {}),
                          er &&
                              (0, i.jsxs)('div', {
                                  className: x.userSubscriptionDetailsContainer,
                                  children: [
                                      (0, i.jsx)(l.Text, {
                                          variant: 'eyebrow',
                                          color: 'header-secondary',
                                          children: g.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
                                      }),
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'interactive-normal',
                                          children: g.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({ applicationName: k.name })
                                      })
                                  ]
                              }),
                          !er &&
                              (0, i.jsxs)('div', {
                                  className: x.guildPickerContainer,
                                  children: [
                                      (0, i.jsx)(l.FormTitle, {
                                          tag: l.FormTitleTags.H5,
                                          children: g.Z.Messages.SERVER
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: x.guildNameContainer,
                                          children: [
                                              (0, i.jsx)(l.Text, {
                                                  variant: 'text-md/normal',
                                                  children: g.Z.Messages.FORM_LABEL_SERVER_NAME
                                              }),
                                              (0, i.jsx)(l.Text, {
                                                  variant: 'text-md/normal',
                                                  lineClamp: 1,
                                                  children: null !== (t = null == en ? void 0 : en.name) && void 0 !== t ? t : g.Z.Messages.UNKNOWN_GUILD
                                              })
                                          ]
                                      })
                                  ]
                              }),
                          null == B
                              ? (0, i.jsx)(d.Z, {
                                    selectedPlanId: w.id,
                                    paymentSources: Z,
                                    onPaymentSourceChange: (e) => V(null != e ? e.id : null),
                                    priceOptions: D,
                                    currencies: U,
                                    onCurrencyChange: (e) => G(e),
                                    handlePaymentSourceAdd: () => N(I.h8.ADD_PAYMENT_STEPS),
                                    setHasAcceptedTerms: J,
                                    legalTermsNodeRef: ea,
                                    hasLegalTermsFlash: Q,
                                    trialFooterMessageOverride: A,
                                    reviewWarningMessage: P,
                                    metadata: er ? void 0 : q,
                                    purchaseState: z,
                                    hideSubscriptionDetails: !0,
                                    handleClose: M
                                })
                              : (0, i.jsx)(u.Z, {
                                    premiumSubscription: B,
                                    paymentSources: Z,
                                    priceOptions: D,
                                    onPaymentSourceChange: (e) => V(null != e ? e.id : null),
                                    onPaymentSourceAdd: () => {
                                        N(I.h8.ADD_PAYMENT_STEPS);
                                    },
                                    planId: w.id,
                                    setHasAcceptedTerms: J,
                                    legalTermsNodeRef: ea,
                                    hasLegalTermsFlash: Q,
                                    onInvoiceError: (e) => {
                                        ei(e);
                                    },
                                    planGroup: E,
                                    currencies: U,
                                    onCurrencyChange: (e) => G(e),
                                    hasOpenInvoice: null != v,
                                    purchaseState: z,
                                    handleClose: M
                                })
                      ]
                  }),
                  (0, i.jsx)(h.O3, {
                      children: (0, i.jsx)(b.Z, {
                          premiumSubscription: null != B ? B : null,
                          setPurchaseState: K,
                          onBack: () => null != O && N(O),
                          onNext: eo,
                          onPurchaseError: (e) => Y(e),
                          legalTermsNodeRef: ea,
                          flashLegalTerms: () => $(!0),
                          analyticsLocation: L,
                          baseAnalyticsData: R,
                          flowStartTime: y.startTime,
                          planGroup: E,
                          purchaseTokenAuthState: F,
                          openInvoiceId: v,
                          metadata: er ? void 0 : q,
                          backButtonEligible: o,
                          invoiceError: et,
                          disablePurchase: (null == q ? void 0 : q.guild_id) == null && !er
                      })
                  })
              ]
          });
}
