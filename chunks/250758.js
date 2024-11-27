n(653041), n(724458);
var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140),
    c = n(999650),
    u = n(279779),
    d = n(483360),
    m = n(892880),
    h = n(405656),
    f = n(51144),
    p = n(271383),
    g = n(768119),
    _ = n(246946),
    E = n(594174),
    C = n(981631);
let I = {},
    x = {};
function N(e) {
    let { searchId: t, query: n, mode: i, tokens: r, cursorScope: l, autocompletes: a } = e,
        o = x[t];
    return (
        null == o &&
            ((o = {
                results: [],
                context: u.Z.getSearchContext(v.bind(null, t))
            }),
            (x[t] = o)),
        {
            query: null != n ? n : '',
            mode:
                null != i
                    ? i
                    : {
                          type: C.Sap.EMPTY,
                          filter: null,
                          token: null
                      },
            tokens: null != r ? r : [],
            cursorScope: null != l ? l : null,
            autocompletes: null != a ? a : []
        }
    );
}
function v(e, t) {
    let { results: n } = t,
        i = x[e],
        r = I[e];
    if (null == i || null == r) return;
    let { type: l, filter: a } = r.mode;
    if (l === C.Sap.EMPTY || (l === C.Sap.FILTER && a !== C.dCx.FILTER_FROM && a !== C.dCx.FILTER_MENTIONS)) return;
    let o = 3;
    r.mode.type === C.Sap.FILTER && (o = 10),
        (i.results = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return (
                (e = e.reduce((e, t) => {
                    let n = E.default.getUser(t.id);
                    return null == n
                        ? e
                        : (e.push({
                              id: n.id,
                              text: f.ZP.getUserTag(n),
                              user: n
                          }),
                          e);
                }, [])).length > t && (e.length = t),
                e
            );
        })(n, o));
    let { query: s, mode: c, tokens: u, cursorScope: d } = r,
        { autocompletes: m } = r;
    (m = A(e, c)),
        (I[e] = N({
            searchId: e,
            query: s,
            mode: c,
            tokens: u,
            cursorScope: d,
            autocompletes: m
        })),
        P.emitChange();
}
function T(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e || '' === e) return null;
    if (g.Z.getSearchType(n) === C.aib.GUILD && (e === C.dCx.FILTER_FROM || e === C.dCx.FILTER_MENTIONS)) {
        let e = x[n];
        null == e
            ? (i = null)
            : ((null == t || 0 === t.getFullMatch().trim().length) &&
                  (e.results = d.ZP.getRecentlyTalked(n, 10).map((e) => {
                      let { record: t } = e;
                      return {
                          user: t,
                          text: f.ZP.getUserTag(t)
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
function S(e) {
    let t = (null != e ? e.getFullMatch() : '').trim(),
        n = {
            [C.dCx.FILTER_FROM]: !_.Z.hidePersonalInformation,
            [C.dCx.FILTER_MENTIONS]: !_.Z.hidePersonalInformation,
            [C.dCx.FILTER_HAS]: !0,
            [C.dCx.FILTER_BEFORE]: !0,
            [C.dCx.FILTER_AFTER]: !0,
            [C.dCx.FILTER_ON]: !0,
            [C.dCx.FILTER_IN]: g.Z.getSearchType() === C.aib.GUILD,
            [C.dCx.FILTER_PINNED]: !0
        },
        i = (0, c.nB)(t).filter((e) => n[e.token]);
    return {
        group: C.rtL.SEARCH_OPTIONS,
        results: i
    };
}
function A(e, t) {
    let n = [];
    if (t.type === C.Sap.FILTER) n.push(T(t.filter, t.token, e, 10));
    else if (t.type === C.Sap.FILTER_ALL)
        n = (function (e, t) {
            let n = (null != e ? e.getFullMatch() : '').trim(),
                i = [];
            return (
                null != n &&
                    '' !== n &&
                    ((function (e) {
                        let t = g.Z.getSearchType(e),
                            n = [C.dCx.FILTER_HAS];
                        return !_.Z.hidePersonalInformation && (n.push(C.dCx.FILTER_FROM), n.push(C.dCx.FILTER_MENTIONS)), t === C.aib.GUILD && n.push(C.dCx.FILTER_IN), n;
                    })(t).forEach((n) => {
                        if (null == n) return;
                        let r = T(n, e, t, 3);
                        null != r && i.push(r);
                    }),
                    i.push(
                        (function (e, t) {
                            let n = (null != e ? e.getFullMatch() : '').trim();
                            if (null != n && '' !== n) {
                                var i, r, l;
                                let e = null === (i = c.ZP[C.dCx.FILTER_BEFORE]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0],
                                    a = null === (r = c.ZP[C.dCx.FILTER_ON]) || void 0 === r ? void 0 : r.getAutocompletions(n, t, 1)[0],
                                    o = null === (l = c.ZP[C.dCx.FILTER_AFTER]) || void 0 === l ? void 0 : l.getAutocompletions(n, t, 1)[0];
                                return null == e
                                    ? null
                                    : {
                                          group: C.rtL.DATES,
                                          results: [e, a, o]
                                      };
                            }
                        })(e, t)
                    )),
                5 > (0, h.BU)(i) && i.push(S(e)),
                i
            );
        })(t.token, e);
    else if (t.type === C.Sap.EMPTY) {
        n.push(S(t.token));
        n.push(
            (function (e) {
                if (_.Z.hidePersonalInformation) return null;
                let t = g.Z.getHistory(e);
                return null == t
                    ? null
                    : {
                          group: C.rtL.HISTORY,
                          results: t.map((e) => ({ text: e }))
                      };
            })(e)
        );
    }
    return n;
}
function b() {
    (0, h.WU)();
}
function j(e) {
    let t = I[e];
    if (null == t) return;
    let { query: n, mode: i, tokens: r, cursorScope: l, autocompletes: a } = t;
    I[e] = N({
        searchId: e,
        query: n,
        mode: i,
        tokens: r,
        cursorScope: l,
        autocompletes: a.map((e) => ((null == e ? void 0 : e.group) === C.rtL.HISTORY ? null : e))
    });
}
function Z() {
    let e = g.Z.getCurrentSearchId();
    if (null == e || null == I[e]) return;
    let { query: t, mode: n, tokens: i, cursorScope: r } = I[e];
    I[e] = N({
        searchId: e,
        query: t,
        mode: n,
        tokens: i,
        cursorScope: r,
        autocompletes: A(e, n)
    });
}
class R extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, _.Z);
    }
    getState(e) {
        var t;
        return null !== (t = I[e]) && void 0 !== t ? t : N({ searchId: e });
    }
}
(a = 'SearchAutocompleteStore'),
    (l = 'displayName') in (r = R)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a);
let P = new R(s.Z, {
    SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
        var t;
        let n,
            { searchId: i, tokens: r, cursorScope: l } = e,
            a = (0, h.cl)(r),
            o = (0, h.qc)(l, r),
            s = null !== (t = I[i]) && void 0 !== t ? t : {},
            c = x[i],
            u = !0;
        if (a === s.query && (null == s.mode || s.mode.filter === o.filter)) (n = s.autocompletes), (u = !1);
        else if (o.type === C.Sap.EMPTY || (o.type === C.Sap.FILTER && o.filter !== C.dCx.FILTER_FROM && o.filter !== C.dCx.FILTER_MENTIONS)) null != c && (c.context.clearQuery(), (c.results = [])), (n = A(i, o));
        else if (null != c) {
            let { token: e } = o;
            null != e && e.getFullMatch().trim().length > 0 ? (m.Z.requestMembers(i, e.getFullMatch().trim(), 10), c.context.setQuery(e.getFullMatch().trim(), { guild: i }), (n = s.autocompletes), (u = !1)) : (c.context.clearQuery(), (n = A(i, o)));
        }
        return (
            (I[i] = N({
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
            n = x[t];
        null != n && (n.context.destroy(), (n.results = []), delete x[t]), delete I[t];
    },
    CHANNEL_CREATE: b,
    CHANNEL_DELETE: b,
    STREAMER_MODE_UPDATE: Z,
    SEARCH_SCREEN_OPEN: Z,
    SEARCH_CLEAR_HISTORY: function (e) {
        let { searchId: t } = e;
        null != t ? j(t) : Object.keys(I).forEach(j);
    },
    LOGOUT: function () {
        Object.keys(I).forEach(j);
    }
});
t.Z = P;
