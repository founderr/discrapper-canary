n(47120);
var i,
    l,
    r,
    a,
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
(a = 'GuildDirectoryStore'),
    (r = 'displayName') in (l = x)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a),
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
            var t, n, i, l, r;
            let { channelId: a, entry: s } = e,
                o = (0, c.MQ)(s);
            if (null == o || (null === (t = p[a]) || void 0 === t ? void 0 : t[o.guildId]) != null) return;
            p[a] = {
                ...p[a],
                [o.guildId]: o
            };
            let u = null !== (i = o.primaryCategoryId) && void 0 !== i ? i : d.AR.UNCATEGORIZED;
            if (
                ((f[a] = {
                    ...f[a],
                    [u]: {
                        ...(null === (n = f[a]) || void 0 === n ? void 0 : n[u]),
                        [o.guildId]: o
                    }
                }),
                null != g[a])
            ) {
                let e = null !== (r = null === (l = g[a]) || void 0 === l ? void 0 : l[u]) && void 0 !== r ? r : 0;
                g[a] = {
                    ...g[a],
                    [u]: e + 1
                };
            }
        },
        GUILD_DIRECTORY_ENTRY_DELETE: function (e) {
            var t, n;
            let { channelId: i, guildId: l } = e,
                r = null === (t = p[i]) || void 0 === t ? void 0 : t[l];
            if (null == r) return;
            let a = r.primaryCategoryId,
                s = Object.assign({}, p[i]);
            delete s[l], null === (n = C[i]) || void 0 === n || n.delete(l), (C[i] = new Set(C[i])), (p[i] = s);
            let o = Object.assign({}, f[i][a]);
            if (
                (delete o[l],
                (f[i] = {
                    ...f[i],
                    [a]: o
                }),
                null != g[i])
            ) {
                let e = g[i][a] - 1;
                g[i] = {
                    ...g[i],
                    [a]: e >= 0 ? e : 0
                };
            }
        },
        GUILD_DIRECTORY_ENTRY_UPDATE: function (e) {
            var t, n, i, l, r, a, s, o, u;
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
            let _ = null !== (l = null == x ? void 0 : x.primaryCategoryId) && void 0 !== l ? l : d.AR.UNCATEGORIZED,
                v = null !== (r = C.primaryCategoryId) && void 0 !== r ? r : d.AR.UNCATEGORIZED,
                I = Object.assign({}, null === (n = f[h]) || void 0 === n ? void 0 : n[_]);
            null != x && _ !== v && delete I[C.guildId],
                (f[h] = {
                    ...f[h],
                    [_]: I,
                    [v]: {
                        ...(null === (i = f[h]) || void 0 === i ? void 0 : i[v]),
                        [C.guildId]: {
                            ...x,
                            ...C
                        }
                    }
                }),
                v !== _ &&
                    null != g[h] &&
                    (g[h] = {
                        ...g[h],
                        [_]: (null === (a = g[h]) || void 0 === a ? void 0 : a[_]) > 0 ? (null === (s = g[h]) || void 0 === s ? void 0 : s[_]) - 1 : 0,
                        [v]: (null !== (u = null === (o = g[h]) || void 0 === o ? void 0 : o[v]) && void 0 !== u ? u : 0) + 1
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
