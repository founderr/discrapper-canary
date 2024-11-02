n.d(t, {
    Z: function () {
        return m;
    },
    z: function () {
        return s;
    }
});
var i,
    s,
    r = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    o = n(481060),
    c = n(179840);
((i = s || (s = {})).INFO = 'info'), (i.WARNING = 'warning');
let d = {
        info: c.info,
        warning: c.warning
    },
    u = {
        info: o.CircleInformationIcon,
        warning: o.CircleWarningIcon
    };
function m(e) {
    let { children: t, className: n, look: i = 'info' } = e,
        s = u[i];
    return (0, r.jsxs)('div', {
        className: a()(c.root, n, d[i]),
        children: [
            (0, r.jsx)(s, {
                className: c.icon,
                color: 'currentColor'
            }),
            (0, r.jsx)(o.Text, {
                className: c.text,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: t
            })
        ]
    });
}
