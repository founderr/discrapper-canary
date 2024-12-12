r.d(n, {
    Fs: function () {
        return l;
    },
    Y9: function () {
        return m;
    },
    uP: function () {
        return p;
    }
});
var i = r(644387),
    a = r(582661),
    s = r(383466),
    o = r(559972),
    l = new Map(),
    u = /auto|scroll/,
    c = /^tb|vertical/,
    d = /msie|trident/i.test(o.C.navigator && o.C.navigator.userAgent),
    f = function (e) {
        return parseFloat(e || '0');
    },
    _ = function (e, n, r) {
        return (
            void 0 === e && (e = 0),
            void 0 === n && (n = 0),
            void 0 === r && (r = !1),
            Object.freeze({
                inlineSize: (r ? n : e) || 0,
                blockSize: (r ? e : n) || 0
            })
        );
    },
    h = Object.freeze({
        devicePixelContentBoxSize: _(),
        borderBoxSize: _(),
        contentBoxSize: _(),
        contentRect: new a.N(0, 0, 0, 0)
    }),
    p = function (e) {
        if (l.has(e)) return l.get(e);
        if ((0, s.xj)(e)) return l.set(e, h), h;
        var n = getComputedStyle(e),
            r = (0, s.zd)(e) && e.ownerSVGElement && e.getBBox(),
            i = !d && 'border-box' === n.boxSizing,
            o = c.test(n.writingMode || ''),
            p = !r && u.test(n.overflowY || ''),
            m = !r && u.test(n.overflowX || ''),
            g = r ? 0 : f(n.paddingTop),
            E = r ? 0 : f(n.paddingRight),
            v = r ? 0 : f(n.paddingBottom),
            I = r ? 0 : f(n.paddingLeft),
            T = r ? 0 : f(n.borderTopWidth),
            b = r ? 0 : f(n.borderRightWidth),
            y = r ? 0 : f(n.borderBottomWidth),
            S = r ? 0 : f(n.borderLeftWidth),
            A = I + E,
            N = g + v,
            C = S + b,
            R = T + y,
            O = m ? e.offsetHeight - R - e.clientHeight : 0,
            D = p ? e.offsetWidth - C - e.clientWidth : 0,
            L = i ? A + C : 0,
            x = i ? N + R : 0,
            w = r ? r.width : f(n.width) - L - D,
            P = r ? r.height : f(n.height) - x - O,
            M = w + A + D + C,
            k = P + N + O + R,
            U = Object.freeze({
                devicePixelContentBoxSize: _(Math.round(w * devicePixelRatio), Math.round(P * devicePixelRatio), o),
                borderBoxSize: _(M, k, o),
                contentBoxSize: _(w, P, o),
                contentRect: new a.N(I, g, w, P)
            });
        return l.set(e, U), U;
    },
    m = function (e, n) {
        var r = p(e),
            a = r.borderBoxSize,
            s = r.contentBoxSize,
            o = r.devicePixelContentBoxSize;
        switch (n) {
            case i.z.DEVICE_PIXEL_CONTENT_BOX:
                return o;
            case i.z.BORDER_BOX:
                return a;
            default:
                return s;
        }
    };
