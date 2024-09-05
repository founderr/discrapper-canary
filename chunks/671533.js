n(411104);
var i,
    o,
    r = n(735250);
n(470079);
var a = n(120356),
    c = n.n(a),
    l = n(325767),
    s = n(24701);
((o = i || (i = {})).LEFT = 'LEFT'), (o.RIGHT = 'RIGHT'), (o.UP = 'UP'), (o.DOWN = 'DOWN'), (o.UP_LEFT = 'UP_LEFT'), (o.DOWN_RIGHT = 'DOWN_RIGHT');
let u = (e) => {
    let { width: t = 24, height: n = 24, color: i = 'currentColor', direction: o, foreground: a, className: u, title: d, ...g } = e;
    return (0, r.jsxs)('svg', {
        ...(0, l.Z)(g),
        width: t,
        height: n,
        className: c()(
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
            })(o)
        ),
        viewBox: '0 0 24 24',
        children: [
            null != d ? (0, r.jsx)('title', { children: d }) : null,
            (0, r.jsx)('polygon', {
                className: a,
                fill: i,
                fillRule: 'nonzero',
                points: '13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
            })
        ]
    });
};
(u.Directions = i), (t.Z = u);
