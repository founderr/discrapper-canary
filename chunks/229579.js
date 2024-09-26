n.d(t, {
    Y: function () {
        return h;
    },
    u: function () {
        return f;
    }
});
var r = n(430901),
    i = n(96428),
    a = n(222285),
    o = n(288930),
    s = new WeakMap(),
    l = /auto|scroll/,
    u = /^tb|vertical/,
    c = /msie|trident/i.test(o.C.navigator && o.C.navigator.userAgent),
    d = function (e) {
        return parseFloat(e || '0');
    },
    _ = function (e, t, n) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            Object.freeze({
                inlineSize: (n ? t : e) || 0,
                blockSize: (n ? e : t) || 0
            })
        );
    },
    E = Object.freeze({
        devicePixelContentBoxSize: _(),
        borderBoxSize: _(),
        contentBoxSize: _(),
        contentRect: new i.N(0, 0, 0, 0)
    }),
    f = function (e, t) {
        if ((void 0 === t && (t = !1), s.has(e) && !t)) return s.get(e);
        if ((0, a.xj)(e)) return s.set(e, E), E;
        var n = getComputedStyle(e),
            r = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
            o = !c && 'border-box' === n.boxSizing,
            f = u.test(n.writingMode || ''),
            h = !r && l.test(n.overflowY || ''),
            p = !r && l.test(n.overflowX || ''),
            m = r ? 0 : d(n.paddingTop),
            I = r ? 0 : d(n.paddingRight),
            T = r ? 0 : d(n.paddingBottom),
            g = r ? 0 : d(n.paddingLeft),
            S = r ? 0 : d(n.borderTopWidth),
            A = r ? 0 : d(n.borderRightWidth),
            v = r ? 0 : d(n.borderBottomWidth),
            N = r ? 0 : d(n.borderLeftWidth),
            O = g + I,
            R = m + T,
            C = N + A,
            y = S + v,
            L = p ? e.offsetHeight - y - e.clientHeight : 0,
            b = h ? e.offsetWidth - C - e.clientWidth : 0,
            D = o ? O + C : 0,
            M = o ? R + y : 0,
            P = r ? r.width : d(n.width) - D - b,
            U = r ? r.height : d(n.height) - M - L,
            w = P + O + b + C,
            x = U + R + L + y,
            G = Object.freeze({
                devicePixelContentBoxSize: _(Math.round(P * devicePixelRatio), Math.round(U * devicePixelRatio), f),
                borderBoxSize: _(w, x, f),
                contentBoxSize: _(P, U, f),
                contentRect: new i.N(g, m, P, U)
            });
        return s.set(e, G), G;
    },
    h = function (e, t, n) {
        var i = f(e, n),
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
