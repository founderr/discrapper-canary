t(411104), t(47120);
var r = t(200651),
    i = t(192379),
    a = t(120356),
    l = t.n(a),
    s = t(512722),
    o = t.n(s),
    c = t(442837),
    u = t(481060),
    d = t(850840),
    p = t(63063),
    f = t(74538),
    m = t(981631),
    b = t(474936),
    v = t(388032),
    h = t(175782);
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
class A extends i.Component {
    componentDidMount() {
        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
    }
    componentDidUpdate(e, n) {
        let t = this.hasAcceptedNeccessaryTerms(e, n),
            r = this.hasAcceptedNeccessaryTerms(this.props, this.state);
        r !== t && this.props.onChange(r);
    }
    hasAcceptedNeccessaryTerms(e, n) {
        return (null == e.eulaId || n.hasAcceptedEULA) && (!e.showWithdrawalWaiver || n.hasAcceptedWithdrawalWaiver);
    }
    formatInterval(e) {
        if (e === b.rV.YEAR) return v.intl.string(v.t.tfqrho);
        if (e === b.rV.MONTH) return v.intl.string(v.t.FPybU1);
        throw Error('Invalid interval type: '.concat(e));
    }
    render() {
        let { eulaId: e, applicationName: n, hasPreviouslyAcceptedEULA: i, forceShow: a, disabled: s, className: c, checkboxClassname: d, checkboxLabelClassname: b, finePrint: P, showPricingLink: A, showWithdrawalWaiver: T, isTrial: g, inReverseTrial: y, isDiscount: E, subscriptionPlan: I, finePrintClassname: x } = this.props,
            { hasAcceptedEULA: _, hasAcceptedWithdrawalWaiver: N } = this.state;
        return (o()(!g || null != I, 'subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true'), a || (null != e && !i) || T)
            ? (0, r.jsxs)('div', {
                  className: c,
                  children: [
                      T &&
                          (0, r.jsx)(u.FormTitle, {
                              className: h.formTitle,
                              children: v.intl.string(v.t.Ogvn5u)
                          }),
                      null != e && (a || !i)
                          ? (0, r.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: _,
                                onChange: this.handleToggleEULAAcceptance,
                                disabled: s,
                                className: h.checkbox,
                                children: (0, r.jsx)('div', {
                                    className: h.checkboxLabel,
                                    children: v.intl.format(v.t.IodJKS, {
                                        applicationName: n,
                                        onClick: (n) => {
                                            (0, u.openModalLazy)(async () => {
                                                let { default: n } = await t.e('51868').then(t.bind(t, 796504));
                                                return (t) =>
                                                    (0, r.jsx)(n, {
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
                          : (0, r.jsx)('div', {
                                className: l()(h.finePrint, x),
                                children: P
                            }),
                      T
                          ? (0, r.jsxs)('div', {
                                className: c,
                                children: [
                                    (0, r.jsx)(u.Checkbox, {
                                        type: u.Checkbox.Types.INVERTED,
                                        value: N,
                                        onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                        disabled: s,
                                        className: l()(h.checkbox, d),
                                        children: (0, r.jsx)('div', {
                                            className: l()(h.checkboxLabel, b),
                                            children: v.intl.string(v.t.DFCVNz)
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: h.finePrint,
                                        children: v.intl.string(v.t.jhu6zs)
                                    })
                                ]
                            })
                          : null,
                      A &&
                          (0, r.jsxs)('div', {
                              className: h.finePrint,
                              children: ['*', v.intl.format(v.t['5zmY3N'], { documentationLink: p.Z.getArticleURL(m.BhN.LOCALIZED_PRICING) })]
                          }),
                      g &&
                          null != I &&
                          (0, r.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: v.intl.format(v.t['Hvo/Z2'], {
                                  buttonText: (0, f.W_)(null, I),
                                  interval: this.formatInterval(null == I ? void 0 : I.interval),
                                  cancelSubscriptionArticle: p.Z.getArticleURL(m.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: p.Z.getArticleURL(m.BhN.PAID_TERMS)
                              })
                          }),
                      y &&
                          null != I &&
                          (0, r.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: v.intl.format(v.t.Oo2FeX, {
                                  buttonText: (0, f.W_)(null, I),
                                  interval: this.formatInterval(null == I ? void 0 : I.interval),
                                  cancelSubscriptionArticle: p.Z.getArticleURL(m.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: p.Z.getArticleURL(m.BhN.PAID_TERMS)
                              })
                          }),
                      E &&
                          null != I &&
                          (0, r.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: v.intl.format(v.t['Z2c+aW'], {
                                  buttonText: (0, f.W_)(null, I),
                                  interval: this.formatInterval(null == I ? void 0 : I.interval),
                                  cancelSubscriptionArticle: p.Z.getArticleURL(m.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: p.Z.getArticleURL(m.BhN.PAID_TERMS)
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
})(A);
