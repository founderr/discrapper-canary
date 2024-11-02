e.r(t);
var i = e(200651);
e(192379);
var r = e(481060),
    l = e(287734),
    a = e(313201),
    o = e(471253),
    c = e(939863),
    s = e(388032),
    u = e(630489);
t.default = (n) => {
    let { channel: t, ...e } = n,
        d = (0, a.Dt)();
    return (0, i.jsxs)(r.ConfirmModal, {
        confirmText: s.intl.string(s.t.saZaRU),
        cancelText: s.intl.string(s.t['ETE/oK']),
        onConfirm: () => {
            (0, o.NZ)(t), l.default.disconnect();
        },
        confirmButtonColor: r.Button.Colors.RED,
        bodyClassName: u.body,
        ...e,
        children: [
            (0, i.jsx)(c.Z, {
                className: u.headerIconContainer,
                children: (0, i.jsx)('div', {
                    className: u.iconBackground,
                    children: (0, i.jsx)(r.StageXIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 40,
                        height: 40,
                        className: u.headerIcon
                    })
                })
            }),
            (0, i.jsx)(r.Heading, {
                id: d,
                variant: 'heading-xl/semibold',
                color: 'header-primary',
                className: u.title,
                children: s.intl.string(s.t.xrYNBA)
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: u.subtitle,
                children: s.intl.string(s.t.TP1D8v)
            })
        ]
    });
};
