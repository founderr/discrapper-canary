t(47120);
var n,
    s,
    r,
    l,
    o = t(735250),
    i = t(470079),
    c = t(160612),
    u = t(120356),
    d = t.n(u),
    E = t(692547),
    _ = t(481060),
    A = t(219929),
    m = t(689938),
    N = t(743736),
    p = t(803636);
((r = n || (n = {})).CardNumber = 'cardNumber'), (r.CardExpiry = 'cardExpiry'), (r.CardCvc = 'cardCvc'), ((l = s || (s = {})).Change = 'change'), (l.Focus = 'focus'), (l.Blur = 'blur');
a.Z = function (e) {
    let a = i.useRef(null),
        { stripeType: t, flipped: n, updateCompleted: s, onFocus: r, onBlur: l } = e,
        [u, h] = i.useState(A.Qy.UNKNOWN),
        [C, I] = i.useState(!1),
        [T, P] = i.useState(!1),
        [S, R] = i.useState(null),
        [f, M] = i.useState({}),
        O = (0, c.useElements)(),
        { theme: b } = (0, _.useThemeContext)(),
        y = i.useCallback(() => {
            if (null != O)
                switch (t) {
                    case 'cardNumber': {
                        let e = O.getElement(c.CardNumberElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                    case 'cardExpiry': {
                        let e = O.getElement(c.CardExpiryElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                    case 'cardCvc': {
                        let e = O.getElement(c.CardCvcElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                    }
                }
        }, [O, t]),
        g = i.useCallback(
            (e) => {
                !T && !e.empty && P(!0), null != s && s(e.complete), null != e.error && I(!1);
            },
            [T, s]
        ),
        L = i.useCallback(() => {
            I(!0), null == r || r();
        }, [r]),
        D = i.useCallback(() => {
            I(!1), null == l || l();
        }, [l]),
        v = i.useCallback(() => {
            if (null != O)
                switch (t) {
                    case 'cardNumber': {
                        let e = O.getElement(c.CardNumberElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            u !== e.brand && h(e.brand), e.empty && T ? R(m.Z.Messages.CREDIT_CARD_ERROR_REQUIRED) : null != e.error ? R(m.Z.Messages.CREDIT_CARD_ERROR_NUMBER) : R(null), g(e);
                        }),
                            e.on('focus', L),
                            e.on('blur', D);
                        break;
                    }
                    case 'cardExpiry': {
                        let e = O.getElement(c.CardExpiryElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && T) ? R(m.Z.Messages.CREDIT_CARD_ERROR_EXPIRATION) : R(null), g(e);
                        }),
                            e.on('focus', L),
                            e.on('blur', D);
                        break;
                    }
                    case 'cardCvc': {
                        let e = O.getElement(c.CardCvcElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && T) ? R(m.Z.Messages.CREDIT_CARD_ERROR_SECURITY_CODE) : R(null), g(e);
                        }),
                            e.on('focus', L),
                            e.on('blur', D);
                    }
                }
        }, [D, g, L, u, O, T, t]);
    function Z() {
        return d()(N.cardInput, {
            [N.cardInputError]: null !== S,
            [N.cardInputFocused]: C,
            [N.cardNumberInput]: 'cardNumber' === t
        });
    }
    return (
        i.useEffect(
            () => (
                v(),
                () => {
                    y();
                }
            ),
            [v, y]
        ),
        i.useLayoutEffect(() => {
            let { current: e } = a;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                n = window.getComputedStyle(e, '::placeholder'),
                s = t.getPropertyValue('font-family'),
                r = t.getPropertyValue('font-weight'),
                l = E.Z.colors.TEXT_PRIMARY.resolve({
                    theme: b,
                    saturation: 1
                }).hex();
            M({
                base: {
                    fontFamily: s,
                    fontWeight: r,
                    color: l,
                    fontSize: t.getPropertyValue('font-size'),
                    '::placeholder': { color: n.getPropertyValue('color') }
                }
            });
        }, [a, b]),
        (0, o.jsxs)('div', {
            className: d()(N.cardNumberWrapper),
            'data-stripe-type': t,
            children: [
                (0, o.jsx)('div', {
                    ref: a,
                    className: d()(N.hiddenDiv, p.input)
                }),
                (function () {
                    switch (t) {
                        case 'cardNumber':
                            return (0, o.jsxs)('div', {
                                children: [
                                    (0, o.jsx)(A.ZP, {
                                        className: N.cardIcon,
                                        type: u,
                                        flipped: n
                                    }),
                                    (0, o.jsx)(c.CardNumberElement, {
                                        options: {
                                            style: f,
                                            placeholder: m.Z.Messages.PAYMENT_SOURCE_CARD_NUMBER,
                                            disableLink: !1
                                        },
                                        className: Z()
                                    })
                                ]
                            });
                        case 'cardExpiry':
                            return (0, o.jsx)(c.CardExpiryElement, {
                                options: {
                                    style: f,
                                    placeholder: m.Z.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER
                                },
                                className: Z()
                            });
                        case 'cardCvc':
                            return (0, o.jsx)(c.CardCvcElement, {
                                options: {
                                    style: f,
                                    placeholder: m.Z.Messages.CREDIT_CARD_SECURITY_CODE
                                },
                                className: Z()
                            });
                    }
                })(),
                (0, o.jsx)(_.InputError, { error: S })
            ]
        })
    );
};
