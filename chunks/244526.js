n.d(t, {
    Z: function () {
        return E;
    }
});
var i,
    s,
    r,
    l,
    a = n(200651),
    o = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(481060),
    m = n(987032),
    h = n(600164),
    g = n(219929),
    p = n(46141),
    x = n(122289),
    S = n(624138),
    T = n(388032),
    C = n(146466);
class E extends (l = o.PureComponent) {
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof p.qo) return g.ZP.Types.PAYPAL;
        if (e instanceof p.Sf) return g.ZP.Types.SOFORT;
        if (e instanceof p.dm) return g.ZP.getType(e.brand);
        else if (e instanceof p.fv) return g.ZP.Types.GIROPAY;
        else if (e instanceof p.Vg) return g.ZP.Types.PRZELEWY24;
        else if (e instanceof p.sn) return g.ZP.Types.PAYSAFECARD;
        else if (e instanceof p.o_) return g.ZP.Types.GCASH;
        else if (e instanceof p.kX) return g.ZP.Types.GRABPAY;
        else if (e instanceof p.z) return g.ZP.Types.MOMO_WALLET;
        else if (e instanceof p.Xc) return g.ZP.Types.VENMO;
        else if (e instanceof p.Om) return g.ZP.Types.KAKAOPAY;
        else if (e instanceof p.JC) return g.ZP.Types.GOPAY_WALLET;
        else if (e instanceof p.U4) return g.ZP.Types.BANCONTACT;
        else if (e instanceof p.D0) return g.ZP.Types.EPS;
        else if (e instanceof p.jc) return g.ZP.Types.IDEAL;
        else if (e instanceof p.u_) return g.ZP.Types.CASH_APP;
        else if (e instanceof p.$z) return g.ZP.Types.APPLE;
        return g.ZP.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof p.dm
            ? T.intl.format(T.t['o/dsrK'], {
                  brand: (0, S.De)(e.brand),
                  last_4: e.last4
              })
            : e instanceof p.qo
              ? T.intl.string(T.t['2dgEq6'])
              : e instanceof p.Sf
                ? T.intl.string(T.t['edKX//'])
                : e instanceof p.fv
                  ? T.intl.string(T.t['y+0MQU'])
                  : e instanceof p.Vg
                    ? T.intl.string(T.t.u25uLy)
                    : e instanceof p.sn
                      ? T.intl.string(T.t.boznHB)
                      : e instanceof p.o_
                        ? T.intl.string(T.t.PjehcH)
                        : e instanceof p.kX
                          ? T.intl.string(T.t.T5davL)
                          : e instanceof p.z
                            ? T.intl.string(T.t.J0A1Vl)
                            : e instanceof p.Xc
                              ? T.intl.string(T.t.jYOezc)
                              : e instanceof p.Om
                                ? T.intl.string(T.t.CSVexs)
                                : e instanceof p.JC
                                  ? T.intl.string(T.t['43J8JC'])
                                  : e instanceof p.U4
                                    ? T.intl.string(T.t['1ITkfn'])
                                    : e instanceof p.jc
                                      ? T.intl.format(T.t['9kUlRU'], { bank: (0, m.YE)(e.bank) })
                                      : e instanceof p.D0
                                        ? T.intl.format(T.t.hSPoZ2, { bank: (0, m.Ul)(e.bank) })
                                        : e instanceof p.u_
                                          ? T.intl.string(T.t['+rbTmJ'])
                                          : e instanceof p.$z
                                            ? T.intl.string(T.t.RFi12t)
                                            : T.intl.string(T.t.jdPblp);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, a.jsx)(u.Text, {
            className: d()(C.description, t),
            variant: 'text-md/semibold',
            children: this.getLabel(e)
        });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof p.dm
                ? (n = T.intl.formatToPlainString(T.t['8rTTub'], {
                      month: (0, x.E2)(e.expiresMonth, t),
                      year: e.expiresYear
                  }))
                : e instanceof p.qo
                  ? (n = e.email)
                  : e instanceof p.Sf
                    ? (n = e.email)
                    : e instanceof p.Vg
                      ? (n = e.email)
                      : e instanceof p.Xc
                        ? (n = '@' + e.username)
                        : e instanceof p.u_ && (n = e.username),
            n
        );
    }
    render() {
        let { isDefault: e, paymentSource: t, showSubtext: n, isForSubscription: i, showPaymentSourceIcon: s, showLabels: r } = this.props,
            l = this.renderSubText();
        return (0, a.jsxs)(h.Z, {
            children: [
                s && (0, a.jsx)(g.ZP, { type: this.typeString }),
                (0, a.jsxs)(h.Z, {
                    direction: h.Z.Direction.VERTICAL,
                    className: C.descriptionWrapper,
                    children: [
                        (0, a.jsxs)(h.Z, {
                            align: h.Z.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                r && e
                                    ? (0, a.jsx)('div', {
                                          className: C.defaultIndicator,
                                          children: T.intl.string(T.t.bBvAEB)
                                      })
                                    : null,
                                i
                                    ? (0, a.jsx)('div', {
                                          className: C.premiumIndicator,
                                          children: T.intl.string(T.t.YCrcPD)
                                      })
                                    : null,
                                r && t.invalid
                                    ? (0, a.jsx)('div', {
                                          className: C.invalidIndicator,
                                          children: T.intl.string(T.t['851k9/'])
                                      })
                                    : null
                            ]
                        }),
                        n && null != l
                            ? (0, a.jsx)('div', {
                                  className: C.subText,
                                  children: l
                              })
                            : null
                    ]
                })
            ]
        });
    }
}
(r = {
    isForSubscription: !1,
    isDefault: !1,
    showSubtext: !1,
    showPaymentSourceIcon: !1,
    showLabels: !1
}),
    (s = 'defaultProps') in (i = E)
        ? Object.defineProperty(i, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[s] = r);
