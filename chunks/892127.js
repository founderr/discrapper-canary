var i = n(200651),
    l = n(192379),
    o = n(442837),
    r = n(765250),
    s = n(13245),
    a = n(355863),
    u = n(237997),
    d = n(451478),
    c = n(434529),
    h = n(145597),
    f = n(830917),
    p = n(353038),
    m = n(561064),
    v = n(981631),
    g = n(556351);
t.Z = l.memo(function (e) {
    let { widget: t, renderWidget: n, renderTitle: E, renderButtons: Z, resizeValidation: C } = e,
        x = a.Z.getWidgetConfig(t.type),
        S = (0, o.e7)([u.Z], () => u.Z.isLocked((0, h.QF)())),
        I = (0, m.Z)(),
        _ = (0, o.e7)([d.Z], () => d.Z.windowSize((0, f.ZY)(I))),
        O = (0, m.Z)(),
        N = l.useCallback((e, t, n, i, l) => {
            let o = d.Z.windowSize((0, f.ZY)((0, m.i)())),
                u = (0, c.jL)(n, o),
                h = (0, c.Ox)(i, o);
            (0, r.Os)(t),
                (0, r.nv)({
                    widgetId: t,
                    anchor: u,
                    size: h
                });
            let g = e === p.B.MOVE,
                E = (0, c.PY)(n, o.width, o.height, l.width, l.height);
            s.Z.track(v.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !g,
                was_dragged: g,
                widget_type: a.Z.getWidgetType(t),
                window_width: o.width,
                window_height: o.height,
                widget_width: l.width,
                widget_height: l.height,
                widget_left: E.left,
                widget_top: E.top
            });
        }, []),
        y = l.useCallback((e) => {
            (0, r.Os)(e);
        }, []),
        { id: T, pinned: j, zIndex: b, size: L, anchor: R } = t,
        w = (0, c.w_)(L, _),
        k = (0, c.KR)(R, _),
        { minSize: A, resizeX: M, resizeY: z, dragAnywhere: D } = x,
        P = j || !S,
        V = l.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: _.width,
                maxY: _.height
            }),
            [_]
        ),
        U = l.useCallback(
            (e) =>
                n({
                    ...e,
                    widget: t
                }),
            [t, n]
        ),
        W = l.useCallback(
            (e) =>
                null != E || null != Z
                    ? (0, i.jsxs)('div', {
                          className: g.extrasContainer,
                          children: [null == E ? void 0 : E(t), null == Z ? void 0 : Z(t, e)]
                      })
                    : null,
            [t, E, Z]
        ),
        F = l.useMemo(() => {
            if (null != C)
                return (e) =>
                    C({
                        ...e,
                        widget: t
                    });
        }, [C, t]);
    return (0, i.jsx)(p.Z, {
        id: T,
        size: w,
        anchor: k,
        container: V,
        minSize: A,
        hidden: !P,
        locked: S,
        resizeX: M,
        resizeY: z,
        style: { zIndex: b },
        dragAnywhere: D,
        active: !S,
        onUpdate: N,
        onClick: y,
        targetWindow: O,
        renderExtras: W,
        resizeValidation: F,
        children: U
    });
});
