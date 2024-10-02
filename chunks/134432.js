n.d(t, {
    Q4: function () {
        return O;
    },
    Vv: function () {
        return g;
    },
    oO: function () {
        return A;
    },
    po: function () {
        return S;
    },
    x_: function () {
        return d.Z;
    }
});
var r = n(47120);
var i = n(392711),
    a = n.n(i),
    o = n(31775),
    s = n.n(o),
    l = n(664751),
    u = n(261470),
    c = n(931619),
    d = n(921948),
    _ = n(981631);
let E = 5,
    f = /\.webp($|\?|#)/i,
    h = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
    p = new (s())({ max: 1000 });
function m(e, t) {
    null == e.backoff && (e.backoff = new u.Z());
    let { backoff: n } = e;
    return async () => {
        await c.Z.isOnline(),
            n.fails < E
                ? n.fail(() => {
                      I(e);
                  })
                : T(!0, e, t);
    };
}
function I(e) {
    let t = new Image();
    (t.onerror = m(e, t)),
        (t.onload = () => {
            let { backoff: n } = e;
            null != n && n.succeed(), T(!1, e, t);
        }),
        (t.src = e.url);
}
function T(e, t, n) {
    let { callbacks: r, url: i } = t;
    if (e) p.del(i);
    else {
        let { width: e, height: r } = n;
        (t = {
            url: i,
            loaded: !0,
            width: e,
            height: r
        }),
            p.set(i, t);
    }
    null != r && r.forEach((n) => n(e, t));
}
function g(e) {
    let t = p.get(e);
    return null != t && t.loaded;
}
function S(e, t) {
    let n = p.get(e);
    if (null != n && n.loaded)
        return (
            null != t &&
                c.Z.awaitOnline().then(() => {
                    null != n &&
                        null != n.callbacks &&
                        n.callbacks.forEach((t) => {
                            null != n
                                ? t(!1, n)
                                : t(!0, {
                                      url: e,
                                      loaded: !0
                                  });
                        });
                }),
            _.dG4
        );
    {
        let r;
        return (
            null == n &&
                ((n = {
                    url: e,
                    loaded: !1
                }),
                p.set(e, n),
                I(n)),
            null != t && ((r = t.bind(null)), null == n.callbacks && (n.callbacks = new Set()), n.callbacks.add(r)),
            () => {
                null != r && null != n && (null != n.callbacks && n.callbacks.delete(r), null != n.backoff && n.backoff.cancel());
            }
        );
    }
}
function A(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (n) {
        let t = h.filter((t) => t <= e).pop();
        if (null != t && e / t <= 1.25) return t;
    }
    return null !== (t = h.find((t) => e <= t)) && void 0 !== t ? t : h[h.length - 1];
}
function v(e) {
    let [t, n] = e.split('?');
    return [t, l.parse(n)];
}
function N(e) {
    let { src: t, sourceWidth: n, sourceHeight: r, targetWidth: i, targetHeight: o, format: s = null, quality: u = null, animated: c = !1, srcIsAnimated: d = !1 } = e,
        [_, E] = v(t);
    return null != s && (E.format = s), null != u && (E.quality = u), c && d && f.test(t) && (E.animated = !0), (i !== n || o !== r) && ((E.width = 0 | i), (E.height = 0 | o)), !a().isEmpty(E) && (_ += '?' + l.stringify(E)), _;
}
function O(e) {
    let { src: t, width: n, height: r, maxWidth: i, maxHeight: a, ratio: o = 1, format: s = null, quality: l = null, animated: u = !1, srcIsAnimated: c = !1 } = e,
        _ = n,
        E = r;
    o < 1 && ((_ = Math.round(n * o)), (E = Math.round(r * o))), null != i && (_ = Math.min(_, i)), null != a && (E = Math.min(E, a));
    let f = (0, d.Z)();
    return (
        (_ *= f),
        N({
            src: t,
            sourceWidth: n,
            sourceHeight: r,
            targetWidth: _,
            targetHeight: (E *= f),
            format: s,
            quality: l,
            animated: u,
            srcIsAnimated: c
        })
    );
}
