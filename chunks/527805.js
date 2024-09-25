n.d(t, {
    Fw: function () {
        return r;
    },
    ZP: function () {
        return f;
    },
    s5: function () {
        return h;
    }
});
var r,
    i = n(442837),
    a = n(592125),
    o = n(430824),
    s = n(496675),
    l = n(594174),
    u = n(979651),
    c = n(934415),
    d = n(782769),
    _ = n(983695),
    E = n(981631);
function f(e) {
    var t, n, r;
    let { userId: i, activity: a, application: o, channelId: s, currentUser: l, isActivitiesEnabledForCurrentPlatform: u, ChannelStore: d, VoiceStateStore: f, PermissionStore: h, GuildStore: p } = e;
    if (null == i) return 8;
    if ((null == l ? void 0 : l.nsfwAllowed) === !1 && (null == o ? void 0 : null === (t = o.embeddedActivityConfig) || void 0 === t ? void 0 : t.requires_age_gate) === !0) return 7;
    if (!u) return 5;
    if (!(0, _.Z)(null == o ? void 0 : null === (n = o.embeddedActivityConfig) || void 0 === n ? void 0 : n.supported_platforms)) return 6;
    let m = null != s ? s : null === (r = f.getVoiceStateForSession(i, null == a ? void 0 : a.session_id)) || void 0 === r ? void 0 : r.channelId;
    if (null == m) return 4;
    let I = d.getChannel(s);
    if (null == I) return 4;
    let T = I.getGuildId();
    if (!I.isPrivate()) {
        if (null == T) return 10;
        let e = p.getGuild(T);
        if ((null == e ? void 0 : e.afkChannelId) === I.id) return 9;
        let t = f.getCurrentClientVoiceChannelId(I.getGuildId()) === m,
            n = (0, c.rY)(I, f, p),
            r = h.can(E.Plq.CONNECT, I);
        if (!h.can(E.Plq.USE_EMBEDDED_ACTIVITIES, I)) return 1;
        if (I.isVocal() && !t) {
            if (n) return 3;
            if (!r) return 2;
        }
    }
    return 0;
}
function h(e) {
    let { userId: t, activity: n, channelId: r, application: c } = e,
        _ = (0, d.z)(null != r ? r : void 0),
        E = (0, i.e7)([l.default], () => l.default.getCurrentUser());
    return (0, i.e7)(
        [a.Z, u.Z, s.Z, o.Z],
        () =>
            f({
                userId: t,
                activity: n,
                application: c,
                channelId: r,
                currentUser: E,
                isActivitiesEnabledForCurrentPlatform: _,
                ChannelStore: a.Z,
                VoiceStateStore: u.Z,
                PermissionStore: s.Z,
                GuildStore: o.Z
            }),
        [n, c, r, E, _, t]
    );
}
!(function (e) {
    (e[(e.CAN_JOIN = 0)] = 'CAN_JOIN'), (e[(e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'), (e[(e.NO_CHANNEL_CONNECT_PERMISSION = 2)] = 'NO_CHANNEL_CONNECT_PERMISSION'), (e[(e.CHANNEL_FULL = 3)] = 'CHANNEL_FULL'), (e[(e.NO_CHANNEL = 4)] = 'NO_CHANNEL'), (e[(e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5)] = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'), (e[(e.ACTIVITY_NOT_SUPPORTED_ON_OS = 6)] = 'ACTIVITY_NOT_SUPPORTED_ON_OS'), (e[(e.ACTIVITY_AGE_GATED = 7)] = 'ACTIVITY_AGE_GATED'), (e[(e.NO_USER = 8)] = 'NO_USER'), (e[(e.IS_AFK_CHANNEL = 9)] = 'IS_AFK_CHANNEL'), (e[(e.NO_GUILD = 10)] = 'NO_GUILD');
})(r || (r = {}));
