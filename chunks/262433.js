n.d(t, {
    U: function () {
        return f;
    },
    Z: function () {
        return C;
    }
}),
    n(653041);
var i = n(392711),
    l = n.n(i),
    r = n(772848),
    a = n(903797),
    s = n(731965),
    o = n(125268),
    c = n(673125),
    u = n(292793),
    d = n(88315),
    h = n(199766),
    m = n(813900);
let p = {
        X_OFFSET: 2 * m.qh,
        Y_OFFSET: 25,
        X_SPEED: 0.5,
        Y_SPEED_MIN: -1,
        Y_SPEED_MAX: -5,
        OPACITY: 1,
        OPACITY_SPEED_MIN: 0.01,
        OPACITY_SPEED_MAX: 0.05,
        SIZE_MIN: m.qh / 2,
        SIZE_MAX: m.qh
    },
    f = (0, a.Z)(() => ({
        particles: {},
        lastSpawned: {}
    }));
function g(e, t) {
    var n;
    l()(null !== (n = f.getState().particles[e.id]) && void 0 !== n ? n : {}).forEach(t);
}
function C(e) {
    var t, n, i, a;
    let { emojiHose: C, context: x, canvasWidth: v, canvasHeight: _, fallbackColor: I, outlineColorDark: E, outlineColorLight: b, streamerId: S, deadDrawables: Z } = e;
    x.save();
    let T = c.Z.getEmojiImage(null !== (n = null !== (t = C.emojiId) && void 0 !== t ? t : C.emojiName) && void 0 !== n ? n : ''),
        N = (0, d.np)(C.x, v),
        j = (0, d.np)(C.y, _),
        { outlineColor: A } = (0, d.bg)(C.userId, E, b, I);
    if (
        (g(C, (e) => {
            var t, n;
            return (
                (t = C),
                (n = e),
                void ((n.x += n.xSpeed * window.devicePixelRatio),
                (n.y += n.ySpeed * window.devicePixelRatio),
                (n.opacity -= n.opacitySpeed),
                n.opacity <= 0 &&
                    (0, s.j)(() => {
                        f.setState((e) => (delete e.particles[t.id][n.id], 0 === Object.keys(e.particles[t.id]).length && delete e.particles[t.id], e));
                    }))
            );
        }),
        !(function (e, t, n) {
            var i;
            let a = null !== (i = f.getState().lastSpawned[e.id]) && void 0 !== i ? i : 0,
                o = Date.now();
            if (!(a + 100 > o) && e.state !== u.f.STOP && !!(0.8 >= Math.random() || a + 300 < o))
                (0, s.j)(() => {
                    f.setState((i) => {
                        var a, s, o;
                        let c = null !== (a = i.particles[e.id]) && void 0 !== a ? a : {},
                            u = l().random(1, 2);
                        for (let e = 0; e < u; e++) {
                            let e =
                                ((s = t),
                                (o = n),
                                {
                                    id: (0, r.Z)(),
                                    x: s + l().random(-p.X_OFFSET, p.X_OFFSET),
                                    y: o + l().random(-p.Y_OFFSET, p.Y_OFFSET),
                                    xSpeed: l().random(-p.X_SPEED, p.X_SPEED),
                                    ySpeed: l().random(p.Y_SPEED_MIN, p.Y_SPEED_MAX),
                                    opacity: p.OPACITY,
                                    opacitySpeed: l().random(p.OPACITY_SPEED_MIN, p.OPACITY_SPEED_MAX),
                                    size: l().random(p.SIZE_MIN, p.SIZE_MAX)
                                });
                            c[e.id] = e;
                        }
                        return (i.particles[e.id] = c), (i.lastSpawned[e.id] = Date.now()), i;
                    });
                });
        })(C, N, j),
        (0, h.I)(x, N, j, A, m.q2),
        (0, h.T)(x, N, j, C.userId),
        g(C, (e) =>
            (function (e, t, n) {
                if (null == t) return;
                let i = n.size * window.devicePixelRatio,
                    l = n.x - (i / 2) * window.devicePixelRatio,
                    r = n.y - 1.2 * i * window.devicePixelRatio;
                (e.globalAlpha = n.opacity), e.drawImage(t, i / 2 + l, i / 2 + r, i, i);
            })(x, T, e)
        ),
        C.lastUpdatedAt + m.FO < Date.now() && (0, o.ZZ)(S, C),
        C.state === u.f.STOP && ((i = C), !(Object.keys(null !== (a = f.getState().particles[i.id]) && void 0 !== a ? a : {}).length > 0)))
    )
        Z.push(C);
    x.restore();
}
