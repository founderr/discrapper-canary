t.d(n, {
    M: function () {
        return c;
    }
});
var i,
    a,
    l,
    o,
    c,
    d,
    r = t(442837),
    u = t(570140);
((i = c || (c = {}))[(i.FETCHING = 0)] = 'FETCHING'), (i[(i.FETCHED = 1)] = 'FETCHED'), (i[(i.ERROR = 2)] = 'ERROR');
let s = {},
    m = {},
    E = {};
function _(e) {
    let { location: n, channelId: t, withCommands: i } = e;
    return 'location:'.concat(n, ' channelId:').concat('0', ' withCommands:').concat(i);
}
let p = Object.freeze([]);
class M extends (d = r.ZP.Store) {
    getLastFetchTimeMs(e) {
        let { location: n, channelId: t, withCommands: i } = e;
        return E[
            _({
                location: n,
                channelId: t,
                withCommands: i
            })
        ];
    }
    getFetchState(e) {
        let { location: n, channelId: t, withCommands: i } = e;
        return m[
            _({
                location: n,
                channelId: t,
                withCommands: i
            })
        ];
    }
    getRecommendations(e) {
        var n;
        let { location: t, channelId: i, withCommands: a } = e;
        return null !==
            (n =
                s[
                    _({
                        location: t,
                        channelId: i,
                        withCommands: a
                    })
                ]) && void 0 !== n
            ? n
            : p;
    }
}
(o = void 0),
    (l = 'displayName') in (a = M)
        ? Object.defineProperty(a, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[l] = o),
    (n.ZP = new M(u.Z, {
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (e) {
            let { location: n, channelId: t, withCommands: i } = e;
            m = {
                ...m,
                [_({
                    location: n,
                    channelId: t,
                    withCommands: i
                })]: 0
            };
        },
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (e) {
            let { recommendations: n, location: t, channelId: i, withCommands: a } = e,
                l = _({
                    location: t,
                    channelId: i,
                    withCommands: a
                });
            (s = {
                ...s,
                [l]: n
            }),
                (m = {
                    ...m,
                    [l]: 1
                });
            let o = Date.now();
            E = {
                ...E,
                [l]: o
            };
        },
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (e) {
            let { location: n, channelId: t, withCommands: i } = e;
            m = {
                ...m,
                [_({
                    location: n,
                    channelId: t,
                    withCommands: i
                })]: 2
            };
        }
    }));
