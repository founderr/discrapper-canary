"use strict";
n.r(t), n.d(t, {
  useCheckbox: function() {
    return u
  },
  useCheckboxGroup: function() {
    return p
  },
  useCheckboxGroupItem: function() {
    return f
  }
}), n("222007");
var r = n("884691"),
  a = n("759840"),
  o = n("444324"),
  i = n("914644"),
  s = n("240849"),
  c = n("113581"),
  l = n("223986");

function u(e, t, n) {
  let s = (0, o.useFormValidationState)({
      ...e,
      value: t.isSelected
    }),
    {
      isInvalid: c,
      validationErrors: l,
      validationDetails: u
    } = s.displayValidation,
    {
      labelProps: d,
      inputProps: p,
      isSelected: f,
      isPressed: h,
      isDisabled: m,
      isReadOnly: v
    } = (0, i.useToggle)({
      ...e,
      isInvalid: c
    }, t, n);
  (0, a.useFormValidation)(e, s, n);
  let {
    isIndeterminate: g,
    isRequired: y,
    validationBehavior: b = "aria"
  } = e;
  return (0, r.useEffect)(() => {
    n.current && (n.current.indeterminate = !!g)
  }), {
    labelProps: d,
    inputProps: {
      ...p,
      checked: f,
      "aria-required": y && "aria" === b || void 0,
      required: y && "native" === b
    },
    isSelected: f,
    isPressed: h,
    isDisabled: m,
    isReadOnly: v,
    isInvalid: c,
    validationErrors: l,
    validationDetails: u
  }
}
let d = new WeakMap;

function p(e, t) {
  let {
    isDisabled: n,
    name: r,
    validationBehavior: a = "aria"
  } = e, {
    isInvalid: o,
    validationErrors: i,
    validationDetails: l
  } = t.displayValidation, {
    labelProps: u,
    fieldProps: p,
    descriptionProps: f,
    errorMessageProps: h
  } = (0, c.useField)({
    ...e,
    labelElementType: "span",
    isInvalid: o,
    errorMessage: e.errorMessage || i
  });
  d.set(t, {
    name: r,
    descriptionId: f.id,
    errorMessageId: h.id,
    validationBehavior: a
  });
  let m = (0, s.filterDOMProps)(e, {
    labelable: !0
  });
  return {
    groupProps: (0, s.mergeProps)(m, {
      role: "group",
      "aria-disabled": n || void 0,
      ...p
    }),
    labelProps: u,
    descriptionProps: f,
    errorMessageProps: h,
    isInvalid: o,
    validationErrors: i,
    validationDetails: l
  }
}

function f(e, t, n) {
  var a, i;
  let s = (0, l.useToggleState)({
      isReadOnly: e.isReadOnly || t.isReadOnly,
      isSelected: t.isSelected(e.value),
      onChange(n) {
        n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n)
      }
    }),
    {
      name: c,
      descriptionId: p,
      errorMessageId: f,
      validationBehavior: h
    } = d.get(t);
  h = null !== (a = e.validationBehavior) && void 0 !== a ? a : h;
  let {
    realtimeValidation: m
  } = (0, o.useFormValidationState)({
    ...e,
    value: s.isSelected,
    name: void 0,
    validationBehavior: "aria"
  }), v = (0, r.useRef)(o.DEFAULT_VALIDATION_RESULT), g = () => {
    t.setInvalid(e.value, m.isInvalid ? m : v.current)
  };
  (0, r.useEffect)(g);
  let y = t.realtimeValidation.isInvalid ? t.realtimeValidation : m,
    b = "native" === h ? t.displayValidation : y,
    x = u({
      ...e,
      isReadOnly: e.isReadOnly || t.isReadOnly,
      isDisabled: e.isDisabled || t.isDisabled,
      name: e.name || c,
      isRequired: null !== (i = e.isRequired) && void 0 !== i ? i : t.isRequired,
      validationBehavior: h,
      [o.privateValidationStateProp]: {
        realtimeValidation: y,
        displayValidation: b,
        resetValidation: t.resetValidation,
        commitValidation: t.commitValidation,
        updateValidation(e) {
          v.current = e, g()
        }
      }
    }, s, n);
  return {
    ...x,
    inputProps: {
      ...x.inputProps,
      "aria-describedby": [e["aria-describedby"], t.isInvalid ? f : null, p].filter(Boolean).join(" ") || void 0
    }
  }
}