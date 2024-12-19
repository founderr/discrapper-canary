n.d(t, {
    f: function () {
        return T;
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
    h = n(439021),
    g = n(450272),
    p = n(388032),
    x = n(713126),
    S = n(564952);
function T() {
    return (0, i.jsx)(u.PaymentContextProvider, {
        stepConfigs: [],
        skuIDs: [],
        activeSubscription: null,
        children: (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    color: 'info-help-text',
                    className: x.labelSpacing,
                    children: 'Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser.'
                }),
                (0, i.jsx)(E, {}),
                (0, i.jsx)(j, {})
            ]
        })
    });
}
function E() {
    return (0, i.jsxs)(g.$0, {
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Payment Request Components - Google Pay'
            }),
            (0, i.jsx)(g.E_, {
                label: 'Google Pay - Default View',
                children: (0, i.jsx)(C, {})
            }),
            (0, i.jsx)(g.E_, {
                label: 'Google Pay - Connector View',
                children: (0, i.jsx)(C, { renderConnectorView: !0 })
            }),
            (0, i.jsx)(g.E_, {
                label: 'Google Pay - Add Payment Step Body Connector View',
                children: (0, i.jsx)(_, {})
            }),
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Payment Request Components - Apple Pay'
            }),
            (0, i.jsx)(g.E_, {
                label: 'Apple Pay - Default View',
                children: (0, i.jsx)(C, { paymentRequestWallet: 'applePay' })
            }),
            (0, i.jsx)(g.E_, {
                label: 'Apple Pay - Connector View',
                children: (0, i.jsx)(C, {
                    renderConnectorView: !0,
                    paymentRequestWallet: 'applePay'
                })
            }),
            (0, i.jsx)(g.E_, {
                label: 'Apple Pay - Add Payment Step Body Connector View',
                children: (0, i.jsx)(_, { paymentRequestWallet: 'applePay' })
            })
        ]
    });
}
function C(e) {
    let t = s.useRef(null),
        n = {
            paymentLabel: p.intl.string(p.t.ZURqX1),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, i.jsx)(o.Button, {
                color: o.Button.Colors.TRANSPARENT,
                submitting: !0,
                look: o.Button.Looks.LINK
            })
        };
    return e.renderStepBody
        ? (0, i.jsx)(h.t, {
              ...n,
              ...e
          })
        : 'applePay' === e.paymentRequestWallet
          ? (0, i.jsx)(c.Ch, {
                ...n,
                ...e
            })
          : (0, i.jsx)(c.Tr, {
                ...n,
                ...e
            });
}
function _(e) {
    let { paymentRequestWallet: t } = e,
        n = s.useRef(null),
        [r, l] = s.useState(!1),
        c = () => {
            null != n.current && n.current.show();
        };
    return (0, i.jsx)('div', {
        className: a()(S.root, S.focusLock, S.small, S.rootWithShadow, x.modal),
        'aria-label': p.intl.string(p.t.eQ2bLi),
        children: (0, i.jsxs)('form', {
            className: x.form,
            onSubmit: (e) => {
                e.preventDefault();
            },
            children: [
                (0, i.jsx)(o.ModalContent, {
                    children: (0, i.jsx)(C, {
                        renderConnectorView: !0,
                        renderStepBody: !0,
                        paymentRequestWallet: t,
                        paymentRequestRef: n,
                        onValidPaymentRequest: () => l(!0)
                    })
                }),
                (0, i.jsx)(m.Z, {
                    primaryCTA: m.Z.CTAType.CONTINUE,
                    primaryText: p.intl.string('applePay' === t ? p.t.WoXvJC : p.t.wnVVr6),
                    primaryDisabled: !r,
                    onPrimary: () => c(),
                    onBack: () => {}
                })
            ]
        })
    });
}
let f = {
        DEFAULT: 'Express Checkout Element - Default (No Config)',
        GPAY_FILTERED: 'Express Checkout Element - Filtered for Google Pay',
        APPLE_PAY_FILTERED: 'Express Checkout Element - Filtered for Apple Pay',
        APPLE_AND_GPAY_DISABLED: 'Express Checkout Element - Google Pay and Apple Pay Disabled',
        CONFIGURABLE: 'Express Checkout Element - Configurable'
    },
    I = {
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
    N = {
        appearance: {
            theme: 'flat',
            variables: {
                spacingUnit: '12px',
                borderRadius: '36px'
            }
        }
    },
    A = {
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
    b = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : 'undefined');
function v() {
    let [e, t] = s.useState(b(N)),
        [n, l] = s.useState(N),
        [a, c] = s.useState(b(A)),
        [u, m] = s.useState(A),
        [h, p] = s.useState(null),
        [S, T] = s.useState(
            (0, i.jsx)(g.DS, {
                errorLabel: f.CONFIGURABLE,
                elementOptions: N,
                children: (0, i.jsx)(r.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log('ExpressCheckoutElement onConfirm event: ', e);
                    },
                    options: A
                })
            })
        );
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: x.labelSpacing,
                children: ['Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.', (0, i.jsx)('br', {}), (0, i.jsx)('br', {}), 'Start by changing the `borderRadius` or `buttonHeight` as a test!']
            }),
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: x.labelSpacing,
                children: [(0, i.jsx)('b', { children: 'elements.options:' }), (0, i.jsx)('br', {}), (0, i.jsx)(g.lD, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632' })]
            }),
            (0, i.jsx)(o.TextArea, {
                className: x.textarea,
                placeholder: 'Stripe Elements Container Options',
                showCharacterCount: !0,
                value: e,
                onChange: t
            }),
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/normal',
                className: x.labelSpacing,
                children: [(0, i.jsx)('b', { children: 'expressCheckoutElement.options:' }), (0, i.jsx)('br', {}), (0, i.jsx)(g.lD, { href: 'https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314' }), (0, i.jsx)('br', {}), (0, i.jsx)(g.lD, { href: 'https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element' })]
            }),
            (0, i.jsx)(o.TextArea, {
                className: x.textarea,
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
                className: x.applyChangesButton,
                color: o.Button.Colors.BRAND,
                look: o.Button.Looks.FILLED,
                size: o.Button.Sizes.SMALL,
                onClick: () => {
                    try {
                        let t = JSON.parse(e),
                            n = JSON.parse(a);
                        T(null),
                            T(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsxs)(o.Text, {
                                            variant: 'text-md/normal',
                                            className: x.labelSpacing,
                                            children: ['Element updated at: ', new Date().toString()]
                                        }),
                                        (0, i.jsx)(g.DS, {
                                            errorLabel: f.CONFIGURABLE,
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
                            p(null);
                    } catch (e) {
                        console.error('ConfigurableStripeExpressCheckoutElement - error parsing JSON: ', e), p('Error parsing JSON. Check console for more information.');
                    }
                },
                children: 'Apply Changes'
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                className: x.labelSpacing,
                children: 'Current Element Options:'
            }),
            (0, i.jsx)(d.Z, {
                className: x.markdown,
                children: ''.concat('``', ' ').concat(b(n), ' ').concat('``')
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                className: x.labelSpacing,
                children: 'Current Express Checkout Element Options:'
            }),
            (0, i.jsx)(d.Z, {
                className: x.markdown,
                children: ''.concat('``', ' ').concat(b(u), ' ').concat('``')
            }),
            S
        ]
    });
}
function j() {
    return (0, i.jsxs)(g.$0, {
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Stripe Express Checkout Buttons'
            }),
            (0, i.jsx)(g.E_, {
                label: f.DEFAULT,
                children: (0, i.jsx)('div', {
                    children: (0, i.jsx)(g.DS, {
                        errorLabel: f.DEFAULT,
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
                let t = f[e];
                return (0, i.jsx)(
                    g.E_,
                    {
                        label: t,
                        children: (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    className: x.labelSpacing,
                                    children: 'expressCheckoutElement.options:'
                                }),
                                (0, i.jsx)(d.Z, {
                                    className: x.markdown,
                                    children: ''.concat('``').concat(b(I[e]), ' ').concat('``')
                                }),
                                (0, i.jsx)(g.DS, {
                                    errorLabel: t,
                                    children: (0, i.jsx)(r.ExpressCheckoutElement, {
                                        onConfirm: (e) => {
                                            console.log('ExpressCheckoutElement onConfirm event: ', e);
                                        },
                                        options: I[e]
                                    })
                                })
                            ]
                        })
                    },
                    e
                );
            }),
            (0, i.jsx)(g.E_, {
                label: f.CONFIGURABLE,
                children: (0, i.jsx)(v, {})
            })
        ]
    });
}
