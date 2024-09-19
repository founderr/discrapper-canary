n.d(t, {
    z: function () {
        return d;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(526629),
    l = n(481060),
    u = n(393238),
    c = n(761115);
function d(e) {
    let { children: t, className: n, collapsibleContent: a, isExpanded: d } = e,
        [_, E] = i.useState(!1),
        [f, h] = i.useState(!0),
        [p, I] = i.useState(!1),
        m = null != d ? d : _,
        { ref: T, height: S = 0 } = (0, u.Z)(),
        { ref: g, height: A = 0 } = (0, u.Z)(),
        N = (0, l.useSpring)(
            {
                height: m ? S + A : A,
                config: o.config.stiff,
                onRest: () => I(!0)
            },
            f ? 'animate-never' : 'respect-motion-settings'
        ),
        O = i.useCallback(() => {
            E(!_);
        }, [_, E]);
    return (
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                h(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)('div', {
            className: s()(c.collapseable, { [c.toggled]: m }, n),
            children: (0, r.jsxs)(o.animated.div, {
                className: s()(c.contentExpandContainer, { [c.showOverflow]: m && p }),
                style: N,
                children: [
                    (0, r.jsx)('div', {
                        ref: g,
                        className: s()(c.header, { [c.toggled]: m }),
                        children: t({ onClick: O })
                    }),
                    (0, r.jsx)('div', {
                        ref: T,
                        children: a
                    })
                ]
            })
        })
    );
}
