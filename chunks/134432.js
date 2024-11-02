n.d(t, {
    Q4: function () {
        return I;
    },
    Vv: function () {
        return g;
    },
    oO: function () {
        return v;
    },
    po: function () {
        return E;
    },
    x_: function () {
        return c.Z;
    }
}),
    n(47120);
var r = n(392711),
    i = n.n(r),
    a = n(31775),
    s = n.n(a),
    o = n(664751),
    l = n(261470),
    u = n(931619),
    c = n(921948),
    d = n(981631);
let f = /\.webp($|\?|#)/i,
    _ = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
    h = new (s())({ max: 1000 });
function p(e) {
    let t = new Image();
    (t.onerror = (function (e, t) {
        null == e.backoff && (e.backoff = new l.Z());
        let { backoff: n } = e;
        return async () => {
            await u.Z.isOnline(),
                n.fails < 5
                    ? n.fail(() => {
                          p(e);
                      })
                    : m(!0, e, t);
        };
    })(e, t)),
        (t.onload = () => {
            let { backoff: n } = e;
            null != n && n.succeed(), m(!1, e, t);
        }),
        (t.src = e.url);
}
function m(e, t, n) {
    let { callbacks: r, url: i } = t;
    if (e) h.del(i);
    else {
        let { width: e, height: r } = n;
        (t = {
            url: i,
            loaded: !0,
            width: e,
            height: r
        }),
            h.set(i, t);
    }
    null != r && r.forEach((n) => n(e, t));
}
function g(e) {
    let t = h.get(e);
    return null != t && t.loaded;
}
function E(e, t) {
    let n = h.get(e);
    if (null != n && n.loaded)
        return (
            null != t &&
                u.Z.awaitOnline().then(() => {
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
            d.dG4
        );
    {
        let r;
        return (
            null == n &&
                ((n = {
                    url: e,
                    loaded: !1
                }),
                h.set(e, n),
                p(n)),
            null != t && ((r = t.bind(null)), null == n.callbacks && (n.callbacks = new Set()), n.callbacks.add(r)),
            () => {
                null != r && null != n && (null != n.callbacks && n.callbacks.delete(r), null != n.backoff && n.backoff.cancel());
            }
        );
    }
}
function v(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (n) {
        let t = _.filter((t) => t <= e).pop();
        if (null != t && e / t <= 1.25) return t;
    }
    return null !== (t = _.find((t) => e <= t)) && void 0 !== t ? t : _[_.length - 1];
}
function I(e) {
    let { src: t, width: n, height: r, maxWidth: a, maxHeight: s, ratio: l = 1, format: u = null, quality: d = null, animated: _ = !1, srcIsAnimated: h = !1 } = e,
        p = n,
        m = r;
    l < 1 && ((p = Math.round(n * l)), (m = Math.round(r * l))), null != a && (p = Math.min(p, a)), null != s && (m = Math.min(m, s));
    let g = (0, c.Z)();
    return (
        (p *= g),
        (function (e) {
            let { src: t, sourceWidth: n, sourceHeight: r, targetWidth: a, targetHeight: s, format: l = null, quality: u = null, animated: c = !1, srcIsAnimated: d = !1 } = e,
                [_, h] = (function (e) {
                    let [t, n] = e.split('?');
                    return [t, o.parse(n)];
                })(t);
            return null != l && (h.format = l), null != u && (h.quality = u), c && d && f.test(t) && (h.animated = !0), (a !== n || s !== r) && ((h.width = 0 | a), (h.height = 0 | s)), !i().isEmpty(h) && (_ += '?' + o.stringify(h)), _;
        })({
            src: t,
            sourceWidth: n,
            sourceHeight: r,
            targetWidth: p,
            targetHeight: (m *= g),
            format: u,
            quality: d,
            animated: _,
            srcIsAnimated: h
        })
    );
}
