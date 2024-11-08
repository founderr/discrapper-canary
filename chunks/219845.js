n.d(t, {
    Fs: function () {
        return o;
    },
    Y9: function () {
        return p;
    },
    uP: function () {
        return h;
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
    h = function (e) {
        if (o.has(e)) return o.get(e);
        if ((0, a.xj)(e)) return o.set(e, _), _;
        var t = getComputedStyle(e),
            n = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
            r = !c && 'border-box' === t.boxSizing,
            s = u.test(t.writingMode || ''),
            h = !n && l.test(t.overflowY || ''),
            p = !n && l.test(t.overflowX || ''),
            m = n ? 0 : d(t.paddingTop),
            g = n ? 0 : d(t.paddingRight),
            E = n ? 0 : d(t.paddingBottom),
            v = n ? 0 : d(t.paddingLeft),
            I = n ? 0 : d(t.borderTopWidth),
            S = n ? 0 : d(t.borderRightWidth),
            b = n ? 0 : d(t.borderBottomWidth),
            T = n ? 0 : d(t.borderLeftWidth),
            y = v + g,
            A = m + E,
            N = T + S,
            C = I + b,
            R = p ? e.offsetHeight - C - e.clientHeight : 0,
            O = h ? e.offsetWidth - N - e.clientWidth : 0,
            D = n ? n.width : d(t.width) - (r ? y + N : 0) - O,
            L = n ? n.height : d(t.height) - (r ? A + C : 0) - R,
            x = D + y + O + N,
            w = L + A + R + C,
            M = Object.freeze({
                devicePixelContentBoxSize: f(Math.round(D * devicePixelRatio), Math.round(L * devicePixelRatio), s),
                borderBoxSize: f(x, w, s),
                contentBoxSize: f(D, L, s),
                contentRect: new i.N(v, m, D, L)
            });
        return o.set(e, M), M;
    },
    p = function (e, t) {
        var n = h(e),
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
