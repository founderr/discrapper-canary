n.d(t, {
    Y: function () {
        return g;
    },
    u: function () {
        return m;
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
    f = /msie|trident/i.test(l.C.navigator && l.C.navigator.userAgent),
    _ = function (e) {
        return parseFloat(e || '0');
    },
    p = function (e, t, n) {
        return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = !1), new i.D((n ? t : e) || 0, (n ? e : t) || 0);
    },
    h = (0, o.v)({
        devicePixelContentBoxSize: p(),
        borderBoxSize: p(),
        contentBoxSize: p(),
        contentRect: new a.N(0, 0, 0, 0)
    }),
    m = function (e, t) {
        if ((void 0 === t && (t = !1), u.has(e) && !t)) return u.get(e);
        if ((0, s.xj)(e)) return u.set(e, h), h;
        var n = getComputedStyle(e),
            r = (0, s.zd)(e) && e.ownerSVGElement && e.getBBox(),
            i = !f && 'border-box' === n.boxSizing,
            l = d.test(n.writingMode || ''),
            m = !r && c.test(n.overflowY || ''),
            g = !r && c.test(n.overflowX || ''),
            E = r ? 0 : _(n.paddingTop),
            v = r ? 0 : _(n.paddingRight),
            I = r ? 0 : _(n.paddingBottom),
            b = r ? 0 : _(n.paddingLeft),
            T = r ? 0 : _(n.borderTopWidth),
            S = r ? 0 : _(n.borderRightWidth),
            y = r ? 0 : _(n.borderBottomWidth),
            A = r ? 0 : _(n.borderLeftWidth),
            N = b + v,
            C = E + I,
            R = A + S,
            O = T + y,
            D = g ? e.offsetHeight - O - e.clientHeight : 0,
            L = m ? e.offsetWidth - R - e.clientWidth : 0,
            x = r ? r.width : _(n.width) - (i ? N + R : 0) - L,
            w = r ? r.height : _(n.height) - (i ? C + O : 0) - D,
            M = x + N + L + R,
            P = w + C + D + O,
            k = (0, o.v)({
                devicePixelContentBoxSize: p(Math.round(x * devicePixelRatio), Math.round(w * devicePixelRatio), l),
                borderBoxSize: p(M, P, l),
                contentBoxSize: p(x, w, l),
                contentRect: new a.N(b, E, x, w)
            });
        return u.set(e, k), k;
    },
    g = function (e, t, n) {
        var i = m(e, n),
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
