n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(100621),
    a = n(849146),
    l = n(481060);
let o = () => {
    let e = r.useRef(null),
        [t, n] = r.useState(0),
        i = r.useMemo(
            () =>
                new a.Z((e) => {
                    let [t] = e;
                    return n(t.contentRect.height);
                }),
            []
        );
    return (
        r.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]),
        {
            ref: e,
            height: t
        }
    );
};
function c(e) {
    let { show: t, children: n, top: r = 0, bottom: a = 0 } = e,
        { ref: c, height: u } = o(),
        d = (0, l.useSpring)({
            from: {
                height: 0,
                paddingBottom: '0px',
                marginTop: '0px'
            },
            to: {
                height: t ? u : 0,
                paddingBottom: t ? ''.concat(a, 'px') : '0px',
                marginTop: t ? ''.concat(r, 'px') : '0px'
            },
            config: {
                tension: 170,
                friction: 26
            }
        }),
        h = (0, l.useSpring)({
            from: { opacity: 0 },
            to: { opacity: t ? 1 : 0 },
            config: {
                duration: 200,
                easing: t ? (e) => e ** 4 : (e) => e * (2 - e)
            }
        });
    return (0, i.jsx)(s.animated.div, {
        style: {
            overflow: 'hidden',
            height: d.height,
            paddingBottom: d.paddingBottom,
            marginTop: d.marginTop
        },
        children: (0, i.jsx)(s.animated.div, {
            style: { opacity: h.opacity },
            ref: c,
            children: n
        })
    });
}
