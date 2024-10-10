t.d(n, {
    a: function () {
        return f;
    },
    h: function () {
        return _;
    }
}),
    t(789020);
var i = t(470079),
    r = t(442837),
    a = t(430198),
    l = t(592125),
    u = t(430824),
    o = t(630388),
    s = t(981631);
let c = s.iLy.CROSSPOSTED | s.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | s.iLy.GUILD_FEED_HIDDEN | s.iLy.HAS_SNAPSHOT | s.iLy.HAS_THREAD | s.iLy.IS_CROSSPOST | s.iLy.IS_VOICE_MESSAGE | s.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | s.iLy.SUPPRESS_EMBEDS | s.iLy.SUPPRESS_NOTIFICATIONS | s.iLy.URGENT;
function d(e) {
    return (!!(e.state !== s.yb.SEND_FAILED && s.V$x.FORWARDABLE.has(e.type)) && null == e.poll && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, o.Ge)(e.flags, c)) || !1;
}
function _(e) {
    var n;
    if (!d(e)) return !1;
    let t = null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n ? void 0 : n.guild_id;
    return !(null != t && a.Z.isChannelOrThreadParentGated(t, e.channel_id)) && !0;
}
function f(e) {
    let n = (0, r.e7)([u.Z, a.Z, l.Z], () => {
        var n, t;
        if (null == e) return !0;
        let i = null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n ? void 0 : n.guild_id;
        return !(null == i || (null === (t = u.Z.getGuild(i)) || void 0 === t ? void 0 : t.hasFeature(s.oNc.FORWARDING_DISABLED))) || (null != i && a.Z.isChannelOrThreadParentGated(i, e.channel_id));
    });
    return i.useMemo(() => !n && null != e && d(e), [n, e]);
}
