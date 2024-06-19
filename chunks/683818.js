n.d(t, {
  G: function() {
    return c
  },
  Z: function() {
    return o
  }
});
var l = n(442837),
  i = n(592125),
  s = n(430824),
  a = n(496675),
  r = n(981631);

function o(e) {
  let t = (0, l.e7)([s.Z], () => s.Z.getGuild(e.guildId)),
    n = (0, l.e7)([i.Z], () => i.Z.getChannel(e.channelId)),
    o = (0, l.e7)([a.Z], () => a.Z.can(r.Plq.ADMINISTRATOR, t)),
    c = (0, l.e7)([a.Z], () => a.Z.can(r.Plq.MANAGE_MESSAGES, n));
  return {
    isEntryAdmin: o,
    canEdit: o || c,
    canRemove: o || c
  }
}

function c(e) {
  return (0, l.e7)([a.Z], () => a.Z.can(r.Plq.SEND_MESSAGES, e))
}