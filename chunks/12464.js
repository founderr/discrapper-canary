n(47120);
var a,
    r,
    l,
    i,
    s = n(200651),
    o = n(192379),
    c = n(734530),
    u = n(120356),
    d = n.n(u),
    m = n(692547),
    p = n(481060),
    h = n(219929),
    A = n(388032),
    E = n(919616),
    N = n(716722);
((l = a || (a = {})).CardNumber = 'cardNumber'), (l.CardExpiry = 'cardExpiry'), (l.CardCvc = 'cardCvc'), ((i = r || (r = {})).Change = 'change'), (i.Focus = 'focus'), (i.Blur = 'blur');
t.Z = function (e) {
    let t = o.useRef(null),
        { stripeType: n, flipped: a, updateCompleted: r, onFocus: l, onBlur: i } = e,
        [u, f] = o.useState(h.Qy.UNKNOWN),
        [b, _] = o.useState(!1),
        [y, P] = o.useState(!1),
        [g, C] = o.useState(null),
        [I, T] = o.useState({}),
        S = (0, c.useElements)(),
        { theme: v } = (0, p.useThemeContext)(),
        x = o.useCallback(() => {
            if (null != S)
                switch (n) {
                    case 'cardNumber': {
                        let e = S.getElement(c.CardNumberElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                    case 'cardExpiry': {
                        let e = S.getElement(c.CardExpiryElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                        break;
                    }
                    case 'cardCvc': {
                        let e = S.getElement(c.CardCvcElement);
                        if (null == e) return;
                        e.off('change'), e.off('focus'), e.off('blur');
                    }
                }
        }, [S, n]),
        L = o.useCallback(
            (e) => {
                !y && !e.empty && P(!0), null != r && r(e.complete), null != e.error && _(!1);
            },
            [y, r]
        ),
        R = o.useCallback(() => {
            _(!0), null == l || l();
        }, [l]),
        O = o.useCallback(() => {
            _(!1), null == i || i();
        }, [i]),
        M = o.useCallback(() => {
            if (null != S)
                switch (n) {
                    case 'cardNumber': {
                        let e = S.getElement(c.CardNumberElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            u !== e.brand && f(e.brand), e.empty && y ? C(A.intl.string(A.t.eOIfu7)) : null != e.error ? C(A.intl.string(A.t.x4pWtL)) : C(null), L(e);
                        }),
                            e.on('focus', R),
                            e.on('blur', O);
                        break;
                    }
                    case 'cardExpiry': {
                        let e = S.getElement(c.CardExpiryElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && y) ? C(A.intl.string(A.t['9/zZdn'])) : C(null), L(e);
                        }),
                            e.on('focus', R),
                            e.on('blur', O);
                        break;
                    }
                    case 'cardCvc': {
                        let e = S.getElement(c.CardCvcElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && y) ? C(A.intl.string(A.t.ro4isb)) : C(null), L(e);
                        }),
                            e.on('focus', R),
                            e.on('blur', O);
                    }
                }
        }, [O, L, R, u, S, y, n]);
    function D() {
        return d()(E.cardInput, {
            [E.cardInputError]: null !== g,
            [E.cardInputFocused]: b,
            [E.cardNumberInput]: 'cardNumber' === n
        });
    }
    return (
        o.useEffect(
            () => (
                M(),
                () => {
                    x();
                }
            ),
            [M, x]
        ),
        o.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                a = window.getComputedStyle(e, '::placeholder'),
                r = n.getPropertyValue('font-family'),
                l = n.getPropertyValue('font-weight'),
                i = m.Z.colors.TEXT_PRIMARY.resolve({
                    theme: v,
                    saturation: 1
                }).hex();
            T({
                base: {
                    fontFamily: r,
                    fontWeight: l,
                    color: i,
                    fontSize: n.getPropertyValue('font-size'),
                    '::placeholder': { color: a.getPropertyValue('color') }
                }
            });
        }, [t, v]),
        (0, s.jsxs)('div', {
            className: d()(E.cardNumberWrapper),
            'data-stripe-type': n,
            children: [
                (0, s.jsx)('div', {
                    ref: t,
                    className: d()(E.hiddenDiv, N.input)
                }),
                (function () {
                    switch (n) {
                        case 'cardNumber':
                            return (0, s.jsxs)('div', {
                                children: [
                                    (0, s.jsx)(h.ZP, {
                                        className: E.cardIcon,
                                        type: u,
                                        flipped: a
                                    }),
                                    (0, s.jsx)(c.CardNumberElement, {
                                        options: {
                                            style: I,
                                            placeholder: A.intl.string(A.t.gPRHf3),
                                            disableLink: !1
                                        },
                                        className: D()
                                    })
                                ]
                            });
                        case 'cardExpiry':
                            return (0, s.jsx)(c.CardExpiryElement, {
                                options: {
                                    style: I,
                                    placeholder: A.intl.string(A.t.xeEWQ0)
                                },
                                className: D()
                            });
                        case 'cardCvc':
                            return (0, s.jsx)(c.CardCvcElement, {
                                options: {
                                    style: I,
                                    placeholder: A.intl.string(A.t.wZz04O)
                                },
                                className: D()
                            });
                    }
                })(),
                (0, s.jsx)(p.InputError, { error: g })
            ]
        })
    );
};
