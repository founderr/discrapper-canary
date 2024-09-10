n.d(t, {
    Z: function () {
        return f;
    },
    z: function () {
        return s;
    }
});
var l,
    s,
    i = n(735250);
n(470079);
var r = n(120356),
    a = n.n(r),
    o = n(481060),
    c = n(179840);
((l = s || (s = {})).INFO = 'info'), (l.WARNING = 'warning');
let d = {
        info: c.info,
        warning: c.warning
    },
    u = {
        info: o.CircleInformationIcon,
        warning: o.CircleWarningIcon
    };
function f(e) {
    let { children: t, className: n, look: l = 'info' } = e,
        s = u[l];
    return (0, i.jsxs)('div', {
        className: a()(c.root, n, d[l]),
        children: [
            (0, i.jsx)(s, {
                className: c.icon,
                color: 'currentColor'
            }),
            (0, i.jsx)(o.Text, {
                className: c.text,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: t
            })
        ]
    });
}
