var i = n(200651);
n(192379);
var l = n(481060),
    r = n(493683),
    a = n(599059),
    s = n(933557),
    o = n(210975),
    c = n(981631),
    u = n(388032),
    d = n(116875);
t.Z = (e) => {
    let { channel: t } = e,
        n = (0, s.ZP)(t),
        h = (0, o.m$)({
            channelId: t.id,
            location: 'ChannelName'
        });
    return (0, i.jsxs)('div', {
        className: d.container,
        onDoubleClick: (e) => e.stopPropagation(),
        children: [
            (0, i.jsx)(a.Z, {
                minLen: 1,
                maxLen: c.HN8,
                className: d.channelName,
                name: 'channel_name',
                autoComplete: 'off',
                value: null != n ? n : '',
                onBlur: (e) => {
                    n !== e.currentTarget.value && r.Z.setName(t.id, e.currentTarget.value);
                }
            }),
            h &&
                (0, i.jsx)(l.Tooltip, {
                    text: u.intl.string(u.t.QyZ4TU),
                    children: (e) =>
                        (0, i.jsx)(l.ShieldLockIcon, {
                            ...e,
                            size: 'xs',
                            'aria-label': u.intl.string(u.t.VHXh8f),
                            color: l.tokens.colors.INTERACTIVE_NORMAL
                        })
                })
        ]
    });
};
