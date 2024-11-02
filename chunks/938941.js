n.d(t, {
    Dw: function () {
        return c;
    },
    RM: function () {
        return f;
    },
    SC: function () {
        return d;
    },
    iA: function () {
        return h;
    },
    pj: function () {
        return u;
    },
    xD: function () {
        return _;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(150438),
    s = n(993365),
    o = n(481060),
    l = n(59760);
function u(e) {
    return (0, r.jsx)(a.bL, {
        ...e,
        className: l.cell
    });
}
function c(e) {
    let { children: t, ...n } = e;
    return (0, r.jsx)(a.sg, {
        ...n,
        className: l.column,
        children: (0, r.jsx)(s.x, {
            variant: 'eyebrow',
            className: l.columnText,
            children: t
        })
    });
}
function d(e) {
    return (0, r.jsx)(a.X2, {
        ...e,
        className: l.row
    });
}
function f(e) {
    return (0, r.jsx)(a.RM, {
        ...e,
        className: l.body
    });
}
function _(e) {
    return (0, r.jsx)(a.xD, {
        ...e,
        className: l.header
    });
}
function h(e) {
    let { title: t, header: n, footer: s, ...u } = e,
        c = i.useId();
    return (0, r.jsxs)('div', {
        className: l.container,
        children: [
            (0, r.jsxs)('div', {
                className: l.toolbar,
                children: [
                    (0, r.jsx)(o.Heading, {
                        className: l.__invalid_title,
                        variant: 'heading-md/semibold',
                        id: c,
                        children: t
                    }),
                    (0, r.jsx)('div', { children: n })
                ]
            }),
            (0, r.jsx)(a.iA, {
                ...u,
                'aria-labelledby': c,
                className: l.table
            }),
            null != s &&
                (0, r.jsx)('div', {
                    className: l.footer,
                    children: s
                })
        ]
    });
}
