n(653041);
var i,
    s,
    a,
    l,
    r = n(442837),
    o = n(570140),
    c = n(975984);
let u = [],
    d = {},
    h = {};
class m extends (i = r.ZP.Store) {
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
        var n, i, s;
        return null !== (s = null === (i = h[e]) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.results) && void 0 !== s ? s : u;
    }
    shouldFetch(e, t) {
        var n, i;
        let s = null === (i = h[e]) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.lastSearchedAt;
        return null == s || Date.now() - s > 120000;
    }
}
(l = 'GuildDirectorySearchStore'),
    (a = 'displayName') in (s = m)
        ? Object.defineProperty(s, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[a] = l),
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
            let s = [];
            i.forEach((e) => {
                let t = (0, c.MQ)(e);
                s.push(t);
            }),
                (h[t] = {
                    ...h[t],
                    [n]: {
                        results: (0, c.Th)(s),
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
                s = null === (t = d[n]) || void 0 === t ? void 0 : t.mostRecentQuery;
            if (null == s) return;
            let a = h[n][s];
            if (null == a) return;
            let l = a.results.filter((e) => e.guildId !== i);
            h[n] = {
                ...h[n],
                [d[n].mostRecentQuery]: {
                    ...a,
                    results: l
                }
            };
        }
    }));
