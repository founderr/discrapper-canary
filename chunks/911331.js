function r(e) {
    return 'object' == typeof e && null != e && 1 === e.nodeType;
}
function i(e, t) {
    return (!t || 'hidden' !== e) && 'visible' !== e && 'clip' !== e;
}
function a(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
        var n = getComputedStyle(e, null);
        return (
            i(n.overflowY, t) ||
            i(n.overflowX, t) ||
            (function (e) {
                var t = (function (e) {
                    if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                    try {
                        return e.ownerDocument.defaultView.frameElement;
                    } catch (e) {
                        return null;
                    }
                })(e);
                return !!t && (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth);
            })(e)
        );
    }
    return !1;
}
function o(e, t, n, r, i, a, o, s) {
    return (a < e && o > t) || (a > e && o < t) ? 0 : (a <= e && s <= n) || (o >= t && s >= n) ? a - e - r : (o > t && s < n) || (a < e && s > n) ? o - t + i : 0;
}
n.d(t, {
    Z: function () {
        return s;
    }
});
var s = function (e, t) {
    var n = window,
        i = t.scrollMode,
        s = t.block,
        l = t.inline,
        u = t.boundary,
        c = t.skipOverflowHiddenElements,
        d =
            'function' == typeof u
                ? u
                : function (e) {
                      return e !== u;
                  };
    if (!r(e)) throw TypeError('Invalid target');
    for (var _, E, f = document.scrollingElement || document.documentElement, h = [], p = e; r(p) && d(p); ) {
        if ((p = null == (E = (_ = p).parentElement) ? _.getRootNode().host || null : E) === f) {
            h.push(p);
            break;
        }
        (null != p && p === document.body && a(p) && !a(document.documentElement)) || (null != p && a(p, c) && h.push(p));
    }
    for (var m = n.visualViewport ? n.visualViewport.width : innerWidth, I = n.visualViewport ? n.visualViewport.height : innerHeight, T = window.scrollX || pageXOffset, g = window.scrollY || pageYOffset, S = e.getBoundingClientRect(), A = S.height, v = S.width, N = S.top, O = S.right, R = S.bottom, C = S.left, y = 'start' === s || 'nearest' === s ? N : 'end' === s ? R : N + A / 2, L = 'center' === l ? C + v / 2 : 'end' === l ? O : C, b = [], D = 0; D < h.length; D++) {
        var M = h[D],
            P = M.getBoundingClientRect(),
            U = P.height,
            w = P.width,
            x = P.top,
            G = P.right,
            k = P.bottom,
            B = P.left;
        if ('if-needed' === i && N >= 0 && C >= 0 && R <= I && O <= m && N >= x && R <= k && C >= B && O <= G) break;
        var F = getComputedStyle(M),
            Z = parseInt(F.borderLeftWidth, 10),
            V = parseInt(F.borderTopWidth, 10),
            H = parseInt(F.borderRightWidth, 10),
            Y = parseInt(F.borderBottomWidth, 10),
            j = 0,
            W = 0,
            K = 'offsetWidth' in M ? M.offsetWidth - M.clientWidth - Z - H : 0,
            z = 'offsetHeight' in M ? M.offsetHeight - M.clientHeight - V - Y : 0,
            q = 'offsetWidth' in M ? (0 === M.offsetWidth ? 0 : w / M.offsetWidth) : 0,
            Q = 'offsetHeight' in M ? (0 === M.offsetHeight ? 0 : U / M.offsetHeight) : 0;
        if (f === M) (j = 'start' === s ? y : 'end' === s ? y - I : 'nearest' === s ? o(g, g + I, I, V, Y, g + y, g + y + A, A) : y - I / 2), (W = 'start' === l ? L : 'center' === l ? L - m / 2 : 'end' === l ? L - m : o(T, T + m, m, Z, H, T + L, T + L + v, v)), (j = Math.max(0, j + g)), (W = Math.max(0, W + T));
        else {
            (j = 'start' === s ? y - x - V : 'end' === s ? y - k + Y + z : 'nearest' === s ? o(x, k, U, V, Y + z, y, y + A, A) : y - (x + U / 2) + z / 2), (W = 'start' === l ? L - B - Z : 'center' === l ? L - (B + w / 2) + K / 2 : 'end' === l ? L - G + H + K : o(B, G, w, Z, H + K, L, L + v, v));
            var X = M.scrollLeft,
                $ = M.scrollTop;
            (y += $ - (j = Math.max(0, Math.min($ + j / Q, M.scrollHeight - U / Q + z)))), (L += X - (W = Math.max(0, Math.min(X + W / q, M.scrollWidth - w / q + K))));
        }
        b.push({
            el: M,
            top: j,
            left: W
        });
    }
    return b;
};
