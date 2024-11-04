n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(100621),
    r = n(481060);
function s(e) {
    let { children: t, className: n, flashKey: s } = e,
        o = (0, r.useToken)(r.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT).spring({ opacity: 1 }),
        c = (0, r.useToken)(r.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT).spring({ opacity: 0 }),
        [d, u] = (0, r.useSpring)(() => ({ from: { backgroundColor: o } }), 'animate-never');
    return (
        l.useEffect(() => {
            u({
                reset: !0,
                immediate: !0,
                to: { backgroundColor: o }
            }),
                u({
                    delay: 1000,
                    immediate: !1,
                    to: { backgroundColor: c }
                });
        }, [s, u]),
        (0, i.jsx)(a.animated.div, {
            style: d,
            className: n,
            children: t
        })
    );
}
