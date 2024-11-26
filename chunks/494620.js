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
    l = n.n(a),
    s = n(481060),
    u = n(312403);
((r = i || (i = {})).INFO = 'info'), (r.WARNING = 'warning');
let c = {
        info: u.info,
        warning: u.warning
    },
    d = {
        info: s.CircleInformationIcon,
        warning: s.CircleWarningIcon
    };
function f(e) {
    let { children: t, className: n, look: r = 'info' } = e,
        i = d[r];
    return (0, o.jsxs)('div', {
        className: l()(u.root, n, c[r]),
        children: [
            (0, o.jsx)(i, {
                className: u.icon,
                color: 'currentColor'
            }),
            (0, o.jsx)(s.Text, {
                className: u.text,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: t
            })
        ]
    });
}
