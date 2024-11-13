n(47120);
var i,
    l,
    a,
    r,
    s = n(442837),
    o = n(570140),
    c = n(975984),
    d = n(486527);
let u = Object.freeze({}),
    h = !1,
    p = {},
    m = {},
    f = {},
    g = {},
    C = {};
class x extends (i = s.ZP.Store) {
    isFetching() {
        return h;
    }
    getCurrentCategoryId(e) {
        var t;
        return null !== (t = m[e]) && void 0 !== t ? t : d.AR.ALL;
    }
    getDirectoryEntries(e, t) {
        var n;
        return null != t ? (null === (n = f[e]) || void 0 === n ? void 0 : n[t]) : p[e];
    }
    getDirectoryEntry(e, t) {
        var n;
        return null === (n = p[e]) || void 0 === n ? void 0 : n[t];
    }
    getDirectoryAllEntriesCount(e) {
        var t;
        return Object.keys(null !== (t = p[e]) && void 0 !== t ? t : {}).length;
    }
    getDirectoryCategoryCounts(e) {
        var t;
        return null !== (t = g[e]) && void 0 !== t ? t : u;
    }
    getAdminGuildEntryIds(e) {
        return C[e];
    }
}
(r = 'GuildDirectoryStore'),
    (a = 'displayName') in (l = x)
        ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = r),
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
                (p[t] = i),
                (f[t] = l);
        },
        GUILD_DIRECTORY_FETCH_FAILURE: function () {
            h = !1;
        },
        GUILD_DIRECTORY_ENTRY_CREATE: function (e) {
            var t, n, i, l, a;
            let { channelId: r, entry: s } = e,
                o = (0, c.MQ)(s);
            if (null == o || (null === (t = p[r]) || void 0 === t ? void 0 : t[o.guildId]) != null) return;
            p[r] = {
                ...p[r],
                [o.guildId]: o
            };
            let u = null !== (i = o.primaryCategoryId) && void 0 !== i ? i : d.AR.UNCATEGORIZED;
            if (
                ((f[r] = {
                    ...f[r],
                    [u]: {
                        ...(null === (n = f[r]) || void 0 === n ? void 0 : n[u]),
                        [o.guildId]: o
                    }
                }),
                null != g[r])
            ) {
                let e = null !== (a = null === (l = g[r]) || void 0 === l ? void 0 : l[u]) && void 0 !== a ? a : 0;
                g[r] = {
                    ...g[r],
                    [u]: e + 1
                };
            }
        },
        GUILD_DIRECTORY_ENTRY_DELETE: function (e) {
            var t, n;
            let { channelId: i, guildId: l } = e,
                a = null === (t = p[i]) || void 0 === t ? void 0 : t[l];
            if (null == a) return;
            let r = a.primaryCategoryId,
                s = Object.assign({}, p[i]);
            delete s[l], null === (n = C[i]) || void 0 === n || n.delete(l), (C[i] = new Set(C[i])), (p[i] = s);
            let o = Object.assign({}, f[i][r]);
            if (
                (delete o[l],
                (f[i] = {
                    ...f[i],
                    [r]: o
                }),
                null != g[i])
            ) {
                let e = g[i][r] - 1;
                g[i] = {
                    ...g[i],
                    [r]: e >= 0 ? e : 0
                };
            }
        },
        GUILD_DIRECTORY_ENTRY_UPDATE: function (e) {
            var t, n, i, l, a, r, s, o, u;
            let { channelId: h, entry: m } = e,
                C = (0, c.MQ)(m),
                x = null === (t = p[h]) || void 0 === t ? void 0 : t[C.guildId];
            p[h] = {
                ...p[h],
                [C.guildId]: {
                    ...x,
                    ...C
                }
            };
            let v = null !== (l = null == x ? void 0 : x.primaryCategoryId) && void 0 !== l ? l : d.AR.UNCATEGORIZED,
                _ = null !== (a = C.primaryCategoryId) && void 0 !== a ? a : d.AR.UNCATEGORIZED,
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
                        [v]: (null === (r = g[h]) || void 0 === r ? void 0 : r[v]) > 0 ? (null === (s = g[h]) || void 0 === s ? void 0 : s[v]) - 1 : 0,
                        [_]: (null !== (u = null === (o = g[h]) || void 0 === o ? void 0 : o[_]) && void 0 !== u ? u : 0) + 1
                    });
        },
        GUILD_DIRECTORY_CATEGORY_SELECT: function (e) {
            let { channelId: t, categoryId: n } = e;
            m[t] = n;
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
