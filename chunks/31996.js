"use strict";
n.r(t), n.d(t, {
  fetchBasicGuild: function() {
    return u
  }
}), n("47120");
var i = n("544891"),
  r = n("570140"),
  s = n("430824"),
  a = n("356264"),
  o = n("981631");
let l = new Set;
async function u(e) {
  if (null == s.default.getGuild(e) && null == a.default.getGuild(e)) {
    if (!l.has(e)) {
      r.default.dispatch({
        type: "BASIC_GUILD_FETCH",
        guildId: e
      }), l.add(e);
      try {
        let t = (await i.HTTP.get({
          url: o.Endpoints.GUILD_BASIC(e),
          oldFormErrors: !0
        })).body;
        r.default.dispatch({
          type: "BASIC_GUILD_FETCH_SUCCESS",
          guildId: e,
          guildInfo: t
        })
      } catch (t) {
        r.default.dispatch({
          type: "BASIC_GUILD_FETCH_FAILURE",
          guildId: e
        })
      } finally {
        l.delete(e)
      }
    }
  }
}