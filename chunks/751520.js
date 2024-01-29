"use strict";
n.r(t), n.d(t, {
  getSearchOptionAnswer: function() {
    return T
  },
  setIncludeNSFW: function() {
    return f
  },
  getSearchQueryFromTokens: function() {
    return d
  },
  getSelectionScope: function() {
    return R
  },
  getAutocompleteMode: function() {
    return S
  },
  getFlattenedStringArray: function() {
    return h
  },
  getTotalResults: function() {
    return p
  },
  getQueryFromTokens: function() {
    return A
  },
  tokenizeQuery: function() {
    return y
  },
  clearTokenCache: function() {
    return I
  },
  showDatePicker: function() {
    return N
  },
  filterHasAnswer: function() {
    return F
  },
  refreshSearchTokens: function() {
    return L
  }
}), n("222007"), n("808653");
var a = n("917351"),
  r = n.n(a),
  l = n("76385"),
  s = n("955513"),
  u = n("247013"),
  o = n("697218"),
  E = n("299039"),
  c = n("49111"),
  i = n("782340");

function T(e) {
  switch (e) {
    case c.SearchTokenTypes.FILTER_FROM:
      return i.default.Messages.SEARCH_ANSWER_FROM;
    case c.SearchTokenTypes.FILTER_MENTIONS:
      return i.default.Messages.SEARCH_ANSWER_MENTIONS;
    case c.SearchTokenTypes.FILTER_HAS:
      return i.default.Messages.SEARCH_ANSWER_HAS;
    case c.SearchTokenTypes.FILTER_BEFORE:
    case c.SearchTokenTypes.FILTER_ON:
    case c.SearchTokenTypes.FILTER_AFTER:
      return i.default.Messages.SEARCH_ANSWER_DATE;
    case c.SearchTokenTypes.FILTER_IN:
      return i.default.Messages.SEARCH_ANSWER_IN;
    case c.SearchTokenTypes.FILTER_FILE_TYPE:
      return i.default.Messages.SEARCH_ANSWER_FILE_TYPE;
    case c.SearchTokenTypes.FILTER_FILE_NAME:
      return i.default.Messages.SEARCH_ANSWER_FILE_NAME;
    case c.SearchTokenTypes.FILTER_PINNED:
      return i.default.Messages.SEARCH_ANSWER_BOOLEAN
  }
}
let _ = {
  [c.SearchTokenTypes.FILTER_BEFORE]: !0,
  [c.SearchTokenTypes.FILTER_AFTER]: !0,
  [c.SearchTokenTypes.FILTER_ON]: !0
};

function f(e, t) {
  if (u.default.didAgree(t)) {
    let t = o.default.getCurrentUser();
    null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed)
  }
}

function d(e) {
  let t = {};
  for (let [n, a] of(e.forEach(e => {
      let {
        type: n
      } = e;
      if (c.IS_SEARCH_FILTER_TOKEN.test(n)) return;
      switch (n) {
        case c.SearchTokenTypes.ANSWER_BEFORE:
        case c.SearchTokenTypes.ANSWER_ON:
        case c.SearchTokenTypes.ANSWER_AFTER:
          let a = e.getData("start"),
            r = e.getData("end");
          a && (t.min_id = E.default.fromTimestamp(a)), r && (t.max_id = E.default.fromTimestamp(r));
          return
      }
      let l = function(e) {
        let t = s.default[e],
          n = null != t ? t.queryKey : null;
        return null == n && (n = "content"), n
      }(n);
      null == t[l] && (t[l] = new Set);
      let u = t[l];
      switch (n) {
        case c.SearchTokenTypes.ANSWER_USERNAME_FROM:
        case c.SearchTokenTypes.ANSWER_USERNAME_MENTIONS:
          u.add(e.getData("userId"));
          break;
        case c.SearchTokenTypes.ANSWER_FILE_TYPE:
        case c.SearchTokenTypes.ANSWER_FILE_NAME:
          u.add(e.getMatch(1));
          break;
        case c.SearchTokenTypes.ANSWER_IN:
          u.add(e.getData("channel").id);
          break;
        case c.SearchTokenTypes.ANSWER_HAS:
          u.add(e.getData("has"));
          break;
        case c.SearchTokenTypes.ANSWER_PINNED:
          u.add(e.getData("pinned"));
          break;
        default:
          u.add(e.getFullMatch().trim())
      }
    }), Object.entries(t))) a instanceof Set && (t[n] = Array.from(a));
  return t.content && (t.content = t.content.join(" ").trim(), !t.content && delete t.content), t
}

function R(e, t, n) {
  let a, r;
  let l = e.find((l, s) => t >= l.start && t <= l.end && n >= l.start && n <= l.end ? (null != e[s + 1] && (r = e[s + 1]), !0) : (a = l, !1));
  return null == l ? null : {
    previousToken: a,
    currentToken: l,
    nextToken: r,
    focusOffset: t,
    anchorOffset: n
  }
}

function S(e, t) {
  let n;
  e = null != e ? e : {};
  let {
    currentToken: a,
    nextToken: r,
    previousToken: s
  } = e;
  if (0 === t.length) return {
    type: c.SearchPopoutModes.EMPTY,
    filter: null,
    token: null
  };
  if (null == a) return {
    type: c.SearchPopoutModes.FILTER_ALL,
    filter: null,
    token: null
  };
  if (c.IS_SEARCH_FILTER_TOKEN.test(a.type)) {
    if (null == r || r.type === l.default.NON_TOKEN_TYPE) return {
      type: c.SearchPopoutModes.FILTER,
      filter: a.type,
      token: r
    };
    if (null != r && !c.IS_SEARCH_ANSWER_TOKEN.test(r.type)) return {
      type: c.SearchPopoutModes.FILTER,
      filter: a.type,
      token: null
    }
  }
  return a.type === l.default.NON_TOKEN_TYPE && null != s && c.IS_SEARCH_FILTER_TOKEN.test(s.type) ? {
    type: c.SearchPopoutModes.FILTER,
    filter: s.type,
    token: a
  } : (a.type === l.default.NON_TOKEN_TYPE && (n = a), {
    type: c.SearchPopoutModes.FILTER_ALL,
    filter: null,
    token: n
  })
}

function h(e, t) {
  let n = [];
  return r(e).forEach(e => {
    if (null == e || 0 === e.results.length) return;
    let a = e.group;
    n = n.concat(e.results.map(e => {
      let n = e.text;
      if (t === c.SearchPopoutModes.FILTER_ALL) {
        var r;
        a = null !== (r = e.group) && void 0 !== r ? r : a;
        let t = s.default[a];
        (null == t ? void 0 : t.key) != null && (null == t ? void 0 : t.key) !== "" && (n = "".concat(t.key, " ").concat(n))
      }
      return n
    }))
  }), n.filter(e => e)
}

function p(e) {
  return e.reduce((e, t) => null == t ? e : t.results.length + e, 0)
}

function A(e) {
  return null == e ? "" : e.map(e => e.getFullMatch()).join("")
}
let g = new l.default;

function y(e) {
  return g.tokenize(e)
}

function I() {
  return g.clearCache()
}

function N(e) {
  return null != e ? _[e] : null
}

function F(e, t) {
  let n = c.IS_SEARCH_FILTER_TOKEN.test(e.type);
  return (null != t || !n) && (null == t || !n || !!c.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
}

function L() {
  (0, s.refreshSearchTokens)(), g.reset(), r(s.default).forOwn((e, t) => g.addRule({
    type: t,
    ...e
  }))
}