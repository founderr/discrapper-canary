n.d(t, {
    M: function () {
        return r;
    }
});
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
let s = {},
    l = {};
function u() {
    (s = {}), (l = {});
}
function c(e) {
    let { threadId: t } = e;
    l[t] = 1;
}
function d(e) {
    let { threadId: t, mediaPostEmbed: n } = e;
    (s = {
        ...s,
        [t]: n
    }),
        (l[t] = 2);
}
function _(e) {
    let { threadId: t } = e;
    l[t] = 3;
}
function E(e) {
    !e.isSwitchingAccount && ((s = {}), (l = {}));
}
class f extends i.yh {
    getMediaPostEmbed(e) {
        if (null != e) return s[e];
    }
    getEmbedFetchState(e) {
        var t;
        return null !== (t = l[e]) && void 0 !== t ? t : 0;
    }
    getMediaPostEmbeds() {
        return s;
    }
}
o(f, 'displayName', 'MediaPostEmbedStore'),
    (t.Z = new f(a.Z, {
        CONNECTION_OPEN: u,
        MEDIA_POST_EMBED_FETCH: c,
        MEDIA_POST_EMBED_FETCH_SUCCESS: d,
        MEDIA_POST_EMBED_FETCH_FAILURE: _,
        LOGOUT: E
    }));
