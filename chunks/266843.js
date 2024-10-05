n.d(t, {
    O: function () {
        return l;
    },
    h: function () {
        return r;
    }
}),
    n(47120);
var s = n(470079),
    a = n(481060),
    i = n(393238),
    o = n(87894);
function r() {
    let e = s.useRef(null),
        [t, n] = s.useState('lg'),
        [a, r] = s.useState(void 0);
    return (
        (0, i.P)(e, (e) => {
            let { width: t, scrollHeight: s } = e;
            return (r(s), null == t || t > o.j2) ? n('lg') : t > o.Z0 ? n('sm') : n('xs');
        }),
        {
            containerRef: e,
            size: t,
            height: a
        }
    );
}
function l(e) {
    let { initiallyExpanded: t } = e,
        [n, i] = s.useState(t),
        [o, r] = s.useState(!1),
        l = s.useCallback(() => {
            i((e) => !e), r(!0);
        }, []),
        { expansionSpring: u } = (0, a.useSpring)({
            expansionSpring: n ? 1 : 0,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => r(!1)
        });
    return {
        expansionSpring: u,
        isAnimating: o,
        isExpanded: n,
        toggleExpanded: l
    };
}
