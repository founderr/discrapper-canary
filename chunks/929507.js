"use strict";
i.r(t), i("47120");
var n = i("470079"),
  r = i("399606"),
  s = i("544891"),
  a = i("570140"),
  l = i("367907"),
  o = i("430824"),
  c = i("496675"),
  u = i("626135"),
  d = i("70956"),
  f = i("997787"),
  p = i("981631");
let C = 1 * d.default.Millis.DAY,
  m = new Map;
t.default = {
  useShouldShowChannelNotice(e) {
    let t = (0, r.useStateFromStores)([o.default, c.default], () => {
      let t = o.default.getGuild(e);
      return null != t && c.default.can(p.Permissions.ADMINISTRATOR, t)
    });
    n.useEffect(() => {
      t && ! function(e) {
        var t;
        let i = Date.now(),
          n = null !== (t = m.get(e)) && void 0 !== t ? t : 0;
        !(i < n + C) && (m.set(e, i), s.HTTP.post({
          url: p.Endpoints.GUILD_MIGRATE_COMMAND_SCOPE(e)
        }).then(t => {
          var i, n;
          a.default.dispatch({
            type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
            guildId: e,
            integrationIdsWithAppCommands: null !== (n = null === (i = t.body) || void 0 === i ? void 0 : i.integration_ids_with_app_commands) && void 0 !== n ? n : []
          })
        }, () => {
          m.set(e, n)
        }))
      }(e)
    }, [e, t]);
    let i = (0, r.useStateFromStores)([f.default], () => f.default.shouldShowChannelNotice(e));
    return t && i
  },
  dismissNotice(e) {
    a.default.dispatch({
      type: "COMMANDS_MIGRATION_NOTICE_DISMISSED",
      guildId: e
    })
  },
  dismissOverviewTooltip(e, t) {
    var i;
    a.default.dispatch({
      type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED",
      guildId: e,
      integrationId: t.id
    }), u.default.track(p.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
      ...(0, l.collectGuildAnalyticsMetadata)(e),
      application_id: null === (i = t.application) || void 0 === i ? void 0 : i.id,
      location: "overview"
    })
  },
  dismissToggleTooltip(e, t) {
    var i;
    void 0 !== t && (a.default.dispatch({
      type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED",
      integrationId: t.id
    }), u.default.track(p.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
      ...(0, l.collectGuildAnalyticsMetadata)(e),
      application_id: null === (i = t.application) || void 0 === i ? void 0 : i.id,
      location: "toggle"
    }))
  }
}