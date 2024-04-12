"use strict";
l.r(t), l.d(t, {
  default: function() {
    return a
  }
}), l("47120");
var n = l("735250"),
  o = l("470079"),
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
  } = e, [h, C] = o.useState(() => 0 === a || a === t || l.some(e => e === a) ? null : a);
  o.useEffect(() => {
    C(0 === a || a === t || l.some(e => e === a) ? null : a)
  }, [a, l, t]);
  let p = o.useCallback(e => {
      null == c || c(e), C(null)
    }, [c, C]),
    f = o.useCallback(e => {
      null == c || c(e), C(e)
    }, [c, C]),
    x = o.useCallback(() => (0, n.jsx)(s.CustomColorPicker, {
      onChange: f,
      value: h
    }), [f, h]),
    m = o.useCallback(e => {
      let t = (0, n.jsx)(s.CustomColorButton, {
        ...e,
        "aria-label": i.default.Messages.CUSTOM_COLOR
      });
      return u ? t : (0, n.jsx)(r.Popout, {
        renderPopout: x,
        position: d,
        children: e => (0, n.jsx)(r.Tooltip, {
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
    g = o.useCallback(e => {
      let t = (0, n.jsx)(s.DefaultColorButton, {
        ...e
      });
      return u ? t : (0, n.jsx)(r.Tooltip, {
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
    onChange: p
  })
}