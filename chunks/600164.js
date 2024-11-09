var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(259390),
    l = n(739017);
let u = {
        VERTICAL: l.vertical,
        HORIZONTAL: o.horizontal,
        HORIZONTAL_REVERSE: o.horizontalReverse
    },
    c = {
        START: l.justifyStart,
        END: l.justifyEnd,
        CENTER: l.justifyCenter,
        BETWEEN: l.justifyBetween,
        AROUND: l.justifyAround
    },
    d = {
        START: l.alignStart,
        END: l.alignEnd,
        CENTER: l.alignCenter,
        STRETCH: l.alignStretch,
        BASELINE: l.alignBaseline
    },
    f = {
        NO_WRAP: l.noWrap,
        WRAP: l.wrap,
        WRAP_REVERSE: l.wrapReverse
    },
    _ = (e) => {
        let { children: t, className: n, shrink: a, grow: l, basis: u, style: c, wrap: d = !1, ...f } = e,
            _ = {
                className: (n = null != n ? n : o.flexChild),
                style: {
                    flexGrow: l,
                    flexShrink: a,
                    flexBasis: u,
                    ...c
                },
                ...f
            };
        if (!d && 'string' != typeof t && 1 === i.Children.count(t)) {
            let e = i.Children.only(t);
            return (
                (_.style = {
                    ..._.style,
                    ...e.props.style
                }),
                (_.className = s()(e.props.className, n)),
                i.cloneElement(e, _)
            );
        }
        return (0, r.jsx)('div', {
            ..._,
            children: t
        });
    };
_.defaultProps = {
    shrink: 1,
    grow: 1,
    basis: 'auto',
    wrap: !1
};
let h = (e) => {
    let { children: t, className: n, direction: i = u.HORIZONTAL, justify: a = c.START, align: l = d.STRETCH, wrap: _ = f.NO_WRAP, shrink: h, grow: p, basis: m, style: g, ...E } = e;
    return (0, r.jsx)('div', {
        style: {
            flexShrink: h,
            flexGrow: p,
            flexBasis: m,
            ...g
        },
        className: s()(o.flex, i, a, l, _, n),
        ...E,
        children: t
    });
};
(h.defaultProps = {
    shrink: 1,
    grow: 1,
    basis: 'auto'
}),
    (h.Child = _),
    (h.Direction = u),
    (h.Align = d),
    (h.Justify = c),
    (h.Wrap = f),
    (t.Z = h);
