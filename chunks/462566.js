n(47120);
var a,
    r,
    l = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(481060),
    u = n(219929),
    d = n(594174),
    m = n(754103),
    p = n(12464),
    h = n(388032),
    A = n(472000),
    E = n(251316);
((r = a || (a = {})).CARD_NUMBER = 'cardNumber'), (r.EXPIRATION_DATE = 'cardExpiry'), (r.CVC = 'cardCvc'), (r.NAME = 'name'), (r.COUNTRY = 'country'), (r.POSTAL_CODE = 'postalCode');
t.Z = function (e) {
    var t;
    let { onCardInfoChange: n, error: a } = e,
        r = i.useRef(n),
        [s, N] = i.useState(!1),
        [f, b] = i.useState({}),
        [_, y] = i.useState({
            name: '',
            country: '',
            postalCode: ''
        }),
        [P, g] = i.useState({}),
        [C, T] = i.useState({});
    function I(e, t) {
        !!f[e] !== t &&
            b((n) => ({
                ...n,
                [e]: t
            }));
    }
    let S = i.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || P.name) && '' === _.name && (t.name = h.intl.string(h.t.lIkVsr)), t;
        },
        [P, _]
    );
    i.useEffect(() => {
        let e = f.cardNumber && f.cardExpiry && f.cardCvc && 0 === Object.keys(S(!0)).length;
        r.current({ name: _.name }, !!e);
    }, [f, _, S]);
    let v = {
            name: 'cardNumber',
            title: () => h.intl.string(h.t.cVyJ3t),
            getClassNameForLayout: () => E.width100,
            renderInput: () =>
                (0, l.jsx)(p.Z, {
                    stripeType: 'cardNumber',
                    flipped: s,
                    updateCompleted: (e) => I('cardNumber', e)
                })
        },
        x = {
            name: 'cardExpiry',
            title: () => h.intl.string(h.t['CeBa//']),
            getClassNameForLayout: () => E.width50,
            renderInput: () =>
                (0, l.jsx)(p.Z, {
                    stripeType: 'cardExpiry',
                    updateCompleted: (e) => I('cardExpiry', e)
                })
        },
        L = {
            name: 'cardCvc',
            title: () => h.intl.string(h.t.Fd3rOz),
            getClassNameForLayout: () => E.width50,
            renderInput: () =>
                (0, l.jsx)(p.Z, {
                    stripeType: 'cardCvc',
                    updateCompleted: (e) => I('cardCvc', e),
                    onFocus: () => {
                        N(!0);
                    },
                    onBlur: () => {
                        N(!1);
                    }
                })
        },
        R = {
            id: 'card-name',
            name: 'name',
            title: () => h.intl.string(h.t.VUlFdX),
            autoComplete: 'cc-name',
            placeholder: () => h.intl.string(h.t.yf7ms7),
            getClassNameForLayout: () => E.width100,
            renderInput: (e) => (0, l.jsx)(c.TextInput, { ...e })
        };
    return (0, l.jsxs)('div', {
        children: [
            (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed)
                ? (0, l.jsxs)('div', {
                      className: A.cardBrands,
                      children: [(0, l.jsx)('div', { className: o()(u.Uy.SMALL, A.visa, A.cardFormHeader) }), (0, l.jsx)('div', { className: o()(u.Uy.SMALL, A.mastercard, A.cardFormHeader) }), (0, l.jsx)('div', { className: o()(u.Uy.SMALL, A.discover, A.cardFormHeader) }), (0, l.jsx)('div', { className: o()(u.Uy.SMALL, A.amex, A.cardFormHeader) }), (0, l.jsx)('div', { className: o()(u.Uy.SMALL, A.jcb, A.cardFormHeader) }), (0, l.jsx)('div', { className: o()(u.Uy.SMALL, A.dinersclub, A.cardFormHeader) }), (0, l.jsx)('div', { className: o()(u.Uy.SMALL, A.unionpay, A.cardFormHeader) })]
                  })
                : (0, l.jsxs)('div', {
                      className: A.cardBrands,
                      children: [(0, l.jsx)('div', { className: o()(u.Uy.SMALL, A.visa_monochrome, A.cardFormHeader) }), (0, l.jsx)('div', { className: o()(u.Uy.SMALL, A.mastercard_monochrome, A.cardFormHeader) }), (0, l.jsx)('div', { className: o()(u.Uy.SMALL, A.discover_monochrome, A.cardFormHeader) }), (0, l.jsx)('div', { className: o()(u.Uy.SMALL, A.amex_monochrome, A.cardFormHeader) }), (0, l.jsx)('div', { className: o()(u.Uy.SMALL, A.jcb_monochrome, A.cardFormHeader) }), (0, l.jsx)('div', { className: o()(u.Uy.SMALL, A.dinersclub_monochrome, A.cardFormHeader) }), (0, l.jsx)('div', { className: o()(u.Uy.SMALL, A.unionpay_monochrome, A.cardFormHeader) })]
                  }),
            (0, l.jsx)(m.Z, {
                form: [
                    { fields: [v] },
                    {
                        fields: [x, L]
                    },
                    { fields: [R] }
                ],
                errors: C,
                formError: a,
                values: _,
                onFieldChange: function (e, t) {
                    if ('name' !== t && 'country' !== t && 'postalCode' !== t) return;
                    let n = { ..._ },
                        a = { ...P },
                        r = { name: C.name };
                    !P[t] && '' !== e && (a[t] = !0), (n[t] = e), a[t] && '' === e ? 'name' === t && (r.name = h.intl.string(h.t.lIkVsr)) : delete r[t], y(n), g(a), T(r);
                },
                onFieldBlur: function () {
                    T(S());
                }
            })
        ]
    });
};
