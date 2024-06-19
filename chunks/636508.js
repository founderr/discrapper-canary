i.d(n, {
  $: function() {
    return u
  },
  W: function() {
    return c
  }
});
var a = i(470079),
  l = i(442837),
  t = i(592125),
  s = i(944486),
  r = i(914010),
  o = i(771845);

function u() {
  var e;
  let {
    allowGdmActivityChannelSuggestion: n
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    allowGdmActivityChannelSuggestion: !1
  }, i = s.Z.getVoiceChannelId(), a = t.Z.getChannel(i);
  if (null != a && null != a.guild_id) return a.guild_id;
  if (null == a || !n) return null !== (e = r.Z.getLastSelectedGuildId()) && void 0 !== e ? e : o.ZP.getFlattenedGuildIds()[0]
}

function c() {
  let e = (0, l.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds());
  return a.useMemo(() => e.map(e => ({
    label: e,
    value: e
  })), [e])
}