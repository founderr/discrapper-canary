"use strict";
s.r(t), s("411104"), s("47120");
var a = s("735250"),
  r = s("470079"),
  l = s("120356"),
  i = s.n(l),
  n = s("512722"),
  c = s.n(n),
  u = s("442837"),
  o = s("481060"),
  d = s("850840"),
  E = s("63063"),
  _ = s("74538"),
  I = s("981631"),
  L = s("474936"),
  T = s("689938"),
  A = s("426370");

function p(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class N extends r.Component {
  componentDidMount() {
    this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
  }
  componentDidUpdate(e, t) {
    let s = this.hasAcceptedNeccessaryTerms(e, t),
      a = this.hasAcceptedNeccessaryTerms(this.props, this.state);
    a !== s && this.props.onChange(a)
  }
  hasAcceptedNeccessaryTerms(e, t) {
    return (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
  }
  formatInterval(e) {
    if (e === L.SubscriptionIntervalTypes.YEAR) return T.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
    if (e === L.SubscriptionIntervalTypes.MONTH) return T.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
    throw Error("Invalid interval type: ".concat(e))
  }
  render() {
    let {
      eulaId: e,
      applicationName: t,
      hasPreviouslyAcceptedEULA: r,
      forceShow: l,
      disabled: n,
      className: u,
      checkboxClassname: d,
      checkboxLabelClassname: L,
      finePrint: p,
      showPricingLink: N,
      showWithdrawalWaiver: M,
      isTrial: f,
      isDiscount: R,
      subscriptionPlan: S,
      finePrintClassname: P
    } = this.props, {
      hasAcceptedEULA: h,
      hasAcceptedWithdrawalWaiver: m
    } = this.state;
    return (c()(!f || null != S, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), l || null != e && !r || M) ? (0, a.jsxs)("div", {
      className: u,
      children: [M && (0, a.jsx)(o.FormTitle, {
        className: A.formTitle,
        children: T.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER
      }), null != e && (l || !r) ? (0, a.jsx)(o.Checkbox, {
        type: o.Checkbox.Types.INVERTED,
        value: h,
        onChange: this.handleToggleEULAAcceptance,
        disabled: n,
        className: A.checkbox,
        children: (0, a.jsx)("div", {
          className: A.checkboxLabel,
          children: T.default.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
            applicationName: t,
            onClick: t => {
              (0, o.openModalLazy)(async () => {
                let {
                  default: t
                } = await Promise.all([s.e("49237"), s.e("99387"), s.e("51868")]).then(s.bind(s, "796504"));
                return s => (0, a.jsx)(t, {
                  eulaId: e,
                  ...s
                })
              }), t.preventDefault()
            }
          })
        })
      }) : null, null == p ? null : (0, a.jsx)("div", {
        className: i()(A.finePrint, P),
        children: p
      }), M ? (0, a.jsxs)("div", {
        className: u,
        children: [(0, a.jsx)(o.Checkbox, {
          type: o.Checkbox.Types.INVERTED,
          value: m,
          onChange: this.handleToggleEUWithdralWaiverAcceptance,
          disabled: n,
          className: i()(A.checkbox, d),
          children: (0, a.jsx)("div", {
            className: i()(A.checkboxLabel, L),
            children: T.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
          })
        }), (0, a.jsx)("div", {
          className: A.finePrint,
          children: T.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
        })]
      }) : null, N && (0, a.jsxs)("div", {
        className: A.finePrint,
        children: ["*", T.default.Messages.BILLING_HOW_PRICING_WORKS.format({
          documentationLink: E.default.getArticleURL(I.HelpdeskArticles.LOCALIZED_PRICING)
        })]
      }), f && null != S && (0, a.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "interactive-normal",
        children: T.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
          buttonText: (0, _.getBillingReviewSubheader)(null, S),
          interval: this.formatInterval(null == S ? void 0 : S.interval),
          cancelSubscriptionArticle: E.default.getArticleURL(I.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: E.default.getArticleURL(I.HelpdeskArticles.PAID_TERMS)
        })
      }), R && null != S && (0, a.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "interactive-normal",
        children: T.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
          buttonText: (0, _.getBillingReviewSubheader)(null, S),
          interval: this.formatInterval(null == S ? void 0 : S.interval),
          cancelSubscriptionArticle: E.default.getArticleURL(I.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: E.default.getArticleURL(I.HelpdeskArticles.PAID_TERMS)
        })
      })]
    }) : null
  }
  constructor(...e) {
    super(...e), p(this, "state", {
      hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
      hasAcceptedWithdrawalWaiver: !1
    }), p(this, "handleToggleEUWithdralWaiverAcceptance", (e, t) => {
      this.setState({
        hasAcceptedWithdrawalWaiver: t
      })
    }), p(this, "handleToggleEULAAcceptance", (e, t) => {
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
})(N)