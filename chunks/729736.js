"use strict";
n.r(t), n.d(t, {
  useSwitch: function() {
    return o
  }
});
var r = n("914644");

function o(e, t, n) {
  let {
    labelProps: o,
    inputProps: a,
    isSelected: i,
    isPressed: s,
    isDisabled: c,
    isReadOnly: l
  } = (0, r.useToggle)(e, t, n);
  return {
    labelProps: o,
    inputProps: {
      ...a,
      role: "switch",
      checked: i
    },
    isSelected: i,
    isPressed: s,
    isDisabled: c,
    isReadOnly: l
  }
}