n.d(t, {
    M: function () {
        return i;
    }
});
var r,
    o,
    a,
    c,
    i,
    l,
    u = n(442837),
    s = n(570140);
((r = i || (i = {}))[(r.FETCHING = 0)] = 'FETCHING'), (r[(r.FETCHED = 1)] = 'FETCHED'), (r[(r.ERROR = 2)] = 'ERROR');
let E = {},
    d = {},
    _ = {};
function T(e) {
    let { location: t, channelId: n, withCommands: r } = e;
    return 'location:'.concat(t, ' channelId:').concat('0', ' withCommands:').concat(r);
}
let A = Object.freeze([]);
class I extends (l = u.ZP.Store) {
    getLastFetchTimeMs(e) {
        let { location: t, channelId: n, withCommands: r } = e;
        return _[
            T({
                location: t,
                channelId: n,
                withCommands: r
            })
        ];
    }
    getFetchState(e) {
        let { location: t, channelId: n, withCommands: r } = e;
        return d[
            T({
                location: t,
                channelId: n,
                withCommands: r
            })
        ];
    }
    getRecommendations(e) {
        var t;
        let { location: n, channelId: r, withCommands: o } = e;
        return null !==
            (t =
                E[
                    T({
                        location: n,
                        channelId: r,
                        withCommands: o
                    })
                ]) && void 0 !== t
            ? t
            : A;
    }
}
(c = void 0),
    (a = 'displayName') in (o = I)
        ? Object.defineProperty(o, a, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[a] = c),
    (t.ZP = new I(s.Z, {
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (e) {
            let { location: t, channelId: n, withCommands: r } = e;
            d = {
                ...d,
                [T({
                    location: t,
                    channelId: n,
                    withCommands: r
                })]: 0
            };
        },
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (e) {
            let { recommendations: t, location: n, channelId: r, withCommands: o } = e,
                a = T({
                    location: n,
                    channelId: r,
                    withCommands: o
                });
            (E = {
                ...E,
                [a]: t
            }),
                (d = {
                    ...d,
                    [a]: 1
                });
            let c = Date.now();
            _ = {
                ..._,
                [a]: c
            };
        },
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (e) {
            let { location: t, channelId: n, withCommands: r } = e;
            d = {
                ...d,
                [T({
                    location: t,
                    channelId: n,
                    withCommands: r
                })]: 2
            };
        }
    }));
