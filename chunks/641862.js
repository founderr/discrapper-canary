n.d(t, {
    Y: function () {
        return m;
    },
    u: function () {
        return p;
    }
});
var r = n(175730),
    i = n(878369),
    a = n(670732),
    o = n(839826),
    s = n(721056),
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
    h = (0, s.v)({
        devicePixelContentBoxSize: f(),
        borderBoxSize: f(),
        contentBoxSize: f(),
        contentRect: new a.N(0, 0, 0, 0)
    }),
    p = function (e, t) {
        if ((void 0 === t && (t = !1), u.has(e) && !t)) return u.get(e);
        if ((0, o.xj)(e)) return u.set(e, h), h;
        var n = getComputedStyle(e),
            r = (0, o.zd)(e) && e.ownerSVGElement && e.getBBox(),
            i = !_ && 'border-box' === n.boxSizing,
            l = d.test(n.writingMode || ''),
            p = !r && c.test(n.overflowY || ''),
            m = !r && c.test(n.overflowX || ''),
            I = r ? 0 : E(n.paddingTop),
            T = r ? 0 : E(n.paddingRight),
            g = r ? 0 : E(n.paddingBottom),
            S = r ? 0 : E(n.paddingLeft),
            A = r ? 0 : E(n.borderTopWidth),
            v = r ? 0 : E(n.borderRightWidth),
            N = r ? 0 : E(n.borderBottomWidth),
            O = r ? 0 : E(n.borderLeftWidth),
            R = S + T,
            C = I + g,
            y = O + v,
            L = A + N,
            b = m ? e.offsetHeight - L - e.clientHeight : 0,
            D = p ? e.offsetWidth - y - e.clientWidth : 0,
            M = i ? R + y : 0,
            P = i ? C + L : 0,
            U = r ? r.width : E(n.width) - M - D,
            w = r ? r.height : E(n.height) - P - b,
            x = U + R + D + y,
            G = w + C + b + L,
            k = (0, s.v)({
                devicePixelContentBoxSize: f(Math.round(U * devicePixelRatio), Math.round(w * devicePixelRatio), l),
                borderBoxSize: f(x, G, l),
                contentBoxSize: f(U, w, l),
                contentRect: new a.N(S, I, U, w)
            });
        return u.set(e, k), k;
    },
    m = function (e, t, n) {
        var i = p(e, n),
            a = i.borderBoxSize,
            o = i.contentBoxSize,
            s = i.devicePixelContentBoxSize;
        switch (t) {
            case r.z.DEVICE_PIXEL_CONTENT_BOX:
                return s;
            case r.z.BORDER_BOX:
                return a;
            default:
                return o;
        }
    };
