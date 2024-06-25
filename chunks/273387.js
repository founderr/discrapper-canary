n(47120);
var l, i, s, a, r = n(442837),
  o = n(570140),
  c = n(975984),
  u = n(486527);
let d = Object.freeze({}),
  h = !1,
  m = {},
  E = {},
  p = {},
  g = {},
  f = {};
class C extends(l = r.ZP.Store) {
  isFetching() {
    return h
  }
  getCurrentCategoryId(e) {
    var t;
    return null !== (t = E[e]) && void 0 !== t ? t : u.AR.ALL
  }
  getDirectoryEntries(e, t) {
    var n;
    return null != t ? null === (n = p[e]) || void 0 === n ? void 0 : n[t] : m[e]
  }
  getDirectoryEntry(e, t) {
    var n;
    return null === (n = m[e]) || void 0 === n ? void 0 : n[t]
  }
  getDirectoryAllEntriesCount(e) {
    var t;
    return Object.keys(null !== (t = m[e]) && void 0 !== t ? t : {}).length
  }
  getDirectoryCategoryCounts(e) {
    var t;
    return null !== (t = g[e]) && void 0 !== t ? t : d
  }
  getAdminGuildEntryIds(e) {
    return f[e]
  }
}
a = "GuildDirectoryStore", (s = "displayName") in(i = C) ? Object.defineProperty(i, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = a, t.Z = new C(o.Z, {
  GUILD_DIRECTORY_FETCH_START: function() {
    h = !0
  },
  GUILD_DIRECTORY_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e;
    h = !1;
    let l = {},
      i = {};
    n.forEach(e => {
      let t = (0, c.MQ)(e);
      l[t.guildId] = t, null != i[t.primaryCategoryId] ? i[t.primaryCategoryId][t.guildId] = t : i[t.primaryCategoryId] = {
        [t.guildId]: t
      }
    }), m[t] = l, p[t] = i
  },
  GUILD_DIRECTORY_FETCH_FAILURE: function() {
    h = !1
  },
  GUILD_DIRECTORY_ENTRY_CREATE: function(e) {
    var t, n, l, i, s;
    let {
      channelId: a,
      entry: r
    } = e, o = (0, c.MQ)(r);
    if (null == o || (null === (t = m[a]) || void 0 === t ? void 0 : t[o.guildId]) != null) return;
    m[a] = {
      ...m[a],
      [o.guildId]: o
    };
    let d = null !== (l = o.primaryCategoryId) && void 0 !== l ? l : u.AR.UNCATEGORIZED;
    if (p[a] = {
        ...p[a],
        [d]: {
          ...null === (n = p[a]) || void 0 === n ? void 0 : n[d],
          [o.guildId]: o
        }
      }, null != g[a]) {
      let e = null !== (s = null === (i = g[a]) || void 0 === i ? void 0 : i[d]) && void 0 !== s ? s : 0;
      g[a] = {
        ...g[a],
        [d]: e + 1
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
    var t, n;
    let {
      channelId: l,
      guildId: i
    } = e, s = null === (t = m[l]) || void 0 === t ? void 0 : t[i];
    if (null == s) return;
    let a = s.primaryCategoryId,
      r = Object.assign({}, m[l]);
    delete r[i], null === (n = f[l]) || void 0 === n || n.delete(i), f[l] = new Set(f[l]), m[l] = r;
    let o = Object.assign({}, p[l][a]);
    if (delete o[i], p[l] = {
        ...p[l],
        [a]: o
      }, null != g[l]) {
      let e = g[l][a] - 1;
      g[l] = {
        ...g[l],
        [a]: e >= 0 ? e : 0
      }
    }
  },
  GUILD_DIRECTORY_ENTRY_UPDATE: function(e) {
    var t, n, l, i, s, a, r, o, d;
    let {
      channelId: h,
      entry: E
    } = e, f = (0, c.MQ)(E), C = null === (t = m[h]) || void 0 === t ? void 0 : t[f.guildId];
    m[h] = {
      ...m[h],
      [f.guildId]: {
        ...C,
        ...f
      }
    };
    let _ = null !== (i = null == C ? void 0 : C.primaryCategoryId) && void 0 !== i ? i : u.AR.UNCATEGORIZED,
      I = null !== (s = f.primaryCategoryId) && void 0 !== s ? s : u.AR.UNCATEGORIZED,
      x = Object.assign({}, null === (n = p[h]) || void 0 === n ? void 0 : n[_]);
    null != C && _ !== I && delete x[f.guildId], p[h] = {
      ...p[h],
      [_]: x,
      [I]: {
        ...null === (l = p[h]) || void 0 === l ? void 0 : l[I],
        [f.guildId]: {
          ...C,
          ...f
        }
      }
    }, I !== _ && null != g[h] && (g[h] = {
      ...g[h],
      [_]: (null === (a = g[h]) || void 0 === a ? void 0 : a[_]) > 0 ? (null === (r = g[h]) || void 0 === r ? void 0 : r[_]) - 1 : 0,
      [I]: (null !== (d = null === (o = g[h]) || void 0 === o ? void 0 : o[I]) && void 0 !== d ? d : 0) + 1
    })
  },
  GUILD_DIRECTORY_CATEGORY_SELECT: function(e) {
    let {
      channelId: t,
      categoryId: n
    } = e;
    E[t] = n
  },
  GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      counts: n
    } = e;
    g[t] = n
  },
  GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e, l = new Set;
    n.forEach(e => {
      let t = (0, c.MQ)(e);
      l.add(t.guildId)
    }), f[t] = l
  }
})