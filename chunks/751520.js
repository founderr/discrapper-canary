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
    return N
  },
  clearTokenCache: function() {
    return g
  },
  showDatePicker: function() {
    return y
  },
  filterHasAnswer: function() {
    return M
  },
  refreshSearchTokens: function() {
    return F
  }
}), n("222007"), n("808653");
var a = n("917351"),
  r = n.n(a),
  s = n("76385"),
  l = n("955513"),
  u = n("247013"),
  o = n("697218"),
  E = n("299039"),
  i = n("49111"),
  c = n("782340");

function T(e) {
  switch (e) {
    case i.SearchTokenTypes.FILTER_FROM:
      return c.default.Messages.SEARCH_ANSWER_FROM;
    case i.SearchTokenTypes.FILTER_MENTIONS:
      return c.default.Messages.SEARCH_ANSWER_MENTIONS;
    case i.SearchTokenTypes.FILTER_HAS:
      return c.default.Messages.SEARCH_ANSWER_HAS;
    case i.SearchTokenTypes.FILTER_BEFORE:
    case i.SearchTokenTypes.FILTER_ON:
    case i.SearchTokenTypes.FILTER_AFTER:
      return c.default.Messages.SEARCH_ANSWER_DATE;
    case i.SearchTokenTypes.FILTER_IN:
      return c.default.Messages.SEARCH_ANSWER_IN;
    case i.SearchTokenTypes.FILTER_FILE_TYPE:
      return c.default.Messages.SEARCH_ANSWER_FILE_TYPE;
    case i.SearchTokenTypes.FILTER_FILE_NAME:
      return c.default.Messages.SEARCH_ANSWER_FILE_NAME;
    case i.SearchTokenTypes.FILTER_PINNED:
      return c.default.Messages.SEARCH_ANSWER_BOOLEAN
  }
}
let _ = {
  [i.SearchTokenTypes.FILTER_BEFORE]: !0,
  [i.SearchTokenTypes.FILTER_AFTER]: !0,
  [i.SearchTokenTypes.FILTER_ON]: !0
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
      if (i.IS_SEARCH_FILTER_TOKEN.test(n)) return;
      switch (n) {
        case i.SearchTokenTypes.ANSWER_BEFORE:
        case i.SearchTokenTypes.ANSWER_ON:
        case i.SearchTokenTypes.ANSWER_AFTER:
          let a = e.getData("start"),
            r = e.getData("end");
          a && (t.min_id = E.default.fromTimestamp(a)), r && (t.max_id = E.default.fromTimestamp(r));
          return
      }
      let s = function(e) {
        let t = l.default[e],
          n = null != t ? t.queryKey : null;
        return null == n && (n = "content"), n
      }(n);
      null == t[s] && (t[s] = new Set);
      let u = t[s];
      switch (n) {
        case i.SearchTokenTypes.ANSWER_USERNAME_FROM:
        case i.SearchTokenTypes.ANSWER_USERNAME_MENTIONS:
          u.add(e.getData("userId"));
          break;
        case i.SearchTokenTypes.ANSWER_FILE_TYPE:
        case i.SearchTokenTypes.ANSWER_FILE_NAME:
          u.add(e.getMatch(1));
          break;
        case i.SearchTokenTypes.ANSWER_IN:
          u.add(e.getData("channel").id);
          break;
        case i.SearchTokenTypes.ANSWER_HAS:
          u.add(e.getData("has"));
          break;
        case i.SearchTokenTypes.ANSWER_PINNED:
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
  let s = e.find((s, l) => t >= s.start && t <= s.end && n >= s.start && n <= s.end ? (null != e[l + 1] && (r = e[l + 1]), !0) : (a = s, !1));
  return null == s ? null : {
    previousToken: a,
    currentToken: s,
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
    previousToken: l
  } = e;
  if (0 === t.length) return {
    type: i.SearchPopoutModes.EMPTY,
    filter: null,
    token: null
  };
  if (null == a) return {
    type: i.SearchPopoutModes.FILTER_ALL,
    filter: null,
    token: null
  };
  if (i.IS_SEARCH_FILTER_TOKEN.test(a.type)) {
    if (null == r || r.type === s.default.NON_TOKEN_TYPE) return {
      type: i.SearchPopoutModes.FILTER,
      filter: a.type,
      token: r
    };
    if (null != r && !i.IS_SEARCH_ANSWER_TOKEN.test(r.type)) return {
      type: i.SearchPopoutModes.FILTER,
      filter: a.type,
      token: null
    }
  }
  return a.type === s.default.NON_TOKEN_TYPE && null != l && i.IS_SEARCH_FILTER_TOKEN.test(l.type) ? {
    type: i.SearchPopoutModes.FILTER,
    filter: l.type,
    token: a
  } : (a.type === s.default.NON_TOKEN_TYPE && (n = a), {
    type: i.SearchPopoutModes.FILTER_ALL,
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
      if (t === i.SearchPopoutModes.FILTER_ALL) {
        var r;
        a = null !== (r = e.group) && void 0 !== r ? r : a;
        let t = l.default[a];
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
let I = new s.default;

function N(e) {
  return I.tokenize(e)
}

function g() {
  return I.clearCache()
}

function y(e) {
  return null != e ? _[e] : null
}

function M(e, t) {
  let n = i.IS_SEARCH_FILTER_TOKEN.test(e.type);
  return (null != t || !n) && (null == t || !n || !!i.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
}

function F() {
  (0, l.refreshSearchTokens)(), I.reset(), r(l.default).forOwn((e, t) => I.addRule({
    type: t,
    ...e
  }))
}