n.d(t, {
    T: function () {
        return N;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    l = n(481060),
    i = n(710845),
    o = n(219929),
    s = n(526167),
    c = n(358085),
    u = n(622999),
    d = n(981631),
    m = n(388032),
    p = n(796953);
function h(e, t, n) {
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
let A = new i.Z('PaymentRequest');
class E extends r.Component {
    initPaymentRequestCallback(e) {}
    onPaymentRequestFailure() {
        void 0 !== this.props.onPaymentRequestFailure && this.props.onPaymentRequestFailure();
    }
    componentDidMount() {
        (0, u.d2)().then((e) => {
            this.initPaymentRequest(e);
        });
    }
    renderLoadingState() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Button.Colors.BRAND,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Button.Looks.FILLED;
        return null !== (t = this.props.loadingComponent) && void 0 !== t
            ? t
            : (0, a.jsx)(l.Button, {
                  color: n,
                  className: null !== (e = this.props.className) && void 0 !== e ? e : p.button,
                  submitting: !0,
                  look: r
              });
    }
    renderButton(e) {
        var t, n;
        let { iconType: r, buttonText: i, ...s } = e;
        return (0, a.jsx)(
            l.Button,
            {
                onClick: this.attemptPaymentRequest,
                className: null !== (t = this.props.className) && void 0 !== t ? t : p.button,
                submitting: this.state.submitting,
                ...s,
                children: (0, a.jsxs)('div', {
                    className: p.centerContainer,
                    children: [
                        (0, a.jsx)(o.ZP, {
                            className: null !== (n = this.props.iconClassName) && void 0 !== n ? n : p.buttonIcon,
                            type: r
                        }),
                        i
                    ]
                })
            },
            d.HeQ.PAYMENT_REQUEST
        );
    }
    render() {
        if (this.state.submitting) return this.renderLoadingState();
        let { canMakePayment: e } = this.state;
        if (!1 === e)
            return (0, a.jsx)(l.Button, {
                disabled: !0,
                look: l.Button.Looks.FILLED,
                children: m.intl.string(m.t.lNZLh4)
            });
        let t = (0, c.isAndroidChrome)(),
            n = t ? m.intl.string(m.t.p2jr2N) : m.intl.string(m.t.f19PPT),
            r = t ? o.ZP.Types.G_PAY : o.ZP.Types.PAYMENT_REQUEST,
            { className: i, iconClassName: s } = this.props;
        return (0, a.jsx)(
            l.Button,
            {
                onClick: this.attemptPaymentRequest,
                className: null != i ? i : p.button,
                children: (0, a.jsxs)('div', {
                    className: p.centerContainer,
                    children: [
                        (0, a.jsx)(o.ZP, {
                            className: null != s ? s : p.buttonIcon,
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
            h(this, 'initialState', {
                submitting: !0,
                paymentRequest: null,
                canMakePayment: null,
                canMakePaymentResult: null
            }),
            h(this, 'state', { ...this.initialState }),
            h(this, 'initPaymentRequest', async (e) => {
                if (null == e) return;
                this.setState({
                    submitting: !0,
                    paymentRequest: null,
                    canMakePayment: null,
                    canMakePaymentResult: null
                });
                let t = e.paymentRequest({
                    country: 'US',
                    currency: 'usd',
                    total: {
                        label: this.props.paymentLabel,
                        amount: 0,
                        pending: !0
                    },
                    requestPayerName: !0
                });
                null != this.props.paymentRequestRef && (this.props.paymentRequestRef.current = t);
                let { onStripePaymentMethodReceived: n } = this.props;
                t.on('paymentmethod', (e) => {
                    let { complete: t, paymentMethod: a } = e;
                    n(a), t('success');
                }),
                    t.on('cancel', () => {
                        n(null);
                    });
                let a = await t.canMakePayment();
                return (
                    A.info('PaymentRequest availablity check', a),
                    this.setState(
                        {
                            submitting: !1,
                            paymentRequest: t,
                            canMakePayment: !!a,
                            canMakePaymentResult: a
                        },
                        () => {
                            this.initPaymentRequestCallback(a);
                        }
                    ),
                    a
                );
            }),
            h(this, 'attemptPaymentRequest', () => {
                let { paymentRequest: e, canMakePayment: t } = this.state;
                if (null == e || !t) {
                    this.onPaymentRequestFailure();
                    return;
                }
                let { onChooseType: n } = this.props;
                n(d.HeQ.PAYMENT_REQUEST), e.show();
            });
    }
}
class N extends E {
    initPaymentRequestCallback() {
        let { available: e } = this.validateGooglePay();
        e ? this.onValidGooglePay() : this.onPaymentRequestFailure();
    }
    onValidGooglePay() {
        void 0 !== this.props.onValidGooglePay && this.props.onValidGooglePay();
    }
    isBrowserCompatible() {
        return (0, s.vu)() >= 61;
    }
    renderGooglePayButton(e) {
        return this.renderButton({
            iconType: o.ZP.Types.G_PAY,
            buttonText: m.intl.string(m.t.p2jr2N),
            submitting: !(0, c.isDesktop)() && this.state.submitting,
            ...e
        });
    }
    renderGooglePayConnector() {
        return (0, a.jsxs)('div', {
            className: this.props.className,
            children: [
                (0, a.jsx)(o.ZP, {
                    type: o.ZP.Types.G_PAY,
                    size: o.Uy.MEDIUM,
                    className: p.googlePayIcon
                }),
                (0, a.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    className: p.connectionInstructions,
                    children: m.intl.string(m.t.ueoGeX)
                })
            ]
        });
    }
    renderGooglePayComponent() {
        return this.props.renderConnectorView ? this.renderGooglePayConnector() : this.renderGooglePayButton();
    }
    render() {
        if ((0, c.isDesktop)()) return this.renderGooglePayComponent();
        if (this.state.submitting) {
            var e;
            return null !== (e = this.props.loadingComponent) && void 0 !== e ? e : (0, a.jsx)(a.Fragment, {});
        }
        let { available: t } = this.validateGooglePay();
        return t ? this.renderGooglePayComponent() : (0, a.jsx)(a.Fragment, {});
    }
    constructor(...e) {
        super(...e),
            h(this, 'state', { ...this.initialState }),
            h(this, 'validateGooglePay', () => {
                let { paymentRequest: e, canMakePaymentResult: t } = this.state;
                if (!this.isBrowserCompatible()) {
                    let e = 'Browser does not support Google Pay';
                    return (
                        A.warn(e),
                        {
                            available: !1,
                            errorMessage: e
                        }
                    );
                }
                if (null == e) {
                    let e = 'Payment request is not ready';
                    return (
                        A.error(e),
                        {
                            available: !1,
                            errorMessage: e
                        }
                    );
                }
                if (null == t || !t.googlePay) {
                    let e = 'Google Pay is unavailable or has not been set up in this browser. ';
                    return (
                        A.error(e, 'Stripe CanMakePaymentResult: ', t),
                        {
                            available: !1,
                            errorMessage: e
                        }
                    );
                }
                return {
                    available: !0,
                    errorMessage: null
                };
            }),
            h(this, 'attemptPaymentRequest', () => {
                if ((0, c.isDesktop)()) {
                    this.props.onChooseType(d.HeQ.PAYMENT_REQUEST);
                    return;
                }
                let { available: e } = this.validateGooglePay();
                if (!e) {
                    this.onPaymentRequestFailure();
                    return;
                }
                let { paymentRequest: t } = this.state;
                e && null != t && (t.show(), this.props.onChooseType(d.HeQ.PAYMENT_REQUEST));
            });
    }
}
