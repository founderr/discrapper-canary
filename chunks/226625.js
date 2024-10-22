n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(100621),
    d = n(442837),
    u = n(481060),
    _ = n(607070),
    E = n(317539);
let h = {
    mass: 10,
    tension: 550,
    friction: 140
};
function m(e) {
    let { className: t, pageMultiplier: n } = e,
        s = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
        [l, m] = a.useState({
            x: 0,
            y: 0
        }),
        I = a.useMemo(
            () =>
                o().throttle((e) => {
                    if (s) return;
                    let t = (window.innerWidth - e.pageX * n) / 90;
                    m({
                        x: t,
                        y: (window.innerHeight - e.pageY * n) / 90
                    });
                }, 20),
            [n, s]
        );
    a.useEffect(() => (window.addEventListener('mousemove', I), () => window.removeEventListener('mousemove', I)), [I]);
    let [p, g] = (0, u.useSpring)(() => ({
        x: 0,
        y: 0,
        config: h
    }));
    return (
        a.useEffect(() => {
            g({
                x: l.x,
                y: l.y
            });
        }, [l.x, l.y, g]),
        (0, i.jsx)(c.animated.div, {
            style: {
                transform: (0, c.to)([p.x, p.y], (e, t) => 'translate3d('.concat(e, 'px, ').concat(t, 'px, 0)'))
            },
            className: r()(E.background, t)
        })
    );
}
