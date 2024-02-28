"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var l = n("446674"),
  a = n("913144"),
  s = n("513688"),
  i = n("730647");
let r = Object.freeze({}),
  u = !1,
  o = {},
  d = {},
  c = {},
  f = {},
  h = {};
class m extends l.default.Store {
  isFetching() {
    return u
  }
  getCurrentCategoryId(e) {
    var t;
    return null !== (t = d[e]) && void 0 !== t ? t : i.DirectoryEntryCategories.ALL
  }
  getDirectoryEntries(e, t) {
    var n;
    return null != t ? null === (n = c[e]) || void 0 === n ? void 0 : n[t] : o[e]
  }
  getDirectoryEntry(e, t) {
    var n;
    return null === (n = o[e]) || void 0 === n ? void 0 : n[t]
  }
  getDirectoryAllEntriesCount(e) {
    var t;
    return Object.keys(null !== (t = o[e]) && void 0 !== t ? t : {}).length
  }
  getDirectoryCategoryCounts(e) {
    var t;
    return null !== (t = f[e]) && void 0 !== t ? t : r
  }
  getAdminGuildEntryIds(e) {
    return h[e]
  }
}
m.displayName = "GuildDirectoryStore";
var p = new m(a.default, {
  GUILD_DIRECTORY_FETCH_START: function() {
    u = !0
  },
  GUILD_DIRECTORY_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e;
    u = !1;
    let l = {},
      a = {};
    n.forEach(e => {
      let t = (0, s.guildDirectoryEntryFromServer)(e);
      l[t.guildId] = t, null != a[t.primaryCategoryId] ? a[t.primaryCategoryId][t.guildId] = t : a[t.primaryCategoryId] = {
        [t.guildId]: t
      }
    }), o[t] = l, c[t] = a
  },
  GUILD_DIRECTORY_FETCH_FAILURE: function() {
    u = !1
  },
  GUILD_DIRECTORY_ENTRY_CREATE: function(e) {
    var t, n, l, a, r;
    let {
      channelId: u,
      entry: d
    } = e, h = (0, s.guildDirectoryEntryFromServer)(d);
    if (null == h || (null === (t = o[u]) || void 0 === t ? void 0 : t[h.guildId]) != null) return;
    o[u] = {
      ...o[u],
      [h.guildId]: h
    };
    let m = null !== (l = h.primaryCategoryId) && void 0 !== l ? l : i.DirectoryEntryCategories.UNCATEGORIZED;
    if (c[u] = {
        ...c[u],
        [m]: {
          ...null === (n = c[u]) || void 0 === n ? void 0 : n[m],
          [h.guildId]: h
        }
      }, null != f[u]) {
      let e = null !== (r = null === (a = f[u]) || void 0 === a ? void 0 : a[m]) && void 0 !== r ? r : 0;
      f[u] = {
        ...f[u],
        [m]: e + 1
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
    var t, n;
    let {
      channelId: l,
      guildId: a
    } = e, s = null === (t = o[l]) || void 0 === t ? void 0 : t[a];
    if (null == s) return;
    let i = s.primaryCategoryId,
      r = Object.assign({}, o[l]);
    delete r[a], null === (n = h[l]) || void 0 === n || n.delete(a), h[l] = new Set(h[l]), o[l] = r;
    let u = Object.assign({}, c[l][i]);
    if (delete u[a], c[l] = {
        ...c[l],
        [i]: u
      }, null != f[l]) {
      let e = f[l][i] - 1;
      f[l] = {
        ...f[l],
        [i]: e >= 0 ? e : 0
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_UPDATE: function(e) {
    var t, n, l, a, r, u, d, h, m;
    let {
      channelId: p,
      entry: E
    } = e, g = (0, s.guildDirectoryEntryFromServer)(E), C = null === (t = o[p]) || void 0 === t ? void 0 : t[g.guildId];
    o[p] = {
      ...o[p],
      [g.guildId]: {
        ...C,
        ...g
      }
    };
    let S = null !== (a = null == C ? void 0 : C.primaryCategoryId) && void 0 !== a ? a : i.DirectoryEntryCategories.UNCATEGORIZED,
      _ = null !== (r = g.primaryCategoryId) && void 0 !== r ? r : i.DirectoryEntryCategories.UNCATEGORIZED,
      I = Object.assign({}, null === (n = c[p]) || void 0 === n ? void 0 : n[S]);
    null != C && S !== _ && delete I[g.guildId], c[p] = {
      ...c[p],
      [S]: I,
      [_]: {
        ...null === (l = c[p]) || void 0 === l ? void 0 : l[_],
        [g.guildId]: {
          ...C,
          ...g
        }
      }
    }, _ !== S && null != f[p] && (f[p] = {
      ...f[p],
      [S]: (null === (u = f[p]) || void 0 === u ? void 0 : u[S]) > 0 ? (null === (d = f[p]) || void 0 === d ? void 0 : d[S]) - 1 : 0,
      [_]: (null !== (m = null === (h = f[p]) || void 0 === h ? void 0 : h[_]) && void 0 !== m ? m : 0) + 1
    })
  },
  GUILD_DIRECTORY_CATEGORY_SELECT: function(e) {
    let {
      channelId: t,
      categoryId: n
    } = e;
    d[t] = n
  },
  GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      counts: n
    } = e;
    f[t] = n
  },
  GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e, l = new Set;
    n.forEach(e => {
      let t = (0, s.guildDirectoryEntryFromServer)(e);
      l.add(t.guildId)
    }), h[t] = l
  }
})