"use strict";
E.r(_), E.d(_, {
  default: function() {
    return n
  }
}), E("222007");
var t = E("91131"),
  o = E("802493"),
  n = new class e {
    async getAll() {
      let e = o.default.guildsRequiringDeletedIdsSync();
      if (null == e) return new Set;
      let _ = await e.getMany();
      return new Set(_.map(e => e.id))
    }
    handleConnectionOpen(e, _) {
      var E;
      let {
        guilds: n
      } = e, r = n.filter(e => e.unableToSyncDeletes).map(e => ({
        id: e.id
      }));
      r.length > 0 && o.default.guildsRequiringDeletedIdsSyncTransaction(_).putAll(r), null === (E = t.initialState.guildIdsRequiringDeletedIdsSync) || void 0 === E || E.forEach(e => {
        o.default.guildsRequiringDeletedIdsSyncTransaction(_).put({
          id: e
        })
      })
    }
    handleBackgroundSync(e, _) {
      let {
        guilds: E
      } = e, t = E.filter(e => "partial" === e.data_mode && e.unableToSyncDeletes).map(e => ({
        id: e.id
      }));
      t.length > 0 && o.default.guildsRequiringDeletedIdsSyncTransaction(_).putAll(t)
    }
    handleGuildCreate(e, _) {
      let {
        guild: E
      } = e;
      E.unableToSyncDeletes && o.default.guildsRequiringDeletedIdsSyncTransaction(_).put({
        id: E.id
      })
    }
    handleDeletedEntityIds(e, _) {
      o.default.guildsRequiringDeletedIdsSyncTransaction(_).delete(e.guild_id)
    }
    handleClear(e) {
      o.default.guildsRequiringDeletedIdsSyncTransaction(e).delete()
    }
    handleReset() {}
    constructor() {
      this.actions = {
        CLEAR_CACHES: (e, _) => this.handleClear(_),
        CLEAR_GUILD_CACHE: (e, _) => this.handleClear(_),
        BACKGROUND_SYNC: (e, _) => this.handleBackgroundSync(e, _),
        CONNECTION_OPEN: (e, _) => this.handleConnectionOpen(e, _),
        GUILD_CREATE: (e, _) => this.handleGuildCreate(e, _),
        DELETED_ENTITY_IDS: (e, _) => this.handleDeletedEntityIds(e, _)
      }
    }
  }