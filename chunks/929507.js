t(47120);
var a = t(470079),
  r = t(399606),
  s = t(544891),
  i = t(570140),
  l = t(367907),
  o = t(430824),
  c = t(496675),
  d = t(626135),
  u = t(70956),
  m = t(997787),
  h = t(981631);
let C = 1 * u.Z.Millis.DAY,
  x = new Map;
n.Z = {
  useShouldShowChannelNotice(e) {
    let n = (0, r.e7)([o.Z, c.Z], () => {
      let n = o.Z.getGuild(e);
      return null != n && c.Z.can(h.Plq.ADMINISTRATOR, n)
    });
    a.useEffect(() => {
      n && ! function(e) {
        var n;
        let t = Date.now(),
          a = null !== (n = x.get(e)) && void 0 !== n ? n : 0;
        if (!(t < a + C)) x.set(e, t), s.tn.post({
          url: h.ANM.GUILD_MIGRATE_COMMAND_SCOPE(e)
        }).then(n => {
          var t, a;
          i.Z.dispatch({
            type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
            guildId: e,
            integrationIdsWithAppCommands: null !== (a = null === (t = n.body) || void 0 === t ? void 0 : t.integration_ids_with_app_commands) && void 0 !== a ? a : []
          })
        }, () => {
          x.set(e, a)
        })
      }(e)
    }, [e, n]);
    let t = (0, r.e7)([m.Z], () => m.Z.shouldShowChannelNotice(e));
    return n && t
  },
  dismissNotice(e) {
    i.Z.dispatch({
      type: "COMMANDS_MIGRATION_NOTICE_DISMISSED",
      guildId: e
    })
  },
  dismissOverviewTooltip(e, n) {
    var t;
    i.Z.dispatch({
      type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED",
      guildId: e,
      integrationId: n.id
    }), d.default.track(h.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
      ...(0, l.hH)(e),
      application_id: null === (t = n.application) || void 0 === t ? void 0 : t.id,
      location: "overview"
    })
  },
  dismissToggleTooltip(e, n) {
    var t;
    if (void 0 !== n) i.Z.dispatch({
      type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED",
      integrationId: n.id
    }), d.default.track(h.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
      ...(0, l.hH)(e),
      application_id: null === (t = n.application) || void 0 === t ? void 0 : t.id,
      location: "toggle"
    })
  }
}