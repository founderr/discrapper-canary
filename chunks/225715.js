t.d(n, {
    CW: function () {
        return u;
    },
    G9: function () {
        return x;
    },
    K9: function () {
        return f;
    },
    q$: function () {
        return h;
    },
    r0: function () {
        return d;
    },
    s$: function () {
        return m;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    a = t(481060),
    s = t(41959),
    o = t(245561),
    c = t(53787);
let u = (e) => {
        let { application: n, asset: t, className: r, ...l } = e;
        return (0, i.jsx)(s.Z, {
            application: n,
            size: s.H.MEDIUM,
            asset: t,
            className: r,
            ...l
        });
    },
    d = (e) => {
        let { children: n, className: t, id: r, ...s } = e;
        return (0, i.jsx)(a.Heading, {
            className: l()(c.header, t),
            variant: 'heading-xl/extrabold',
            id: r,
            ...s,
            children: n
        });
    };
function m() {
    return (0, i.jsx)('hr', { className: c.divider });
}
let f = (e) => {
        let { className: n, title: t, description: r, ...l } = e;
        return (0, i.jsxs)('div', {
            className: n,
            ...l,
            children: [
                (0, i.jsx)(a.Heading, {
                    variant: 'heading-md/bold',
                    color: 'header-primary',
                    children: t
                }),
                (0, i.jsx)(a.Heading, {
                    variant: 'heading-sm/normal',
                    color: 'header-secondary',
                    children: r
                })
            ]
        });
    },
    x = (e) => {
        let { applicationId: n, storeListingBenefits: t, skuBenefits: r, className: a, ...s } = e;
        return (0, i.jsx)('div', {
            className: l()(c.benefitsContainer, a),
            ...s,
            children: (0, i.jsx)(o.GU, {
                applicationId: n,
                storeListingBenefits: t,
                skuBenefits: r,
                className: c.benefit
            })
        });
    },
    h = (e) => {
        let { children: n, className: t, ...r } = e;
        return (0, i.jsx)('div', {
            className: l()(c.container, t),
            ...r,
            children: n
        });
    };
