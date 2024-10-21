var n = t(200651),
    s = t(192379),
    r = t(442837),
    l = t(481060),
    o = t(873115),
    i = t(219929),
    c = t(618541),
    u = t(975060),
    d = t(689938),
    E = t(299490);
class _ extends s.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && o.by();
    }
    componentWillUnmount() {
        o.RS().then(() => o.ib());
    }
    render() {
        let { venmoUsername: e, className: a, venmoClient: t } = this.props,
            s = null != e && '' !== e;
        return (0, n.jsxs)('div', {
            className: a,
            children: [
                (0, n.jsx)(i.ZP, {
                    type: i.ZP.Types.VENMO,
                    size: i.Uy.MEDIUM,
                    className: E.venmoIcon
                }),
                s
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(l.Heading, {
                                  variant: e.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
                                  className: E.connectionInstructions,
                                  children: d.Z.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS.format({ venmoUsername: e })
                              }),
                              (0, n.jsx)(l.Text, {
                                  variant: 'text-md/medium',
                                  className: E.connectionInstructions,
                                  children: d.Z.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS_INSTRUCTIONS
                              })
                          ]
                      })
                    : (0, n.jsx)(l.Text, {
                          variant: 'text-md/medium',
                          className: E.connectionInstructions,
                          children: null == t ? d.Z.Messages.PAYMENT_SOURCE_VENMO_LOADING : d.Z.Messages.PAYMENT_SOURCE_VENMO_CONNECTION_INSTRUCTIONS
                      })
            ]
        });
    }
}
a.Z = r.ZP.connectStores([c.Z, u.Z], () => ({
    venmoUsername: u.Z.venmoUsername,
    venmoClient: c.Z.getVenmoClient()
}))(_);
