var a = n(200651),
    r = n(192379),
    l = n(442837),
    i = n(481060),
    o = n(219929),
    s = n(975060),
    c = n(559725),
    u = n(439041),
    d = n(388032),
    m = n(771195);
class p extends r.PureComponent {
    componentDidMount() {
        null == this.props.adyenPaymentData && null != this.props.cashAppPayComponent && c.cp();
    }
    render() {
        var e, t;
        let { className: n, cashAppPayComponent: r } = this.props,
            l = this.props.adyenPaymentData,
            s = null !== (t = null == l ? void 0 : null === (e = l.paymentMethod) || void 0 === e ? void 0 : e.cashtag) && void 0 !== t ? t : '',
            c = null != l && '' !== s;
        return (0, a.jsxs)('div', {
            className: n,
            children: [
                (0, a.jsx)(o.ZP, {
                    type: o.ZP.Types.CASH_APP,
                    size: o.Uy.MEDIUM,
                    className: m.icon
                }),
                c
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(i.Heading, {
                                  variant: s.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
                                  className: m.connectionInstructions,
                                  children: d.intl.format(d.t['ze/1yM'], { cashtag: s })
                              }),
                              (0, a.jsx)(i.Text, {
                                  variant: 'text-md/medium',
                                  className: m.connectionInstructions,
                                  children: d.intl.string(d.t.VPOx7O)
                              })
                          ]
                      })
                    : (0, a.jsx)(i.Text, {
                          variant: 'text-md/medium',
                          className: m.connectionInstructions,
                          children: null == r ? d.intl.string(d.t['CgVe//']) : d.intl.string(d.t['1MqcjI'])
                      })
            ]
        });
    }
}
t.Z = l.ZP.connectStores([u.Z, s.Z], () => ({
    cashAppPayComponent: u.Z.cashAppPayComponent,
    adyenPaymentData: s.Z.adyenPaymentData
}))(p);
