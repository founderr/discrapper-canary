a.r(s);
var o = a(735250);
a(470079);
var c = a(481060),
    n = a(287734),
    r = a(313201),
    t = a(471253),
    i = a(939863),
    d = a(689938),
    l = a(630489);
s.default = (e) => {
    let { channel: s, ...a } = e,
        I = (0, r.Dt)();
    return (0, o.jsxs)(c.ConfirmModal, {
        confirmText: d.Z.Messages.END_STAGE,
        cancelText: d.Z.Messages.CANCEL,
        onConfirm: () => {
            (0, t.NZ)(s), n.default.disconnect();
        },
        confirmButtonColor: c.Button.Colors.RED,
        bodyClassName: l.body,
        ...a,
        children: [
            (0, o.jsx)(i.Z, {
                className: l.headerIconContainer,
                children: (0, o.jsx)('div', {
                    className: l.iconBackground,
                    children: (0, o.jsx)(c.StageXIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 40,
                        height: 40,
                        className: l.headerIcon
                    })
                })
            }),
            (0, o.jsx)(c.Heading, {
                id: I,
                variant: 'heading-xl/semibold',
                color: 'header-primary',
                className: l.title,
                children: d.Z.Messages.END_EVENT_STAGE_CONFIRMATION_TITLE
            }),
            (0, o.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: l.subtitle,
                children: d.Z.Messages.END_EVENT_STAGE_CONFIRMATION_SUBTITLE
            })
        ]
    });
};
