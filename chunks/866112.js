n(653041);
var l, i, s, a, r = n(442837),
  o = n(570140),
  c = n(975984);
let u = [],
  d = {},
  h = {};
class m extends(l = r.ZP.Store) {
  getSearchState(e) {
    var t;
    return null !== (t = d[e]) && void 0 !== t ? t : {
      mostRecentQuery: "",
      fetching: !1
    }
  }
  getSearchResults(e, t) {
    var n, l, i;
    return null !== (i = null === (l = h[e]) || void 0 === l ? void 0 : null === (n = l[t]) || void 0 === n ? void 0 : n.results) && void 0 !== i ? i : u
  }
  shouldFetch(e, t) {
    var n, l;
    let i = null === (l = h[e]) || void 0 === l ? void 0 : null === (n = l[t]) || void 0 === n ? void 0 : n.lastSearchedAt;
    return null == i || Date.now() - i > 12e4
  }
}
a = "GuildDirectorySearchStore", (s = "displayName") in(i = m) ? Object.defineProperty(i, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = a, t.Z = new m(o.Z, {
  GUILD_DIRECTORY_SEARCH_START: function(e) {
    let {
      channelId: t,
      query: n
    } = e;
    d[t] = {
      fetching: !0,
      mostRecentQuery: n
    }
  },
  GUILD_DIRECTORY_SEARCH_SUCCESS: function(e) {
    let {
      channelId: t,
      query: n,
      results: l
    } = e;
    d[t] = {
      ...d[t],
      fetching: !1
    };
    let i = [];
    l.forEach(e => {
      let t = (0, c.MQ)(e);
      i.push(t)
    }), h[t] = {
      ...h[t],
      [n]: {
        results: (0, c.Th)(i),
        lastSearchedAt: Date.now()
      }
    }
  },
  GUILD_DIRECTORY_SEARCH_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    d[t] = {
      ...d[t],
      fetching: !1
    }
  },
  GUILD_DIRECTORY_SEARCH_CLEAR: function(e) {
    let {
      channelId: t
    } = e;
    d[t] = {
      fetching: !1,
      mostRecentQuery: ""
    }
  },
  GUILD_DIRECTORY_CACHED_SEARCH: function(e) {
    let {
      channelId: t,
      query: n
    } = e;
    d[t] = {
      fetching: !1,
      mostRecentQuery: n
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
    var t;
    let {
      channelId: n,
      guildId: l
    } = e, i = null === (t = d[n]) || void 0 === t ? void 0 : t.mostRecentQuery;
    if (null == i) return;
    let s = h[n][i];
    if (null == s) return;
    let a = s.results.filter(e => e.guildId !== l);
    h[n] = {
      ...h[n],
      [d[n].mostRecentQuery]: {
        ...s,
        results: a
      }
    }
  }
})