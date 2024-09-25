var r,
    i = n(411104);
var a = n(735250);
n(470079);
var o = n(120356),
    s = n.n(o),
    l = n(325767),
    u = n(865244);
function c(e) {
    switch (e) {
        case 'LEFT':
            return u.left;
        case 'RIGHT':
            return u.right;
        case 'UP':
            return null;
        case 'DOWN':
            return u.down;
        case 'UP_LEFT':
            return u.upLeft;
        case 'DOWN_RIGHT':
            return u.downRight;
        default:
            throw Error('Invalid Direction '.concat(e));
    }
}
!(function (e) {
    (e.LEFT = 'LEFT'), (e.RIGHT = 'RIGHT'), (e.UP = 'UP'), (e.DOWN = 'DOWN'), (e.UP_LEFT = 'UP_LEFT'), (e.DOWN_RIGHT = 'DOWN_RIGHT');
})(r || (r = {}));
let d = (e) => {
    let { width: t = 24, height: n = 24, color: r = 'currentColor', direction: i, foreground: o, className: u, title: d, ..._ } = e;
    return (0, a.jsxs)('svg', {
        ...(0, l.Z)(_),
        width: t,
        height: n,
        className: s()(u, c(i)),
        viewBox: '0 0 24 24',
        children: [
            null != d ? (0, a.jsx)('title', { children: d }) : null,
            (0, a.jsx)('polygon', {
                className: o,
                fill: r,
                fillRule: 'nonzero',
                points: '13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
            })
        ]
    });
};
(d.Directions = r), (t.Z = d);
