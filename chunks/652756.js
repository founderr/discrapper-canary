n.d(t, {
    K5: function () {
        return s;
    },
    g2: function () {
        return a;
    },
    rK: function () {
        return o;
    }
});
var r = n(868635),
    i = n(816383);
function a(e) {
    var t = 1 === e.nodeType ? e : e.parentElement;
    if (!t) return null;
    var n = t.getBoundingClientRect(),
        r = n.top;
    return {
        x: n.left,
        y: r
    };
}
function s(e) {
    return {
        x: e.clientX,
        y: e.clientY
    };
}
function o(e, t, n, s, o) {
    var l,
        u,
        c,
        d,
        f,
        _,
        h,
        p,
        m,
        g = 'IMG' === (l = t).nodeName && ((0, r.v)() || !(null !== (u = document.documentElement) && void 0 !== u && u.contains(l))),
        E = a(g ? e : t),
        v = {
            x: n.x - E.x,
            y: n.y - E.y
        },
        I = e.offsetWidth,
        S = e.offsetHeight,
        T = s.anchorX,
        b = s.anchorY;
    var y =
            ((c = g),
            (d = t),
            (f = I),
            (_ = S),
            (h = c ? d.width : f),
            (p = c ? d.height : _),
            (0, r.G)() && c && ((p /= window.devicePixelRatio), (h /= window.devicePixelRatio)),
            {
                dragPreviewWidth: h,
                dragPreviewHeight: p
            }),
        A = y.dragPreviewWidth,
        N = y.dragPreviewHeight,
        C = o.offsetX,
        R = o.offsetY;
    return {
        x: 0 === C || C ? C : new i.I([0, 0.5, 1], [v.x, (v.x / I) * A, v.x + A - I]).interpolate(T),
        y: 0 === R || R ? R : ((m = new i.I([0, 0.5, 1], [v.y, (v.y / S) * N, v.y + N - S]).interpolate(b)), (0, r.G)() && g && (m += (window.devicePixelRatio - 1) * N), m)
    };
}
