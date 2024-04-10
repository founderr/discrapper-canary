"use strict";
l.r(t), l.d(t, {
  default: function() {
    return a
  }
}), l("47120");
var o = l("735250"),
  n = l("470079"),
  r = l("481060"),
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
  } = e, [h, C] = n.useState(() => 0 === a || a === t || l.some(e => e === a) ? null : a);
  n.useEffect(() => {
    C(0 === a || a === t || l.some(e => e === a) ? null : a)
  }, [a, l, t]);
  let p = n.useCallback(e => {
      null == c || c(e), C(null)
    }, [c, C]),
    f = n.useCallback(e => {
      null == c || c(e), C(e)
    }, [c, C]),
    x = n.useCallback(() => (0, o.jsx)(s.CustomColorPicker, {
      onChange: f,
      value: h
    }), [f, h]),
    m = n.useCallback(e => {
      let t = (0, o.jsx)(s.CustomColorButton, {
        ...e,
        "aria-label": i.default.Messages.CUSTOM_COLOR
      });
      return u ? t : (0, o.jsx)(r.Popout, {
        renderPopout: x,
        position: d,
        children: e => (0, o.jsx)(r.Tooltip, {
          text: i.default.Messages.CUSTOM_COLOR,
          position: "bottom",
          children: l => (0, o.jsx)("div", {
            ...l,
            ...e,
            children: t
          })
        })
      })
    }, [d, u, x]),
    g = n.useCallback(e => {
      let t = (0, o.jsx)(s.DefaultColorButton, {
        ...e
      });
      return u ? t : (0, o.jsx)(r.Tooltip, {
        text: i.default.Messages.DEFAULT,
        position: "bottom",
        children: e => (0, o.jsx)("div", {
          ...e,
          children: t
        })
      })
    }, [u]);
  return (0, o.jsx)(s.default, {
    ...e,
    renderDefaultButton: g,
    renderCustomButton: m,
    customColor: h,
    onChange: p
  })
}