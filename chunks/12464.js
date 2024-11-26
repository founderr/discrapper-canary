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
        [_, y] = o.useState(!1),
        [b, P] = o.useState(!1),
        [C, g] = o.useState(null),
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
                !b && !e.empty && P(!0), null != r && r(e.complete), null != e.error && y(!1);
            },
            [b, r]
        ),
        R = o.useCallback(() => {
            y(!0), null == l || l();
        }, [l]),
        M = o.useCallback(() => {
            y(!1), null == i || i();
        }, [i]),
        O = o.useCallback(() => {
            if (null != S)
                switch (n) {
                    case 'cardNumber': {
                        let e = S.getElement(c.CardNumberElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            u !== e.brand && f(e.brand), e.empty && b ? g(A.intl.string(A.t.eOIfu7)) : null != e.error ? g(A.intl.string(A.t.x4pWtL)) : g(null), L(e);
                        }),
                            e.on('focus', R),
                            e.on('blur', M);
                        break;
                    }
                    case 'cardExpiry': {
                        let e = S.getElement(c.CardExpiryElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && b) ? g(A.intl.string(A.t['9/zZdn'])) : g(null), L(e);
                        }),
                            e.on('focus', R),
                            e.on('blur', M);
                        break;
                    }
                    case 'cardCvc': {
                        let e = S.getElement(c.CardCvcElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && b) ? g(A.intl.string(A.t.ro4isb)) : g(null), L(e);
                        }),
                            e.on('focus', R),
                            e.on('blur', M);
                    }
                }
        }, [M, L, R, u, S, b, n]);
    function D() {
        return d()(E.cardInput, {
            [E.cardInputError]: null !== C,
            [E.cardInputFocused]: _,
            [E.cardNumberInput]: 'cardNumber' === n
        });
    }
    return (
        o.useEffect(
            () => (
                O(),
                () => {
                    x();
                }
            ),
            [O, x]
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
                (0, s.jsx)(p.InputError, { error: C })
            ]
        })
    );
};
