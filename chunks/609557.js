"use strict";
n.r(t), n.d(t, {
  useTooltip: function() {
    return a
  }
});
var r = n("240849"),
  o = n("388032");

function a(e, t) {
  let n = (0, r.filterDOMProps)(e, {
      labelable: !0
    }),
    {
      hoverProps: a
    } = (0, o.useHover)({
      onHoverStart: () => null == t ? void 0 : t.open(!0),
      onHoverEnd: () => null == t ? void 0 : t.close()
    });
  return {
    tooltipProps: (0, r.mergeProps)(n, a, {
      role: "tooltip"
    })
  }
}
n("884691")