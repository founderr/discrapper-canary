n.d(t, {
    Y: function () {
        return h;
    },
    u: function () {
        return p;
    }
});
var r = n(430901),
    i = n(96428),
    a = n(222285),
    s = n(288930),
    o = new WeakMap(),
    l = /auto|scroll/,
    u = /^tb|vertical/,
    c = /msie|trident/i.test(s.C.navigator && s.C.navigator.userAgent),
    d = function (e) {
        return parseFloat(e || '0');
    },
    f = function (e, t, n) {
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
    _ = Object.freeze({
        devicePixelContentBoxSize: f(),
        borderBoxSize: f(),
        contentBoxSize: f(),
        contentRect: new i.N(0, 0, 0, 0)
    }),
    p = function (e, t) {
        if ((void 0 === t && (t = !1), o.has(e) && !t)) return o.get(e);
        if ((0, a.xj)(e)) return o.set(e, _), _;
        var n = getComputedStyle(e),
            r = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
            s = !c && 'border-box' === n.boxSizing,
            p = u.test(n.writingMode || ''),
            h = !r && l.test(n.overflowY || ''),
            m = !r && l.test(n.overflowX || ''),
            g = r ? 0 : d(n.paddingTop),
            E = r ? 0 : d(n.paddingRight),
            v = r ? 0 : d(n.paddingBottom),
            b = r ? 0 : d(n.paddingLeft),
            I = r ? 0 : d(n.borderTopWidth),
            S = r ? 0 : d(n.borderRightWidth),
            T = r ? 0 : d(n.borderBottomWidth),
            y = r ? 0 : d(n.borderLeftWidth),
            A = b + E,
            N = g + v,
            C = y + S,
            R = I + T,
            O = m ? e.offsetHeight - R - e.clientHeight : 0,
            D = h ? e.offsetWidth - C - e.clientWidth : 0,
            L = r ? r.width : d(n.width) - (s ? A + C : 0) - D,
            x = r ? r.height : d(n.height) - (s ? N + R : 0) - O,
            w = L + A + D + C,
            M = x + N + O + R,
            P = Object.freeze({
                devicePixelContentBoxSize: f(Math.round(L * devicePixelRatio), Math.round(x * devicePixelRatio), p),
                borderBoxSize: f(w, M, p),
                contentBoxSize: f(L, x, p),
                contentRect: new i.N(b, g, L, x)
            });
        return o.set(e, P), P;
    },
    h = function (e, t, n) {
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
