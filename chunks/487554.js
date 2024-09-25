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
!(function (e) {
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), (e[(e.FAILED = 3)] = 'FAILED');
})(r || (r = {}));
let l = {},
    u = {};
function c() {
    (l = {}), (u = {});
}
function d(e) {
    let { threadId: t } = e;
    u[t] = 1;
}
function _(e) {
    let { threadId: t, mediaPostEmbed: n } = e;
    (l = {
        ...l,
        [t]: n
    }),
        (u[t] = 2);
}
function E(e) {
    let { threadId: t } = e;
    u[t] = 3;
}
function f(e) {
    !e.isSwitchingAccount && ((l = {}), (u = {}));
}
class h extends (i = a.ZP.Store) {
    getMediaPostEmbed(e) {
        if (null != e) return l[e];
    }
    getEmbedFetchState(e) {
        var t;
        return null !== (t = u[e]) && void 0 !== t ? t : 0;
    }
    getMediaPostEmbeds() {
        return l;
    }
}
s(h, 'displayName', 'MediaPostEmbedStore'),
    (t.Z = new h(o.Z, {
        CONNECTION_OPEN: c,
        MEDIA_POST_EMBED_FETCH: d,
        MEDIA_POST_EMBED_FETCH_SUCCESS: _,
        MEDIA_POST_EMBED_FETCH_FAILURE: E,
        LOGOUT: f
    }));
