"use strict";
a.r(t);
var n = a("392711"),
  s = a.n(n),
  l = a("570140"),
  i = a("755264"),
  r = a("315341"),
  o = a("262847"),
  u = a("675478"),
  d = a("581883"),
  c = a("526761");

function f() {
  let e = d.default.getFullState(),
    t = e[c.UserSettingsTypes.PRELOADED_USER_SETTINGS];
  t.editInfo.triggeredMigrations && u.PreloadedUserSettingsActionCreators.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs), s().forEach(u.UserSettingsActionCreatorsByType, (t, a) => {
    let n = e[Number(a)];
    null != n.editInfo.offlineEditDataVersion && null != n.editInfo.protoToSave && t.scheduleSaveFromOfflineEdit()
  })
}

function E(e) {
  let {
    settings: {
      proto: t,
      type: a
    },
    delaySeconds: n,
    jitter: s
  } = e;
  (0, u.UserSettingsActionCreatorsByType)[a].markDirty(t, {
    delaySeconds: n,
    jitter: s
  })
}

function h(e) {
  let {
    settingsType: t
  } = e;
  (0, u.UserSettingsActionCreatorsByType)[t].loadIfNecessary()
}

function _(e) {
  let {
    state: t
  } = e;
  ("inactive" === t || "background" === t) && s().forEach(u.UserSettingsActionCreatorsByType, (e, t) => {
    null != d.default.getFullState()[Number(t)].editInfo.timeout && (e.logger.log("Triggering persistChanges due to AppStateUpdate"), e.persistChanges())
  })
}
t.default = {
  init() {
    o.default[c.UserSettingsTypes.PRELOADED_USER_SETTINGS] = r.default, o.default[c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS] = i.default, l.default.subscribe("CONNECTION_OPEN", f), l.default.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", E), l.default.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", h), l.default.subscribe("APP_STATE_UPDATE", _)
  }
}