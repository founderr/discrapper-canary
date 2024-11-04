t.d(n, {
    Nv: function () {
        return T;
    },
    pd: function () {
        return S;
    },
    uX: function () {
        return f;
    },
    wk: function () {
        return I;
    }
});
var l = t(350483),
    i = t(220444),
    o = t(905423),
    a = t(131704),
    u = t(592125),
    r = t(306680),
    d = t(944486),
    c = t(9156),
    s = t(981631),
    E = t(490897);
let C = (e, n) => {
        let t = u.Z.getChannel(n);
        return null != t && ((0, a.hv)(t.type) || s.TPd.GUILD_VOCAL.has(t.type) ? r.ZP.getMentionCount(n) > 0 || d.Z.getVoiceChannelId() === n : (!c.ZP.isChannelMuted(e, n) || r.ZP.getMentionCount(n) > 0) && (0, i.d)(t));
    },
    _ = (e, n) => {
        if (n === E.W.GUILD_EVENT) return !c.ZP.isMuteScheduledEventsEnabled(e) && r.ZP.hasUnread(e, n);
        return r.ZP.hasUnread(e, n);
    },
    h = (e, n) => {
        let t = u.Z.getChannel(n);
        return !!(null != t && s.TPd.GUILD_VOCAL.has(t.type)) && (!!(r.ZP.getMentionCount(n) > 0) || (d.Z.getVoiceChannelId() === n && r.ZP.getUnreadCount(n) > 0));
    },
    S = {
        binds: ['alt+shift+down'],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let n = null !== (e = o.Z.getState().guildId) && void 0 !== e ? e : s.ME;
            return (
                (0, l.Z)(1, {
                    channelPredicate: C,
                    guildPredicate: (e) => e === n || !c.ZP.isMuted(e),
                    guildFeaturePredicate: _,
                    ensureChatIsVisible: h,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    I = {
        binds: ['alt+shift+up'],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let n = null !== (e = o.Z.getState().guildId) && void 0 !== e ? e : s.ME;
            return (
                (0, l.Z)(-1, {
                    channelPredicate: C,
                    guildPredicate: (e) => e === n || !c.ZP.isMuted(e),
                    guildFeaturePredicate: _,
                    ensureChatIsVisible: h,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    A = (e, n) => r.ZP.getMentionCount(n) > 0,
    T = {
        binds: ['mod+shift+alt+down'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, l.Z)(1, {
                channelPredicate: A,
                ensureChatIsVisible: h,
                withVoiceChannels: !0
            }),
            !1
        )
    },
    f = {
        binds: ['mod+shift+alt+up'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, l.Z)(-1, {
                channelPredicate: A,
                ensureChatIsVisible: h,
                withVoiceChannels: !0
            }),
            !1
        )
    };
