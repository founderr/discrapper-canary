r.d(n, {
    Fw: function () {
        return i;
    },
    ZP: function () {
        return p;
    },
    s5: function () {
        return m;
    }
});
var i,
    a = r(442837),
    s = r(592125),
    o = r(430824),
    l = r(496675),
    u = r(594174),
    c = r(979651),
    d = r(934415),
    f = r(782769),
    _ = r(983695),
    h = r(981631);
function p(e) {
    var n, r, i;
    let { userId: a, activity: s, application: o, channelId: l, currentUser: u, isActivitiesEnabledForCurrentPlatform: c, ChannelStore: f, VoiceStateStore: p, PermissionStore: m, GuildStore: g } = e;
    if (null == a) return 8;
    if ((null == u ? void 0 : u.nsfwAllowed) === !1 && (null == o ? void 0 : null === (n = o.embeddedActivityConfig) || void 0 === n ? void 0 : n.requires_age_gate) === !0) return 7;
    if (!c) return 5;
    if (!(0, _.Z)(null == o ? void 0 : null === (r = o.embeddedActivityConfig) || void 0 === r ? void 0 : r.supported_platforms)) return 6;
    let E = null != l ? l : null === (i = p.getVoiceStateForSession(a, null == s ? void 0 : s.session_id)) || void 0 === i ? void 0 : i.channelId;
    if (null == E) return 4;
    let v = f.getChannel(l);
    if (null == v) return 4;
    let I = v.getGuildId();
    if (!v.isPrivate()) {
        if (null == I) return 10;
        let e = g.getGuild(I);
        if ((null == e ? void 0 : e.afkChannelId) === v.id) return 9;
        let n = p.getCurrentClientVoiceChannelId(v.getGuildId()) === E,
            r = (0, d.rY)(v, p, g),
            i = m.can(h.Plq.CONNECT, v);
        if (!m.can(h.Plq.USE_EMBEDDED_ACTIVITIES, v)) return 1;
        if (v.isVocal() && !n) {
            if (r) return 3;
            if (!i) return 2;
        }
    }
    return 0;
}
function m(e) {
    let { userId: n, activity: r, channelId: i, application: d } = e,
        _ = (0, f.z)(null != i ? i : void 0),
        h = (0, a.e7)([u.default], () => u.default.getCurrentUser());
    return (0, a.e7)(
        [s.Z, c.Z, l.Z, o.Z],
        () =>
            p({
                userId: n,
                activity: r,
                application: d,
                channelId: i,
                currentUser: h,
                isActivitiesEnabledForCurrentPlatform: _,
                ChannelStore: s.Z,
                VoiceStateStore: c.Z,
                PermissionStore: l.Z,
                GuildStore: o.Z
            }),
        [r, d, i, h, _, n]
    );
}
!(function (e) {
    (e[(e.CAN_JOIN = 0)] = 'CAN_JOIN'), (e[(e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'), (e[(e.NO_CHANNEL_CONNECT_PERMISSION = 2)] = 'NO_CHANNEL_CONNECT_PERMISSION'), (e[(e.CHANNEL_FULL = 3)] = 'CHANNEL_FULL'), (e[(e.NO_CHANNEL = 4)] = 'NO_CHANNEL'), (e[(e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5)] = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'), (e[(e.ACTIVITY_NOT_SUPPORTED_ON_OS = 6)] = 'ACTIVITY_NOT_SUPPORTED_ON_OS'), (e[(e.ACTIVITY_AGE_GATED = 7)] = 'ACTIVITY_AGE_GATED'), (e[(e.NO_USER = 8)] = 'NO_USER'), (e[(e.IS_AFK_CHANNEL = 9)] = 'IS_AFK_CHANNEL'), (e[(e.NO_GUILD = 10)] = 'NO_GUILD');
})(i || (i = {}));
