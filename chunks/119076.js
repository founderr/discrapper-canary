"use strict";
n.r(t), n.d(t, {
  useDragDropManager: function() {
    return i
  }
});
var r = n("884691"),
  a = n("900255"),
  o = n("388588");

function i() {
  var e = (0, r.useContext)(o.DndContext).dragDropManager;
  return (0, a.invariant)(null != e, "Expected drag drop context"), e
}