var r = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    s = t(481060),
    o = t(246364),
    l = t(700833),
    c = t(388032),
    d = t(631403);
n.Z = function (e) {
    let { addFormField: n, guild: t } = e;
    return (0, r.jsxs)('div', {
        className: i()(d.spacingContainer, d.leftRailIconContainer, d.backgroundContainer),
        children: [
            (0, r.jsx)('div', {
                className: d.iconContainer,
                children: (0, r.jsx)(s.BookCheckIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 18,
                    height: 20,
                    className: d.icon
                })
            }),
            (0, r.jsxs)(s.FormSection, {
                children: [
                    (0, r.jsx)(s.FormTitle, {
                        tag: 'h3',
                        className: d.leftRailIconContainerTitle,
                        children: c.intl.string(c.t.qWqnws)
                    }),
                    (0, r.jsx)(s.FormText, {
                        className: d.leftRailIconContainerDescription,
                        type: s.FormText.Types.DESCRIPTION,
                        children: c.intl.string(c.t['3+rPkp'])
                    }),
                    (0, r.jsx)(s.Button, {
                        onClick: () => (0, l.Md)(o.QJ.TERMS, n, t),
                        children: c.intl.string(c.t['5AelkZ'])
                    })
                ]
            })
        ]
    });
};
