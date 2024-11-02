t.d(n, {
    Z: function () {
        return a;
    }
}),
    t(47120);
var i = t(192379),
    l = t(999153),
    r = t(584922);
function a(e) {
    let { type: n, index: t, optionId: a, onDragStart: o, onDragComplete: s, onDragReset: d } = e,
        [c, u] = i.useState(!1),
        [, m] = (0, l.c)({
            type: n,
            item: () => (
                o(a),
                {
                    id: a,
                    position: t
                }
            ),
            canDrag: () => c,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: (e, n) => {
                let t = n.getDropResult();
                if (null == t) {
                    d();
                    return;
                }
                s(t.optionId);
            }
        }),
        [{ dragSourcePosition: h }, p] = (0, r.L)({
            accept: n,
            canDrop: () => !0,
            collect: (e) => {
                let n = e.getItem();
                return null != n && e.isOver() && e.canDrop() ? { dragSourcePosition: n.position } : { dragSourcePosition: null };
            },
            drop: () => ({ optionId: a })
        });
    return {
        drag: m,
        dragSourcePosition: h,
        drop: p,
        setIsDraggable: u
    };
}
