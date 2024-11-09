n(47120);
var i,
    s = n(200651),
    r = n(192379),
    l = n(313201),
    a = n(622999),
    o = n(655868),
    c = n(754103),
    d = n(388032),
    u = n(251316);
(i || (i = {})).EXPIRATION_DATE = 'expirationDate';
let m = [
    {
        fields: [
            {
                expirationDate: {
                    name: 'expirationDate',
                    id: (0, l.hQ)(),
                    title: () => d.intl.string(d.t['CeBa//']),
                    autoComplete: 'cc-exp',
                    placeholder: () => d.intl.string(d.t.xeEWQ0),
                    pattern: '\\d*',
                    getClassNameForLayout: () => u.width50,
                    renderInput: (e) => (0, s.jsx)(o.Z, { ...e })
                }
            }.expirationDate
        ]
    }
];
t.Z = function (e) {
    let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
        [o, u] = r.useState(!1),
        [h, g] = r.useState(null),
        [p, x] = r.useState(i);
    return (
        r.useEffect(() => {
            t({ expirationDate: p }, null === h);
        }, [p, t, h]),
        (0, s.jsx)(c.Z, {
            className: n,
            form: m,
            values: { expirationDate: p },
            errors: null != h ? { expirationDate: h } : {},
            formError: l,
            onFieldChange: (e) => {
                !o && '' !== e && u(!0), (o && '' === e) || !(0, a.eH)(e) ? g(d.intl.string(d.t['9/zZdn'])) : g(null), x(e);
            }
        })
    );
};
