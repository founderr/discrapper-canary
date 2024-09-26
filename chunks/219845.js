n.d(t, {
    Fs: function () {
        return s;
    },
    Y9: function () {
        return h;
    },
    uP: function () {
        return f;
    }
});
var r = n(644387),
    i = n(582661),
    a = n(383466),
    o = n(559972),
    s = new Map(),
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
    f = function (e) {
        if (s.has(e)) return s.get(e);
        if ((0, a.xj)(e)) return s.set(e, E), E;
        var t = getComputedStyle(e),
            n = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
            r = !c && 'border-box' === t.boxSizing,
            o = u.test(t.writingMode || ''),
            f = !n && l.test(t.overflowY || ''),
            h = !n && l.test(t.overflowX || ''),
            p = n ? 0 : d(t.paddingTop),
            m = n ? 0 : d(t.paddingRight),
            I = n ? 0 : d(t.paddingBottom),
            T = n ? 0 : d(t.paddingLeft),
            g = n ? 0 : d(t.borderTopWidth),
            S = n ? 0 : d(t.borderRightWidth),
            A = n ? 0 : d(t.borderBottomWidth),
            v = n ? 0 : d(t.borderLeftWidth),
            N = T + m,
            O = p + I,
            R = v + S,
            C = g + A,
            y = h ? e.offsetHeight - C - e.clientHeight : 0,
            L = f ? e.offsetWidth - R - e.clientWidth : 0,
            b = r ? N + R : 0,
            D = r ? O + C : 0,
            M = n ? n.width : d(t.width) - b - L,
            P = n ? n.height : d(t.height) - D - y,
            U = M + N + L + R,
            w = P + O + y + C,
            x = Object.freeze({
                devicePixelContentBoxSize: _(Math.round(M * devicePixelRatio), Math.round(P * devicePixelRatio), o),
                borderBoxSize: _(U, w, o),
                contentBoxSize: _(M, P, o),
                contentRect: new i.N(T, p, M, P)
            });
        return s.set(e, x), x;
    },
    h = function (e, t) {
        var n = f(e),
            i = n.borderBoxSize,
            a = n.contentBoxSize,
            o = n.devicePixelContentBoxSize;
        switch (t) {
            case r.z.DEVICE_PIXEL_CONTENT_BOX:
                return o;
            case r.z.BORDER_BOX:
                return i;
            default:
                return a;
        }
    };
