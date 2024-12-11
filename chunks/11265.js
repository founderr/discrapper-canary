t(47120);
var i = t(200651),
    l = t(192379),
    a = t(120356),
    s = t.n(a),
    r = t(752877),
    o = t(481060),
    c = t(393238),
    d = t(388032),
    u = t(872939);
n.Z = l.memo(function (e) {
    let { renderHeader: n, children: t, isExpanded: a, isStuck: m, onExpand: x, disableAnimation: f, disableBackground: h } = e,
        [g, v] = l.useState(!0),
        [j, C] = l.useState(!1),
        { ref: p, height: T = 0 } = (0, c.Z)(),
        { ref: I, height: N = 0 } = (0, c.Z)(),
        [R, y] = l.useState(a),
        F = (0, o.useSpring)(
            {
                height: R ? N + T : T,
                config: {
                    ...r.config.stiff,
                    clamp: !0
                },
                onStart: () => {
                    C(!1);
                },
                onRest: () => {
                    C(!0);
                }
            },
            g || f ? 'animate-never' : 'respect-motion-settings'
        );
    return (
        l.useLayoutEffect(() => {
            C(!1), y(a);
        }, [a]),
        l.useLayoutEffect(() => {
            let e = setTimeout(() => {
                v(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, i.jsx)(o.Clickable, {
            className: s()(u.editCard, {
                [u.toggled]: a,
                [u.noBackground]: h
            }),
            children: (0, i.jsxs)(r.animated.div, {
                className: s()(u.contentExpandContainer, { [u.showOverflow]: a && j }),
                style: F,
                children: [
                    (0, i.jsx)(o.Clickable, {
                        innerRef: p,
                        onClick: m ? void 0 : x,
                        className: s()(u.innerHeader, { [u.toggled]: a && m }),
                        'aria-label': d.intl.string(d.t.dcl9MT),
                        children: n
                    }),
                    (0, i.jsx)('div', {
                        ref: I,
                        children: t
                    })
                ]
            })
        })
    );
});
