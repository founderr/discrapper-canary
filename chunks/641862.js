r.d(n, {
    Y: function () {
        return E;
    },
    u: function () {
        return g;
    }
});
var i = r(175730),
    a = r(878369),
    s = r(670732),
    o = r(839826),
    l = r(721056),
    u = r(388388),
    c = new WeakMap(),
    d = /auto|scroll/,
    f = /^tb|vertical/,
    _ = /msie|trident/i.test(u.C.navigator && u.C.navigator.userAgent),
    h = function (e) {
        return parseFloat(e || '0');
    },
    p = function (e, n, r) {
        return void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = !1), new a.D((r ? n : e) || 0, (r ? e : n) || 0);
    },
    m = (0, l.v)({
        devicePixelContentBoxSize: p(),
        borderBoxSize: p(),
        contentBoxSize: p(),
        contentRect: new s.N(0, 0, 0, 0)
    }),
    g = function (e, n) {
        if ((void 0 === n && (n = !1), c.has(e) && !n)) return c.get(e);
        if ((0, o.xj)(e)) return c.set(e, m), m;
        var r = getComputedStyle(e),
            i = (0, o.zd)(e) && e.ownerSVGElement && e.getBBox(),
            a = !_ && 'border-box' === r.boxSizing,
            u = f.test(r.writingMode || ''),
            g = !i && d.test(r.overflowY || ''),
            E = !i && d.test(r.overflowX || ''),
            v = i ? 0 : h(r.paddingTop),
            I = i ? 0 : h(r.paddingRight),
            T = i ? 0 : h(r.paddingBottom),
            b = i ? 0 : h(r.paddingLeft),
            y = i ? 0 : h(r.borderTopWidth),
            S = i ? 0 : h(r.borderRightWidth),
            A = i ? 0 : h(r.borderBottomWidth),
            N = i ? 0 : h(r.borderLeftWidth),
            C = b + I,
            R = v + T,
            O = N + S,
            D = y + A,
            L = E ? e.offsetHeight - D - e.clientHeight : 0,
            x = g ? e.offsetWidth - O - e.clientWidth : 0,
            w = a ? C + O : 0,
            P = a ? R + D : 0,
            M = i ? i.width : h(r.width) - w - x,
            k = i ? i.height : h(r.height) - P - L,
            U = M + C + x + O,
            B = k + R + L + D,
            G = (0, l.v)({
                devicePixelContentBoxSize: p(Math.round(M * devicePixelRatio), Math.round(k * devicePixelRatio), u),
                borderBoxSize: p(U, B, u),
                contentBoxSize: p(M, k, u),
                contentRect: new s.N(b, v, M, k)
            });
        return c.set(e, G), G;
    },
    E = function (e, n, r) {
        var a = g(e, r),
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
