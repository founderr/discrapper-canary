"use strict";
n.r(t), n.d(t, {
  useSelectState: function() {
    return i
  }
}), n("222007");
var r = n("356319"),
  a = n("880523"),
  o = n("884691");

function i(e) {
  let t = (0, r.useMenuTriggerState)(e),
    n = (0, a.useSingleSelectListState)({
      ...e,
      onSelectionChange: n => {
        null != e.onSelectionChange && e.onSelectionChange(n), t.close()
      }
    }),
    [i, s] = (0, o.useState)(!1);
  return {
    ...n,
    ...t,
    open() {
      0 !== n.collection.size && t.open()
    },
    toggle(e) {
      0 !== n.collection.size && t.toggle(e)
    },
    isFocused: i,
    setFocused: s
  }
}