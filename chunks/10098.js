"use strict";
n.r(t), n.d(t, {
  createBeginDrag: function() {
    return c
  }
}), n("70102");
var r = n("900255"),
  a = n("235485"),
  o = n("125692"),
  i = n("897345"),
  s = {
    type: i.INIT_COORDS,
    payload: {
      clientOffset: null,
      sourceClientOffset: null
    }
  };

function c(e) {
  return function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        publishSource: !0
      },
      c = n.publishSource,
      l = n.clientOffset,
      u = n.getSourceClientOffset,
      d = e.getMonitor(),
      p = e.getRegistry();
    e.dispatch((0, a.setClientOffset)(l)),
      function(e, t, n) {
        (0, r.invariant)(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(e) {
          (0, r.invariant)(n.getSource(e), "Expected sourceIds to be registered.")
        })
      }(t, d, p);
    var f = function(e, t) {
      for (var n = null, r = e.length - 1; r >= 0; r--)
        if (t.canDragSource(e[r])) {
          n = e[r];
          break
        } return n
    }(t, d);
    if (null === f) {
      e.dispatch(s);
      return
    }
    var h = null;
    if (l) {
      if (!u) throw Error("getSourceClientOffset must be defined");
      (function(e) {
        (0, r.invariant)("function" == typeof e, "When clientOffset is provided, getSourceClientOffset must be a function.")
      })(u), h = u(f)
    }
    e.dispatch((0, a.setClientOffset)(l, h));
    var m = p.getSource(f).beginDrag(d, f);
    if (null != m) {
      (function(e) {
        (0, r.invariant)((0, o.isObject)(e), "Item must be an object.")
      })(m), p.pinSource(f);
      var v = p.getSourceType(f);
      return {
        type: i.BEGIN_DRAG,
        payload: {
          itemType: v,
          item: m,
          sourceId: f,
          clientOffset: l || null,
          sourceClientOffset: h || null,
          isSourcePublic: !!(void 0 === c || c)
        }
      }
    }
  }
}