n(653041), n(724458);
var s, i, l, a, r = n(442837),
  o = n(570140),
  c = n(999650),
  u = n(279779),
  d = n(57132),
  E = n(483360),
  _ = n(892880),
  I = n(405656),
  T = n(51144),
  m = n(271383),
  N = n(768119),
  h = n(246946),
  C = n(594174),
  S = n(981631);
let A = {},
  g = {};

function p(e) {
  let {
    searchId: t,
    query: n,
    mode: s,
    tokens: i,
    cursorScope: l,
    autocompletes: a
  } = e, r = g[t];
  return null == r && (r = {
    results: [],
    context: u.Z.getSearchContext(f.bind(null, t))
  }, g[t] = r), {
    query: null != n ? n : "",
    mode: null != s ? s : {
      type: S.Sap.EMPTY,
      filter: null,
      token: null
    },
    tokens: null != i ? i : [],
    cursorScope: null != l ? l : null,
    autocompletes: null != a ? a : []
  }
}

function f(e, t) {
  let {
    results: n
  } = t, s = g[e], i = A[e];
  if (null == s || null == i) return;
  let {
    type: l,
    filter: a
  } = i.mode;
  if (l === S.Sap.EMPTY || l === S.Sap.FILTER && a !== S.dCx.FILTER_FROM && a !== S.dCx.FILTER_MENTIONS) return;
  let r = 3;
  i.mode.type === S.Sap.FILTER && (r = 10), s.results = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
    return (e = e.reduce((e, t) => {
      let n = C.default.getUser(t.id);
      return null == n ? e : (e.push({
        id: n.id,
        text: T.ZP.getUserTag(n),
        user: n
      }), e)
    }, [])).length > t && (e.length = t), e
  }(n, r);
  let {
    query: o,
    mode: c,
    tokens: u,
    cursorScope: d
  } = i, {
    autocompletes: E
  } = i;
  E = M(e, c), A[e] = p({
    searchId: e,
    query: o,
    mode: c,
    tokens: u,
    cursorScope: d,
    autocompletes: E
  }), P.emitChange()
}

function R(e, t, n) {
  let s, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
  if (null == e || "" === e) return null;
  if (N.Z.getSearchType(n) === S.aib.GUILD && (e === S.dCx.FILTER_FROM || e === S.dCx.FILTER_MENTIONS)) {
    let e = g[n];
    null == e ? s = null : ((null == t || 0 === t.getFullMatch().trim().length) && (e.results = E.ZP.getRecentlyTalked(n, 10).map(e => {
      let {
        record: t
      } = e;
      return {
        user: t,
        text: T.ZP.getUserTag(t)
      }
    })), s = e.results)
  } else {
    var l;
    let a = null === (l = c.ZP[e]) || void 0 === l ? void 0 : l.getAutocompletions,
      r = (null != t ? t.getFullMatch() : "").trim();
    s = null != a ? a(r, n, null != i ? i : 10) : []
  }
  return null == s || 0 === s.length ? null : {
    group: e,
    results: s
  }
}

function O(e) {
  let t = (null != e ? e.getFullMatch() : "").trim(),
    n = function() {
      let e = (0, d.cn)() && !1;
      return {
        [S.dCx.FILTER_FROM]: !h.Z.hidePersonalInformation,
        [S.dCx.FILTER_MENTIONS]: !h.Z.hidePersonalInformation,
        [S.dCx.FILTER_HAS]: !0,
        [S.dCx.FILTER_BEFORE]: !0,
        [S.dCx.FILTER_AFTER]: !0,
        [S.dCx.FILTER_ON]: !0,
        [S.dCx.FILTER_IN]: N.Z.getSearchType() === S.aib.GUILD,
        [S.dCx.FILTER_PINNED]: !e
      }
    }(),
    s = (0, c.nB)(t).filter(e => n[e.token]);
  return {
    group: S.rtL.SEARCH_OPTIONS,
    results: s
  }
}

function M(e, t) {
  let n = [];
  return t.type === S.Sap.FILTER ? n.push(R(t.filter, t.token, e, 10)) : t.type === S.Sap.FILTER_ALL ? n = function(e, t) {
    let n = (null != e ? e.getFullMatch() : "").trim(),
      s = [];
    return null != n && "" !== n && ((function(e) {
      let t = N.Z.getSearchType(e),
        n = [S.dCx.FILTER_HAS];
      return !h.Z.hidePersonalInformation && (n.push(S.dCx.FILTER_FROM), n.push(S.dCx.FILTER_MENTIONS)), t === S.aib.GUILD && n.push(S.dCx.FILTER_IN), n
    })(t).forEach(n => {
      if (null == n) return;
      let i = R(n, e, t, 3);
      null != i && s.push(i)
    }), s.push(function(e, t) {
      let n = (null != e ? e.getFullMatch() : "").trim();
      if (null != n && "" !== n) {
        var s, i, l;
        let e = null === (s = c.ZP[S.dCx.FILTER_BEFORE]) || void 0 === s ? void 0 : s.getAutocompletions(n, t, 1)[0],
          a = null === (i = c.ZP[S.dCx.FILTER_ON]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0],
          r = null === (l = c.ZP[S.dCx.FILTER_AFTER]) || void 0 === l ? void 0 : l.getAutocompletions(n, t, 1)[0];
        return null == e ? null : {
          group: S.rtL.DATES,
          results: [e, a, r]
        }
      }
    }(e, t))), 5 > (0, I.BU)(s) && s.push(O(e)), s
  }(t.token, e) : t.type === S.Sap.EMPTY && (n.push(O(t.token)), (0, d.cn)(), n.push(function(e) {
    if (h.Z.hidePersonalInformation) return null;
    let t = N.Z.getHistory(e);
    return null == t ? null : {
      group: S.rtL.HISTORY,
      results: t.map(e => ({
        text: e
      }))
    }
  }(e))), n
}

function x() {
  (0, I.WU)()
}

function v(e) {
  let t = A[e];
  if (null == t) return;
  let {
    query: n,
    mode: s,
    tokens: i,
    cursorScope: l,
    autocompletes: a
  } = t;
  A[e] = p({
    searchId: e,
    query: n,
    mode: s,
    tokens: i,
    cursorScope: l,
    autocompletes: a.map(e => (null == e ? void 0 : e.group) === S.rtL.HISTORY ? null : e)
  })
}

function L() {
  let e = N.Z.getCurrentSearchId();
  if (null == e || null == A[e]) return;
  let {
    query: t,
    mode: n,
    tokens: s,
    cursorScope: i
  } = A[e];
  A[e] = p({
    searchId: e,
    query: t,
    mode: n,
    tokens: s,
    cursorScope: i,
    autocompletes: M(e, n)
  })
}
class Z extends(s = r.ZP.Store) {
  initialize() {
    this.waitFor(m.ZP, h.Z)
  }
  getState(e) {
    var t;
    return null !== (t = A[e]) && void 0 !== t ? t : p({
      searchId: e
    })
  }
}
a = "SearchAutocompleteStore", (l = "displayName") in(i = Z) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a;
let P = new Z(o.Z, {
  SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function(e) {
    var t;
    let n, {
        searchId: s,
        tokens: i,
        cursorScope: l
      } = e,
      a = (0, I.cl)(i),
      r = (0, I.qc)(l, i),
      o = null !== (t = A[s]) && void 0 !== t ? t : {},
      c = g[s],
      u = !0;
    if (a === o.query && (null == o.mode || o.mode.filter === r.filter)) n = o.autocompletes, u = !1;
    else if (r.type === S.Sap.EMPTY || r.type === S.Sap.FILTER && r.filter !== S.dCx.FILTER_FROM && r.filter !== S.dCx.FILTER_MENTIONS) null != c && (c.context.clearQuery(), c.results = []), n = M(s, r);
    else if (null != c) {
      let {
        token: e
      } = r;
      null != e && e.getFullMatch().trim().length > 0 ? (_.Z.requestMembers(s, e.getFullMatch().trim(), 10), c.context.setQuery(e.getFullMatch().trim(), {
        guild: s
      }), n = o.autocompletes, u = !1) : (c.context.clearQuery(), n = M(s, r))
    }
    return A[s] = p({
      searchId: s,
      query: a,
      mode: r,
      tokens: i,
      cursorScope: l,
      autocompletes: n
    }), u
  },
  SEARCH_EDITOR_STATE_CLEAR: function(e) {
    let {
      searchId: t
    } = e, n = g[t];
    null != n && (n.context.destroy(), n.results = [], delete g[t]), delete A[t]
  },
  CHANNEL_CREATE: x,
  CHANNEL_DELETE: x,
  STREAMER_MODE_UPDATE: L,
  SEARCH_MODAL_OPEN: L,
  SEARCH_SCREEN_OPEN: L,
  SEARCH_CLEAR_HISTORY: function(e) {
    let {
      searchId: t
    } = e;
    null != t ? v(t) : Object.keys(A).forEach(v)
  },
  LOGOUT: function() {
    Object.keys(A).forEach(v)
  }
});
t.Z = P