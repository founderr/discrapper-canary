t(411104), t(47120);
var i = t(200651),
    r = t(192379),
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
    h = t(961667);
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
class g extends r.Component {
    componentDidMount() {
        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
    }
    componentDidUpdate(e, n) {
        let t = this.hasAcceptedNeccessaryTerms(e, n),
            i = this.hasAcceptedNeccessaryTerms(this.props, this.state);
        i !== t && this.props.onChange(i);
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
        let { eulaId: e, applicationName: n, hasPreviouslyAcceptedEULA: r, forceShow: a, disabled: s, className: c, checkboxClassname: d, checkboxLabelClassname: b, finePrint: P, showPricingLink: g, showWithdrawalWaiver: T, isTrial: y, inReverseTrial: A, isDiscount: x, subscriptionPlan: E, finePrintClassname: I } = this.props,
            { hasAcceptedEULA: N, hasAcceptedWithdrawalWaiver: _ } = this.state;
        return (o()(!y || null != E, 'subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true'), a || (null != e && !r) || T)
            ? (0, i.jsxs)('div', {
                  className: c,
                  children: [
                      T &&
                          (0, i.jsx)(u.FormTitle, {
                              className: h.formTitle,
                              children: v.intl.string(v.t.Ogvn5u)
                          }),
                      null != e && (a || !r)
                          ? (0, i.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: N,
                                onChange: this.handleToggleEULAAcceptance,
                                disabled: s,
                                className: h.checkbox,
                                children: (0, i.jsx)('div', {
                                    className: h.checkboxLabel,
                                    children: v.intl.format(v.t.IodJKS, {
                                        applicationName: n,
                                        onClick: (n) => {
                                            (0, u.openModalLazy)(async () => {
                                                let { default: n } = await t.e('51868').then(t.bind(t, 796504));
                                                return (t) =>
                                                    (0, i.jsx)(n, {
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
                          : (0, i.jsx)('div', {
                                className: l()(h.finePrint, I),
                                children: P
                            }),
                      T
                          ? (0, i.jsxs)('div', {
                                className: c,
                                children: [
                                    (0, i.jsx)(u.Checkbox, {
                                        type: u.Checkbox.Types.INVERTED,
                                        value: _,
                                        onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                        disabled: s,
                                        className: l()(h.checkbox, d),
                                        children: (0, i.jsx)('div', {
                                            className: l()(h.checkboxLabel, b),
                                            children: v.intl.string(v.t.DFCVNz)
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: h.finePrint,
                                        children: v.intl.string(v.t.jhu6zs)
                                    })
                                ]
                            })
                          : null,
                      g &&
                          (0, i.jsxs)('div', {
                              className: h.finePrint,
                              children: ['*', v.intl.format(v.t['5zmY3N'], { documentationLink: p.Z.getArticleURL(m.BhN.LOCALIZED_PRICING) })]
                          }),
                      y &&
                          null != E &&
                          (0, i.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: v.intl.format(v.t['Hvo/Z2'], {
                                  buttonText: (0, f.W_)(null, E),
                                  interval: this.formatInterval(null == E ? void 0 : E.interval),
                                  cancelSubscriptionArticle: p.Z.getArticleURL(m.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: p.Z.getArticleURL(m.BhN.PAID_TERMS)
                              })
                          }),
                      A &&
                          null != E &&
                          (0, i.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: v.intl.format(v.t.Oo2FeX, {
                                  buttonText: (0, f.W_)(null, E),
                                  interval: this.formatInterval(null == E ? void 0 : E.interval),
                                  cancelSubscriptionArticle: p.Z.getArticleURL(m.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                  paidServiceTermsArticle: p.Z.getArticleURL(m.BhN.PAID_TERMS)
                              })
                          }),
                      x &&
                          null != E &&
                          (0, i.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'interactive-normal',
                              children: v.intl.format(v.t['Z2c+aW'], {
                                  buttonText: (0, f.W_)(null, E),
                                  interval: this.formatInterval(null == E ? void 0 : E.interval),
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
})(g);
