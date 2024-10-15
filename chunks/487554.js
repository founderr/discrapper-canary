n.d(t, {
    M: function () {
        return l;
    }
});
var i,
    a,
    s,
    r,
    l,
    o,
    c = n(442837),
    u = n(570140);
((i = l || (l = {}))[(i.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (i[(i.FETCHING = 1)] = 'FETCHING'), (i[(i.FETCHED = 2)] = 'FETCHED'), (i[(i.FAILED = 3)] = 'FAILED');
let d = {},
    _ = {};
class E extends (o = c.ZP.Store) {
    getMediaPostEmbed(e) {
        if (null != e) return d[e];
    }
    getEmbedFetchState(e) {
        var t;
        return null !== (t = _[e]) && void 0 !== t ? t : 0;
    }
    getMediaPostEmbeds() {
        return d;
    }
}
(r = 'MediaPostEmbedStore'),
    (s = 'displayName') in (a = E)
        ? Object.defineProperty(a, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = r),
    (t.Z = new E(u.Z, {
        CONNECTION_OPEN: function () {
            (d = {}), (_ = {});
        },
        MEDIA_POST_EMBED_FETCH: function (e) {
            let { threadId: t } = e;
            _[t] = 1;
        },
        MEDIA_POST_EMBED_FETCH_SUCCESS: function (e) {
            let { threadId: t, mediaPostEmbed: n } = e;
            (d = {
                ...d,
                [t]: n
            }),
                (_[t] = 2);
        },
        MEDIA_POST_EMBED_FETCH_FAILURE: function (e) {
            let { threadId: t } = e;
            _[t] = 3;
        },
        LOGOUT: function (e) {
            !e.isSwitchingAccount && ((d = {}), (_ = {}));
        }
    }));
