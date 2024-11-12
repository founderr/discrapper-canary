e.d(t, {
    Nv: function () {
        return L;
    },
    pd: function () {
        return S;
    },
    uX: function () {
        return h;
    },
    wk: function () {
        return I;
    }
});
var i = e(350483),
    l = e(220444),
    o = e(905423),
    r = e(131704),
    u = e(592125),
    a = e(306680),
    d = e(944486),
    E = e(9156),
    s = e(981631),
    c = e(490897);
let _ = (n, t) => {
        let e = u.Z.getChannel(t);
        return null != e && ((0, r.hv)(e.type) || s.TPd.GUILD_VOCAL.has(e.type) ? a.ZP.getMentionCount(t) > 0 || d.Z.getVoiceChannelId() === t : (!E.ZP.isChannelMuted(n, t) || a.ZP.getMentionCount(t) > 0) && (0, l.d)(e));
    },
    C = (n, t) => {
        if (t === c.W.GUILD_EVENT) return !E.ZP.isMuteScheduledEventsEnabled(n) && a.ZP.hasUnread(n, t);
        return a.ZP.hasUnread(n, t);
    },
    A = (n, t) => {
        let e = u.Z.getChannel(t);
        return !!(null != e && s.TPd.GUILD_VOCAL.has(e.type)) && (!!(a.ZP.getMentionCount(t) > 0) || (d.Z.getVoiceChannelId() === t && a.ZP.getUnreadCount(t) > 0));
    },
    S = {
        binds: ['alt+shift+down'],
        comboKeysBindGlobal: !0,
        action() {
            var n;
            let t = null !== (n = o.Z.getState().guildId) && void 0 !== n ? n : s.ME;
            return (
                (0, i.Z)(1, {
                    channelPredicate: _,
                    guildPredicate: (n) => n === t || !E.ZP.isMuted(n),
                    guildFeaturePredicate: C,
                    ensureChatIsVisible: A,
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
            var n;
            let t = null !== (n = o.Z.getState().guildId) && void 0 !== n ? n : s.ME;
            return (
                (0, i.Z)(-1, {
                    channelPredicate: _,
                    guildPredicate: (n) => n === t || !E.ZP.isMuted(n),
                    guildFeaturePredicate: C,
                    ensureChatIsVisible: A,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    T = (n, t) => a.ZP.getMentionCount(t) > 0,
    L = {
        binds: ['mod+shift+alt+down'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, i.Z)(1, {
                channelPredicate: T,
                ensureChatIsVisible: A,
                withVoiceChannels: !0
            }),
            !1
        )
    },
    h = {
        binds: ['mod+shift+alt+up'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, i.Z)(-1, {
                channelPredicate: T,
                ensureChatIsVisible: A,
                withVoiceChannels: !0
            }),
            !1
        )
    };
