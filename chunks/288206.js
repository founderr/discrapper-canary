"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
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
  v = f.initialState.cacheCreationDate,
  E = f.initialState.apiCodeVersion,
  p = new Set(null !== (s = f.initialState.guildIdsRequiringDeletedIdsSync) && void 0 !== s ? s : []),
  y = f.initialState.lastSelectedGuildId,
  T = !1;

function C() {
  f.clear(), E = 0, p.clear()
}
class I extends i.default.Store {
  initialize() {
    this.waitFor(u.default), this.syncWith([l.default], () => {
      if (!T) return !1;
      y = l.default.getGuildId()
    })
  }
  persist(e) {
    g.verbose("writing ClientStateStore (nonce: ".concat(e, ")")), null == v && (v = Date.now()), m = e, f.persist(u.default.getId(), {
      nonce: e,
      version: c.CACHE_VERSION,
      useGuildVersions: h,
      cacheCreationDate: v,
      apiCodeVersion: E,
      guildIdsRequiringDeletedIdsSync: Array.from(p),
      lastSelectedGuildId: y
    })
  }
  clear() {
    C()
  }
  async getClientState() {
    let [e, t] = await Promise.all([h && (0, _.isCacheEnabled)() ? a.default.getCommittedVersions() : Promise.resolve({}), h && (0, _.isCacheEnabled)() ? o.default.getCommittedVersions() : Promise.resolve({})]);
    return {
      knownGuildVersions: e,
      highestLastMessageId: t.highest_last_message_id,
      readStateVersion: t.read_state_version,
      userGuildSettingsVersion: t.user_guild_settings_version,
      privateChannelsVersion: t.private_channels_version,
      apiCodeVersion: E,
      lastSelectedGuildId: y,
      userSettingsVersion: t.user_settings_version
    }
  }
  getGuildIdsRequiringDeletedIdsSync() {
    return p
  }
  getSavedNonce() {
    return m
  }
}
I.displayName = "ClientStateStore";
var S = new I(r.default, {
  BACKGROUND_SYNC: function(e) {
    for (let t of e.guilds) "partial" === t.data_mode && t.unableToSyncDeletes && p.add(t.id);
    null != e.apiCodeVersion && (E = e.apiCodeVersion)
  },
  CONNECTION_OPEN: function(e) {
    let {
      guilds: t,
      apiCodeVersion: n
    } = e;
    for (let e of (E = n, T = !0, h = !0, t)) e.unableToSyncDeletes && p.add(e.id), e.unableToSyncDeletes && p.add(e.id)
  },
  DELETED_ENTITY_IDS: function(e) {
    p.delete(e.guild_id)
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    !t.unavailable && (t.unableToSyncDeletes && p.add(t.id), t.unableToSyncDeletes && p.add(t.id))
  },
  CLEAR_GUILD_CACHE: C,
  CLEAR_CACHES: C,
  LOGOUT: C,
  LOGIN: C
})