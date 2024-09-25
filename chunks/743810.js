t.d(n, {
    Nv: function () {
        return L;
    },
    pd: function () {
        return S;
    },
    uX: function () {
        return N;
    },
    wk: function () {
        return I;
    }
});
var i = t(350483),
    o = t(220444),
    l = t(905423),
    E = t(131704),
    r = t(592125),
    a = t(306680),
    u = t(944486),
    d = t(9156),
    s = t(981631),
    _ = t(490897);
let c = (e, n) => {
        let t = r.Z.getChannel(n);
        return null != t && ((0, E.hv)(t.type) || s.TPd.GUILD_VOCAL.has(t.type) ? a.ZP.getMentionCount(n) > 0 || u.Z.getVoiceChannelId() === n : (!d.ZP.isChannelMuted(e, n) || a.ZP.getMentionCount(n) > 0) && (0, o.d)(t));
    },
    A = (e, n) => {
        if (n === _.W.GUILD_EVENT) return !d.ZP.isMuteScheduledEventsEnabled(e) && a.ZP.hasUnread(e, n);
        return a.ZP.hasUnread(e, n);
    },
    C = (e, n) => {
        let t = r.Z.getChannel(n);
        return !!(null != t && s.TPd.GUILD_VOCAL.has(t.type)) && (!!(a.ZP.getMentionCount(n) > 0) || (u.Z.getVoiceChannelId() === n && a.ZP.getUnreadCount(n) > 0));
    },
    S = {
        binds: ['alt+shift+down'],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let n = null !== (e = l.Z.getState().guildId) && void 0 !== e ? e : s.ME;
            return (
                (0, i.Z)(1, {
                    channelPredicate: c,
                    guildPredicate: (e) => e === n || !d.ZP.isMuted(e),
                    guildFeaturePredicate: A,
                    ensureChatIsVisible: C,
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
            let n = null !== (e = l.Z.getState().guildId) && void 0 !== e ? e : s.ME;
            return (
                (0, i.Z)(-1, {
                    channelPredicate: c,
                    guildPredicate: (e) => e === n || !d.ZP.isMuted(e),
                    guildFeaturePredicate: A,
                    ensureChatIsVisible: C,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    T = (e, n) => a.ZP.getMentionCount(n) > 0,
    L = {
        binds: ['mod+shift+alt+down'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, i.Z)(1, {
                channelPredicate: T,
                ensureChatIsVisible: C,
                withVoiceChannels: !0
            }),
            !1
        )
    },
    N = {
        binds: ['mod+shift+alt+up'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, i.Z)(-1, {
                channelPredicate: T,
                ensureChatIsVisible: C,
                withVoiceChannels: !0
            }),
            !1
        )
    };
