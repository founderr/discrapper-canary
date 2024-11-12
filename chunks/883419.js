t.d(n, {
    Z: function () {
        return k;
    }
}),
    t(47120),
    t(789020);
var i = t(200651),
    r = t(192379),
    o = t(512722),
    a = t.n(o),
    l = t(442837),
    s = t(481060),
    c = t(330726),
    d = t(716534),
    u = t(664891),
    p = t(171246),
    f = t(430824),
    m = t(563132),
    b = t(409813),
    h = t(45572),
    g = t(51499),
    x = t(678334),
    _ = t(456251),
    v = t(614277),
    C = t(698708),
    S = t(388032),
    j = t(748605);
function k(e) {
    var n, t;
    let { backButtonEligible: o, prevStep: k, handleStepChange: y, trialFooterMessageOverride: T, reviewWarningMessage: P, planGroup: B, openInvoiceId: N, analyticsData: O, analyticsLocation: E, handleClose: I } = e,
        { activeSubscription: A, application: M, setUpdatedSubscription: w, contextMetadata: Z, currencies: R, paymentSources: H, priceOptions: L, purchaseError: F, purchaseTokenAuthState: D, selectedPlan: W, selectedSku: G, setCurrency: K, setPaymentSourceId: V, setPurchaseState: z, setPurchaseError: Y, purchaseState: U, subscriptionMetadataRequest: Q, setHasAcceptedTerms: q } = (0, m.usePaymentContext)();
    a()(null != W, 'Expected plan to be selected'), a()(null != M, 'Expected application');
    let X = r.useRef(null),
        [J, $] = (0, c.Z)(!1, 500),
        ee = null == Q ? void 0 : Q.guild_id,
        en = (0, l.e7)([f.Z], () => f.Z.getGuild(ee), [ee]),
        [et, ei] = r.useState(null),
        er = (0, p.KW)(null !== (n = null == G ? void 0 : G.flags) && void 0 !== n ? n : 0);
    r.useEffect(() => {
        null != F && null != X.current && X.current.scrollIntoView({ behavior: 'smooth' });
    }, [F]);
    let eo = r.useCallback(
            (e) => {
                w(e), y(b.h8.CONFIRM);
            },
            [y, w]
        ),
        ea = r.useRef(null);
    return U === h.A.PURCHASING
        ? (0, i.jsx)(_.Z, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(g.Z, { className: j.breadcrumbs }),
                  (0, i.jsxs)(v.C3, {
                      children: [
                          (0, i.jsx)(C.Z, {}),
                          er &&
                              (0, i.jsxs)('div', {
                                  className: j.userSubscriptionDetailsContainer,
                                  children: [
                                      (0, i.jsx)(s.Text, {
                                          variant: 'eyebrow',
                                          color: 'header-secondary',
                                          children: S.intl.string(S.t.nf5LOT)
                                      }),
                                      (0, i.jsx)(s.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'interactive-normal',
                                          children: S.intl.format(S.t.y4n0GR, { applicationName: M.name })
                                      })
                                  ]
                              }),
                          !er &&
                              (0, i.jsxs)('div', {
                                  className: j.guildPickerContainer,
                                  children: [
                                      (0, i.jsx)(s.FormTitle, {
                                          tag: s.FormTitleTags.H5,
                                          children: S.intl.string(S.t['5qyruL'])
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: j.guildNameContainer,
                                          children: [
                                              (0, i.jsx)(s.Text, {
                                                  variant: 'text-md/normal',
                                                  children: S.intl.string(S.t.dBih7e)
                                              }),
                                              (0, i.jsx)(s.Text, {
                                                  variant: 'text-md/normal',
                                                  lineClamp: 1,
                                                  children: null !== (t = null == en ? void 0 : en.name) && void 0 !== t ? t : S.intl.string(S.t.dtwqPT)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                          null == A
                              ? (0, i.jsx)(d.Z, {
                                    selectedPlanId: W.id,
                                    paymentSources: H,
                                    onPaymentSourceChange: (e) => V(null != e ? e.id : null),
                                    priceOptions: L,
                                    currencies: R,
                                    onCurrencyChange: (e) => K(e),
                                    handlePaymentSourceAdd: () => y(b.h8.ADD_PAYMENT_STEPS),
                                    setHasAcceptedTerms: q,
                                    legalTermsNodeRef: ea,
                                    hasLegalTermsFlash: J,
                                    trialFooterMessageOverride: T,
                                    reviewWarningMessage: P,
                                    metadata: er ? void 0 : Q,
                                    purchaseState: U,
                                    hideSubscriptionDetails: !0,
                                    handleClose: I
                                })
                              : (0, i.jsx)(u.Z, {
                                    premiumSubscription: A,
                                    paymentSources: H,
                                    priceOptions: L,
                                    onPaymentSourceChange: (e) => V(null != e ? e.id : null),
                                    onPaymentSourceAdd: () => {
                                        y(b.h8.ADD_PAYMENT_STEPS);
                                    },
                                    planId: W.id,
                                    setHasAcceptedTerms: q,
                                    legalTermsNodeRef: ea,
                                    hasLegalTermsFlash: J,
                                    onInvoiceError: (e) => {
                                        ei(e);
                                    },
                                    planGroup: B,
                                    currencies: R,
                                    onCurrencyChange: (e) => K(e),
                                    hasOpenInvoice: null != N,
                                    purchaseState: U,
                                    handleClose: I
                                })
                      ]
                  }),
                  (0, i.jsx)(v.O3, {
                      children: (0, i.jsx)(x.Z, {
                          premiumSubscription: null != A ? A : null,
                          setPurchaseState: z,
                          onBack: () => null != k && y(k),
                          onNext: eo,
                          onPurchaseError: (e) => Y(e),
                          legalTermsNodeRef: ea,
                          flashLegalTerms: () => $(!0),
                          analyticsLocation: E,
                          baseAnalyticsData: O,
                          flowStartTime: Z.startTime,
                          planGroup: B,
                          purchaseTokenAuthState: D,
                          openInvoiceId: N,
                          metadata: er ? void 0 : Q,
                          backButtonEligible: o,
                          invoiceError: et,
                          disablePurchase: (null == Q ? void 0 : Q.guild_id) == null && !er
                      })
                  })
              ]
          });
}
