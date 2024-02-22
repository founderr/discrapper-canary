"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("77078"),
  u = n("398654"),
  i = n("712125"),
  r = n("311161"),
  d = n("45029"),
  o = n("372624"),
  c = n("782340");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      shouldShowIncidentActions: f,
      isUnderLockdown: E,
      incidentData: h
    } = (0, u.useGuildIncidentsState)(e.id),
    v = l.useCallback(() => {
      let t = {
        source: i.GuildIncidentActionSources.CONTEXT_MENU,
        alertType: (0, r.getIncidentAlertType)(h)
      };
      (0, s.openModalLazy)(async () => {
        let {
          default: l
        } = await n.el("186638").then(n.bind(n, "186638"));
        return n => (0, a.jsx)(l, {
          ...n,
          guildId: e.id,
          analyticsData: t
        })
      })
    }, [e.id, h]);
  return e.isCommunity() && f ? (0, a.jsx)(s.MenuItem, {
    id: "server-lockdown",
    label: E ? c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK : c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
    icon: t ? E ? o.default : d.default : void 0,
    action: v,
    color: "danger"
  }) : null
}