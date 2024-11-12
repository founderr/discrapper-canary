n.d(t, {
    Z: function () {
        return f;
    },
    z: function () {
        return i;
    }
});
var r,
    i,
    o = n(200651);
n(192379);
var a = n(120356),
    s = n.n(a),
    l = n(481060),
    c = n(179840);
((r = i || (i = {})).INFO = 'info'), (r.WARNING = 'warning');
let d = {
        info: c.info,
        warning: c.warning
    },
    u = {
        info: l.CircleInformationIcon,
        warning: l.CircleWarningIcon
    };
function f(e) {
    let { children: t, className: n, look: r = 'info' } = e,
        i = u[r];
    return (0, o.jsxs)('div', {
        className: s()(c.root, n, d[r]),
        children: [
            (0, o.jsx)(i, {
                className: c.icon,
                color: 'currentColor'
            }),
            (0, o.jsx)(l.Text, {
                className: c.text,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: t
            })
        ]
    });
}
