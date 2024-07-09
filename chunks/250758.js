n(653041), n(724458);
var i, a, s, r, l = n(442837), o = n(570140), c = n(999650), d = n(279779), u = n(57132), _ = n(483360), E = n(892880), I = n(405656), m = n(51144), T = n(271383), h = n(768119), N = n(246946), p = n(594174), f = n(981631);
let C = {}, g = {};
function S(e) {
    let {
            searchId: t,
            query: n,
            mode: i,
            tokens: a,
            cursorScope: s,
            autocompletes: r
        } = e, l = g[t];
    return null == l && (l = {
        results: [],
        context: d.Z.getSearchContext(A.bind(null, t))
    }, g[t] = l), {
        query: null != n ? n : '',
        mode: null != i ? i : {
            type: f.Sap.EMPTY,
            filter: null,
            token: null
        },
        tokens: null != a ? a : [],
        cursorScope: null != s ? s : null,
        autocompletes: null != r ? r : []
    };
}
function A(e, t) {
    let {results: n} = t, i = g[e], a = C[e];
    if (null == i || null == a)
        return;
    let {
        type: s,
        filter: r
    } = a.mode;
    if (s === f.Sap.EMPTY || s === f.Sap.FILTER && r !== f.dCx.FILTER_FROM && r !== f.dCx.FILTER_MENTIONS)
        return;
    let l = 3;
    a.mode.type === f.Sap.FILTER && (l = 10), i.results = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        return (e = e.reduce((e, t) => {
            let n = p.default.getUser(t.id);
            return null == n ? e : (e.push({
                id: n.id,
                text: m.ZP.getUserTag(n),
                user: n
            }), e);
        }, [])).length > t && (e.length = t), e;
    }(n, l);
    let {
            query: o,
            mode: c,
            tokens: d,
            cursorScope: u
        } = a, {autocompletes: _} = a;
    _ = O(e, c), C[e] = S({
        searchId: e,
        query: o,
        mode: c,
        tokens: d,
        cursorScope: u,
        autocompletes: _
    }), P.emitChange();
}
function x(e, t, n) {
    let i, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e || '' === e)
        return null;
    if (h.Z.getSearchType(n) === f.aib.GUILD && (e === f.dCx.FILTER_FROM || e === f.dCx.FILTER_MENTIONS)) {
        let e = g[n];
        null == e ? i = null : ((null == t || 0 === t.getFullMatch().trim().length) && (e.results = _.ZP.getRecentlyTalked(n, 10).map(e => {
            let {record: t} = e;
            return {
                user: t,
                text: m.ZP.getUserTag(t)
            };
        })), i = e.results);
    } else {
        var s;
        let r = null === (s = c.ZP[e]) || void 0 === s ? void 0 : s.getAutocompletions, l = (null != t ? t.getFullMatch() : '').trim();
        i = null != r ? r(l, n, null != a ? a : 10) : [];
    }
    return null == i || 0 === i.length ? null : {
        group: e,
        results: i
    };
}
function R(e) {
    let t = (null != e ? e.getFullMatch() : '').trim(), n = function () {
            let e = (0, u.cn)() && !1;
            return {
                [f.dCx.FILTER_FROM]: !N.Z.hidePersonalInformation,
                [f.dCx.FILTER_MENTIONS]: !N.Z.hidePersonalInformation,
                [f.dCx.FILTER_HAS]: !0,
                [f.dCx.FILTER_BEFORE]: !0,
                [f.dCx.FILTER_AFTER]: !0,
                [f.dCx.FILTER_ON]: !0,
                [f.dCx.FILTER_IN]: h.Z.getSearchType() === f.aib.GUILD,
                [f.dCx.FILTER_PINNED]: !e
            };
        }(), i = (0, c.nB)(t).filter(e => n[e.token]);
    return {
        group: f.rtL.SEARCH_OPTIONS,
        results: i
    };
}
function O(e, t) {
    let n = [];
    return t.type === f.Sap.FILTER ? n.push(x(t.filter, t.token, e, 10)) : t.type === f.Sap.FILTER_ALL ? n = function (e, t) {
        let n = (null != e ? e.getFullMatch() : '').trim(), i = [];
        return null != n && '' !== n && (function (e) {
            let t = h.Z.getSearchType(e), n = [f.dCx.FILTER_HAS];
            return !N.Z.hidePersonalInformation && (n.push(f.dCx.FILTER_FROM), n.push(f.dCx.FILTER_MENTIONS)), t === f.aib.GUILD && n.push(f.dCx.FILTER_IN), n;
        }(t).forEach(n => {
            if (null == n)
                return;
            let a = x(n, e, t, 3);
            null != a && i.push(a);
        }), i.push(function (e, t) {
            let n = (null != e ? e.getFullMatch() : '').trim();
            if (null != n && '' !== n) {
                var i, a, s;
                let e = null === (i = c.ZP[f.dCx.FILTER_BEFORE]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0], r = null === (a = c.ZP[f.dCx.FILTER_ON]) || void 0 === a ? void 0 : a.getAutocompletions(n, t, 1)[0], l = null === (s = c.ZP[f.dCx.FILTER_AFTER]) || void 0 === s ? void 0 : s.getAutocompletions(n, t, 1)[0];
                return null == e ? null : {
                    group: f.rtL.DATES,
                    results: [
                        e,
                        r,
                        l
                    ]
                };
            }
        }(e, t))), 5 > (0, I.BU)(i) && i.push(R(e)), i;
    }(t.token, e) : t.type === f.Sap.EMPTY && (n.push(R(t.token)), (0, u.cn)(), n.push(function (e) {
        if (N.Z.hidePersonalInformation)
            return null;
        let t = h.Z.getHistory(e);
        return null == t ? null : {
            group: f.rtL.HISTORY,
            results: t.map(e => ({ text: e }))
        };
    }(e))), n;
}
function M() {
    (0, I.WU)();
}
function v(e) {
    let t = C[e];
    if (null == t)
        return;
    let {
        query: n,
        mode: i,
        tokens: a,
        cursorScope: s,
        autocompletes: r
    } = t;
    C[e] = S({
        searchId: e,
        query: n,
        mode: i,
        tokens: a,
        cursorScope: s,
        autocompletes: r.map(e => (null == e ? void 0 : e.group) === f.rtL.HISTORY ? null : e)
    });
}
function L() {
    let e = h.Z.getCurrentSearchId();
    if (null == e || null == C[e])
        return;
    let {
        query: t,
        mode: n,
        tokens: i,
        cursorScope: a
    } = C[e];
    C[e] = S({
        searchId: e,
        query: t,
        mode: n,
        tokens: i,
        cursorScope: a,
        autocompletes: O(e, n)
    });
}
class Z extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(T.ZP, N.Z);
    }
    getState(e) {
        var t;
        return null !== (t = C[e]) && void 0 !== t ? t : S({ searchId: e });
    }
}
r = 'SearchAutocompleteStore', (s = 'displayName') in (a = Z) ? Object.defineProperty(a, s, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[s] = r;
let P = new Z(o.Z, {
    SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
        var t;
        let n, {
                searchId: i,
                tokens: a,
                cursorScope: s
            } = e, r = (0, I.cl)(a), l = (0, I.qc)(s, a), o = null !== (t = C[i]) && void 0 !== t ? t : {}, c = g[i], d = !0;
        if (r === o.query && (null == o.mode || o.mode.filter === l.filter))
            n = o.autocompletes, d = !1;
        else if (l.type === f.Sap.EMPTY || l.type === f.Sap.FILTER && l.filter !== f.dCx.FILTER_FROM && l.filter !== f.dCx.FILTER_MENTIONS)
            null != c && (c.context.clearQuery(), c.results = []), n = O(i, l);
        else if (null != c) {
            let {token: e} = l;
            null != e && e.getFullMatch().trim().length > 0 ? (E.Z.requestMembers(i, e.getFullMatch().trim(), 10), c.context.setQuery(e.getFullMatch().trim(), { guild: i }), n = o.autocompletes, d = !1) : (c.context.clearQuery(), n = O(i, l));
        }
        return C[i] = S({
            searchId: i,
            query: r,
            mode: l,
            tokens: a,
            cursorScope: s,
            autocompletes: n
        }), d;
    },
    SEARCH_EDITOR_STATE_CLEAR: function (e) {
        let {searchId: t} = e, n = g[t];
        null != n && (n.context.destroy(), n.results = [], delete g[t]), delete C[t];
    },
    CHANNEL_CREATE: M,
    CHANNEL_DELETE: M,
    STREAMER_MODE_UPDATE: L,
    SEARCH_MODAL_OPEN: L,
    SEARCH_SCREEN_OPEN: L,
    SEARCH_CLEAR_HISTORY: function (e) {
        let {searchId: t} = e;
        null != t ? v(t) : Object.keys(C).forEach(v);
    },
    LOGOUT: function () {
        Object.keys(C).forEach(v);
    }
});
t.Z = P;
