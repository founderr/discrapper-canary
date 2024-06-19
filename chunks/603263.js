n.d(t, {
  Nz: function() {
    return u
  },
  QQ: function() {
    return N
  },
  QY: function() {
    return S
  },
  Vj: function() {
    return c
  },
  j8: function() {
    return m
  },
  jn: function() {
    return E
  },
  m$: function() {
    return d
  },
  oO: function() {
    return _
  },
  qt: function() {
    return h
  },
  u$: function() {
    return C
  },
  yC: function() {
    return o
  }
}), n(724458);
var s = n(570140),
  i = n(367907),
  l = n(768119),
  a = n(405656),
  r = n(981631);

function o(e, t, n, o) {
  (0, a.jW)(t, e), o && (t.search_everywhere = !0);
  let c = Object.keys(t);
  i.ZP.trackWithMetadata(r.rMx.SEARCH_STARTED, {
    search_type: l.Z.getSearchType(),
    prev_search_id: l.Z.getAnalyticsId(e),
    num_modifiers: c.length,
    modifiers: c.reduce((e, n) => {
      let s = t[n];
      return e[n] = Array.isArray(s) ? s.length : 1, e
    }, {})
  }), s.Z.dispatch({
    type: "SEARCH_START",
    query: t,
    searchId: e,
    queryString: n,
    searchEverywhere: o
  })
}

function c(e) {
  return "relevance" === e.sort_by ? r.QIO.MOST_RELEVANT : "asc" === e.sort_order ? r.QIO.OLDEST : r.QIO.NEWEST
}

function u(e, t) {
  let n = l.Z.getQuery(e),
    s = function(e) {
      switch (e) {
        case r.QIO.MOST_RELEVANT:
          return {
            sort_by: "relevance", sort_order: "desc"
          };
        case r.QIO.OLDEST:
          return {
            sort_by: "timestamp", sort_order: "asc"
          };
        case r.QIO.NEWEST:
        default:
          return {
            sort_by: "timestamp", sort_order: "desc"
          }
      }
    }(t);
  return o(e, {
    ...n,
    ...s,
    offset: 0
  })
}

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.vpv;
  return I(e, t)
}

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.vpv;
  return I(e, -t)
}

function _(e, t) {
  return T(e, t * r.vpv)
}

function I(e, t) {
  let n = l.Z.getOffset(e);
  return T(e, n + t)
}

function T(e, t) {
  let n = l.Z.getQuery(e),
    s = l.Z.getTotalResults(e);
  if (!(t < 0) && !(t > s)) return o(e, {
    ...n,
    offset: t
  })
}

function N(e) {
  s.Z.dispatch({
    type: "SEARCH_CLEAR_HISTORY",
    searchId: e
  })
}

function m(e, t) {
  null != e && s.Z.dispatch({
    type: "SEARCH_EDITOR_STATE_CHANGE",
    searchId: e,
    editorState: t
  })
}

function h(e) {
  i.ZP.trackWithMetadata(r.rMx.SEARCH_CLOSED, {
    search_id: l.Z.getAnalyticsId(e)
  }), s.Z.wait(() => s.Z.dispatch({
    type: "SEARCH_EDITOR_STATE_CLEAR",
    searchId: e
  }))
}

function C(e, t, n) {
  null != e && s.Z.dispatch({
    type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
    searchId: e,
    tokens: t,
    cursorScope: n
  })
}

function S(e, t) {
  s.Z.dispatch({
    type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
    searchId: e,
    showBlocked: t
  })
}