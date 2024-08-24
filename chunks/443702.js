t.d(s, {
    Z: function () {
        return D;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(512722),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(570140),
    d = t(355467),
    _ = t(230711),
    E = t(497321),
    u = t(231428),
    I = t(390954),
    T = t(89057),
    S = t(567038),
    N = t(921801),
    C = t(246946),
    m = t(594174),
    A = t(351402),
    O = t(853872),
    g = t(78839),
    h = t(706454),
    p = t(726985),
    R = t(981631),
    x = t(689938),
    M = t(451723);
class f extends a.PureComponent {
    componentDidMount() {
        c.Z.wait(() => {
            d.tZ(), d.jg();
        });
    }
    handleRedemptionRedirect() {
        _.Z.setSection(R.oAB.INVENTORY);
    }
    render() {
        let { syncing: e, hide: s, paymentSources: t, defaultPaymentSourceId: a, locale: i, premiumSubscription: r, isRemovingPaymentSource: o, isUpdatingPaymentSource: c } = this.props;
        return s
            ? (0, n.jsx)(E.Z, {})
            : (0, n.jsxs)('div', {
                  className: M.__invalid_userSettingsBilling,
                  children: [
                      e && 0 === Object.keys(t).length
                          ? (0, n.jsx)('div', {
                                className: M.syncing,
                                children: (0, n.jsx)(l.Spinner, {})
                            })
                          : (0, n.jsx)(N.F, {
                                setting: p.s6.BILLING_PAYMENT_METHODS,
                                children: (0, n.jsx)(I.Z, {
                                    paymentSources: t,
                                    defaultPaymentSourceId: a,
                                    premiumSubscriptionPaymentSourceId: null != r && r.status !== R.O0b.CANCELED ? r.paymentSourceId : null,
                                    locale: i,
                                    removing: o,
                                    submitting: c
                                })
                            }),
                      (0, n.jsx)(N.F, {
                          setting: p.s6.BILLING_TRANSACTION_HISTORY,
                          children: (0, n.jsx)('div', {
                              className: M.paymentHistory,
                              children: (0, n.jsxs)(l.HeadingLevel, {
                                  component: (0, n.jsx)(l.FormTitle, {
                                      tag: 'h1',
                                      children: x.Z.Messages.BILLING_PAYMENT_HISTORY
                                  }),
                                  children: [(0, n.jsx)(T.oQ, {}), (0, n.jsx)(u.Z, { locale: i })]
                              })
                          })
                      }),
                      (0, n.jsx)(l.Card, {
                          className: M.codeRedemptionRedirect,
                          type: l.Card.Types.CUSTOM,
                          children: x.Z.Messages.BILLING_CODE_REDEMPTION_REDIRECT.format({ onClick: this.handleRedemptionRedirect })
                      }),
                      (0, n.jsx)(S.Z, {})
                  ]
              });
    }
}
function D() {
    let e = (0, o.cj)([h.default, A.Z, O.Z, m.default, C.Z, g.ZP], () => {
        let e = g.ZP.getPremiumTypeSubscription(),
            s = m.default.getCurrentUser();
        return (
            r()(null != s, 'UserSettingsBilling: currentUser cannot be undefined'),
            {
                locale: h.default.locale,
                hide: C.Z.enabled,
                isClaimed: s.isClaimed(),
                isVerified: s.verified,
                premiumSubscription: e,
                defaultPaymentSourceId: O.Z.defaultPaymentSourceId,
                paymentSources: O.Z.paymentSources,
                syncing: A.Z.isSyncing,
                isRemovingPaymentSource: A.Z.isRemovingPaymentSource,
                isUpdatingPaymentSource: A.Z.isUpdatingPaymentSource
            }
        );
    });
    return (0, n.jsx)(f, { ...e });
}
