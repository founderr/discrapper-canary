"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var i = n("91131"),
  a = n("802493"),
  l = new class e {
    async getAll() {
      let e = a.default.guildsRequiringDeletedIdsSync();
      if (null == e) return new Set;
      let t = await e.getMany();
      return new Set(t.map(e => e.id))
    }
    handleConnectionOpen(e, t) {
      var n;
      let {
        guilds: l
      } = e, s = l.filter(e => e.unableToSyncDeletes).map(e => ({
        id: e.id
      }));
      s.length > 0 && a.default.guildsRequiringDeletedIdsSyncTransaction(t).putAll(s), null === (n = i.initialState.guildIdsRequiringDeletedIdsSync) || void 0 === n || n.forEach(e => {
        a.default.guildsRequiringDeletedIdsSyncTransaction(t).put({
          id: e
        })
      })
    }
    handleBackgroundSync(e, t) {
      let {
        guilds: n
      } = e, i = n.filter(e => "partial" === e.data_mode && e.unableToSyncDeletes).map(e => ({
        id: e.id
      }));
      i.length > 0 && a.default.guildsRequiringDeletedIdsSyncTransaction(t).putAll(i)
    }
    handleGuildCreate(e, t) {
      let {
        guild: n
      } = e;
      n.unableToSyncDeletes && a.default.guildsRequiringDeletedIdsSyncTransaction(t).put({
        id: n.id
      })
    }
    handleDeletedEntityIds(e, t) {
      a.default.guildsRequiringDeletedIdsSyncTransaction(t).delete(e.guild_id)
    }
    handleClear(e) {
      a.default.guildsRequiringDeletedIdsSyncTransaction(e).delete()
    }
    handleReset() {}
    constructor() {
      this.actions = {
        CLEAR_CACHES: (e, t) => this.handleClear(t),
        CLEAR_GUILD_CACHE: (e, t) => this.handleClear(t),
        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
        DELETED_ENTITY_IDS: (e, t) => this.handleDeletedEntityIds(e, t)
      }
    }
  }