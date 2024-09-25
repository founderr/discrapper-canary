n.d(t, {
    z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(526629),
    u = n(481060),
    c = n(393238),
    d = n(761115);
let _ = 100;
function E(e) {
    let { children: t, className: n, collapsibleContent: r, isExpanded: o } = e,
        [E, f] = a.useState(!1),
        [h, p] = a.useState(!0),
        [m, I] = a.useState(!1),
        T = null != o ? o : E,
        { ref: g, height: S = 0 } = (0, c.Z)(),
        { ref: A, height: v = 0 } = (0, c.Z)(),
        N = (0, u.useSpring)(
            {
                height: T ? S + v : v,
                config: l.config.stiff,
                onRest: () => I(!0)
            },
            h ? 'animate-never' : 'respect-motion-settings'
        ),
        O = a.useCallback(() => {
            f(!E);
        }, [E, f]);
    return (
        a.useLayoutEffect(() => {
            let e = setTimeout(() => {
                p(!1);
            }, _);
            return () => clearTimeout(e);
        }, []),
        (0, i.jsx)('div', {
            className: s()(d.collapseable, { [d.toggled]: T }, n),
            children: (0, i.jsxs)(l.animated.div, {
                className: s()(d.contentExpandContainer, { [d.showOverflow]: T && m }),
                style: N,
                children: [
                    (0, i.jsx)('div', {
                        ref: A,
                        className: s()(d.header, { [d.toggled]: T }),
                        children: t({ onClick: O })
                    }),
                    (0, i.jsx)('div', {
                        ref: g,
                        children: r
                    })
                ]
            })
        })
    );
}
