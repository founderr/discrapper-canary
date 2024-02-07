"use strict";
n.r(t), n.d(t, {
  useToggle: function() {
    return i
  }
});
var r = n("240849"),
  o = n("447259"),
  a = n("388032");

function i(e, t, n) {
  let {
    isDisabled: i = !1,
    isReadOnly: s = !1,
    value: c,
    name: l,
    children: u,
    "aria-label": d,
    "aria-labelledby": p,
    validationState: f = "valid",
    isInvalid: h
  } = e;
  !(null != u) && !(null != d || null != p) && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let {
    pressProps: m,
    isPressed: v
  } = (0, a.usePress)({
    isDisabled: i
  }), {
    pressProps: g,
    isPressed: y
  } = (0, a.usePress)({
    isDisabled: i || s,
    onPress() {
      t.toggle()
    }
  }), {
    focusableProps: b
  } = (0, o.useFocusable)(e, n), x = (0, r.mergeProps)(m, b), S = (0, r.filterDOMProps)(e, {
    labelable: !0
  });
  return (0, r.useFormReset)(n, t.isSelected, t.setSelected), {
    labelProps: (0, r.mergeProps)(g, {
      onClick: e => e.preventDefault()
    }),
    inputProps: (0, r.mergeProps)(S, {
      "aria-invalid": h || "invalid" === f || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": s || void 0,
      onChange: e => {
        e.stopPropagation(), t.setSelected(e.target.checked)
      },
      disabled: i,
      ...null == c ? {} : {
        value: c
      },
      name: l,
      type: "checkbox",
      ...x
    }),
    isSelected: t.isSelected,
    isPressed: v || y,
    isDisabled: i,
    isReadOnly: s,
    isInvalid: h || "invalid" === f
  }
}