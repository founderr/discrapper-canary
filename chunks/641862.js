n.d(t, {
    Y: function () {
        return I;
    },
    u: function () {
        return p;
    }
});
var r = n(175730),
    i = n(878369),
    a = n(670732),
    s = n(839826),
    o = n(721056),
    l = n(388388),
    u = new WeakMap(),
    c = /auto|scroll/,
    d = /^tb|vertical/,
    _ = /msie|trident/i.test(l.C.navigator && l.C.navigator.userAgent),
    E = function (e) {
        return parseFloat(e || '0');
    },
    f = function (e, t, n) {
        return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = !1), new i.D((n ? t : e) || 0, (n ? e : t) || 0);
    },
    h = (0, o.v)({
        devicePixelContentBoxSize: f(),
        borderBoxSize: f(),
        contentBoxSize: f(),
        contentRect: new a.N(0, 0, 0, 0)
    }),
    p = function (e, t) {
        if ((void 0 === t && (t = !1), u.has(e) && !t)) return u.get(e);
        if ((0, s.xj)(e)) return u.set(e, h), h;
        var n = getComputedStyle(e),
            r = (0, s.zd)(e) && e.ownerSVGElement && e.getBBox(),
            i = !_ && 'border-box' === n.boxSizing,
            l = d.test(n.writingMode || ''),
            p = !r && c.test(n.overflowY || ''),
            I = !r && c.test(n.overflowX || ''),
            m = r ? 0 : E(n.paddingTop),
            T = r ? 0 : E(n.paddingRight),
            S = r ? 0 : E(n.paddingBottom),
            g = r ? 0 : E(n.paddingLeft),
            A = r ? 0 : E(n.borderTopWidth),
            N = r ? 0 : E(n.borderRightWidth),
            O = r ? 0 : E(n.borderBottomWidth),
            R = r ? 0 : E(n.borderLeftWidth),
            v = g + T,
            C = m + S,
            L = R + N,
            y = A + O,
            D = I ? e.offsetHeight - y - e.clientHeight : 0,
            b = p ? e.offsetWidth - L - e.clientWidth : 0,
            M = r ? r.width : E(n.width) - (i ? v + L : 0) - b,
            P = r ? r.height : E(n.height) - (i ? C + y : 0) - D,
            U = M + v + b + L,
            w = P + C + D + y,
            x = (0, o.v)({
                devicePixelContentBoxSize: f(Math.round(M * devicePixelRatio), Math.round(P * devicePixelRatio), l),
                borderBoxSize: f(U, w, l),
                contentBoxSize: f(M, P, l),
                contentRect: new a.N(g, m, M, P)
            });
        return u.set(e, x), x;
    },
    I = function (e, t, n) {
        var i = p(e, n),
            a = i.borderBoxSize,
            s = i.contentBoxSize,
            o = i.devicePixelContentBoxSize;
        switch (t) {
            case r.z.DEVICE_PIXEL_CONTENT_BOX:
                return o;
            case r.z.BORDER_BOX:
                return a;
            default:
                return s;
        }
    };
