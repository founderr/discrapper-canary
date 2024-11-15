n(411104);
var o,
    i,
    a = n(200651);
n(192379);
var r = n(120356),
    c = n.n(r),
    l = n(325767),
    s = n(785798);
((i = o || (o = {})).LEFT = 'LEFT'), (i.RIGHT = 'RIGHT'), (i.UP = 'UP'), (i.DOWN = 'DOWN'), (i.UP_LEFT = 'UP_LEFT'), (i.DOWN_RIGHT = 'DOWN_RIGHT');
let u = (e) => {
    let { width: t = 24, height: n = 24, color: o = 'currentColor', direction: i, foreground: r, className: u, title: d, ..._ } = e;
    return (0, a.jsxs)('svg', {
        ...(0, l.Z)(_),
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
            })(i)
        ),
        viewBox: '0 0 24 24',
        children: [
            null != d ? (0, a.jsx)('title', { children: d }) : null,
            (0, a.jsx)('polygon', {
                className: r,
                fill: o,
                fillRule: 'nonzero',
                points: '13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
            })
        ]
    });
};
(u.Directions = o), (t.Z = u);
