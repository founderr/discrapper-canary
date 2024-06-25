t.d(n, {
  Z: function() {
    return a
  }
}), t(47120);
var i = t(470079),
  l = t(225857),
  s = t(290843);

function a(e) {
  let {
    type: n,
    index: t,
    optionId: a,
    onDragStart: r,
    onDragComplete: o,
    onDragReset: c
  } = e, [d, u] = i.useState(!1), [, I] = (0, l.c)({
    type: n,
    item: () => (r(a), {
      id: a,
      position: t
    }),
    canDrag: () => d,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: (e, n) => {
      let t = n.getDropResult();
      if (null == t) {
        c();
        return
      }
      o(t.optionId)
    }
  }), [{
    dragSourcePosition: N
  }, E] = (0, s.L)({
    accept: n,
    canDrop: () => !0,
    collect: e => {
      let n = e.getItem();
      return null != n && e.isOver() && e.canDrop() ? {
        dragSourcePosition: n.position
      } : {
        dragSourcePosition: null
      }
    },
    drop: () => ({
      optionId: a
    })
  });
  return {
    drag: I,
    dragSourcePosition: N,
    drop: E,
    setIsDraggable: u
  }
}