"use strict";
n.r(t), n.d(t, {
  canForwardMessage: function() {
    return f
  },
  useCanForwardMessage: function() {
    return E
  }
}), n("789020");
var s = n("470079"),
  a = n("442837"),
  l = n("430198"),
  i = n("378233"),
  r = n("592125"),
  o = n("630388"),
  u = n("981631");
let d = u.MessageFlags.CROSSPOSTED | u.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | u.MessageFlags.GUILD_FEED_HIDDEN | u.MessageFlags.HAS_SNAPSHOT | u.MessageFlags.HAS_THREAD | u.MessageFlags.IS_CROSSPOST | u.MessageFlags.IS_VOICE_MESSAGE | u.MessageFlags.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | u.MessageFlags.SUPPRESS_EMBEDS | u.MessageFlags.SUPPRESS_NOTIFICATIONS | u.MessageFlags.URGENT;

function c(e) {
  return e.state !== u.MessageStates.SEND_FAILED && !!u.MessageTypesSets.FORWARDABLE.has(e.type) && null == e.poll && !(e.components.length > 0) && null == e.activity && null == e.call && null == e.interaction && 0 === (0, o.removeFlag)(e.flags, d) && !((0, i.getMessageStickers)(e).length > 0) && !0
}

function f(e) {
  var t;
  if (!c(e)) return !1;
  let n = null === (t = r.default.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.guild_id;
  return !(null != n && l.default.isChannelGated(n, e.channel_id)) && !0
}

function E(e) {
  let t = (0, a.useStateFromStores)([l.default, r.default], () => {
    var t;
    if (null == e) return !1;
    let n = null === (t = r.default.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.guild_id;
    return null != n && l.default.isChannelGated(n, e.channel_id)
  });
  return s.useMemo(() => null != e && c(e), [e]) && !t
}