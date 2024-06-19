t.d(n, {
  Z: function() {
    return s
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  l = t(496675),
  r = t(996861),
  o = t(981631),
  u = t(689938);

function s(e, n) {
  let t = n.getGuildId();
  return null != t && (e.type === o.uaV.USER_JOIN || e.type === o.uaV.GUILD_INVITE_REMINDER) && l.Z.canWithPartialContext(o.Plq.MANAGE_GUILD, {
    guildId: t
  }) ? (0, i.jsx)(a.MenuItem, {
    id: "configure",
    label: u.Z.Messages.CONFIGURE,
    icon: a.CircleQuestionIcon,
    action: () => (0, r.zW)(n)
  }) : null
}