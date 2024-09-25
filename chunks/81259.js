n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(627341);
var s = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    r = n(278074),
    o = n(692547),
    l = n(481060),
    u = n(551556),
    d = n(923112);
let c = () =>
        (0, s.jsx)(u.Z, {
            width: 13,
            height: 13,
            backgroundColor: o.Z.colors.TEXT_POSITIVE.css
        }),
    E = () =>
        (0, s.jsx)(l.CircleXIcon, {
            size: 'custom',
            width: 13,
            height: 13,
            color: o.Z.colors.TEXT_DANGER.css
        }),
    _ = () =>
        (0, s.jsx)(l.CircleXIcon, {
            size: 'custom',
            width: 13,
            height: 13,
            color: o.Z.colors.TEXT_WARNING.css
        });
function m(e) {
    let t = (0, r.EQ)(e.type)
        .with('info', () => (0, s.jsx)(_, {}))
        .with('error', () => (0, s.jsx)(E, {}))
        .with('success', () => (0, s.jsx)(c, {}))
        .otherwise(() => null);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            t,
            (0, s.jsx)(l.Text, {
                variant: 'text-sm/medium',
                className: a()(d.formMessage, {
                    [d.formMessageNegative]: 'error' === e.type,
                    [d.formMessagePositive]: 'success' === e.type
                }),
                children: e.children
            })
        ]
    });
}
