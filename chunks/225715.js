n.d(t, {
    CW: function () {
        return c;
    },
    G9: function () {
        return f;
    },
    K9: function () {
        return E;
    },
    q$: function () {
        return h;
    },
    r0: function () {
        return d;
    },
    s$: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(41959),
    l = n(245561),
    u = n(893896);
let c = (e) => {
        let { application: t, asset: n, className: i, ...a } = e;
        return (0, r.jsx)(s.Z, {
            application: t,
            size: s.H.MEDIUM,
            asset: n,
            className: i,
            ...a
        });
    },
    d = (e) => {
        let { children: t, className: n, id: i, ...s } = e;
        return (0, r.jsx)(o.Heading, {
            className: a()(u.header, n),
            variant: 'heading-xl/extrabold',
            id: i,
            ...s,
            children: t
        });
    };
function _() {
    return (0, r.jsx)('hr', { className: u.divider });
}
let E = (e) => {
        let { className: t, title: n, description: i, ...a } = e;
        return (0, r.jsxs)('div', {
            className: t,
            ...a,
            children: [
                (0, r.jsx)(o.Heading, {
                    variant: 'heading-md/bold',
                    color: 'header-primary',
                    children: n
                }),
                (0, r.jsx)(o.Heading, {
                    variant: 'heading-sm/normal',
                    color: 'header-secondary',
                    children: i
                })
            ]
        });
    },
    f = (e) => {
        let { applicationId: t, storeListingBenefits: n, skuBenefits: i, className: o, ...s } = e;
        return (0, r.jsx)('div', {
            className: a()(u.benefitsContainer, o),
            ...s,
            children: (0, r.jsx)(l.GU, {
                applicationId: t,
                storeListingBenefits: n,
                skuBenefits: i,
                className: u.benefit
            })
        });
    },
    h = (e) => {
        let { children: t, className: n, ...i } = e;
        return (0, r.jsx)('div', {
            className: a()(u.container, n),
            ...i,
            children: t
        });
    };
