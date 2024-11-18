t.d(n, {
    Z: function () {
        return m;
    },
    z: function () {
        return i;
    }
});
var r,
    i,
    l = t(200651);
t(192379);
var s = t(120356),
    a = t.n(s),
    o = t(481060),
    c = t(505965);
((r = i || (i = {})).INFO = 'info'), (r.WARNING = 'warning');
let u = {
        info: c.info,
        warning: c.warning
    },
    d = {
        info: o.CircleInformationIcon,
        warning: o.CircleWarningIcon
    };
function m(e) {
    let { children: n, className: t, look: r = 'info' } = e,
        i = d[r];
    return (0, l.jsxs)('div', {
        className: a()(c.root, t, u[r]),
        children: [
            (0, l.jsx)(i, {
                className: c.icon,
                color: 'currentColor'
            }),
            (0, l.jsx)(o.Text, {
                className: c.text,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: n
            })
        ]
    });
}
