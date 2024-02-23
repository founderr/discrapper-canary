"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("424973");
var l = n("446674"),
  a = n("913144"),
  s = n("513688");
let i = [],
  r = {},
  o = {};
class u extends l.default.Store {
  getSearchState(e) {
    var t;
    return null !== (t = r[e]) && void 0 !== t ? t : {
      mostRecentQuery: "",
      fetching: !1
    }
  }
  getSearchResults(e, t) {
    var n, l, a;
    return null !== (a = null === (l = o[e]) || void 0 === l ? void 0 : null === (n = l[t]) || void 0 === n ? void 0 : n.results) && void 0 !== a ? a : i
  }
  shouldFetch(e, t) {
    var n, l;
    let a = null === (l = o[e]) || void 0 === l ? void 0 : null === (n = l[t]) || void 0 === n ? void 0 : n.lastSearchedAt;
    return null == a || Date.now() - a > 12e4
  }
}
u.displayName = "GuildDirectorySearchStore";
var d = new u(a.default, {
  GUILD_DIRECTORY_SEARCH_START: function(e) {
    let {
      channelId: t,
      query: n
    } = e;
    r[t] = {
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
    r[t] = {
      ...r[t],
      fetching: !1
    };
    let a = [];
    l.forEach(e => {
      let t = (0, s.guildDirectoryEntryFromServer)(e);
      a.push(t)
    }), o[t] = {
      ...o[t],
      [n]: {
        results: (0, s.orderByTotalMemberCount)(a),
        lastSearchedAt: Date.now()
      }
    }
  },
  GUILD_DIRECTORY_SEARCH_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    r[t] = {
      ...r[t],
      fetching: !1
    }
  },
  GUILD_DIRECTORY_SEARCH_CLEAR: function(e) {
    let {
      channelId: t
    } = e;
    r[t] = {
      fetching: !1,
      mostRecentQuery: ""
    }
  },
  GUILD_DIRECTORY_CACHED_SEARCH: function(e) {
    let {
      channelId: t,
      query: n
    } = e;
    r[t] = {
      fetching: !1,
      mostRecentQuery: n
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
    var t;
    let {
      channelId: n,
      guildId: l
    } = e, a = null === (t = r[n]) || void 0 === t ? void 0 : t.mostRecentQuery;
    if (null == a) return;
    let s = o[n][a];
    if (null == s) return;
    let i = s.results.filter(e => e.guildId !== l);
    o[n] = {
      ...o[n],
      [r[n].mostRecentQuery]: {
        ...s,
        results: i
      }
    }
  }
})