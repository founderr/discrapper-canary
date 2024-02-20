"use strict";
n.r(t), n.d(t, {
  matchSorter: function() {
    return c
  }
}), n("222007"), n("808653"), n("424973");
var r = n("261438"),
  a = n("433165"),
  o = n.n(a),
  i = {
    CASE_SENSITIVE_EQUAL: 7,
    EQUAL: 6,
    STARTS_WITH: 5,
    WORD_STARTS_WITH: 4,
    CONTAINS: 3,
    ACRONYM: 2,
    MATCHES: 1,
    NO_MATCH: 0
  };
c.rankings = i;
var s = function(e, t) {
  return String(e.rankedValue).localeCompare(String(t.rankedValue))
};

function c(e, t, n) {
  void 0 === n && (n = {});
  var a = n,
    o = a.keys,
    c = a.threshold,
    u = void 0 === c ? i.MATCHES : c,
    p = a.baseSort,
    f = void 0 === p ? s : p,
    h = a.sorter;
  return (void 0 === h ? function(e) {
    return e.sort(function(e, t) {
      return function(e, t, n) {
        var r = e.rank,
          a = e.keyIndex,
          o = t.rank,
          i = t.keyIndex;
        return r !== o ? r > o ? -1 : 1 : a === i ? n(e, t) : a < i ? -1 : 1
      }(e, t, f)
    })
  } : h)(e.reduce(function(e, a, s) {
    var c = function(e, t, n, a) {
        return t ? (function(e, t) {
          for (var n = [], a = 0, o = t.length; a < o; a++) {
            for (var i = t[a], s = function(e) {
                return "string" == typeof e ? d : (0, r.default)({}, d, e)
              }(i), c = function(e, t) {
                var n;
                if ("object" == typeof t && (t = t.key), "function" == typeof t) n = t(e);
                else if (null == e) n = null;
                else if (Object.hasOwnProperty.call(e, t)) n = e[t];
                else {
                  if (t.includes(".")) return function(e, t) {
                    for (var n = e.split("."), r = [t], a = 0, o = n.length; a < o; a++) {
                      for (var i = n[a], s = [], c = 0, l = r.length; c < l; c++) {
                        var u = r[c];
                        if (null != u) {
                          if (Object.hasOwnProperty.call(u, i)) {
                            var d = u[i];
                            null != d && s.push(d)
                          } else "*" === i && (s = s.concat(u))
                        }
                      }
                      r = s
                    }
                    if (Array.isArray(r[0])) {
                      var p = [];
                      return p.concat.apply(p, r)
                    }
                    return r
                  }(t, e);
                  n = null
                }
                return null == n ? [] : Array.isArray(n) ? n : [String(n)]
              }(e, i), l = 0, u = c.length; l < u; l++) n.push({
              itemValue: c[l],
              attributes: s
            })
          }
          return n
        })(e, t).reduce(function(e, t, r) {
          var o = e.rank,
            s = e.rankedValue,
            c = e.keyIndex,
            u = e.keyThreshold,
            d = t.itemValue,
            p = t.attributes,
            f = l(d, n, a),
            h = s,
            m = p.minRanking,
            v = p.maxRanking,
            g = p.threshold;
          return f < m && f >= i.MATCHES ? f = m : f > v && (f = v), f > o && (o = f, c = r, u = g, h = d), {
            rankedValue: h,
            rank: o,
            keyIndex: c,
            keyThreshold: u
          }
        }, {
          rankedValue: e,
          rank: i.NO_MATCH,
          keyIndex: -1,
          keyThreshold: a.threshold
        }) : {
          rankedValue: e,
          rank: l(e, n, a),
          keyIndex: -1,
          keyThreshold: a.threshold
        }
      }(a, o, t, n),
      p = c.rank,
      f = c.keyThreshold;
    return p >= (void 0 === f ? u : f) && e.push((0, r.default)({}, c, {
      item: a,
      index: s
    })), e
  }, [])).map(function(e) {
    return e.item
  })
}

function l(e, t, n) {
  return (e = u(e, n), (t = u(t, n)).length > e.length) ? i.NO_MATCH : e === t ? i.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase(), e === (t = t.toLowerCase())) ? i.EQUAL : e.startsWith(t) ? i.STARTS_WITH : e.includes(" " + t) ? i.WORD_STARTS_WITH : e.includes(t) ? i.CONTAINS : 1 === t.length ? i.NO_MATCH : (function(e) {
    var t = "";
    return e.split(" ").forEach(function(e) {
      e.split("-").forEach(function(e) {
        t += e.substr(0, 1)
      })
    }), t
  })(e).includes(t) ? i.ACRONYM : function(e, t) {
    var n, r, a = 0,
      o = 0;

    function s(e, t, n) {
      for (var r = n, o = t.length; r < o; r++)
        if (t[r] === e) return a += 1, r + 1;
      return -1
    }
    var c = s(t[0], e, 0);
    if (c < 0) return i.NO_MATCH;
    o = c;
    for (var l = 1, u = t.length; l < u; l++)
      if (!((o = s(t[l], e, o)) > -1)) return i.NO_MATCH;
    return n = o - c, r = a / t.length, i.MATCHES + r * (1 / n)
  }(e, t)
}

function u(e, t) {
  var n = t.keepDiacritics;
  return e = "" + e, !n && (e = o(e)), e
}
var d = {
  maxRanking: 1 / 0,
  minRanking: -1 / 0
}