"use strict";
n.r(t), n.d(t, {
  useTextField: function() {
    return u
  },
  useFormattedTextField: function() {
    return p
  }
}), n("222007");
var r = n("884691"),
  o = n("240849"),
  a = n("708966"),
  i = n("113581"),
  s = n("447259"),
  c = n("759840"),
  l = n("444324");

function u(e, t) {
  let {
    inputElementType: n = "input",
    isDisabled: u = !1,
    isRequired: d = !1,
    isReadOnly: p = !1,
    type: f = "text",
    validationBehavior: h = "aria"
  } = e, [m, v] = (0, a.useControlledState)(e.value, e.defaultValue || "", e.onChange), {
    focusableProps: g
  } = (0, s.useFocusable)(e, t), y = (0, l.useFormValidationState)({
    ...e,
    value: m
  }), {
    isInvalid: b,
    validationErrors: x,
    validationDetails: S
  } = y.displayValidation, {
    labelProps: w,
    fieldProps: D,
    descriptionProps: C,
    errorMessageProps: k
  } = (0, i.useField)({
    ...e,
    isInvalid: b,
    errorMessage: e.errorMessage || x
  }), P = (0, o.filterDOMProps)(e, {
    labelable: !0
  }), E = {
    type: f,
    pattern: e.pattern
  };
  return (0, o.useFormReset)(t, m, v), (0, c.useFormValidation)(e, y, t), (0, r.useEffect)(() => {
    if (t.current instanceof(0, o.getOwnerWindow)(t.current).HTMLTextAreaElement) {
      let e = t.current;
      Object.defineProperty(e, "defaultValue", {
        get: () => e.value,
        set: () => {},
        configurable: !0
      })
    }
  }, [t]), {
    labelProps: w,
    inputProps: (0, o.mergeProps)(P, "input" === n && E, {
      disabled: u,
      readOnly: p,
      required: d && "native" === h,
      "aria-required": d && "aria" === h || void 0,
      "aria-invalid": b || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-activedescendant": e["aria-activedescendant"],
      "aria-autocomplete": e["aria-autocomplete"],
      "aria-haspopup": e["aria-haspopup"],
      value: m,
      onChange: e => v(e.target.value),
      autoComplete: e.autoComplete,
      autoCapitalize: e.autoCapitalize,
      maxLength: e.maxLength,
      minLength: e.minLength,
      name: e.name,
      placeholder: e.placeholder,
      inputMode: e.inputMode,
      onCopy: e.onCopy,
      onCut: e.onCut,
      onPaste: e.onPaste,
      onCompositionEnd: e.onCompositionEnd,
      onCompositionStart: e.onCompositionStart,
      onCompositionUpdate: e.onCompositionUpdate,
      onSelect: e.onSelect,
      onBeforeInput: e.onBeforeInput,
      onInput: e.onInput,
      ...g,
      ...D
    }),
    descriptionProps: C,
    errorMessageProps: k,
    isInvalid: b,
    validationErrors: x,
    validationDetails: S
  }
}

function d() {
  return "undefined" != typeof window && window.InputEvent && "function" == typeof InputEvent.prototype.getTargetRanges
}

function p(e, t, n) {
  let a = (0, o.useEffectEvent)(e => {
    let r, o = n.current;
    switch (e.inputType) {
      case "historyUndo":
      case "historyRedo":
        return;
      case "deleteContent":
      case "deleteByCut":
      case "deleteByDrag":
        r = o.value.slice(0, o.selectionStart) + o.value.slice(o.selectionEnd);
        break;
      case "deleteContentForward":
        r = o.selectionEnd === o.selectionStart ? o.value.slice(0, o.selectionStart) + o.value.slice(o.selectionEnd + 1) : o.value.slice(0, o.selectionStart) + o.value.slice(o.selectionEnd);
        break;
      case "deleteContentBackward":
        r = o.selectionEnd === o.selectionStart ? o.value.slice(0, o.selectionStart - 1) + o.value.slice(o.selectionStart) : o.value.slice(0, o.selectionStart) + o.value.slice(o.selectionEnd);
        break;
      case "deleteSoftLineBackward":
      case "deleteHardLineBackward":
        r = o.value.slice(o.selectionStart);
        break;
      default:
        null != e.data && (r = o.value.slice(0, o.selectionStart) + e.data + o.value.slice(o.selectionEnd))
    }(null == r || !t.validate(r)) && e.preventDefault()
  });
  (0, r.useEffect)(() => {
    if (!d()) return;
    let e = n.current;
    return e.addEventListener("beforeinput", a, !1), () => {
      e.removeEventListener("beforeinput", a, !1)
    }
  }, [n, a]);
  let i = d() ? null : e => {
      let n = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
      !t.validate(n) && e.preventDefault()
    },
    {
      labelProps: s,
      inputProps: c,
      descriptionProps: l,
      errorMessageProps: p,
      ...f
    } = u(e, n),
    h = (0, r.useRef)(null);
  return {
    inputProps: (0, o.mergeProps)(c, {
      onBeforeInput: i,
      onCompositionStart() {
        let {
          value: e,
          selectionStart: t,
          selectionEnd: r
        } = n.current;
        h.current = {
          value: e,
          selectionStart: t,
          selectionEnd: r
        }
      },
      onCompositionEnd() {
        if (!t.validate(n.current.value)) {
          let {
            value: e,
            selectionStart: r,
            selectionEnd: o
          } = h.current;
          n.current.value = e, n.current.setSelectionRange(r, o), t.setInputValue(e)
        }
      }
    }),
    labelProps: s,
    descriptionProps: l,
    errorMessageProps: p,
    ...f
  }
}