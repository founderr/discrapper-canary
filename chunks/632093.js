"use strict";
s.r(t), s("47120");
var a = s("392711"),
  n = s.n(a),
  l = s("710845"),
  i = s("9156"),
  r = s("287328");
let u = new l.default("ReadStates");
t.default = new class e {
  async getAll(e) {
    let t = performance.now(),
      s = await r.default.userGuildSettings(e).getMany(),
      a = performance.now();
    return u.log("asynchronously loaded in ".concat(a - t, "ms (userGuildSettings: ").concat(s.length, ")")), s
  }
  resetInMemoryState() {}
  handleConnectionOpen(e, t) {
    !e.userGuildSettings.partial && r.default.userGuildSettingsTransaction(t).delete(), this.write(e.userGuildSettings.entries, e.userGuildSettings.version, t)
  }
  handleUserGuildSettingsUpdate(e, t) {
    let s = n().max(e.userGuildSettings.map(e => {
      var t;
      return null !== (t = e.version) && void 0 !== t ? t : -1
    }));
    null != s && this.write(e.userGuildSettings, s, t)
  }
  write(e, t, s) {
    let a = r.default.userGuildSettingsTransaction(s);
    for (let t of e) {
      var n;
      let e = {
        ...(0, i.getGuildDefaults)(t.guild_id),
        ...t,
        channel_overrides: (0, i.convertChannelOverridesToMap)(t.channel_overrides)
      };
      a.put(null !== (n = t.guild_id) && void 0 !== n ? n : "dm-sentinel", e)
    }
    r.default.nonGuildVersionsTransaction(s).put({
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