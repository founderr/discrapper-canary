"use strict";
a.r(t), a("47120");
var n = a("392711"),
  s = a.n(n),
  l = a("710845"),
  i = a("9156"),
  r = a("287328");
let o = new l.default("ReadStates");
t.default = new class e {
  async getAll(e) {
    let t = performance.now(),
      a = await r.default.userGuildSettings(e).getMany(),
      n = performance.now();
    return o.log("asynchronously loaded in ".concat(n - t, "ms (userGuildSettings: ").concat(a.length, ")")), a
  }
  resetInMemoryState() {}
  handleConnectionOpen(e, t) {
    !e.userGuildSettings.partial && r.default.userGuildSettingsTransaction(t).delete(), this.write(e.userGuildSettings.entries, e.userGuildSettings.version, t)
  }
  handleUserGuildSettingsUpdate(e, t) {
    let a = s().max(e.userGuildSettings.map(e => {
      var t;
      return null !== (t = e.version) && void 0 !== t ? t : -1
    }));
    null != a && this.write(e.userGuildSettings, a, t)
  }
  write(e, t, a) {
    let n = r.default.userGuildSettingsTransaction(a);
    for (let t of e) {
      var s;
      let e = {
        ...(0, i.getGuildDefaults)(t.guild_id),
        ...t,
        channel_overrides: (0, i.convertChannelOverridesToMap)(t.channel_overrides)
      };
      n.put(null !== (s = t.guild_id) && void 0 !== s ? s : "dm-sentinel", e)
    }
    r.default.nonGuildVersionsTransaction(a).put({
      id: "user_guild_settings_version",
      version: t
    })
  }
  constructor() {
    var e, t, a;
    e = this, t = "actions", a = {
      CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
      USER_GUILD_SETTINGS_FULL_UPDATE: (e, t) => this.handleUserGuildSettingsUpdate(e, t)
    }, t in e ? Object.defineProperty(e, t, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = a
  }
}