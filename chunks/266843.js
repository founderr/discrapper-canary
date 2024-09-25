n.d(t, {
    O: function () {
        return u;
    },
    h: function () {
        return l;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(481060),
    o = n(393238),
    s = n(87894);
function l() {
    let e = i.useRef(null),
        [t, n] = i.useState('lg'),
        [r, a] = i.useState(void 0);
    return (
        (0, o.P)(e, (e) => {
            let { width: t, scrollHeight: r } = e;
            return (a(r), null == t || t > s.j2) ? n('lg') : t > s.Z0 ? n('sm') : n('xs');
        }),
        {
            containerRef: e,
            size: t,
            height: r
        }
    );
}
function u(e) {
    let { initiallyExpanded: t } = e,
        [n, r] = i.useState(t),
        [o, s] = i.useState(!1),
        l = i.useCallback(() => {
            r((e) => !e), s(!0);
        }, []),
        { expansionSpring: u } = (0, a.useSpring)({
            expansionSpring: n ? 1 : 0,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => s(!1)
        });
    return {
        expansionSpring: u,
        isAnimating: o,
        isExpanded: n,
        toggleExpanded: l
    };
}
