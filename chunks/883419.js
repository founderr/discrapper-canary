n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120),
    n(789020);
var r = n(735250),
    a = n(470079),
    i = n(512722),
    l = n.n(i),
    s = n(481060),
    o = n(330726),
    u = n(716534),
    c = n(664891),
    d = n(171246),
    I = n(598),
    _ = n(409813),
    h = n(45572),
    f = n(51499),
    S = n(678334),
    E = n(456251),
    m = n(614277),
    p = n(698708),
    T = n(43542),
    C = n(689938),
    N = n(748605);
function A(e) {
    var t;
    let { backButtonEligible: n, prevStep: i, showGuildPicker: A, handleStepChange: O, trialFooterMessageOverride: P, reviewWarningMessage: b, planGroup: g, openInvoiceId: R, analyticsData: v, analyticsLocation: L, eligibleApplicationSubscriptionGuilds: x, handleClose: M } = e,
        { activeSubscription: k, application: B, setUpdatedSubscription: j, contextMetadata: U, currencies: Z, paymentSources: y, priceOptions: D, purchaseError: w, purchaseTokenAuthState: F, selectedPlan: H, selectedSku: V, setCurrency: G, setPaymentSourceId: W, setPurchaseState: K, setPurchaseError: Y, purchaseState: X, subscriptionMetadataRequest: z, setSubscriptionMetadataRequest: J, setHasAcceptedTerms: q } = (0, I.usePaymentContext)();
    l()(null != H, 'Expected plan to be selected'), l()(null != B, 'Expected application');
    let Q = a.useRef(null),
        [$, ee] = (0, o.Z)(!1, 500),
        [et, en] = a.useState(null == z ? void 0 : z.guild_id),
        [er, ea] = a.useState(null),
        ei = (0, d.KW)(null !== (t = null == V ? void 0 : V.flags) && void 0 !== t ? t : 0);
    a.useEffect(() => {
        null != w && null != Q.current && Q.current.scrollIntoView({ behavior: 'smooth' });
    }, [w]);
    let el = a.useCallback(
            (e) => {
                j(e), O(_.h8.CONFIRM);
            },
            [O, j]
        ),
        es = a.useCallback(
            (e) => {
                en(e),
                    J({
                        ...z,
                        guild_id: e
                    });
            },
            [en, J, z]
        ),
        eo = a.useRef(null);
    return X === h.A.PURCHASING
        ? (0, r.jsx)(E.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(f.Z, { className: N.breadcrumbs }),
                  (0, r.jsxs)(m.C3, {
                      children: [
                          (0, r.jsx)(p.Z, {}),
                          ei &&
                              (0, r.jsxs)('div', {
                                  className: N.userSubscriptionDetailsContainer,
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          variant: 'eyebrow',
                                          color: 'header-secondary',
                                          children: C.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
                                      }),
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'interactive-normal',
                                          children: C.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({ applicationName: B.name })
                                      })
                                  ]
                              }),
                          A &&
                              !ei &&
                              (0, r.jsxs)('div', {
                                  className: N.guildPickerContainer,
                                  children: [
                                      (0, r.jsx)(s.FormTitle, {
                                          tag: s.FormTitleTags.H5,
                                          children: C.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
                                      }),
                                      (0, r.jsx)(s.FormText, {
                                          type: s.FormText.Types.DESCRIPTION,
                                          className: N.guildPickerDescription,
                                          children: C.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
                                      }),
                                      (0, r.jsx)(T.y, {
                                          selectedGuildId: et,
                                          onGuildChange: es,
                                          eligibleApplicationSubscriptionGuilds: x
                                      })
                                  ]
                              }),
                          null == k
                              ? (0, r.jsx)(u.Z, {
                                    selectedPlanId: H.id,
                                    paymentSources: y,
                                    onPaymentSourceChange: (e) => W(null != e ? e.id : null),
                                    priceOptions: D,
                                    currencies: Z,
                                    onCurrencyChange: (e) => G(e),
                                    handlePaymentSourceAdd: () => O(_.h8.ADD_PAYMENT_STEPS),
                                    setHasAcceptedTerms: q,
                                    legalTermsNodeRef: eo,
                                    hasLegalTermsFlash: $,
                                    trialFooterMessageOverride: P,
                                    reviewWarningMessage: b,
                                    metadata: A || ei ? void 0 : z,
                                    purchaseState: X,
                                    hideSubscriptionDetails: !0,
                                    handleClose: M
                                })
                              : (0, r.jsx)(c.Z, {
                                    premiumSubscription: k,
                                    paymentSources: y,
                                    priceOptions: D,
                                    onPaymentSourceChange: (e) => W(null != e ? e.id : null),
                                    onPaymentSourceAdd: () => {
                                        O(_.h8.ADD_PAYMENT_STEPS);
                                    },
                                    planId: H.id,
                                    setHasAcceptedTerms: q,
                                    legalTermsNodeRef: eo,
                                    hasLegalTermsFlash: $,
                                    onInvoiceError: (e) => {
                                        ea(e);
                                    },
                                    planGroup: g,
                                    currencies: Z,
                                    onCurrencyChange: (e) => G(e),
                                    hasOpenInvoice: null != R,
                                    purchaseState: X,
                                    handleClose: M
                                })
                      ]
                  }),
                  (0, r.jsx)(m.O3, {
                      children: (0, r.jsx)(S.Z, {
                          premiumSubscription: null != k ? k : null,
                          setPurchaseState: K,
                          onBack: () => null != i && O(i),
                          onNext: el,
                          onPurchaseError: (e) => Y(e),
                          legalTermsNodeRef: eo,
                          flashLegalTerms: () => ee(!0),
                          analyticsLocation: L,
                          baseAnalyticsData: v,
                          flowStartTime: U.startTime,
                          planGroup: g,
                          purchaseTokenAuthState: F,
                          openInvoiceId: R,
                          metadata: ei ? void 0 : z,
                          backButtonEligible: n,
                          invoiceError: er,
                          disablePurchase: (null == z ? void 0 : z.guild_id) == null && !ei
                      })
                  })
              ]
          });
}
