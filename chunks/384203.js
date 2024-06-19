n.d(t, {
  Z: function() {
    return c
  }
}), n(47120);
var s = n(735250);
n(470079);
var i = n(592125),
  l = n(430824),
  a = n(496675),
  r = n(983436),
  o = n(981631);

function c(e) {
  let {
    code: t,
    messageData: n
  } = e, [c, u] = t.split("/"), d = i.Z.getChannel(u), E = l.Z.getGuild(c);
  return null != d && d.isGuildVocal() && null != E && a.Z.can(o.Plq.VIEW_CHANNEL, d) && a.Z.can(o.Plq.CONNECT, d) ? (0, s.jsx)(r.Z, {
    guild: E,
    channel: d,
    messageData: n
  }) : null
}