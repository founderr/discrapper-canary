"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("735250"),
  l = a("470079"),
  s = a("481060"),
  u = a("528011"),
  i = a("666657"),
  r = a("533244"),
  d = a("630641"),
  o = a("762396"),
  c = a("689938");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      shouldShowIncidentActions: f,
      isUnderLockdown: E,
      incidentData: C
    } = (0, u.useGuildIncidentsState)(e.id),
    h = l.useCallback(() => {
      let t = {
        source: i.GuildIncidentActionSources.CONTEXT_MENU,
        alertType: (0, r.getIncidentAlertType)(C)
      };
      (0, s.openModalLazy)(async () => {
        let {
          default: l
        } = await Promise.all([a.e("99387"), a.e("61536")]).then(a.bind(a, "664452"));
        return a => (0, n.jsx)(l, {
          ...a,
          guildId: e.id,
          analyticsData: t
        })
      })
    }, [e.id, C]);
  return e.isCommunity() && f ? (0, n.jsx)(s.MenuItem, {
    id: "server-lockdown",
    label: E ? c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK : c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
    icon: t ? E ? o.default : d.default : void 0,
    action: h,
    color: "danger"
  }) : null
}