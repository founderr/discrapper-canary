n(653041), n(724458);
var r,
    i,
    l,
    s,
    a = n(442837),
    o = n(570140),
    c = n(999650),
    u = n(279779),
    d = n(57132),
    h = n(483360),
    _ = n(892880),
    f = n(405656),
    E = n(51144),
    p = n(271383),
    m = n(768119),
    I = n(246946),
    C = n(594174),
    S = n(981631);
let g = {},
    R = {};
function T(e) {
    let { searchId: t, query: n, mode: r, tokens: i, cursorScope: l, autocompletes: s } = e,
        a = R[t];
    return (
        null == a &&
            ((a = {
                results: [],
                context: u.Z.getSearchContext(N.bind(null, t))
            }),
            (R[t] = a)),
        {
            query: null != n ? n : '',
            mode:
                null != r
                    ? r
                    : {
                          type: S.Sap.EMPTY,
                          filter: null,
                          token: null
                      },
            tokens: null != i ? i : [],
            cursorScope: null != l ? l : null,
            autocompletes: null != s ? s : []
        }
    );
}
function N(e, t) {
    let { results: n } = t,
        r = R[e],
        i = g[e];
    if (null == r || null == i) return;
    let { type: l, filter: s } = i.mode;
    if (l === S.Sap.EMPTY || (l === S.Sap.FILTER && s !== S.dCx.FILTER_FROM && s !== S.dCx.FILTER_MENTIONS)) return;
    let a = 3;
    i.mode.type === S.Sap.FILTER && (a = 10),
        (r.results = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return (
                (e = e.reduce((e, t) => {
                    let n = C.default.getUser(t.id);
                    return null == n
                        ? e
                        : (e.push({
                              id: n.id,
                              text: E.ZP.getUserTag(n),
                              user: n
                          }),
                          e);
                }, [])).length > t && (e.length = t),
                e
            );
        })(n, a));
    let { query: o, mode: c, tokens: u, cursorScope: d } = i,
        { autocompletes: h } = i;
    (h = O(e, c)),
        (g[e] = T({
            searchId: e,
            query: o,
            mode: c,
            tokens: u,
            cursorScope: d,
            autocompletes: h
        })),
        Z.emitChange();
}
function x(e, t, n) {
    let r,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e || '' === e) return null;
    if (m.Z.getSearchType(n) === S.aib.GUILD && (e === S.dCx.FILTER_FROM || e === S.dCx.FILTER_MENTIONS)) {
        let e = R[n];
        null == e
            ? (r = null)
            : ((null == t || 0 === t.getFullMatch().trim().length) &&
                  (e.results = h.ZP.getRecentlyTalked(n, 10).map((e) => {
                      let { record: t } = e;
                      return {
                          user: t,
                          text: E.ZP.getUserTag(t)
                      };
                  })),
              (r = e.results));
    } else {
        var l;
        let s = null === (l = c.ZP[e]) || void 0 === l ? void 0 : l.getAutocompletions,
            a = (null != t ? t.getFullMatch() : '').trim();
        r = null != s ? s(a, n, null != i ? i : 10) : [];
    }
    return null == r || 0 === r.length
        ? null
        : {
              group: e,
              results: r
          };
}
function v(e) {
    let t = (null != e ? e.getFullMatch() : '').trim(),
        n = (function () {
            let e = (0, d.cn)() && !1;
            return {
                [S.dCx.FILTER_FROM]: !I.Z.hidePersonalInformation,
                [S.dCx.FILTER_MENTIONS]: !I.Z.hidePersonalInformation,
                [S.dCx.FILTER_HAS]: !0,
                [S.dCx.FILTER_BEFORE]: !0,
                [S.dCx.FILTER_AFTER]: !0,
                [S.dCx.FILTER_ON]: !0,
                [S.dCx.FILTER_IN]: m.Z.getSearchType() === S.aib.GUILD,
                [S.dCx.FILTER_PINNED]: !e
            };
        })(),
        r = (0, c.nB)(t).filter((e) => n[e.token]);
    return {
        group: S.rtL.SEARCH_OPTIONS,
        results: r
    };
}
function O(e, t) {
    let n = [];
    return (
        t.type === S.Sap.FILTER
            ? n.push(x(t.filter, t.token, e, 10))
            : t.type === S.Sap.FILTER_ALL
              ? (n = (function (e, t) {
                    let n = (null != e ? e.getFullMatch() : '').trim(),
                        r = [];
                    return (
                        null != n &&
                            '' !== n &&
                            ((function (e) {
                                let t = m.Z.getSearchType(e),
                                    n = [S.dCx.FILTER_HAS];
                                return !I.Z.hidePersonalInformation && (n.push(S.dCx.FILTER_FROM), n.push(S.dCx.FILTER_MENTIONS)), t === S.aib.GUILD && n.push(S.dCx.FILTER_IN), n;
                            })(t).forEach((n) => {
                                if (null == n) return;
                                let i = x(n, e, t, 3);
                                null != i && r.push(i);
                            }),
                            r.push(
                                (function (e, t) {
                                    let n = (null != e ? e.getFullMatch() : '').trim();
                                    if (null != n && '' !== n) {
                                        var r, i, l;
                                        let e = null === (r = c.ZP[S.dCx.FILTER_BEFORE]) || void 0 === r ? void 0 : r.getAutocompletions(n, t, 1)[0],
                                            s = null === (i = c.ZP[S.dCx.FILTER_ON]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0],
                                            a = null === (l = c.ZP[S.dCx.FILTER_AFTER]) || void 0 === l ? void 0 : l.getAutocompletions(n, t, 1)[0];
                                        return null == e
                                            ? null
                                            : {
                                                  group: S.rtL.DATES,
                                                  results: [e, s, a]
                                              };
                                    }
                                })(e, t)
                            )),
                        5 > (0, f.BU)(r) && r.push(v(e)),
                        r
                    );
                })(t.token, e))
              : t.type === S.Sap.EMPTY &&
                (n.push(v(t.token)),
                (0, d.cn)(),
                n.push(
                    (function (e) {
                        if (I.Z.hidePersonalInformation) return null;
                        let t = m.Z.getHistory(e);
                        return null == t
                            ? null
                            : {
                                  group: S.rtL.HISTORY,
                                  results: t.map((e) => ({ text: e }))
                              };
                    })(e)
                )),
        n
    );
}
function b() {
    (0, f.WU)();
}
function L(e) {
    let t = g[e];
    if (null == t) return;
    let { query: n, mode: r, tokens: i, cursorScope: l, autocompletes: s } = t;
    g[e] = T({
        searchId: e,
        query: n,
        mode: r,
        tokens: i,
        cursorScope: l,
        autocompletes: s.map((e) => ((null == e ? void 0 : e.group) === S.rtL.HISTORY ? null : e))
    });
}
function A() {
    let e = m.Z.getCurrentSearchId();
    if (null == e || null == g[e]) return;
    let { query: t, mode: n, tokens: r, cursorScope: i } = g[e];
    g[e] = T({
        searchId: e,
        query: t,
        mode: n,
        tokens: r,
        cursorScope: i,
        autocompletes: O(e, n)
    });
}
class P extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, I.Z);
    }
    getState(e) {
        var t;
        return null !== (t = g[e]) && void 0 !== t ? t : T({ searchId: e });
    }
}
(s = 'SearchAutocompleteStore'),
    (l = 'displayName') in (i = P)
        ? Object.defineProperty(i, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = s);
let Z = new P(o.Z, {
    SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
        var t;
        let n,
            { searchId: r, tokens: i, cursorScope: l } = e,
            s = (0, f.cl)(i),
            a = (0, f.qc)(l, i),
            o = null !== (t = g[r]) && void 0 !== t ? t : {},
            c = R[r],
            u = !0;
        if (s === o.query && (null == o.mode || o.mode.filter === a.filter)) (n = o.autocompletes), (u = !1);
        else if (a.type === S.Sap.EMPTY || (a.type === S.Sap.FILTER && a.filter !== S.dCx.FILTER_FROM && a.filter !== S.dCx.FILTER_MENTIONS)) null != c && (c.context.clearQuery(), (c.results = [])), (n = O(r, a));
        else if (null != c) {
            let { token: e } = a;
            null != e && e.getFullMatch().trim().length > 0 ? (_.Z.requestMembers(r, e.getFullMatch().trim(), 10), c.context.setQuery(e.getFullMatch().trim(), { guild: r }), (n = o.autocompletes), (u = !1)) : (c.context.clearQuery(), (n = O(r, a)));
        }
        return (
            (g[r] = T({
                searchId: r,
                query: s,
                mode: a,
                tokens: i,
                cursorScope: l,
                autocompletes: n
            })),
            u
        );
    },
    SEARCH_EDITOR_STATE_CLEAR: function (e) {
        let { searchId: t } = e,
            n = R[t];
        null != n && (n.context.destroy(), (n.results = []), delete R[t]), delete g[t];
    },
    CHANNEL_CREATE: b,
    CHANNEL_DELETE: b,
    STREAMER_MODE_UPDATE: A,
    SEARCH_MODAL_OPEN: A,
    SEARCH_SCREEN_OPEN: A,
    SEARCH_CLEAR_HISTORY: function (e) {
        let { searchId: t } = e;
        null != t ? L(t) : Object.keys(g).forEach(L);
    },
    LOGOUT: function () {
        Object.keys(g).forEach(L);
    }
});
t.Z = Z;
