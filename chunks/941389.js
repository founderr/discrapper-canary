t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(496675),
    a = t(996861),
    o = t(981631),
    s = t(388032);
function u(e, n) {
    let t = n.getGuildId();
    return null != t && (e.type === o.uaV.USER_JOIN || e.type === o.uaV.GUILD_INVITE_REMINDER) && r.Z.canWithPartialContext(o.Plq.MANAGE_GUILD, { guildId: t })
        ? (0, i.jsx)(l.MenuItem, {
              id: 'configure',
              label: s.intl.string(s.t.NpHUi4),
              icon: l.CircleQuestionIcon,
              action: () => (0, a.zW)(n)
          })
        : null;
}
