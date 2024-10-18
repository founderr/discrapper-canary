t(411104);
var c,
    a,
    l = t(735250);
t(470079);
var o = t(120356),
    r = t.n(o),
    i = t(325767),
    s = t(865244);
((a = c || (c = {})).LEFT = 'LEFT'), (a.RIGHT = 'RIGHT'), (a.UP = 'UP'), (a.DOWN = 'DOWN'), (a.UP_LEFT = 'UP_LEFT'), (a.DOWN_RIGHT = 'DOWN_RIGHT');
let u = (e) => {
    let { width: n = 24, height: t = 24, color: c = 'currentColor', direction: a, foreground: o, className: u, title: T, ...E } = e;
    return (0, l.jsxs)('svg', {
        ...(0, i.Z)(E),
        width: n,
        height: t,
        className: r()(
            u,
            (function (e) {
                switch (e) {
                    case 'LEFT':
                        return s.left;
                    case 'RIGHT':
                        return s.right;
                    case 'UP':
                        return null;
                    case 'DOWN':
                        return s.down;
                    case 'UP_LEFT':
                        return s.upLeft;
                    case 'DOWN_RIGHT':
                        return s.downRight;
                    default:
                        throw Error('Invalid Direction '.concat(e));
                }
            })(a)
        ),
        viewBox: '0 0 24 24',
        children: [
            null != T ? (0, l.jsx)('title', { children: T }) : null,
            (0, l.jsx)('polygon', {
                className: o,
                fill: c,
                fillRule: 'nonzero',
                points: '13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
            })
        ]
    });
};
(u.Directions = c), (n.Z = u);
