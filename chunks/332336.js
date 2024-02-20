"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var i = n("913144"),
  a = n("689988"),
  l = n("525065"),
  s = n("299039"),
  r = n("178406");
let o = {},
  u = {},
  d = null;
async function c(e, t) {
  null == o[e] && (o[e] = new Set), o[e].add(t), null == u[e] && (u[e] = Date.now()), E(e) && await f(e)
}

function f(e) {
  if (null == o[e]) return;
  let t = Array.from(o[e]);
  o[e] = new Set, u[e] = Date.now(), requestAnimationFrame(async () => {
    await i.default.dispatch({
      type: "MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH",
      guildId: e,
      userIds: t
    })
  })
}

function E(e) {
  let t = o[e];
  if (null == t) return !1;
  let n = t.size >= function(e) {
      var t;
      let n = null !== (t = l.default.getMemberCount(e)) && void 0 !== t ? t : 0;
      return n >= 75e3 ? 10 : 2
    }(e),
    i = u[e];
  if (n) return !0;
  if (null == i) return !1;
  let a = Date.now() - i,
    s = null != i && a >= function(e) {
      var t;
      let n = null !== (t = l.default.getMemberCount(e)) && void 0 !== t ? t : 0;
      return n >= 75e3 ? 5e3 : 2e3
    }(e);
  return s
}

function h(e) {
  o[e] = new Set, u[e] = null
}
class _ extends a.default {
  handleInitialize() {
    null == d && null == d && (d = setInterval(() => {
      s.default.forEachKey(o, e => {
        E(e) && f(e)
      })
    }, 1e4))
  }
  handleGuildMemberUpdate(e, t) {
    let n = r.default.isInitialized(e);
    if (n) return c(e, t)
  }
  handleGuildMemberRemove(e, t) {
    let n = r.default.isInitialized(e);
    if (n) return c(e, t)
  }
  handleGuildDelete(e) {
    let t = e.guild.id,
      n = r.default.isInitialized(t);
    n && h(t)
  }
  handleGuildMemberSearchSuccess(e) {
    let {
      guildId: t
    } = e, n = r.default.isInitialized(t);
    n && h(t)
  }
  constructor(...e) {
    super(...e), this.actions = {
      INITIALIZE_MEMBER_SAFETY_STORE: () => this.handleInitialize(),
      GUILD_MEMBER_ADD: e => this.handleGuildMemberUpdate(e.guildId, e.user.id),
      GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e.guildId, e.user.id),
      GUILD_MEMBER_REMOVE: e => this.handleGuildMemberRemove(e.guildId, e.user.id),
      MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: e => this.handleGuildMemberSearchSuccess(e)
    }
  }
}
var C = new _