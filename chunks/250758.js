"use strict";
n.r(t), n("653041"), n("724458");
var a, l, s, i, r = n("442837"),
  o = n("570140"),
  u = n("999650"),
  d = n("279779"),
  c = n("57132"),
  f = n("483360"),
  h = n("892880"),
  E = n("405656"),
  m = n("51144"),
  p = n("271383"),
  S = n("768119"),
  g = n("246946"),
  _ = n("594174"),
  N = n("981631");
let I = {},
  T = {};

function C(e) {
  let {
    searchId: t,
    query: n,
    mode: a,
    tokens: l,
    cursorScope: s,
    autocompletes: i
  } = e, r = T[t];
  return null == r && (r = {
    results: [],
    context: d.default.getSearchContext(A.bind(null, t))
  }, T[t] = r), {
    query: null != n ? n : "",
    mode: null != a ? a : {
      type: N.SearchPopoutModes.EMPTY,
      filter: null,
      token: null
    },
    tokens: null != l ? l : [],
    cursorScope: null != s ? s : null,
    autocompletes: null != i ? i : []
  }
}

function A(e, t) {
  let {
    results: n
  } = t, a = T[e], l = I[e];
  if (null == a || null == l) return;
  let {
    type: s,
    filter: i
  } = l.mode;
  if (s === N.SearchPopoutModes.EMPTY || s === N.SearchPopoutModes.FILTER && i !== N.SearchTokenTypes.FILTER_FROM && i !== N.SearchTokenTypes.FILTER_MENTIONS) return;
  let r = 3;
  l.mode.type === N.SearchPopoutModes.FILTER && (r = 10), a.results = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
    return (e = e.reduce((e, t) => {
      let n = _.default.getUser(t.id);
      return null == n ? e : (e.push({
        id: n.id,
        text: m.default.getUserTag(n),
        user: n
      }), e)
    }, [])).length > t && (e.length = t), e
  }(n, r);
  let {
    query: o,
    mode: u,
    tokens: d,
    cursorScope: c
  } = l, {
    autocompletes: f
  } = l;
  f = x(e, u), I[e] = C({
    searchId: e,
    query: o,
    mode: u,
    tokens: d,
    cursorScope: c,
    autocompletes: f
  }), y.emitChange()
}

function v(e, t, n) {
  let a, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
  if (null == e || "" === e) return null;
  if (S.default.getSearchType(n) === N.SearchTypes.GUILD && (e === N.SearchTokenTypes.FILTER_FROM || e === N.SearchTokenTypes.FILTER_MENTIONS)) {
    let e = T[n];
    null == e ? a = null : ((null == t || 0 === t.getFullMatch().trim().length) && (e.results = f.default.getRecentlyTalked(n, 10).map(e => {
      let {
        record: t
      } = e;
      return {
        user: t,
        text: m.default.getUserTag(t)
      }
    })), a = e.results)
  } else {
    var s;
    let i = null === (s = u.default[e]) || void 0 === s ? void 0 : s.getAutocompletions,
      r = (null != t ? t.getFullMatch() : "").trim();
    a = null != i ? i(r, n, null != l ? l : 10) : []
  }
  return null == a || 0 === a.length ? null : {
    group: e,
    results: a
  }
}

function R(e) {
  let t = (null != e ? e.getFullMatch() : "").trim(),
    n = function() {
      let e = (0, c.isInMainTabsExperiment)() && !1;
      return {
        [N.SearchTokenTypes.FILTER_FROM]: !g.default.hidePersonalInformation,
        [N.SearchTokenTypes.FILTER_MENTIONS]: !g.default.hidePersonalInformation,
        [N.SearchTokenTypes.FILTER_HAS]: !0,
        [N.SearchTokenTypes.FILTER_BEFORE]: !0,
        [N.SearchTokenTypes.FILTER_AFTER]: !0,
        [N.SearchTokenTypes.FILTER_ON]: !0,
        [N.SearchTokenTypes.FILTER_IN]: S.default.getSearchType() === N.SearchTypes.GUILD,
        [N.SearchTokenTypes.FILTER_PINNED]: !e
      }
    }(),
    a = (0, u.getFilterAutocompletions)(t).filter(e => n[e.token]);
  return {
    group: N.SearchAutocompleteGroups.SEARCH_OPTIONS,
    results: a
  }
}

function x(e, t) {
  let n = [];
  return t.type === N.SearchPopoutModes.FILTER ? n.push(v(t.filter, t.token, e, 10)) : t.type === N.SearchPopoutModes.FILTER_ALL ? n = function(e, t) {
    let n = (null != e ? e.getFullMatch() : "").trim(),
      a = [];
    return null != n && "" !== n && ((function(e) {
      let t = S.default.getSearchType(e),
        n = [N.SearchTokenTypes.FILTER_HAS];
      return !g.default.hidePersonalInformation && (n.push(N.SearchTokenTypes.FILTER_FROM), n.push(N.SearchTokenTypes.FILTER_MENTIONS)), t === N.SearchTypes.GUILD && n.push(N.SearchTokenTypes.FILTER_IN), n
    })(t).forEach(n => {
      if (null == n) return;
      let l = v(n, e, t, 3);
      null != l && a.push(l)
    }), a.push(function(e, t) {
      let n = (null != e ? e.getFullMatch() : "").trim();
      if (null != n && "" !== n) {
        var a, l, s;
        let e = null === (a = u.default[N.SearchTokenTypes.FILTER_BEFORE]) || void 0 === a ? void 0 : a.getAutocompletions(n, t, 1)[0],
          i = null === (l = u.default[N.SearchTokenTypes.FILTER_ON]) || void 0 === l ? void 0 : l.getAutocompletions(n, t, 1)[0],
          r = null === (s = u.default[N.SearchTokenTypes.FILTER_AFTER]) || void 0 === s ? void 0 : s.getAutocompletions(n, t, 1)[0];
        return null == e ? null : {
          group: N.SearchAutocompleteGroups.DATES,
          results: [e, i, r]
        }
      }
    }(e, t))), 5 > (0, E.getTotalResults)(a) && a.push(R(e)), a
  }(t.token, e) : t.type === N.SearchPopoutModes.EMPTY && (n.push(R(t.token)), (0, c.isInMainTabsExperiment)(), n.push(function(e) {
    if (g.default.hidePersonalInformation) return null;
    let t = S.default.getHistory(e);
    return null == t ? null : {
      group: N.SearchAutocompleteGroups.HISTORY,
      results: t.map(e => ({
        text: e
      }))
    }
  }(e))), n
}

function M() {
  (0, E.clearTokenCache)()
}

function L(e) {
  let t = I[e];
  if (null == t) return;
  let {
    query: n,
    mode: a,
    tokens: l,
    cursorScope: s,
    autocompletes: i
  } = t;
  I[e] = C({
    searchId: e,
    query: n,
    mode: a,
    tokens: l,
    cursorScope: s,
    autocompletes: i.map(e => (null == e ? void 0 : e.group) === N.SearchAutocompleteGroups.HISTORY ? null : e)
  })
}

function b() {
  let e = S.default.getCurrentSearchId();
  if (null == e || null == I[e]) return;
  let {
    query: t,
    mode: n,
    tokens: a,
    cursorScope: l
  } = I[e];
  I[e] = C({
    searchId: e,
    query: t,
    mode: n,
    tokens: a,
    cursorScope: l,
    autocompletes: x(e, n)
  })
}
class O extends(a = r.default.Store) {
  initialize() {
    this.waitFor(p.default, g.default)
  }
  getState(e) {
    var t;
    return null !== (t = I[e]) && void 0 !== t ? t : C({
      searchId: e
    })
  }
}
i = "SearchAutocompleteStore", (s = "displayName") in(l = O) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i;
let y = new O(o.default, {
  SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function(e) {
    var t;
    let n, {
        searchId: a,
        tokens: l,
        cursorScope: s
      } = e,
      i = (0, E.getQueryFromTokens)(l),
      r = (0, E.getAutocompleteMode)(s, l),
      o = null !== (t = I[a]) && void 0 !== t ? t : {},
      u = T[a],
      d = !0;
    if (i === o.query && (null == o.mode || o.mode.filter === r.filter)) n = o.autocompletes, d = !1;
    else if (r.type === N.SearchPopoutModes.EMPTY || r.type === N.SearchPopoutModes.FILTER && r.filter !== N.SearchTokenTypes.FILTER_FROM && r.filter !== N.SearchTokenTypes.FILTER_MENTIONS) null != u && (u.context.clearQuery(), u.results = []), n = x(a, r);
    else if (null != u) {
      let {
        token: e
      } = r;
      null != e && e.getFullMatch().trim().length > 0 ? (h.default.requestMembers(a, e.getFullMatch().trim(), 10), u.context.setQuery(e.getFullMatch().trim(), {
        guild: a
      }), n = o.autocompletes, d = !1) : (u.context.clearQuery(), n = x(a, r))
    }
    return I[a] = C({
      searchId: a,
      query: i,
      mode: r,
      tokens: l,
      cursorScope: s,
      autocompletes: n
    }), d
  },
  SEARCH_EDITOR_STATE_CLEAR: function(e) {
    let {
      searchId: t
    } = e, n = T[t];
    null != n && (n.context.destroy(), n.results = [], delete T[t]), delete I[t]
  },
  CHANNEL_CREATE: M,
  CHANNEL_DELETE: M,
  STREAMER_MODE_UPDATE: b,
  SEARCH_MODAL_OPEN: b,
  SEARCH_SCREEN_OPEN: b,
  SEARCH_CLEAR_HISTORY: function(e) {
    let {
      searchId: t
    } = e;
    null != t ? L(t) : Object.keys(I).forEach(L)
  },
  LOGOUT: function() {
    Object.keys(I).forEach(L)
  }
});
t.default = y