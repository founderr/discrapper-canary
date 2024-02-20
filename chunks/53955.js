"use strict";
n.r(t), n.d(t, {
  useDragSourceConnector: function() {
    return s
  }
});
var r = n("884691"),
  a = n("29150"),
  o = n("119076"),
  i = n("634115");

function s(e, t) {
  var n = (0, o.useDragDropManager)(),
    s = (0, r.useMemo)(function() {
      return new a.SourceConnector(n.getBackend())
    }, [n]);
  return (0, i.useIsomorphicLayoutEffect)(function() {
    return s.dragSourceOptions = e || null, s.reconnect(),
      function() {
        return s.disconnectDragSource()
      }
  }, [s, e]), (0, i.useIsomorphicLayoutEffect)(function() {
    return s.dragPreviewOptions = t || null, s.reconnect(),
      function() {
        return s.disconnectDragPreview()
      }
  }, [s, t]), s
}