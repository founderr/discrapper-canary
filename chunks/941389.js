n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(496675),
  r = n(996861),
  l = n(981631),
  o = n(689938);

function c(e, t) {
  let n = t.getGuildId();
  return null != n && (e.type === l.uaV.USER_JOIN || e.type === l.uaV.GUILD_INVITE_REMINDER) && a.Z.canWithPartialContext(l.Plq.MANAGE_GUILD, {
guildId: n
  }) ? (0, i.jsx)(s.MenuItem, {
id: 'configure',
label: o.Z.Messages.CONFIGURE,
icon: s.CircleQuestionIcon,
action: () => (0, r.zW)(t)
  }) : null;
}