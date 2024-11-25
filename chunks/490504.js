var r = t(200651);
t(192379);
var i = t(481060),
    a = t(181076);
n.Z = function (e) {
    let { message: n } = e;
    return (0, r.jsxs)('div', {
        className: a.container,
        children: [
            (0, r.jsx)(i.CircleInformationIcon, {
                size: 'custom',
                className: a.icon,
                width: 20,
                height: 20,
                color: i.tokens.colors.TEXT_WARNING
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                color: 'header-muted',
                children: n
            })
        ]
    });
};
