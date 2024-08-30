t.d(s, {
    Z: function () {
        return g;
    }
});
var n,
    a,
    i,
    r,
    o = t(735250),
    l = t(470079),
    c = t(120356),
    d = t.n(c),
    u = t(481060),
    _ = t(987032),
    E = t(600164),
    T = t(219929),
    I = t(46141),
    S = t(122289),
    N = t(624138),
    m = t(689938),
    C = t(869121);
class g extends (r = l.PureComponent) {
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof I.qo) return T.ZP.Types.PAYPAL;
        if (e instanceof I.Sf) return T.ZP.Types.SOFORT;
        if (e instanceof I.dm) return T.ZP.getType(e.brand);
        else if (e instanceof I.fv) return T.ZP.Types.GIROPAY;
        else if (e instanceof I.Vg) return T.ZP.Types.PRZELEWY24;
        else if (e instanceof I.sn) return T.ZP.Types.PAYSAFECARD;
        else if (e instanceof I.o_) return T.ZP.Types.GCASH;
        else if (e instanceof I.kX) return T.ZP.Types.GRABPAY;
        else if (e instanceof I.z) return T.ZP.Types.MOMO_WALLET;
        else if (e instanceof I.Xc) return T.ZP.Types.VENMO;
        else if (e instanceof I.Om) return T.ZP.Types.KAKAOPAY;
        else if (e instanceof I.JC) return T.ZP.Types.GOPAY_WALLET;
        else if (e instanceof I.U4) return T.ZP.Types.BANCONTACT;
        else if (e instanceof I.D0) return T.ZP.Types.EPS;
        else if (e instanceof I.jc) return T.ZP.Types.IDEAL;
        else if (e instanceof I.u_) return T.ZP.Types.CASH_APP;
        else if (e instanceof I.$z) return T.ZP.Types.APPLE;
        return T.ZP.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof I.dm
            ? m.Z.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
                  brand: (0, N.De)(e.brand),
                  last_4: e.last4
              })
            : e instanceof I.qo
              ? m.Z.Messages.PAYMENT_SOURCE_PAYPAL
              : e instanceof I.Sf
                ? m.Z.Messages.PAYMENT_SOURCE_SOFORT
                : e instanceof I.fv
                  ? m.Z.Messages.PAYMENT_SOURCE_GIROPAY
                  : e instanceof I.Vg
                    ? m.Z.Messages.PAYMENT_SOURCE_PRZELEWY24
                    : e instanceof I.sn
                      ? m.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD
                      : e instanceof I.o_
                        ? m.Z.Messages.PAYMENT_SOURCE_GCASH
                        : e instanceof I.kX
                          ? m.Z.Messages.PAYMENT_SOURCE_GRABPAY
                          : e instanceof I.z
                            ? m.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET
                            : e instanceof I.Xc
                              ? m.Z.Messages.PAYMENT_SOURCE_VENMO
                              : e instanceof I.Om
                                ? m.Z.Messages.PAYMENT_SOURCE_KAKAOPAY
                                : e instanceof I.JC
                                  ? m.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET
                                  : e instanceof I.U4
                                    ? m.Z.Messages.PAYMENT_SOURCE_BANCONTACT
                                    : e instanceof I.jc
                                      ? m.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({ bank: (0, _.YE)(e.bank) })
                                      : e instanceof I.D0
                                        ? m.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({ bank: (0, _.Ul)(e.bank) })
                                        : e instanceof I.u_
                                          ? m.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                                          : e instanceof I.$z
                                            ? m.Z.Messages.PAYMENT_SOURCE_APPLE
                                            : m.Z.Messages.PAYMENT_SOURCE_UNKNOWN;
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: s } = this.props;
        return (0, o.jsx)(u.Text, {
            className: d()(C.description, s),
            variant: 'text-md/semibold',
            children: this.getLabel(e)
        });
    }
    renderSubText() {
        let { paymentSource: e, locale: s } = this.props,
            t = null;
        return (
            e instanceof I.dm
                ? (t = m.Z.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
                      month: (0, S.E2)(e.expiresMonth, s),
                      year: e.expiresYear
                  }))
                : e instanceof I.qo
                  ? (t = e.email)
                  : e instanceof I.Sf
                    ? (t = e.email)
                    : e instanceof I.Vg
                      ? (t = e.email)
                      : e instanceof I.Xc
                        ? (t = '@' + e.username)
                        : e instanceof I.u_ && (t = e.username),
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
    (a = 'defaultProps') in (n = g)
        ? Object.defineProperty(n, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (n[a] = i);
