"use strict";
a.r(t), a("411104"), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("512722"),
  o = a.n(l),
  u = a("442837"),
  c = a("481060"),
  d = a("850840"),
  I = a("63063"),
  _ = a("74538"),
  T = a("981631"),
  f = a("474936"),
  p = a("689938"),
  P = a("426370");

function m(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class E extends r.Component {
  componentDidMount() {
    this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
  }
  componentDidUpdate(e, t) {
    let a = this.hasAcceptedNeccessaryTerms(e, t),
      n = this.hasAcceptedNeccessaryTerms(this.props, this.state);
    n !== a && this.props.onChange(n)
  }
  hasAcceptedNeccessaryTerms(e, t) {
    return (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
  }
  formatInterval(e) {
    if (e === f.SubscriptionIntervalTypes.YEAR) return p.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
    if (e === f.SubscriptionIntervalTypes.MONTH) return p.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
    throw Error("Invalid interval type: ".concat(e))
  }
  render() {
    let {
      eulaId: e,
      applicationName: t,
      hasPreviouslyAcceptedEULA: r,
      forceShow: s,
      disabled: l,
      className: u,
      checkboxClassname: d,
      checkboxLabelClassname: f,
      finePrint: m,
      showPricingLink: E,
      showWithdrawalWaiver: A,
      isTrial: S,
      isDiscount: N,
      subscriptionPlan: R,
      finePrintClassname: M
    } = this.props, {
      hasAcceptedEULA: b,
      hasAcceptedWithdrawalWaiver: v
    } = this.state;
    return (o()(!S || null != R, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), s || null != e && !r || A) ? (0, n.jsxs)("div", {
      className: u,
      children: [A && (0, n.jsx)(c.FormTitle, {
        className: P.formTitle,
        children: p.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER
      }), null != e && (s || !r) ? (0, n.jsx)(c.Checkbox, {
        type: c.Checkbox.Types.INVERTED,
        value: b,
        onChange: this.handleToggleEULAAcceptance,
        disabled: l,
        className: P.checkbox,
        children: (0, n.jsx)("div", {
          className: P.checkboxLabel,
          children: p.default.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
            applicationName: t,
            onClick: t => {
              (0, c.openModalLazy)(async () => {
                let {
                  default: t
                } = await Promise.all([a.e("49237"), a.e("99387"), a.e("51868")]).then(a.bind(a, "796504"));
                return a => (0, n.jsx)(t, {
                  eulaId: e,
                  ...a
                })
              }), t.preventDefault()
            }
          })
        })
      }) : null, null == m ? null : (0, n.jsx)("div", {
        className: i()(P.finePrint, M),
        children: m
      }), A ? (0, n.jsxs)("div", {
        className: u,
        children: [(0, n.jsx)(c.Checkbox, {
          type: c.Checkbox.Types.INVERTED,
          value: v,
          onChange: this.handleToggleEUWithdralWaiverAcceptance,
          disabled: l,
          className: i()(P.checkbox, d),
          children: (0, n.jsx)("div", {
            className: i()(P.checkboxLabel, f),
            children: p.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
          })
        }), (0, n.jsx)("div", {
          className: P.finePrint,
          children: p.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
        })]
      }) : null, E && (0, n.jsxs)("div", {
        className: P.finePrint,
        children: ["*", p.default.Messages.BILLING_HOW_PRICING_WORKS.format({
          documentationLink: I.default.getArticleURL(T.HelpdeskArticles.LOCALIZED_PRICING)
        })]
      }), S && null != R && (0, n.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "interactive-normal",
        children: p.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
          buttonText: (0, _.getBillingReviewSubheader)(null, R),
          interval: this.formatInterval(null == R ? void 0 : R.interval),
          cancelSubscriptionArticle: I.default.getArticleURL(T.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: I.default.getArticleURL(T.HelpdeskArticles.PAID_TERMS)
        })
      }), N && null != R && (0, n.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "interactive-normal",
        children: p.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
          buttonText: (0, _.getBillingReviewSubheader)(null, R),
          interval: this.formatInterval(null == R ? void 0 : R.interval),
          cancelSubscriptionArticle: I.default.getArticleURL(T.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: I.default.getArticleURL(T.HelpdeskArticles.PAID_TERMS)
        })
      })]
    }) : null
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
      hasAcceptedWithdrawalWaiver: !1
    }), m(this, "handleToggleEUWithdralWaiverAcceptance", (e, t) => {
      this.setState({
        hasAcceptedWithdrawalWaiver: t
      })
    }), m(this, "handleToggleEULAAcceptance", (e, t) => {
      this.setState({
        hasAcceptedEULA: t
      })
    })
  }
}
t.default = u.default.connectStores([d.default], e => {
  let {
    eulaId: t
  } = e;
  return {
    hasPreviouslyAcceptedEULA: null != t && d.default.hasAcceptedEULA(t)
  }
})(E)