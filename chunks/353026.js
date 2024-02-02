"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("917351"),
  s = n.n(a),
  l = n("605250"),
  i = n("374363"),
  r = n("271938"),
  o = n("802493"),
  u = n("723939"),
  d = n("11275");
let c = new l.default("UserSettingsProto");
var f = new class e {
  async getAll(e) {
    let t = performance.now(),
      n = await o.default.userSettings(e).getMany(),
      a = performance.now();
    c.verbose("loaded in ".concat(a - t, "ms (settings: ").concat(n.length, ")"));
    let s = {};
    for (let e of n) s[e.id] = e.value;
    return s
  }
  handleClear(e) {
    o.default.userSettingsTransaction(e).delete()
  }
  handleReset() {}
  constructor() {
    this.actions = {
      CLEAR_CACHES: (e, t) => this.handleClear(t),
      CLEAR_GUILD_CACHE: (e, t) => this.handleClear(t),
      CONNECTION_OPEN: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange()
    }, this.handleUserSettingsProtoChange = () => {
      let e = r.default.getId(),
        t = u.default.database(e);
      null == t || t.transaction(e => {
        let t = i.default.computeState(),
          n = o.default.userSettingsTransaction(e);
        for (let e in t) n.put({
          id: Number(e),
          value: t[e]
        });
        d.default.handleUserSettingsProtoChange(e)
      }, "handleUserSettingsProtoChange")
    }, this.throttledOnChange = s.debounce(this.handleUserSettingsProtoChange, 0)
  }
}