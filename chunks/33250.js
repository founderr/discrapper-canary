"use strict";
a.r(l), a.d(l, {
  default: function() {
    return i
  }
});
var t = a("37983"),
  n = a("884691"),
  r = a("77078"),
  s = a("487269"),
  u = a("537560"),
  C = a("782340"),
  d = a("813599");

function i(e) {
  let {
    channel: l,
    onClose: a,
    transitionState: i
  } = e;
  return n.useEffect(() => {
    (0, s.trackThreadBrowserOpened)()
  }, []), (0, t.jsx)(r.ModalRoot, {
    className: d.modal,
    transitionState: i,
    "aria-label": C.default.Messages.THREADS,
    size: r.ModalSize.DYNAMIC,
    children: (0, t.jsx)(u.default, {
      className: d.browser,
      channel: l,
      onClose: a
    })
  })
}