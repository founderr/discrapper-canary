"use strict";
n.d(t, {
  D: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(507274),
  l = n(838331),
  u = n(837507);

function _(e) {
  let {
    children: t,
    placeholder: n,
    value: s,
    onChange: _,
    onClose: c,
    showScrollbar: d,
    className: E,
    multiSelect: I,
    ...T
  } = e, h = r.useCallback(e => {
    _(e), !I && (null == c || c())
  }, [_, c, I]);
  return (0, i.jsx)(a.V, {
    className: o()(u.container, E, {
      [u.scroller]: d
    }),
    children: (0, i.jsx)(l.hQ, {
      ...T,
      showScrollbar: d,
      value: s,
      multiSelect: I,
      onChange: h,
      placeholder: n,
      children: t,
      listClassName: u.list
    })
  })
}