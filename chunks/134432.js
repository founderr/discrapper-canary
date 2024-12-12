r.d(n, {
    Q4: function () {
        return N;
    },
    Vv: function () {
        return T;
    },
    oO: function () {
        return y;
    },
    po: function () {
        return b;
    },
    x_: function () {
        return f.Z;
    }
});
var i = r(47120);
var a = r(392711),
    s = r.n(a),
    o = r(31775),
    l = r.n(o),
    u = r(664751),
    c = r(261470),
    d = r(931619),
    f = r(921948),
    _ = r(981631);
let h = 5,
    p = /\.webp($|\?|#)/i,
    m = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
    g = new (l())({ max: 1000 });
function E(e, n) {
    null == e.backoff && (e.backoff = new c.Z());
    let { backoff: r } = e;
    return async () => {
        await d.Z.isOnline(),
            r.fails < h
                ? r.fail(() => {
                      v(e);
                  })
                : I(!0, e, n);
    };
}
function v(e) {
    let n = new Image();
    (n.onerror = E(e, n)),
        (n.onload = () => {
            let { backoff: r } = e;
            null != r && r.succeed(), I(!1, e, n);
        }),
        (n.src = e.url);
}
function I(e, n, r) {
    let { callbacks: i, url: a } = n;
    if (e) g.del(a);
    else {
        let { width: e, height: i } = r;
        (n = {
            url: a,
            loaded: !0,
            width: e,
            height: i
        }),
            g.set(a, n);
    }
    null != i && i.forEach((r) => r(e, n));
}
function T(e) {
    let n = g.get(e);
    return null != n && n.loaded;
}
function b(e, n) {
    let r = g.get(e);
    if (null != r && r.loaded)
        return (
            null != n &&
                d.Z.awaitOnline().then(() => {
                    null != r &&
                        null != r.callbacks &&
                        r.callbacks.forEach((n) => {
                            null != r
                                ? n(!1, r)
                                : n(!0, {
                                      url: e,
                                      loaded: !0
                                  });
                        });
                }),
            _.dG4
        );
    {
        let i;
        return (
            null == r &&
                ((r = {
                    url: e,
                    loaded: !1
                }),
                g.set(e, r),
                v(r)),
            null != n && ((i = n.bind(null)), null == r.callbacks && (r.callbacks = new Set()), r.callbacks.add(i)),
            () => {
                null != i && null != r && (null != r.callbacks && r.callbacks.delete(i), null != r.backoff && r.backoff.cancel());
            }
        );
    }
}
function y(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (r) {
        let n = m.filter((n) => n <= e).pop();
        if (null != n && e / n <= 1.25) return n;
    }
    return null !== (n = m.find((n) => e <= n)) && void 0 !== n ? n : m[m.length - 1];
}
function S(e) {
    let [n, r] = e.split('?');
    return [n, u.parse(r)];
}
function A(e) {
    let { src: n, sourceWidth: r, sourceHeight: i, targetWidth: a, targetHeight: o, format: l = null, quality: c = null, animated: d = !1, srcIsAnimated: f = !1 } = e;
    if (n.startsWith('data:image')) return n;
    let [_, h] = S(n);
    return null != l && (h.format = l), null != c && (h.quality = c), d && f && p.test(n) && (h.animated = !0), (a !== r || o !== i) && ((h.width = 0 | a), (h.height = 0 | o)), !s().isEmpty(h) && (_ += '?' + u.stringify(h)), _;
}
function N(e) {
    let { src: n, width: r, height: i, maxWidth: a, maxHeight: s, ratio: o = 1, format: l = null, quality: u = null, animated: c = !1, srcIsAnimated: d = !1 } = e,
        _ = r,
        h = i;
    o < 1 && ((_ = Math.round(r * o)), (h = Math.round(i * o))), null != a && (_ = Math.min(_, a)), null != s && (h = Math.min(h, s));
    let p = (0, f.Z)();
    return (
        (_ *= p),
        A({
            src: n,
            sourceWidth: r,
            sourceHeight: i,
            targetWidth: _,
            targetHeight: (h *= p),
            format: l,
            quality: u,
            animated: c,
            srcIsAnimated: d
        })
    );
}
