t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var a = t(481060),
    s = t(496675),
    l = t(996861),
    r = t(981631),
    o = t(689938);
function u(e, n) {
    let t = n.getGuildId();
    return null != t && (e.type === r.uaV.USER_JOIN || e.type === r.uaV.GUILD_INVITE_REMINDER) && s.Z.canWithPartialContext(r.Plq.MANAGE_GUILD, { guildId: t })
        ? (0, i.jsx)(a.MenuItem, {
              id: 'configure',
              label: o.Z.Messages.CONFIGURE,
              icon: a.CircleQuestionIcon,
              action: () => (0, l.zW)(n)
          })
        : null;
}
