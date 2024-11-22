n.d(t, {
    Z: function () {
        return l;
    }
});
var o = n(200651),
    r = n(192379),
    s = n(100621),
    a = n(613087);
function l(e) {
    let { expansionSpring: t, isExpanded: n } = e,
        { animatedComponentProps: l, recalculateAnimationPositions: i, mountPoints: c } = r.useContext(a.B$);
    return (
        r.useEffect(() => {
            i();
        }, [i, n]),
        (0, o.jsx)('div', {
            style: {
                overflow: 'hidden',
                pointerEvents: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 5
            },
            children: l.map((e) => {
                let { id: n, collapsedLeft: r, expandedLeft: a, collapsedTop: l, expandedTop: i, width: d } = e,
                    u = c.get(n);
                return (0, o.jsx)(
                    s.animated.div,
                    {
                        ref: u,
                        style: {
                            zIndex: 2,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: d,
                            transform: (0, s.to)(
                                [
                                    t.to({
                                        range: [0, 1],
                                        output: [r, a]
                                    }),
                                    t.to({
                                        range: [0, 1],
                                        output: [l, i]
                                    })
                                ],
                                (e, t) => 'translate('.concat(e, 'px, ').concat(t, 'px)')
                            )
                        }
                    },
                    n
                );
            })
        })
    );
}
