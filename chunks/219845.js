n.d(t, {
    Fs: function () {
        return o;
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
    s = n(559972),
    o = new Map(),
    l = /auto|scroll/,
    u = /^tb|vertical/,
    c = /msie|trident/i.test(s.C.navigator && s.C.navigator.userAgent),
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
        if (o.has(e)) return o.get(e);
        if ((0, a.xj)(e)) return o.set(e, E), E;
        var t = getComputedStyle(e),
            n = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
            r = !c && 'border-box' === t.boxSizing,
            s = u.test(t.writingMode || ''),
            f = !n && l.test(t.overflowY || ''),
            h = !n && l.test(t.overflowX || ''),
            p = n ? 0 : d(t.paddingTop),
            I = n ? 0 : d(t.paddingRight),
            m = n ? 0 : d(t.paddingBottom),
            T = n ? 0 : d(t.paddingLeft),
            S = n ? 0 : d(t.borderTopWidth),
            g = n ? 0 : d(t.borderRightWidth),
            A = n ? 0 : d(t.borderBottomWidth),
            N = n ? 0 : d(t.borderLeftWidth),
            R = T + I,
            O = p + m,
            v = N + g,
            C = S + A,
            L = h ? e.offsetHeight - C - e.clientHeight : 0,
            D = f ? e.offsetWidth - v - e.clientWidth : 0,
            y = n ? n.width : d(t.width) - (r ? R + v : 0) - D,
            b = n ? n.height : d(t.height) - (r ? O + C : 0) - L,
            M = y + R + D + v,
            P = b + O + L + C,
            U = Object.freeze({
                devicePixelContentBoxSize: _(Math.round(y * devicePixelRatio), Math.round(b * devicePixelRatio), s),
                borderBoxSize: _(M, P, s),
                contentBoxSize: _(y, b, s),
                contentRect: new i.N(T, p, y, b)
            });
        return o.set(e, U), U;
    },
    h = function (e, t) {
        var n = f(e),
            i = n.borderBoxSize,
            a = n.contentBoxSize,
            s = n.devicePixelContentBoxSize;
        switch (t) {
            case r.z.DEVICE_PIXEL_CONTENT_BOX:
                return s;
            case r.z.BORDER_BOX:
                return i;
            default:
                return a;
        }
    };
