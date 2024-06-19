t.d(n, {
  a: function() {
    return f
  },
  h: function() {
    return _
  }
}), t(789020);
var i = t(470079),
  r = t(442837),
  l = t(430198),
  a = t(378233),
  u = t(592125),
  o = t(630388),
  c = t(981631);
let s = c.iLy.CROSSPOSTED | c.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | c.iLy.GUILD_FEED_HIDDEN | c.iLy.HAS_SNAPSHOT | c.iLy.HAS_THREAD | c.iLy.IS_CROSSPOST | c.iLy.IS_VOICE_MESSAGE | c.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | c.iLy.SUPPRESS_EMBEDS | c.iLy.SUPPRESS_NOTIFICATIONS | c.iLy.URGENT;

function d(e) {
  return e.state !== c.yb.SEND_FAILED && !!c.V$x.FORWARDABLE.has(e.type) && null == e.poll && !(e.components.length > 0) && null == e.activity && null == e.call && null == e.interaction && 0 === (0, o.Ge)(e.flags, s) && !((0, a.cv)(e).length > 0) && !0
}

function _(e) {
  var n;
  if (!d(e)) return !1;
  let t = null === (n = u.Z.getChannel(e.channel_id)) || void 0 === n ? void 0 : n.guild_id;
  return !(null != t && l.Z.isChannelGated(t, e.channel_id)) && !0
}

function f(e) {
  let n = (0, r.e7)([l.Z, u.Z], () => {
    var n;
    if (null == e) return !1;
    let t = null === (n = u.Z.getChannel(e.channel_id)) || void 0 === n ? void 0 : n.guild_id;
    return null != t && l.Z.isChannelGated(t, e.channel_id)
  });
  return i.useMemo(() => null != e && d(e), [e]) && !n
}