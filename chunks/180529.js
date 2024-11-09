n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    o = n(100621),
    s = n(849146),
    r = n(481060);
let l = () => {
    let e = a.useRef(null),
        [t, n] = a.useState(0),
        i = a.useMemo(
            () =>
                new s.Z((e) => {
                    let [t] = e;
                    return n(t.contentRect.height);
                }),
            []
        );
    return (
        a.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]),
        {
            ref: e,
            height: t
        }
    );
};
function u(e) {
    let { show: t, children: n, top: a = 0, bottom: s = 0 } = e,
        { ref: u, height: d } = l(),
        c = (0, r.useSpring)({
            from: {
                height: 0,
                paddingBottom: '0px',
                marginTop: '0px'
            },
            to: {
                height: t ? d : 0,
                paddingBottom: t ? ''.concat(s, 'px') : '0px',
                marginTop: t ? ''.concat(a, 'px') : '0px'
            },
            config: {
                tension: 170,
                friction: 26
            }
        }),
        g = (0, r.useSpring)({
            from: { opacity: 0 },
            to: { opacity: t ? 1 : 0 },
            config: {
                duration: 200,
                easing: t ? (e) => e ** 4 : (e) => e * (2 - e)
            }
        });
    return (0, i.jsx)(o.animated.div, {
        style: {
            overflow: 'hidden',
            height: c.height,
            paddingBottom: c.paddingBottom,
            marginTop: c.marginTop
        },
        children: (0, i.jsx)(o.animated.div, {
            style: { opacity: g.opacity },
            ref: u,
            children: n
        })
    });
}
