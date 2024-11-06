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
    for (var f, _, h = document.scrollingElement || document.documentElement, p = [], m = e; r(m) && d(m); ) {
        if ((m = null == (_ = (f = m).parentElement) ? f.getRootNode().host || null : _) === h) {
            p.push(m);
            break;
        }
        (null != m && m === document.body && a(m) && !a(document.documentElement)) || (null != m && a(m, c) && p.push(m));
    }
    for (var g = n.visualViewport ? n.visualViewport.width : innerWidth, E = n.visualViewport ? n.visualViewport.height : innerHeight, v = window.scrollX || pageXOffset, I = window.scrollY || pageYOffset, S = e.getBoundingClientRect(), T = S.height, b = S.width, y = S.top, A = S.right, N = S.bottom, C = S.left, R = 'start' === o || 'nearest' === o ? y : 'end' === o ? N : y + T / 2, O = 'center' === l ? C + b / 2 : 'end' === l ? A : C, D = [], L = 0; L < p.length; L++) {
        var x = p[L],
            w = x.getBoundingClientRect(),
            M = w.height,
            P = w.width,
            k = w.top,
            U = w.right,
            G = w.bottom,
            B = w.left;
        if ('if-needed' === i && y >= 0 && C >= 0 && N <= E && A <= g && y >= k && N <= G && C >= B && A <= U) break;
        var Z = getComputedStyle(x),
            F = parseInt(Z.borderLeftWidth, 10),
            V = parseInt(Z.borderTopWidth, 10),
            H = parseInt(Z.borderRightWidth, 10),
            j = parseInt(Z.borderBottomWidth, 10),
            Y = 0,
            W = 0,
            K = 'offsetWidth' in x ? x.offsetWidth - x.clientWidth - F - H : 0,
            z = 'offsetHeight' in x ? x.offsetHeight - x.clientHeight - V - j : 0,
            q = 'offsetWidth' in x ? (0 === x.offsetWidth ? 0 : P / x.offsetWidth) : 0,
            Q = 'offsetHeight' in x ? (0 === x.offsetHeight ? 0 : M / x.offsetHeight) : 0;
        if (h === x) (Y = 'start' === o ? R : 'end' === o ? R - E : 'nearest' === o ? s(I, I + E, E, V, j, I + R, I + R + T, T) : R - E / 2), (W = 'start' === l ? O : 'center' === l ? O - g / 2 : 'end' === l ? O - g : s(v, v + g, g, F, H, v + O, v + O + b, b)), (Y = Math.max(0, Y + I)), (W = Math.max(0, W + v));
        else {
            (Y = 'start' === o ? R - k - V : 'end' === o ? R - G + j + z : 'nearest' === o ? s(k, G, M, V, j + z, R, R + T, T) : R - (k + M / 2) + z / 2), (W = 'start' === l ? O - B - F : 'center' === l ? O - (B + P / 2) + K / 2 : 'end' === l ? O - U + H + K : s(B, U, P, F, H + K, O, O + b, b));
            var X = x.scrollLeft,
                J = x.scrollTop;
            (R += J - (Y = Math.max(0, Math.min(J + Y / Q, x.scrollHeight - M / Q + z)))), (O += X - (W = Math.max(0, Math.min(X + W / q, x.scrollWidth - P / q + K))));
        }
        D.push({
            el: x,
            top: Y,
            left: W
        });
    }
    return D;
};
