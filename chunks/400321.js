n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(653041);
var i = n(88315),
    s = n(199766),
    a = n(813900);
function l(e) {
    let { line: t, context: n, canvasWidth: l, canvasHeight: r, fallbackColor: o, outlineColorDark: c, outlineColorLight: u, linesDrawnAt: d, deadDrawables: h } = e;
    null == d.current[t.id] && (d.current[t.id] = Date.now()), (n.lineCap = 'round'), (n.lineJoin = 'round');
    let m = t.points.map((e) => (0, i.RR)(e, l, r)),
        p = d.current[t.id],
        _ = (e) => p + e.deltaTime,
        f = (e) => _(e) + 1500 >= Date.now(),
        E = (e) => _(e) <= Date.now() && f(e),
        g = m.find(E);
    if (null == g) {
        !f(t.points[t.points.length - 1]) && h.push(t);
        return;
    }
    let C = (e, t) => {
            let i = null;
            (n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(g.x, g.y);
            for (let e = 1; e < m.length; e++) {
                let t = m[e];
                E(t) && (n.lineTo(t.x, t.y), (i = t));
            }
            return n.stroke(), i;
        },
        { fillColor: I, outlineColor: T } = (0, i.bg)(t.userId, c, u, o),
        x = C(T, 6 + a.q2),
        S = null != x && E(x);
    S && (0, s.I)(n, x.x, x.y, T, a.q2), C(I, 6), S && (0, s.T)(n, x.x, x.y, t.userId);
}
