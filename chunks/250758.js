n(653041), n(724458);
var r,
    i,
    l,
    s,
    a = n(442837),
    o = n(570140),
    u = n(999650),
    c = n(279779),
    d = n(57132),
    h = n(483360),
    _ = n(892880),
    f = n(405656),
    E = n(51144),
    p = n(271383),
    m = n(768119),
    C = n(246946),
    S = n(594174),
    I = n(981631);
let g = {},
    T = {};
function R(e) {
    let { searchId: t, query: n, mode: r, tokens: i, cursorScope: l, autocompletes: s } = e,
        a = T[t];
    return (
        null == a &&
            ((a = {
                results: [],
                context: c.Z.getSearchContext(N.bind(null, t))
            }),
            (T[t] = a)),
        {
            query: null != n ? n : '',
            mode:
                null != r
                    ? r
                    : {
                          type: I.Sap.EMPTY,
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
        r = T[e],
        i = g[e];
    if (null == r || null == i) return;
    let { type: l, filter: s } = i.mode;
    if (l === I.Sap.EMPTY || (l === I.Sap.FILTER && s !== I.dCx.FILTER_FROM && s !== I.dCx.FILTER_MENTIONS)) return;
    let a = 3;
    i.mode.type === I.Sap.FILTER && (a = 10),
        (r.results = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return (
                (e = e.reduce((e, t) => {
                    let n = S.default.getUser(t.id);
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
    let { query: o, mode: u, tokens: c, cursorScope: d } = i,
        { autocompletes: h } = i;
    (h = A(e, u)),
        (g[e] = R({
            searchId: e,
            query: o,
            mode: u,
            tokens: c,
            cursorScope: d,
            autocompletes: h
        })),
        P.emitChange();
}
function v(e, t, n) {
    let r,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e || '' === e) return null;
    if (m.Z.getSearchType(n) === I.aib.GUILD && (e === I.dCx.FILTER_FROM || e === I.dCx.FILTER_MENTIONS)) {
        let e = T[n];
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
        let s = null === (l = u.ZP[e]) || void 0 === l ? void 0 : l.getAutocompletions,
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
function x(e) {
    let t = (null != e ? e.getFullMatch() : '').trim(),
        n = (function () {
            let e = (0, d.cn)() && !1;
            return {
                [I.dCx.FILTER_FROM]: !C.Z.hidePersonalInformation,
                [I.dCx.FILTER_MENTIONS]: !C.Z.hidePersonalInformation,
                [I.dCx.FILTER_HAS]: !0,
                [I.dCx.FILTER_BEFORE]: !0,
                [I.dCx.FILTER_AFTER]: !0,
                [I.dCx.FILTER_ON]: !0,
                [I.dCx.FILTER_IN]: m.Z.getSearchType() === I.aib.GUILD,
                [I.dCx.FILTER_PINNED]: !e
            };
        })(),
        r = (0, u.nB)(t).filter((e) => n[e.token]);
    return {
        group: I.rtL.SEARCH_OPTIONS,
        results: r
    };
}
function A(e, t) {
    let n = [];
    return (
        t.type === I.Sap.FILTER
            ? n.push(v(t.filter, t.token, e, 10))
            : t.type === I.Sap.FILTER_ALL
              ? (n = (function (e, t) {
                    let n = (null != e ? e.getFullMatch() : '').trim(),
                        r = [];
                    return (
                        null != n &&
                            '' !== n &&
                            ((function (e) {
                                let t = m.Z.getSearchType(e),
                                    n = [I.dCx.FILTER_HAS];
                                return !C.Z.hidePersonalInformation && (n.push(I.dCx.FILTER_FROM), n.push(I.dCx.FILTER_MENTIONS)), t === I.aib.GUILD && n.push(I.dCx.FILTER_IN), n;
                            })(t).forEach((n) => {
                                if (null == n) return;
                                let i = v(n, e, t, 3);
                                null != i && r.push(i);
                            }),
                            r.push(
                                (function (e, t) {
                                    let n = (null != e ? e.getFullMatch() : '').trim();
                                    if (null != n && '' !== n) {
                                        var r, i, l;
                                        let e = null === (r = u.ZP[I.dCx.FILTER_BEFORE]) || void 0 === r ? void 0 : r.getAutocompletions(n, t, 1)[0],
                                            s = null === (i = u.ZP[I.dCx.FILTER_ON]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0],
                                            a = null === (l = u.ZP[I.dCx.FILTER_AFTER]) || void 0 === l ? void 0 : l.getAutocompletions(n, t, 1)[0];
                                        return null == e
                                            ? null
                                            : {
                                                  group: I.rtL.DATES,
                                                  results: [e, s, a]
                                              };
                                    }
                                })(e, t)
                            )),
                        5 > (0, f.BU)(r) && r.push(x(e)),
                        r
                    );
                })(t.token, e))
              : t.type === I.Sap.EMPTY &&
                (n.push(x(t.token)),
                (0, d.cn)(),
                n.push(
                    (function (e) {
                        if (C.Z.hidePersonalInformation) return null;
                        let t = m.Z.getHistory(e);
                        return null == t
                            ? null
                            : {
                                  group: I.rtL.HISTORY,
                                  results: t.map((e) => ({ text: e }))
                              };
                    })(e)
                )),
        n
    );
}
function L() {
    (0, f.WU)();
}
function b(e) {
    let t = g[e];
    if (null == t) return;
    let { query: n, mode: r, tokens: i, cursorScope: l, autocompletes: s } = t;
    g[e] = R({
        searchId: e,
        query: n,
        mode: r,
        tokens: i,
        cursorScope: l,
        autocompletes: s.map((e) => ((null == e ? void 0 : e.group) === I.rtL.HISTORY ? null : e))
    });
}
function O() {
    let e = m.Z.getCurrentSearchId();
    if (null == e || null == g[e]) return;
    let { query: t, mode: n, tokens: r, cursorScope: i } = g[e];
    g[e] = R({
        searchId: e,
        query: t,
        mode: n,
        tokens: r,
        cursorScope: i,
        autocompletes: A(e, n)
    });
}
class Z extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, C.Z);
    }
    getState(e) {
        var t;
        return null !== (t = g[e]) && void 0 !== t ? t : R({ searchId: e });
    }
}
(s = 'SearchAutocompleteStore'),
    (l = 'displayName') in (i = Z)
        ? Object.defineProperty(i, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = s);
let P = new Z(o.Z, {
    SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
        var t;
        let n,
            { searchId: r, tokens: i, cursorScope: l } = e,
            s = (0, f.cl)(i),
            a = (0, f.qc)(l, i),
            o = null !== (t = g[r]) && void 0 !== t ? t : {},
            u = T[r],
            c = !0;
        if (s === o.query && (null == o.mode || o.mode.filter === a.filter)) (n = o.autocompletes), (c = !1);
        else if (a.type === I.Sap.EMPTY || (a.type === I.Sap.FILTER && a.filter !== I.dCx.FILTER_FROM && a.filter !== I.dCx.FILTER_MENTIONS)) null != u && (u.context.clearQuery(), (u.results = [])), (n = A(r, a));
        else if (null != u) {
            let { token: e } = a;
            null != e && e.getFullMatch().trim().length > 0 ? (_.Z.requestMembers(r, e.getFullMatch().trim(), 10), u.context.setQuery(e.getFullMatch().trim(), { guild: r }), (n = o.autocompletes), (c = !1)) : (u.context.clearQuery(), (n = A(r, a)));
        }
        return (
            (g[r] = R({
                searchId: r,
                query: s,
                mode: a,
                tokens: i,
                cursorScope: l,
                autocompletes: n
            })),
            c
        );
    },
    SEARCH_EDITOR_STATE_CLEAR: function (e) {
        let { searchId: t } = e,
            n = T[t];
        null != n && (n.context.destroy(), (n.results = []), delete T[t]), delete g[t];
    },
    CHANNEL_CREATE: L,
    CHANNEL_DELETE: L,
    STREAMER_MODE_UPDATE: O,
    SEARCH_MODAL_OPEN: O,
    SEARCH_SCREEN_OPEN: O,
    SEARCH_CLEAR_HISTORY: function (e) {
        let { searchId: t } = e;
        null != t ? b(t) : Object.keys(g).forEach(b);
    },
    LOGOUT: function () {
        Object.keys(g).forEach(b);
    }
});
t.Z = P;
