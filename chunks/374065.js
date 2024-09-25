n.d(t, {
    KF: function () {
        return E;
    },
    e4: function () {
        return _;
    },
    g5: function () {
        return f;
    },
    jy: function () {
        return r;
    }
});
var r,
    i = n(442837),
    a = n(592125),
    o = n(430824),
    s = n(496675),
    l = n(979651),
    u = n(782769),
    c = n(981631),
    d = n(689938);
function _(e) {
    let { channelId: t, ChannelStore: n, GuildStore: r, PermissionStore: i, VoiceStateStore: a } = e,
        o = n.getChannel(t);
    if (null == o) return 3;
    if (!(0, u.a)(o)) return 6;
    if (!o.isPrivate()) {
        let e = o.getGuildId();
        if (null == e) return 4;
        let n = r.getGuild(e);
        if ((null == n ? void 0 : n.afkChannelId) === o.id) return 5;
        let s = i.can(c.Plq.CONNECT, o);
        if (!i.can(c.Plq.USE_EMBEDDED_ACTIVITIES, o)) return 1;
        let l = a.getCurrentClientVoiceChannelId(o.getGuildId()) === t;
        if (o.isVocal() && !l && !s) return 2;
    }
    return 0;
}
!(function (e) {
    (e[(e.CAN_LAUNCH = 0)] = 'CAN_LAUNCH'), (e[(e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'), (e[(e.NO_CHANNEL_CONNECT_PERMISSION = 2)] = 'NO_CHANNEL_CONNECT_PERMISSION'), (e[(e.NO_CHANNEL = 3)] = 'NO_CHANNEL'), (e[(e.NO_GUILD = 4)] = 'NO_GUILD'), (e[(e.IS_AFK_CHANNEL = 5)] = 'IS_AFK_CHANNEL'), (e[(e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6)] = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS');
})(r || (r = {}));
function E(e) {
    return (0, i.e7)(
        [a.Z, o.Z, s.Z, l.Z],
        () =>
            _({
                channelId: e,
                ChannelStore: a.Z,
                GuildStore: o.Z,
                PermissionStore: s.Z,
                VoiceStateStore: l.Z
            }),
        [e]
    );
}
function f(e) {
    switch (e) {
        case 0:
            return d.Z.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY;
        case 1:
            return d.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
        default:
            return d.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
    }
}
