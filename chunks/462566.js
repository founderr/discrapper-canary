t(47120);
var n,
    s,
    r = t(200651),
    l = t(192379),
    o = t(120356),
    i = t.n(o),
    c = t(481060),
    u = t(219929),
    d = t(594174),
    E = t(754103),
    _ = t(12464),
    A = t(689938),
    m = t(472000),
    N = t(251316);
((s = n || (n = {})).CARD_NUMBER = 'cardNumber'), (s.EXPIRATION_DATE = 'cardExpiry'), (s.CVC = 'cardCvc'), (s.NAME = 'name'), (s.COUNTRY = 'country'), (s.POSTAL_CODE = 'postalCode');
a.Z = function (e) {
    var a;
    let { onCardInfoChange: t, error: n } = e,
        s = l.useRef(t),
        [o, p] = l.useState(!1),
        [h, C] = l.useState({}),
        [I, T] = l.useState({
            name: '',
            country: '',
            postalCode: ''
        }),
        [P, S] = l.useState({}),
        [R, f] = l.useState({});
    function M(e, a) {
        !!h[e] !== a &&
            C((t) => ({
                ...t,
                [e]: a
            }));
    }
    let O = l.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                a = {};
            return (e || P.name) && '' === I.name && (a.name = A.Z.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED), a;
        },
        [P, I]
    );
    l.useEffect(() => {
        let e = h.cardNumber && h.cardExpiry && h.cardCvc && 0 === Object.keys(O(!0)).length;
        s.current({ name: I.name }, !!e);
    }, [h, I, O]);
    let b = {
            name: 'cardNumber',
            title: () => A.Z.Messages.CARD_NUMBER,
            getClassNameForLayout: () => N.width100,
            renderInput: () =>
                (0, r.jsx)(_.Z, {
                    stripeType: 'cardNumber',
                    flipped: o,
                    updateCompleted: (e) => M('cardNumber', e)
                })
        },
        y = {
            name: 'cardExpiry',
            title: () => A.Z.Messages.CREDIT_CARD_EXPIRATION_DATE,
            getClassNameForLayout: () => N.width50,
            renderInput: () =>
                (0, r.jsx)(_.Z, {
                    stripeType: 'cardExpiry',
                    updateCompleted: (e) => M('cardExpiry', e)
                })
        },
        g = {
            name: 'cardCvc',
            title: () => A.Z.Messages.CREDIT_CARD_CVC,
            getClassNameForLayout: () => N.width50,
            renderInput: () =>
                (0, r.jsx)(_.Z, {
                    stripeType: 'cardCvc',
                    updateCompleted: (e) => M('cardCvc', e),
                    onFocus: () => {
                        p(!0);
                    },
                    onBlur: () => {
                        p(!1);
                    }
                })
        },
        L = {
            id: 'card-name',
            name: 'name',
            title: () => A.Z.Messages.CREDIT_CARD_NAME_ON_CARD,
            autoComplete: 'cc-name',
            placeholder: () => A.Z.Messages.CREDIT_CARD_NAME,
            getClassNameForLayout: () => N.width100,
            renderInput: (e) => (0, r.jsx)(c.TextInput, { ...e })
        };
    return (0, r.jsxs)('div', {
        children: [
            (null === (a = d.default.getCurrentUser()) || void 0 === a ? void 0 : a.nsfwAllowed)
                ? (0, r.jsxs)('div', {
                      className: m.cardBrands,
                      children: [(0, r.jsx)('div', { className: i()(u.Uy.SMALL, m.visa, m.cardFormHeader) }), (0, r.jsx)('div', { className: i()(u.Uy.SMALL, m.mastercard, m.cardFormHeader) }), (0, r.jsx)('div', { className: i()(u.Uy.SMALL, m.discover, m.cardFormHeader) }), (0, r.jsx)('div', { className: i()(u.Uy.SMALL, m.amex, m.cardFormHeader) }), (0, r.jsx)('div', { className: i()(u.Uy.SMALL, m.jcb, m.cardFormHeader) }), (0, r.jsx)('div', { className: i()(u.Uy.SMALL, m.dinersclub, m.cardFormHeader) }), (0, r.jsx)('div', { className: i()(u.Uy.SMALL, m.unionpay, m.cardFormHeader) })]
                  })
                : (0, r.jsxs)('div', {
                      className: m.cardBrands,
                      children: [(0, r.jsx)('div', { className: i()(u.Uy.SMALL, m.visa_monochrome, m.cardFormHeader) }), (0, r.jsx)('div', { className: i()(u.Uy.SMALL, m.mastercard_monochrome, m.cardFormHeader) }), (0, r.jsx)('div', { className: i()(u.Uy.SMALL, m.discover_monochrome, m.cardFormHeader) }), (0, r.jsx)('div', { className: i()(u.Uy.SMALL, m.amex_monochrome, m.cardFormHeader) }), (0, r.jsx)('div', { className: i()(u.Uy.SMALL, m.jcb_monochrome, m.cardFormHeader) }), (0, r.jsx)('div', { className: i()(u.Uy.SMALL, m.dinersclub_monochrome, m.cardFormHeader) }), (0, r.jsx)('div', { className: i()(u.Uy.SMALL, m.unionpay_monochrome, m.cardFormHeader) })]
                  }),
            (0, r.jsx)(E.Z, {
                form: [
                    { fields: [b] },
                    {
                        fields: [y, g]
                    },
                    { fields: [L] }
                ],
                errors: R,
                formError: n,
                values: I,
                onFieldChange: function (e, a) {
                    if ('name' !== a && 'country' !== a && 'postalCode' !== a) return;
                    let t = { ...I },
                        n = { ...P },
                        s = { name: R.name };
                    !P[a] && '' !== e && (n[a] = !0), (t[a] = e), n[a] && '' === e ? 'name' === a && (s.name = A.Z.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED) : delete s[a], T(t), S(n), f(s);
                },
                onFieldBlur: function () {
                    f(O());
                }
            })
        ]
    });
};
