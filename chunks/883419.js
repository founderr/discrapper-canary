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
    let { backButtonEligible: t, prevStep: a, showGuildPicker: P, handleStepChange: g, trialFooterMessageOverride: A, reviewWarningMessage: O, planGroup: x, openInvoiceId: v, analyticsData: R, analyticsLocation: b, eligibleApplicationSubscriptionGuilds: M, handleClose: L } = e,
        { activeSubscription: B, application: U, setUpdatedSubscription: j, contextMetadata: Z, currencies: k, paymentSources: y, priceOptions: D, purchaseError: F, purchaseTokenAuthState: H, selectedPlan: w, selectedSku: V, setCurrency: G, setPaymentSourceId: W, setPurchaseState: Y, setPurchaseError: K, purchaseState: X, subscriptionMetadataRequest: z, setSubscriptionMetadataRequest: J, setHasAcceptedTerms: q } = (0, I.usePaymentContext)();
    s()(null != w, 'Expected plan to be selected'), s()(null != U, 'Expected application');
    let Q = i.useRef(null),
        [$, ee] = (0, l.Z)(!1, 500),
        [en, et] = i.useState(null == z ? void 0 : z.guild_id),
        [er, ei] = i.useState(null),
        ea = (0, d.KW)(null !== (n = null == V ? void 0 : V.flags) && void 0 !== n ? n : 0);
    i.useEffect(() => {
        null != F && null != Q.current && Q.current.scrollIntoView({ behavior: 'smooth' });
    }, [F]);
    let es = i.useCallback(
            (e) => {
                j(e), g(_.h8.CONFIRM);
            },
            [g, j]
        ),
        eo = i.useCallback(
            (e) => {
                et(e),
                    J({
                        ...z,
                        guild_id: e
                    });
            },
            [et, J, z]
        ),
        el = i.useRef(null);
    return X === m.A.PURCHASING
        ? (0, r.jsx)(T.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(f.Z, { className: S.breadcrumbs }),
                  (0, r.jsxs)(h.C3, {
                      children: [
                          (0, r.jsx)(N.Z, {}),
                          ea &&
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
                                          children: C.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({ applicationName: U.name })
                                      })
                                  ]
                              }),
                          P &&
                              !ea &&
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
                                          selectedGuildId: en,
                                          onGuildChange: eo,
                                          eligibleApplicationSubscriptionGuilds: M
                                      })
                                  ]
                              }),
                          null == B
                              ? (0, r.jsx)(c.Z, {
                                    selectedPlanId: w.id,
                                    paymentSources: y,
                                    onPaymentSourceChange: (e) => W(null != e ? e.id : null),
                                    priceOptions: D,
                                    currencies: k,
                                    onCurrencyChange: (e) => G(e),
                                    handlePaymentSourceAdd: () => g(_.h8.ADD_PAYMENT_STEPS),
                                    setHasAcceptedTerms: q,
                                    legalTermsNodeRef: el,
                                    hasLegalTermsFlash: $,
                                    trialFooterMessageOverride: A,
                                    reviewWarningMessage: O,
                                    metadata: P || ea ? void 0 : z,
                                    purchaseState: X,
                                    hideSubscriptionDetails: !0,
                                    handleClose: L
                                })
                              : (0, r.jsx)(u.Z, {
                                    premiumSubscription: B,
                                    paymentSources: y,
                                    priceOptions: D,
                                    onPaymentSourceChange: (e) => W(null != e ? e.id : null),
                                    onPaymentSourceAdd: () => {
                                        g(_.h8.ADD_PAYMENT_STEPS);
                                    },
                                    planId: w.id,
                                    setHasAcceptedTerms: q,
                                    legalTermsNodeRef: el,
                                    hasLegalTermsFlash: $,
                                    onInvoiceError: (e) => {
                                        ei(e);
                                    },
                                    planGroup: x,
                                    currencies: k,
                                    onCurrencyChange: (e) => G(e),
                                    hasOpenInvoice: null != v,
                                    purchaseState: X,
                                    handleClose: L
                                })
                      ]
                  }),
                  (0, r.jsx)(h.O3, {
                      children: (0, r.jsx)(p.Z, {
                          premiumSubscription: null != B ? B : null,
                          setPurchaseState: Y,
                          onBack: () => null != a && g(a),
                          onNext: es,
                          onPurchaseError: (e) => K(e),
                          legalTermsNodeRef: el,
                          flashLegalTerms: () => ee(!0),
                          analyticsLocation: b,
                          baseAnalyticsData: R,
                          flowStartTime: Z.startTime,
                          planGroup: x,
                          purchaseTokenAuthState: H,
                          openInvoiceId: v,
                          metadata: ea ? void 0 : z,
                          backButtonEligible: t,
                          invoiceError: er,
                          disablePurchase: (null == z ? void 0 : z.guild_id) == null && !ea
                      })
                  })
              ]
          });
}
