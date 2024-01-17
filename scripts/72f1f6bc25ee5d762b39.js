(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["9114"], {
        878005: function(e, t, s) {
            "use strict";
            e.exports = s.p + "ddaba4373c0aabfff967.png"
        },
        657130: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            }), s("222007");
            var r = s("37983"),
                n = s("884691"),
                a = s("446674"),
                i = s("850068"),
                l = s("112679"),
                o = s("926223"),
                u = s("758764"),
                d = s("357957"),
                c = s("45640"),
                p = s("803427"),
                h = s("49111");
            let S = [c.Steps.REVIEW, c.Steps.CONFIRM];
            class f extends n.Component {
                get stepsToRender() {
                    let {
                        prependSteps: e
                    } = this.props, {
                        steps: t
                    } = this.state;
                    return null != e ? [...e, ...t] : t
                }
                get closable() {
                    let {
                        step: e
                    } = this.state, t = (0, c.getStepIndex)(e, this.stepsToRender);
                    return 0 === t || !this._hasChangedSteps
                }
                componentDidMount() {
                    !d.default.hasFetchedPaymentSources && i.fetchPaymentSources()
                }
                componentDidUpdate(e, t) {
                    let {
                        onStepChange: s
                    } = this.props, {
                        step: r
                    } = this.state;
                    r !== t.step && (this._hasChangedSteps = !0, null != s && s(t.step, r))
                }
                static getDerivedStateFromProps(e, t) {
                    let {
                        billingError: s,
                        isAwaitingAuthentication: r
                    } = e, {
                        errorStep: n
                    } = t, a = {};
                    if (null == s) null != n && (a.errorStep = null);
                    else {
                        let e = (0, c.errorToStep)(s);
                        null != e && e !== t.errorStep && (a.step = e, a.errorStep = e)
                    }
                    return null == t.paymentSourceId && null != e.defaultPaymentSourceId && (a.paymentSourceId = e.defaultPaymentSourceId), r ? a.step = c.Steps.AWAITING_AUTHENTICATION : t.step === c.Steps.AWAITING_AUTHENTICATION && (null != s ? a.step = c.Steps.REVIEW : a.step = c.Steps.CONFIRM), a
                }
                render() {
                    let {
                        isPurchasing: e,
                        canSubmit: t,
                        submitButtonText: s,
                        useShinySubmitButton: n,
                        legalNotice: a,
                        renderHeader: i,
                        onPaymentSourceChange: l,
                        price: o,
                        onClearError: u,
                        size: d,
                        renderConfirmationBody: h,
                        renderConfirmationFooter: S,
                        className: f,
                        isGift: E,
                        isGiftable: P,
                        needsToBeGift: A,
                        onIsGiftUpdate: _,
                        transitionState: m
                    } = this.props, C = {
                        [c.Steps.CONFIRM]: {
                            renderBody: h,
                            renderFooter: S
                        },
                        [c.Steps.SELECT_PLAN]: {
                            renderBody: () => this.props.renderSelectPlanBody(this.handleSelectPlan),
                            renderFooter: () => this.props.renderSelectPlanFooter()
                        }
                    }, {
                        step: I,
                        paymentSourceId: T
                    } = this.state, N = this.stepsToRender;
                    return (0, r.jsx)(p.default, {
                        transitionState: m,
                        className: f,
                        isPurchasing: e,
                        canSubmit: t,
                        submitButtonText: s,
                        useShinySubmitButton: n,
                        legalNotice: a,
                        renderHeader: i,
                        onPaymentSourceChange: l,
                        price: o,
                        onClearError: u,
                        size: d,
                        extraRenderers: C,
                        step: I,
                        steps: N,
                        paymentSourceId: T,
                        isGiftable: P,
                        isGift: E,
                        needsToBeGift: A,
                        onIsGiftUpdate: _,
                        onBack: this.handleBack,
                        onChoosePaymentType: this.handleChoosePaymentType,
                        onCreditCardContinue: this.handleCreditCardContinue,
                        onPaymentSourceAdd: this.handlePaymentSourceAdd,
                        onPurchase: this.handlePurchase,
                        onPaypalContinue: this.handlePaypalContinue,
                        onVenmoContinue: this.handleVenmoContinue,
                        onReviewPaymentSourceChange: this.handleReviewPaymentSourceChange,
                        onReviewPaymentSourceAdd: this.handleReviewPaymentSourceAdd
                    })
                }
                constructor(e) {
                    super(e), this._hasChangedSteps = !1, this.handlePaypalContinue = () => {
                        this.setState({
                            step: c.Steps.PAYPAL_ADDRESS
                        })
                    }, this.handleVenmoContinue = () => {
                        this.setState({
                            step: c.Steps.VENMO_ADDRESS
                        })
                    }, this.handleCreditCardContinue = () => {
                        this.setState({
                            step: c.Steps.ADDRESS
                        })
                    }, this.handleReviewPaymentSourceChange = e => {
                        this.setState({
                            paymentSourceId: null != e ? e.id : null
                        })
                    }, this.handleReviewPaymentSourceAdd = () => {
                        this.setState({
                            step: c.Steps.PAYMENT_TYPE,
                            steps: p.ADD_PAYMENT_STEPS,
                            paymentSourceId: null
                        });
                        let {
                            onClearError: e
                        } = this.props;
                        e && e()
                    }, this.handleBack = () => {
                        let {
                            paymentSources: e,
                            onClose: t
                        } = this.props, {
                            step: s,
                            steps: r
                        } = this.state, n = this.stepsToRender, a = (0, c.getStepIndex)(s, n);
                        if (a > 0) {
                            let e = n[a - 1],
                                t = e === c.Steps.PAYMENT_TYPE;
                            t && l.clearError(), this.setState({
                                step: e,
                                steps: t ? p.ADD_PAYMENT_STEPS : r
                            })
                        } else if ((0, c.canGoBack)(a, e)) {
                            let {
                                defaultPaymentSourceId: e
                            } = this.props;
                            this.setState({
                                step: c.Steps.REVIEW,
                                steps: p.REVIEW_PAYMENT_STEPS,
                                paymentSourceId: e
                            })
                        } else t()
                    }, this.handleChoosePaymentType = e => {
                        switch (e) {
                            case h.PaymentSourceTypes.PAYPAL:
                                this.setState({
                                    step: c.Steps.PAYPAL,
                                    steps: p.ADD_PAYPAL_STEPS
                                });
                                break;
                            case h.PaymentSourceTypes.CARD:
                                this.setState({
                                    step: c.Steps.CREDIT_CARD_INFORMATION,
                                    steps: p.ADD_CARD_STEPS
                                });
                                break;
                            case h.PaymentSourceTypes.PAYMENT_REQUEST:
                                this.setState({
                                    step: c.Steps.PAYMENT_REQUEST_INFO,
                                    steps: p.ADD_PAYMENT_REQUEST_STEPS
                                });
                                break;
                            case h.PaymentSourceTypes.GIROPAY:
                                this.setState({
                                    step: c.Steps.ADDRESS,
                                    steps: p.ADD_GIROPAY_STEPS
                                });
                                break;
                            case h.PaymentSourceTypes.PAYSAFE_CARD:
                                this.setState({
                                    step: c.Steps.ADDRESS,
                                    steps: p.ADD_PAYSAFECARD_STEPS
                                });
                                break;
                            case h.PaymentSourceTypes.VENMO:
                                this.setState({
                                    step: c.Steps.VENMO,
                                    steps: p.ADD_VENMO_STEPS
                                })
                        }
                    }, this.handlePaymentSourceAdd = e => {
                        this.setState({
                            step: c.Steps.REVIEW,
                            paymentSourceId: e
                        })
                    }, this.handlePurchase = async () => {
                        let {
                            paymentSources: e,
                            onPurchase: t,
                            isGift: s
                        } = this.props, {
                            paymentSourceId: r
                        } = this.state;
                        if (null != r) try {
                            await t(e[r], s), this.setState({
                                steps: S,
                                step: c.Steps.CONFIRM
                            })
                        } catch (e) {}
                    }, this.handleSelectPlan = () => {
                        let {
                            paymentSources: e
                        } = this.props, t = Object.values(e).length > 0;
                        this.setState({
                            step: t ? c.Steps.REVIEW : c.Steps.PAYMENT_TYPE
                        })
                    };
                    let {
                        defaultPaymentSourceId: t,
                        paymentSources: s,
                        initialStep: r
                    } = e, n = Object.values(s).length > 0, a = r;
                    null == a && (a = n ? c.Steps.REVIEW : c.Steps.PAYMENT_TYPE), this.state = {
                        paymentSourceId: t,
                        steps: n ? p.REVIEW_PAYMENT_STEPS : p.ADD_PAYMENT_STEPS,
                        step: a,
                        errorStep: null
                    }
                }
            }
            f.defaultProps = {
                useShinySubmitButton: !1,
                needsToBeGift: !1,
                isGiftable: !1,
                isGift: !1,
                renderConfirmationBody: h.NOOP_NULL,
                renderConfirmationFooter: h.NOOP_NULL,
                renderSelectPlanBody: h.NOOP_NULL,
                renderSelectPlanFooter: h.NOOP_NULL
            };
            var E = n.forwardRef((e, t) => {
                let [s, n] = (0, a.useStateFromStoresArray)([d.default], () => [d.default.paymentSources, d.default.defaultPaymentSourceId]), i = (0, a.useStateFromStores)([o.default], () => o.default.error), [l, c] = (0, a.useStateFromStoresArray)([u.default], () => [u.default.error, u.default.isAwaitingAuthentication]);
                return (0, r.jsx)(f, {
                    ...e,
                    ref: t,
                    billingError: null != l ? l : i,
                    paymentSources: s,
                    defaultPaymentSourceId: n,
                    isAwaitingAuthentication: c
                })
            })
        },
        803427: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                REVIEW_PAYMENT_STEPS: function() {
                    return Y
                },
                ADD_PAYMENT_STEPS: function() {
                    return U
                },
                ADD_CARD_STEPS: function() {
                    return v
                },
                ADD_PAYPAL_STEPS: function() {
                    return F
                },
                ADD_PAYMENT_REQUEST_STEPS: function() {
                    return G
                },
                ADD_GIROPAY_STEPS: function() {
                    return k
                },
                ADD_PAYSAFECARD_STEPS: function() {
                    return j
                },
                ADD_VENMO_STEPS: function() {
                    return w
                },
                default: function() {
                    return W
                }
            }), s("222007");
            var r = s("37983"),
                n = s("884691"),
                a = s("41092"),
                i = s("446674"),
                l = s("77078"),
                o = s("913144"),
                u = s("850068"),
                d = s("82731"),
                c = s("112679"),
                p = s("102985"),
                h = s("160299"),
                S = s("40597"),
                f = s("926223"),
                E = s("357957"),
                P = s("145131"),
                A = s("45640"),
                _ = s("773336"),
                m = s("159885"),
                C = s("520713"),
                I = s("814915"),
                T = s("518809"),
                N = s("195175"),
                R = s("780569"),
                y = s("490696"),
                g = s("677987"),
                O = s("393172"),
                M = s("574547"),
                L = s("392336"),
                D = s("49111"),
                B = s("782340"),
                x = s("36662"),
                b = s("258179");
            let Y = [A.Steps.PAYMENT_TYPE, A.Steps.CREDIT_CARD_INFORMATION, A.Steps.REVIEW],
                U = [A.Steps.PAYMENT_TYPE, A.Steps.CREDIT_CARD_INFORMATION, A.Steps.REVIEW],
                v = [A.Steps.PAYMENT_TYPE, A.Steps.CREDIT_CARD_INFORMATION, A.Steps.ADDRESS, A.Steps.REVIEW],
                F = [A.Steps.PAYMENT_TYPE, A.Steps.PAYPAL, A.Steps.PAYPAL_ADDRESS, A.Steps.REVIEW],
                G = [A.Steps.PAYMENT_TYPE, A.Steps.PAYMENT_REQUEST_INFO, A.Steps.REVIEW],
                k = [A.Steps.PAYMENT_TYPE, A.Steps.ADDRESS, A.Steps.REVIEW],
                j = [A.Steps.PAYMENT_TYPE, A.Steps.ADDRESS, A.Steps.REVIEW],
                w = [A.Steps.PAYMENT_TYPE, A.Steps.VENMO, A.Steps.VENMO_ADDRESS, A.Steps.REVIEW],
                V = (0, m.cssValueToNumber)(b.innerPadding);
            class H extends n.PureComponent {
                async componentDidMount() {
                    d.createClient();
                    let {
                        onPaymentSourceChange: e,
                        paymentSources: t,
                        defaultPaymentSourceId: s,
                        paymentSourceId: r
                    } = this.props;
                    null != e && e(null != r && r !== s && null != t[r] ? t[r] : null != s && null != t[s] ? t[s] : null);
                    let n = await (0, C.getStripe)();
                    this.setState({
                        stripe: n
                    })
                }
                componentDidUpdate(e) {
                    let {
                        onPaymentSourceChange: t,
                        paymentSources: s,
                        paymentSourceId: r
                    } = this.props;
                    e.paymentSourceId !== r && null != r && null != s[r] && (null == t || t(s[r]))
                }
                componentWillUnmount() {
                    d.teardownClients(), c.clearCardInfo();
                    let {
                        onClearError: e
                    } = this.props;
                    null == e || e(), c.clearError()
                }
                preventDefault(e) {
                    e.preventDefault()
                }
                get disabledTooltip() {
                    let {
                        needsToBeGift: e,
                        isGift: t,
                        isGiftable: s
                    } = this.props;
                    if (!this.state.hasAcceptedNeccessaryTerms) return B.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP;
                    if (e && !t) return s ? B.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY : B.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY_UNGIFTABLE;
                    return null
                }
                renderHeader() {
                    let {
                        renderHeader: e,
                        billingError: t,
                        step: s,
                        steps: r
                    } = this.props, n = r.map(e => ({
                        id: e,
                        label: (0, A.getCrumbLabels)(e)
                    }));
                    return e(s, n, null == (0, A.errorToStep)(t) ? t : null)
                }
                render() {
                    let {
                        size: e,
                        step: t,
                        steps: s,
                        className: n,
                        transitionState: i
                    } = this.props, o = this.stepRenderer[t], u = o.renderBody();
                    return (0, r.jsx)(a.Elements, {
                        options: D.StripeElementsOptions,
                        stripe: this.state.stripe,
                        children: (0, r.jsx)(l.ModalRoot, {
                            size: e,
                            className: n,
                            "aria-label": B.default.Messages.SKU_PAYMENT_STEPS_LABEL,
                            transitionState: i,
                            children: (0, r.jsx)(l.Scroller, {
                                children: (0, r.jsxs)("form", {
                                    className: x.form,
                                    onSubmit: this.preventDefault,
                                    children: [this.renderHeader(), t !== A.Steps.CONFIRM ? (0, r.jsx)("div", {
                                        className: x.divider
                                    }) : null, null != u && (0, r.jsx)(l.ModalContent, {
                                        className: x.modalContent,
                                        children: (0, r.jsx)("div", {
                                            className: x.content,
                                            children: (0, r.jsx)(l.Sequencer, {
                                                step: t,
                                                steps: s,
                                                sideMargin: V,
                                                children: u
                                            })
                                        })
                                    }), o.renderFooter()]
                                })
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hasAcceptedNeccessaryTerms: !1,
                        token: null,
                        confirmingCard: !1,
                        stripe: null
                    }, this.handleToggleIsGift = (e, t) => {
                        let {
                            onIsGiftUpdate: s
                        } = this.props;
                        null == s || s(t)
                    }, this.handlePurchaseTermsChange = e => {
                        this.setState({
                            hasAcceptedNeccessaryTerms: e
                        })
                    }, this.handleReopenPaypal = () => {
                        d.reopenPayPalWindow()
                    }, this.handleReopenVenmo = () => {
                        d.reopenVenmoWindow()
                    }, this.handleCardInfoChange = (e, t) => {
                        o.default.wait(() => c.updateCardInfo(e, t))
                    }, this.handleBillingAddressChange = (e, t) => {
                        o.default.wait(() => c.updateAddressInfo(e, t))
                    }, this.handleCreditCardAdd = async () => {
                        let {
                            billingAddressInfo: e
                        } = this.props, {
                            stripe: t,
                            token: s
                        } = this.state;
                        try {
                            let r = await u.confirmCardPaymentSource(t, s, e);
                            this.props.onPaymentSourceAdd(r.id)
                        } catch (e) {}
                    }, this.handleStripePaymentRequestAdd = async e => {
                        if (c.updateStripePaymentRequest(e), null == e) {
                            this.props.onBack();
                            return
                        }
                        try {
                            let t = await u.createPaymentRequestPaymentSource(e);
                            this.props.onPaymentSourceAdd(t.id)
                        } catch (e) {}
                    }, this.handlePaypalAdd = async () => {
                        let {
                            braintreeEmail: e,
                            braintreeNonce: t,
                            billingAddressInfo: s
                        } = this.props;
                        if (0 !== e.length && null != t) try {
                            let e = await u.createBraintreePaymentSource(t, s);
                            this.props.onPaymentSourceAdd(e.id)
                        } catch (e) {}
                    }, this.handleVenmoAdd = async () => {
                        let {
                            venmoUsername: e,
                            braintreeNonce: t,
                            billingAddressInfo: s
                        } = this.props;
                        if (0 !== e.length && null != t) try {
                            let e = await u.createBraintreePaymentSource(t, s);
                            this.props.onPaymentSourceAdd(e.id)
                        } catch (e) {}
                    }, this.renderBackButton = () => {
                        let {
                            step: e,
                            steps: t,
                            paymentSources: s,
                            onBack: n
                        } = this.props, a = (0, A.getStepIndex)(e, t), i = (0, A.canGoBack)(a, s) ? B.default.Messages.BACK : B.default.Messages.CANCEL;
                        return (0, r.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            className: x.backButton,
                            color: x.backButtonColor,
                            size: x.backButtonSize,
                            onClick: n,
                            children: i
                        })
                    }, this.stepRenderer = {
                        [A.Steps.PAYMENT_TYPE]: {
                            renderBody: () => {
                                let {
                                    hidePersonalInformation: e,
                                    onChoosePaymentType: t,
                                    isGiftable: s,
                                    needsToBeGift: a,
                                    isGift: i
                                } = this.props;
                                return e ? (0, r.jsx)(l.FormErrorBlock, {
                                    className: x.errorBlock,
                                    children: B.default.Messages.BILLING_ERROR_ADD_PAYMENT_SOURCE_STREAMER_MODE
                                }) : (0, r.jsxs)(n.Fragment, {
                                    children: [(0, r.jsx)(I.default, {
                                        className: x.choosePaymentSourceType,
                                        onChooseType: t,
                                        allowStripeRequestPayments: !_.isPlatformEmbedded,
                                        onStripePaymentMethodReceived: this.handleStripePaymentRequestAdd
                                    }), s && (0, r.jsx)(l.Checkbox, {
                                        disabled: a,
                                        className: x.giftToggle,
                                        type: l.Checkbox.Types.INVERTED,
                                        value: i,
                                        onChange: this.handleToggleIsGift,
                                        children: (0, r.jsx)("div", {
                                            className: x.checkboxLabel,
                                            children: B.default.Messages.BILLING_IS_GIFT_PURCHASE
                                        })
                                    })]
                                })
                            },
                            renderFooter: () => (0, r.jsx)(l.ModalFooter, {
                                direction: P.default.Direction.HORIZONTAL,
                                children: this.renderBackButton()
                            })
                        },
                        [A.Steps.PAYMENT_REQUEST_INFO]: {
                            renderBody: () => (0, r.jsx)(g.PaymentRequestStepBody, {
                                className: x.formItem,
                                stripePaymentMethod: this.props.stripePaymentMethod,
                                submitting: this.props.submitting
                            }),
                            renderFooter: () => (0, r.jsx)(l.ModalFooter, {
                                direction: P.default.Direction.HORIZONTAL,
                                children: this.renderBackButton()
                            })
                        },
                        [A.Steps.PAYPAL]: {
                            renderBody: () => (0, r.jsx)(T.default, {
                                className: x.formItem
                            }),
                            renderFooter: () => {
                                let {
                                    submitting: e,
                                    braintreeNonce: t,
                                    braintreeEmail: s,
                                    onPaypalContinue: n,
                                    paypalClient: a
                                } = this.props;
                                return (0, r.jsx)(O.PaypalStepFooter, {
                                    submitting: e || null == a,
                                    braintreeNonce: t,
                                    braintreeEmail: s,
                                    onPaypalContinue: n,
                                    onReopenPaypal: this.handleReopenPaypal,
                                    renderBackButton: this.renderBackButton
                                })
                            }
                        },
                        [A.Steps.VENMO]: {
                            renderBody: () => (0, r.jsx)(N.default, {
                                className: x.formItem
                            }),
                            renderFooter: () => {
                                let {
                                    submitting: e,
                                    braintreeNonce: t,
                                    venmoUsername: s,
                                    onVenmoContinue: n,
                                    venmoClient: a
                                } = this.props;
                                return (0, r.jsx)(L.VenmoStepFooter, {
                                    submitting: e || null == a,
                                    braintreeNonce: t,
                                    venmoUsername: s,
                                    onVenmoContinue: n,
                                    onReopenVenmo: this.handleReopenVenmo,
                                    renderBackButton: this.renderBackButton
                                })
                            }
                        },
                        [A.Steps.CREDIT_CARD_INFORMATION]: {
                            renderBody: () => {
                                let {
                                    billingError: e
                                } = this.props;
                                return (0, r.jsx)(y.CreditCardInformationBody, {
                                    billingError: e,
                                    onCardInfoChange: this.handleCardInfoChange
                                })
                            },
                            renderFooter: () => {
                                let {
                                    isCardInfoValid: e,
                                    onCreditCardContinue: t
                                } = this.props, {
                                    stripe: s,
                                    confirmingCard: n
                                } = this.state, i = async e => {
                                    this.setState({
                                        confirmingCard: !0
                                    });
                                    try {
                                        let r = await u.createCardToken(s, e);
                                        this.setState({
                                            token: r
                                        }), c.clearError(), t()
                                    } catch (e) {} finally {
                                        this.setState({
                                            confirmingCard: !1
                                        })
                                    }
                                };
                                return (0, r.jsx)(a.ElementsConsumer, {
                                    children: t => {
                                        let {
                                            elements: s
                                        } = t;
                                        return (0, r.jsx)(y.CreditCardInformationFooter, {
                                            isCardInfoValid: e,
                                            submitting: n,
                                            renderBackButton: this.renderBackButton,
                                            onCreditCardContinue: () => i(s)
                                        })
                                    }
                                })
                            }
                        },
                        [A.Steps.PAYPAL_ADDRESS]: {
                            renderBody: () => {
                                let {
                                    billingAddressInfo: e,
                                    billingError: t
                                } = this.props;
                                return (0, r.jsx)(R.AddressStepBody, {
                                    billingAddressInfo: e,
                                    billingError: t,
                                    onBillingAddressChange: this.handleBillingAddressChange,
                                    paymentSourceType: D.PaymentSourceTypes.PAYPAL
                                })
                            },
                            renderFooter: () => {
                                let {
                                    isBillingAddressInfoValid: e,
                                    submitting: t
                                } = this.props;
                                return (0, r.jsx)(R.AddressStepFooter, {
                                    isBillingAddressInfoValid: e,
                                    submitting: t,
                                    onContinue: this.handlePaypalAdd,
                                    renderBackButton: this.renderBackButton
                                })
                            }
                        },
                        [A.Steps.VENMO_ADDRESS]: {
                            renderBody: () => {
                                let {
                                    billingAddressInfo: e,
                                    billingError: t
                                } = this.props;
                                return (0, r.jsx)(R.AddressStepBody, {
                                    billingAddressInfo: e,
                                    billingError: t,
                                    onBillingAddressChange: this.handleBillingAddressChange,
                                    paymentSourceType: D.PaymentSourceTypes.VENMO
                                })
                            },
                            renderFooter: () => {
                                let {
                                    isBillingAddressInfoValid: e,
                                    submitting: t
                                } = this.props;
                                return (0, r.jsx)(R.AddressStepFooter, {
                                    isBillingAddressInfoValid: e,
                                    submitting: t,
                                    onContinue: this.handleVenmoAdd,
                                    renderBackButton: this.renderBackButton
                                })
                            }
                        },
                        [A.Steps.ADDRESS]: {
                            renderBody: () => {
                                let {
                                    billingAddressInfo: e,
                                    billingError: t,
                                    steps: s
                                } = this.props;
                                return (0, r.jsx)(R.AddressStepBody, {
                                    billingAddressInfo: e,
                                    billingError: t,
                                    onBillingAddressChange: this.handleBillingAddressChange,
                                    paymentSourceType: s === k ? D.PaymentSourceTypes.GIROPAY : D.PaymentSourceTypes.CARD
                                })
                            },
                            renderFooter: () => {
                                let {
                                    isBillingAddressInfoValid: e,
                                    submitting: t
                                } = this.props;
                                return (0, r.jsx)(R.AddressStepFooter, {
                                    isBillingAddressInfoValid: e,
                                    submitting: t,
                                    onContinue: this.handleCreditCardAdd,
                                    renderBackButton: this.renderBackButton
                                })
                            }
                        },
                        [A.Steps.REVIEW]: {
                            renderBody: () => {
                                let {
                                    legalNotice: e,
                                    paymentSources: t,
                                    price: s,
                                    hidePersonalInformation: n,
                                    paymentSourceId: a,
                                    onReviewPaymentSourceChange: i,
                                    onReviewPaymentSourceAdd: l,
                                    isGiftable: o,
                                    isGift: u,
                                    needsToBeGift: d
                                } = this.props;
                                return (0, r.jsx)(M.ReviewStepBody, {
                                    legalNotice: e,
                                    paymentSources: t,
                                    price: s,
                                    hidePersonalInformation: n,
                                    paymentSourceId: a,
                                    onPaymentSourceChange: i,
                                    onPaymentSourceAdd: l,
                                    onPurchaseTermsChange: this.handlePurchaseTermsChange,
                                    onToggleIsGift: this.handleToggleIsGift,
                                    isGiftable: o,
                                    isGift: u,
                                    needsToBeGift: d
                                })
                            },
                            renderFooter: () => {
                                let {
                                    canSubmit: e,
                                    submitButtonText: t,
                                    useShinySubmitButton: s,
                                    isPurchasing: n,
                                    paymentSourceId: a,
                                    onPurchase: i,
                                    needsToBeGift: l,
                                    isGift: o,
                                    paymentSources: u
                                } = this.props;
                                return (0, r.jsx)(M.ReviewStepFooter, {
                                    canSubmit: e,
                                    submitButtonText: t,
                                    useShinySubmitButton: s,
                                    isPurchasing: n,
                                    hasAcceptedTerms: this.state.hasAcceptedNeccessaryTerms,
                                    paymentSource: null != a ? u[a] : null,
                                    onPurchase: i,
                                    tooltipText: this.disabledTooltip,
                                    needsToBeGift: l,
                                    isGift: o
                                })
                            }
                        },
                        [A.Steps.CONFIRM]: {
                            renderBody: D.NOOP_NULL,
                            renderFooter: D.NOOP_NULL
                        },
                        [A.Steps.AWAITING_AUTHENTICATION]: {
                            renderBody: () => (0, r.jsx)(l.FormTitle, {
                                className: x.formTitle,
                                children: B.default.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION
                            }),
                            renderFooter: D.NOOP_NULL
                        },
                        ...this.props.extraRenderers
                    }
                }
            }
            H.defaultProps = {
                canSubmit: !0,
                useShinySubmitButton: !1,
                size: l.ModalSize.SMALL,
                billingError: null,
                extraRenderers: {},
                className: x.modal
            };
            var W = i.default.connectStores([E.default, f.default, h.default, p.default, S.default], () => ({
                submitting: h.default.isBusy,
                paymentSources: E.default.paymentSources,
                defaultPaymentSourceId: E.default.defaultPaymentSourceId,
                stripePaymentMethod: f.default.stripePaymentMethod,
                creditCardInfo: f.default.getCreditCardInfo(),
                isCardInfoValid: f.default.isCardInfoValid,
                billingAddressInfo: f.default.getBillingAddressInfo(),
                isBillingAddressInfoValid: f.default.isBillingAddressInfoValid,
                braintreeEmail: f.default.braintreeEmail,
                braintreeNonce: f.default.braintreeNonce,
                venmoUsername: f.default.venmoUsername,
                billingError: f.default.error,
                paypalClient: S.default.getPayPalClient(),
                venmoClient: S.default.getVenmoClient(),
                hidePersonalInformation: p.default.hidePersonalInformation
            }))(H)
        },
        393172: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                PaypalStepFooter: function() {
                    return l
                }
            });
            var r = s("37983");
            s("884691");
            var n = s("77078"),
                a = s("145131"),
                i = s("782340");
            let l = e => {
                let {
                    submitting: t,
                    braintreeNonce: s,
                    braintreeEmail: l,
                    onPaypalContinue: o,
                    onReopenPaypal: u,
                    renderBackButton: d
                } = e, c = 0 !== l.length && null != s;
                return (0, r.jsxs)(n.ModalFooter, {
                    justify: a.default.Justify.BETWEEN,
                    direction: a.default.Direction.HORIZONTAL,
                    children: [d(), (0, r.jsx)(n.Button, {
                        submitting: t,
                        color: c ? n.Button.Colors.BRAND : n.Button.Colors.PRIMARY,
                        onClick: c ? o : u,
                        children: c ? i.default.Messages.NEXT : i.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
                    })]
                })
            }
        },
        574547: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ReviewStepBody: function() {
                    return f
                },
                ReviewStepFooter: function() {
                    return E
                }
            }), s("424973");
            var r = s("37983"),
                n = s("884691"),
                a = s("77078"),
                i = s("812952"),
                l = s("740055"),
                o = s("545876"),
                u = s("181114"),
                d = s("561703"),
                c = s("315585"),
                p = s("153160"),
                h = s("782340"),
                S = s("36662");
            let f = e => {
                    let {
                        legalNotice: t,
                        paymentSources: s,
                        price: u,
                        hidePersonalInformation: f,
                        paymentSourceId: E,
                        isGiftable: P,
                        isGift: A,
                        needsToBeGift: _,
                        onPaymentSourceChange: m,
                        onPaymentSourceAdd: C,
                        onPurchaseTermsChange: I,
                        onToggleIsGift: T
                    } = e, N = [], R = null != E ? s[E] : null;
                    return null != R && R.invalid && N.push((0, r.jsx)(i.default, {
                        icon: c.default,
                        color: i.default.Colors.ERROR,
                        iconSize: i.default.Sizes.NONE,
                        iconClassName: S.invalidIcon,
                        children: h.default.Messages.BILLING_PAYMENT_SOURCE_INVALID
                    }, "source_invalid")), null != u && (u.taxInclusive ? N.push((0, r.jsx)(i.default, {
                        icon: d.default,
                        color: i.default.Colors.PRIMARY,
                        iconSize: i.default.Sizes.LARGE,
                        children: h.default.Messages.BILLING_SALES_TAX_INCLUDED
                    }, "tax_included")) : u.tax > 0 && N.push((0, r.jsx)(i.default, {
                        icon: d.default,
                        color: i.default.Colors.PRIMARY,
                        iconSize: i.default.Sizes.LARGE,
                        children: h.default.Messages.BILLING_SALES_TAX_ADDED.format({
                            tax: (0, p.formatPrice)(u.tax, u.currency)
                        })
                    }, "tax_added"))), (0, r.jsxs)(n.Fragment, {
                        children: [(0, r.jsx)(a.FormTitle, {
                            className: S.formTitle,
                            children: h.default.Messages.BILLING_PAY_FOR_IT_WITH
                        }), (0, r.jsx)(l.default, {
                            paymentSources: Object.values(s),
                            selectedPaymentSourceId: E,
                            hidePersonalInformation: f,
                            onChange: m,
                            onPaymentSourceAdd: C
                        }), N, P && (0, r.jsx)(a.Checkbox, {
                            disabled: _,
                            className: S.giftToggle,
                            type: a.Checkbox.Types.INVERTED,
                            value: A,
                            onChange: T,
                            children: (0, r.jsx)("div", {
                                className: S.checkboxLabel,
                                children: h.default.Messages.BILLING_IS_GIFT_PURCHASE
                            })
                        }), (0, r.jsx)(o.default, {
                            onChange: I,
                            forceShow: !0,
                            className: S.purchaseTerms,
                            finePrint: t
                        })]
                    })
                },
                E = e => {
                    let {
                        canSubmit: t,
                        submitButtonText: s,
                        useShinySubmitButton: n,
                        isPurchasing: i,
                        hasAcceptedTerms: l,
                        paymentSource: o,
                        onPurchase: d,
                        tooltipText: c,
                        needsToBeGift: p,
                        isGift: h
                    } = e, f = null != o && !o.invalid, E = {
                        submitting: i,
                        color: a.Button.Colors.GREEN,
                        disabled: !(l && !(p && !h) && f && t),
                        onClick: d
                    };
                    return (0, r.jsx)(a.ModalFooter, {
                        children: (0, r.jsxs)("div", {
                            className: S.buyButtonTooltipWrapper,
                            children: [E.disabled && null != c ? (0, r.jsx)(a.Tooltip, {
                                text: c,
                                children: e => (0, r.jsx)("div", {
                                    "aria-hidden": !0,
                                    className: S.buyButtonTooltipTarget,
                                    ...e
                                })
                            }) : null, n ? (0, r.jsx)(u.default, {
                                ...E,
                                children: s
                            }) : (0, r.jsx)(a.Button, {
                                type: "submit",
                                ...E,
                                children: s
                            })]
                        })
                    })
                }
        },
        392336: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                VenmoStepFooter: function() {
                    return l
                }
            });
            var r = s("37983");
            s("884691");
            var n = s("77078"),
                a = s("145131"),
                i = s("782340");
            let l = e => {
                let {
                    submitting: t,
                    braintreeNonce: s,
                    venmoUsername: l,
                    onVenmoContinue: o,
                    onReopenVenmo: u,
                    renderBackButton: d
                } = e, c = 0 !== l.length && null != s;
                return (0, r.jsxs)(n.ModalFooter, {
                    justify: a.default.Justify.BETWEEN,
                    direction: a.default.Direction.HORIZONTAL,
                    children: [d(), (0, r.jsx)(n.Button, {
                        submitting: t,
                        color: c ? n.Button.Colors.BRAND : n.Button.Colors.PRIMARY,
                        onClick: c ? o : u,
                        children: c ? i.default.Messages.NEXT : i.default.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO
                    })]
                })
            }
        },
        87657: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var r = s("37983"),
                n = s("884691"),
                a = s("77078"),
                i = s("390236"),
                l = n.memo(function(e) {
                    var t, s, l, o;
                    let {
                        user: u,
                        size: d = a.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": p = !1,
                        ...h
                    } = e, S = n.useContext(i.default);
                    return (0, r.jsx)(a.Avatar, {
                        src: (t = u, s = (0, a.getAvatarSize)(d), l = c, o = S, t.getAvatarURL(o, s, l)),
                        size: d,
                        "aria-label": p ? void 0 : u.username,
                        "aria-hidden": p,
                        ...h
                    })
                })
        },
        787598: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return Z
                }
            }), s("70102"), s("424973"), s("222007"), s("702976");
            var r, n, a = s("37983"),
                i = s("884691"),
                l = s("748820"),
                o = s("446674"),
                u = s("77078"),
                d = s("913144"),
                c = s("885508"),
                p = s("465527"),
                h = s("703332"),
                S = s("657130"),
                f = s("812952"),
                E = s("846239"),
                P = s("84460"),
                A = s("299285"),
                _ = s("791160"),
                m = s("891865"),
                C = s("697218"),
                I = s("758764"),
                T = s("437712"),
                N = s("622839"),
                R = s("552712"),
                y = s("167726"),
                g = s("454589"),
                O = s("145131"),
                M = s("953109"),
                L = s("315585"),
                D = s("599110"),
                B = s("568734"),
                x = s("45640"),
                b = s("773336"),
                Y = s("153160"),
                U = s("882941"),
                v = s("271560"),
                F = s("733835"),
                G = s("391294"),
                k = s("49111"),
                j = s("782340"),
                w = s("184048");
            (n = r || (r = {})).UNSUPPORTED_OS = "UNSUPPORTED_OS", n.TEST_MODE = "TEST_MODE", n.GIFT_ONLY = "GIFT_ONLY", n.PREORDER = "PREORDER";
            class V extends i.PureComponent {
                getSkuPrice() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
                        {
                            prices: s
                        } = e,
                        {
                            paymentSourceId: r
                        } = t;
                    return null == s ? null : s[null != r ? r : N.NO_PAYMENT_SOURCE]
                }
                componentDidMount() {
                    let {
                        sku: e,
                        skuId: t,
                        applicationId: s
                    } = this.props;
                    null == e ? p.fetchSKU(s, t).catch(e => this.handleClose(e.message)) : D.default.track(k.AnalyticEvents.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData())
                }
                componentDidUpdate(e, t) {
                    null == e.sku && null != this.props.sku && D.default.track(k.AnalyticEvents.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData()), this.checkPriceChange(this.getSkuPrice(e, t), this.getSkuPrice())
                }
                checkPriceChange(e, t) {
                    let {
                        sku: s,
                        onClose: r
                    } = this.props;
                    null != e && null != t && e.discount_percent_off !== t.discount_percent_off && d.default.wait(() => {
                        if (null == s) throw Error("Unexpected null SKU");
                        r(k.PaymentModalPriceChangedError)
                    })
                }
                get closable() {
                    let e = this._paymentModalRef.current;
                    return null != e && e.closable
                }
                get isGiftable() {
                    let {
                        sku: e
                    } = this.props;
                    return null != e && e.isGiftable(this.getPrice())
                }
                get isGift() {
                    return this.props.isGift && this.isGiftable
                }
                getPrice() {
                    let {
                        sku: e,
                        isFetchingSKU: t
                    } = this.props;
                    if (null == e || t) return null;
                    let s = this.getSkuPrice();
                    if (null != s) return {
                        amount: s.amount,
                        tax: s.tax,
                        taxInclusive: s.tax_inclusive,
                        currency: s.currency
                    };
                    let {
                        paymentSourceId: r
                    } = this.state;
                    if (null == r) {
                        let t = e.getPrice();
                        if (null == t) throw Error("Sku Price cannot be null");
                        return {
                            amount: t.amount,
                            tax: 0,
                            taxInclusive: !1,
                            currency: t.currency
                        }
                    }
                    return null
                }
                getBaseAnalyticsData() {
                    let {
                        sku: e,
                        analyticsLocation: t,
                        appContext: s,
                        promotionId: r
                    } = this.props;
                    if (null == e) return {};
                    let n = this.getPrice();
                    return {
                        ...(0, _.default)(e),
                        load_id: this._loadId,
                        payment_type: k.PurchaseTypeToAnalyticsPaymentType[k.PurchaseTypes.ONE_TIME],
                        is_gift: this.isGift,
                        client_event_source: s === k.AppContext.OVERLAY ? k.AppContext.OVERLAY : null,
                        location: t,
                        price: null != n ? n.amount : null,
                        currency: null != n ? n.currency : null,
                        location_promotion_id: r
                    }
                }
                renderPurchaseWarning() {
                    let {
                        sku: e,
                        isInTestMode: t,
                        isIAP: s,
                        isUserEntitledToSku: r
                    } = this.props;
                    if (null == e) return null;
                    let n = (0, v.nativePlatformTypeToSKUOperatingSystem)((0, b.getPlatform)()),
                        l = [];
                    return (null == n || !e.supportedOperatingSystems.includes(n)) && !s && l.push((0, a.jsx)(f.default, {
                        icon: L.default,
                        iconSize: f.default.Sizes.SMALL,
                        color: f.default.Colors.WARNING,
                        className: w.errorBlock,
                        children: j.default.Messages.APPLICATION_STORE_PURCHASE_GAME_CURRENT_OS_UNSUPPORTED
                    }, "UNSUPPORTED_OS")), t && l.push((0, a.jsx)(f.default, {
                        icon: L.default,
                        iconSize: f.default.Sizes.SMALL,
                        color: f.default.Colors.WARNING,
                        className: w.errorBlock,
                        children: j.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE")), !0 === r && this.isGiftable && l.push((0, a.jsx)(f.default, {
                        icon: L.default,
                        iconSize: f.default.Sizes.SMALL,
                        color: f.default.Colors.PRIMARY,
                        className: w.errorBlock,
                        children: j.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY
                    }, "GIFT_ONLY")), e.isPreorder() && l.push((0, a.jsx)(f.default, {
                        icon: L.default,
                        iconSize: f.default.Sizes.SMALL,
                        color: f.default.Colors.PRIMARY,
                        className: w.errorBlock,
                        children: j.default.Messages.APPLICATION_STORE_PURCHASE_WARNING_PREORDER.format({
                            date: (0, U.getReadablePreorderReleaseDate)(e)
                        })
                    }, "PREORDER")), (0, a.jsx)(i.Fragment, {
                        children: l
                    })
                }
                renderGenericError(e, t) {
                    return null == e && null == t ? null : (0, a.jsx)(u.FormErrorBlock, {
                        className: w.errorBlock,
                        children: null != e ? e.message : null != t ? t.message : null
                    })
                }
                renderDefaultHeader(e, t, s) {
                    let {
                        isIAP: r,
                        application: n,
                        sku: i,
                        purchaseError: l
                    } = this.props;
                    if (null == i || null == n) return null;
                    let o = this.getPrice();
                    return (0, a.jsxs)(u.ModalHeader, {
                        direction: O.default.Direction.VERTICAL,
                        align: O.default.Align.START,
                        separator: !1,
                        children: [(0, a.jsx)(E.default, {
                            application: n,
                            splashSize: 880
                        }), (0, a.jsxs)(O.default, {
                            align: O.default.Align.CENTER,
                            className: w.headerHeader,
                            children: [(0, a.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H4,
                                children: (0, G.getSkuHeaderText)(r, i.type)
                            }), (0, a.jsx)(u.ModalCloseButton, {
                                onClick: () => this.handleClose()
                            })]
                        }), (0, a.jsxs)(O.default, {
                            align: O.default.Align.CENTER,
                            className: w.headerContent,
                            children: [(0, a.jsxs)(O.default, {
                                align: O.default.Align.CENTER,
                                children: [(0, a.jsx)(M.default, {
                                    game: n
                                }), (0, a.jsx)("div", {
                                    className: w.applicationName,
                                    children: i.name
                                })]
                            }), (0, a.jsx)("div", {
                                className: w.price,
                                children: null != o ? (0, Y.formatPrice)(o.amount, o.currency) : (0, a.jsx)(u.Spinner, {
                                    type: u.Spinner.Type.PULSING_ELLIPSIS,
                                    className: w.priceSpinner
                                })
                            })]
                        }), this.renderPurchaseWarning(), this.renderGenericError(l, s), t.length > 1 ? (0, a.jsx)(g.default, {
                            activeId: e,
                            breadcrumbs: t,
                            className: w.breadcrumbs
                        }) : null]
                    })
                }
                render() {
                    let {
                        sku: e,
                        isFetchingSKU: t,
                        isPurchasing: s,
                        isEmbeddedIAP: r,
                        purchaseError: n,
                        isUserEntitledToSku: i,
                        forceConfirmationStepOnMount: l,
                        transitionState: o
                    } = this.props;
                    return null == e || t ? (0, a.jsx)(u.Spinner, {}) : (0, a.jsx)(S.default, {
                        ref: this._paymentModalRef,
                        transitionState: o,
                        canSubmit: null != this.getSkuPrice(),
                        needsToBeGift: e.type === k.SKUTypes.DURABLE_PRIMARY && !0 === i,
                        isGiftable: this.isGiftable,
                        legalNotice: r ? (0, a.jsx)(h.default, {
                            isEmbeddedIAP: r
                        }) : null,
                        isPurchasing: s,
                        purchaseError: n,
                        price: this.getPrice(),
                        size: u.ModalSize.SMALL,
                        onPurchase: this.handlePurchase,
                        onIsGiftUpdate: p.updateSKUPaymentIsGift,
                        onPaymentSourceChange: this.handlePaymentSourceChange,
                        onClose: () => this.handleClose(),
                        onClearError: p.clearPurchaseError,
                        renderHeader: this.renderHeader,
                        renderConfirmationBody: this.renderConfirmation,
                        submitButtonText: this.isGift ? j.default.Messages.APPLICATION_STORE_BUY_GIFT : j.default.Messages.APPLICATION_STORE_BUY,
                        initialStep: l ? x.Steps.CONFIRM : null,
                        onStepChange: this.handleStepChange,
                        isGift: this.isGift
                    })
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.state = {
                        paymentSourceId: null
                    }, this._loadId = (0, l.v4)(), this._stepStartTime = Date.now(), this._flowStartTime = Date.now(), this._paymentModalRef = i.createRef(), this.handlePaymentSourceChange = e => {
                        let {
                            applicationId: t,
                            skuId: s
                        } = this.props;
                        null != e ? (p.fetchPurchasePreview(t, s, e.id), this.setState({
                            paymentSourceId: e.id
                        })) : (p.fetchPurchasePreview(t, s, null), this.setState({
                            paymentSourceId: null
                        }))
                    }, this.handlePurchase = async e => {
                        let {
                            applicationId: t,
                            sku: s
                        } = this.props, r = this.getPrice(), n = null != r ? r.amount : 0, a = null != r ? r.currency : k.CurrencyCodes.USD;
                        if (null == s) throw Error("SKU is null during purchase");
                        if (!N.default.isPurchasingSKU) try {
                            D.default.track(k.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                                ...this.getBaseAnalyticsData(),
                                duration_ms: Date.now() - this._flowStartTime
                            }), await p.purchaseSKU(t, s.id, {
                                expectedAmount: n,
                                expectedCurrency: a,
                                paymentSource: e,
                                analyticsLoadId: this._loadId,
                                isGift: this.isGift
                            }), (0, c.acceptPurchaseTerms)()
                        } catch (t) {
                            throw D.default.track(k.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                                ...this.getBaseAnalyticsData(),
                                payment_gateway: e.type === k.PaymentSourceTypes.CARD ? k.PaymentGateways.STRIPE : k.PaymentGateways.BRAINTREE,
                                payment_source_id: e.id,
                                duration_ms: Date.now() - this._flowStartTime,
                                payment_error_code: t.code
                            }), t
                        }
                    }, this.handleClose = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            {
                                onClose: s
                            } = t.props;
                        s(e)
                    }, this.handleStepChange = (e, t) => {
                        let s = Date.now();
                        D.default.track(k.AnalyticEvents.PAYMENT_FLOW_STEP, {
                            ...this.getBaseAnalyticsData(),
                            from_step: e,
                            to_step: t,
                            step_duration_ms: s - this._stepStartTime,
                            flow_duration_ms: s - this._flowStartTime
                        }), this._stepStartTime = s, t === x.Steps.CONFIRM && p.showPurchaseConfirmationStep()
                    }, this.renderHeader = (e, t, s) => {
                        let {
                            application: r
                        } = this.props;
                        if (e === x.Steps.CONFIRM) return null != r ? (0, a.jsx)(E.default, {
                            application: r,
                            splashSize: 880
                        }) : null;
                        return this.renderDefaultHeader(e, t, s)
                    }, this.renderConfirmation = () => {
                        let {
                            application: e,
                            sku: t,
                            isIAP: s,
                            giftCode: r
                        } = this.props;
                        if (null == t || null == e) throw Error("No SKU for confirmation step!");
                        return (0, a.jsx)("div", {
                            className: w.confirmContent,
                            children: (0, a.jsxs)(O.default, {
                                direction: O.default.Direction.VERTICAL,
                                children: [(0, a.jsx)(u.ModalCloseButton, {
                                    onClick: () => this.handleClose(),
                                    className: w.confirmCloseButton
                                }), null != r ? (0, a.jsx)(m.default, {
                                    giftCode: r,
                                    application: e,
                                    sku: t,
                                    onClose: () => this.handleClose()
                                }) : (0, a.jsx)(F.default, {
                                    application: e,
                                    sku: t,
                                    isIAP: s,
                                    onClose: () => this.handleClose()
                                })]
                            })
                        })
                    }
                }
            }
            let H = i.forwardRef((e, t) => {
                var s, r;
                let {
                    applicationId: n,
                    skuId: i,
                    ...l
                } = e, u = (0, o.useStateFromStores)([A.default], () => A.default.getApplication(n)), d = (0, B.hasFlag)(null !== (s = null == u ? void 0 : u.flags) && void 0 !== s ? s : 0, k.ApplicationFlags.EMBEDDED) && (0, B.hasFlag)(null !== (r = null == u ? void 0 : u.flags) && void 0 !== r ? r : 0, k.ApplicationFlags.EMBEDDED_IAP), [c, p, h, S, f, E, _, m, g] = (0, o.useStateFromStoresArray)([N.default], () => [N.default.getPricesForSku(i), N.default.isPurchasingSKU, N.default.error, N.default.analyticsLocation, N.default.promotionId, N.default.giftCode, N.default.isGift, N.default.isIAP, N.default.forceConfirmationStepOnMount]), [O, M] = (0, o.useStateFromStoresArray)([R.default], () => [R.default.get(i), R.default.isFetching(i)]), L = (0, o.useStateFromStores)([P.default, y.default], () => y.default.inTestModeForApplication(n) || P.default.inDevModeForApplication(n), [n]), D = (0, o.useStateFromStores)([T.default, C.default], () => T.default.isEntitledToSku(C.default.getCurrentUser(), i, n)), x = (0, o.useStateFromStores)([I.default], () => I.default.error);
                return (0, a.jsx)(V, {
                    ...l,
                    application: u,
                    applicationId: n,
                    skuId: i,
                    prices: c,
                    isPurchasing: p,
                    purchaseError: null != x ? x : h,
                    analyticsLocation: S,
                    promotionId: f,
                    isIAP: m,
                    giftCode: E,
                    isGift: _,
                    forceConfirmationStepOnMount: g,
                    sku: O,
                    isFetchingSKU: M,
                    isInTestMode: L,
                    isUserEntitledToSku: D,
                    isEmbeddedIAP: d,
                    ref: t
                })
            });
            class W extends i.PureComponent {
                close() {
                    null != this._skuPaymentModalRef.current && this._skuPaymentModalRef.current.closable && this.handleClose()
                }
                handleClose() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    this.props.onClose(e)
                }
                render() {
                    return (0, a.jsx)(H, {
                        ...this.props,
                        ref: this._skuPaymentModalRef,
                        onClose: () => this.handleClose()
                    })
                }
                constructor(...e) {
                    super(...e), this._skuPaymentModalRef = i.createRef()
                }
            }
            var Z = W
        },
        562366: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ReceiptIcon: function() {
                    return i
                }
            });
            var r = s("37983");
            s("884691");
            var n = s("669491"),
                a = s("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: i = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M21 21.93V2.07a1 1 0 0 0-1.27-.97l-2.5.7a3 3 0 0 1-1.46.04l-3.12-.7a3 3 0 0 0-1.3 0l-3.12.7a3 3 0 0 1-1.45-.04l-2.51-.7A1 1 0 0 0 3 2.07v19.86a1 1 0 0 0 1.27.97l2.5-.7a3 3 0 0 1 1.46-.04l3.12.7a3 3 0 0 0 1.3 0l3.12-.7a3 3 0 0 1 1.45.04l2.51.7a1 1 0 0 0 1.27-.97ZM7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm-1 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm8-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        909469: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                PAYMENT_SOURCE_NAMES: function() {
                    return p
                },
                getLocalizedPricingNotice: function() {
                    return S
                },
                getLocalizedPricingBannerStrings: function() {
                    return f
                }
            }), s("222007"), s("424973");
            var r = s("592861"),
                n = s("988415"),
                a = s("701909"),
                i = s("153160"),
                l = s("49111"),
                o = s("843455"),
                u = s("782340");
            let d = new Set([o.CurrencyCodes.ARS, o.CurrencyCodes.CLP, o.CurrencyCodes.COP]),
                c = new Set([o.CurrencyCodes.USD, o.CurrencyCodes.JPY]),
                p = {
                    [l.PaymentSourceTypes.CARD]: () => u.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
                    [l.PaymentSourceTypes.PAYPAL]: () => u.default.Messages.PAYMENT_SOURCE_PAYPAL,
                    [l.PaymentSourceTypes.SOFORT]: () => u.default.Messages.PAYMENT_SOURCE_SOFORT,
                    [l.PaymentSourceTypes.GIROPAY]: () => u.default.Messages.PAYMENT_SOURCE_GIROPAY,
                    [l.PaymentSourceTypes.PRZELEWY24]: () => u.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
                    [l.PaymentSourceTypes.PAYSAFE_CARD]: () => u.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
                    [l.PaymentSourceTypes.GCASH]: () => u.default.Messages.PAYMENT_SOURCE_GCASH,
                    [l.PaymentSourceTypes.GRABPAY_MY]: () => u.default.Messages.PAYMENT_SOURCE_GRABPAY,
                    [l.PaymentSourceTypes.MOMO_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                    [l.PaymentSourceTypes.VENMO]: () => u.default.Messages.PAYMENT_SOURCE_VENMO,
                    [l.PaymentSourceTypes.KAKAOPAY]: () => u.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
                    [l.PaymentSourceTypes.GOPAY_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                    [l.PaymentSourceTypes.BANCONTACT]: () => u.default.Messages.PAYMENT_SOURCE_BANCONTACT,
                    [l.PaymentSourceTypes.EPS]: () => u.default.Messages.PAYMENT_SOURCE_EPS,
                    [l.PaymentSourceTypes.IDEAL]: () => u.default.Messages.PAYMENT_SOURCE_IDEAL,
                    [l.PaymentSourceTypes.CASH_APP]: () => u.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                },
                h = [l.PaymentSourceTypes.EPS, l.PaymentSourceTypes.BANCONTACT, l.PaymentSourceTypes.IDEAL, l.PaymentSourceTypes.SOFORT, l.PaymentSourceTypes.GIROPAY, l.PaymentSourceTypes.SEPA_DEBIT, l.PaymentSourceTypes.PAYSAFE_CARD],
                S = (e, t, s, r) => {
                    if (null == e) return "";
                    let a = (0, n.getI18NCountryName)(e);
                    if (t === o.CurrencyCodes.EUR) return s ? u.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: a
                    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    });
                    return r ? u.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: a
                    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: a
                    })
                },
                f = e => {
                    let {
                        localizedPricingPromo: t,
                        subscription: s,
                        forceSingleLine: r = !1,
                        userLocale: S
                    } = e, {
                        countryCode: f,
                        amount: P,
                        currency: A,
                        paymentSourceTypes: _
                    } = t, m = 0 !== _.length, C = E(f), I = (0, i.formatPrice)(P, A, {
                        style: "currency",
                        currency: A,
                        currencyDisplay: "symbol",
                        localeOverride: C
                    }), T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                        helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: A.toUpperCase(),
                        localizedPriceWithCurrencySymbol: I
                    });
                    if (c.has(A) && (T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: I
                        })), d.has(A) && (T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: A.toUpperCase(),
                            localizedPriceWithCurrencySymbol: I
                        })), null != s && !s.hasPremiumNitroMonthly && (T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: A.toUpperCase()
                        })), A === o.CurrencyCodes.EUR && (T = r ? u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, n.getI18NCountryName)(f),
                            currencyISOCode: A.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: A.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
                        })), m) {
                        let e = h.filter(e => _.includes(e)),
                            t = _.filter(e => !h.includes(e)),
                            s = [...e, ...t],
                            r = s.slice(0, 2).map(e => {
                                var t, s;
                                return null !== (s = null === (t = p[e]) || void 0 === t ? void 0 : t.call(p)) && void 0 !== s ? s : u.default.Messages.PAYMENT_SOURCE_UNKNOWN
                            });
                        _.length >= 3 && r.push(u.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        let n = new Intl.ListFormat(S, {
                            style: "short",
                            type: "conjunction"
                        });
                        T = u.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            paymentMethods: n.format(r)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: u.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, n.getI18NCountryName)(f)
                        }),
                        localizedPricingBannerBody: T,
                        localizedPricingBannerLinkOnly: u.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: m ? void 0 : u.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                E = e => {
                    let t = r.default.find(t => t.alpha2 === e);
                    return null == t ? void 0 : t.localeForICU
                }
        },
        671484: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            }), s("702976");
            var r, n = s("866227"),
                a = s.n(n),
                i = s("666038"),
                l = s("568734"),
                o = s("797647"),
                u = s("646718");
            let d = Object.freeze({
                PAYMENT_SOURCE_REQUIRED: 1,
                EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                NOT_SELF_REDEEMABLE: 4
            });
            r = class e extends i.default {
                static createFromServer(t) {
                    return new e({
                        userId: null != t.user ? t.user.id : null,
                        code: t.code,
                        skuId: t.sku_id,
                        applicationId: t.application_id,
                        uses: t.uses,
                        maxUses: t.max_uses,
                        storeListingId: null != t.store_listing ? t.store_listing.id : null,
                        expiresAt: null != t.expires_at ? a(t.expires_at) : null,
                        redeemed: t.redeemed,
                        subscriptionPlanId: null != t.subscription_plan ? t.subscription_plan.id : t.subscription_plan_id,
                        subscriptionPlan: null != t.subscription_plan ? o.default.createFromServer(t.subscription_plan) : null,
                        revoked: !1,
                        entitlementBranches: null != t.entitlement_branches ? t.entitlement_branches : null,
                        flags: null != t.flags ? t.flags : 0,
                        giftStyle: t.gift_style,
                        subscriptionTrial: null != t.subscription_trial ? {
                            id: t.subscription_trial.id,
                            interval: t.subscription_trial.interval,
                            intervalCount: t.subscription_trial.interval_count,
                            skuId: t.subscription_trial.sku_id
                        } : null,
                        promotion: null != t.promotion ? {
                            id: t.promotion.id,
                            startDate: t.promotion.start_date,
                            endDate: t.promotion.end_date,
                            inboundHeaderText: t.promotion.inbound_header_text,
                            inboundBodyText: t.promotion.inbound_body_text,
                            inboundHelpCenterLink: t.promotion.inbound_help_center_link
                        } : null
                    })
                }
                isExpired() {
                    let e = this.expiresAt;
                    return null != e && a().isAfter(e)
                }
                get hasMultipleCopies() {
                    return this.maxUses > 1
                }
                get isClaimed() {
                    return this.uses >= this.maxUses
                }
                get remainingUses() {
                    return this.maxUses - this.uses
                }
                get isSubscription() {
                    return null != this.subscriptionPlanId
                }
                get premiumSubscriptionType() {
                    return this.isSubscription && u.PremiumSubscriptionSKUToPremiumType[this.skuId] || null
                }
                get isSelfRedeemable() {
                    return !(0, l.hasFlag)(this.flags, d.NOT_SELF_REDEEMABLE)
                }
                get isExistingPremiumSubscriptionDisallowed() {
                    return (0, l.hasFlag)(this.flags, d.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
                }
                get analyticsData() {
                    return {
                        gift_code: this.code,
                        gift_code_max_uses: this.maxUses
                    }
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.userId = e.userId, this.code = e.code, this.skuId = e.skuId, this.applicationId = e.applicationId, this.uses = e.uses, this.maxUses = e.maxUses, this.expiresAt = e.expiresAt, this.redeemed = e.redeemed, this.storeListingId = e.storeListingId, this.subscriptionPlanId = e.subscriptionPlanId, this.subscriptionPlan = e.subscriptionPlan, this.revoked = e.revoked, this.entitlementBranches = e.entitlementBranches, this.flags = e.flags, this.subscriptionTrial = e.subscriptionTrial, this.promotion = e.promotion, this.giftStyle = e.giftStyle
                }
            }
        },
        561703: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var r = s("37983");
            s("884691");
            var n = s("469563"),
                a = s("562366"),
                i = s("75196"),
                l = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: n = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(l),
                        width: t,
                        height: s,
                        viewBox: "0 0 18 20",
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: n,
                            d: "M15,15H3V13H15Zm0-4H3V9H15Zm0-4H3V5H15ZM0,20l1.5-1.5L3,20l1.5-1.5L6,20l1.5-1.5L9,20l1.5-1.5L12,20l1.5-1.5L15,20l1.5-1.5L18,20V0L16.5,1.5,15,0,13.5,1.5,12,0,10.5,1.5,9,0,7.5,1.5,6,0,4.5,1.5,3,0,1.5,1.5,0,0Z"
                        })
                    })
                }, a.ReceiptIcon, void 0, {
                    size: 16
                })
        },
        315585: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var r = s("37983");
            s("884691");
            var n = s("75196");

            function a(e) {
                let {
                    width: t = 14,
                    height: s = 14,
                    color: a = "currentColor",
                    foreground: i,
                    ...l
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, n.default)(l),
                    width: t,
                    height: s,
                    viewBox: "0 0 14 14",
                    children: (0, r.jsx)("path", {
                        className: i,
                        fill: a,
                        d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
                    })
                })
            }
        }
    }
]);