n.d(t, {
    FJ: function () {
        return o;
    },
    HL: function () {
        return u;
    },
    Yc: function () {
        return d;
    },
    xe: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    s = n(834129),
    r = n(689938),
    l = n(286102);
function o(e) {
    let { message: t, compact: a, onClick: o } = e;
    return (0, i.jsx)(s.Z, {
        icon: n(508933),
        timestamp: t.timestamp,
        compact: a,
        contentClassName: l.messageContent,
        children: r.Z.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_DISQUALIFIED.format({ onClick: o })
    });
}
function c(e) {
    let { message: t, compact: a } = e;
    return (0, i.jsx)(s.Z, {
        icon: n(324606),
        timestamp: t.timestamp,
        compact: a,
        contentClassName: l.messageContent,
        children: r.Z.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_REQUALIFIED
    });
}
function u(e) {
    let { message: t, compact: n } = e;
    return (0, i.jsx)(s.Z, {
        iconNode: (0, i.jsx)(a.CircleWarningIcon, {
            size: 'custom',
            width: 20,
            height: 20,
            color: 'currentColor',
            className: l.alertIcon
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: l.messageContent,
        children: r.Z.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING
    });
}
function d(e) {
    let { message: t, compact: n } = e;
    return (0, i.jsx)(s.Z, {
        iconNode: (0, i.jsx)(a.CircleWarningIcon, {
            size: 'custom',
            width: 20,
            height: 20,
            color: 'currentColor',
            className: l.alertIcon
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: l.messageContent,
        children: r.Z.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING
    });
}
