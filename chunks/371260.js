var i = n(735250),
    a = n(470079),
    s = n(212433),
    r = n(442837),
    l = n(481060),
    o = n(607070),
    c = n(686907);
let d = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
t.Z = function (e) {
    let { animate: t, state: n, cleanUp: u, children: _ } = e,
        h = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
        E = a.useMemo(() => {
            var e, i, a;
            return (
                (e = !1 !== t && !h),
                (i = n),
                (a = u),
                e
                    ? i === l.TransitionStates.ENTERED || i === l.TransitionStates.MOUNTED
                        ? {
                              from: { opacity: 0 },
                              to: { opacity: 1 },
                              config: d
                          }
                        : {
                              from: { opacity: 1 },
                              to: { opacity: 0 },
                              config: d,
                              onRest: () => {
                                  a();
                              }
                          }
                    : { opacity: 1 }
            );
        }, [t, u, h, n]),
        m = (0, l.useSpring)(E);
    return (0, i.jsx)(s.animated.div, {
        style: m,
        className: c.transitionItem,
        children: _
    });
};
