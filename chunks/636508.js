"use strict";
n.r(t), n.d(t, {
  getActivityGuildSuggestion: function() {
    return c
  },
  useSelectGuildOptions: function() {
    return o
  }
});
var i = n("470079"),
  s = n("442837"),
  u = n("592125"),
  a = n("944486"),
  l = n("914010"),
  r = n("771845");

function c() {
  var e;
  let {
    allowGdmActivityChannelSuggestion: t
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    allowGdmActivityChannelSuggestion: !1
  }, n = a.default.getVoiceChannelId(), i = u.default.getChannel(n);
  if (null != i && null != i.guild_id) return i.guild_id;
  if (null == i || !t) return null !== (e = l.default.getLastSelectedGuildId()) && void 0 !== e ? e : r.default.getFlattenedGuildIds()[0]
}

function o() {
  let e = (0, s.useStateFromStores)([r.default], () => r.default.getFlattenedGuildIds());
  return i.useMemo(() => e.map(e => ({
    label: e,
    value: e
  })), [e])
}