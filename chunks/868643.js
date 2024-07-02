i.d(n, {
    a: function () {
        return _;
    },
    h: function () {
        return f;
    }
}), i(789020);
var t = i(470079), o = i(442837), a = i(430198), r = i(378233), l = i(592125), c = i(630388), s = i(981631);
let d = s.iLy.CROSSPOSTED | s.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | s.iLy.GUILD_FEED_HIDDEN | s.iLy.HAS_SNAPSHOT | s.iLy.HAS_THREAD | s.iLy.IS_CROSSPOST | s.iLy.IS_VOICE_MESSAGE | s.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | s.iLy.SUPPRESS_EMBEDS | s.iLy.SUPPRESS_NOTIFICATIONS | s.iLy.URGENT;
function u(e) {
    return e.state !== s.yb.SEND_FAILED && !!s.V$x.FORWARDABLE.has(e.type) && null == e.poll && !(e.components.length > 0) && null == e.activity && null == e.call && null == e.interaction && 0 === (0, c.Ge)(e.flags, d) && !((0, r.cv)(e).length > 0) && !0;
}
function f(e) {
    var n;
    if (!u(e))
        return !1;
    let i = null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n ? void 0 : n.guild_id;
    return !(null != i && a.Z.isChannelGated(i, e.channel_id)) && !0;
}
function _(e) {
    let n = (0, o.e7)([
        a.Z,
        l.Z
    ], () => {
        var n;
        if (null == e)
            return !1;
        let i = null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n ? void 0 : n.guild_id;
        return null != i && a.Z.isChannelGated(i, e.channel_id);
    });
    return t.useMemo(() => null != e && u(e), [e]) && !n;
}
