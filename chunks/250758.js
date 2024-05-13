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
  g = n("768119"),
  S = n("246946"),
  N = n("594174"),
  _ = n("981631");
let T = {},
  I = {};

function C(e) {
  let {
    searchId: t,
    query: n,
    mode: a,
    tokens: l,
    cursorScope: s,
    autocompletes: i
  } = e, r = I[t];
  return null == r && (r = {
    results: [],
    context: d.default.getSearchContext(A.bind(null, t))
  }, I[t] = r), {
    query: null != n ? n : "",
    mode: null != a ? a : {
      type: _.SearchPopoutModes.EMPTY,
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
  } = t, a = I[e], l = T[e];
  if (null == a || null == l) return;
  let {
    type: s,
    filter: i
  } = l.mode;
  if (s === _.SearchPopoutModes.EMPTY || s === _.SearchPopoutModes.FILTER && i !== _.SearchTokenTypes.FILTER_FROM && i !== _.SearchTokenTypes.FILTER_MENTIONS) return;
  let r = 3;
  l.mode.type === _.SearchPopoutModes.FILTER && (r = 10), a.results = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
    return (e = e.reduce((e, t) => {
      let n = N.default.getUser(t.id);
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
  f = R(e, u), T[e] = C({
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
  if (g.default.getSearchType(n) === _.SearchTypes.GUILD && (e === _.SearchTokenTypes.FILTER_FROM || e === _.SearchTokenTypes.FILTER_MENTIONS)) {
    let e = I[n];
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

function M(e) {
  let t = (null != e ? e.getFullMatch() : "").trim(),
    n = function() {
      let e = (0, c.isInMainTabsExperiment)() && !1;
      return {
        [_.SearchTokenTypes.FILTER_FROM]: !S.default.hidePersonalInformation,
        [_.SearchTokenTypes.FILTER_MENTIONS]: !S.default.hidePersonalInformation,
        [_.SearchTokenTypes.FILTER_HAS]: !0,
        [_.SearchTokenTypes.FILTER_BEFORE]: !0,
        [_.SearchTokenTypes.FILTER_AFTER]: !0,
        [_.SearchTokenTypes.FILTER_ON]: !0,
        [_.SearchTokenTypes.FILTER_IN]: g.default.getSearchType() === _.SearchTypes.GUILD,
        [_.SearchTokenTypes.FILTER_PINNED]: !e
      }
    }(),
    a = (0, u.getFilterAutocompletions)(t).filter(e => n[e.token]);
  return {
    group: _.SearchAutocompleteGroups.SEARCH_OPTIONS,
    results: a
  }
}

function R(e, t) {
  let n = [];
  return t.type === _.SearchPopoutModes.FILTER ? n.push(v(t.filter, t.token, e, 10)) : t.type === _.SearchPopoutModes.FILTER_ALL ? n = function(e, t) {
    let n = (null != e ? e.getFullMatch() : "").trim(),
      a = [];
    return null != n && "" !== n && ((function(e) {
      let t = g.default.getSearchType(e),
        n = [_.SearchTokenTypes.FILTER_HAS];
      return !S.default.hidePersonalInformation && (n.push(_.SearchTokenTypes.FILTER_FROM), n.push(_.SearchTokenTypes.FILTER_MENTIONS)), t === _.SearchTypes.GUILD && n.push(_.SearchTokenTypes.FILTER_IN), n
    })(t).forEach(n => {
      if (null == n) return;
      let l = v(n, e, t, 3);
      null != l && a.push(l)
    }), a.push(function(e, t) {
      let n = (null != e ? e.getFullMatch() : "").trim();
      if (null != n && "" !== n) {
        var a, l, s;
        let e = null === (a = u.default[_.SearchTokenTypes.FILTER_BEFORE]) || void 0 === a ? void 0 : a.getAutocompletions(n, t, 1)[0],
          i = null === (l = u.default[_.SearchTokenTypes.FILTER_ON]) || void 0 === l ? void 0 : l.getAutocompletions(n, t, 1)[0],
          r = null === (s = u.default[_.SearchTokenTypes.FILTER_AFTER]) || void 0 === s ? void 0 : s.getAutocompletions(n, t, 1)[0];
        return null == e ? null : {
          group: _.SearchAutocompleteGroups.DATES,
          results: [e, i, r]
        }
      }
    }(e, t))), 5 > (0, E.getTotalResults)(a) && a.push(M(e)), a
  }(t.token, e) : t.type === _.SearchPopoutModes.EMPTY && (n.push(M(t.token)), (0, c.isInMainTabsExperiment)(), n.push(function(e) {
    if (S.default.hidePersonalInformation) return null;
    let t = g.default.getHistory(e);
    return null == t ? null : {
      group: _.SearchAutocompleteGroups.HISTORY,
      results: t.map(e => ({
        text: e
      }))
    }
  }(e))), n
}

function x() {
  (0, E.clearTokenCache)()
}

function L(e) {
  let t = T[e];
  if (null == t) return;
  let {
    query: n,
    mode: a,
    tokens: l,
    cursorScope: s,
    autocompletes: i
  } = t;
  T[e] = C({
    searchId: e,
    query: n,
    mode: a,
    tokens: l,
    cursorScope: s,
    autocompletes: i.map(e => (null == e ? void 0 : e.group) === _.SearchAutocompleteGroups.HISTORY ? null : e)
  })
}

function O() {
  let e = g.default.getCurrentSearchId();
  if (null == e || null == T[e]) return;
  let {
    query: t,
    mode: n,
    tokens: a,
    cursorScope: l
  } = T[e];
  T[e] = C({
    searchId: e,
    query: t,
    mode: n,
    tokens: a,
    cursorScope: l,
    autocompletes: R(e, n)
  })
}
class b extends(a = r.default.Store) {
  initialize() {
    this.waitFor(p.default, S.default)
  }
  getState(e) {
    var t;
    return null !== (t = T[e]) && void 0 !== t ? t : C({
      searchId: e
    })
  }
}
i = "SearchAutocompleteStore", (s = "displayName") in(l = b) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i;
let y = new b(o.default, {
  SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function(e) {
    var t;
    let n, {
        searchId: a,
        tokens: l,
        cursorScope: s
      } = e,
      i = (0, E.getQueryFromTokens)(l),
      r = (0, E.getAutocompleteMode)(s, l),
      o = null !== (t = T[a]) && void 0 !== t ? t : {},
      u = I[a],
      d = !0;
    if (i === o.query && (null == o.mode || o.mode.filter === r.filter)) n = o.autocompletes, d = !1;
    else if (r.type === _.SearchPopoutModes.EMPTY || r.type === _.SearchPopoutModes.FILTER && r.filter !== _.SearchTokenTypes.FILTER_FROM && r.filter !== _.SearchTokenTypes.FILTER_MENTIONS) null != u && (u.context.clearQuery(), u.results = []), n = R(a, r);
    else if (null != u) {
      let {
        token: e
      } = r;
      null != e && e.getFullMatch().trim().length > 0 ? (h.default.requestMembers(a, e.getFullMatch().trim(), 10), u.context.setQuery(e.getFullMatch().trim(), {
        guild: a
      }), n = o.autocompletes, d = !1) : (u.context.clearQuery(), n = R(a, r))
    }
    return T[a] = C({
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
    } = e, n = I[t];
    null != n && (n.context.destroy(), n.results = [], delete I[t]), delete T[t]
  },
  CHANNEL_CREATE: x,
  CHANNEL_DELETE: x,
  STREAMER_MODE_UPDATE: O,
  SEARCH_MODAL_OPEN: O,
  SEARCH_SCREEN_OPEN: O,
  SEARCH_CLEAR_HISTORY: function(e) {
    let {
      searchId: t
    } = e;
    null != t ? L(t) : Object.keys(T).forEach(L)
  },
  LOGOUT: function() {
    Object.keys(T).forEach(L)
  }
});
t.default = y