t.d(n, {
    Z: function () {
        return s;
    }
}),
    t(47120);
var i = t(192379),
    a = t(999153),
    l = t(584922);
function s(e) {
    let { type: n, index: t, optionId: s, onDragStart: o, onDragComplete: r, onDragReset: d } = e,
        [c, u] = i.useState(!1),
        [, I] = (0, a.c)({
            type: n,
            item: () => (
                o(s),
                {
                    id: s,
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
                r(t.optionId);
            }
        }),
        [{ dragSourcePosition: m }, _] = (0, l.L)({
            accept: n,
            canDrop: () => !0,
            collect: (e) => {
                let n = e.getItem();
                return null != n && e.isOver() && e.canDrop() ? { dragSourcePosition: n.position } : { dragSourcePosition: null };
            },
            drop: () => ({ optionId: s })
        });
    return {
        drag: I,
        dragSourcePosition: m,
        drop: _,
        setIsDraggable: u
    };
}
