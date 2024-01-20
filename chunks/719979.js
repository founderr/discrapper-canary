"use strict";
n.r(t), n.d(t, {
  useSelect: function() {
    return l
  },
  HiddenSelect: function() {
    return f
  }
}), n("222007");
var r = n("290895"),
  i = n("884691"),
  o = n("628364"),
  s = n("495912"),
  a = n("181551"),
  c = n("825167"),
  u = n("440295"),
  d = n("678760");

function l(e, t, n) {
  let {
    keyboardDelegate: d,
    isDisabled: l
  } = e, f = (0, a.useCollator)({
    usage: "search",
    sensitivity: "base"
  }), p = (0, i.useMemo)(() => d || new o.ListKeyboardDelegate(t.collection, t.disabledKeys, null, f), [d, t.collection, t.disabledKeys, f]), {
    menuTriggerProps: h,
    menuProps: g
  } = (0, u.useMenuTrigger)({
    isDisabled: l,
    type: "listbox"
  }, t, n), {
    typeSelectProps: b
  } = (0, o.useTypeSelect)({
    keyboardDelegate: p,
    selectionManager: t.selectionManager,
    onTypeSelect(e) {
      t.setSelectedKey(e)
    }
  }), {
    labelProps: v,
    fieldProps: m,
    descriptionProps: y,
    errorMessageProps: x
  } = (0, c.useField)({
    ...e,
    labelElementType: "span"
  });
  b.onKeyDown = b.onKeyDownCapture, delete b.onKeyDownCapture;
  let w = (0, r.filterDOMProps)(e, {
      labelable: !0
    }),
    S = (0, r.mergeProps)(b, h, m),
    k = (0, r.useId)();
  return {
    labelProps: {
      ...v,
      onClick: () => {
        !e.isDisabled && (n.current.focus(), (0, s.setInteractionModality)("keyboard"))
      }
    },
    triggerProps: (0, r.mergeProps)(w, {
      ...S,
      isDisabled: l,
      onKeyDown: (0, r.chain)(S.onKeyDown, e => {
        switch (e.key) {
          case "ArrowLeft": {
            e.preventDefault();
            let n = null != t.selectedKey ? p.getKeyAbove(t.selectedKey) : p.getFirstKey();
            n && t.setSelectedKey(n);
            break
          }
          case "ArrowRight": {
            e.preventDefault();
            let n = null != t.selectedKey ? p.getKeyBelow(t.selectedKey) : p.getFirstKey();
            n && t.setSelectedKey(n)
          }
        }
      }, e.onKeyDown),
      onKeyUp: e.onKeyUp,
      "aria-labelledby": [k, S["aria-labelledby"], S["aria-label"] && !S["aria-labelledby"] ? S.id : null].filter(Boolean).join(" "),
      onFocus(n) {
        !t.isFocused && (e.onFocus && e.onFocus(n), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0))
      },
      onBlur(n) {
        !t.isOpen && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
      }
    }),
    valueProps: {
      id: k
    },
    menuProps: {
      ...g,
      autoFocus: t.focusStrategy || !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      disallowEmptySelection: !0,
      onBlur: n => {
        !n.currentTarget.contains(n.relatedTarget) && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1))
      },
      "aria-labelledby": [m["aria-labelledby"], S["aria-label"] && !m["aria-labelledby"] ? S.id : null].filter(Boolean).join(" ")
    },
    descriptionProps: y,
    errorMessageProps: x
  }
}

function f(e) {
  var t;
  let {
    state: n,
    triggerRef: o,
    label: a,
    name: c,
    isDisabled: u
  } = e, l = (0, i.useRef)(null), {
    containerProps: f,
    inputProps: p,
    selectProps: h
  } = function(e, t, n) {
    var i;
    let {
      autoComplete: o,
      name: a,
      isDisabled: c
    } = e, u = (0, s.useInteractionModality)(), {
      visuallyHiddenProps: l
    } = (0, d.useVisuallyHidden)();
    return (0, r.useFormReset)(e.selectRef, t.selectedKey, t.setSelectedKey), {
      containerProps: {
        ...l,
        "aria-hidden": !0,
        "data-a11y-ignore": "aria-hidden-focus"
      },
      inputProps: {
        type: "text",
        tabIndex: null == u || t.isFocused || t.isOpen ? -1 : 0,
        style: {
          fontSize: 16
        },
        onFocus: () => n.current.focus(),
        disabled: c
      },
      selectProps: {
        tabIndex: -1,
        autoComplete: o,
        disabled: c,
        name: a,
        size: t.collection.size,
        value: null !== (i = t.selectedKey) && void 0 !== i ? i : "",
        onChange: e => t.setSelectedKey(e.target.value)
      }
    }
  }({
    ...e,
    selectRef: l
  }, n, o);
  return n.collection.size <= 300 ? i.createElement("div", {
    ...f,
    "data-testid": "hidden-select-container"
  }, i.createElement("input", p), i.createElement("label", null, a, i.createElement("select", {
    ...h,
    ref: l
  }, i.createElement("option", null), [...n.collection.getKeys()].map(e => {
    let t = n.collection.getItem(e);
    if ("item" === t.type) return i.createElement("option", {
      key: t.key,
      value: t.key
    }, t.textValue)
  })))) : c ? i.createElement("input", {
    type: "hidden",
    autoComplete: h.autoComplete,
    name: c,
    disabled: u,
    value: null !== (t = n.selectedKey) && void 0 !== t ? t : ""
  }) : null
}