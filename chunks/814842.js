"use strict";
n.r(t), n.d(t, {
  useToggle: function() {
    return s
  }
});
var r = n("290895"),
  i = n("780095"),
  o = n("495912");

function s(e, t, n) {
  let {
    isDisabled: s = !1,
    isRequired: a = !1,
    isReadOnly: c = !1,
    value: u,
    name: d,
    children: l,
    "aria-label": f,
    "aria-labelledby": p,
    validationState: h = "valid",
    isInvalid: g
  } = e;
  !(null != l) && !(null != f || null != p) && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let {
    pressProps: b,
    isPressed: v
  } = (0, o.usePress)({
    isDisabled: s
  }), {
    focusableProps: m
  } = (0, i.useFocusable)(e, n), y = (0, r.mergeProps)(b, m), x = (0, r.filterDOMProps)(e, {
    labelable: !0
  });
  return (0, r.useFormReset)(n, t.isSelected, t.setSelected), {
    inputProps: (0, r.mergeProps)(x, {
      "aria-invalid": g || "invalid" === h || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": c || void 0,
      "aria-required": a || void 0,
      onChange: e => {
        e.stopPropagation(), t.setSelected(e.target.checked)
      },
      disabled: s,
      ...null == u ? {} : {
        value: u
      },
      name: d,
      type: "checkbox",
      ...y
    }),
    isSelected: t.isSelected,
    isPressed: v,
    isDisabled: s,
    isReadOnly: c,
    isInvalid: g || "invalid" === h
  }
}