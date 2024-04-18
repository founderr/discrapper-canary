"use strict";
l.r(t), l.d(t, {
  default: function() {
    return a
  }
}), l("47120");
var n = l("735250"),
  r = l("470079"),
  o = l("481060"),
  s = l("703685"),
  i = l("689938");

function a(e) {
  let {
    defaultColor: t,
    colors: l,
    value: a,
    onChange: c,
    disabled: u = !1,
    customPickerPosition: d = "bottom"
  } = e, [h, f] = r.useState(() => 0 === a || a === t || l.some(e => e === a) ? null : a);
  r.useEffect(() => {
    f(0 === a || a === t || l.some(e => e === a) ? null : a)
  }, [a, l, t]);
  let C = r.useCallback(e => {
      null == c || c(e), f(null)
    }, [c, f]),
    p = r.useCallback(e => {
      null == c || c(e), f(e)
    }, [c, f]),
    x = r.useCallback(() => (0, n.jsx)(s.CustomColorPicker, {
      onChange: p,
      value: h
    }), [p, h]),
    m = r.useCallback(e => {
      let t = (0, n.jsx)(s.CustomColorButton, {
        ...e,
        "aria-label": i.default.Messages.CUSTOM_COLOR
      });
      return u ? t : (0, n.jsx)(o.Popout, {
        renderPopout: x,
        position: d,
        children: e => (0, n.jsx)(o.Tooltip, {
          text: i.default.Messages.CUSTOM_COLOR,
          position: "bottom",
          children: l => (0, n.jsx)("div", {
            ...l,
            ...e,
            children: t
          })
        })
      })
    }, [d, u, x]),
    g = r.useCallback(e => {
      let t = (0, n.jsx)(s.DefaultColorButton, {
        ...e
      });
      return u ? t : (0, n.jsx)(o.Tooltip, {
        text: i.default.Messages.DEFAULT,
        position: "bottom",
        children: e => (0, n.jsx)("div", {
          ...e,
          children: t
        })
      })
    }, [u]);
  return (0, n.jsx)(s.default, {
    ...e,
    renderDefaultButton: g,
    renderCustomButton: m,
    customColor: h,
    onChange: C
  })
}