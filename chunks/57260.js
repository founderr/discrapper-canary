n.d(t, {
    z: function () {
        return d;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(100621),
    l = n(481060),
    u = n(393238),
    c = n(692191);
function d(e) {
    let { children: t, className: n, collapsibleContent: a, isExpanded: d } = e,
        [f, _] = i.useState(!1),
        [h, p] = i.useState(!0),
        [m, g] = i.useState(!1),
        E = null != d ? d : f,
        { ref: v, height: I = 0 } = (0, u.Z)(),
        { ref: S, height: b = 0 } = (0, u.Z)(),
        T = (0, l.useSpring)(
            {
                height: E ? I + b : b,
                config: o.config.stiff,
                onRest: () => g(!0)
            },
            h ? 'animate-never' : 'respect-motion-settings'
        ),
        y = i.useCallback(() => {
            _(!f);
        }, [f, _]);
    return (
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                p(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)('div', {
            className: s()(c.collapseable, { [c.toggled]: E }, n),
            children: (0, r.jsxs)(o.animated.div, {
                className: s()(c.contentExpandContainer, { [c.showOverflow]: E && m }),
                style: T,
                children: [
                    (0, r.jsx)('div', {
                        ref: S,
                        className: s()(c.header, { [c.toggled]: E }),
                        children: t({ onClick: y })
                    }),
                    (0, r.jsx)('div', {
                        ref: v,
                        children: a
                    })
                ]
            })
        })
    );
}
