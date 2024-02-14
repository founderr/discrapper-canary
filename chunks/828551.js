"use strict";
n.r(t), n.d(t, {
  useVisuallyHidden: function() {
    return s
  },
  VisuallyHidden: function() {
    return c
  }
}), n("222007");
var r = n("240849"),
  a = n("884691"),
  o = n("388032");
let i = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};

function s() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    {
      style: t,
      isFocusable: n
    } = e,
    [r, s] = (0, a.useState)(!1),
    {
      focusWithinProps: c
    } = (0, o.useFocusWithin)({
      isDisabled: !n,
      onFocusWithinChange: e => s(e)
    }),
    l = (0, a.useMemo)(() => r ? t : t ? {
      ...i,
      ...t
    } : i, [r]);
  return {
    visuallyHiddenProps: {
      ...c,
      style: l
    }
  }
}

function c(e) {
  let {
    children: t,
    elementType: Element = "div",
    isFocusable: n,
    style: o,
    ...i
  } = e, {
    visuallyHiddenProps: c
  } = s(e);
  return a.createElement(Element, (0, r.mergeProps)(i, c), t)
}