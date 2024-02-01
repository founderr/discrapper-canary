"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("605250"),
  s = n("802493"),
  r = n("723939");
let a = "version";
new i.default("KvCacheVersion");
var o = new class e {
  async okAsync(e) {
    let t = await s.default.cache(e).get(a);
    return null == t ? null : 3 === t
  }
  handleClearGuildCache(e) {
    s.default.cacheTransaction(e).delete(a), s.default.cacheTransaction(e).delete("CacheStore.Nonce"), r.default.replaceDisableAllDatabases("CLEAR_GUILD_CACHE (via KvCacheVersion)")
  }
  handleWrite(e) {
    s.default.cacheTransaction(e).put("hello", "\uD83D\uDC4B"), s.default.cacheTransaction(e).put(a, 3)
  }
  handleReset() {}
  constructor() {
    this.actions = {
      CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
      CONNECTION_OPEN: (e, t) => this.handleWrite(t),
      WRITE_CACHES: (e, t) => this.handleWrite(t)
    }
  }
}