t.d(n, {
    Z: function () {
        return r;
    }
});
var s = t(735250);
t(470079);
var a = t(481060),
    l = t(689938),
    i = t(701424);
function r(e) {
    let { sendStartNotification: n, setSendStartNotification: t } = e,
        r = n ? l.Z.Messages.GUILD_NOTIFY_MEMBERS_ENABLED_NEW : l.Z.Messages.GUILD_NOTIFY_MEMBERS_DISABLED_NEW;
    return (0, s.jsx)('div', {
        className: i.notificationToggle,
        children: (0, s.jsx)(a.Checkbox, {
            type: a.Checkbox.Types.INVERTED,
            size: 14,
            className: i.__invalid_checkbox,
            value: n,
            onChange: function () {
                t(!n);
            },
            children: (0, s.jsx)(a.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: (0, s.jsx)(a.Tooltip, {
                    position: 'bottom',
                    tooltipClassName: i.tooltip,
                    text: l.Z.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                    'aria-label': l.Z.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                    children: (e) =>
                        (0, s.jsx)('span', {
                            ...e,
                            children: r
                        })
                })
            })
        })
    });
}
