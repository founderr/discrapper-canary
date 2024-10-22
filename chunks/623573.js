t.r(s),
    t.d(s, {
        AddPaymentModalOld: function () {
            return K;
        },
        default: function () {
            return Q;
        }
    }),
    t(411104),
    t(47120);
var n,
    a,
    i = t(200651),
    r = t(192379),
    o = t(734530),
    l = t(120356),
    c = t.n(l),
    d = t(512722),
    _ = t.n(d),
    u = t(442837),
    E = t(481060),
    T = t(570140),
    S = t(355467),
    I = t(873115),
    N = t(976255),
    m = t(600164),
    C = t(598),
    A = t(409813),
    g = t(3409),
    h = t(351402),
    O = t(975060),
    p = t(505649),
    R = t(358085),
    x = t(622999),
    M = t(462566),
    f = t(801937),
    D = t(282164),
    L = t(738342),
    P = t(228666),
    b = t(581813),
    Z = t(981631),
    v = t(689938),
    j = t(924983),
    B = t(739017);
function U(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
((a = n || (n = {})).PAYMENT_TYPE = 'payment_type'), (a.CARD_INFO = 'card_info'), (a.SOFORT_INFO = 'sofort_info'), (a.ADDRESS = 'billing_address'), (a.PAYMENT_REQUEST_INFO = 'payment_request_info'), (a.PAYPAL = 'paypal'), (a.PRZELEWY24_INFO = 'przelewy24_info');
let G = ['payment_type', 'card_info', 'billing_address'],
    F = ['payment_type', 'sofort_info', 'billing_address'],
    y = ['payment_type', 'paypal', 'billing_address'],
    V = ['payment_type', 'payment_request_info'],
    Y = ['payment_type', 'billing_address'],
    k = ['payment_type', 'przelewy24_info', 'billing_address'],
    w = ['payment_type', 'billing_address'];
function H(e) {
    return e.hasCardError() ? 'card_info' : e.hasAddressError() ? 'billing_address' : null;
}
class W extends r.PureComponent {
    static getDerivedStateFromProps(e, s) {
        let { error: t } = e,
            { errorStep: n } = s;
        if (null == t) return null == n ? null : { errorStep: null };
        let a = H(t);
        return null != a && a !== s.errorStep
            ? {
                  step: a,
                  errorStep: a
              }
            : null;
    }
    async componentDidMount() {
        I.eI();
        let e = await (0, x.d2)();
        this.setState({ stripe: e });
    }
    componentWillUnmount() {
        T.Z.wait(() => I.gy()), (0, N.tt)();
    }
    get stepData() {
        let { step: e } = this.state,
            s = this.STEPS_DATA[e];
        if (null == s) throw Error('Invalid step '.concat(e));
        return s;
    }
    getSteps(e) {
        switch (null != e ? e : this.state.type) {
            case Z.HeQ.PAYMENT_REQUEST:
                return V;
            case Z.HeQ.PAYPAL:
                return y;
            case Z.HeQ.SOFORT:
                return F;
            case Z.HeQ.GIROPAY:
                return Y;
            case Z.HeQ.PRZELEWY24:
                return k;
            case Z.HeQ.PAYSAFE_CARD:
            case Z.HeQ.GCASH:
            case Z.HeQ.GRABPAY_MY:
            case Z.HeQ.MOMO_WALLET:
            case Z.HeQ.KAKAOPAY:
            case Z.HeQ.GOPAY_WALLET:
                return w;
            default:
                return G;
        }
    }
    getNextStep() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.steps,
            { step: s } = this.state,
            t = e.indexOf(s);
        return e[t + 1];
    }
    getPreviousStep() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.steps,
            { step: s } = this.state,
            t = e.indexOf(s);
        return e[t - 1];
    }
    preventDefault(e) {
        e.preventDefault();
    }
    handleReopenPaypal() {
        I.i0();
    }
    renderGenericError() {
        let { error: e } = this.props;
        return null == e || null != H(e)
            ? null
            : (0, i.jsx)(E.FormErrorBlock, {
                  className: j.errorBlock,
                  children: e.message
              });
    }
    renderFooter() {
        let e = this.stepData;
        return null == e.renderNextButton
            ? null
            : (0, i.jsx)(E.ModalFooter, {
                  children: (0, i.jsxs)(m.Z, {
                      justify: m.Z.Justify.BETWEEN,
                      children: [
                          (0, i.jsx)(E.Button, {
                              onClick: this.handleBackClick,
                              color: E.Button.Colors.PRIMARY,
                              look: E.Button.Looks.LINK,
                              size: E.Button.Sizes.MIN,
                              children: v.Z.Messages.BACK
                          }),
                          e.renderNextButton()
                      ]
                  })
              });
    }
    render() {
        let { step: e, steps: s } = this.state,
            { transitionState: t } = this.props,
            n = s.map((e) => ({
                id: e,
                label: (function (e) {
                    switch (e) {
                        case 'payment_type':
                            return v.Z.Messages.PAYMENT_SOURCE_TYPE;
                        case 'payment_request_info':
                            return v.Z.Messages.BILLING_STEP_PAYMENT_INFO;
                        case 'card_info':
                            return v.Z.Messages.PAYMENT_SOURCE_INFORMATION;
                        case 'billing_address':
                            return v.Z.Messages.BILLING_ADDRESS;
                        case 'paypal':
                            return v.Z.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
                        case 'sofort_info':
                            return v.Z.Messages.PAYMENT_SOURCE_SOFORT_INFO;
                        case 'przelewy24_info':
                            return v.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO;
                    }
                })(e)
            }));
        return (0, i.jsx)(o.Elements, {
            options: Z.OBo,
            stripe: this.state.stripe,
            children: (0, i.jsx)(E.ModalRoot, {
                transitionState: t,
                size: E.ModalSize.SMALL,
                className: j.modal,
                'aria-label': v.Z.Messages.PAYMENT_SOURCES_ADD,
                children: (0, i.jsxs)('form', {
                    className: j.form,
                    onSubmit: this.preventDefault,
                    children: [
                        (0, i.jsxs)(E.ModalHeader, {
                            direction: m.Z.Direction.VERTICAL,
                            align: m.Z.Align.STRETCH,
                            separator: !1,
                            children: [
                                (0, i.jsxs)(m.Z, {
                                    className: j.modalTitle,
                                    justify: m.Z.Justify.BETWEEN,
                                    align: m.Z.Align.CENTER,
                                    children: [
                                        (0, i.jsx)(E.FormTitle, {
                                            tag: E.FormTitleTags.H4,
                                            children: v.Z.Messages.PAYMENT_SOURCES_ADD
                                        }),
                                        (0, i.jsx)(E.ModalCloseButton, { onClick: this.handleClose })
                                    ]
                                }),
                                this.renderGenericError(),
                                (0, i.jsx)(E.Breadcrumbs, {
                                    breadcrumbs: n,
                                    activeId: e
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: j.divider }),
                        (0, i.jsx)(E.Sequencer, {
                            fillParent: !0,
                            className: j.sequencer,
                            step: e,
                            steps: s,
                            children: (0, i.jsx)(E.ModalContent, {
                                className: j.content,
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
            U(this, 'state', {
                type: Z.HeQ.CARD,
                step: 'payment_type',
                steps: G,
                errorStep: null,
                stripeToken: null,
                stripe: null,
                tokenSubmitting: !1,
                paymentDetails: { p24Bank: '' }
            }),
            U(this, 'STEPS_DATA', {
                przelewy24_info: {
                    renderBody: () => {
                        let { error: e, billingAddressInfo: s } = this.props;
                        return (0, i.jsx)(L.w, {
                            billingAddressInfo: s,
                            onDetailsChange: this.handlePaymentDetailsChange,
                            onP24BankChange: this.handleP24BankChange,
                            p24BankValue: this.state.paymentDetails.p24Bank,
                            error: e
                        });
                    },
                    renderNextButton: () => {
                        var e;
                        let { billingAddressInfo: s } = this.props,
                            t = null === (e = this.state.paymentDetails) || void 0 === e ? void 0 : e.p24Bank;
                        return (0, i.jsx)(E.Button, {
                            type: 'submit',
                            disabled: '' === s.name || '' === s.email || '' === t,
                            onClick: this.handleNextClick,
                            children: v.Z.Messages.NEXT
                        });
                    }
                },
                sofort_info: {
                    renderBody: () => {
                        let { error: e, billingAddressInfo: s } = this.props;
                        return (0, i.jsx)(L.Z, {
                            billingAddressInfo: s,
                            onChange: this.handlePaymentDetailsChange,
                            error: e
                        });
                    },
                    renderNextButton: () => {
                        let { billingAddressInfo: e } = this.props;
                        return (0, i.jsx)(E.Button, {
                            type: 'submit',
                            disabled: '' === e.name || '' === e.email,
                            onClick: this.handleNextClick,
                            children: v.Z.Messages.NEXT
                        });
                    }
                },
                payment_type: {
                    renderBody: () =>
                        (0, i.jsx)(f.Z, {
                            allowStripeRequestPayments: !R.isPlatformEmbedded,
                            onChooseType: this.handleChooseType,
                            onStripePaymentMethodReceived: this.handleStripePaymentMethod
                        })
                },
                payment_request_info: {
                    renderBody: () => {
                        let { stripePaymentMethod: e, submitting: s } = this.props;
                        return (0, i.jsx)(b.k, {
                            stripePaymentMethod: e,
                            submitting: s
                        });
                    },
                    renderNextButton: () => {
                        let { submitting: e } = this.props;
                        return (0, i.jsx)(E.Button, {
                            submitting: e,
                            look: E.Button.Looks.OUTLINED,
                            disabled: !0
                        });
                    }
                },
                card_info: {
                    renderBody: () => {
                        let { error: e } = this.props,
                            s = null != e && (null == e.code || 'card_info' === H(e));
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                s
                                    ? (0, i.jsx)(E.FormErrorBlock, {
                                          className: j.errorBlock,
                                          children: v.Z.Messages.BILLING_ERROR_SECTION_CARD
                                      })
                                    : null,
                                (0, i.jsx)(M.Z, {
                                    onCardInfoChange: this.handleCardInfoChange,
                                    error: s ? e : null
                                })
                            ]
                        });
                    },
                    renderNextButton: () => {
                        let { isCreditCardInfoValid: e } = this.props,
                            { tokenSubmitting: s } = this.state;
                        return (0, i.jsx)(o.ElementsConsumer, {
                            children: (t) => {
                                let { elements: n } = t;
                                return (0, i.jsx)(E.Button, {
                                    disabled: !e,
                                    onClick: () => {
                                        this.createToken(n);
                                    },
                                    type: 'submit',
                                    submitting: s,
                                    children: v.Z.Messages.NEXT
                                });
                            }
                        });
                    }
                },
                billing_address: {
                    renderBody: () => {
                        let { billingAddressInfo: e, error: s } = this.props,
                            { type: t } = this.state;
                        return (0, i.jsx)(P.P, {
                            billingAddressInfo: e,
                            billingError: s,
                            onBillingAddressChange: this.handleBillingAddressChange,
                            paymentSourceType: t
                        });
                    },
                    renderNextButton: () => {
                        let { submitting: e, isBillingAddressInfoValid: s, isAuthenticating: t } = this.props;
                        return (0, i.jsx)(E.Button, {
                            type: 'submit',
                            submitting: e,
                            disabled: !s || t,
                            onClick: this.handleSave,
                            children: v.Z.Messages.SAVE
                        });
                    }
                },
                paypal: {
                    renderBody: () => (0, i.jsx)(D.Z, {}),
                    renderNextButton: () => {
                        let { submitting: e, braintreeNonce: s, braintreeEmail: t } = this.props,
                            n = null != t && null != s;
                        return (0, i.jsx)(E.Button, {
                            submitting: e,
                            color: n ? E.Button.Colors.BRAND : E.Button.Colors.PRIMARY,
                            onClick: n ? this.handleNextClick : this.handleReopenPaypal,
                            children: n ? v.Z.Messages.NEXT : v.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
                        });
                    }
                }
            }),
            U(this, 'handleChooseType', (e) => {
                let s = this.getSteps(e),
                    t = this.getNextStep(s);
                null != t &&
                    this.setState({
                        type: e,
                        steps: s,
                        step: t
                    });
            }),
            U(this, 'handleCardInfoChange', (e, s) => {
                T.Z.wait(() => (0, N.sn)(e, s));
            }),
            U(this, 'handlePaymentDetailsChange', (e) => {
                let { billingAddressInfo: s } = this.props;
                (s.name = e.name),
                    T.Z.wait(() =>
                        (0, N.Ow)(
                            {
                                ...s,
                                ...e
                            },
                            !1
                        )
                    );
            }),
            U(this, 'handleP24BankChange', (e) => {
                this.setState({ paymentDetails: { p24Bank: e } });
            }),
            U(this, 'handleBillingAddressChange', (e, s) => {
                let { billingAddressInfo: t } = this.props;
                T.Z.wait(() =>
                    (0, N.Ow)(
                        {
                            ...t,
                            ...e
                        },
                        s
                    )
                );
            }),
            U(this, 'handleBackClick', () => {
                let e = this.getPreviousStep();
                if (null != e) {
                    'payment_type' === e && (0, N.fw)();
                    this.setState({ step: e });
                }
            }),
            U(this, 'handleNextClick', () => {
                let e = this.getNextStep();
                null != e && this.setState({ step: e });
            }),
            U(this, 'handleClose', () => {
                (0, N.fw)(), this.props.onClose();
            }),
            U(this, 'handleStripePaymentMethod', (e) => {
                if (((0, N.Xt)(e), null == e)) {
                    this.handleBackClick();
                    return;
                }
                this.handleStripePaymentRequestSave(e);
            }),
            U(this, 'handleStripePaymentRequestSave', async (e) => {
                try {
                    let s = await S.i6(e, void 0, this.props.analyticsLocation),
                        { onAddPaymentSource: t } = this.props;
                    null == t || t(s), this.handleClose();
                } catch (e) {}
            }),
            U(this, 'createToken', async (e) => {
                let { stripe: s } = this.state;
                this.setState({ tokenSubmitting: !0 });
                try {
                    let t = await S.qv(s, e);
                    this.setState({ stripeToken: t }), this.handleNextClick();
                } catch (e) {
                } finally {
                    this.setState({ tokenSubmitting: !1 });
                }
            }),
            U(this, 'handleSave', () => {
                let { type: e } = this.state;
                switch (e) {
                    case Z.HeQ.PAYPAL:
                        return this.handlePaypalSave();
                    case Z.HeQ.CARD:
                        return this.handleCardSave();
                    case Z.HeQ.SOFORT:
                        return this.handleSofortSave();
                    case Z.HeQ.GIROPAY:
                        return this.handleGiropaySave();
                    case Z.HeQ.PRZELEWY24:
                        return this.handlePrzelewy24Save();
                    case Z.HeQ.PAYSAFE_CARD:
                    case Z.HeQ.GRABPAY_MY:
                        return this.handleAdyenPrepaidPaymentMethodSave(e);
                    default:
                        S.SQ('user used a unsupported payment type: '.concat(e));
                }
            }),
            U(this, 'handlePrzelewy24Save', async () => {
                let { billingAddressInfo: e, isBillingAddressInfoValid: s, onAddPaymentSource: t, analyticsLocation: n } = this.props,
                    { stripe: a, paymentDetails: i } = this.state;
                if (!!s)
                    try {
                        let s = await S.pF(a, i, e, n);
                        null == t || t(s), this.handleClose();
                    } catch (e) {}
            }),
            U(this, 'handleSofortSave', async () => {
                let { billingAddressInfo: e, isBillingAddressInfoValid: s, onAddPaymentSource: t, analyticsLocation: n } = this.props,
                    { stripe: a } = this.state;
                if (!!s)
                    try {
                        let s = await S.av(a, e, n);
                        null == t || t(s), this.handleClose();
                    } catch (e) {}
            }),
            U(this, 'handleCardSave', async () => {
                let { billingAddressInfo: e, isCreditCardInfoValid: s, isBillingAddressInfoValid: t, onAddPaymentSource: n, analyticsLocation: a } = this.props,
                    { stripe: i, stripeToken: r } = this.state;
                if (!!s && !!t)
                    try {
                        let s = await S.f0(i, r, e, a);
                        null == n || n(s), this.handleClose();
                    } catch (e) {}
            }),
            U(this, 'handlePaypalSave', async () => {
                let { braintreeEmail: e, braintreeNonce: s, billingAddressInfo: t, onAddPaymentSource: n, analyticsLocation: a } = this.props;
                if (null != e && null != s)
                    try {
                        let e = await S.lP(s, t, a);
                        null == n || n(e), this.handleClose();
                    } catch (e) {}
            }),
            U(this, 'handleAdyenPrepaidPaymentMethodSave', async (e) => {
                let { billingAddressInfo: s, isBillingAddressInfoValid: t, onAddPaymentSource: n, analyticsLocation: a } = this.props;
                if (!!t)
                    try {
                        let t = await S.sF(s, e, a);
                        null == n || n(t), this.handleClose();
                    } catch (e) {}
            }),
            U(this, 'handleGiropaySave', async () => {
                let { billingAddressInfo: e, isBillingAddressInfoValid: s, onAddPaymentSource: t, analyticsLocation: n } = this.props,
                    { stripe: a } = this.state;
                if (!!s)
                    try {
                        let s = await S.GV(a, e, Z.HeQ.GIROPAY, n);
                        null == t || t(s), this.handleClose();
                    } catch (e) {}
            });
    }
}
let K = u.ZP.connectStores([O.Z, h.Z, p.Z], () => ({
    braintreeEmail: O.Z.braintreeEmail,
    braintreeNonce: O.Z.braintreeNonce,
    stripePaymentMethod: O.Z.stripePaymentMethod,
    creditCardInfo: O.Z.getCreditCardInfo(),
    isCreditCardInfoValid: O.Z.isCardInfoValid,
    billingAddressInfo: O.Z.getBillingAddressInfo(),
    isBillingAddressInfoValid: O.Z.isBillingAddressInfoValid,
    error: O.Z.error,
    popupCallbackCalled: O.Z.popupCallbackCalled,
    submitting: h.Z.isBusy,
    isAuthenticating: p.Z.isAwaitingAuthentication
}))(W);
function z(e) {
    let { transitionState: s, analyticsLocation: t, onClose: n, onAddPaymentSource: a, toastContent: r, initialStep: o = A.h8.PAYMENT_TYPE, overwriteSubscriptionPaymentSource: l = !1 } = e,
        d = (0, g.fL)(),
        u = (0, g.vP)({
            paymentModalArgs: d,
            initialStep: o,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                n();
            },
            onComplete: (e, s) => {
                _()(null != s, 'paymentSource missing'), null == a || a(s), n();
            },
            onStepChange: () => {},
            header: (0, i.jsxs)('div', {
                className: c()(j.modalTitle, B.flex, B.justifyBetween, B.alignCenter),
                children: [
                    (0, i.jsx)(E.FormTitle, {
                        tag: E.FormTitleTags.H4,
                        children: v.Z.Messages.PAYMENT_SOURCES_ADD
                    }),
                    (0, i.jsx)(E.ModalCloseButton, { onClick: n })
                ]
            }),
            analyticsLocation: t,
            hideBreadcrumbs: !0,
            toastContent: r,
            overwriteSubscriptionPaymentSource: l
        });
    return (0, i.jsx)(E.ModalRoot, {
        transitionState: s,
        size: E.ModalSize.SMALL,
        className: j.modal,
        'aria-label': v.Z.Messages.PAYMENT_SOURCES_ADD,
        children: (0, i.jsx)('form', {
            className: j.form,
            onSubmit: function (e) {
                e.preventDefault();
            },
            children: u
        })
    });
}
function Q(e) {
    return (0, i.jsx)(C.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, i.jsx)(z, { ...e })
    });
}
