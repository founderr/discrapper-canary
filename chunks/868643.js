t.d(n, {
    a: function () {
        return f;
    },
    h: function () {
        return _;
    }
}),
    t(789020);
var a = t(470079),
    r = t(442837),
    i = t(430198),
    l = t(592125),
    s = t(430824),
    u = t(630388),
    o = t(981631);
let c = o.iLy.CROSSPOSTED | o.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | o.iLy.GUILD_FEED_HIDDEN | o.iLy.HAS_SNAPSHOT | o.iLy.HAS_THREAD | o.iLy.IS_CROSSPOST | o.iLy.IS_VOICE_MESSAGE | o.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | o.iLy.SUPPRESS_EMBEDS | o.iLy.SUPPRESS_NOTIFICATIONS | o.iLy.URGENT;
function d(e) {
    return (!!(e.state !== o.yb.SEND_FAILED && o.V$x.FORWARDABLE.has(e.type)) && null == e.poll && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, u.Ge)(e.flags, c)) || !1;
}
function _(e) {
    var n;
    if (!d(e)) return !1;
    let t = null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n ? void 0 : n.guild_id;
    return !(null != t && i.Z.isChannelOrThreadParentGated(t, e.channel_id)) && !0;
}
function f(e) {
    let n = (0, r.e7)([s.Z, i.Z, l.Z], () => {
        var n, t;
        if (null == e) return !0;
        let a = null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n ? void 0 : n.guild_id;
        return !!(null != a && (null === (t = s.Z.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(o.oNc.FORWARDING_DISABLED))) || (null != a && i.Z.isChannelOrThreadParentGated(a, e.channel_id));
    });
    return a.useMemo(() => !n && null != e && d(e), [n, e]);
}
