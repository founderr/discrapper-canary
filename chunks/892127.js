var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    s = n(442837),
    a = n(765250),
    u = n(13245),
    c = n(355863),
    d = n(237997),
    h = n(451478),
    f = n(434529),
    p = n(145597),
    m = n(830917),
    v = n(353038),
    g = n(610394),
    E = n(561064),
    x = n(981631),
    C = n(152397);
t.Z = l.memo(function (e) {
    let { widget: t, renderWidget: n, renderTitle: o, renderButtons: Z, resizeValidation: _ } = e,
        S = c.Z.getWidgetConfig(t.type),
        I = (0, s.e7)([d.Z], () => d.Z.isLocked((0, p.QF)())),
        N = (0, E.Z)(),
        b = (0, s.e7)([h.Z], () => h.Z.windowSize((0, m.ZY)(N))),
        O = (0, E.Z)(),
        y = l.useCallback((e, t, n, i, l) => {
            let o = h.Z.windowSize((0, m.ZY)((0, E.i)())),
                r = (0, f.jL)(n, o),
                s = (0, f.Ox)(i, o);
            (0, a.Os)(t),
                (0, a.nv)({
                    widgetId: t,
                    anchor: r,
                    size: s
                });
            let d = e === v.B.MOVE,
                p = (0, f.PY)(n, o.width, o.height, l.width, l.height);
            u.Z.track(x.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !d,
                was_dragged: d,
                widget_type: c.Z.getWidgetType(t),
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
        { id: T, pinned: k, zIndex: w, size: A, anchor: L } = t,
        R = (0, f.w_)(A, b),
        M = (0, f.KR)(L, b),
        { minSize: z, resizeX: D, resizeY: P, dragAnywhere: V } = S,
        W = k || !I,
        U = l.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: b.width,
                maxY: b.height
            }),
            [b]
        ),
        F = l.useCallback(
            (e) =>
                n({
                    ...e,
                    widget: t
                }),
            [t, n]
        ),
        B = l.useCallback(
            (e) =>
                null != o || null != Z
                    ? (0, i.jsxs)('div', {
                          className: C.extrasContainer,
                          children: [null == o ? void 0 : o(t), null == Z ? void 0 : Z(t, e)]
                      })
                    : null,
            [t, o, Z]
        ),
        H = (0, s.e7)([g.Z], () => g.Z.renderDebugMode),
        Y = l.useMemo(() => {
            if (null != _)
                return (e) =>
                    _({
                        ...e,
                        widget: t
                    });
        }, [_, t]);
    return (0, i.jsx)(v.Z, {
        className: r()({
            [C.debug]: H,
            [C.debugUnpinned]: H && !k,
            [C.debugPinned]: H && k
        }),
        id: T,
        size: R,
        anchor: M,
        container: U,
        minSize: z,
        hidden: !W,
        locked: I,
        resizeX: D,
        resizeY: P,
        style: { zIndex: w },
        dragAnywhere: V,
        active: !I,
        onUpdate: y,
        onClick: j,
        targetWindow: O,
        renderExtras: B,
        resizeValidation: Y,
        children: F
    });
});
