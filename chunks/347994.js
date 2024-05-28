"use strict";
s.r(t), s("47120");
var a = s("392711"),
  n = s.n(a),
  l = s("710845"),
  i = s("581883"),
  r = s("314897"),
  u = s("287328"),
  o = s("261875");

function d(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let c = new l.default("UserSettingsProto");
t.default = new class e {
  async getAll(e) {
    let t = performance.now(),
      s = await u.default.userSettings(e).getMany(),
      a = performance.now();
    c.verbose("loaded in ".concat(a - t, "ms (settings: ").concat(s.length, ")"));
    let n = {};
    for (let e of s) n[e.id] = e.value;
    return n
  }
  resetInMemoryState() {}
  constructor() {
    d(this, "actions", {
      CONNECTION_OPEN: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange()
    }), d(this, "handleUserSettingsProtoChange", () => {
      let e = r.default.getId(),
        t = o.default.database(e);
      null == t || t.transaction(e => {
        var t, s;
        let a = i.default.computeState(),
          n = u.default.userSettingsTransaction(e);
        for (let e in a) n.put({
          id: Number(e),
          value: a[e]
        });
        let l = null !== (s = null === (t = i.default.settings.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== s ? s : -1;
        u.default.nonGuildVersionsTransaction(e).put({
          id: "user_settings_version",
          version: l
        })
      }, "handleUserSettingsProtoChange")
    }), d(this, "throttledOnChange", n().debounce(this.handleUserSettingsProtoChange, 0))
  }
}