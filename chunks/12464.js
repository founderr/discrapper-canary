n(47120);
var a,
    r,
    l,
    i,
    o = n(200651),
    s = n(192379),
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
    let t = s.useRef(null),
        { stripeType: n, flipped: a, updateCompleted: r, onFocus: l, onBlur: i } = e,
        [u, f] = s.useState(h.Qy.UNKNOWN),
        [y, _] = s.useState(!1),
        [P, b] = s.useState(!1),
        [g, C] = s.useState(null),
        [T, I] = s.useState({}),
        S = (0, c.useElements)(),
        { theme: v } = (0, p.useThemeContext)(),
        x = s.useCallback(() => {
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
        R = s.useCallback(
            (e) => {
                !P && !e.empty && b(!0), null != r && r(e.complete), null != e.error && _(!1);
            },
            [P, r]
        ),
        L = s.useCallback(() => {
            _(!0), null == l || l();
        }, [l]),
        M = s.useCallback(() => {
            _(!1), null == i || i();
        }, [i]),
        O = s.useCallback(() => {
            if (null != S)
                switch (n) {
                    case 'cardNumber': {
                        let e = S.getElement(c.CardNumberElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            u !== e.brand && f(e.brand), e.empty && P ? C(A.intl.string(A.t.eOIfu7)) : null != e.error ? C(A.intl.string(A.t.x4pWtL)) : C(null), R(e);
                        }),
                            e.on('focus', L),
                            e.on('blur', M);
                        break;
                    }
                    case 'cardExpiry': {
                        let e = S.getElement(c.CardExpiryElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && P) ? C(A.intl.string(A.t['9/zZdn'])) : C(null), R(e);
                        }),
                            e.on('focus', L),
                            e.on('blur', M);
                        break;
                    }
                    case 'cardCvc': {
                        let e = S.getElement(c.CardCvcElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && P) ? C(A.intl.string(A.t.ro4isb)) : C(null), R(e);
                        }),
                            e.on('focus', L),
                            e.on('blur', M);
                    }
                }
        }, [M, R, L, u, S, P, n]);
    function D() {
        return d()(E.cardInput, {
            [E.cardInputError]: null !== g,
            [E.cardInputFocused]: y,
            [E.cardNumberInput]: 'cardNumber' === n
        });
    }
    return (
        s.useEffect(
            () => (
                O(),
                () => {
                    x();
                }
            ),
            [O, x]
        ),
        s.useLayoutEffect(() => {
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
            I({
                base: {
                    fontFamily: r,
                    fontWeight: l,
                    color: i,
                    fontSize: n.getPropertyValue('font-size'),
                    '::placeholder': { color: a.getPropertyValue('color') }
                }
            });
        }, [t, v]),
        (0, o.jsxs)('div', {
            className: d()(E.cardNumberWrapper),
            'data-stripe-type': n,
            children: [
                (0, o.jsx)('div', {
                    ref: t,
                    className: d()(E.hiddenDiv, N.input)
                }),
                (function () {
                    switch (n) {
                        case 'cardNumber':
                            return (0, o.jsxs)('div', {
                                children: [
                                    (0, o.jsx)(h.ZP, {
                                        className: E.cardIcon,
                                        type: u,
                                        flipped: a
                                    }),
                                    (0, o.jsx)(c.CardNumberElement, {
                                        options: {
                                            style: T,
                                            placeholder: A.intl.string(A.t.gPRHf3),
                                            disableLink: !1
                                        },
                                        className: D()
                                    })
                                ]
                            });
                        case 'cardExpiry':
                            return (0, o.jsx)(c.CardExpiryElement, {
                                options: {
                                    style: T,
                                    placeholder: A.intl.string(A.t.xeEWQ0)
                                },
                                className: D()
                            });
                        case 'cardCvc':
                            return (0, o.jsx)(c.CardCvcElement, {
                                options: {
                                    style: T,
                                    placeholder: A.intl.string(A.t.wZz04O)
                                },
                                className: D()
                            });
                    }
                })(),
                (0, o.jsx)(p.InputError, { error: g })
            ]
        })
    );
};
