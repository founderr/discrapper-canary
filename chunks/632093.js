s(47120);
var n = s(392711),
  a = s.n(n),
  i = s(710845),
  r = s(9156),
  l = s(287328);
let o = new i.Z("ReadStates");
t.Z = new class e {
  async getAll(e) {
    let t = performance.now(),
      s = await l.Z.userGuildSettings(e).getMany(),
      n = performance.now();
    return o.log("asynchronously loaded in ".concat(n - t, "ms (userGuildSettings: ").concat(s.length, ")")), s
  }
  resetInMemoryState() {}
  handleConnectionOpen(e, t) {
    !e.userGuildSettings.partial && l.Z.userGuildSettingsTransaction(t).delete(), this.write(e.userGuildSettings.entries, e.userGuildSettings.version, t)
  }
  handleUserGuildSettingsUpdate(e, t) {
    let s = a().max(e.userGuildSettings.map(e => {
      var t;
      return null !== (t = e.version) && void 0 !== t ? t : -1
    }));
    null != s && this.write(e.userGuildSettings, s, t)
  }
  write(e, t, s) {
    let n = l.Z.userGuildSettingsTransaction(s);
    for (let t of e) {
      var a;
      let e = {
        ...(0, r.wL)(t.guild_id),
        ...t,
        channel_overrides: (0, r.U2)(t.channel_overrides)
      };
      n.put(null !== (a = t.guild_id) && void 0 !== a ? a : "dm-sentinel", e)
    }
    l.Z.nonGuildVersionsTransaction(s).put({
      id: "user_guild_settings_version",
      version: t
    })
  }
  constructor() {
    var e, t, s;
    e = this, t = "actions", s = {
      CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
      USER_GUILD_SETTINGS_FULL_UPDATE: (e, t) => this.handleUserGuildSettingsUpdate(e, t)
    }, t in e ? Object.defineProperty(e, t, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = s
  }
}