n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(653041);
var i = n(88315),
    l = n(199766),
    r = n(813900);
function a(e) {
    let { line: t, context: n, canvasWidth: a, canvasHeight: s, fallbackColor: o, outlineColorDark: c, outlineColorLight: u, linesDrawnAt: d, deadDrawables: h } = e;
    null == d.current[t.id] && (d.current[t.id] = Date.now()), (n.lineCap = 'round'), (n.lineJoin = 'round');
    let m = t.points.map((e) => (0, i.RR)(e, a, s)),
        p = d.current[t.id],
        f = (e) => p + e.deltaTime,
        g = (e) => f(e) + 1500 >= Date.now(),
        C = (e) => f(e) <= Date.now() && g(e),
        x = m.find(C);
    if (null == x) {
        !g(t.points[t.points.length - 1]) && h.push(t);
        return;
    }
    let v = (e, t) => {
            let i = null;
            (n.lineWidth = t * window.devicePixelRatio), (n.strokeStyle = e), n.beginPath(), n.moveTo(x.x, x.y);
            for (let e = 1; e < m.length; e++) {
                let t = m[e];
                C(t) && (n.lineTo(t.x, t.y), (i = t));
            }
            return n.stroke(), i;
        },
        { fillColor: _, outlineColor: I } = (0, i.bg)(t.userId, c, u, o),
        E = v(I, 6 + r.q2),
        b = null != E && C(E);
    b && (0, l.I)(n, E.x, E.y, I, r.q2), v(_, 6), b && (0, l.T)(n, E.x, E.y, t.userId);
}
