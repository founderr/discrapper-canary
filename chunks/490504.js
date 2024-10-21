var a = t(200651);
t(192379);
var s = t(481060),
    r = t(424963);
n.Z = function (e) {
    let { message: n } = e;
    return (0, a.jsxs)('div', {
        className: r.container,
        children: [
            (0, a.jsx)(s.CircleInformationIcon, {
                size: 'custom',
                className: r.icon,
                width: 20,
                height: 20,
                color: s.tokens.colors.TEXT_WARNING
            }),
            (0, a.jsx)(s.Text, {
                variant: 'text-sm/normal',
                color: 'header-muted',
                children: n
            })
        ]
    });
};
