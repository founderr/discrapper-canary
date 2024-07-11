t.d(n, {
    M: function () {
        return s;
    }
});
var i, l, r, a, s, o, c = t(442837), u = t(570140);
(i = s || (s = {}))[i.FETCHING = 0] = 'FETCHING', i[i.FETCHED = 1] = 'FETCHED', i[i.ERROR = 2] = 'ERROR';
let d = {}, m = {}, p = {};
function _(e) {
    let {
        location: n,
        channelId: t
    } = e;
    return 'location:'.concat(n, ' channelId:').concat('0');
}
let E = Object.freeze([]);
class h extends (o = c.ZP.Store) {
    getLastFetchTimeMs(e) {
        let {
            location: n,
            channelId: t
        } = e;
        return p[_({
            location: n,
            channelId: t
        })];
    }
    getFetchState(e) {
        let {
            location: n,
            channelId: t
        } = e;
        return m[_({
            location: n,
            channelId: t
        })];
    }
    getRecommendations(e) {
        var n;
        let {
            location: t,
            channelId: i
        } = e;
        return null !== (n = d[_({
            location: t,
            channelId: i
        })]) && void 0 !== n ? n : E;
    }
}
a = void 0, (r = 'displayName') in (l = h) ? Object.defineProperty(l, r, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : l[r] = a, n.ZP = new h(u.Z, {
    APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (e) {
        let {
            location: n,
            channelId: t
        } = e;
        m = {
            ...m,
            [_({
                location: n,
                channelId: t
            })]: 0
        };
    },
    APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (e) {
        let {
                recommendations: n,
                location: t,
                channelId: i
            } = e, l = _({
                location: t,
                channelId: i
            });
        d = {
            ...d,
            [l]: n
        }, m = {
            ...m,
            [l]: 1
        };
        let r = Date.now();
        p = {
            ...p,
            [l]: r
        };
    },
    APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (e) {
        let {
            location: n,
            channelId: t
        } = e;
        m = {
            ...m,
            [_({
                location: n,
                channelId: t
            })]: 2
        };
    }
});
