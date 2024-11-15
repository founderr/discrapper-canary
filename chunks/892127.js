var i = n(200651),
    r = n(192379),
    l = n(442837),
    o = n(765250),
    a = n(13245),
    s = n(355863),
    u = n(237997),
    c = n(451478),
    d = n(434529),
    h = n(145597),
    f = n(830917),
    p = n(353038),
    m = n(561064),
    E = n(981631),
    v = n(782901);
t.Z = r.memo(function (e) {
    let { widget: t, renderWidget: n, renderTitle: g, renderButtons: _, resizeValidation: C } = e,
        S = s.Z.getWidgetConfig(t.type),
        I = (0, l.e7)([u.Z], () => u.Z.isLocked((0, h.QF)())),
        Z = (0, m.Z)(),
        N = (0, l.e7)([c.Z], () => c.Z.windowSize((0, f.ZY)(Z))),
        x = (0, m.Z)(),
        O = r.useCallback((e, t, n, i, r) => {
            let l = c.Z.windowSize((0, f.ZY)((0, m.i)())),
                u = (0, d.jL)(n, l),
                h = (0, d.Ox)(i, l);
            (0, o.Os)(t),
                (0, o.nv)({
                    widgetId: t,
                    anchor: u,
                    size: h
                });
            let v = e === p.B.MOVE,
                g = (0, d.PY)(n, l.width, l.height, r.width, r.height);
            a.Z.track(E.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !v,
                was_dragged: v,
                widget_type: s.Z.getWidgetType(t),
                window_width: l.width,
                window_height: l.height,
                widget_width: r.width,
                widget_height: r.height,
                widget_left: g.left,
                widget_top: g.top
            });
        }, []),
        T = r.useCallback((e) => {
            (0, o.Os)(e);
        }, []),
        { id: A, pinned: y, zIndex: b, size: R, anchor: L } = t,
        k = (0, d.w_)(R, N),
        M = (0, d.KR)(L, N),
        { minSize: P, resizeX: w, resizeY: j, dragAnywhere: D } = S,
        z = y || !I,
        U = r.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: N.width,
                maxY: N.height
            }),
            [N]
        ),
        V = r.useCallback(
            (e) =>
                n({
                    ...e,
                    widget: t
                }),
            [t, n]
        ),
        G = r.useCallback(
            (e) =>
                null != g || null != _
                    ? (0, i.jsxs)('div', {
                          className: v.extrasContainer,
                          children: [null == g ? void 0 : g(t), null == _ ? void 0 : _(t, e)]
                      })
                    : null,
            [t, g, _]
        ),
        F = r.useMemo(() => {
            if (null != C)
                return (e) =>
                    C({
                        ...e,
                        widget: t
                    });
        }, [C, t]);
    return (0, i.jsx)(p.Z, {
        id: A,
        size: k,
        anchor: M,
        container: U,
        minSize: P,
        hidden: !z,
        locked: I,
        resizeX: w,
        resizeY: j,
        style: { zIndex: b },
        dragAnywhere: D,
        active: !I,
        onUpdate: O,
        onClick: T,
        targetWindow: x,
        renderExtras: G,
        resizeValidation: F,
        children: V
    });
});
