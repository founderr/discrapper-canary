t.d(s, {
    Z: function () {
        return A;
    }
});
var n,
    a,
    i,
    r,
    o = t(200651),
    l = t(192379),
    c = t(120356),
    d = t.n(c),
    _ = t(481060),
    u = t(987032),
    E = t(600164),
    T = t(219929),
    S = t(46141),
    I = t(122289),
    N = t(624138),
    m = t(689938),
    C = t(146466);
class A extends (r = l.PureComponent) {
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof S.qo) return T.ZP.Types.PAYPAL;
        if (e instanceof S.Sf) return T.ZP.Types.SOFORT;
        if (e instanceof S.dm) return T.ZP.getType(e.brand);
        else if (e instanceof S.fv) return T.ZP.Types.GIROPAY;
        else if (e instanceof S.Vg) return T.ZP.Types.PRZELEWY24;
        else if (e instanceof S.sn) return T.ZP.Types.PAYSAFECARD;
        else if (e instanceof S.o_) return T.ZP.Types.GCASH;
        else if (e instanceof S.kX) return T.ZP.Types.GRABPAY;
        else if (e instanceof S.z) return T.ZP.Types.MOMO_WALLET;
        else if (e instanceof S.Xc) return T.ZP.Types.VENMO;
        else if (e instanceof S.Om) return T.ZP.Types.KAKAOPAY;
        else if (e instanceof S.JC) return T.ZP.Types.GOPAY_WALLET;
        else if (e instanceof S.U4) return T.ZP.Types.BANCONTACT;
        else if (e instanceof S.D0) return T.ZP.Types.EPS;
        else if (e instanceof S.jc) return T.ZP.Types.IDEAL;
        else if (e instanceof S.u_) return T.ZP.Types.CASH_APP;
        else if (e instanceof S.$z) return T.ZP.Types.APPLE;
        return T.ZP.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof S.dm
            ? m.Z.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
                  brand: (0, N.De)(e.brand),
                  last_4: e.last4
              })
            : e instanceof S.qo
              ? m.Z.Messages.PAYMENT_SOURCE_PAYPAL
              : e instanceof S.Sf
                ? m.Z.Messages.PAYMENT_SOURCE_SOFORT
                : e instanceof S.fv
                  ? m.Z.Messages.PAYMENT_SOURCE_GIROPAY
                  : e instanceof S.Vg
                    ? m.Z.Messages.PAYMENT_SOURCE_PRZELEWY24
                    : e instanceof S.sn
                      ? m.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD
                      : e instanceof S.o_
                        ? m.Z.Messages.PAYMENT_SOURCE_GCASH
                        : e instanceof S.kX
                          ? m.Z.Messages.PAYMENT_SOURCE_GRABPAY
                          : e instanceof S.z
                            ? m.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET
                            : e instanceof S.Xc
                              ? m.Z.Messages.PAYMENT_SOURCE_VENMO
                              : e instanceof S.Om
                                ? m.Z.Messages.PAYMENT_SOURCE_KAKAOPAY
                                : e instanceof S.JC
                                  ? m.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET
                                  : e instanceof S.U4
                                    ? m.Z.Messages.PAYMENT_SOURCE_BANCONTACT
                                    : e instanceof S.jc
                                      ? m.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({ bank: (0, u.YE)(e.bank) })
                                      : e instanceof S.D0
                                        ? m.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({ bank: (0, u.Ul)(e.bank) })
                                        : e instanceof S.u_
                                          ? m.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                                          : e instanceof S.$z
                                            ? m.Z.Messages.PAYMENT_SOURCE_APPLE
                                            : m.Z.Messages.PAYMENT_SOURCE_UNKNOWN;
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: s } = this.props;
        return (0, o.jsx)(_.Text, {
            className: d()(C.description, s),
            variant: 'text-md/semibold',
            children: this.getLabel(e)
        });
    }
    renderSubText() {
        let { paymentSource: e, locale: s } = this.props,
            t = null;
        return (
            e instanceof S.dm
                ? (t = m.Z.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
                      month: (0, I.E2)(e.expiresMonth, s),
                      year: e.expiresYear
                  }))
                : e instanceof S.qo
                  ? (t = e.email)
                  : e instanceof S.Sf
                    ? (t = e.email)
                    : e instanceof S.Vg
                      ? (t = e.email)
                      : e instanceof S.Xc
                        ? (t = '@' + e.username)
                        : e instanceof S.u_ && (t = e.username),
            t
        );
    }
    render() {
        let { isDefault: e, paymentSource: s, showSubtext: t, isForSubscription: n, showPaymentSourceIcon: a, showLabels: i } = this.props,
            r = this.renderSubText();
        return (0, o.jsxs)(E.Z, {
            children: [
                a && (0, o.jsx)(T.ZP, { type: this.typeString }),
                (0, o.jsxs)(E.Z, {
                    direction: E.Z.Direction.VERTICAL,
                    className: C.descriptionWrapper,
                    children: [
                        (0, o.jsxs)(E.Z, {
                            align: E.Z.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                i && e
                                    ? (0, o.jsx)('div', {
                                          className: C.defaultIndicator,
                                          children: m.Z.Messages.DEFAULT
                                      })
                                    : null,
                                n
                                    ? (0, o.jsx)('div', {
                                          className: C.premiumIndicator,
                                          children: m.Z.Messages.PAYMENT_SOURCE_SUBSCRIPTION
                                      })
                                    : null,
                                i && s.invalid
                                    ? (0, o.jsx)('div', {
                                          className: C.invalidIndicator,
                                          children: m.Z.Messages.PAYMENT_SOURCE_INVALID
                                      })
                                    : null
                            ]
                        }),
                        t && null != r
                            ? (0, o.jsx)('div', {
                                  className: C.subText,
                                  children: r
                              })
                            : null
                    ]
                })
            ]
        });
    }
}
(i = {
    isForSubscription: !1,
    isDefault: !1,
    showSubtext: !1,
    showPaymentSourceIcon: !1,
    showLabels: !1
}),
    (a = 'defaultProps') in (n = A)
        ? Object.defineProperty(n, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (n[a] = i);
