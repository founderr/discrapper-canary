n.d(t, {
    a: function () {
        return E;
    },
    h: function () {
        return _;
    }
});
var r = n(789020);
var i = n(470079),
    a = n(442837),
    o = n(430198),
    s = n(592125),
    l = n(630388),
    u = n(981631);
let c = u.iLy.CROSSPOSTED | u.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | u.iLy.GUILD_FEED_HIDDEN | u.iLy.HAS_SNAPSHOT | u.iLy.HAS_THREAD | u.iLy.IS_CROSSPOST | u.iLy.IS_VOICE_MESSAGE | u.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | u.iLy.SUPPRESS_EMBEDS | u.iLy.SUPPRESS_NOTIFICATIONS | u.iLy.URGENT;
function d(e) {
    return (!!(e.state !== u.yb.SEND_FAILED && u.V$x.FORWARDABLE.has(e.type)) && null == e.poll && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, l.Ge)(e.flags, c)) || !1;
}
function _(e) {
    var t;
    if (!d(e)) return !1;
    let n = null === (t = s.Z.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.guild_id;
    return !(null != n && o.Z.isChannelOrThreadParentGated(n, e.channel_id)) && !0;
}
function E(e) {
    let t = (0, a.e7)([o.Z, s.Z], () => {
        var t;
        if (null == e) return !1;
        let n = null === (t = s.Z.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.guild_id;
        return null != n && o.Z.isChannelOrThreadParentGated(n, e.channel_id);
    });
    return i.useMemo(() => null != e && d(e), [e]) && !t;
}
