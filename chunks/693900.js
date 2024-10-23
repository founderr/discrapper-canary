n.d(t, {
    n: function () {
        return m;
    },
    t: function () {
        return p;
    }
}),
    n(47120);
var o = n(200651),
    s = n(192379),
    r = n(100621),
    a = n(442837),
    l = n(481060),
    i = n(393238),
    c = n(110924),
    d = n(607070);
let u = s.createContext({
    springConfig: {},
    isExpanded: !1
});
function p(e) {
    let t = s.useMemo(
        () => ({
            springConfig: e.springConfig,
            isExpanded: e.isExpanded
        }),
        [e.springConfig, e.isExpanded]
    );
    return (0, o.jsx)(u.Provider, {
        value: t,
        children: e.children
    });
}
function m(e) {
    var t;
    let { children: n } = e,
        { springConfig: p, isExpanded: m } = s.useContext(u),
        x = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        { ref: C, height: g = null } = (0, i.Z)(),
        _ = null !== (t = (0, c.Z)(g)) && void 0 !== t ? t : null,
        [{ height: f }, h] = (0, l.useSpring)(() => ({
            from: { height: 0 },
            config: p
        }));
    return (
        s.useLayoutEffect(() => {
            null !== g &&
                h({
                    height: g,
                    immediate: !m || x || null === _
                });
        }, [g, h, m, x, _]),
        (0, o.jsx)(r.animated.div, {
            style: {
                height: null === _ ? 'auto' : f,
                overflow: 'hidden'
            },
            children: (0, o.jsx)('div', {
                style: { overflow: 'hidden' },
                ref: C,
                children: n
            })
        })
    );
}
