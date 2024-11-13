var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    r = t(481060),
    s = t(246364),
    o = t(700833),
    c = t(388032),
    d = t(631403);
n.Z = function (e) {
    let { addFormField: n, guild: t } = e;
    return (0, i.jsxs)('div', {
        className: a()(d.spacingContainer, d.leftRailIconContainer, d.backgroundContainer),
        children: [
            (0, i.jsx)('div', {
                className: d.iconContainer,
                children: (0, i.jsx)(r.BookCheckIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 18,
                    height: 20,
                    className: d.icon
                })
            }),
            (0, i.jsxs)(r.FormSection, {
                children: [
                    (0, i.jsx)(r.FormTitle, {
                        tag: 'h3',
                        className: d.leftRailIconContainerTitle,
                        children: c.intl.string(c.t.qWqnws)
                    }),
                    (0, i.jsx)(r.FormText, {
                        className: d.leftRailIconContainerDescription,
                        type: r.FormText.Types.DESCRIPTION,
                        children: c.intl.string(c.t['3+rPkp'])
                    }),
                    (0, i.jsx)(r.Button, {
                        onClick: () => (0, o.Md)(s.QJ.TERMS, n, t),
                        children: c.intl.string(c.t['5AelkZ'])
                    })
                ]
            })
        ]
    });
};
