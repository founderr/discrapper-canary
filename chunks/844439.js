n.d(t, {
    M: function () {
        return r;
    }
});
var r,
    i,
    a = n(442837),
    o = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = '0';
!(function (e) {
    (e[(e.FETCHING = 0)] = 'FETCHING'), (e[(e.FETCHED = 1)] = 'FETCHED'), (e[(e.ERROR = 2)] = 'ERROR');
})(r || (r = {}));
let u = {},
    c = {},
    d = {};
function _(e) {
    let { location: t, channelId: n, withCommands: r } = e;
    return 'location:'.concat(t, ' channelId:').concat(l, ' withCommands:').concat(r);
}
function E(e) {
    let { location: t, channelId: n, withCommands: r } = e;
    c = {
        ...c,
        [_({
            location: t,
            channelId: n,
            withCommands: r
        })]: 0
    };
}
function f(e) {
    let { recommendations: t, location: n, channelId: r, withCommands: i } = e,
        a = _({
            location: n,
            channelId: r,
            withCommands: i
        });
    (u = {
        ...u,
        [a]: t
    }),
        (c = {
            ...c,
            [a]: 1
        });
    let o = Date.now();
    d = {
        ...d,
        [a]: o
    };
}
function h(e) {
    let { location: t, channelId: n, withCommands: r } = e;
    c = {
        ...c,
        [_({
            location: t,
            channelId: n,
            withCommands: r
        })]: 2
    };
}
let p = Object.freeze([]);
class m extends (i = a.ZP.Store) {
    getLastFetchTimeMs(e) {
        let { location: t, channelId: n, withCommands: r } = e;
        return d[
            _({
                location: t,
                channelId: n,
                withCommands: r
            })
        ];
    }
    getFetchState(e) {
        let { location: t, channelId: n, withCommands: r } = e;
        return c[
            _({
                location: t,
                channelId: n,
                withCommands: r
            })
        ];
    }
    getRecommendations(e) {
        var t;
        let { location: n, channelId: r, withCommands: i } = e;
        return null !==
            (t =
                u[
                    _({
                        location: n,
                        channelId: r,
                        withCommands: i
                    })
                ]) && void 0 !== t
            ? t
            : p;
    }
}
s(m, 'displayName', void 0),
    (t.ZP = new m(o.Z, {
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: E,
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: f,
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: h
    }));
