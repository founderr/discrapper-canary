n(47120);
var s = n(392711),
  i = n.n(s),
  a = n(710845),
  l = n(581883),
  r = n(314897),
  c = n(287328),
  o = n(261875);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = new a.Z("UserSettingsProto");
t.Z = new class e {
  async getAll(e) {
    let t = performance.now(),
      n = await c.Z.userSettings(e).getMany(),
      s = performance.now();
    u.verbose("loaded in ".concat(s - t, "ms (settings: ").concat(n.length, ")"));
    let i = {};
    for (let e of n) i[e.id] = e.value;
    return i
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
        t = o.Z.database(e);
      null == t || t.transaction(e => {
        var t, n;
        let s = l.Z.computeState(),
          i = c.Z.userSettingsTransaction(e);
        for (let e in s) i.put({
          id: Number(e),
          value: s[e]
        });
        let a = null !== (n = null === (t = l.Z.settings.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : -1;
        c.Z.nonGuildVersionsTransaction(e).put({
          id: "user_settings_version",
          version: a
        })
      }, "handleUserSettingsProtoChange")
    }), d(this, "throttledOnChange", i().debounce(this.handleUserSettingsProtoChange, 0))
  }
}