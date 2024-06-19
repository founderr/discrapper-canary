n.d(t, {
  n: function() {
    return r
  }
});
var l = n(266067),
  i = n(905423),
  s = n(981631);

function r() {
  let e = (0, i.Z)(e => e.guildId),
    {
      pathname: t
    } = (0, l.TH)(),
    n = t.startsWith(s.Z5c.GUILD_DISCOVERY),
    r = t.startsWith(s.Z5c.GUILD_MEMBER_VERIFICATION("")),
    a = t.startsWith(s.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
  return null == e && !(n || r || a)
}