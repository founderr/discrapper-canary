"use strict";
n.r(t), n.d(t, {
  DateInput: function() {
    return h
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  a = n("227645"),
  o = n("130969"),
  l = n("442761"),
  u = n("201959"),
  c = n("943232"),
  d = n("556388"),
  p = n("182893");

function h(e) {
  let {
    value: t,
    onSelect: n,
    dateFormat: r = "MMM D, YYYY",
    minDate: h,
    maxDate: f,
    disabled: E = !1
  } = e;
  return (0, i.jsx)(l.Popout, {
    renderPopout: function(e) {
      let {
        closePopout: r
      } = e;
      return (0, i.jsx)(o.Dialog, {
        children: (0, i.jsx)(u.default, {
          minDate: h,
          maxDate: f,
          value: t,
          onSelect: e => {
            n(e), r()
          },
          calendarClassName: d.calendarContainer,
          onClickOutside: r,
          autoFocus: !0
        })
      })
    },
    position: "bottom",
    children: e => {
      let {
        onClick: n,
        ...o
      } = e;
      return (0, i.jsx)(a.Clickable, {
        ...o,
        className: s(p.inputDefault, d.container, {
          [p.disabled]: E,
          [d.disabled]: E
        }),
        onClick: E ? void 0 : n,
        "aria-disabled": E,
        children: (0, i.jsxs)("div", {
          className: d.content,
          children: [(0, i.jsx)("div", {
            className: d.text,
            children: null == t ? void 0 : t.format(r)
          }), (0, i.jsx)(c.default, {
            className: d.icon
          })]
        })
      })
    }
  })
}