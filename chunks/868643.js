"use strict";
n.r(t), n.d(t, {
  useCanForwardMessage: function() {
    return c
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
  let t = (0, a.useStateFromStores)([l.default, r.default], () => {
    var t;
    if (null == e) return !1;
    let n = null === (t = r.default.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.guild_id;
    return null != n && l.default.isChannelGated(n, e.channel_id)
  });
  return s.useMemo(() => {
    var t;
    return null != e && (t = e, !!u.MessageTypesSets.FORWARDABLE.has(t.type) && null == t.poll && !(t.components.length > 0) && null == t.activity && null == t.call && null == t.interaction && 0 === (0, o.removeFlag)(t.flags, d) && !((0, i.getMessageStickers)(t).length > 0) && !0)
  }, [e]) && !t
}