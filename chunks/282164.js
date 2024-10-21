var n = t(200651),
    s = t(192379),
    r = t(442837),
    l = t(481060),
    o = t(873115),
    i = t(219929),
    c = t(618541),
    u = t(975060),
    d = t(689938),
    E = t(245715);
class _ extends s.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && o.f6();
    }
    componentWillUnmount() {
        o.Nj().then(() => o.Dz());
    }
    render() {
        let { braintreeEmail: e, className: a, paypalClient: t } = this.props;
        return (0, n.jsx)(l.FormSection, {
            className: a,
            title: d.Z.Messages.PAYMENT_SOURCE_PAYPAL_ACCOUNT,
            children: (0, n.jsxs)('div', {
                className: E.inputWrapper,
                children: [
                    (0, n.jsx)(i.ZP, {
                        type: i.ZP.Types.PAYPAL,
                        className: E.paypalIcon
                    }),
                    (0, n.jsx)(l.TextInput, {
                        value: e,
                        editable: !1,
                        readOnly: !0,
                        placeholder: null == t ? d.Z.Messages.PAYMENT_SOURCE_PAYPAL_LOADING : d.Z.Messages.PAYMENT_SOURCE_CONFIRM_PAYPAL_DETAILS,
                        inputClassName: E.paypalInput
                    })
                ]
            })
        });
    }
}
a.Z = r.ZP.connectStores([c.Z, u.Z], () => ({
    braintreeEmail: u.Z.braintreeEmail,
    paypalClient: c.Z.getPayPalClient()
}))(_);
