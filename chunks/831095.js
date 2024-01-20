"use strict";
n.r(t), n.d(t, {
  useTooltip: function() {
    return o
  }
});
var r = n("290895"),
  i = n("495912");

function o(e, t) {
  let n = (0, r.filterDOMProps)(e, {
      labelable: !0
    }),
    {
      hoverProps: o
    } = (0, i.useHover)({
      onHoverStart: () => null == t ? void 0 : t.open(!0),
      onHoverEnd: () => null == t ? void 0 : t.close()
    });
  return {
    tooltipProps: (0, r.mergeProps)(n, o, {
      role: "tooltip"
    })
  }
}
n("884691")