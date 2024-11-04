n(47120);
var i,
    l,
    r,
    s,
    a = n(442837),
    o = n(570140),
    c = n(975984),
    u = n(486527);
let d = Object.freeze({}),
    h = !1,
    m = {},
    p = {},
    f = {},
    g = {},
    C = {};
class x extends (i = a.ZP.Store) {
    isFetching() {
        return h;
    }
    getCurrentCategoryId(e) {
        var t;
        return null !== (t = p[e]) && void 0 !== t ? t : u.AR.ALL;
    }
    getDirectoryEntries(e, t) {
        var n;
        return null != t ? (null === (n = f[e]) || void 0 === n ? void 0 : n[t]) : m[e];
    }
    getDirectoryEntry(e, t) {
        var n;
        return null === (n = m[e]) || void 0 === n ? void 0 : n[t];
    }
    getDirectoryAllEntriesCount(e) {
        var t;
        return Object.keys(null !== (t = m[e]) && void 0 !== t ? t : {}).length;
    }
    getDirectoryCategoryCounts(e) {
        var t;
        return null !== (t = g[e]) && void 0 !== t ? t : d;
    }
    getAdminGuildEntryIds(e) {
        return C[e];
    }
}
(s = 'GuildDirectoryStore'),
    (r = 'displayName') in (l = x)
        ? Object.defineProperty(l, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = s),
    (t.Z = new x(o.Z, {
        GUILD_DIRECTORY_FETCH_START: function () {
            h = !0;
        },
        GUILD_DIRECTORY_FETCH_SUCCESS: function (e) {
            let { channelId: t, entries: n } = e;
            h = !1;
            let i = {},
                l = {};
            n.forEach((e) => {
                let t = (0, c.MQ)(e);
                (i[t.guildId] = t), null != l[t.primaryCategoryId] ? (l[t.primaryCategoryId][t.guildId] = t) : (l[t.primaryCategoryId] = { [t.guildId]: t });
            }),
                (m[t] = i),
                (f[t] = l);
        },
        GUILD_DIRECTORY_FETCH_FAILURE: function () {
            h = !1;
        },
        GUILD_DIRECTORY_ENTRY_CREATE: function (e) {
            var t, n, i, l, r;
            let { channelId: s, entry: a } = e,
                o = (0, c.MQ)(a);
            if (null == o || (null === (t = m[s]) || void 0 === t ? void 0 : t[o.guildId]) != null) return;
            m[s] = {
                ...m[s],
                [o.guildId]: o
            };
            let d = null !== (i = o.primaryCategoryId) && void 0 !== i ? i : u.AR.UNCATEGORIZED;
            if (
                ((f[s] = {
                    ...f[s],
                    [d]: {
                        ...(null === (n = f[s]) || void 0 === n ? void 0 : n[d]),
                        [o.guildId]: o
                    }
                }),
                null != g[s])
            ) {
                let e = null !== (r = null === (l = g[s]) || void 0 === l ? void 0 : l[d]) && void 0 !== r ? r : 0;
                g[s] = {
                    ...g[s],
                    [d]: e + 1
                };
            }
        },
        GUILD_DIRECTORY_ENTRY_DELETE: function (e) {
            var t, n;
            let { channelId: i, guildId: l } = e,
                r = null === (t = m[i]) || void 0 === t ? void 0 : t[l];
            if (null == r) return;
            let s = r.primaryCategoryId,
                a = Object.assign({}, m[i]);
            delete a[l], null === (n = C[i]) || void 0 === n || n.delete(l), (C[i] = new Set(C[i])), (m[i] = a);
            let o = Object.assign({}, f[i][s]);
            if (
                (delete o[l],
                (f[i] = {
                    ...f[i],
                    [s]: o
                }),
                null != g[i])
            ) {
                let e = g[i][s] - 1;
                g[i] = {
                    ...g[i],
                    [s]: e >= 0 ? e : 0
                };
            }
        },
        GUILD_DIRECTORY_ENTRY_UPDATE: function (e) {
            var t, n, i, l, r, s, a, o, d;
            let { channelId: h, entry: p } = e,
                C = (0, c.MQ)(p),
                x = null === (t = m[h]) || void 0 === t ? void 0 : t[C.guildId];
            m[h] = {
                ...m[h],
                [C.guildId]: {
                    ...x,
                    ...C
                }
            };
            let v = null !== (l = null == x ? void 0 : x.primaryCategoryId) && void 0 !== l ? l : u.AR.UNCATEGORIZED,
                _ = null !== (r = C.primaryCategoryId) && void 0 !== r ? r : u.AR.UNCATEGORIZED,
                I = Object.assign({}, null === (n = f[h]) || void 0 === n ? void 0 : n[v]);
            null != x && v !== _ && delete I[C.guildId],
                (f[h] = {
                    ...f[h],
                    [v]: I,
                    [_]: {
                        ...(null === (i = f[h]) || void 0 === i ? void 0 : i[_]),
                        [C.guildId]: {
                            ...x,
                            ...C
                        }
                    }
                }),
                _ !== v &&
                    null != g[h] &&
                    (g[h] = {
                        ...g[h],
                        [v]: (null === (s = g[h]) || void 0 === s ? void 0 : s[v]) > 0 ? (null === (a = g[h]) || void 0 === a ? void 0 : a[v]) - 1 : 0,
                        [_]: (null !== (d = null === (o = g[h]) || void 0 === o ? void 0 : o[_]) && void 0 !== d ? d : 0) + 1
                    });
        },
        GUILD_DIRECTORY_CATEGORY_SELECT: function (e) {
            let { channelId: t, categoryId: n } = e;
            p[t] = n;
        },
        GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function (e) {
            let { channelId: t, counts: n } = e;
            g[t] = n;
        },
        GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function (e) {
            let { channelId: t, entries: n } = e,
                i = new Set();
            n.forEach((e) => {
                let t = (0, c.MQ)(e);
                i.add(t.guildId);
            }),
                (C[t] = i);
        }
    }));
