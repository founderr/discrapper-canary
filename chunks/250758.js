n(653041), n(724458);
var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140),
    c = n(999650),
    u = n(279779),
    d = n(57132),
    m = n(483360),
    h = n(892880),
    f = n(405656),
    p = n(51144),
    _ = n(271383),
    g = n(768119),
    E = n(246946),
    C = n(594174),
    I = n(981631);
let x = {},
    N = {};
function v(e) {
    let { searchId: t, query: n, mode: i, tokens: r, cursorScope: l, autocompletes: a } = e,
        o = N[t];
    return (
        null == o &&
            ((o = {
                results: [],
                context: u.Z.getSearchContext(T.bind(null, t))
            }),
            (N[t] = o)),
        {
            query: null != n ? n : '',
            mode:
                null != i
                    ? i
                    : {
                          type: I.Sap.EMPTY,
                          filter: null,
                          token: null
                      },
            tokens: null != r ? r : [],
            cursorScope: null != l ? l : null,
            autocompletes: null != a ? a : []
        }
    );
}
function T(e, t) {
    let { results: n } = t,
        i = N[e],
        r = x[e];
    if (null == i || null == r) return;
    let { type: l, filter: a } = r.mode;
    if (l === I.Sap.EMPTY || (l === I.Sap.FILTER && a !== I.dCx.FILTER_FROM && a !== I.dCx.FILTER_MENTIONS)) return;
    let o = 3;
    r.mode.type === I.Sap.FILTER && (o = 10),
        (i.results = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return (
                (e = e.reduce((e, t) => {
                    let n = C.default.getUser(t.id);
                    return null == n
                        ? e
                        : (e.push({
                              id: n.id,
                              text: p.ZP.getUserTag(n),
                              user: n
                          }),
                          e);
                }, [])).length > t && (e.length = t),
                e
            );
        })(n, o));
    let { query: s, mode: c, tokens: u, cursorScope: d } = r,
        { autocompletes: m } = r;
    (m = b(e, c)),
        (x[e] = v({
            searchId: e,
            query: s,
            mode: c,
            tokens: u,
            cursorScope: d,
            autocompletes: m
        })),
        P.emitChange();
}
function S(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e || '' === e) return null;
    if (g.Z.getSearchType(n) === I.aib.GUILD && (e === I.dCx.FILTER_FROM || e === I.dCx.FILTER_MENTIONS)) {
        let e = N[n];
        null == e
            ? (i = null)
            : ((null == t || 0 === t.getFullMatch().trim().length) &&
                  (e.results = m.ZP.getRecentlyTalked(n, 10).map((e) => {
                      let { record: t } = e;
                      return {
                          user: t,
                          text: p.ZP.getUserTag(t)
                      };
                  })),
              (i = e.results));
    } else {
        var l;
        let a = null === (l = c.ZP[e]) || void 0 === l ? void 0 : l.getAutocompletions,
            o = (null != t ? t.getFullMatch() : '').trim();
        i = null != a ? a(o, n, null != r ? r : 10) : [];
    }
    return null == i || 0 === i.length
        ? null
        : {
              group: e,
              results: i
          };
}
function A(e) {
    let t = (null != e ? e.getFullMatch() : '').trim(),
        n = (function () {
            let e = (0, d.cn)() && !1;
            return {
                [I.dCx.FILTER_FROM]: !E.Z.hidePersonalInformation,
                [I.dCx.FILTER_MENTIONS]: !E.Z.hidePersonalInformation,
                [I.dCx.FILTER_HAS]: !0,
                [I.dCx.FILTER_BEFORE]: !0,
                [I.dCx.FILTER_AFTER]: !0,
                [I.dCx.FILTER_ON]: !0,
                [I.dCx.FILTER_IN]: g.Z.getSearchType() === I.aib.GUILD,
                [I.dCx.FILTER_PINNED]: !e
            };
        })(),
        i = (0, c.nB)(t).filter((e) => n[e.token]);
    return {
        group: I.rtL.SEARCH_OPTIONS,
        results: i
    };
}
function b(e, t) {
    let n = [];
    return (
        t.type === I.Sap.FILTER
            ? n.push(S(t.filter, t.token, e, 10))
            : t.type === I.Sap.FILTER_ALL
              ? (n = (function (e, t) {
                    let n = (null != e ? e.getFullMatch() : '').trim(),
                        i = [];
                    return (
                        null != n &&
                            '' !== n &&
                            ((function (e) {
                                let t = g.Z.getSearchType(e),
                                    n = [I.dCx.FILTER_HAS];
                                return !E.Z.hidePersonalInformation && (n.push(I.dCx.FILTER_FROM), n.push(I.dCx.FILTER_MENTIONS)), t === I.aib.GUILD && n.push(I.dCx.FILTER_IN), n;
                            })(t).forEach((n) => {
                                if (null == n) return;
                                let r = S(n, e, t, 3);
                                null != r && i.push(r);
                            }),
                            i.push(
                                (function (e, t) {
                                    let n = (null != e ? e.getFullMatch() : '').trim();
                                    if (null != n && '' !== n) {
                                        var i, r, l;
                                        let e = null === (i = c.ZP[I.dCx.FILTER_BEFORE]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0],
                                            a = null === (r = c.ZP[I.dCx.FILTER_ON]) || void 0 === r ? void 0 : r.getAutocompletions(n, t, 1)[0],
                                            o = null === (l = c.ZP[I.dCx.FILTER_AFTER]) || void 0 === l ? void 0 : l.getAutocompletions(n, t, 1)[0];
                                        return null == e
                                            ? null
                                            : {
                                                  group: I.rtL.DATES,
                                                  results: [e, a, o]
                                              };
                                    }
                                })(e, t)
                            )),
                        5 > (0, f.BU)(i) && i.push(A(e)),
                        i
                    );
                })(t.token, e))
              : t.type === I.Sap.EMPTY &&
                (n.push(A(t.token)),
                (0, d.cn)(),
                n.push(
                    (function (e) {
                        if (E.Z.hidePersonalInformation) return null;
                        let t = g.Z.getHistory(e);
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
function j() {
    (0, f.WU)();
}
function Z(e) {
    let t = x[e];
    if (null == t) return;
    let { query: n, mode: i, tokens: r, cursorScope: l, autocompletes: a } = t;
    x[e] = v({
        searchId: e,
        query: n,
        mode: i,
        tokens: r,
        cursorScope: l,
        autocompletes: a.map((e) => ((null == e ? void 0 : e.group) === I.rtL.HISTORY ? null : e))
    });
}
function R() {
    let e = g.Z.getCurrentSearchId();
    if (null == e || null == x[e]) return;
    let { query: t, mode: n, tokens: i, cursorScope: r } = x[e];
    x[e] = v({
        searchId: e,
        query: t,
        mode: n,
        tokens: i,
        cursorScope: r,
        autocompletes: b(e, n)
    });
}
class L extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, E.Z);
    }
    getState(e) {
        var t;
        return null !== (t = x[e]) && void 0 !== t ? t : v({ searchId: e });
    }
}
(a = 'SearchAutocompleteStore'),
    (l = 'displayName') in (r = L)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a);
let P = new L(s.Z, {
    SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
        var t;
        let n,
            { searchId: i, tokens: r, cursorScope: l } = e,
            a = (0, f.cl)(r),
            o = (0, f.qc)(l, r),
            s = null !== (t = x[i]) && void 0 !== t ? t : {},
            c = N[i],
            u = !0;
        if (a === s.query && (null == s.mode || s.mode.filter === o.filter)) (n = s.autocompletes), (u = !1);
        else if (o.type === I.Sap.EMPTY || (o.type === I.Sap.FILTER && o.filter !== I.dCx.FILTER_FROM && o.filter !== I.dCx.FILTER_MENTIONS)) null != c && (c.context.clearQuery(), (c.results = [])), (n = b(i, o));
        else if (null != c) {
            let { token: e } = o;
            null != e && e.getFullMatch().trim().length > 0 ? (h.Z.requestMembers(i, e.getFullMatch().trim(), 10), c.context.setQuery(e.getFullMatch().trim(), { guild: i }), (n = s.autocompletes), (u = !1)) : (c.context.clearQuery(), (n = b(i, o)));
        }
        return (
            (x[i] = v({
                searchId: i,
                query: a,
                mode: o,
                tokens: r,
                cursorScope: l,
                autocompletes: n
            })),
            u
        );
    },
    SEARCH_EDITOR_STATE_CLEAR: function (e) {
        let { searchId: t } = e,
            n = N[t];
        null != n && (n.context.destroy(), (n.results = []), delete N[t]), delete x[t];
    },
    CHANNEL_CREATE: j,
    CHANNEL_DELETE: j,
    STREAMER_MODE_UPDATE: R,
    SEARCH_SCREEN_OPEN: R,
    SEARCH_CLEAR_HISTORY: function (e) {
        let { searchId: t } = e;
        null != t ? Z(t) : Object.keys(x).forEach(Z);
    },
    LOGOUT: function () {
        Object.keys(x).forEach(Z);
    }
});
t.Z = P;
