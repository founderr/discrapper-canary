var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(189180),
    l = n(652849);
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
        let { children: t, className: n, direction: i = u.HORIZONTAL, justify: a = c.START, align: l = d.STRETCH, wrap: _ = f.NO_WRAP, shrink: p = 1, grow: h = 1, basis: m = 'auto', style: g, ...E } = e;
        return (0, r.jsx)('div', {
            style: {
                flexShrink: p,
                flexGrow: h,
                flexBasis: m,
                ...g
            },
            className: s()(o.flex, i, a, l, _, n),
            ...E,
            children: t
        });
    };
(_.Child = (e) => {
    let { children: t, className: n, shrink: a = 1, grow: l = 1, basis: u = 'auto', style: c, wrap: d = !1, ...f } = e,
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
}),
    (_.Direction = u),
    (_.Align = d),
    (_.Justify = c),
    (_.Wrap = f),
    (t.Z = _);
