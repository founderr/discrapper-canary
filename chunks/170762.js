var r = n(200651);
n(192379);
var i = n(481060),
    a = n(921944),
    s = n(388032),
    o = n(359325);
t.Z = (e) => {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)('div', {
        className: o.wrapper,
        children: [
            (0, r.jsx)(i.HeartIcon, {
                size: 'md',
                color: 'currentColor',
                className: o.icon
            }),
            (0, r.jsx)('div', {
                className: o.content,
                children: (0, r.jsx)(i.Text, {
                    variant: 'text-xs/normal',
                    children: s.intl.string(s.t['xdRf6+'])
                })
            }),
            (0, r.jsx)(i.Clickable, {
                onClick: () => t(a.L.UNKNOWN),
                children: (0, r.jsx)(i.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: o.close
                })
            })
        ]
    });
};
