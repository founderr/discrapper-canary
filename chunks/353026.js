"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var a = n("917351"),
  s = n.n(a),
  i = n("605250"),
  l = n("374363"),
  r = n("271938"),
  o = n("802493"),
  u = n("723939");
let d = new i.default("UserSettingsProto");
var c = new class e {
  async getAll(e) {
    let t = performance.now(),
      n = await o.default.userSettings(e).getMany(),
      a = performance.now();
    d.verbose("loaded in ".concat(a - t, "ms (settings: ").concat(n.length, ")"));
    let s = {};
    for (let e of n) s[e.id] = e.value;
    return s
  }
  resetInMemoryState() {}
  constructor() {
    this.actions = {
      CONNECTION_OPEN: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange()
    }, this.handleUserSettingsProtoChange = () => {
      let e = r.default.getId(),
        t = u.default.database(e);
      null == t || t.transaction(e => {
        var t, n;
        let a = l.default.computeState(),
          s = o.default.userSettingsTransaction(e);
        for (let e in a) s.put({
          id: Number(e),
          value: a[e]
        });
        let i = null !== (n = null === (t = l.default.settings.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : -1;
        o.default.nonGuildVersionsTransaction(e).put({
          id: "user_settings_version",
          version: i
        })
      }, "handleUserSettingsProtoChange")
    }, this.throttledOnChange = s.debounce(this.handleUserSettingsProtoChange, 0)
  }
}