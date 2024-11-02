var r = n(200651),
    i = n(192379),
    a = n(996146),
    s = n(481060),
    o = n(100527),
    l = n(906732),
    u = n(963249),
    c = n(51144),
    d = n(443603),
    f = n(981631),
    _ = n(388032),
    h = n(703130);
t.Z = i.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: i } = (0, l.ZP)(o.Z.GIFT_BUTTON),
        p = (0, c.Ft)(n),
        { Component: m, events: g, play: E } = (0, a.$)();
    if (t) return null;
    let v = () => {
        (0, u.Z)({
            isGift: !0,
            giftRecipient: null === p ? void 0 : p,
            initialPlanId: null,
            analyticsLocations: i,
            analyticsObject: {
                page: n.isPrivate() ? f.ZY5.DM_CHANNEL : f.ZY5.GUILD_CHANNEL,
                section: f.jXE.CHANNEL_TEXT_AREA,
                object: f.qAy.BUTTON_ICON,
                objectType: f.Qqv.GIFT
            }
        });
    };
    return (0, r.jsx)(s.Tooltip, {
        text: _.intl.string(_.t.sWtWDQ),
        children: (e) =>
            (0, r.jsx)(d.Z, {
                ...e,
                innerClassName: h.button,
                isActive: !1,
                'aria-label': _.intl.string(_.t.Z1RnTk),
                'aria-haspopup': 'dialog',
                onClick: () => {
                    v(), E();
                },
                ...g,
                children: (0, r.jsx)(m, { color: 'currentColor' })
            })
    });
});
