r.d(n, {
    KF: function () {
        return h;
    },
    e4: function () {
        return _;
    },
    g5: function () {
        return p;
    },
    jy: function () {
        return i;
    }
});
var i,
    a = r(442837),
    s = r(592125),
    o = r(430824),
    l = r(496675),
    u = r(979651),
    c = r(782769),
    d = r(981631),
    f = r(388032);
function _(e) {
    let { channelId: n, ChannelStore: r, GuildStore: i, PermissionStore: a, VoiceStateStore: s } = e,
        o = r.getChannel(n);
    if (null == o) return 3;
    if (!(0, c.a)(o)) return 6;
    if (!o.isPrivate()) {
        let e = o.getGuildId();
        if (null == e) return 4;
        let r = i.getGuild(e);
        if ((null == r ? void 0 : r.afkChannelId) === o.id) return 5;
        let l = a.can(d.Plq.CONNECT, o);
        if (!a.can(d.Plq.USE_EMBEDDED_ACTIVITIES, o)) return 1;
        let u = s.getCurrentClientVoiceChannelId(o.getGuildId()) === n;
        if (o.isVocal() && !u && !l) return 2;
    }
    return 0;
}
!(function (e) {
    (e[(e.CAN_LAUNCH = 0)] = 'CAN_LAUNCH'), (e[(e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'), (e[(e.NO_CHANNEL_CONNECT_PERMISSION = 2)] = 'NO_CHANNEL_CONNECT_PERMISSION'), (e[(e.NO_CHANNEL = 3)] = 'NO_CHANNEL'), (e[(e.NO_GUILD = 4)] = 'NO_GUILD'), (e[(e.IS_AFK_CHANNEL = 5)] = 'IS_AFK_CHANNEL'), (e[(e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6)] = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS');
})(i || (i = {}));
function h(e) {
    return (0, a.e7)(
        [s.Z, o.Z, l.Z, u.Z],
        () =>
            _({
                channelId: e,
                ChannelStore: s.Z,
                GuildStore: o.Z,
                PermissionStore: l.Z,
                VoiceStateStore: u.Z
            }),
        [e]
    );
}
function p(e) {
    switch (e) {
        case 0:
            return f.intl.string(f.t.qJvTKS);
        case 1:
            return f.intl.string(f.t.hHGrW1);
        default:
            return f.intl.string(f.t.j29zCg);
    }
}
