n.d(t, {
  M: function() {
    return r
  }
});
var s, i, l, a, r, o = n(442837),
  c = n(570140);
(s = r || (r = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED", s[s.FAILED = 3] = "FAILED";
let u = {},
  d = {};
class E extends o.yh {
  getMediaPostEmbed(e) {
    if (null != e) return u[e]
  }
  getEmbedFetchState(e) {
    var t;
    return null !== (t = d[e]) && void 0 !== t ? t : 0
  }
  getMediaPostEmbeds() {
    return u
  }
}
a = "MediaPostEmbedStore", (l = "displayName") in(i = E) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, t.Z = new E(c.Z, {
  CONNECTION_OPEN: function() {
    u = {}, d = {}
  },
  MEDIA_POST_EMBED_FETCH: function(e) {
    let {
      threadId: t
    } = e;
    d[t] = 1
  },
  MEDIA_POST_EMBED_FETCH_SUCCESS: function(e) {
    let {
      threadId: t,
      mediaPostEmbed: n
    } = e;
    u = {
      ...u,
      [t]: n
    }, d[t] = 2
  },
  MEDIA_POST_EMBED_FETCH_FAILURE: function(e) {
    let {
      threadId: t
    } = e;
    d[t] = 3
  },
  LOGOUT: function(e) {
    !e.isSwitchingAccount && (u = {}, d = {})
  }
})