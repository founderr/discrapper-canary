n.d(t, {
    O: function () {
        return a;
    },
    h: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    s = n(481060),
    l = n(393238),
    r = n(87894);
function o() {
    let e = i.useRef(null),
        [t, n] = i.useState('lg'),
        [s, o] = i.useState(void 0);
    return (
        (0, l.P)(e, (e) => {
            let { width: t, scrollHeight: i } = e;
            return (o(i), null == t || t > r.j2) ? n('lg') : t > r.Z0 ? n('sm') : n('xs');
        }),
        {
            containerRef: e,
            size: t,
            height: s
        }
    );
}
function a(e) {
    let { initiallyExpanded: t } = e,
        [n, l] = i.useState(t),
        [r, o] = i.useState(!1),
        a = i.useCallback(() => {
            l((e) => !e), o(!0);
        }, []),
        { expansionSpring: u } = (0, s.useSpring)({
            expansionSpring: n ? 1 : 0,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => o(!1)
        });
    return {
        expansionSpring: u,
        isAnimating: r,
        isExpanded: n,
        toggleExpanded: a
    };
}
