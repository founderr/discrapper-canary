"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = 0,
  _ = {};
class c extends(o = a.ZP.Store) {
  getGuild(e) {
    let t = _[e];
    if (null != t) {
      if (!("type" in t)) return t
    }
  }
  getGuildOrStatus(e) {
    return _[e]
  }
  getVersion() {
    return u
  }
}
s = "BasicGuildStore", (r = "displayName") in(i = c) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new c(l.Z, {
  BASIC_GUILD_FETCH: function(e) {
    return _[e.guildId] = {
      type: "loading"
    }, !1
  },
  BASIC_GUILD_FETCH_SUCCESS: function(e) {
    _[e.guildId] = e.guildInfo, u++
  },
  BASIC_GUILD_FETCH_FAILURE: function(e) {
    return _[e.guildId] = {
      type: "failed"
    }, !1
  }
})