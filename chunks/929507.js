"use strict";
n.r(t), n("47120");
var a = n("470079"),
  i = n("399606"),
  r = n("544891"),
  s = n("570140"),
  l = n("367907"),
  o = n("430824"),
  d = n("496675"),
  c = n("626135"),
  u = n("70956"),
  f = n("997787"),
  m = n("981631");
let h = 1 * u.default.Millis.DAY,
  E = new Map;
t.default = {
  useShouldShowChannelNotice(e) {
    let t = (0, i.useStateFromStores)([o.default, d.default], () => {
      let t = o.default.getGuild(e);
      return null != t && d.default.can(m.Permissions.ADMINISTRATOR, t)
    });
    a.useEffect(() => {
      t && ! function(e) {
        var t;
        let n = Date.now(),
          a = null !== (t = E.get(e)) && void 0 !== t ? t : 0;
        !(n < a + h) && (E.set(e, n), r.HTTP.post({
          url: m.Endpoints.GUILD_MIGRATE_COMMAND_SCOPE(e)
        }).then(t => {
          var n, a;
          s.default.dispatch({
            type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
            guildId: e,
            integrationIdsWithAppCommands: null !== (a = null === (n = t.body) || void 0 === n ? void 0 : n.integration_ids_with_app_commands) && void 0 !== a ? a : []
          })
        }, () => {
          E.set(e, a)
        }))
      }(e)
    }, [e, t]);
    let n = (0, i.useStateFromStores)([f.default], () => f.default.shouldShowChannelNotice(e));
    return t && n
  },
  dismissNotice(e) {
    s.default.dispatch({
      type: "COMMANDS_MIGRATION_NOTICE_DISMISSED",
      guildId: e
    })
  },
  dismissOverviewTooltip(e, t) {
    var n;
    s.default.dispatch({
      type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED",
      guildId: e,
      integrationId: t.id
    }), c.default.track(m.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
      ...(0, l.collectGuildAnalyticsMetadata)(e),
      application_id: null === (n = t.application) || void 0 === n ? void 0 : n.id,
      location: "overview"
    })
  },
  dismissToggleTooltip(e, t) {
    var n;
    void 0 !== t && (s.default.dispatch({
      type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED",
      integrationId: t.id
    }), c.default.track(m.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
      ...(0, l.collectGuildAnalyticsMetadata)(e),
      application_id: null === (n = t.application) || void 0 === n ? void 0 : n.id,
      location: "toggle"
    }))
  }
}