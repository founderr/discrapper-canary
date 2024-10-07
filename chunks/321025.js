n.d(t, {
    Z: function () {
        return l;
    }
});
var o = n(735250),
    s = n(470079),
    r = n(212433),
    a = n(613087);
function l(e) {
    let { expansionSpring: t, isExpanded: n } = e,
        { animatedComponentProps: l, recalculateAnimationPositions: i, mountPoints: c } = s.useContext(a.B$);
    return (
        s.useEffect(() => {
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
                let { id: n, collapsedLeft: s, expandedLeft: a, collapsedTop: l, expandedTop: i, width: d } = e,
                    u = c.get(n);
                return (0, o.jsx)(
                    r.animated.div,
                    {
                        ref: u,
                        style: {
                            zIndex: 2,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: d,
                            transform: (0, r.to)(
                                [
                                    t.to({
                                        range: [0, 1],
                                        output: [s, a]
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
