var i = n(735250), a = n(470079), s = n(481060), r = n(377171), l = n(689938), o = n(484779);
t.Z = a.forwardRef(function (e, t) {
    let {
        isInventory: n,
        style: a
    } = e;
    return (0, i.jsxs)('div', {
        ref: t,
        className: o.desktopTooltip,
        style: {
            marginTop: n ? 8 : 0,
            ...a
        },
        children: [
            (0, i.jsx)(s.CircleInformationIcon, {
                size: 'custom',
                className: o.infoIcon,
                height: n ? 16 : 12,
                width: n ? 16 : 12,
                color: n ? r.Z.TEXT_MUTED : r.Z.WHITE
            }),
            (0, i.jsx)(s.Text, {
                color: n ? 'text-muted' : 'always-white',
                variant: n ? 'text-xs/normal' : 'text-xxs/normal',
                children: l.Z.Messages.QUESTS_PROGRESS_WEB_TIP
            })
        ]
    });
});
