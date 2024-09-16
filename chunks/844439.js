n.d(t, {
    M: function () {
        return r;
    }
});
var o,
    a,
    i,
    l,
    r,
    c,
    d = n(442837),
    u = n(570140);
((o = r || (r = {}))[(o.FETCHING = 0)] = 'FETCHING'), (o[(o.FETCHED = 1)] = 'FETCHED'), (o[(o.ERROR = 2)] = 'ERROR');
let m = {},
    s = {},
    p = {};
function _(e) {
    let { location: t, channelId: n, withCommands: o } = e;
    return 'location:'.concat(t, ' channelId:').concat('0', ' withCommands:').concat(o);
}
let E = Object.freeze([]);
class g extends (c = d.ZP.Store) {
    getLastFetchTimeMs(e) {
        let { location: t, channelId: n, withCommands: o } = e;
        return p[
            _({
                location: t,
                channelId: n,
                withCommands: o
            })
        ];
    }
    getFetchState(e) {
        let { location: t, channelId: n, withCommands: o } = e;
        return s[
            _({
                location: t,
                channelId: n,
                withCommands: o
            })
        ];
    }
    getRecommendations(e) {
        var t;
        let { location: n, channelId: o, withCommands: a } = e;
        return null !==
            (t =
                m[
                    _({
                        location: n,
                        channelId: o,
                        withCommands: a
                    })
                ]) && void 0 !== t
            ? t
            : E;
    }
}
(l = void 0),
    (i = 'displayName') in (a = g)
        ? Object.defineProperty(a, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[i] = l),
    (t.ZP = new g(u.Z, {
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (e) {
            let { location: t, channelId: n, withCommands: o } = e;
            s = {
                ...s,
                [_({
                    location: t,
                    channelId: n,
                    withCommands: o
                })]: 0
            };
        },
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (e) {
            let { recommendations: t, location: n, channelId: o, withCommands: a } = e,
                i = _({
                    location: n,
                    channelId: o,
                    withCommands: a
                });
            (m = {
                ...m,
                [i]: t
            }),
                (s = {
                    ...s,
                    [i]: 1
                });
            let l = Date.now();
            p = {
                ...p,
                [i]: l
            };
        },
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (e) {
            let { location: t, channelId: n, withCommands: o } = e;
            s = {
                ...s,
                [_({
                    location: t,
                    channelId: n,
                    withCommands: o
                })]: 2
            };
        }
    }));
