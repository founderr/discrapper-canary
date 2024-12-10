n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(734530),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    c = n(502109),
    d = n(241209),
    u = n(563132),
    m = n(586585),
    h = n(233138),
    g = n(622999),
    p = n(526156),
    x = n(726985),
    S = n(981631),
    T = n(388032),
    E = n(769346),
    C = n(564952);
function _() {
    return (0, i.jsx)(p.Z, {
        parentSetting: x.s6.PAYMENT_COMPONENTS,
        settingsSection: S.oAB.PAYMENT_COMPONENTS_PAGE,
        tabs: [
            {
                title: 'Components',
                component: () => (0, i.jsx)(f, {}),
                setting: x.s6.PAYMENT_COMPONENTS
            }
        ]
    });
}
function f() {
    return (0, i.jsx)(u.PaymentContextProvider, {
        stepConfigs: [],
        skuIDs: [],
        activeSubscription: null,
        children: (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    color: 'info-help-text',
                    className: E.labelSpacing,
                    children: 'Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser.'
                }),
                (0, i.jsx)(j, {}),
                (0, i.jsx)(Z, {})
            ]
        })
    });
}
let I = () => (0, i.jsx)('hr', { className: E.sectionDivider }),
    N = (e) => {
        let { label: t, children: n } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(I, {}),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/semibold',
                    className: E.labelSpacing,
                    children: t
                }),
                (0, i.jsx)('div', {
                    style: { display: 'flex' },
                    children: n
                })
            ]
        });
    },
    A = (e) => {
        let { href: t } = e;
        return (0, i.jsx)(o.Anchor, {
            href: t,
            children: t
        });
    };
class b extends s.PureComponent {
    componentDidCatch(e, t) {
        console.error('Error rendering component (LocalErrorBoundary): ', e),
            this.setState({
                error: e,
                info: t
            });
    }
    render() {
        return null != this.state.error
            ? (0, i.jsx)('div', {
                  children: (0, i.jsx)(o.Text, {
                      color: 'text-danger',
                      variant: 'text-md/normal',
                      className: E.labelSpacing,
                      children: 'Error rendering component. Check console for more information on the error.'
                  })
              })
            : this.props.children;
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (i = {
                error: null,
                info: null
            }),
            (n = 'state') in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
function v(e) {
    let t = s.useRef(null),
        n = {
            paymentLabel: T.intl.string(T.t.ZURqX1),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidGooglePay: () => {},
            onChooseType: () => {},
            loadingComponent: (0, i.jsx)(o.Button, {
                color: o.Button.Colors.TRANSPARENT,
                submitting: !0,
                look: o.Button.Looks.LINK
            })
        };
    return e.renderStepBody
        ? (0, i.jsx)(h.z, {
              ...n,
              ...e
          })
        : (0, i.jsx)(c.T, {
              ...n,
              ...e
          });
}
function j() {
    return (0, i.jsxs)('div', {
        className: E.section,
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Payment Request Components'
            }),
            (0, i.jsx)(N, {
                label: 'Google Pay - Default View',
                children: (0, i.jsx)(v, {})
            }),
            (0, i.jsx)(N, {
                label: 'Google Pay - Connector View',
                children: (0, i.jsx)(v, { renderConnectorView: !0 })
            }),
            (0, i.jsx)(N, {
                label: 'Google Pay - Add Payment Step Body Connector View',
                children: (0, i.jsx)('div', {
                    className: a()(C.root, C.focusLock, C.small, C.rootWithShadow, E.modal),
                    'aria-label': T.intl.string(T.t.eQ2bLi),
                    children: (0, i.jsxs)('form', {
                        className: E.form,
                        onSubmit: (e) => {
                            e.preventDefault();
                        },
                        children: [
                            (0, i.jsx)(o.ModalContent, {
                                children: (0, i.jsx)(v, {
                                    renderConnectorView: !0,
                                    renderStepBody: !0
                                })
                            }),
                            (0, i.jsx)(m.Z, {
                                primaryCTA: m.Z.CTAType.CONTINUE,
                                primaryText: T.intl.string(T.t.wnVVr6),
                                primaryDisabled: !1,
                                onPrimary: () => {},
                                onBack: () => {}
                            })
                        ]
                    })
                })
            })
        ]
    });
}
let O = {
        DEFAULT: 'Express Checkout Element - Default (No Config)',
        GPAY_FILTERED: 'Express Checkout Element - Filtered for Google Pay',
        APPLE_PAY_FILTERED: 'Express Checkout Element - Filtered for Apple Pay',
        APPLE_AND_GPAY_DISABLED: 'Express Checkout Element - Google Pay and Apple Pay Disabled',
        CONFIGURABLE: 'Express Checkout Element - Configurable'
    },
    R = {
        GPAY_FILTERED: {
            wallets: {
                googlePay: 'always',
                applePay: 'never'
            }
        },
        APPLE_PAY_FILTERED: {
            wallets: {
                googlePay: 'never',
                applePay: 'always'
            }
        },
        APPLE_AND_GPAY_DISABLED: {
            wallets: {
                googlePay: 'never',
                applePay: 'never'
            }
        }
    },
    P = (e) => {
        let { errorLabel: t, children: n, elementOptions: s } = e,
            l = Date.now();
        return (0, i.jsx)(
            b,
            {
                label: t,
                children: (0, i.jsx)(r.Elements, {
                    stripe: (0, g.d2)(),
                    options: {
                        mode: 'setup',
                        currency: 'usd',
                        setup_future_usage: 'off_session',
                        ...s
                    },
                    children: n
                })
            },
            l
        );
    },
    D = {
        appearance: {
            theme: 'flat',
            variables: {
                spacingUnit: '12px',
                borderRadius: '36px'
            }
        }
    },
    y = {
        buttonType: {
            googlePay: 'pay',
            applePay: 'book'
        },
        buttonTheme: {
            applePay: 'black',
            googlePay: 'white'
        },
        buttonHeight: 40
    },
    B = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : 'undefined');
function L() {
    let [e, t] = s.useState(B(D)),
        [n, l] = s.useState(D),
        [a, c] = s.useState(B(y)),
        [u, m] = s.useState(y),
        [h, g] = s.useState(null),
        [p, x] = s.useState(
            (0, i.jsx)(P, {
                errorLabel: O.CONFIGURABLE,
                elementOptions: D,
                children: (0, i.jsx)(r.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log('ExpressCheckoutElement onConfirm event: ', e);
                    },
                    options: y
                })
            })
        );
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: E.labelSpacing,
                children: ['Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.', (0, i.jsx)('br', {}), (0, i.jsx)('br', {}), 'Start by changing the `borderRadius` or `buttonHeight` as a test!']
            }),
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: E.labelSpacing,
                children: [(0, i.jsx)('b', { children: 'elements.options:' }), (0, i.jsx)('br', {}), (0, i.jsx)(A, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632' })]
            }),
            (0, i.jsx)(o.TextArea, {
                className: E.textarea,
                placeholder: 'Stripe Elements Container Options',
                showCharacterCount: !0,
                value: e,
                onChange: t
            }),
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: E.labelSpacing,
                children: [(0, i.jsx)('b', { children: 'expressCheckoutElement.options:' }), (0, i.jsx)('br', {}), (0, i.jsx)(A, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314' }), (0, i.jsx)('br', {}), (0, i.jsx)(A, { href: 'https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element' })]
            }),
            (0, i.jsx)(o.TextArea, {
                className: E.textarea,
                placeholder: 'Stripe Express Checkout Element Options',
                showCharacterCount: !0,
                value: a,
                onChange: c
            }),
            null != h &&
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    color: 'text-danger',
                    children: h
                }),
            (0, i.jsx)(o.Button, {
                className: E.applyChangesButton,
                color: o.Button.Colors.BRAND,
                look: o.Button.Looks.FILLED,
                size: o.Button.Sizes.SMALL,
                onClick: () => {
                    try {
                        let t = JSON.parse(e),
                            n = JSON.parse(a);
                        x(null),
                            x(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsxs)(o.Text, {
                                            variant: 'text-md/normal',
                                            className: E.labelSpacing,
                                            children: ['Element updated at: ', new Date().toString()]
                                        }),
                                        (0, i.jsx)(P, {
                                            errorLabel: O.CONFIGURABLE,
                                            elementOptions: t,
                                            children: (0, i.jsx)(r.ExpressCheckoutElement, {
                                                onConfirm: (e) => {
                                                    console.log('ExpressCheckoutElement onConfirm event: ', e);
                                                },
                                                options: n
                                            })
                                        })
                                    ]
                                })
                            ),
                            l(t),
                            m(n),
                            g(null);
                    } catch (e) {
                        console.error('ConfigurableStripeExpressCheckoutElement - error parsing JSON: ', e), g('Error parsing JSON. Check console for more information.');
                    }
                },
                children: 'Apply Changes'
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                className: E.labelSpacing,
                children: 'Current Element Options:'
            }),
            (0, i.jsx)(d.Z, {
                className: E.markdown,
                children: ''.concat('``', ' ').concat(B(n), ' ').concat('``')
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                className: E.labelSpacing,
                children: 'Current Express Checkout Element Options:'
            }),
            (0, i.jsx)(d.Z, {
                className: E.markdown,
                children: ''.concat('``', ' ').concat(B(u), ' ').concat('``')
            }),
            p
        ]
    });
}
function Z() {
    return (0, i.jsxs)('div', {
        className: E.section,
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Stripe Express Checkout Buttons'
            }),
            (0, i.jsx)(N, {
                label: O.DEFAULT,
                children: (0, i.jsx)('div', {
                    children: (0, i.jsx)(P, {
                        errorLabel: O.DEFAULT,
                        children: (0, i.jsx)(r.ExpressCheckoutElement, {
                            onConfirm: (e) => {
                                console.log('ExpressCheckoutElement onConfirm event: ', e);
                            },
                            options: {}
                        })
                    })
                })
            }),
            ['GPAY_FILTERED', 'APPLE_PAY_FILTERED', 'APPLE_AND_GPAY_DISABLED'].map((e) => {
                let t = O[e];
                return (0, i.jsx)(
                    N,
                    {
                        label: t,
                        children: (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    className: E.labelSpacing,
                                    children: 'expressCheckoutElement.options:'
                                }),
                                (0, i.jsx)(d.Z, {
                                    className: E.markdown,
                                    children: ''.concat('``').concat(B(R[e]), ' ').concat('``')
                                }),
                                (0, i.jsx)(P, {
                                    errorLabel: t,
                                    children: (0, i.jsx)(r.ExpressCheckoutElement, {
                                        onConfirm: (e) => {
                                            console.log('ExpressCheckoutElement onConfirm event: ', e);
                                        },
                                        options: R[e]
                                    })
                                })
                            ]
                        })
                    },
                    e
                );
            }),
            (0, i.jsx)(N, {
                label: O.CONFIGURABLE,
                children: (0, i.jsx)(L, {})
            })
        ]
    });
}
