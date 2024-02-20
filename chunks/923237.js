"use strict";
n.r(t), n.d(t, {
  ComboboxPopout: function() {
    return c
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("130969"),
  l = n("960486"),
  u = n("873301");

function c(e) {
  let {
    children: t,
    placeholder: n,
    value: s,
    onChange: c,
    onClose: d,
    showScrollbar: p,
    className: h,
    multiSelect: f,
    ...E
  } = e, _ = r.useCallback(e => {
    c(e), !f && (null == d || d())
  }, [c, d, f]);
  return (0, i.jsx)(o.Dialog, {
    className: a(u.container, h, {
      [u.scroller]: p
    }),
    children: (0, i.jsx)(l.Combobox, {
      ...E,
      showScrollbar: p,
      value: s,
      multiSelect: f,
      onChange: _,
      placeholder: n,
      children: t,
      listClassName: u.list
    })
  })
}