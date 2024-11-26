function r(e) {
    return 'object' == typeof e && null != e && 1 === e.nodeType;
}
function i(e, t) {
    return (!t || 'hidden' !== e) && 'visible' !== e && 'clip' !== e;
}
function a(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
        var n,
            r,
            a = getComputedStyle(e, null);
        return (
            i(a.overflowY, t) ||
            i(a.overflowX, t) ||
            (!!(r = (function (e) {
                if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                try {
                    return e.ownerDocument.defaultView.frameElement;
                } catch (e) {
                    return null;
                }
            })((n = e))) &&
                (r.clientHeight < n.scrollHeight || r.clientWidth < n.scrollWidth))
        );
    }
    return !1;
}
function s(e, t, n, r, i, a, s, o) {
    return (a < e && s > t) || (a > e && s < t) ? 0 : (a <= e && o <= n) || (s >= t && o >= n) ? a - e - r : (s > t && o < n) || (a < e && o > n) ? s - t + i : 0;
}
n.d(t, {
    Z: function () {
        return o;
    }
});
var o = function (e, t) {
    var n = window,
        i = t.scrollMode,
        o = t.block,
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
    for (var f, _, p = document.scrollingElement || document.documentElement, h = [], m = e; r(m) && d(m); ) {
        if ((m = null == (_ = (f = m).parentElement) ? f.getRootNode().host || null : _) === p) {
            h.push(m);
            break;
        }
        (null != m && m === document.body && a(m) && !a(document.documentElement)) || (null != m && a(m, c) && h.push(m));
    }
    for (var g = n.visualViewport ? n.visualViewport.width : innerWidth, E = n.visualViewport ? n.visualViewport.height : innerHeight, v = window.scrollX || pageXOffset, I = window.scrollY || pageYOffset, T = e.getBoundingClientRect(), b = T.height, S = T.width, y = T.top, A = T.right, N = T.bottom, C = T.left, R = 'start' === o || 'nearest' === o ? y : 'end' === o ? N : y + b / 2, O = 'center' === l ? C + S / 2 : 'end' === l ? A : C, D = [], L = 0; L < h.length; L++) {
        var x = h[L],
            w = x.getBoundingClientRect(),
            P = w.height,
            M = w.width,
            k = w.top,
            U = w.right,
            B = w.bottom,
            G = w.left;
        if ('if-needed' === i && y >= 0 && C >= 0 && N <= E && A <= g && y >= k && N <= B && C >= G && A <= U) break;
        var Z = getComputedStyle(x),
            F = parseInt(Z.borderLeftWidth, 10),
            V = parseInt(Z.borderTopWidth, 10),
            j = parseInt(Z.borderRightWidth, 10),
            H = parseInt(Z.borderBottomWidth, 10),
            Y = 0,
            W = 0,
            K = 'offsetWidth' in x ? x.offsetWidth - x.clientWidth - F - j : 0,
            z = 'offsetHeight' in x ? x.offsetHeight - x.clientHeight - V - H : 0,
            q = 'offsetWidth' in x ? (0 === x.offsetWidth ? 0 : M / x.offsetWidth) : 0,
            Q = 'offsetHeight' in x ? (0 === x.offsetHeight ? 0 : P / x.offsetHeight) : 0;
        if (p === x) (Y = 'start' === o ? R : 'end' === o ? R - E : 'nearest' === o ? s(I, I + E, E, V, H, I + R, I + R + b, b) : R - E / 2), (W = 'start' === l ? O : 'center' === l ? O - g / 2 : 'end' === l ? O - g : s(v, v + g, g, F, j, v + O, v + O + S, S)), (Y = Math.max(0, Y + I)), (W = Math.max(0, W + v));
        else {
            (Y = 'start' === o ? R - k - V : 'end' === o ? R - B + H + z : 'nearest' === o ? s(k, B, P, V, H + z, R, R + b, b) : R - (k + P / 2) + z / 2), (W = 'start' === l ? O - G - F : 'center' === l ? O - (G + M / 2) + K / 2 : 'end' === l ? O - U + j + K : s(G, U, M, F, j + K, O, O + S, S));
            var X = x.scrollLeft,
                J = x.scrollTop;
            (R += J - (Y = Math.max(0, Math.min(J + Y / Q, x.scrollHeight - P / Q + z)))), (O += X - (W = Math.max(0, Math.min(X + W / q, x.scrollWidth - M / q + K))));
        }
        D.push({
            el: x,
            top: Y,
            left: W
        });
    }
    return D;
};
