t.d(s, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(180081),
    l = t(748780),
    c = t(481060),
    d = t(442837),
    u = t(607070),
    _ = t(663389),
    E = t(81138);
function T(e) {
    let { children: s, className: t, onFlashEnd: i, animationDelay: _ = 500 } = e,
        T = c.tokens.colors.TEXT_LINK,
        I = (0, d.e7)([u.Z], () => u.Z.useReducedMotion),
        S = (0, c.useToken)(T).spring({ opacity: 0 }),
        N = (0, c.useToken)(T).spring({ opacity: 0.1 }),
        m = (0, c.useToken)(T).spring({ opacity: 0 }),
        C = (0, c.useToken)(T).spring({ opacity: 1 }),
        g = (e) => {
            e.finished && (null == i || i());
        },
        [A, h] = (0, c.useSpring)(
            () => ({
                from: {
                    backgroundColor: S,
                    borderColor: S
                }
            }),
            'animate-never'
        ),
        O = _ + 200 + 200,
        p = I ? 0 : 200;
    return (
        a.useEffect(() => {
            h({
                reset: !0,
                immediate: !1,
                to: {
                    backgroundColor: S,
                    borderColor: S
                },
                config: {
                    duration: p,
                    easing: l.Z.Easing.ease
                }
            }),
                h({
                    delay: _,
                    immediate: I,
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
                    immediate: I,
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
                    onRest: g
                });
        }, [h]),
        (0, n.jsx)(o.animated.div, {
            style: A,
            className: r()(E.settingsItemHighlight, t),
            children: s
        })
    );
}
function I(e) {
    let { children: s, scrollPosition: t, animationDelay: i } = e,
        r = (0, d.e7)([_.Z], () => _.Z.getScrollPosition() === t),
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
