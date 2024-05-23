"use strict";
var i, r;
n.r(t), n.d(t, {
  MatchStrategy: function() {
    return i
  },
  getMatchedPositions: function() {
    return u
  },
  isMatch: function() {
    return l
  }
}), (r = i || (i = {}))[r.ExactMatch = 0] = "ExactMatch", r[r.PrefixMatch = 1] = "PrefixMatch";
let s = e => /\p{P}/gu.test(null != e ? e : "") || " " === e || "" === e,
  a = (e, t, n) => {
    if (n - t > e.length) return !1;
    let i = e.charAt(t - 1),
      r = e.charAt(n + 1);
    return s(i) && s(r)
  },
  o = (e, t) => s(e.charAt(t - 1)),
  l = (e, t, n, i) => {
    if (1 === i) return o(e, t);
    return a(e, t, n)
  },
  u = (e, t, n, i) => {
    if (0 === i) return {
      start: t,
      end: n
    };
    let r = n;
    for (; r < e.length - 1 && !s(e.charAt(r + 1));) r++;
    return {
      start: t,
      end: r
    }
  }