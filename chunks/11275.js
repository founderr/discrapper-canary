"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("605250"),
  i = n("802493");
let r = new s.default("NonGuildVersions");
var a = new class e {
  async getCommittedVersions() {
    try {
      let e = i.default.nonGuildVersions();
      if (null == e) return {};
      let t = (await e.getMany()).map(e => [e.id, "version" in e ? e.version : e.versionString]);
      return Object.fromEntries(null != t ? t : [])
    } catch (e) {
      return r.warn("couldn't load guild versions", e), {}
    }
  }
  handleClear(e) {
    i.default.nonGuildVersionsTransaction(e).delete()
  }
  handleReset() {}
  constructor() {
    this.actions = {
      CLEAR_CACHES: (e, t) => this.handleClear(t),
      CLEAR_GUILD_CACHE: (e, t) => this.handleClear(t)
    }
  }
}