var n = t(200651),
    s = t(192379),
    r = t(442837),
    l = t(481060),
    o = t(219929),
    i = t(975060),
    c = t(559725),
    u = t(439041),
    d = t(689938),
    E = t(286017);
class _ extends s.PureComponent {
    componentDidMount() {
        null == this.props.adyenPaymentData && null != this.props.cashAppPayComponent && c.cp();
    }
    render() {
        var e, a;
        let { className: t, cashAppPayComponent: s } = this.props,
            r = this.props.adyenPaymentData,
            i = null !== (a = null == r ? void 0 : null === (e = r.paymentMethod) || void 0 === e ? void 0 : e.cashtag) && void 0 !== a ? a : '',
            c = null != r && '' !== i;
        return (0, n.jsxs)('div', {
            className: t,
            children: [
                (0, n.jsx)(o.ZP, {
                    type: o.ZP.Types.CASH_APP,
                    size: o.Uy.MEDIUM,
                    className: E.icon
                }),
                c
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(l.Heading, {
                                  variant: i.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
                                  className: E.connectionInstructions,
                                  children: d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTED_SUCCESS.format({ cashtag: i })
                              }),
                              (0, n.jsx)(l.Text, {
                                  variant: 'text-md/medium',
                                  className: E.connectionInstructions,
                                  children: d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTED_SUCCESS_INSTRUCTIONS
                              })
                          ]
                      })
                    : (0, n.jsx)(l.Text, {
                          variant: 'text-md/medium',
                          className: E.connectionInstructions,
                          children: null == s ? d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_LOADING : d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTION_INSTRUCTIONS
                      })
            ]
        });
    }
}
a.Z = r.ZP.connectStores([u.Z, i.Z], () => ({
    cashAppPayComponent: u.Z.cashAppPayComponent,
    adyenPaymentData: i.Z.adyenPaymentData
}))(_);
