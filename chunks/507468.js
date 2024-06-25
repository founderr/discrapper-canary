var s = n(392711),
  i = n.n(s),
  l = n(570140),
  a = n(755264),
  r = n(315341),
  o = n(262847),
  c = n(675478),
  u = n(581883),
  d = n(526761);

function E() {
  let e = u.Z.getFullState(),
    t = e[d.yP.PRELOADED_USER_SETTINGS];
  t.editInfo.triggeredMigrations && c.hW.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs), i().forEach(c.aj, (t, n) => {
    let s = e[Number(n)];
    null != s.editInfo.offlineEditDataVersion && null != s.editInfo.protoToSave && t.scheduleSaveFromOfflineEdit()
  })
}

function h(e) {
  let {
    settings: {
      proto: t,
      type: n
    },
    delaySeconds: s,
    jitter: i
  } = e;
  c.aj[n].markDirty(t, {
    delaySeconds: s,
    jitter: i
  })
}

function _(e) {
  let {
    settingsType: t
  } = e;
  c.aj[t].loadIfNecessary()
}

function I(e) {
  let {
    state: t
  } = e;
  ("inactive" === t || "background" === t) && i().forEach(c.aj, (e, t) => {
    null != u.Z.getFullState()[Number(t)].editInfo.timeout && (e.logger.log("Triggering persistChanges due to AppStateUpdate"), e.persistChanges())
  })
}
t.Z = {
  init() {
    o.Z[d.yP.PRELOADED_USER_SETTINGS] = r.Z, o.Z[d.yP.FRECENCY_AND_FAVORITES_SETTINGS] = a.Z, l.Z.subscribe("CONNECTION_OPEN", E), l.Z.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", h), l.Z.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", _), l.Z.subscribe("APP_STATE_UPDATE", I)
  }
}