n.d(e, {
    M: function () {
        return i;
    }
});
var a,
    o,
    r,
    c,
    i,
    u,
    l = n(442837),
    s = n(570140);
((a = i || (i = {}))[(a.FETCHING = 0)] = 'FETCHING'), (a[(a.FETCHED = 1)] = 'FETCHED'), (a[(a.ERROR = 2)] = 'ERROR');
let E = {},
    d = {},
    C = {};
function T(t) {
    let { location: e, channelId: n, withCommands: a } = t;
    return 'location:'.concat(e, ' channelId:').concat('0', ' withCommands:').concat(a);
}
let _ = Object.freeze([]);
class f extends (u = l.ZP.Store) {
    getLastFetchTimeMs(t) {
        let { location: e, channelId: n, withCommands: a } = t;
        return C[
            T({
                location: e,
                channelId: n,
                withCommands: a
            })
        ];
    }
    getFetchState(t) {
        let { location: e, channelId: n, withCommands: a } = t;
        return d[
            T({
                location: e,
                channelId: n,
                withCommands: a
            })
        ];
    }
    getRecommendations(t) {
        var e;
        let { location: n, channelId: a, withCommands: o } = t;
        return null !==
            (e =
                E[
                    T({
                        location: n,
                        channelId: a,
                        withCommands: o
                    })
                ]) && void 0 !== e
            ? e
            : _;
    }
}
(c = void 0),
    (r = 'displayName') in (o = f)
        ? Object.defineProperty(o, r, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[r] = c),
    (e.ZP = new f(s.Z, {
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (t) {
            let { location: e, channelId: n, withCommands: a } = t;
            d = {
                ...d,
                [T({
                    location: e,
                    channelId: n,
                    withCommands: a
                })]: 0
            };
        },
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (t) {
            let { recommendations: e, location: n, channelId: a, withCommands: o } = t,
                r = T({
                    location: n,
                    channelId: a,
                    withCommands: o
                });
            (E = {
                ...E,
                [r]: e
            }),
                (d = {
                    ...d,
                    [r]: 1
                });
            let c = Date.now();
            C = {
                ...C,
                [r]: c
            };
        },
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (t) {
            let { location: e, channelId: n, withCommands: a } = t;
            d = {
                ...d,
                [T({
                    location: e,
                    channelId: n,
                    withCommands: a
                })]: 2
            };
        }
    }));
