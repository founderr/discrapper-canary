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
    c = t(481060),
    d = t(330726),
    s = t(716534),
    u = t(664891),
    f = t(171246),
    p = t(430824),
    m = t(563132),
    b = t(409813),
    _ = t(45572),
    x = t(51499),
    g = t(678334),
    h = t(456251),
    C = t(614277),
    v = t(698708),
    S = t(388032),
    j = t(596054);
function k(e) {
    var n, t;
    let { backButtonEligible: o, prevStep: k, handleStepChange: T, trialFooterMessageOverride: y, reviewWarningMessage: P, planGroup: B, openInvoiceId: N, analyticsData: E, analyticsLocation: A, handleClose: I } = e,
        { activeSubscription: O, application: Z, setUpdatedSubscription: M, contextMetadata: H, currencies: L, paymentSources: w, priceOptions: D, purchaseError: R, purchaseTokenAuthState: W, selectedPlan: F, selectedSku: G, setCurrency: z, setPaymentSourceId: K, setPurchaseState: V, setPurchaseError: Y, purchaseState: U, subscriptionMetadataRequest: Q, setHasAcceptedTerms: q } = (0, m.usePaymentContext)();
    a()(null != F, 'Expected plan to be selected');
    let J = r.useRef(null),
        [X, $] = (0, d.Z)(!1, 500),
        ee = null == Q ? void 0 : Q.guild_id,
        en = (0, l.e7)([p.Z], () => p.Z.getGuild(ee), [ee]),
        [et, ei] = r.useState(null),
        er = (0, f.KW)(null !== (n = null == G ? void 0 : G.flags) && void 0 !== n ? n : 0);
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
                                                  children: null !== (t = null == en ? void 0 : en.name) && void 0 !== t ? t : S.intl.string(S.t.dtwqPT)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                          null == O
                              ? (0, i.jsx)(s.Z, {
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
                                    reviewWarningMessage: P,
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
                                    planGroup: B,
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
                          planGroup: B,
                          purchaseTokenAuthState: W,
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
