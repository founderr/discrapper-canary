var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(325767),
    l = n(410760);
let u = {
        UP: l.directionUp,
        RIGHT: l.directionRight,
        DOWN: l.directionDown,
        LEFT: l.directionLeft
    },
    c = (e) => {
        let { direction: t = u.DOWN, width: n = 24, height: i = 24, color: c = 'currentColor', transition: d = l.transition, className: f, foreground: _, expanded: h, ...p } = e,
            { enabled: m } = (0, s.useRedesignIconContext)(),
            g = t;
        if ((!0 === h ? (g = u.DOWN) : !1 === h && (g = u.RIGHT), m)) {
            let e = {
                [u.UP]: s.ChevronSmallUpIcon,
                [u.DOWN]: s.ChevronSmallDownIcon,
                [u.LEFT]: s.ChevronSmallLeftIcon,
                [u.RIGHT]: s.ChevronSmallRightIcon
            }[g];
            return (0, r.jsx)(e, {
                ...p,
                className: f,
                size: 'custom',
                width: n,
                height: i,
                color: null != c ? c : 'currentColor',
                colorClass: _
            });
        }
        return (0, r.jsx)('svg', {
            className: a()(f, d, g),
            width: n,
            height: i,
            viewBox: '0 0 24 24',
            ...(0, o.Z)(p),
            children: (0, r.jsx)('path', {
                className: _,
                fill: 'none',
                stroke: c,
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M7 10L12 15 17 10',
                'aria-hidden': !0
            })
        });
    };
(c.Directions = u), (t.Z = c);
