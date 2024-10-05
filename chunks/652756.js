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
        _,
        E,
        f,
        h,
        p,
        I = 'IMG' === (l = t).nodeName && ((0, r.v)() || !(null !== (u = document.documentElement) && void 0 !== u && u.contains(l))),
        m = a(I ? e : t),
        T = {
            x: n.x - m.x,
            y: n.y - m.y
        },
        S = e.offsetWidth,
        g = e.offsetHeight,
        A = s.anchorX,
        N = s.anchorY;
    var O =
            ((c = I),
            (d = t),
            (_ = S),
            (E = g),
            (f = c ? d.width : _),
            (h = c ? d.height : E),
            (0, r.G)() && c && ((h /= window.devicePixelRatio), (f /= window.devicePixelRatio)),
            {
                dragPreviewWidth: f,
                dragPreviewHeight: h
            }),
        R = O.dragPreviewWidth,
        v = O.dragPreviewHeight,
        C = o.offsetX,
        L = o.offsetY;
    return {
        x: 0 === C || C ? C : new i.I([0, 0.5, 1], [T.x, (T.x / S) * R, T.x + R - S]).interpolate(A),
        y: 0 === L || L ? L : ((p = new i.I([0, 0.5, 1], [T.y, (T.y / g) * v, T.y + v - g]).interpolate(N)), (0, r.G)() && I && (p += (window.devicePixelRatio - 1) * v), p)
    };
}
