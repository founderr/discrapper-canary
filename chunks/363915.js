n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(100621),
    a = n(481060),
    s = n(323828);
let o = {
        mass: 1,
        tension: 300,
        friction: 60,
        clamp: !0
    },
    c = {
        mass: 1,
        tension: 600,
        friction: 60,
        clamp: !0
    };
function d(e) {
    var t, n, r;
    let { state: d, direction: u, cleanUp: h, children: m } = e;
    let p = (0, a.useSpring)(
        ((t = d),
        (n = u),
        (r = h),
        t === a.TransitionStates.MOUNTED
            ? {
                  from: {
                      opacity: 0,
                      transform: 'translateY(40px) translateX(0px)'
                  },
                  to: {
                      opacity: 1,
                      transform: 'translateY(0px) translateX(0px)'
                  },
                  config: o,
                  delay: 500
              }
            : t === a.TransitionStates.ENTERED
              ? {
                    from: {
                        opacity: 0,
                        transform: 'translateY(0px) translateX('.concat(-1 === n ? -40 : 40, 'px)')
                    },
                    to: {
                        opacity: 1,
                        transform: 'translateY(0px) translateX(0px)'
                    },
                    config: c,
                    delay: 500
                }
              : {
                    from: {
                        opacity: 1,
                        transform: 'translateY(0px) translateX(0px)'
                    },
                    to: {
                        opacity: 0,
                        transform: 'translateY(0px) translateX('.concat(-1 === n ? 40 : -40, 'px))')
                    },
                    config: c,
                    onRest: () => {
                        r();
                    }
                })
    );
    return (0, i.jsx)(l.animated.div, {
        style: p,
        className: s.step,
        children: (0, i.jsx)(a.ScrollerThin, {
            className: s.scroller,
            children: m
        })
    });
}
function u(e) {
    let { currentStep: t, renderItem: n, items: l, getItemKey: o } = e,
        c = r.useRef(t - 1);
    r.useEffect(() => {
        c.current = t;
    }, [t]);
    let u = r.useMemo(() => (null == c.current || t === c.current ? 0 : c.current < t ? 1 : -1), [t]),
        h = r.useCallback(
            (e, t, r, l) =>
                (0, i.jsx)(
                    d,
                    {
                        state: r,
                        cleanUp: l,
                        direction: u,
                        children: n(t)
                    },
                    e
                ),
            [u, n]
        );
    return (0, i.jsx)('div', {
        className: s.stepsTransitionGroup,
        children: (0, i.jsx)(a.TransitionGroup, {
            items: l,
            renderItem: h,
            getItemKey: o
        })
    });
}
