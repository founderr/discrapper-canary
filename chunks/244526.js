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
    g = n(600164),
    h = n(219929),
    p = n(46141),
    x = n(122289),
    T = n(624138),
    S = n(388032),
    _ = n(506850);
class E extends (l = o.PureComponent) {
    get typeString() {
        let { paymentSource: e } = this.props;
        if (e instanceof p.qo) return h.ZP.Types.PAYPAL;
        if (e instanceof p.Sf) return h.ZP.Types.SOFORT;
        if (e instanceof p.dm) return h.ZP.getType(e.brand);
        else if (e instanceof p.fv) return h.ZP.Types.GIROPAY;
        else if (e instanceof p.Vg) return h.ZP.Types.PRZELEWY24;
        else if (e instanceof p.sn) return h.ZP.Types.PAYSAFECARD;
        else if (e instanceof p.o_) return h.ZP.Types.GCASH;
        else if (e instanceof p.kX) return h.ZP.Types.GRABPAY;
        else if (e instanceof p.z) return h.ZP.Types.MOMO_WALLET;
        else if (e instanceof p.Xc) return h.ZP.Types.VENMO;
        else if (e instanceof p.Om) return h.ZP.Types.KAKAOPAY;
        else if (e instanceof p.JC) return h.ZP.Types.GOPAY_WALLET;
        else if (e instanceof p.U4) return h.ZP.Types.BANCONTACT;
        else if (e instanceof p.D0) return h.ZP.Types.EPS;
        else if (e instanceof p.jc) return h.ZP.Types.IDEAL;
        else if (e instanceof p.u_) return h.ZP.Types.CASH_APP;
        else if (e instanceof p.$z) return h.ZP.Types.APPLE;
        return h.ZP.Types.UNKNOWN;
    }
    getLabel(e) {
        return e instanceof p.dm
            ? S.intl.format(S.t['o/dsrK'], {
                  brand: (0, T.De)(e.brand),
                  last_4: e.last4
              })
            : e instanceof p.qo
              ? S.intl.string(S.t['2dgEq6'])
              : e instanceof p.Sf
                ? S.intl.string(S.t['edKX//'])
                : e instanceof p.fv
                  ? S.intl.string(S.t['y+0MQU'])
                  : e instanceof p.Vg
                    ? S.intl.string(S.t.u25uLy)
                    : e instanceof p.sn
                      ? S.intl.string(S.t.boznHB)
                      : e instanceof p.o_
                        ? S.intl.string(S.t.PjehcH)
                        : e instanceof p.kX
                          ? S.intl.string(S.t.T5davL)
                          : e instanceof p.z
                            ? S.intl.string(S.t.J0A1Vl)
                            : e instanceof p.Xc
                              ? S.intl.string(S.t.jYOezc)
                              : e instanceof p.Om
                                ? S.intl.string(S.t.CSVexs)
                                : e instanceof p.JC
                                  ? S.intl.string(S.t['43J8JC'])
                                  : e instanceof p.U4
                                    ? S.intl.string(S.t['1ITkfn'])
                                    : e instanceof p.jc
                                      ? S.intl.format(S.t['9kUlRU'], { bank: (0, m.YE)(e.bank) })
                                      : e instanceof p.D0
                                        ? S.intl.format(S.t.hSPoZ2, { bank: (0, m.Ul)(e.bank) })
                                        : e instanceof p.u_
                                          ? S.intl.string(S.t['+rbTmJ'])
                                          : e instanceof p.$z
                                            ? S.intl.string(S.t.RFi12t)
                                            : S.intl.string(S.t.jdPblp);
    }
    renderDescription() {
        let { paymentSource: e, descriptionClassName: t } = this.props;
        return (0, a.jsx)(u.Text, {
            className: d()(_.description, t),
            variant: 'text-md/semibold',
            children: this.getLabel(e)
        });
    }
    renderSubText() {
        let { paymentSource: e, locale: t } = this.props,
            n = null;
        return (
            e instanceof p.dm
                ? (n = S.intl.formatToPlainString(S.t['8rTTub'], {
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
        return (0, a.jsxs)(g.Z, {
            children: [
                s && (0, a.jsx)(h.ZP, { type: this.typeString }),
                (0, a.jsxs)(g.Z, {
                    direction: g.Z.Direction.VERTICAL,
                    className: _.descriptionWrapper,
                    children: [
                        (0, a.jsxs)(g.Z, {
                            align: g.Z.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                r && e
                                    ? (0, a.jsx)('div', {
                                          className: _.defaultIndicator,
                                          children: S.intl.string(S.t.bBvAEB)
                                      })
                                    : null,
                                i
                                    ? (0, a.jsx)('div', {
                                          className: _.premiumIndicator,
                                          children: S.intl.string(S.t.YCrcPD)
                                      })
                                    : null,
                                r && t.invalid
                                    ? (0, a.jsx)('div', {
                                          className: _.invalidIndicator,
                                          children: S.intl.string(S.t['851k9/'])
                                      })
                                    : null
                            ]
                        }),
                        n && null != l
                            ? (0, a.jsx)('div', {
                                  className: _.subText,
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
