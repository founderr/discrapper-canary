"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("512722"),
  l = s.n(i),
  r = s("442837"),
  o = s("481060"),
  d = s("570140"),
  u = s("355467"),
  c = s("230711"),
  S = s("497321"),
  E = s("231428"),
  T = s("390954"),
  _ = s("89057"),
  I = s("921801"),
  N = s("246946"),
  g = s("594174"),
  f = s("351402"),
  m = s("853872"),
  A = s("78839"),
  C = s("706454"),
  O = s("726985"),
  h = s("981631"),
  R = s("689938"),
  p = s("499937");
class M extends n.PureComponent {
  componentDidMount() {
    d.default.wait(() => {
      u.fetchPaymentSources(), u.fetchSubscriptions()
    })
  }
  handleRedemptionRedirect() {
    c.default.setSection(h.UserSettingsSections.INVENTORY)
  }
  render() {
    let {
      syncing: e,
      hide: t,
      paymentSources: s,
      defaultPaymentSourceId: n,
      locale: i,
      premiumSubscription: l,
      isRemovingPaymentSource: r,
      isUpdatingPaymentSource: d
    } = this.props;
    return t ? (0, a.jsx)(S.default, {}) : (0, a.jsxs)("div", {
      className: p.__invalid_userSettingsBilling,
      children: [e && 0 === Object.keys(s).length ? (0, a.jsx)("div", {
        className: p.syncing,
        children: (0, a.jsx)(o.Spinner, {})
      }) : (0, a.jsx)(I.Subsetting, {
        setting: O.WebSetting.BILLING_PAYMENT_METHODS,
        children: (0, a.jsx)(T.default, {
          paymentSources: s,
          defaultPaymentSourceId: n,
          premiumSubscriptionPaymentSourceId: null != l && l.status !== h.SubscriptionStatusTypes.CANCELED ? l.paymentSourceId : null,
          locale: i,
          removing: r,
          submitting: d
        })
      }), (0, a.jsx)(I.Subsetting, {
        setting: O.WebSetting.BILLING_TRANSACTION_HISTORY,
        children: (0, a.jsx)("div", {
          className: p.paymentHistory,
          children: (0, a.jsxs)(o.HeadingLevel, {
            component: (0, a.jsx)(o.FormTitle, {
              tag: "h1",
              children: R.default.Messages.BILLING_PAYMENT_HISTORY
            }),
            children: [(0, a.jsx)(_.BlockedPaymentsWarning, {}), (0, a.jsx)(E.default, {
              locale: i
            })]
          })
        })
      }), (0, a.jsx)(o.Card, {
        className: p.codeRedemptionRedirect,
        type: o.Card.Types.CUSTOM,
        children: R.default.Messages.BILLING_CODE_REDEMPTION_REDIRECT.format({
          onClick: this.handleRedemptionRedirect
        })
      })]
    })
  }
}

function D() {
  let e = (0, r.useStateFromStoresObject)([C.default, f.default, m.default, g.default, N.default, A.default], () => {
    let e = A.default.getPremiumTypeSubscription(),
      t = g.default.getCurrentUser();
    return l()(null != t, "UserSettingsBilling: currentUser cannot be undefined"), {
      locale: C.default.locale,
      hide: N.default.enabled,
      isClaimed: t.isClaimed(),
      isVerified: t.verified,
      premiumSubscription: e,
      defaultPaymentSourceId: m.default.defaultPaymentSourceId,
      paymentSources: m.default.paymentSources,
      syncing: f.default.isSyncing,
      isRemovingPaymentSource: f.default.isRemovingPaymentSource,
      isUpdatingPaymentSource: f.default.isUpdatingPaymentSource
    }
  });
  return (0, a.jsx)(M, {
    ...e
  })
}