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
    _ = n(45572),
    x = n(51499),
    g = n(678334),
    h = n(456251),
    C = n(614277),
    v = n(698708),
    S = n(388032),
    j = n(596054);
function k(e) {
    var t, n;
    let { backButtonEligible: o, prevStep: k, handleStepChange: T, trialFooterMessageOverride: y, reviewWarningMessage: B, planGroup: P, openInvoiceId: N, analyticsData: E, analyticsLocation: A, handleClose: I } = e,
        { activeSubscription: O, application: Z, setUpdatedSubscription: M, contextMetadata: H, currencies: L, paymentSources: w, priceOptions: D, purchaseError: R, purchaseTokenAuthState: W, selectedPlan: F, selectedSku: G, setCurrency: z, setPaymentSourceId: K, setPurchaseState: V, setPurchaseError: Y, purchaseState: U, subscriptionMetadataRequest: Q, setHasAcceptedTerms: q } = (0, m.usePaymentContext)();
    a()(null != F, 'Expected plan to be selected');
    let J = r.useRef(null),
        [X, $] = (0, s.Z)(!1, 500),
        ee = null == Q ? void 0 : Q.guild_id,
        et = (0, l.e7)([p.Z], () => p.Z.getGuild(ee), [ee]),
        [en, ei] = r.useState(null),
        er = (0, f.KW)(null !== (t = null == G ? void 0 : G.flags) && void 0 !== t ? t : 0);
    r.useEffect(() => {
        null != R && null != J.current && J.current.scrollIntoView({ behavior: 'smooth' });
    }, [R]);
    let eo = r.useCallback(
            (e) => {
                M(e), T(b.h8.CONFIRM);
            },
            [T, M]
        ),
        ea = r.useRef(null);
    return U === _.A.PURCHASING
        ? (0, i.jsx)(h.Z, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(x.Z, { className: j.breadcrumbs }),
                  (0, i.jsxs)(C.C3, {
                      children: [
                          (0, i.jsx)(v.Z, {}),
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
                                          children: S.intl.format(S.t.y4n0GR, { applicationName: null == Z ? void 0 : Z.name })
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
                          null == O
                              ? (0, i.jsx)(d.Z, {
                                    selectedPlanId: F.id,
                                    paymentSources: w,
                                    onPaymentSourceChange: (e) => K(null != e ? e.id : null),
                                    priceOptions: D,
                                    currencies: L,
                                    onCurrencyChange: (e) => z(e),
                                    handlePaymentSourceAdd: () => T(b.h8.ADD_PAYMENT_STEPS),
                                    setHasAcceptedTerms: q,
                                    legalTermsNodeRef: ea,
                                    hasLegalTermsFlash: X,
                                    trialFooterMessageOverride: y,
                                    reviewWarningMessage: B,
                                    metadata: er ? void 0 : Q,
                                    purchaseState: U,
                                    hideSubscriptionDetails: !0,
                                    handleClose: I
                                })
                              : (0, i.jsx)(u.Z, {
                                    premiumSubscription: O,
                                    paymentSources: w,
                                    priceOptions: D,
                                    onPaymentSourceChange: (e) => K(null != e ? e.id : null),
                                    onPaymentSourceAdd: () => {
                                        T(b.h8.ADD_PAYMENT_STEPS);
                                    },
                                    planId: F.id,
                                    setHasAcceptedTerms: q,
                                    legalTermsNodeRef: ea,
                                    hasLegalTermsFlash: X,
                                    onInvoiceError: (e) => {
                                        ei(e);
                                    },
                                    planGroup: P,
                                    currencies: L,
                                    onCurrencyChange: (e) => z(e),
                                    hasOpenInvoice: null != N,
                                    purchaseState: U,
                                    handleClose: I
                                })
                      ]
                  }),
                  (0, i.jsx)(C.O3, {
                      children: (0, i.jsx)(g.Z, {
                          premiumSubscription: null != O ? O : null,
                          setPurchaseState: V,
                          onBack: () => null != k && T(k),
                          onNext: eo,
                          onPurchaseError: (e) => Y(e),
                          legalTermsNodeRef: ea,
                          flashLegalTerms: () => $(!0),
                          analyticsLocation: A,
                          baseAnalyticsData: E,
                          flowStartTime: H.startTime,
                          planGroup: P,
                          purchaseTokenAuthState: W,
                          openInvoiceId: N,
                          metadata: er ? void 0 : Q,
                          backButtonEligible: o,
                          invoiceError: en,
                          disablePurchase: (null == Q ? void 0 : Q.guild_id) == null && !er
                      })
                  })
              ]
          });
}
