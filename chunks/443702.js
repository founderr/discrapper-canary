t.d(s, {
  Z: function() {
    return p
  }
});
var n = t(735250),
  i = t(470079),
  a = t(512722),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(570140),
  E = t(355467),
  d = t(230711),
  _ = t(497321),
  T = t(231428),
  S = t(390954),
  u = t(89057),
  I = t(921801),
  N = t(246946),
  A = t(594174),
  C = t(351402),
  O = t(853872),
  m = t(78839),
  h = t(706454),
  g = t(726985),
  R = t(981631),
  M = t(689938),
  x = t(265891);
class D extends i.PureComponent {
  componentDidMount() {
    c.Z.wait(() => {
      E.tZ(), E.jg()
    })
  }
  handleRedemptionRedirect() {
    d.Z.setSection(R.oAB.INVENTORY)
  }
  render() {
    let {
      syncing: e,
      hide: s,
      paymentSources: t,
      defaultPaymentSourceId: i,
      locale: a,
      premiumSubscription: l,
      isRemovingPaymentSource: r,
      isUpdatingPaymentSource: c
    } = this.props;
    return s ? (0, n.jsx)(_.Z, {}) : (0, n.jsxs)("div", {
      className: x.__invalid_userSettingsBilling,
      children: [e && 0 === Object.keys(t).length ? (0, n.jsx)("div", {
        className: x.syncing,
        children: (0, n.jsx)(o.Spinner, {})
      }) : (0, n.jsx)(I.F, {
        setting: g.s6.BILLING_PAYMENT_METHODS,
        children: (0, n.jsx)(S.Z, {
          paymentSources: t,
          defaultPaymentSourceId: i,
          premiumSubscriptionPaymentSourceId: null != l && l.status !== R.O0b.CANCELED ? l.paymentSourceId : null,
          locale: a,
          removing: r,
          submitting: c
        })
      }), (0, n.jsx)(I.F, {
        setting: g.s6.BILLING_TRANSACTION_HISTORY,
        children: (0, n.jsx)("div", {
          className: x.paymentHistory,
          children: (0, n.jsxs)(o.HeadingLevel, {
            component: (0, n.jsx)(o.FormTitle, {
              tag: "h1",
              children: M.Z.Messages.BILLING_PAYMENT_HISTORY
            }),
            children: [(0, n.jsx)(u.oQ, {}), (0, n.jsx)(T.Z, {
              locale: a
            })]
          })
        })
      }), (0, n.jsx)(o.Card, {
        className: x.codeRedemptionRedirect,
        type: o.Card.Types.CUSTOM,
        children: M.Z.Messages.BILLING_CODE_REDEMPTION_REDIRECT.format({
          onClick: this.handleRedemptionRedirect
        })
      })]
    })
  }
}

function p() {
  let e = (0, r.cj)([h.default, C.Z, O.Z, A.default, N.Z, m.ZP], () => {
    let e = m.ZP.getPremiumTypeSubscription(),
      s = A.default.getCurrentUser();
    return l()(null != s, "UserSettingsBilling: currentUser cannot be undefined"), {
      locale: h.default.locale,
      hide: N.Z.enabled,
      isClaimed: s.isClaimed(),
      isVerified: s.verified,
      premiumSubscription: e,
      defaultPaymentSourceId: O.Z.defaultPaymentSourceId,
      paymentSources: O.Z.paymentSources,
      syncing: C.Z.isSyncing,
      isRemovingPaymentSource: C.Z.isRemovingPaymentSource,
      isUpdatingPaymentSource: C.Z.isUpdatingPaymentSource
    }
  });
  return (0, n.jsx)(D, {
    ...e
  })
}