"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("512722"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("570140"),
  u = s("355467"),
  c = s("230711"),
  S = s("497321"),
  E = s("231428"),
  T = s("390954"),
  _ = s("89057"),
  f = s("921801"),
  I = s("246946"),
  m = s("594174"),
  N = s("351402"),
  g = s("853872"),
  h = s("78839"),
  C = s("706454"),
  A = s("726985"),
  O = s("981631"),
  p = s("689938"),
  R = s("499937");
class x extends n.PureComponent {
  componentDidMount() {
    d.default.wait(() => {
      u.fetchPaymentSources(), u.fetchSubscriptions()
    })
  }
  handleRedemptionRedirect() {
    c.default.setSection(O.UserSettingsSections.INVENTORY)
  }
  render() {
    let {
      syncing: e,
      hide: t,
      paymentSources: s,
      defaultPaymentSourceId: n,
      locale: l,
      premiumSubscription: i,
      isRemovingPaymentSource: r,
      isUpdatingPaymentSource: d
    } = this.props;
    return t ? (0, a.jsx)(S.default, {}) : (0, a.jsxs)("div", {
      className: R.__invalid_userSettingsBilling,
      children: [e && 0 === Object.keys(s).length ? (0, a.jsx)("div", {
        className: R.syncing,
        children: (0, a.jsx)(o.Spinner, {})
      }) : (0, a.jsx)(f.Subsetting, {
        setting: A.WebSetting.BILLING_PAYMENT_METHODS,
        children: (0, a.jsx)(T.default, {
          paymentSources: s,
          defaultPaymentSourceId: n,
          premiumSubscriptionPaymentSourceId: null != i && i.status !== O.SubscriptionStatusTypes.CANCELED ? i.paymentSourceId : null,
          locale: l,
          removing: r,
          submitting: d
        })
      }), (0, a.jsx)(f.Subsetting, {
        setting: A.WebSetting.BILLING_TRANSACTION_HISTORY,
        children: (0, a.jsx)("div", {
          className: R.paymentHistory,
          children: (0, a.jsxs)(o.HeadingLevel, {
            component: (0, a.jsx)(o.FormTitle, {
              tag: "h1",
              children: p.default.Messages.BILLING_PAYMENT_HISTORY
            }),
            children: [(0, a.jsx)(_.BlockedPaymentsWarning, {}), (0, a.jsx)(E.default, {
              locale: l
            })]
          })
        })
      }), (0, a.jsx)(o.Card, {
        className: R.codeRedemptionRedirect,
        type: o.Card.Types.CUSTOM,
        children: p.default.Messages.BILLING_CODE_REDEMPTION_REDIRECT.format({
          onClick: this.handleRedemptionRedirect
        })
      })]
    })
  }
}

function M() {
  let e = (0, r.useStateFromStoresObject)([C.default, N.default, g.default, m.default, I.default, h.default], () => {
    let e = h.default.getPremiumTypeSubscription(),
      t = m.default.getCurrentUser();
    return i()(null != t, "UserSettingsBilling: currentUser cannot be undefined"), {
      locale: C.default.locale,
      hide: I.default.enabled,
      isClaimed: t.isClaimed(),
      isVerified: t.verified,
      premiumSubscription: e,
      defaultPaymentSourceId: g.default.defaultPaymentSourceId,
      paymentSources: g.default.paymentSources,
      syncing: N.default.isSyncing,
      isRemovingPaymentSource: N.default.isRemovingPaymentSource,
      isUpdatingPaymentSource: N.default.isUpdatingPaymentSource
    }
  });
  return (0, a.jsx)(x, {
    ...e
  })
}