t.r(n);
var i = t(200651),
    r = t(192379),
    a = t(597846),
    c = t(885006),
    o = t(278788),
    u = t(516604),
    l = t(936003);
let s = () => {
    let e = (0, c.Z)(),
        n = r.useMemo(
            () => ({
                w: e.width,
                h: e.height
            }),
            [e]
        ),
        t = (0, u.Z)(n, 90);
    return (0, i.jsx)('div', {
        className: l.canvasWrapper,
        id: 'simple-confetti-canvas',
        children: (0, i.jsx)(a.z, {
            size: n,
            drawCallback: (e, n) => {
                t.update(n), t.draw(e);
            }
        })
    });
};
n.default = () => ((0, o.kf)('ConfettiCanvasComponent') ? (0, i.jsx)(s, {}) : null);
