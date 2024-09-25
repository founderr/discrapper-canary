var r = n(627341);
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(481060),
    u = n(169525),
    c = n(638384);
let d = (e) => {
    let { obscureReason: t, iconClassname: n } = e;
    return (0, s.EQ)(t)
        .with(u.wk.EXPLICIT_CONTENT, () =>
            (0, i.jsx)(l.ImageWarningIcon, {
                className: o()(n, c.obscuredIcon),
                color: 'white'
            })
        )
        .with(u.wk.SPOILER, () =>
            (0, i.jsx)(l.EyeIcon, {
                size: 'md',
                color: 'currentColor',
                className: n
            })
        )
        .otherwise(() => null);
};
t.Z = d;
