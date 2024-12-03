var i = n(200651),
    o = n(192379),
    l = n(120356),
    r = n.n(l),
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
t.Z = o.memo(function (e) {
    let { widget: t, renderWidget: n, renderTitle: l, renderButtons: Z, resizeValidation: _ } = e,
        I = c.Z.getWidgetConfig(t.type),
        S = (0, s.e7)([d.Z], () => d.Z.isLocked((0, p.QF)())),
        b = (0, E.Z)(),
        N = (0, s.e7)([h.Z], () => h.Z.windowSize((0, m.ZY)(b))),
        O = (0, E.Z)(),
        y = o.useCallback((e, t, n, i, o) => {
            let l = h.Z.windowSize((0, m.ZY)((0, E.i)())),
                r = (0, f.jL)(n, l),
                s = (0, f.Ox)(i, l);
            (0, a.Os)(t),
                (0, a.nv)({
                    widgetId: t,
                    anchor: r,
                    size: s
                });
            let d = e === v.B.MOVE,
                p = (0, f.PY)(n, l.width, l.height, o.width, o.height);
            u.Z.track(x.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !d,
                was_dragged: d,
                widget_type: c.Z.getWidgetType(t),
                window_width: l.width,
                window_height: l.height,
                widget_width: o.width,
                widget_height: o.height,
                widget_left: p.left,
                widget_top: p.top
            });
        }, []),
        j = o.useCallback((e) => {
            (0, a.Os)(e);
        }, []),
        { id: T, pinned: k, zIndex: L, size: w, anchor: A } = t,
        R = (0, f.w_)(w, N),
        M = (0, f.KR)(A, N),
        { minSize: z, resizeX: D, resizeY: P, dragAnywhere: V } = I,
        W = k || !S,
        U = o.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: N.width,
                maxY: N.height
            }),
            [N]
        ),
        F = o.useCallback(
            (e) =>
                n({
                    ...e,
                    widget: t
                }),
            [t, n]
        ),
        B = o.useCallback(
            (e) =>
                null != l || null != Z
                    ? (0, i.jsxs)('div', {
                          className: C.extrasContainer,
                          children: [null == l ? void 0 : l(t), null == Z ? void 0 : Z(t, e)]
                      })
                    : null,
            [t, l, Z]
        ),
        H = (0, s.e7)([g.Z], () => g.Z.renderDebugMode),
        Y = o.useMemo(() => {
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
        locked: S,
        resizeX: D,
        resizeY: P,
        style: { zIndex: L },
        dragAnywhere: V,
        active: !S,
        onUpdate: y,
        onClick: j,
        targetWindow: O,
        renderExtras: B,
        resizeValidation: Y,
        children: F
    });
});
