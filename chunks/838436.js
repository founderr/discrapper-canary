t.d(s, {
    H: function () {
        return o;
    },
    U: function () {
        return l;
    }
});
var n = t(735250);
t(470079);
var a = t(481060),
    i = t(921801),
    r = t(5718);
function o(e) {
    let { header: s, description: t } = e;
    return (0, n.jsxs)('div', {
        className: r.header,
        children: [
            (0, n.jsx)(a.Heading, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: s
            }),
            (0, n.jsx)(a.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: t
            })
        ]
    });
}
function l(e) {
    let { setting: s, children: t } = e;
    return (0, n.jsx)(i.F, {
        setting: s,
        children: (0, n.jsx)('div', {
            className: r.container,
            children: t
        })
    });
}
