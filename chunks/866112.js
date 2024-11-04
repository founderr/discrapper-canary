n(653041);
var i,
    l,
    r,
    s,
    a = n(442837),
    o = n(570140),
    c = n(975984);
let u = [],
    d = {},
    h = {};
class m extends (i = a.ZP.Store) {
    getSearchState(e) {
        var t;
        return null !== (t = d[e]) && void 0 !== t
            ? t
            : {
                  mostRecentQuery: '',
                  fetching: !1
              };
    }
    getSearchResults(e, t) {
        var n, i, l;
        return null !== (l = null === (i = h[e]) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.results) && void 0 !== l ? l : u;
    }
    shouldFetch(e, t) {
        var n, i;
        let l = null === (i = h[e]) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.lastSearchedAt;
        return null == l || Date.now() - l > 120000;
    }
}
(s = 'GuildDirectorySearchStore'),
    (r = 'displayName') in (l = m)
        ? Object.defineProperty(l, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = s),
    (t.Z = new m(o.Z, {
        GUILD_DIRECTORY_SEARCH_START: function (e) {
            let { channelId: t, query: n } = e;
            d[t] = {
                fetching: !0,
                mostRecentQuery: n
            };
        },
        GUILD_DIRECTORY_SEARCH_SUCCESS: function (e) {
            let { channelId: t, query: n, results: i } = e;
            d[t] = {
                ...d[t],
                fetching: !1
            };
            let l = [];
            i.forEach((e) => {
                let t = (0, c.MQ)(e);
                l.push(t);
            }),
                (h[t] = {
                    ...h[t],
                    [n]: {
                        results: (0, c.Th)(l),
                        lastSearchedAt: Date.now()
                    }
                });
        },
        GUILD_DIRECTORY_SEARCH_FAILURE: function (e) {
            let { channelId: t } = e;
            d[t] = {
                ...d[t],
                fetching: !1
            };
        },
        GUILD_DIRECTORY_SEARCH_CLEAR: function (e) {
            let { channelId: t } = e;
            d[t] = {
                fetching: !1,
                mostRecentQuery: ''
            };
        },
        GUILD_DIRECTORY_CACHED_SEARCH: function (e) {
            let { channelId: t, query: n } = e;
            d[t] = {
                fetching: !1,
                mostRecentQuery: n
            };
        },
        GUILD_DIRECTORY_ENTRY_DELETE: function (e) {
            var t;
            let { channelId: n, guildId: i } = e,
                l = null === (t = d[n]) || void 0 === t ? void 0 : t.mostRecentQuery;
            if (null == l) return;
            let r = h[n][l];
            if (null == r) return;
            let s = r.results.filter((e) => e.guildId !== i);
            h[n] = {
                ...h[n],
                [d[n].mostRecentQuery]: {
                    ...r,
                    results: s
                }
            };
        }
    }));
