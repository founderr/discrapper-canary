var r = n(735250),
    i = n(470079),
    a = n(481060),
    o = n(377171),
    s = n(1494);
function l(e, t) {
    let { isInventory: n, style: i, children: l } = e;
    return (0, r.jsxs)('div', {
        ref: t,
        className: s.desktopTooltip,
        style: {
            marginTop: n ? 8 : 0,
            ...i
        },
        children: [
            (0, r.jsx)(a.CircleInformationIcon, {
                size: 'custom',
                className: s.infoIcon,
                height: n ? 16 : 12,
                width: n ? 16 : 12,
                color: n ? o.Z.TEXT_MUTED : o.Z.WHITE
            }),
            (0, r.jsx)(a.Text, {
                color: n ? 'text-muted' : 'always-white',
                variant: n ? 'text-xs/normal' : 'text-xxs/normal',
                children: l
            })
        ]
    });
}
t.Z = i.forwardRef(l);
