var s = n(735250),
    a = n(470079),
    i = n(481060),
    o = n(377171),
    r = n(1494);
t.Z = a.forwardRef(function (e, t) {
    let { isInventory: n, style: a, children: l } = e;
    return (0, s.jsxs)('div', {
        ref: t,
        className: r.desktopTooltip,
        style: {
            marginTop: n ? 8 : 0,
            ...a
        },
        children: [
            (0, s.jsx)(i.CircleInformationIcon, {
                size: 'custom',
                className: r.infoIcon,
                height: n ? 16 : 12,
                width: n ? 16 : 12,
                color: n ? o.Z.TEXT_MUTED : o.Z.WHITE
            }),
            (0, s.jsx)(i.Text, {
                color: n ? 'text-muted' : 'always-white',
                variant: n ? 'text-xs/normal' : 'text-xxs/normal',
                children: l
            })
        ]
    });
});
