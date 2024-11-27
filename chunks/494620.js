t.d(n, {
    Z: function () {
        return f;
    },
    z: function () {
        return i;
    }
});
var r,
    i,
    l = t(200651);
t(192379);
var u = t(120356),
    o = t.n(u),
    a = t(481060),
    s = t(312403);
((r = i || (i = {})).INFO = 'info'), (r.WARNING = 'warning');
let c = {
        info: s.info,
        warning: s.warning
    },
    d = {
        info: a.CircleInformationIcon,
        warning: a.CircleWarningIcon
    };
function f(e) {
    let { children: n, className: t, look: r = 'info' } = e,
        i = d[r];
    return (0, l.jsxs)('div', {
        className: o()(s.root, t, c[r]),
        children: [
            (0, l.jsx)(i, {
                className: s.icon,
                color: 'currentColor'
            }),
            (0, l.jsx)(a.Text, {
                className: s.text,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: n
            })
        ]
    });
}
