n(411104);
var r,
    a,
    l = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    s = n(325767),
    c = n(485270);
((a = r || (r = {})).LEFT = 'LEFT'), (a.RIGHT = 'RIGHT'), (a.UP = 'UP'), (a.DOWN = 'DOWN'), (a.UP_LEFT = 'UP_LEFT'), (a.DOWN_RIGHT = 'DOWN_RIGHT');
let d = (e) => {
    let { width: t = 24, height: n = 24, color: r = 'currentColor', direction: a, foreground: i, className: d, title: u, ...h } = e;
    return (0, l.jsxs)('svg', {
        ...(0, s.Z)(h),
        width: t,
        height: n,
        className: o()(
            d,
            (function (e) {
                switch (e) {
                    case 'LEFT':
                        return c.left;
                    case 'RIGHT':
                        return c.right;
                    case 'UP':
                        return null;
                    case 'DOWN':
                        return c.down;
                    case 'UP_LEFT':
                        return c.upLeft;
                    case 'DOWN_RIGHT':
                        return c.downRight;
                    default:
                        throw Error('Invalid Direction '.concat(e));
                }
            })(a)
        ),
        viewBox: '0 0 24 24',
        children: [
            null != u ? (0, l.jsx)('title', { children: u }) : null,
            (0, l.jsx)('polygon', {
                className: i,
                fill: r,
                fillRule: 'nonzero',
                points: '13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
            })
        ]
    });
};
(d.Directions = r), (t.Z = d);
