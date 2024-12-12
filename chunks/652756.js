r.d(n, {
    K5: function () {
        return l;
    },
    g2: function () {
        return o;
    },
    rK: function () {
        return d;
    }
});
var i = r(868635),
    a = r(816383),
    s = 1;
function o(e) {
    var n = e.nodeType === s ? e : e.parentElement;
    if (!n) return null;
    var r = n.getBoundingClientRect(),
        i = r.top;
    return {
        x: r.left,
        y: i
    };
}
function l(e) {
    return {
        x: e.clientX,
        y: e.clientY
    };
}
function u(e) {
    var n;
    return 'IMG' === e.nodeName && ((0, i.v)() || !(null !== (n = document.documentElement) && void 0 !== n && n.contains(e)));
}
function c(e, n, r, a) {
    var s = e ? n.width : r,
        o = e ? n.height : a;
    return (
        (0, i.G)() && e && ((o /= window.devicePixelRatio), (s /= window.devicePixelRatio)),
        {
            dragPreviewWidth: s,
            dragPreviewHeight: o
        }
    );
}
function d(e, n, r, s, l) {
    var d = u(n),
        f = o(d ? e : n),
        _ = {
            x: r.x - f.x,
            y: r.y - f.y
        },
        h = e.offsetWidth,
        p = e.offsetHeight,
        m = s.anchorX,
        g = s.anchorY,
        E = c(d, n, h, p),
        v = E.dragPreviewWidth,
        I = E.dragPreviewHeight,
        T = function () {
            var e = new a.I([0, 0.5, 1], [_.y, (_.y / p) * I, _.y + I - p]).interpolate(g);
            return (0, i.G)() && d && (e += (window.devicePixelRatio - 1) * I), e;
        },
        b = function () {
            return new a.I([0, 0.5, 1], [_.x, (_.x / h) * v, _.x + v - h]).interpolate(m);
        },
        y = l.offsetX,
        S = l.offsetY,
        A = 0 === S || S;
    return {
        x: 0 === y || y ? y : b(),
        y: A ? S : T()
    };
}
