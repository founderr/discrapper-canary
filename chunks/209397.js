"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var a = n("446674"),
  l = n("913144"),
  s = n("513688"),
  i = n("730647");
let r = Object.freeze({}),
  o = !1,
  u = {},
  d = {},
  c = {},
  f = {},
  h = {};
class m extends a.default.Store {
  isFetching() {
    return o
  }
  getCurrentCategoryId(e) {
    var t;
    return null !== (t = d[e]) && void 0 !== t ? t : i.DirectoryEntryCategories.ALL
  }
  getDirectoryEntries(e, t) {
    var n;
    return null != t ? null === (n = c[e]) || void 0 === n ? void 0 : n[t] : u[e]
  }
  getDirectoryEntry(e, t) {
    var n;
    return null === (n = u[e]) || void 0 === n ? void 0 : n[t]
  }
  getDirectoryAllEntriesCount(e) {
    var t;
    return Object.keys(null !== (t = u[e]) && void 0 !== t ? t : {}).length
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
var p = new m(l.default, {
  GUILD_DIRECTORY_FETCH_START: function() {
    o = !0
  },
  GUILD_DIRECTORY_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e;
    o = !1;
    let a = {},
      l = {};
    n.forEach(e => {
      let t = (0, s.guildDirectoryEntryFromServer)(e);
      a[t.guildId] = t, null != l[t.primaryCategoryId] ? l[t.primaryCategoryId][t.guildId] = t : l[t.primaryCategoryId] = {
        [t.guildId]: t
      }
    }), u[t] = a, c[t] = l
  },
  GUILD_DIRECTORY_FETCH_FAILURE: function() {
    o = !1
  },
  GUILD_DIRECTORY_ENTRY_CREATE: function(e) {
    var t, n, a, l, r;
    let {
      channelId: o,
      entry: d
    } = e, h = (0, s.guildDirectoryEntryFromServer)(d);
    if (null == h || (null === (t = u[o]) || void 0 === t ? void 0 : t[h.guildId]) != null) return;
    u[o] = {
      ...u[o],
      [h.guildId]: h
    };
    let m = null !== (a = h.primaryCategoryId) && void 0 !== a ? a : i.DirectoryEntryCategories.UNCATEGORIZED;
    if (c[o] = {
        ...c[o],
        [m]: {
          ...null === (n = c[o]) || void 0 === n ? void 0 : n[m],
          [h.guildId]: h
        }
      }, null != f[o]) {
      let e = null !== (r = null === (l = f[o]) || void 0 === l ? void 0 : l[m]) && void 0 !== r ? r : 0;
      f[o] = {
        ...f[o],
        [m]: e + 1
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
    var t, n;
    let {
      channelId: a,
      guildId: l
    } = e, s = null === (t = u[a]) || void 0 === t ? void 0 : t[l];
    if (null == s) return;
    let i = s.primaryCategoryId,
      r = Object.assign({}, u[a]);
    delete r[l], null === (n = h[a]) || void 0 === n || n.delete(l), h[a] = new Set(h[a]), u[a] = r;
    let o = Object.assign({}, c[a][i]);
    if (delete o[l], c[a] = {
        ...c[a],
        [i]: o
      }, null != f[a]) {
      let e = f[a][i] - 1;
      f[a] = {
        ...f[a],
        [i]: e >= 0 ? e : 0
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_UPDATE: function(e) {
    var t, n, a, l, r, o, d, h, m;
    let {
      channelId: p,
      entry: E
    } = e, S = (0, s.guildDirectoryEntryFromServer)(E), g = null === (t = u[p]) || void 0 === t ? void 0 : t[S.guildId];
    u[p] = {
      ...u[p],
      [S.guildId]: {
        ...g,
        ...S
      }
    };
    let C = null !== (l = null == g ? void 0 : g.primaryCategoryId) && void 0 !== l ? l : i.DirectoryEntryCategories.UNCATEGORIZED,
      _ = null !== (r = S.primaryCategoryId) && void 0 !== r ? r : i.DirectoryEntryCategories.UNCATEGORIZED,
      I = Object.assign({}, null === (n = c[p]) || void 0 === n ? void 0 : n[C]);
    null != g && C !== _ && delete I[S.guildId], c[p] = {
      ...c[p],
      [C]: I,
      [_]: {
        ...null === (a = c[p]) || void 0 === a ? void 0 : a[_],
        [S.guildId]: {
          ...g,
          ...S
        }
      }
    }, _ !== C && null != f[p] && (f[p] = {
      ...f[p],
      [C]: (null === (o = f[p]) || void 0 === o ? void 0 : o[C]) > 0 ? (null === (d = f[p]) || void 0 === d ? void 0 : d[C]) - 1 : 0,
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
    } = e, a = new Set;
    n.forEach(e => {
      let t = (0, s.guildDirectoryEntryFromServer)(e);
      a.add(t.guildId)
    }), h[t] = a
  }
})