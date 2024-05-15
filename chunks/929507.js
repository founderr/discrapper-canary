"use strict";
a.r(t), a("47120");
var n = a("470079"),
  r = a("399606"),
  i = a("544891"),
  l = a("570140"),
  s = a("367907"),
  o = a("430824"),
  c = a("496675"),
  d = a("626135"),
  u = a("70956"),
  f = a("997787"),
  m = a("981631");
let h = 1 * u.default.Millis.DAY,
  E = new Map;
t.default = {
  useShouldShowChannelNotice(e) {
    let t = (0, r.useStateFromStores)([o.default, c.default], () => {
      let t = o.default.getGuild(e);
      return null != t && c.default.can(m.Permissions.ADMINISTRATOR, t)
    });
    n.useEffect(() => {
      t && ! function(e) {
        var t;
        let a = Date.now(),
          n = null !== (t = E.get(e)) && void 0 !== t ? t : 0;
        !(a < n + h) && (E.set(e, a), i.HTTP.post({
          url: m.Endpoints.GUILD_MIGRATE_COMMAND_SCOPE(e)
        }).then(t => {
          var a, n;
          l.default.dispatch({
            type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
            guildId: e,
            integrationIdsWithAppCommands: null !== (n = null === (a = t.body) || void 0 === a ? void 0 : a.integration_ids_with_app_commands) && void 0 !== n ? n : []
          })
        }, () => {
          E.set(e, n)
        }))
      }(e)
    }, [e, t]);
    let a = (0, r.useStateFromStores)([f.default], () => f.default.shouldShowChannelNotice(e));
    return t && a
  },
  dismissNotice(e) {
    l.default.dispatch({
      type: "COMMANDS_MIGRATION_NOTICE_DISMISSED",
      guildId: e
    })
  },
  dismissOverviewTooltip(e, t) {
    var a;
    l.default.dispatch({
      type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED",
      guildId: e,
      integrationId: t.id
    }), d.default.track(m.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
      ...(0, s.collectGuildAnalyticsMetadata)(e),
      application_id: null === (a = t.application) || void 0 === a ? void 0 : a.id,
      location: "overview"
    })
  },
  dismissToggleTooltip(e, t) {
    var a;
    void 0 !== t && (l.default.dispatch({
      type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED",
      integrationId: t.id
    }), d.default.track(m.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
      ...(0, s.collectGuildAnalyticsMetadata)(e),
      application_id: null === (a = t.application) || void 0 === a ? void 0 : a.id,
      location: "toggle"
    }))
  }
}