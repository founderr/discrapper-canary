n(653041);
var i,
    l,
    r,
    a,
    s = n(442837),
    o = n(570140),
    c = n(975984);
let d = [],
    u = {},
    h = {};
class p extends (i = s.ZP.Store) {
    getSearchState(e) {
        var t;
        return null !== (t = u[e]) && void 0 !== t
            ? t
            : {
                  mostRecentQuery: '',
                  fetching: !1
              };
    }
    getSearchResults(e, t) {
        var n, i, l;
        return null !== (l = null === (i = h[e]) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.results) && void 0 !== l ? l : d;
    }
    shouldFetch(e, t) {
        var n, i;
        let l = null === (i = h[e]) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.lastSearchedAt;
        return null == l || Date.now() - l > 120000;
    }
}
(a = 'GuildDirectorySearchStore'),
    (r = 'displayName') in (l = p)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a),
    (t.Z = new p(o.Z, {
        GUILD_DIRECTORY_SEARCH_START: function (e) {
            let { channelId: t, query: n } = e;
            u[t] = {
                fetching: !0,
                mostRecentQuery: n
            };
        },
        GUILD_DIRECTORY_SEARCH_SUCCESS: function (e) {
            let { channelId: t, query: n, results: i } = e;
            u[t] = {
                ...u[t],
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
            u[t] = {
                ...u[t],
                fetching: !1
            };
        },
        GUILD_DIRECTORY_SEARCH_CLEAR: function (e) {
            let { channelId: t } = e;
            u[t] = {
                fetching: !1,
                mostRecentQuery: ''
            };
        },
        GUILD_DIRECTORY_CACHED_SEARCH: function (e) {
            let { channelId: t, query: n } = e;
            u[t] = {
                fetching: !1,
                mostRecentQuery: n
            };
        },
        GUILD_DIRECTORY_ENTRY_DELETE: function (e) {
            var t;
            let { channelId: n, guildId: i } = e,
                l = null === (t = u[n]) || void 0 === t ? void 0 : t.mostRecentQuery;
            if (null == l) return;
            let r = h[n][l];
            if (null == r) return;
            let a = r.results.filter((e) => e.guildId !== i);
            h[n] = {
                ...h[n],
                [u[n].mostRecentQuery]: {
                    ...r,
                    results: a
                }
            };
        }
    }));
