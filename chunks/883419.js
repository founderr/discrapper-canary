t.d(n, {
    Z: function () {
        return P;
    }
}),
    t(47120),
    t(789020);
var r = t(735250),
    i = t(470079),
    a = t(512722),
    s = t.n(a),
    o = t(481060),
    l = t(330726),
    c = t(716534),
    u = t(664891),
    d = t(171246),
    I = t(598),
    _ = t(409813),
    m = t(45572),
    f = t(51499),
    p = t(678334),
    T = t(456251),
    h = t(614277),
    N = t(698708),
    E = t(43542),
    C = t(689938),
    S = t(748605);
function P(e) {
    var n;
    let { backButtonEligible: t, prevStep: a, handleStepChange: P, trialFooterMessageOverride: g, reviewWarningMessage: A, planGroup: O, openInvoiceId: x, analyticsData: v, analyticsLocation: R, eligibleApplicationSubscriptionGuilds: b, handleClose: M } = e,
        { activeSubscription: L, application: B, setUpdatedSubscription: U, contextMetadata: j, currencies: Z, paymentSources: k, priceOptions: y, purchaseError: D, purchaseTokenAuthState: F, selectedPlan: H, selectedSku: w, setCurrency: V, setPaymentSourceId: G, setPurchaseState: W, setPurchaseError: Y, purchaseState: K, subscriptionMetadataRequest: X, setSubscriptionMetadataRequest: z, setHasAcceptedTerms: J } = (0, I.usePaymentContext)();
    s()(null != H, 'Expected plan to be selected'), s()(null != B, 'Expected application');
    let q = i.useRef(null),
        [Q, $] = (0, l.Z)(!1, 500),
        [ee, en] = i.useState(null == X ? void 0 : X.guild_id),
        [et, er] = i.useState(null),
        ei = (0, d.KW)(null !== (n = null == w ? void 0 : w.flags) && void 0 !== n ? n : 0);
    i.useEffect(() => {
        null != D && null != q.current && q.current.scrollIntoView({ behavior: 'smooth' });
    }, [D]);
    let ea = i.useCallback(
            (e) => {
                U(e), P(_.h8.CONFIRM);
            },
            [P, U]
        ),
        es = i.useCallback(
            (e) => {
                en(e),
                    z({
                        ...X,
                        guild_id: e
                    });
            },
            [en, z, X]
        ),
        eo = i.useRef(null);
    return K === m.A.PURCHASING
        ? (0, r.jsx)(T.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(f.Z, { className: S.breadcrumbs }),
                  (0, r.jsxs)(h.C3, {
                      children: [
                          (0, r.jsx)(N.Z, {}),
                          ei &&
                              (0, r.jsxs)('div', {
                                  className: S.userSubscriptionDetailsContainer,
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          variant: 'eyebrow',
                                          color: 'header-secondary',
                                          children: C.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
                                      }),
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'interactive-normal',
                                          children: C.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({ applicationName: B.name })
                                      })
                                  ]
                              }),
                          !ei &&
                              (0, r.jsxs)('div', {
                                  className: S.guildPickerContainer,
                                  children: [
                                      (0, r.jsx)(o.FormTitle, {
                                          tag: o.FormTitleTags.H5,
                                          children: C.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
                                      }),
                                      (0, r.jsx)(o.FormText, {
                                          type: o.FormText.Types.DESCRIPTION,
                                          className: S.guildPickerDescription,
                                          children: C.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
                                      }),
                                      (0, r.jsx)(E.y, {
                                          selectedGuildId: ee,
                                          onGuildChange: es,
                                          eligibleApplicationSubscriptionGuilds: b
                                      })
                                  ]
                              }),
                          null == L
                              ? (0, r.jsx)(c.Z, {
                                    selectedPlanId: H.id,
                                    paymentSources: k,
                                    onPaymentSourceChange: (e) => G(null != e ? e.id : null),
                                    priceOptions: y,
                                    currencies: Z,
                                    onCurrencyChange: (e) => V(e),
                                    handlePaymentSourceAdd: () => P(_.h8.ADD_PAYMENT_STEPS),
                                    setHasAcceptedTerms: J,
                                    legalTermsNodeRef: eo,
                                    hasLegalTermsFlash: Q,
                                    trialFooterMessageOverride: g,
                                    reviewWarningMessage: A,
                                    metadata: ei ? void 0 : X,
                                    purchaseState: K,
                                    hideSubscriptionDetails: !0,
                                    handleClose: M
                                })
                              : (0, r.jsx)(u.Z, {
                                    premiumSubscription: L,
                                    paymentSources: k,
                                    priceOptions: y,
                                    onPaymentSourceChange: (e) => G(null != e ? e.id : null),
                                    onPaymentSourceAdd: () => {
                                        P(_.h8.ADD_PAYMENT_STEPS);
                                    },
                                    planId: H.id,
                                    setHasAcceptedTerms: J,
                                    legalTermsNodeRef: eo,
                                    hasLegalTermsFlash: Q,
                                    onInvoiceError: (e) => {
                                        er(e);
                                    },
                                    planGroup: O,
                                    currencies: Z,
                                    onCurrencyChange: (e) => V(e),
                                    hasOpenInvoice: null != x,
                                    purchaseState: K,
                                    handleClose: M
                                })
                      ]
                  }),
                  (0, r.jsx)(h.O3, {
                      children: (0, r.jsx)(p.Z, {
                          premiumSubscription: null != L ? L : null,
                          setPurchaseState: W,
                          onBack: () => null != a && P(a),
                          onNext: ea,
                          onPurchaseError: (e) => Y(e),
                          legalTermsNodeRef: eo,
                          flashLegalTerms: () => $(!0),
                          analyticsLocation: R,
                          baseAnalyticsData: v,
                          flowStartTime: j.startTime,
                          planGroup: O,
                          purchaseTokenAuthState: F,
                          openInvoiceId: x,
                          metadata: ei ? void 0 : X,
                          backButtonEligible: t,
                          invoiceError: et,
                          disablePurchase: (null == X ? void 0 : X.guild_id) == null && !ei
                      })
                  })
              ]
          });
}
