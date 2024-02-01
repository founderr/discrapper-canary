"use strict";
n.r(t), n.d(t, {
  openMigrationModal: function() {
    return f
  },
  default: function() {
    return m
  }
}), n("222007");
var i = n("37983");
n("884691");
var a = n("95410"),
  s = n("77078"),
  l = n("872717"),
  r = n("689988"),
  o = n("282109"),
  u = n("640497"),
  d = n("699668");
class c extends r.default {
  async handlePostConnectionOpen() {
    if (a.default.get("turnedOffNewNotifications") || !u.NotificationsExperiment.getCurrentConfig({
        location: "NotificationMigrationManager"
      }, {
        autoTrackExposure: !1
      }).enabled || o.default.useNewNotifications) return;
    let {
      logExposure: e,
      autoOpen: t
    } = u.UnreadsEntryPointExperiment.getCurrentConfig({
      location: "NotificationMigrationManager"
    }, {
      autoTrackExposure: !1
    });
    if (!e) return;
    let {
      body: {
        guild_noise: r,
        usage: c
      }
    } = await l.default.get("/users/@me/notification-migration-data2"), f = (0, d.transformUsageData)(c), {
      default: m
    } = await n.el("923660").then(n.bind(n, "923660"));
    if (!(0, s.hasAnyModalOpen)()) u.UnreadsEntryPointExperiment.trackExposure({
      location: "NotificationMigrationManager"
    }), t && ((0, d.hasGoodCandidateServers)(r, f) ? (0, s.openModal)(e => (0, i.jsx)(m, {
      ...e,
      dismissable: !1,
      guildPain: r,
      myUsage: f
    }), {
      onCloseRequest: () => {}
    }) : (0, d.autoMigrateToNewSystem)())
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen
    }
  }
}
async function f(e) {
  let {
    body: {
      guild_noise: t,
      usage: a
    }
  } = await l.default.get("/users/@me/notification-migration-data2"), r = (0, d.transformUsageData)(a);
  (0, s.openModalLazy)(async () => {
    let {
      default: a
    } = await n.el("923660").then(n.bind(n, "923660"));
    return n => (0, i.jsx)(a, {
      ...n,
      dismissable: e,
      guildPain: t,
      myUsage: r
    })
  })
}
var m = new c