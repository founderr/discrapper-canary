var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    s = n(442837),
    a = n(765250),
    u = n(13245),
    d = n(355863),
    c = n(237997),
    h = n(451478),
    f = n(434529),
    p = n(145597),
    m = n(830917),
    g = n(353038),
    v = n(610394),
    E = n(561064),
    Z = n(981631),
    C = n(152397);
t.Z = l.memo(function (e) {
    let { widget: t, renderWidget: n, renderTitle: o, renderButtons: x, resizeValidation: S } = e,
        I = d.Z.getWidgetConfig(t.type),
        _ = (0, s.e7)([c.Z], () => c.Z.isLocked((0, p.QF)())),
        O = (0, E.Z)(),
        N = (0, s.e7)([h.Z], () => h.Z.windowSize((0, m.ZY)(O))),
        y = (0, E.Z)(),
        T = l.useCallback((e, t, n, i, l) => {
            let o = h.Z.windowSize((0, m.ZY)((0, E.i)())),
                r = (0, f.jL)(n, o),
                s = (0, f.Ox)(i, o);
            (0, a.Os)(t),
                (0, a.nv)({
                    widgetId: t,
                    anchor: r,
                    size: s
                });
            let c = e === g.B.MOVE,
                p = (0, f.PY)(n, o.width, o.height, l.width, l.height);
            u.Z.track(Z.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !c,
                was_dragged: c,
                widget_type: d.Z.getWidgetType(t),
                window_width: o.width,
                window_height: o.height,
                widget_width: l.width,
                widget_height: l.height,
                widget_left: p.left,
                widget_top: p.top
            });
        }, []),
        j = l.useCallback((e) => {
            (0, a.Os)(e);
        }, []),
        { id: b, pinned: L, zIndex: R, size: w, anchor: k } = t,
        A = (0, f.w_)(w, N),
        M = (0, f.KR)(k, N),
        { minSize: z, resizeX: D, resizeY: P, dragAnywhere: V } = I,
        U = L || !_,
        W = l.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: N.width,
                maxY: N.height
            }),
            [N]
        ),
        F = l.useCallback(
            (e) =>
                n({
                    ...e,
                    widget: t
                }),
            [t, n]
        ),
        H = l.useCallback(
            (e) =>
                null != o || null != x
                    ? (0, i.jsxs)('div', {
                          className: C.extrasContainer,
                          children: [null == o ? void 0 : o(t), null == x ? void 0 : x(t, e)]
                      })
                    : null,
            [t, o, x]
        ),
        Y = (0, s.e7)([v.Z], () => v.Z.renderDebugMode),
        G = l.useMemo(() => {
            if (null != S)
                return (e) =>
                    S({
                        ...e,
                        widget: t
                    });
        }, [S, t]);
    return (0, i.jsx)(g.Z, {
        className: r()({
            [C.debug]: Y,
            [C.debugUnpinned]: Y && !L,
            [C.debugPinned]: Y && L
        }),
        id: b,
        size: A,
        anchor: M,
        container: W,
        minSize: z,
        hidden: !U,
        locked: _,
        resizeX: D,
        resizeY: P,
        style: { zIndex: R },
        dragAnywhere: V,
        active: !_,
        onUpdate: T,
        onClick: j,
        targetWindow: y,
        renderExtras: H,
        resizeValidation: G,
        children: F
    });
});
