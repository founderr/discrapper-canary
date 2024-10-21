t(47120);
var n,
    a = t(200651),
    i = t(192379),
    r = t(313201),
    o = t(622999),
    l = t(655868),
    c = t(754103),
    d = t(689938),
    _ = t(251316);
(n || (n = {})).EXPIRATION_DATE = 'expirationDate';
let u = [
    {
        fields: [
            {
                expirationDate: {
                    name: 'expirationDate',
                    id: (0, r.hQ)(),
                    title: () => d.Z.Messages.CREDIT_CARD_EXPIRATION_DATE,
                    autoComplete: 'cc-exp',
                    placeholder: () => d.Z.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER,
                    pattern: '\\d*',
                    getClassNameForLayout: () => _.width50,
                    renderInput: (e) => (0, a.jsx)(l.Z, { ...e })
                }
            }.expirationDate
        ]
    }
];
s.Z = function (e) {
    let { onCardInfoChange: s, className: t, expirationDate: n, error: r } = e,
        [l, _] = i.useState(!1),
        [E, T] = i.useState(null),
        [S, I] = i.useState(n);
    return (
        i.useEffect(() => {
            s({ expirationDate: S }, null === E);
        }, [S, s, E]),
        (0, a.jsx)(c.Z, {
            className: t,
            form: u,
            values: { expirationDate: S },
            errors: null != E ? { expirationDate: E } : {},
            formError: r,
            onFieldChange: (e) => {
                !l && '' !== e && _(!0), (l && '' === e) || !(0, o.eH)(e) ? T(d.Z.Messages.CREDIT_CARD_ERROR_EXPIRATION) : T(null), I(e);
            }
        })
    );
};
