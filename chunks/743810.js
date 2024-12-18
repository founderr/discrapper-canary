e.d(t, {
    Nv: function () {
        return f;
    },
    pd: function () {
        return S;
    },
    uX: function () {
        return _;
    },
    wk: function () {
        return p;
    }
});
var i = e(350483),
    o = e(220444),
    r = e(905423),
    l = e(131704),
    d = e(592125),
    s = e(306680),
    u = e(944486),
    a = e(9156),
    c = e(981631),
    E = e(490897);
let C = (n, t) => {
        let e = d.Z.getChannel(t);
        return null != e && ((0, l.hv)(e.type) || c.TPd.GUILD_VOCAL.has(e.type) ? s.ZP.getMentionCount(t) > 0 || u.Z.getVoiceChannelId() === t : (!a.ZP.isChannelMuted(n, t) || s.ZP.getMentionCount(t) > 0) && (0, o.d)(e));
    },
    b = (n, t) => {
        if (t === E.W.GUILD_EVENT) return !a.ZP.isMuteScheduledEventsEnabled(n) && s.ZP.hasUnread(n, t);
        return s.ZP.hasUnread(n, t);
    },
    A = (n, t) => {
        let e = d.Z.getChannel(t);
        return !!(null != e && c.TPd.GUILD_VOCAL.has(e.type)) && (!!(s.ZP.getMentionCount(t) > 0) || (u.Z.getVoiceChannelId() === t && s.ZP.getUnreadCount(t) > 0));
    },
    S = {
        binds: ['alt+shift+down'],
        comboKeysBindGlobal: !0,
        action() {
            var n;
            let t = null !== (n = r.Z.getState().guildId) && void 0 !== n ? n : c.ME;
            return (
                (0, i.Z)(1, {
                    channelPredicate: C,
                    guildPredicate: (n) => n === t || !a.ZP.isMuted(n),
                    guildFeaturePredicate: b,
                    ensureChatIsVisible: A,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    p = {
        binds: ['alt+shift+up'],
        comboKeysBindGlobal: !0,
        action() {
            var n;
            let t = null !== (n = r.Z.getState().guildId) && void 0 !== n ? n : c.ME;
            return (
                (0, i.Z)(-1, {
                    channelPredicate: C,
                    guildPredicate: (n) => n === t || !a.ZP.isMuted(n),
                    guildFeaturePredicate: b,
                    ensureChatIsVisible: A,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    g = (n, t) => s.ZP.getMentionCount(t) > 0,
    f = {
        binds: ['mod+shift+alt+down'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, i.Z)(1, {
                channelPredicate: g,
                ensureChatIsVisible: A,
                withVoiceChannels: !0
            }),
            !1
        )
    },
    _ = {
        binds: ['mod+shift+alt+up'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, i.Z)(-1, {
                channelPredicate: g,
                ensureChatIsVisible: A,
                withVoiceChannels: !0
            }),
            !1
        )
    };
