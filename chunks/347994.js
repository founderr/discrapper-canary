"use strict";
s.r(t), s("47120");
var n = s("392711"),
  a = s.n(n),
  l = s("710845"),
  i = s("581883"),
  r = s("314897"),
  o = s("287328"),
  u = s("261875");

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
      s = await o.default.userSettings(e).getMany(),
      n = performance.now();
    c.verbose("loaded in ".concat(n - t, "ms (settings: ").concat(s.length, ")"));
    let a = {};
    for (let e of s) a[e.id] = e.value;
    return a
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
        var t, s;
        let n = i.default.computeState(),
          a = o.default.userSettingsTransaction(e);
        for (let e in n) a.put({
          id: Number(e),
          value: n[e]
        });
        let l = null !== (s = null === (t = i.default.settings.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== s ? s : -1;
        o.default.nonGuildVersionsTransaction(e).put({
          id: "user_settings_version",
          version: l
        })
      }, "handleUserSettingsProtoChange")
    }), d(this, "throttledOnChange", a().debounce(this.handleUserSettingsProtoChange, 0))
  }
}