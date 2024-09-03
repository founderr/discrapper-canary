t.d(s, {
    H: function () {
        return c;
    },
    U: function () {
        return d;
    }
});
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(921801),
    l = t(5718);
function c(e) {
    let { header: s, description: t, relatedId: a, disabled: o } = e;
    return (0, n.jsxs)('div', {
        className: l.header,
        children: [
            (0, n.jsx)(r.Heading, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: (0, n.jsx)('label', {
                    htmlFor: a,
                    className: i()(l.title, { [l.disabled]: o }),
                    children: s
                })
            }),
            (0, n.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                className: i()(l.description, { [l.disabled]: o }),
                children: t
            })
        ]
    });
}
function d(e) {
    let { setting: s, className: t, children: a } = e;
    return (0, n.jsx)(o.F, {
        setting: s,
        children: (0, n.jsx)('div', {
            className: i()(l.container, t),
            children: a
        })
    });
}
