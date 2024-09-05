t.d(n, {
    Z: function () {
        return u;
    }
});
var a = t(735250);
t(470079);
var i = t(481060),
    l = t(496675),
    r = t(996861),
    s = t(981631),
    o = t(689938);
function u(e, n) {
    let t = n.getGuildId();
    return null != t && (e.type === s.uaV.USER_JOIN || e.type === s.uaV.GUILD_INVITE_REMINDER) && l.Z.canWithPartialContext(s.Plq.MANAGE_GUILD, { guildId: t })
        ? (0, a.jsx)(i.MenuItem, {
              id: 'configure',
              label: o.Z.Messages.CONFIGURE,
              icon: i.CircleQuestionIcon,
              action: () => (0, r.zW)(n)
          })
        : null;
}
