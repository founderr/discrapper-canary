n(733860), n(47120);
var r = n(106351),
  i = n(212819),
  a = n(588468),
  o = n(933557),
  s = n(592125),
  l = n(984933),
  u = n(483360),
  c = n(877565),
  d = n(590921),
  _ = n(665692),
  E = n(176505),
  f = n(689938);
let h = {
  sentinel: _.zy,
  matches: (e, t, n, r, i) => i.mentions.channel !== d.nS.DENY && !e.isPrivate(),
  queryResults(e, t, n, r, a) {
let o, s, c = l.sH;
return n.charAt(0) === i.xQ.VOICE_CHANNEL && (c = l.Zb, n = n.substring(1)), r.forNonStringCommandOption ? o = u.ZP.queryApplicationCommandChannelResults({
  query: n,
  channel: e,
  channelTypes: r.allowedChannelTypes
}) : (o = u.ZP.queryChannelResults({
  query: n,
  channel: e,
  type: c
}), null != t && (s = u.ZP.queryStaticRouteChannels({
  query: n,
  guild: t
}), o.channels.unshift(...s))), {
  results: o,
  staticRouteChannels: s
};
  },
  renderResults(e) {
let t, n, {
    results: {
      channels: r
    },
    selectedIndex: o,
    query: l,
    options: u,
    onHover: d,
    onClick: E
  } = e,
  h = l.charAt(0) === i.xQ.VOICE_CHANNEL;
return h ? (t = f.Z.Messages.VOICE_CHANNELS_MATCHING, n = f.Z.Messages.VOICE_CHANNELS, l = l.substring(1)) : u.forNonStringCommandOption ? (t = f.Z.Messages.CHANNELS_MATCHING, n = f.Z.Messages.CHANNELS) : (t = f.Z.Messages.TEXT_CHANNELS_MATCHING, n = f.Z.Messages.TEXT_CHANNELS), (0, c.HI)({
  query: l,
  selectedIndex: o,
  autocompletes: r,
  onHover: d,
  onClick: E,
  titleWithQuery: t,
  titleWithoutQuery: n,
  Component: a.ZP.Channel,
  getProps: e => ({
    channel: e,
    key: e.id,
    category: s.Z.getChannel(e.parent_id)
  }),
  getQuery: e => h ? ''.concat(_.zy).concat(i.xQ.VOICE_CHANNEL).concat(e) : ''.concat(_.zy).concat(e),
  key: 'channels'
});
  },
  onSelect(e) {
let {
  results: {
    channels: t
  },
  index: n,
  options: i
} = e, a = t[n];
return i.insertText(function(e) {
  switch (e.type) {
    case r.d.PUBLIC_THREAD:
    case r.d.PRIVATE_THREAD:
    case r.d.ANNOUNCEMENT_THREAD:
    case r.d.GUILD_VOICE:
    case r.d.GUILD_STAGE_VOICE:
    case r.d.GUILD_CATEGORY:
      return '#"'.concat((0, o.le)(e.name), '"');
    default:
      let t = l.ZP.getTextChannelNameDisambiguations(e.guild_id)[e.id];
      return '#'.concat(null != t ? t.name : e.name);
  }
}(a), function(e) {
  return E.EC.has(e.id) ? '<id:'.concat(e.id, '>') : '<#'.concat(e.id, '>');
}(a)), {
  type: d.z2.CHANNEL
};
  }
};
t.Z = h;