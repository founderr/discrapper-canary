n(47120);
var a,
    r,
    l,
    s,
    i = n(200651),
    o = n(192379),
    c = n(734530),
    u = n(120356),
    d = n.n(u),
    p = n(692547),
    m = n(481060),
    h = n(219929),
    A = n(388032),
    E = n(919616),
    N = n(716722);
((l = a || (a = {})).CardNumber = 'cardNumber'), (l.CardExpiry = 'cardExpiry'), (l.CardCvc = 'cardCvc'), ((s = r || (r = {})).Change = 'change'), (s.Focus = 'focus'), (s.Blur = 'blur');
t.Z = function (e) {
    let t = o.useRef(null),
        { stripeType: n, flipped: a, updateCompleted: r, onFocus: l, onBlur: s } = e,
        [u, y] = o.useState(h.Qy.UNKNOWN),
        [f, P] = o.useState(!1),
        [_, b] = o.useState(!1),
        [g, C] = o.useState(null),
        [T, I] = o.useState({}),
        S = (0, c.useElements)(),
        { theme: v } = (0, m.useThemeContext)(),
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
        R = o.useCallback(
            (e) => {
                !_ && !e.empty && b(!0), null != r && r(e.complete), null != e.error && P(!1);
            },
            [_, r]
        ),
        L = o.useCallback(() => {
            P(!0), null == l || l();
        }, [l]),
        M = o.useCallback(() => {
            P(!1), null == s || s();
        }, [s]),
        O = o.useCallback(() => {
            if (null != S)
                switch (n) {
                    case 'cardNumber': {
                        let e = S.getElement(c.CardNumberElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            u !== e.brand && y(e.brand), e.empty && _ ? C(A.intl.string(A.t.eOIfu7)) : null != e.error ? C(A.intl.string(A.t.x4pWtL)) : C(null), R(e);
                        }),
                            e.on('focus', L),
                            e.on('blur', M);
                        break;
                    }
                    case 'cardExpiry': {
                        let e = S.getElement(c.CardExpiryElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && _) ? C(A.intl.string(A.t['9/zZdn'])) : C(null), R(e);
                        }),
                            e.on('focus', L),
                            e.on('blur', M);
                        break;
                    }
                    case 'cardCvc': {
                        let e = S.getElement(c.CardCvcElement);
                        if (null == e) return;
                        e.on('change', (e) => {
                            null != e.error || (e.empty && _) ? C(A.intl.string(A.t.ro4isb)) : C(null), R(e);
                        }),
                            e.on('focus', L),
                            e.on('blur', M);
                    }
                }
        }, [M, R, L, u, S, _, n]);
    function D() {
        return d()(E.cardInput, {
            [E.cardInputError]: null !== g,
            [E.cardInputFocused]: f,
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
                s = p.Z.colors.TEXT_PRIMARY.resolve({
                    theme: v,
                    saturation: 1
                }).hex();
            I({
                base: {
                    fontFamily: r,
                    fontWeight: l,
                    color: s,
                    fontSize: n.getPropertyValue('font-size'),
                    '::placeholder': { color: a.getPropertyValue('color') }
                }
            });
        }, [t, v]),
        (0, i.jsxs)('div', {
            className: d()(E.cardNumberWrapper),
            'data-stripe-type': n,
            children: [
                (0, i.jsx)('div', {
                    ref: t,
                    className: d()(E.hiddenDiv, N.input)
                }),
                (function () {
                    switch (n) {
                        case 'cardNumber':
                            return (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(h.ZP, {
                                        className: E.cardIcon,
                                        type: u,
                                        flipped: a
                                    }),
                                    (0, i.jsx)(c.CardNumberElement, {
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
                            return (0, i.jsx)(c.CardExpiryElement, {
                                options: {
                                    style: T,
                                    placeholder: A.intl.string(A.t.xeEWQ0)
                                },
                                className: D()
                            });
                        case 'cardCvc':
                            return (0, i.jsx)(c.CardCvcElement, {
                                options: {
                                    style: T,
                                    placeholder: A.intl.string(A.t.wZz04O)
                                },
                                className: D()
                            });
                    }
                })(),
                (0, i.jsx)(m.InputError, { error: g })
            ]
        })
    );
};
