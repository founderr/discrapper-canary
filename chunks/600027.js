n.d(t, {
  T: function() {
    return c
  }
});
var i = n(159300),
  s = n(430824),
  l = n(496675),
  a = n(996106),
  r = n(561205),
  o = n(981631);

function c() {
  let e = (0, r.Z)();
  if (null == e) throw new a.Z({
    errorCode: o.lTL.INVALID_CHANNEL
  }, "Invalid channel");
  let t = s.Z.getGuild(e.getGuildId());
  if (null == t) throw new a.Z({
    errorCode: o.lTL.INVALID_CHANNEL
  }, "Invalid guild ".concat(e.getGuildId()));
  if (!(0, i.b)(l.Z, t, e)) throw new a.Z({
    errorCode: o.lTL.INVALID_PERMISSIONS
  }, "No invite permissions for ".concat(e.id));
  return {
    channel: e,
    guild: t
  }
}