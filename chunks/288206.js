"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007");
var s, i = n("446674"),
  r = n("913144"),
  a = n("105059"),
  o = n("11275"),
  d = n("605250"),
  u = n("271938"),
  l = n("162771"),
  f = n("91131"),
  _ = n("70754"),
  c = n("548578");
let g = new d.default("ClientStateStore"),
  m = f.initialState.nonce,
  h = f.initialState.useGuildVersions,
  v = f.initialState.userGuildSettingsVersion,
  E = f.initialState.cacheCreationDate,
  p = f.initialState.apiCodeVersion,
  y = new Set(null !== (s = f.initialState.guildIdsRequiringDeletedIdsSync) && void 0 !== s ? s : []),
  T = f.initialState.lastSelectedGuildId,
  C = !1;

function I() {
  v = -1, f.clear(), p = 0, y.clear()
}
class S extends i.default.Store {
  initialize() {
    this.waitFor(u.default), this.syncWith([l.default], () => {
      if (!C) return !1;
      T = l.default.getGuildId()
    })
  }
  persist(e) {
    g.verbose("writing ClientStateStore (nonce: ".concat(e, ")")), null == E && (E = Date.now()), m = e, f.persist(u.default.getId(), {
      nonce: e,
      version: c.CACHE_VERSION,
      useGuildVersions: h,
      userGuildSettingsVersion: v,
      cacheCreationDate: E,
      apiCodeVersion: p,
      guildIdsRequiringDeletedIdsSync: Array.from(y),
      lastSelectedGuildId: T
    })
  }
  clear() {
    I()
  }
  async getClientState() {
    let [e, t] = await Promise.all([h && (0, _.isCacheEnabled)() ? a.default.getCommittedVersions() : Promise.resolve({}), h && (0, _.isCacheEnabled)() ? o.default.getCommittedVersions() : Promise.resolve({})]);
    return {
      knownGuildVersions: e,
      highestLastMessageId: t.highest_last_message_id,
      readStateVersion: t.read_state_version,
      userGuildSettingsVersion: v,
      privateChannelsVersion: t.private_channels_version,
      apiCodeVersion: p,
      lastSelectedGuildId: T,
      userSettingsVersion: t.user_settings_version
    }
  }
  getGuildIdsRequiringDeletedIdsSync() {
    return y
  }
  getSavedNonce() {
    return m
  }
}
S.displayName = "ClientStateStore";
var A = new S(r.default, {
  BACKGROUND_SYNC: function(e) {
    for (let t of e.guilds) "partial" === t.data_mode && t.unableToSyncDeletes && y.add(t.id);
    null != e.apiCodeVersion && (p = e.apiCodeVersion)
  },
  CONNECTION_OPEN: function(e) {
    let {
      guilds: t,
      userGuildSettings: n,
      apiCodeVersion: s
    } = e;
    for (let e of (v = n.version, p = s, C = !0, h = !0, t)) e.unableToSyncDeletes && y.add(e.id), e.unableToSyncDeletes && y.add(e.id)
  },
  DELETED_ENTITY_IDS: function(e) {
    y.delete(e.guild_id)
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    !t.unavailable && (t.unableToSyncDeletes && y.add(t.id), t.unableToSyncDeletes && y.add(t.id))
  },
  CLEAR_GUILD_CACHE: I,
  CLEAR_CACHES: I,
  LOGOUT: I,
  LOGIN: I,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    for (let e of t) null != e.version && e.version > v && (v = e.version)
  }
})