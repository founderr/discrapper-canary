t(47120), t(411104);
var n = t(200651),
    s = t(192379),
    r = t(734530),
    l = t(780384),
    o = t(481060),
    i = t(410030),
    c = t(231338),
    u = t(689938),
    d = t(851057),
    E = t(744481),
    _ = t(724641),
    A = t(811974),
    m = t(212545),
    N = t(184229),
    p = t(504309);
a.Z = function (e) {
    let a = (0, i.ZP)(),
        t = s.useRef(null),
        [h, C] = s.useState({});
    switch (
        (s.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let a = window.getComputedStyle(e),
                n = window.getComputedStyle(e, '::placeholder'),
                s = a.getPropertyValue('font-family'),
                r = a.getPropertyValue('font-weight'),
                l = a.getPropertyValue('color'),
                o = a.getPropertyValue('font-size');
            C({
                base: {
                    fontFamily: s,
                    fontWeight: r,
                    color: l,
                    fontSize: o,
                    backgroundColor: a.getPropertyValue('background-color'),
                    padding: '12px',
                    '::placeholder': { color: n.getPropertyValue('color') }
                }
            });
        }, [t]),
        e.type)
    ) {
        case c.He.PRZELEWY24: {
            let s = (0, l.wj)(a) ? N : p,
                { onNameChange: i, onEmailChange: c, onP24BankChange: E, p24BankValue: _, billingAddressInfo: A } = e;
            return (0, n.jsxs)('div', {
                className: d.body,
                children: [
                    (0, n.jsx)(o.FormSection, {
                        title: u.Z.Messages.EMAIL,
                        children: (0, n.jsx)(o.TextInput, {
                            inputRef: t,
                            name: u.Z.Messages.EMAIL,
                            placeholder: u.Z.Messages.EMAIL,
                            onChange: (e) => c(e),
                            value: A.email
                        })
                    }),
                    (0, n.jsx)(o.FormSection, {
                        className: d.nonTopInputWrapper,
                        title: u.Z.Messages.CREDIT_CARD_NAME,
                        children: (0, n.jsx)(o.TextInput, {
                            name: u.Z.Messages.CREDIT_CARD_NAME,
                            placeholder: u.Z.Messages.CREDIT_CARD_NAME,
                            onChange: (e) => i(e),
                            value: A.name
                        })
                    }),
                    (0, n.jsxs)(o.FormSection, {
                        className: d.nonTopInputWrapper,
                        title: u.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_BANK_LABEL,
                        children: [
                            (0, n.jsx)(r.P24BankElement, {
                                options: {
                                    value: _,
                                    style: h
                                },
                                onChange: (e) => E(e.value)
                            }),
                            (0, n.jsx)('div', {
                                className: d.bankSelectionStub,
                                children: (0, n.jsx)('img', {
                                    src: s,
                                    alt: 'Przelewy24'
                                })
                            })
                        ]
                    })
                ]
            });
        }
        case c.He.EPS: {
            let { onAccountHolderNameChange: s, onEPSBankChange: i, epsBankValue: c, billingAddressInfo: A } = e,
                m = (0, l.wj)(a) ? E : _;
            return (0, n.jsxs)('div', {
                className: d.body,
                children: [
                    (0, n.jsx)(o.FormSection, {
                        title: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                        children: (0, n.jsx)(o.TextInput, {
                            inputRef: t,
                            name: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                            placeholder: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                            onChange: (e) => s(e),
                            value: A.name
                        })
                    }),
                    (0, n.jsxs)(o.FormSection, {
                        className: d.nonTopInputWrapper,
                        title: u.Z.Messages.PAYMENT_SOURCE_EPS_BANK_LABEL,
                        children: [
                            (0, n.jsx)(r.EpsBankElement, {
                                options: {
                                    value: c,
                                    style: h
                                },
                                onChange: (e) => i(e.value)
                            }),
                            (0, n.jsx)('div', {
                                className: d.bankSelectionStub,
                                children: (0, n.jsx)('img', {
                                    src: m,
                                    alt: 'EPS'
                                })
                            })
                        ]
                    })
                ]
            });
        }
        case c.He.IDEAL: {
            let { onAccountHolderNameChange: s, onIdealBankChange: i, idealBankValue: c, billingAddressInfo: E } = e,
                _ = (0, l.wj)(a) ? A : m;
            return (0, n.jsxs)('div', {
                className: d.body,
                children: [
                    (0, n.jsx)(o.FormSection, {
                        title: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                        children: (0, n.jsx)(o.TextInput, {
                            inputRef: t,
                            name: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                            placeholder: u.Z.Messages.PAYMENT_SOURCE_ACCOUNT_HOLDER_NAME,
                            onChange: (e) => s(e),
                            value: E.name
                        })
                    }),
                    (0, n.jsxs)(o.FormSection, {
                        className: d.nonTopInputWrapper,
                        title: u.Z.Messages.PAYMENT_SOURCE_IDEAL_BANK_LABEL,
                        children: [
                            (0, n.jsx)(r.IdealBankElement, {
                                options: {
                                    value: c,
                                    style: h
                                },
                                onChange: (e) => i(e.value)
                            }),
                            (0, n.jsx)('div', {
                                className: d.bankSelectionStub,
                                children: (0, n.jsx)('img', {
                                    src: _,
                                    alt: 'iDeal'
                                })
                            })
                        ]
                    })
                ]
            });
        }
        default:
            throw Error('unknown payment source type');
    }
};
