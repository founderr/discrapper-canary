n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(429551),
    o = n(939854);
function s(e) {
    let { start: t, end: n } = e,
        {
            elapsed: s,
            duration: l,
            percentage: u
        } = (0, a.Z)({
            start: t,
            end: n
        });
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: o.text,
                children: (0, a.m)(s)
            }),
            (0, r.jsx)('div', {
                className: o.bar,
                children: (0, r.jsx)('div', {
                    className: o.progress,
                    style: { width: ''.concat(100 * u, '%') }
                })
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: o.text,
                children: (0, a.m)(l)
            })
        ]
    });
}
