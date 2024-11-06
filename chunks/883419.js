t.d(n, {
    Z: function () {
        return y;
    }
}),
    t(47120),
    t(789020);
var i = t(200651),
    r = t(192379),
    o = t(512722),
    a = t.n(o),
    l = t(442837),
    c = t(481060),
    s = t(330726),
    d = t(716534),
    u = t(664891),
    p = t(171246),
    f = t(430824),
    b = t(563132),
    m = t(409813),
    h = t(45572),
    x = t(51499),
    g = t(678334),
    _ = t(456251),
    v = t(614277),
    C = t(698708),
    S = t(388032),
    k = t(748605);
function y(e) {
    var n, t;
    let { backButtonEligible: o, prevStep: y, handleStepChange: j, trialFooterMessageOverride: T, reviewWarningMessage: P, planGroup: B, openInvoiceId: E, analyticsData: N, analyticsLocation: O, handleClose: I } = e,
        { activeSubscription: w, application: A, setUpdatedSubscription: M, contextMetadata: R, currencies: Z, paymentSources: H, priceOptions: F, purchaseError: L, purchaseTokenAuthState: D, selectedPlan: W, selectedSku: G, setCurrency: V, setPaymentSourceId: K, setPurchaseState: Y, setPurchaseError: z, purchaseState: U, subscriptionMetadataRequest: Q, setHasAcceptedTerms: q } = (0, b.usePaymentContext)();
    a()(null != W, 'Expected plan to be selected'), a()(null != A, 'Expected application');
    let X = r.useRef(null),
        [J, $] = (0, s.Z)(!1, 500),
        ee = null == Q ? void 0 : Q.guild_id,
        en = (0, l.e7)([f.Z], () => f.Z.getGuild(ee), [ee]),
        [et, ei] = r.useState(null),
        er = (0, p.KW)(null !== (n = null == G ? void 0 : G.flags) && void 0 !== n ? n : 0);
    r.useEffect(() => {
        null != L && null != X.current && X.current.scrollIntoView({ behavior: 'smooth' });
    }, [L]);
    let eo = r.useCallback(
            (e) => {
                M(e), j(m.h8.CONFIRM);
            },
            [j, M]
        ),
        ea = r.useRef(null);
    return U === h.A.PURCHASING
        ? (0, i.jsx)(_.Z, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(x.Z, { className: k.breadcrumbs }),
                  (0, i.jsxs)(v.C3, {
                      children: [
                          (0, i.jsx)(C.Z, {}),
                          er &&
                              (0, i.jsxs)('div', {
                                  className: k.userSubscriptionDetailsContainer,
                                  children: [
                                      (0, i.jsx)(c.Text, {
                                          variant: 'eyebrow',
                                          color: 'header-secondary',
                                          children: S.intl.string(S.t.nf5LOT)
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'interactive-normal',
                                          children: S.intl.format(S.t.y4n0GR, { applicationName: A.name })
                                      })
                                  ]
                              }),
                          !er &&
                              (0, i.jsxs)('div', {
                                  className: k.guildPickerContainer,
                                  children: [
                                      (0, i.jsx)(c.FormTitle, {
                                          tag: c.FormTitleTags.H5,
                                          children: S.intl.string(S.t['5qyruL'])
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: k.guildNameContainer,
                                          children: [
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-md/normal',
                                                  children: S.intl.string(S.t.dBih7e)
                                              }),
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-md/normal',
                                                  lineClamp: 1,
                                                  children: null !== (t = null == en ? void 0 : en.name) && void 0 !== t ? t : S.intl.string(S.t.dtwqPT)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                          null == w
                              ? (0, i.jsx)(d.Z, {
                                    selectedPlanId: W.id,
                                    paymentSources: H,
                                    onPaymentSourceChange: (e) => K(null != e ? e.id : null),
                                    priceOptions: F,
                                    currencies: Z,
                                    onCurrencyChange: (e) => V(e),
                                    handlePaymentSourceAdd: () => j(m.h8.ADD_PAYMENT_STEPS),
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
                                    premiumSubscription: w,
                                    paymentSources: H,
                                    priceOptions: F,
                                    onPaymentSourceChange: (e) => K(null != e ? e.id : null),
                                    onPaymentSourceAdd: () => {
                                        j(m.h8.ADD_PAYMENT_STEPS);
                                    },
                                    planId: W.id,
                                    setHasAcceptedTerms: q,
                                    legalTermsNodeRef: ea,
                                    hasLegalTermsFlash: J,
                                    onInvoiceError: (e) => {
                                        ei(e);
                                    },
                                    planGroup: B,
                                    currencies: Z,
                                    onCurrencyChange: (e) => V(e),
                                    hasOpenInvoice: null != E,
                                    purchaseState: U,
                                    handleClose: I
                                })
                      ]
                  }),
                  (0, i.jsx)(v.O3, {
                      children: (0, i.jsx)(g.Z, {
                          premiumSubscription: null != w ? w : null,
                          setPurchaseState: Y,
                          onBack: () => null != y && j(y),
                          onNext: eo,
                          onPurchaseError: (e) => z(e),
                          legalTermsNodeRef: ea,
                          flashLegalTerms: () => $(!0),
                          analyticsLocation: O,
                          baseAnalyticsData: N,
                          flowStartTime: R.startTime,
                          planGroup: B,
                          purchaseTokenAuthState: D,
                          openInvoiceId: E,
                          metadata: er ? void 0 : Q,
                          backButtonEligible: o,
                          invoiceError: et,
                          disablePurchase: (null == Q ? void 0 : Q.guild_id) == null && !er
                      })
                  })
              ]
          });
}
