n.d(t, {
    FJ: function () {
        return l;
    },
    HL: function () {
        return c;
    },
    Yc: function () {
        return d;
    },
    xe: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(834129),
    o = n(689938),
    s = n(286102);
function l(e) {
    let { message: t, compact: i, onClick: l } = e;
    return (0, r.jsx)(a.Z, {
        icon: n(508933),
        timestamp: t.timestamp,
        compact: i,
        contentClassName: s.messageContent,
        children: o.Z.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_DISQUALIFIED.format({ onClick: l })
    });
}
function u(e) {
    let { message: t, compact: i } = e;
    return (0, r.jsx)(a.Z, {
        icon: n(324606),
        timestamp: t.timestamp,
        compact: i,
        contentClassName: s.messageContent,
        children: o.Z.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_REQUALIFIED
    });
}
function c(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(a.Z, {
        iconNode: (0, r.jsx)(i.CircleWarningIcon, {
            size: 'custom',
            width: 20,
            height: 20,
            color: 'currentColor',
            className: s.alertIcon
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: s.messageContent,
        children: o.Z.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING
    });
}
function d(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(a.Z, {
        iconNode: (0, r.jsx)(i.CircleWarningIcon, {
            size: 'custom',
            width: 20,
            height: 20,
            color: 'currentColor',
            className: s.alertIcon
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: s.messageContent,
        children: o.Z.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING
    });
}
