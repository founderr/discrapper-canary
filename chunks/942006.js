"use strict";
n.r(t), n.d(t, {
  useSelect: function() {
    return f
  },
  HiddenSelect: function() {
    return h
  }
}), n("222007");
var r = n("240849"),
  o = n("884691"),
  a = n("932165"),
  i = n("388032"),
  s = n("564341"),
  c = n("113581"),
  l = n("139796"),
  u = n("759840"),
  d = n("828551");
let p = new WeakMap;

function f(e, t, n) {
  let {
    keyboardDelegate: u,
    isDisabled: d,
    isRequired: f,
    name: h,
    validationBehavior: m = "aria"
  } = e, v = (0, s.useCollator)({
    usage: "search",
    sensitivity: "base"
  }), g = (0, o.useMemo)(() => u || new a.ListKeyboardDelegate(t.collection, t.disabledKeys, null, v), [u, t.collection, t.disabledKeys, v]), {
    menuTriggerProps: y,
    menuProps: b
  } = (0, l.useMenuTrigger)({
    isDisabled: d,
    type: "listbox"
  }, t, n), {
    typeSelectProps: x
  } = (0, a.useTypeSelect)({
    keyboardDelegate: g,
    selectionManager: t.selectionManager,
    onTypeSelect(e) {
      t.setSelectedKey(e)
    }
  }), {
    isInvalid: S,
    validationErrors: w,
    validationDetails: D
  } = t.displayValidation, {
    labelProps: C,
    fieldProps: k,
    descriptionProps: P,
    errorMessageProps: E
  } = (0, c.useField)({
    ...e,
    labelElementType: "span",
    isInvalid: S,
    errorMessage: e.errorMessage || w
  });
  x.onKeyDown = x.onKeyDownCapture, delete x.onKeyDownCapture;
  let T = (0, r.filterDOMProps)(e, {
      labelable: !0
    }),
    M = (0, r.mergeProps)(x, y, k),
    R = (0, r.useId)();
  return p.set(t, {
    isDisabled: d,
    isRequired: f,
    name: h,
    validationBehavior: m
  }), {
    labelProps: {
      ...C,
      onClick: () => {
        !e.isDisabled && (n.current.focus(), (0, i.setInteractionModality)("keyboard"))
      }
    },
    triggerProps: (0, r.mergeProps)(T, {
      ...M,
      isDisabled: d,
      onKeyDown: (0, r.chain)(M.onKeyDown, e => {
        switch (e.key) {
          case "ArrowLeft": {
            e.preventDefault();
            let n = null != t.selectedKey ? g.getKeyAbove(t.selectedKey) : g.getFirstKey();
            n && t.setSelectedKey(n);
            break
          }
          case "ArrowRight": {
            e.preventDefault();
            let n = null != t.selectedKey ? g.getKeyBelow(t.selectedKey) : g.getFirstKey();
            n && t.setSelectedKey(n)
          }
        }
      }, e.onKeyDown),
      onKeyUp: e.onKeyUp,
      "aria-labelledby": [R, M["aria-labelledby"], M["aria-label"] && !M["aria-labelledby"] ? M.id : null].filter(Boolean).join(" "),
      onFocus(n) {
        !t.isFocused && (e.onFocus && e.onFocus(n), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0))
      },
      onBlur(n) {
        !t.isOpen && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
      }
    }),
    valueProps: {
      id: R
    },
    menuProps: {
      ...b,
      autoFocus: t.focusStrategy || !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      disallowEmptySelection: !0,
      linkBehavior: "selection",
      onBlur: n => {
        !n.currentTarget.contains(n.relatedTarget) && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
      },
      "aria-labelledby": [k["aria-labelledby"], M["aria-label"] && !k["aria-labelledby"] ? M.id : null].filter(Boolean).join(" ")
    },
    descriptionProps: P,
    errorMessageProps: E,
    isInvalid: S,
    validationErrors: w,
    validationDetails: D
  }
}

function h(e) {
  var t;
  let {
    state: n,
    triggerRef: a,
    label: s,
    name: c,
    isDisabled: l
  } = e, f = (0, o.useRef)(null), {
    containerProps: h,
    inputProps: m,
    selectProps: v
  } = function(e, t, n) {
    var o;
    let a = p.get(t) || {},
      {
        autoComplete: s,
        name: c = a.name,
        isDisabled: l = a.isDisabled
      } = e,
      {
        validationBehavior: f,
        isRequired: h
      } = a,
      m = (0, i.useInteractionModality)(),
      {
        visuallyHiddenProps: v
      } = (0, d.useVisuallyHidden)();
    return (0, r.useFormReset)(e.selectRef, t.selectedKey, t.setSelectedKey), (0, u.useFormValidation)({
      validationBehavior: f,
      focus: () => n.current.focus()
    }, t, e.selectRef), {
      containerProps: {
        ...v,
        "aria-hidden": !0,
        "data-a11y-ignore": "aria-hidden-focus"
      },
      inputProps: {
        type: "text",
        tabIndex: null == m || t.isFocused || t.isOpen ? -1 : 0,
        style: {
          fontSize: 16
        },
        onFocus: () => n.current.focus(),
        disabled: l
      },
      selectProps: {
        tabIndex: -1,
        autoComplete: s,
        disabled: l,
        required: "native" === f && h,
        name: c,
        value: null !== (o = t.selectedKey) && void 0 !== o ? o : "",
        onChange: e => t.setSelectedKey(e.target.value)
      }
    }
  }({
    ...e,
    selectRef: f
  }, n, a);
  return n.collection.size <= 300 ? o.createElement("div", {
    ...h,
    "data-testid": "hidden-select-container"
  }, o.createElement("input", m), o.createElement("label", null, s, o.createElement("select", {
    ...v,
    ref: f
  }, o.createElement("option", null), [...n.collection.getKeys()].map(e => {
    let t = n.collection.getItem(e);
    if ("item" === t.type) return o.createElement("option", {
      key: t.key,
      value: t.key
    }, t.textValue)
  })))) : c ? o.createElement("input", {
    type: "hidden",
    autoComplete: v.autoComplete,
    name: c,
    disabled: l,
    value: null !== (t = n.selectedKey) && void 0 !== t ? t : ""
  }) : null
}