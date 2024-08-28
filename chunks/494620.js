t.d(n, {
    Z: function () {
        return m;
    },
    z: function () {
        return s;
    }
});
var l,
    s,
    a = t(735250);
t(470079);
var r = t(120356),
    i = t.n(r),
    o = t(481060),
    u = t(151876);
((l = s || (s = {})).INFO = 'info'), (l.WARNING = 'warning');
let c = {
        info: u.info,
        warning: u.warning
    },
    d = {
        info: o.CircleInformationIcon,
        warning: o.CircleWarningIcon
    };
function m(e) {
    let { children: n, className: t, look: l = 'info' } = e,
        s = d[l];
    return (0, a.jsxs)('div', {
        className: i()(u.root, t, c[l]),
        children: [
            (0, a.jsx)(s, {
                className: u.icon,
                color: 'currentColor'
            }),
            (0, a.jsx)(o.Text, {
                className: u.text,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: n
            })
        ]
    });
}
