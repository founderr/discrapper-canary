"use strict";
n.r(t), n.d(t, {
  useProgressBar: function() {
    return i
  }
});
var r = n("240849"),
  a = n("113581"),
  o = n("564341");

function i(e) {
  let {
    value: t = 0,
    minValue: n = 0,
    maxValue: i = 100,
    valueLabel: s,
    isIndeterminate: c,
    formatOptions: l = {
      style: "percent"
    }
  } = e, u = (0, r.filterDOMProps)(e, {
    labelable: !0
  }), {
    labelProps: d,
    fieldProps: p
  } = (0, a.useLabel)({
    ...e,
    labelElementType: "span"
  }), f = ((t = (0, r.clamp)(t, n, i)) - n) / (i - n), h = (0, o.useNumberFormatter)(l);
  if (!c && !s) {
    let e = "percent" === l.style ? f : t;
    s = h.format(e)
  }
  return {
    progressBarProps: (0, r.mergeProps)(u, {
      ...p,
      "aria-valuenow": c ? void 0 : t,
      "aria-valuemin": n,
      "aria-valuemax": i,
      "aria-valuetext": c ? void 0 : s,
      role: "progressbar"
    }),
    labelProps: d
  }
}