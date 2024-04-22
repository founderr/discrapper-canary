"use strict";
a.r(t), a("47120");
var n = a("392711"),
  s = a.n(n),
  l = a("710845"),
  i = a("581883"),
  r = a("314897"),
  o = a("287328"),
  u = a("261875");

function d(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let c = new l.default("UserSettingsProto");
t.default = new class e {
  async getAll(e) {
    let t = performance.now(),
      a = await o.default.userSettings(e).getMany(),
      n = performance.now();
    c.verbose("loaded in ".concat(n - t, "ms (settings: ").concat(a.length, ")"));
    let s = {};
    for (let e of a) s[e.id] = e.value;
    return s
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
        t = u.default.database(e);
      null == t || t.transaction(e => {
        var t, a;
        let n = i.default.computeState(),
          s = o.default.userSettingsTransaction(e);
        for (let e in n) s.put({
          id: Number(e),
          value: n[e]
        });
        let l = null !== (a = null === (t = i.default.settings.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== a ? a : -1;
        o.default.nonGuildVersionsTransaction(e).put({
          id: "user_settings_version",
          version: l
        })
      }, "handleUserSettingsProtoChange")
    }), d(this, "throttledOnChange", s().debounce(this.handleUserSettingsProtoChange, 0))
  }
}