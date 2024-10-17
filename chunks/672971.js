t(411104), t(47120);
var a = t(735250),
    s = t(470079),
    r = t(120356),
    i = t.n(r),
    l = t(512722),
    o = t.n(l),
    c = t(442837),
    u = t(481060),
    d = t(850840),
    _ = t(63063),
    I = t(74538),
    E = t(981631),
    T = t(474936),
    A = t(689938),
    N = t(961667);
function P(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class M extends s.Component {
    componentDidMount() {
        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
    }
    componentDidUpdate(e, n) {
        let t = this.hasAcceptedNeccessaryTerms(e, n),
            a = this.hasAcceptedNeccessaryTerms(this.props, this.state);
        a !== t && this.props.onChange(a);
    }
    hasAcceptedNeccessaryTerms(e, n) {
        return (null == e.eulaId || n.hasAcceptedEULA) && (!e.showWithdrawalWaiver || n.hasAcceptedWithdrawalWaiver);
    }
    formatInterval(e) {
        if (e === T.rV.YEAR) return A.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
        if (e === T.rV.MONTH) return A.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
        throw Error('Invalid interval type: '.concat(e));
    }
    render() {
        let { eulaId: e, applicationName: n, hasPreviouslyAcceptedEULA: s, forceShow: r, disabled: l, className: c, checkboxClassname: d, checkboxLabelClassname: T, finePrint: P, showPricingLink: M, showWithdrawalWaiver: p, isTrial: R, inReverseTrial: L, isDiscount: f, subscriptionPlan: S, finePrintClassname: C } = this.props,
            { hasAcceptedEULA: m, hasAcceptedWithdrawalWaiver: b } = this.state;
        return (o()(!R || null != S, 'subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true'), r || (null != e && !s) || p)
            ? (0, a.jsxs)('div', {
                  className: c,
                  children: [
                      p &&
                          (0, a.jsx)(u.FormTitle, {
                              className: N.formTitle,
                              children: A.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER
                          }),
                      null != e && (r || !s)
                          ? (0, a.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: m,
                                onChange: this.handleToggleEULAAcceptance,
                                disabled: l,
                                className: N.checkbox,
                                children: (0, a.jsx)('div', {
                                    className: N.checkboxLabel,
                                    children: A.Z.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                                        applicationName: n,
                                        onClick: (n) => {
                                            (0, u.openModalLazy)(async () => {
                                                let { default: n } = await t.e('51868').then(t.bind(t, 796504));
                                                return (t) =>
                                                    (0, a.jsx)(n, {
                                                        eulaId: e,
                                                        ...t
                                                    });
                                            }),
                                                n.preventDefault();
                                        }
                                    })
                                })
                            })
                          : null,
                      null == P
                          ? null
                          : (0, a.jsx)('div', {
                                className: i()(N.finePrint, C),
                                children: P
                            }),
                      p
                          ? (0, a.jsxs)('div', {
                                className: c,
                                children: [
                                    (0, a.jsx)(u.Checkbox, {
                                        type: u.Checkbox.Types.INVERTED,
                                        value: b,
                                        onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                        disabled: l,
                                        className: i()(N.checkbox, d),
                                        children: (0, a.jsx)('div', {
                                            className: i()(N.checkboxLabel, T),
                                            children: A.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                        })
                                    }),
                                    (0, a.jsx)('div', {
                                        className: N.finePrint,
                                        children: A.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                                    })
                                ]
                            })
                          : null,
                      M &&
                          (0, a.jsxs)('div', {
                              className: N.finePrint,
                              children: ['*', A.Z.Messages.BILLING_HOW_PRICING_WORKS.format({ documentationLink: _.Z.getArticleURL(E.BhN.LOCALIZED_PRICING) })]
                          }),
                      R &&
                          null != S &&
                          (0, a.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: A.Z.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                  buttonText: (0, I.W_)(null, S),
                                  interval: this.formatInterval(null == S ? void 0 : S.interval),
                                  cancelSubscriptionArticle: _.Z.getArticleURL(E.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: _.Z.getArticleURL(E.BhN.PAID_TERMS)
                              })
                          }),
                      L &&
                          null != S &&
                          (0, a.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: A.Z.Messages.BILLING_REVERSE_TRIAL_LEGAL_COPY.format({
                                  buttonText: (0, I.W_)(null, S),
                                  interval: this.formatInterval(null == S ? void 0 : S.interval),
                                  cancelSubscriptionArticle: _.Z.getArticleURL(E.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: _.Z.getArticleURL(E.BhN.PAID_TERMS)
                              })
                          }),
                      f &&
                          null != S &&
                          (0, a.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: A.Z.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                                  buttonText: (0, I.W_)(null, S),
                                  interval: this.formatInterval(null == S ? void 0 : S.interval),
                                  cancelSubscriptionArticle: _.Z.getArticleURL(E.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: _.Z.getArticleURL(E.BhN.PAID_TERMS)
                              })
                          })
                  ]
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            P(this, 'state', {
                hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
                hasAcceptedWithdrawalWaiver: !1
            }),
            P(this, 'handleToggleEUWithdralWaiverAcceptance', (e, n) => {
                this.setState({ hasAcceptedWithdrawalWaiver: n });
            }),
            P(this, 'handleToggleEULAAcceptance', (e, n) => {
                this.setState({ hasAcceptedEULA: n });
            });
    }
}
n.Z = c.ZP.connectStores([d.Z], (e) => {
    let { eulaId: n } = e;
    return { hasPreviouslyAcceptedEULA: null != n && d.Z.hasAcceptedEULA(n) };
})(M);
