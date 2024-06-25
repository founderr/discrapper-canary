s(47120);
var n = s(392711),
  a = s.n(n),
  i = s(710845),
  r = s(581883),
  l = s(314897),
  o = s(287328),
  c = s(261875);

function E(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let _ = new i.Z("UserSettingsProto");
t.Z = new class e {
  async getAll(e) {
    let t = performance.now(),
      s = await o.Z.userSettings(e).getMany(),
      n = performance.now();
    _.verbose("loaded in ".concat(n - t, "ms (settings: ").concat(s.length, ")"));
    let a = {};
    for (let e of s) a[e.id] = e.value;
    return a
  }
  resetInMemoryState() {}
  constructor() {
    E(this, "actions", {
      CONNECTION_OPEN: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange()
    }), E(this, "handleUserSettingsProtoChange", () => {
      let e = l.default.getId(),
        t = c.Z.database(e);
      null == t || t.transaction(e => {
        var t, s;
        let n = r.Z.computeState(),
          a = o.Z.userSettingsTransaction(e);
        for (let e in n) a.put({
          id: Number(e),
          value: n[e]
        });
        let i = null !== (s = null === (t = r.Z.settings.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== s ? s : -1;
        o.Z.nonGuildVersionsTransaction(e).put({
          id: "user_settings_version",
          version: i
        })
      }, "handleUserSettingsProtoChange")
    }), E(this, "throttledOnChange", a().debounce(this.handleUserSettingsProtoChange, 0))
  }
}