"use strict";
a.r(t);
var n, s = a("442837"),
  l = a("570140"),
  i = a("914010"),
  r = a("626135"),
  o = a("981631");

function u(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let d = {};

function c(e) {
  var t;
  if (null == e || e === o.ME || e === o.FAVORITES) return !1;
  let a = null !== (t = d[e]) && void 0 !== t ? t : 0;
  if (Date.now() <= a + 288e5) return !1;
  d[e] = Date.now(), r.default.track(o.AnalyticEvents.HIGHLIGHTS_TEST_LOADED, {
    guild_id: e
  })
}
class f extends(n = s.default.PersistedStore) {
  initialize(e) {
    this.waitFor(i.default), null != e && (d = e.lastHighlightsLoadMillis)
  }
  getState() {
    return {
      lastHighlightsLoadMillis: d
    }
  }
}
u(f, "displayName", "HighlightsTestStore"), u(f, "persistKey", "HighlightsTestStore"), new f(l.default, {
  CONNECTION_OPEN: function() {
    return c(i.default.getGuildId())
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t
    } = e;
    return c(t)
  }
})