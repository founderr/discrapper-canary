"use strict";
n.r(t), n.d(t, {
  useSwitch: function() {
    return a
  }
});
var r = n("914644");

function a(e, t, n) {
  let {
    labelProps: a,
    inputProps: o,
    isSelected: i,
    isPressed: s,
    isDisabled: c,
    isReadOnly: l
  } = (0, r.useToggle)(e, t, n);
  return {
    labelProps: a,
    inputProps: {
      ...o,
      role: "switch",
      checked: i
    },
    isSelected: i,
    isPressed: s,
    isDisabled: c,
    isReadOnly: l
  }
}