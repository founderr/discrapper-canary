n(47120);
var a = n(200651),
    r = n(192379),
    l = n(481060),
    i = n(600164),
    s = n(710845),
    o = n(219929),
    c = n(358085),
    u = n(622999),
    d = n(981631),
    m = n(388032);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let h = new s.Z('PaymentRequest');
class A extends r.Component {
    componentDidMount() {
        (0, u.d2)().then((e) => {
            this.initPaymentRequest(e);
        });
    }
    render() {
        let { canMakePayment: e } = this.state;
        if (null == e)
            return (0, a.jsx)(l.Button, {
                submitting: !0,
                look: l.Button.Looks.FILLED
            });
        if (!1 === e)
            return (0, a.jsx)(l.Button, {
                disabled: !0,
                look: l.Button.Looks.FILLED,
                children: m.intl.string(m.t.lNZLh4)
            });
        let t = (0, c.isAndroidChrome)(),
            n = t ? m.intl.string(m.t.p2jr2N) : m.intl.string(m.t.f19PPT),
            r = t ? o.ZP.Types.G_PAY : o.ZP.Types.PAYMENT_REQUEST,
            { className: s, iconClassName: u } = this.props;
        return (0, a.jsx)(
            l.Button,
            {
                onClick: this.handleOnClick,
                className: s,
                children: (0, a.jsxs)(i.Z, {
                    align: i.Z.Align.CENTER,
                    children: [
                        (0, a.jsx)(o.ZP, {
                            className: u,
                            type: r
                        }),
                        n
                    ]
                })
            },
            d.HeQ.PAYMENT_REQUEST
        );
    }
    constructor(...e) {
        super(...e),
            p(this, 'state', {}),
            p(this, 'initPaymentRequest', async (e) => {
                if (null == e) return;
                let t = e.paymentRequest({
                        country: 'US',
                        currency: 'usd',
                        total: {
                            label: this.props.paymentLabel,
                            amount: 0,
                            pending: !0
                        },
                        requestPayerName: !0
                    }),
                    { onStripePaymentMethodReceived: n } = this.props;
                t.on('paymentmethod', (e) => {
                    let { complete: t, paymentMethod: a } = e;
                    n(a), t('success');
                }),
                    t.on('cancel', () => {
                        n(null);
                    });
                let a = await t.canMakePayment();
                h.info('PaymentRequest availablity check', a),
                    this.setState({
                        canMakePayment: !!a,
                        paymentRequest: t
                    });
            }),
            p(this, 'handleOnClick', () => {
                let { onChooseType: e } = this.props;
                e(d.HeQ.PAYMENT_REQUEST);
                let { paymentRequest: t } = this.state;
                null != t && t.show();
            });
    }
}
t.Z = A;
