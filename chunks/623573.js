n.r(t),
    n.d(t, {
        AddPaymentModalOld: function () {
            return W;
        },
        default: function () {
            return q;
        }
    }),
    n(411104),
    n(47120);
var i,
    s,
    r = n(200651),
    l = n(192379),
    a = n(734530),
    o = n(120356),
    c = n.n(o),
    d = n(512722),
    u = n.n(d),
    m = n(442837),
    h = n(481060),
    g = n(570140),
    p = n(355467),
    x = n(873115),
    S = n(976255),
    T = n(600164),
    C = n(598),
    _ = n(409813),
    E = n(3409),
    f = n(351402),
    I = n(975060),
    N = n(505649),
    A = n(358085),
    b = n(622999),
    v = n(462566),
    j = n(801937),
    O = n(282164),
    R = n(738342),
    P = n(228666),
    D = n(581813),
    y = n(981631),
    B = n(388032),
    L = n(924983),
    Z = n(739017);
function F(e, t, n) {
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
((s = i || (i = {})).PAYMENT_TYPE = 'payment_type'), (s.CARD_INFO = 'card_info'), (s.SOFORT_INFO = 'sofort_info'), (s.ADDRESS = 'billing_address'), (s.PAYMENT_REQUEST_INFO = 'payment_request_info'), (s.PAYPAL = 'paypal'), (s.PRZELEWY24_INFO = 'przelewy24_info');
let M = ['payment_type', 'card_info', 'billing_address'],
    k = ['payment_type', 'sofort_info', 'billing_address'],
    w = ['payment_type', 'paypal', 'billing_address'],
    U = ['payment_type', 'payment_request_info'],
    V = ['payment_type', 'billing_address'],
    G = ['payment_type', 'przelewy24_info', 'billing_address'],
    Y = ['payment_type', 'billing_address'];
function H(e) {
    return e.hasCardError() ? 'card_info' : e.hasAddressError() ? 'billing_address' : null;
}
class z extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { error: n } = e,
            { errorStep: i } = t;
        if (null == n) return null == i ? null : { errorStep: null };
        let s = H(n);
        return null != s && s !== t.errorStep
            ? {
                  step: s,
                  errorStep: s
              }
            : null;
    }
    async componentDidMount() {
        x.eI();
        let e = await (0, b.d2)();
        this.setState({ stripe: e });
    }
    componentWillUnmount() {
        g.Z.wait(() => x.gy()), (0, S.tt)();
    }
    get stepData() {
        let { step: e } = this.state,
            t = this.STEPS_DATA[e];
        if (null == t) throw Error('Invalid step '.concat(e));
        return t;
    }
    getSteps(e) {
        switch (null != e ? e : this.state.type) {
            case y.HeQ.PAYMENT_REQUEST:
                return U;
            case y.HeQ.PAYPAL:
                return w;
            case y.HeQ.SOFORT:
                return k;
            case y.HeQ.GIROPAY:
                return V;
            case y.HeQ.PRZELEWY24:
                return G;
            case y.HeQ.PAYSAFE_CARD:
            case y.HeQ.GCASH:
            case y.HeQ.GRABPAY_MY:
            case y.HeQ.MOMO_WALLET:
            case y.HeQ.KAKAOPAY:
            case y.HeQ.GOPAY_WALLET:
                return Y;
            default:
                return M;
        }
    }
    getNextStep() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.steps,
            { step: t } = this.state,
            n = e.indexOf(t);
        return e[n + 1];
    }
    getPreviousStep() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.steps,
            { step: t } = this.state,
            n = e.indexOf(t);
        return e[n - 1];
    }
    preventDefault(e) {
        e.preventDefault();
    }
    handleReopenPaypal() {
        x.i0();
    }
    renderGenericError() {
        let { error: e } = this.props;
        return null == e || null != H(e)
            ? null
            : (0, r.jsx)(h.FormErrorBlock, {
                  className: L.errorBlock,
                  children: e.message
              });
    }
    renderFooter() {
        let e = this.stepData;
        return null == e.renderNextButton
            ? null
            : (0, r.jsx)(h.ModalFooter, {
                  children: (0, r.jsxs)(T.Z, {
                      justify: T.Z.Justify.BETWEEN,
                      children: [
                          (0, r.jsx)(h.Button, {
                              onClick: this.handleBackClick,
                              color: h.Button.Colors.PRIMARY,
                              look: h.Button.Looks.LINK,
                              size: h.Button.Sizes.MIN,
                              children: B.intl.string(B.t['13/7kZ'])
                          }),
                          e.renderNextButton()
                      ]
                  })
              });
    }
    render() {
        let { step: e, steps: t } = this.state,
            { transitionState: n } = this.props,
            i = t.map((e) => ({
                id: e,
                label: (function (e) {
                    switch (e) {
                        case 'payment_type':
                            return B.intl.string(B.t.rZqPNT);
                        case 'payment_request_info':
                            return B.intl.string(B.t.DDPRXl);
                        case 'card_info':
                            return B.intl.string(B.t.yMPCXF);
                        case 'billing_address':
                            return B.intl.string(B.t['50Auo6']);
                        case 'paypal':
                            return B.intl.string(B.t.RVHDnJ);
                        case 'sofort_info':
                            return B.intl.string(B.t['+B1HPz']);
                        case 'przelewy24_info':
                            return B.intl.string(B.t.BW0R4u);
                    }
                })(e)
            }));
        return (0, r.jsx)(a.Elements, {
            options: y.OBo,
            stripe: this.state.stripe,
            children: (0, r.jsx)(h.ModalRoot, {
                transitionState: n,
                size: h.ModalSize.SMALL,
                className: L.modal,
                'aria-label': B.intl.string(B.t.eQ2bLi),
                children: (0, r.jsxs)('form', {
                    className: L.form,
                    onSubmit: this.preventDefault,
                    children: [
                        (0, r.jsxs)(h.ModalHeader, {
                            direction: T.Z.Direction.VERTICAL,
                            align: T.Z.Align.STRETCH,
                            separator: !1,
                            children: [
                                (0, r.jsxs)(T.Z, {
                                    className: L.modalTitle,
                                    justify: T.Z.Justify.BETWEEN,
                                    align: T.Z.Align.CENTER,
                                    children: [
                                        (0, r.jsx)(h.FormTitle, {
                                            tag: h.FormTitleTags.H4,
                                            children: B.intl.string(B.t.eQ2bLi)
                                        }),
                                        (0, r.jsx)(h.ModalCloseButton, { onClick: this.handleClose })
                                    ]
                                }),
                                this.renderGenericError(),
                                (0, r.jsx)(h.Breadcrumbs, {
                                    breadcrumbs: i,
                                    activeId: e
                                })
                            ]
                        }),
                        (0, r.jsx)('div', { className: L.divider }),
                        (0, r.jsx)(h.Sequencer, {
                            fillParent: !0,
                            className: L.sequencer,
                            step: e,
                            steps: t,
                            children: (0, r.jsx)(h.ModalContent, {
                                className: L.content,
                                children: this.stepData.renderBody()
                            })
                        }),
                        this.renderFooter()
                    ]
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            F(this, 'state', {
                type: y.HeQ.CARD,
                step: 'payment_type',
                steps: M,
                errorStep: null,
                stripeToken: null,
                stripe: null,
                tokenSubmitting: !1,
                paymentDetails: { p24Bank: '' }
            }),
            F(this, 'STEPS_DATA', {
                przelewy24_info: {
                    renderBody: () => {
                        let { error: e, billingAddressInfo: t } = this.props;
                        return (0, r.jsx)(R.w, {
                            billingAddressInfo: t,
                            onDetailsChange: this.handlePaymentDetailsChange,
                            onP24BankChange: this.handleP24BankChange,
                            p24BankValue: this.state.paymentDetails.p24Bank,
                            error: e
                        });
                    },
                    renderNextButton: () => {
                        var e;
                        let { billingAddressInfo: t } = this.props,
                            n = null === (e = this.state.paymentDetails) || void 0 === e ? void 0 : e.p24Bank;
                        return (0, r.jsx)(h.Button, {
                            type: 'submit',
                            disabled: '' === t.name || '' === t.email || '' === n,
                            onClick: this.handleNextClick,
                            children: B.intl.string(B.t.PDTjLC)
                        });
                    }
                },
                sofort_info: {
                    renderBody: () => {
                        let { error: e, billingAddressInfo: t } = this.props;
                        return (0, r.jsx)(R.Z, {
                            billingAddressInfo: t,
                            onChange: this.handlePaymentDetailsChange,
                            error: e
                        });
                    },
                    renderNextButton: () => {
                        let { billingAddressInfo: e } = this.props;
                        return (0, r.jsx)(h.Button, {
                            type: 'submit',
                            disabled: '' === e.name || '' === e.email,
                            onClick: this.handleNextClick,
                            children: B.intl.string(B.t.PDTjLC)
                        });
                    }
                },
                payment_type: {
                    renderBody: () =>
                        (0, r.jsx)(j.Z, {
                            allowStripeRequestPayments: !A.isPlatformEmbedded,
                            onChooseType: this.handleChooseType,
                            onStripePaymentMethodReceived: this.handleStripePaymentMethod
                        })
                },
                payment_request_info: {
                    renderBody: () => {
                        let { stripePaymentMethod: e, submitting: t } = this.props;
                        return (0, r.jsx)(D.k, {
                            stripePaymentMethod: e,
                            submitting: t
                        });
                    },
                    renderNextButton: () => {
                        let { submitting: e } = this.props;
                        return (0, r.jsx)(h.Button, {
                            submitting: e,
                            look: h.Button.Looks.OUTLINED,
                            disabled: !0
                        });
                    }
                },
                card_info: {
                    renderBody: () => {
                        let { error: e } = this.props,
                            t = null != e && (null == e.code || 'card_info' === H(e));
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                t
                                    ? (0, r.jsx)(h.FormErrorBlock, {
                                          className: L.errorBlock,
                                          children: B.intl.string(B.t['4vnhKS'])
                                      })
                                    : null,
                                (0, r.jsx)(v.Z, {
                                    onCardInfoChange: this.handleCardInfoChange,
                                    error: t ? e : null
                                })
                            ]
                        });
                    },
                    renderNextButton: () => {
                        let { isCreditCardInfoValid: e } = this.props,
                            { tokenSubmitting: t } = this.state;
                        return (0, r.jsx)(a.ElementsConsumer, {
                            children: (n) => {
                                let { elements: i } = n;
                                return (0, r.jsx)(h.Button, {
                                    disabled: !e,
                                    onClick: () => {
                                        this.createToken(i);
                                    },
                                    type: 'submit',
                                    submitting: t,
                                    children: B.intl.string(B.t.PDTjLC)
                                });
                            }
                        });
                    }
                },
                billing_address: {
                    renderBody: () => {
                        let { billingAddressInfo: e, error: t } = this.props,
                            { type: n } = this.state;
                        return (0, r.jsx)(P.P, {
                            billingAddressInfo: e,
                            billingError: t,
                            onBillingAddressChange: this.handleBillingAddressChange,
                            paymentSourceType: n
                        });
                    },
                    renderNextButton: () => {
                        let { submitting: e, isBillingAddressInfoValid: t, isAuthenticating: n } = this.props;
                        return (0, r.jsx)(h.Button, {
                            type: 'submit',
                            submitting: e,
                            disabled: !t || n,
                            onClick: this.handleSave,
                            children: B.intl.string(B.t.R3BPHx)
                        });
                    }
                },
                paypal: {
                    renderBody: () => (0, r.jsx)(O.Z, {}),
                    renderNextButton: () => {
                        let { submitting: e, braintreeNonce: t, braintreeEmail: n } = this.props,
                            i = null != n && null != t;
                        return (0, r.jsx)(h.Button, {
                            submitting: e,
                            color: i ? h.Button.Colors.BRAND : h.Button.Colors.PRIMARY,
                            onClick: i ? this.handleNextClick : this.handleReopenPaypal,
                            children: i ? B.intl.string(B.t.PDTjLC) : B.intl.string(B.t.Djzd7O)
                        });
                    }
                }
            }),
            F(this, 'handleChooseType', (e) => {
                let t = this.getSteps(e),
                    n = this.getNextStep(t);
                null != n &&
                    this.setState({
                        type: e,
                        steps: t,
                        step: n
                    });
            }),
            F(this, 'handleCardInfoChange', (e, t) => {
                g.Z.wait(() => (0, S.sn)(e, t));
            }),
            F(this, 'handlePaymentDetailsChange', (e) => {
                let { billingAddressInfo: t } = this.props;
                (t.name = e.name),
                    g.Z.wait(() =>
                        (0, S.Ow)(
                            {
                                ...t,
                                ...e
                            },
                            !1
                        )
                    );
            }),
            F(this, 'handleP24BankChange', (e) => {
                this.setState({ paymentDetails: { p24Bank: e } });
            }),
            F(this, 'handleBillingAddressChange', (e, t) => {
                let { billingAddressInfo: n } = this.props;
                g.Z.wait(() =>
                    (0, S.Ow)(
                        {
                            ...n,
                            ...e
                        },
                        t
                    )
                );
            }),
            F(this, 'handleBackClick', () => {
                let e = this.getPreviousStep();
                if (null != e) {
                    'payment_type' === e && (0, S.fw)();
                    this.setState({ step: e });
                }
            }),
            F(this, 'handleNextClick', () => {
                let e = this.getNextStep();
                null != e && this.setState({ step: e });
            }),
            F(this, 'handleClose', () => {
                (0, S.fw)(), this.props.onClose();
            }),
            F(this, 'handleStripePaymentMethod', (e) => {
                if (((0, S.Xt)(e), null == e)) {
                    this.handleBackClick();
                    return;
                }
                this.handleStripePaymentRequestSave(e);
            }),
            F(this, 'handleStripePaymentRequestSave', async (e) => {
                try {
                    let t = await p.i6(e, void 0, this.props.analyticsLocation),
                        { onAddPaymentSource: n } = this.props;
                    null == n || n(t), this.handleClose();
                } catch (e) {}
            }),
            F(this, 'createToken', async (e) => {
                let { stripe: t } = this.state;
                this.setState({ tokenSubmitting: !0 });
                try {
                    let n = await p.qv(t, e);
                    this.setState({ stripeToken: n }), this.handleNextClick();
                } catch (e) {
                } finally {
                    this.setState({ tokenSubmitting: !1 });
                }
            }),
            F(this, 'handleSave', () => {
                let { type: e } = this.state;
                switch (e) {
                    case y.HeQ.PAYPAL:
                        return this.handlePaypalSave();
                    case y.HeQ.CARD:
                        return this.handleCardSave();
                    case y.HeQ.SOFORT:
                        return this.handleSofortSave();
                    case y.HeQ.GIROPAY:
                        return this.handleGiropaySave();
                    case y.HeQ.PRZELEWY24:
                        return this.handlePrzelewy24Save();
                    case y.HeQ.PAYSAFE_CARD:
                    case y.HeQ.GRABPAY_MY:
                        return this.handleAdyenPrepaidPaymentMethodSave(e);
                    default:
                        p.SQ('user used a unsupported payment type: '.concat(e));
                }
            }),
            F(this, 'handlePrzelewy24Save', async () => {
                let { billingAddressInfo: e, isBillingAddressInfoValid: t, onAddPaymentSource: n, analyticsLocation: i } = this.props,
                    { stripe: s, paymentDetails: r } = this.state;
                if (!!t)
                    try {
                        let t = await p.pF(s, r, e, i);
                        null == n || n(t), this.handleClose();
                    } catch (e) {}
            }),
            F(this, 'handleSofortSave', async () => {
                let { billingAddressInfo: e, isBillingAddressInfoValid: t, onAddPaymentSource: n, analyticsLocation: i } = this.props,
                    { stripe: s } = this.state;
                if (!!t)
                    try {
                        let t = await p.av(s, e, i);
                        null == n || n(t), this.handleClose();
                    } catch (e) {}
            }),
            F(this, 'handleCardSave', async () => {
                let { billingAddressInfo: e, isCreditCardInfoValid: t, isBillingAddressInfoValid: n, onAddPaymentSource: i, analyticsLocation: s } = this.props,
                    { stripe: r, stripeToken: l } = this.state;
                if (!!t && !!n)
                    try {
                        let t = await p.f0(r, l, e, s);
                        null == i || i(t), this.handleClose();
                    } catch (e) {}
            }),
            F(this, 'handlePaypalSave', async () => {
                let { braintreeEmail: e, braintreeNonce: t, billingAddressInfo: n, onAddPaymentSource: i, analyticsLocation: s } = this.props;
                if (null != e && null != t)
                    try {
                        let e = await p.lP(t, n, s);
                        null == i || i(e), this.handleClose();
                    } catch (e) {}
            }),
            F(this, 'handleAdyenPrepaidPaymentMethodSave', async (e) => {
                let { billingAddressInfo: t, isBillingAddressInfoValid: n, onAddPaymentSource: i, analyticsLocation: s } = this.props;
                if (!!n)
                    try {
                        let n = await p.sF(t, e, s);
                        null == i || i(n), this.handleClose();
                    } catch (e) {}
            }),
            F(this, 'handleGiropaySave', async () => {
                let { billingAddressInfo: e, isBillingAddressInfoValid: t, onAddPaymentSource: n, analyticsLocation: i } = this.props,
                    { stripe: s } = this.state;
                if (!!t)
                    try {
                        let t = await p.GV(s, e, y.HeQ.GIROPAY, i);
                        null == n || n(t), this.handleClose();
                    } catch (e) {}
            });
    }
}
let W = m.ZP.connectStores([I.Z, f.Z, N.Z], () => ({
    braintreeEmail: I.Z.braintreeEmail,
    braintreeNonce: I.Z.braintreeNonce,
    stripePaymentMethod: I.Z.stripePaymentMethod,
    creditCardInfo: I.Z.getCreditCardInfo(),
    isCreditCardInfoValid: I.Z.isCardInfoValid,
    billingAddressInfo: I.Z.getBillingAddressInfo(),
    isBillingAddressInfoValid: I.Z.isBillingAddressInfoValid,
    error: I.Z.error,
    popupCallbackCalled: I.Z.popupCallbackCalled,
    submitting: f.Z.isBusy,
    isAuthenticating: N.Z.isAwaitingAuthentication
}))(z);
function K(e) {
    let { transitionState: t, analyticsLocation: n, onClose: i, onAddPaymentSource: s, toastContent: l, initialStep: a = _.h8.PAYMENT_TYPE, overwriteSubscriptionPaymentSource: o = !1 } = e,
        d = (0, E.fL)(),
        m = (0, E.vP)({
            paymentModalArgs: d,
            initialStep: a,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                i();
            },
            onComplete: (e, t) => {
                u()(null != t, 'paymentSource missing'), null == s || s(t), i();
            },
            onStepChange: () => {},
            header: (0, r.jsxs)('div', {
                className: c()(L.modalTitle, Z.flex, Z.justifyBetween, Z.alignCenter),
                children: [
                    (0, r.jsx)(h.FormTitle, {
                        tag: h.FormTitleTags.H4,
                        children: B.intl.string(B.t.eQ2bLi)
                    }),
                    (0, r.jsx)(h.ModalCloseButton, { onClick: i })
                ]
            }),
            analyticsLocation: n,
            hideBreadcrumbs: !0,
            toastContent: l,
            overwriteSubscriptionPaymentSource: o
        });
    return (0, r.jsx)(h.ModalRoot, {
        transitionState: t,
        size: h.ModalSize.SMALL,
        className: L.modal,
        'aria-label': B.intl.string(B.t.eQ2bLi),
        children: (0, r.jsx)('form', {
            className: L.form,
            onSubmit: function (e) {
                e.preventDefault();
            },
            children: m
        })
    });
}
function q(e) {
    return (0, r.jsx)(C.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, r.jsx)(K, { ...e })
    });
}
