var r,
    i = n(442837),
    a = n(570140),
    o = n(592125);
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
let l = {};
function u(e) {
    let t = o.Z.getChannel(e);
    return !!(null != t && t.isForumLikeChannel()) || !1;
}
function c(e) {
    var t;
    let n =
        null !== (t = l[e]) && void 0 !== t
            ? t
            : {
                  query: null,
                  loading: !1,
                  results: null
              };
    return (l[e] = n), n;
}
function d(e) {
    let { channelId: t, query: n } = e;
    if (!u(t)) return !1;
    let r = c(t);
    l[t] = {
        ...r,
        query: n,
        results: null
    };
}
function _(e) {
    let { channelId: t } = e;
    if (!u(t)) return !1;
    let n = c(t);
    l[t] = {
        ...n,
        loading: !0
    };
}
function E(e) {
    let { channelId: t, threadIds: n } = e;
    if (!u(t)) return !1;
    let r = c(t);
    l[t] = {
        ...r,
        loading: !1,
        results: n
    };
}
function f(e) {
    let { channelId: t } = e;
    if (!u(t)) return !1;
    let n = c(t);
    l[t] = {
        ...n,
        loading: !1,
        results: []
    };
}
function h(e) {
    let { channelId: t } = e;
    return !!u(t) && delete l[t];
}
function p(e) {
    var t;
    let { channel: n } = e,
        r = n.parent_id;
    if (null == r) return !1;
    let i = l[r];
    if (null == i) return !1;
    l[r] = {
        ...i,
        results: null === (t = i.results) || void 0 === t ? void 0 : t.filter((e) => n.id !== e)
    };
}
function m(e) {
    let { channel: t } = e;
    return delete l[t.id];
}
function I() {
    l = {};
}
class T extends (r = i.ZP.Store) {
    getSearchQuery(e) {
        let t = l[e];
        return null == t ? void 0 : t.query;
    }
    getSearchLoading(e) {
        var t;
        let n = l[e];
        return null !== (t = null == n ? void 0 : n.loading) && void 0 !== t && t;
    }
    getSearchResults(e) {
        let t = l[e];
        return null == t ? void 0 : t.results;
    }
    getHasSearchResults(e) {
        let t = l[e];
        return (null == t ? void 0 : t.results) != null && t.results.length > 0;
    }
}
s(T, 'displayName', 'ForumSearchStore'),
    (t.Z = new T(a.Z, {
        CONNECTION_OPEN: I,
        THREAD_DELETE: p,
        CHANNEL_DELETE: m,
        FORUM_SEARCH_QUERY_UPDATED: d,
        FORUM_SEARCH_START: _,
        FORUM_SEARCH_SUCCESS: E,
        FORUM_SEARCH_FAILURE: f,
        FORUM_SEARCH_CLEAR: h
    }));
