var i = n(200651);
n(192379);
var r = n(481060),
    s = n(388905),
    a = n(703656),
    l = n(63063),
    o = n(981631),
    c = n(388032),
    u = n(857018);
let d = () => (0, a.uL)(o.Z5c.LOGIN);
t.Z = (e) => {
    let { authBoxClassName: t, underageMessage: a } = e;
    return (0, i.jsxs)(s.ZP, {
        className: t,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: n(231443),
                className: u.img
            }),
            (0, i.jsx)(s.Dx, {
                className: u.title,
                children: c.intl.string(c.t.nCB6GR)
            }),
            (0, i.jsx)(s.DK, {
                className: u.subtitle,
                children: c.intl.format(c.t.b0QzXV, {
                    underageMessage: null != a ? a : c.intl.string(c.t.WqEH4O),
                    helpURL: l.Z.getArticleURL(o.BhN.AGE_GATE)
                })
            }),
            (0, i.jsx)(r.Button, {
                fullWidth: !0,
                onClick: d,
                children: c.intl.string(c.t.szzQ6O)
            })
        ]
    });
};
