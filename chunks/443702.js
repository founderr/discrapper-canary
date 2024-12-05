n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(355467),
    u = n(230711),
    m = n(497321),
    g = n(231428),
    h = n(390954),
    p = n(89057),
    x = n(921801),
    T = n(246946),
    S = n(594174),
    _ = n(351402),
    E = n(853872),
    C = n(78839),
    f = n(706454),
    I = n(726985),
    N = n(981631),
    A = n(388032),
    b = n(729061);
class v extends s.PureComponent {
    componentDidMount() {
        c.Z.wait(() => {
            d.tZ(), d.jg();
        });
    }
    handleRedemptionRedirect() {
        u.Z.setSection(N.oAB.INVENTORY);
    }
    render() {
        let { syncing: e, hide: t, paymentSources: n, defaultPaymentSourceId: s, locale: r, premiumSubscription: l, isRemovingPaymentSource: a, isUpdatingPaymentSource: c } = this.props;
        return t
            ? (0, i.jsx)(m.Z, {})
            : (0, i.jsxs)('div', {
                  className: b.__invalid_userSettingsBilling,
                  children: [
                      e && 0 === Object.keys(n).length
                          ? (0, i.jsx)('div', {
                                className: b.syncing,
                                children: (0, i.jsx)(o.Spinner, {})
                            })
                          : (0, i.jsx)(x.F, {
                                setting: I.s6.BILLING_PAYMENT_METHODS,
                                children: (0, i.jsx)(h.Z, {
                                    paymentSources: n,
                                    defaultPaymentSourceId: s,
                                    premiumSubscriptionPaymentSourceId: null != l && l.status !== N.O0b.CANCELED ? l.paymentSourceId : null,
                                    locale: r,
                                    removing: a,
                                    submitting: c
                                })
                            }),
                      (0, i.jsx)(x.F, {
                          setting: I.s6.BILLING_TRANSACTION_HISTORY,
                          children: (0, i.jsx)('div', {
                              className: b.paymentHistory,
                              children: (0, i.jsxs)(o.HeadingLevel, {
                                  component: (0, i.jsx)(o.FormTitle, {
                                      tag: 'h1',
                                      children: A.intl.string(A.t.obLrcH)
                                  }),
                                  children: [(0, i.jsx)(p.oQ, {}), (0, i.jsx)(g.Z, { locale: r })]
                              })
                          })
                      }),
                      (0, i.jsx)(o.Card, {
                          className: b.codeRedemptionRedirect,
                          type: o.Card.Types.CUSTOM,
                          children: A.intl.format(A.t['8b+FXF'], { onClick: this.handleRedemptionRedirect })
                      })
                  ]
              });
    }
}
function j() {
    let e = (0, a.cj)([f.default, _.Z, E.Z, S.default, T.Z, C.ZP], () => {
        let e = C.ZP.getPremiumTypeSubscription(),
            t = S.default.getCurrentUser();
        return (
            l()(null != t, 'UserSettingsBilling: currentUser cannot be undefined'),
            {
                locale: f.default.locale,
                hide: T.Z.enabled,
                isClaimed: t.isClaimed(),
                isVerified: t.verified,
                premiumSubscription: e,
                defaultPaymentSourceId: E.Z.defaultPaymentSourceId,
                paymentSources: E.Z.paymentSources,
                syncing: _.Z.isSyncing,
                isRemovingPaymentSource: _.Z.isRemovingPaymentSource,
                isUpdatingPaymentSource: _.Z.isUpdatingPaymentSource
            }
        );
    });
    return (0, i.jsx)(v, { ...e });
}
