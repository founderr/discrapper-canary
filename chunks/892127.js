var i = n(200651),
    o = n(192379),
    r = n(442837),
    l = n(765250),
    s = n(13245),
    a = n(355863),
    u = n(237997),
    c = n(451478),
    d = n(434529),
    h = n(145597),
    f = n(830917),
    p = n(353038),
    m = n(561064),
    v = n(981631),
    g = n(556351);
t.Z = o.memo(function (e) {
    let { widget: t, renderWidget: n, renderTitle: E, renderButtons: _, resizeValidation: C } = e,
        S = a.Z.getWidgetConfig(t.type),
        I = (0, r.e7)([u.Z], () => u.Z.isLocked((0, h.QF)())),
        x = (0, m.Z)(),
        Z = (0, r.e7)([c.Z], () => c.Z.windowSize((0, f.ZY)(x))),
        y = (0, m.Z)(),
        N = o.useCallback((e, t, n, i, o) => {
            let r = c.Z.windowSize((0, f.ZY)((0, m.i)())),
                u = (0, d.jL)(n, r),
                h = (0, d.Ox)(i, r);
            (0, l.Os)(t),
                (0, l.nv)({
                    widgetId: t,
                    anchor: u,
                    size: h
                });
            let g = e === p.B.MOVE,
                E = (0, d.PY)(n, r.width, r.height, o.width, o.height);
            s.Z.track(v.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !g,
                was_dragged: g,
                widget_type: a.Z.getWidgetType(t),
                window_width: r.width,
                window_height: r.height,
                widget_width: o.width,
                widget_height: o.height,
                widget_left: E.left,
                widget_top: E.top
            });
        }, []),
        b = o.useCallback((e) => {
            (0, l.Os)(e);
        }, []),
        { id: O, pinned: T, zIndex: A, size: L, anchor: R } = t,
        k = (0, d.w_)(L, Z),
        w = (0, d.KR)(R, Z),
        { minSize: M, resizeX: j, resizeY: P, dragAnywhere: D } = S,
        z = T || !I,
        U = o.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: Z.width,
                maxY: Z.height
            }),
            [Z]
        ),
        V = o.useCallback(
            (e) =>
                n({
                    ...e,
                    widget: t
                }),
            [t, n]
        ),
        F = o.useCallback(
            (e) =>
                null != E || null != _
                    ? (0, i.jsxs)('div', {
                          className: g.extrasContainer,
                          children: [null == E ? void 0 : E(t), null == _ ? void 0 : _(t, e)]
                      })
                    : null,
            [t, E, _]
        ),
        B = o.useMemo(() => {
            if (null != C)
                return (e) =>
                    C({
                        ...e,
                        widget: t
                    });
        }, [C, t]);
    return (0, i.jsx)(p.Z, {
        id: O,
        size: k,
        anchor: w,
        container: U,
        minSize: M,
        hidden: !z,
        locked: I,
        resizeX: j,
        resizeY: P,
        style: { zIndex: A },
        dragAnywhere: D,
        active: !I,
        onUpdate: N,
        onClick: b,
        targetWindow: y,
        renderExtras: F,
        resizeValidation: B,
        children: V
    });
});
