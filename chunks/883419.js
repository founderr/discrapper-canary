n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120),
    n(789020);
var i = n(200651),
    r = n(192379),
    o = n(512722),
    a = n.n(o),
    l = n(442837),
    c = n(481060),
    s = n(330726),
    d = n(716534),
    u = n(664891),
    f = n(171246),
    p = n(430824),
    m = n(563132),
    b = n(409813),
    h = n(45572),
    g = n(51499),
    x = n(678334),
    _ = n(456251),
    v = n(614277),
    C = n(698708),
    S = n(388032),
    j = n(596054);
function k(e) {
    var t, n;
    let { backButtonEligible: o, prevStep: k, handleStepChange: y, trialFooterMessageOverride: T, reviewWarningMessage: P, planGroup: B, openInvoiceId: E, analyticsData: N, analyticsLocation: O, handleClose: I } = e,
        { activeSubscription: A, application: M, setUpdatedSubscription: w, contextMetadata: Z, currencies: R, paymentSources: H, priceOptions: L, purchaseError: D, purchaseTokenAuthState: F, selectedPlan: W, selectedSku: G, setCurrency: K, setPaymentSourceId: V, setPurchaseState: z, setPurchaseError: Y, purchaseState: U, subscriptionMetadataRequest: Q, setHasAcceptedTerms: q } = (0, m.usePaymentContext)();
    a()(null != W, 'Expected plan to be selected');
    let X = r.useRef(null),
        [J, $] = (0, s.Z)(!1, 500),
        ee = null == Q ? void 0 : Q.guild_id,
        et = (0, l.e7)([p.Z], () => p.Z.getGuild(ee), [ee]),
        [en, ei] = r.useState(null),
        er = (0, f.KW)(null !== (t = null == G ? void 0 : G.flags) && void 0 !== t ? t : 0);
    r.useEffect(() => {
        null != D && null != X.current && X.current.scrollIntoView({ behavior: 'smooth' });
    }, [D]);
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
                                      (0, i.jsx)(c.Text, {
                                          variant: 'eyebrow',
                                          color: 'header-secondary',
                                          children: S.intl.string(S.t.nf5LOT)
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'interactive-normal',
                                          children: S.intl.format(S.t.y4n0GR, { applicationName: null == M ? void 0 : M.name })
                                      })
                                  ]
                              }),
                          !er &&
                              (0, i.jsxs)('div', {
                                  className: j.guildPickerContainer,
                                  children: [
                                      (0, i.jsx)(c.FormTitle, {
                                          tag: c.FormTitleTags.H5,
                                          children: S.intl.string(S.t['5qyruL'])
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: j.guildNameContainer,
                                          children: [
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-md/normal',
                                                  children: S.intl.string(S.t.dBih7e)
                                              }),
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-md/normal',
                                                  lineClamp: 1,
                                                  children: null !== (n = null == et ? void 0 : et.name) && void 0 !== n ? n : S.intl.string(S.t.dtwqPT)
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
                                    hasOpenInvoice: null != E,
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
                          analyticsLocation: O,
                          baseAnalyticsData: N,
                          flowStartTime: Z.startTime,
                          planGroup: B,
                          purchaseTokenAuthState: F,
                          openInvoiceId: E,
                          metadata: er ? void 0 : Q,
                          backButtonEligible: o,
                          invoiceError: en,
                          disablePurchase: (null == Q ? void 0 : Q.guild_id) == null && !er
                      })
                  })
              ]
          });
}
