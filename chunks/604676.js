"use strict";

function n(e) {
  return "object" == typeof e && null != e && 1 === e.nodeType
}

function u(e, t) {
  return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e
}

function o(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var r, n, o = getComputedStyle(e, null);
    return u(o.overflowY, t) || u(o.overflowX, t) || !!(n = function(e) {
      if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
      try {
        return e.ownerDocument.defaultView.frameElement
      } catch (e) {
        return null
      }
    }(r = e)) && (n.clientHeight < r.scrollHeight || n.clientWidth < r.scrollWidth)
  }
  return !1
}

function a(e, t, r, n, u, o, a, i) {
  return o < e && a > t || o > e && a < t ? 0 : o <= e && i <= r || a >= t && i >= r ? o - e - n : a > t && i < r || o < e && i > r ? a - t + u : 0
}
r.r(t), r.d(t, {
  default: function() {
    return i
  }
}), r("70102"), r("424973");
var i = function(e, t) {
  var r = window,
    u = t.scrollMode,
    i = t.block,
    s = t.inline,
    l = t.boundary,
    c = t.skipOverflowHiddenElements,
    f = "function" == typeof l ? l : function(e) {
      return e !== l
    };
  if (!n(e)) throw TypeError("Invalid target");
  for (var d, D, h = document.scrollingElement || document.documentElement, v = [], p = e; n(p) && f(p);) {
    if ((p = null == (D = (d = p).parentElement) ? d.getRootNode().host || null : D) === h) {
      v.push(p);
      break
    }
    null != p && p === document.body && o(p) && !o(document.documentElement) || null != p && o(p, c) && v.push(p)
  }
  for (var C = r.visualViewport ? r.visualViewport.width : innerWidth, g = r.visualViewport ? r.visualViewport.height : innerHeight, B = window.scrollX || pageXOffset, E = window.scrollY || pageYOffset, m = e.getBoundingClientRect(), A = m.height, F = m.width, b = m.top, y = m.right, w = m.bottom, x = m.left, O = "start" === i || "nearest" === i ? b : "end" === i ? w : b + A / 2, k = "center" === s ? x + F / 2 : "end" === s ? y : x, P = [], j = 0; j < v.length; j++) {
    var S = v[j],
      T = S.getBoundingClientRect(),
      R = T.height,
      N = T.width,
      M = T.top,
      z = T.right,
      W = T.bottom,
      _ = T.left;
    if ("if-needed" === u && b >= 0 && x >= 0 && w <= g && y <= C && b >= M && w <= W && x >= _ && y <= z) break;
    var I = getComputedStyle(S),
      L = parseInt(I.borderLeftWidth, 10),
      q = parseInt(I.borderTopWidth, 10),
      V = parseInt(I.borderRightWidth, 10),
      U = parseInt(I.borderBottomWidth, 10),
      H = 0,
      K = 0,
      $ = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - L - V : 0,
      X = "offsetHeight" in S ? S.offsetHeight - S.clientHeight - q - U : 0,
      J = "offsetWidth" in S ? 0 === S.offsetWidth ? 0 : N / S.offsetWidth : 0,
      Y = "offsetHeight" in S ? 0 === S.offsetHeight ? 0 : R / S.offsetHeight : 0;
    if (h === S) H = "start" === i ? O : "end" === i ? O - g : "nearest" === i ? a(E, E + g, g, q, U, E + O, E + O + A, A) : O - g / 2, K = "start" === s ? k : "center" === s ? k - C / 2 : "end" === s ? k - C : a(B, B + C, C, L, V, B + k, B + k + F, F), H = Math.max(0, H + E), K = Math.max(0, K + B);
    else {
      H = "start" === i ? O - M - q : "end" === i ? O - W + U + X : "nearest" === i ? a(M, W, R, q, U + X, O, O + A, A) : O - (M + R / 2) + X / 2, K = "start" === s ? k - _ - L : "center" === s ? k - (_ + N / 2) + $ / 2 : "end" === s ? k - z + V + $ : a(_, z, N, L, V + $, k, k + F, F);
      var G = S.scrollLeft,
        Z = S.scrollTop;
      O += Z - (H = Math.max(0, Math.min(Z + H / Y, S.scrollHeight - R / Y + X))), k += G - (K = Math.max(0, Math.min(G + K / J, S.scrollWidth - N / J + $)))
    }
    P.push({
      el: S,
      top: H,
      left: K
    })
  }
  return P
}