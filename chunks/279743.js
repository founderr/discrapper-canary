t.d(s, {
    Z: function () {
        return S;
    }
}),
    t(47120);
var n = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(100621),
    l = t(748780),
    c = t(481060),
    d = t(442837),
    _ = t(607070),
    u = t(663389),
    E = t(36968);
function T(e) {
    let { children: s, className: t, onFlashEnd: i, animationDelay: u = 500 } = e,
        T = c.tokens.colors.TEXT_LINK,
        S = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
        I = (0, c.useToken)(T).spring({ opacity: 0 }),
        N = (0, c.useToken)(T).spring({ opacity: 0.1 }),
        m = (0, c.useToken)(T).spring({ opacity: 0 }),
        C = (0, c.useToken)(T).spring({ opacity: 1 }),
        A = (e) => {
            e.finished && (null == i || i());
        },
        [g, h] = (0, c.useSpring)(
            () => ({
                from: {
                    backgroundColor: I,
                    borderColor: I
                }
            }),
            'animate-never'
        ),
        O = u + 200 + 200,
        p = S ? 0 : 200;
    return (
        a.useEffect(() => {
            h({
                reset: !0,
                immediate: !1,
                to: {
                    backgroundColor: I,
                    borderColor: I
                },
                config: {
                    duration: p,
                    easing: l.Z.Easing.ease
                }
            }),
                h({
                    delay: u,
                    immediate: S,
                    to: [
                        {
                            backgroundColor: N,
                            borderColor: C
                        }
                    ],
                    config: {
                        duration: p,
                        easing: l.Z.Easing.ease
                    }
                }),
                h({
                    delay: O,
                    immediate: S,
                    to: [
                        {
                            backgroundColor: m,
                            borderColor: m
                        }
                    ],
                    config: {
                        duration: p,
                        easing: l.Z.Easing.ease
                    },
                    onRest: A
                });
        }, [h]),
        (0, n.jsx)(o.animated.div, {
            style: g,
            className: r()(E.settingsItemHighlight, t),
            children: s
        })
    );
}
function S(e) {
    let { children: s, scrollPosition: t, animationDelay: i } = e,
        r = (0, d.e7)([u.Z], () => u.Z.getScrollPosition() === t),
        [o, l] = a.useState(!1);
    return (a.useEffect(() => {
        r && l(!0);
    }, [r]),
    o)
        ? (0, n.jsx)(T, {
              animationDelay: i,
              onFlashEnd: () => l(!1),
              children: s
          })
        : (0, n.jsx)(n.Fragment, { children: s });
}
