"use strict";
n.r(t);
var i, r, s, a, o = n("442837"),
  l = n("570140");
let u = 0,
  d = {};
class _ extends(a = o.default.Store) {
  getGuild(e) {
    return d[e]
  }
  getVersion() {
    return u
  }
}
s = "BasicGuildStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.default = new _(l.default, {
  BASIC_GUILD_FETCH: function(e) {},
  BASIC_GUILD_FETCH_SUCCESS: function(e) {
    d[e.guildId] = e.guildInfo, u++
  },
  BASIC_GUILD_FETCH_FAILURE: function(e) {}
})