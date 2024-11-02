t(47120);
var r = t(200651),
    a = t(192379),
    i = t(120356),
    s = t.n(i),
    o = t(100621),
    l = t(481060),
    c = t(393238),
    d = t(388032),
    u = t(379000);
n.Z = a.memo(function (e) {
    let { renderHeader: n, children: t, isExpanded: i, isStuck: m, onExpand: f, disableAnimation: h, disableBackground: x } = e,
        [p, g] = a.useState(!0),
        [C, b] = a.useState(!1),
        { ref: v, height: _ = 0 } = (0, c.Z)(),
        { ref: y, height: T = 0 } = (0, c.Z)(),
        [I, j] = a.useState(i),
        N = (0, l.useSpring)(
            {
                height: I ? T + _ : _,
                config: {
                    ...o.config.stiff,
                    clamp: !0
                },
                onStart: () => {
                    b(!1);
                },
                onRest: () => {
                    b(!0);
                }
            },
            p || h ? 'animate-never' : 'respect-motion-settings'
        );
    return (
        a.useLayoutEffect(() => {
            b(!1), j(i);
        }, [i]),
        a.useLayoutEffect(() => {
            let e = setTimeout(() => {
                g(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)(l.Clickable, {
            className: s()(u.editCard, {
                [u.toggled]: i,
                [u.noBackground]: x
            }),
            children: (0, r.jsxs)(o.animated.div, {
                className: s()(u.contentExpandContainer, { [u.showOverflow]: i && C }),
                style: N,
                children: [
                    (0, r.jsx)(l.Clickable, {
                        innerRef: v,
                        onClick: m ? void 0 : f,
                        className: s()(u.innerHeader, { [u.toggled]: i && m }),
                        'aria-label': d.intl.string(d.t.dcl9MT),
                        children: n
                    }),
                    (0, r.jsx)('div', {
                        ref: y,
                        children: t
                    })
                ]
            })
        })
    );
});
