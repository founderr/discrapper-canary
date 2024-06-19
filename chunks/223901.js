a.r(s), a.d(s, {
  default: function() {
    return u
  }
});
var t = a(735250),
  n = a(470079),
  i = a(481060),
  o = a(91159),
  r = a(593130),
  c = a(689938),
  l = a(438817);

function u(e) {
  let {
    channel: s,
    onClose: a,
    transitionState: u
  } = e;
  return n.useEffect(() => {
    (0, o.U4)()
  }, []), (0, t.jsx)(i.ModalRoot, {
    className: l.modal,
    transitionState: u,
    "aria-label": c.Z.Messages.THREADS,
    size: i.ModalSize.DYNAMIC,
    children: (0, t.jsx)(r.Z, {
      className: l.browser,
      channel: s,
      onClose: a
    })
  })
}