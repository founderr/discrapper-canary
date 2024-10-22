t.d(s, {
    Z: function () {
        return f;
    }
});
var n = t(200651),
    a = t(192379),
    i = t(512722),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(570140),
    d = t(355467),
    _ = t(230711),
    u = t(497321),
    E = t(231428),
    T = t(390954),
    S = t(89057),
    I = t(921801),
    N = t(246946),
    m = t(594174),
    C = t(351402),
    A = t(853872),
    g = t(78839),
    h = t(706454),
    O = t(726985),
    p = t(981631),
    R = t(689938),
    x = t(467174);
class M extends a.PureComponent {
    componentDidMount() {
        c.Z.wait(() => {
            d.tZ(), d.jg();
        });
    }
    handleRedemptionRedirect() {
        _.Z.setSection(p.oAB.INVENTORY);
    }
    render() {
        let { syncing: e, hide: s, paymentSources: t, defaultPaymentSourceId: a, locale: i, premiumSubscription: r, isRemovingPaymentSource: o, isUpdatingPaymentSource: c } = this.props;
        return s
            ? (0, n.jsx)(u.Z, {})
            : (0, n.jsxs)('div', {
                  className: x.__invalid_userSettingsBilling,
                  children: [
                      e && 0 === Object.keys(t).length
                          ? (0, n.jsx)('div', {
                                className: x.syncing,
                                children: (0, n.jsx)(l.Spinner, {})
                            })
                          : (0, n.jsx)(I.F, {
                                setting: O.s6.BILLING_PAYMENT_METHODS,
                                children: (0, n.jsx)(T.Z, {
                                    paymentSources: t,
                                    defaultPaymentSourceId: a,
                                    premiumSubscriptionPaymentSourceId: null != r && r.status !== p.O0b.CANCELED ? r.paymentSourceId : null,
                                    locale: i,
                                    removing: o,
                                    submitting: c
                                })
                            }),
                      (0, n.jsx)(I.F, {
                          setting: O.s6.BILLING_TRANSACTION_HISTORY,
                          children: (0, n.jsx)('div', {
                              className: x.paymentHistory,
                              children: (0, n.jsxs)(l.HeadingLevel, {
                                  component: (0, n.jsx)(l.FormTitle, {
                                      tag: 'h1',
                                      children: R.Z.Messages.BILLING_PAYMENT_HISTORY
                                  }),
                                  children: [(0, n.jsx)(S.oQ, {}), (0, n.jsx)(E.Z, { locale: i })]
                              })
                          })
                      }),
                      (0, n.jsx)(l.Card, {
                          className: x.codeRedemptionRedirect,
                          type: l.Card.Types.CUSTOM,
                          children: R.Z.Messages.BILLING_CODE_REDEMPTION_REDIRECT.format({ onClick: this.handleRedemptionRedirect })
                      })
                  ]
              });
    }
}
function f() {
    let e = (0, o.cj)([h.default, C.Z, A.Z, m.default, N.Z, g.ZP], () => {
        let e = g.ZP.getPremiumTypeSubscription(),
            s = m.default.getCurrentUser();
        return (
            r()(null != s, 'UserSettingsBilling: currentUser cannot be undefined'),
            {
                locale: h.default.locale,
                hide: N.Z.enabled,
                isClaimed: s.isClaimed(),
                isVerified: s.verified,
                premiumSubscription: e,
                defaultPaymentSourceId: A.Z.defaultPaymentSourceId,
                paymentSources: A.Z.paymentSources,
                syncing: C.Z.isSyncing,
                isRemovingPaymentSource: C.Z.isRemovingPaymentSource,
                isUpdatingPaymentSource: C.Z.isUpdatingPaymentSource
            }
        );
    });
    return (0, n.jsx)(M, { ...e });
}
