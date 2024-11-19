var i = n(200651),
    l = n(192379),
    r = n(442837),
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
    v = n(981631),
    g = n(782901);
t.Z = l.memo(function (e) {
    let { widget: t, renderWidget: n, renderTitle: E, renderButtons: _, resizeValidation: C } = e,
        S = s.Z.getWidgetConfig(t.type),
        Z = (0, r.e7)([u.Z], () => u.Z.isLocked((0, h.QF)())),
        I = (0, m.Z)(),
        x = (0, r.e7)([c.Z], () => c.Z.windowSize((0, f.ZY)(I))),
        N = (0, m.Z)(),
        O = l.useCallback((e, t, n, i, l) => {
            let r = c.Z.windowSize((0, f.ZY)((0, m.i)())),
                u = (0, d.jL)(n, r),
                h = (0, d.Ox)(i, r);
            (0, o.Os)(t),
                (0, o.nv)({
                    widgetId: t,
                    anchor: u,
                    size: h
                });
            let g = e === p.B.MOVE,
                E = (0, d.PY)(n, r.width, r.height, l.width, l.height);
            a.Z.track(v.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !g,
                was_dragged: g,
                widget_type: s.Z.getWidgetType(t),
                window_width: r.width,
                window_height: r.height,
                widget_width: l.width,
                widget_height: l.height,
                widget_left: E.left,
                widget_top: E.top
            });
        }, []),
        T = l.useCallback((e) => {
            (0, o.Os)(e);
        }, []),
        { id: y, pinned: b, zIndex: A, size: L, anchor: R } = t,
        k = (0, d.w_)(L, x),
        M = (0, d.KR)(R, x),
        { minSize: w, resizeX: P, resizeY: j, dragAnywhere: D } = S,
        z = b || !Z,
        U = l.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: x.width,
                maxY: x.height
            }),
            [x]
        ),
        V = l.useCallback(
            (e) =>
                n({
                    ...e,
                    widget: t
                }),
            [t, n]
        ),
        G = l.useCallback(
            (e) =>
                null != E || null != _
                    ? (0, i.jsxs)('div', {
                          className: g.extrasContainer,
                          children: [null == E ? void 0 : E(t), null == _ ? void 0 : _(t, e)]
                      })
                    : null,
            [t, E, _]
        ),
        W = l.useMemo(() => {
            if (null != C)
                return (e) =>
                    C({
                        ...e,
                        widget: t
                    });
        }, [C, t]);
    return (0, i.jsx)(p.Z, {
        id: y,
        size: k,
        anchor: M,
        container: U,
        minSize: w,
        hidden: !z,
        locked: Z,
        resizeX: P,
        resizeY: j,
        style: { zIndex: A },
        dragAnywhere: D,
        active: !Z,
        onUpdate: O,
        onClick: T,
        targetWindow: N,
        renderExtras: G,
        resizeValidation: W,
        children: V
    });
});
