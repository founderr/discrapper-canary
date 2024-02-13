"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var s = n("446674"),
  i = n("913144"),
  r = n("105059"),
  a = n("11275"),
  o = n("605250"),
  d = n("271938"),
  u = n("162771"),
  l = n("91131"),
  f = n("70754"),
  _ = n("548578");
let c = new o.default("ClientStateStore"),
  g = l.initialState.nonce,
  m = l.initialState.useGuildVersions,
  h = l.initialState.cacheCreationDate,
  v = l.initialState.lastSelectedGuildId,
  E = !1;

function p() {
  l.clear()
}
class y extends s.default.Store {
  initialize() {
    this.waitFor(d.default), this.syncWith([u.default], () => {
      if (!E) return !1;
      v = u.default.getGuildId()
    })
  }
  persist(e) {
    c.verbose("writing ClientStateStore (nonce: ".concat(e, ")")), null == h && (h = Date.now()), g = e, l.persist(d.default.getId(), {
      nonce: e,
      version: _.CACHE_VERSION,
      useGuildVersions: m,
      cacheCreationDate: h,
      lastSelectedGuildId: v
    })
  }
  clear() {
    p()
  }
  async getClientState() {
    let [e, t] = await Promise.all([m && (0, f.isCacheEnabled)() ? r.default.getCommittedVersions() : Promise.resolve({}), m && (0, f.isCacheEnabled)() ? a.default.getCommittedVersions() : Promise.resolve({})]);
    return {
      knownGuildVersions: e,
      highestLastMessageId: t.highest_last_message_id,
      readStateVersion: t.read_state_version,
      userGuildSettingsVersion: t.user_guild_settings_version,
      privateChannelsVersion: t.private_channels_version,
      apiCodeVersion: t.api_code_version,
      lastSelectedGuildId: v,
      userSettingsVersion: t.user_settings_version
    }
  }
  getSavedNonce() {
    return g
  }
}
y.displayName = "ClientStateStore";
var T = new y(i.default, {
  CONNECTION_OPEN: function() {
    E = !0, m = !0
  },
  CLEAR_GUILD_CACHE: p,
  CLEAR_CACHES: p,
  LOGOUT: p,
  LOGIN: p
})