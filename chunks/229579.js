r.d(n, {
    Y: function () {
        return m;
    },
    u: function () {
        return p;
    }
});
var i = r(430901),
    a = r(96428),
    s = r(222285),
    o = r(288930),
    l = new WeakMap(),
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
    p = function (e, n) {
        if ((void 0 === n && (n = !1), l.has(e) && !n)) return l.get(e);
        if ((0, s.xj)(e)) return l.set(e, h), h;
        var r = getComputedStyle(e),
            i = (0, s.zd)(e) && e.ownerSVGElement && e.getBBox(),
            o = !d && 'border-box' === r.boxSizing,
            p = c.test(r.writingMode || ''),
            m = !i && u.test(r.overflowY || ''),
            g = !i && u.test(r.overflowX || ''),
            E = i ? 0 : f(r.paddingTop),
            v = i ? 0 : f(r.paddingRight),
            I = i ? 0 : f(r.paddingBottom),
            T = i ? 0 : f(r.paddingLeft),
            b = i ? 0 : f(r.borderTopWidth),
            y = i ? 0 : f(r.borderRightWidth),
            S = i ? 0 : f(r.borderBottomWidth),
            A = i ? 0 : f(r.borderLeftWidth),
            N = T + v,
            C = E + I,
            R = A + y,
            O = b + S,
            D = g ? e.offsetHeight - O - e.clientHeight : 0,
            L = m ? e.offsetWidth - R - e.clientWidth : 0,
            x = o ? N + R : 0,
            w = o ? C + O : 0,
            P = i ? i.width : f(r.width) - x - L,
            M = i ? i.height : f(r.height) - w - D,
            k = P + N + L + R,
            U = M + C + D + O,
            B = Object.freeze({
                devicePixelContentBoxSize: _(Math.round(P * devicePixelRatio), Math.round(M * devicePixelRatio), p),
                borderBoxSize: _(k, U, p),
                contentBoxSize: _(P, M, p),
                contentRect: new a.N(T, E, P, M)
            });
        return l.set(e, B), B;
    },
    m = function (e, n, r) {
        var a = p(e, r),
            s = a.borderBoxSize,
            o = a.contentBoxSize,
            l = a.devicePixelContentBoxSize;
        switch (n) {
            case i.z.DEVICE_PIXEL_CONTENT_BOX:
                return l;
            case i.z.BORDER_BOX:
                return s;
            default:
                return o;
        }
    };
