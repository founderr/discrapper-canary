t.d(s, {
    Z: function () {
        return _;
    },
    z: function () {
        return a;
    }
});
var n,
    a,
    i = t(735250);
t(470079);
var r = t(120356),
    o = t.n(r),
    l = t(481060),
    c = t(151876);
((n = a || (a = {})).INFO = 'info'), (n.WARNING = 'warning');
let d = {
        info: c.info,
        warning: c.warning
    },
    u = {
        info: l.CircleInformationIcon,
        warning: l.CircleWarningIcon
    };
function _(e) {
    let { children: s, className: t, look: n = 'info' } = e,
        a = u[n];
    return (0, i.jsxs)('div', {
        className: o()(c.root, t, d[n]),
        children: [
            (0, i.jsx)(a, {
                className: c.icon,
                color: 'currentColor'
            }),
            (0, i.jsx)(l.Text, {
                className: c.text,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: s
            })
        ]
    });
}
