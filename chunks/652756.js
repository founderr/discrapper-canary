n.d(t, {
    K5: function () {
        return s;
    },
    g2: function () {
        return o;
    },
    rK: function () {
        return c;
    }
});
var r = n(868635),
    i = n(816383),
    a = 1;
function o(e) {
    var t = e.nodeType === a ? e : e.parentElement;
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
function l(e) {
    var t;
    return 'IMG' === e.nodeName && ((0, r.v)() || !(null !== (t = document.documentElement) && void 0 !== t && t.contains(e)));
}
function u(e, t, n, i) {
    var a = e ? t.width : n,
        o = e ? t.height : i;
    return (
        (0, r.G)() && e && ((o /= window.devicePixelRatio), (a /= window.devicePixelRatio)),
        {
            dragPreviewWidth: a,
            dragPreviewHeight: o
        }
    );
}
function c(e, t, n, a, s) {
    var c = l(t),
        d = o(c ? e : t),
        _ = {
            x: n.x - d.x,
            y: n.y - d.y
        },
        E = e.offsetWidth,
        f = e.offsetHeight,
        h = a.anchorX,
        p = a.anchorY,
        m = u(c, t, E, f),
        I = m.dragPreviewWidth,
        T = m.dragPreviewHeight,
        g = function () {
            var e = new i.I([0, 0.5, 1], [_.y, (_.y / f) * T, _.y + T - f]).interpolate(p);
            return (0, r.G)() && c && (e += (window.devicePixelRatio - 1) * T), e;
        },
        S = function () {
            return new i.I([0, 0.5, 1], [_.x, (_.x / E) * I, _.x + I - E]).interpolate(h);
        },
        A = s.offsetX,
        v = s.offsetY,
        N = 0 === v || v;
    return {
        x: 0 === A || A ? A : S(),
        y: N ? v : g()
    };
}
