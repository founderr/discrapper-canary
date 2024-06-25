a.r(s);
var o = a(735250),
  t = a(470079),
  c = a(442837),
  l = a(481060),
  n = a(541099),
  r = a(827498),
  d = a(421591),
  i = a(314734),
  u = a(689938),
  h = a(594992);
s.default = t.memo(function(e) {
  let {
    channel: s,
    ...a
  } = e, p = (0, c.e7)([n.Z], () => n.Z.shouldShowModal());
  return t.useEffect(() => {
    !p && (0, l.closeModal)(i.e9)
  }), (0, o.jsx)(l.ModalRoot, {
    className: h.root,
    "aria-label": u.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
    ...a,
    children: (0, o.jsx)(d.Z, {
      channel: s,
      entrypoint: r._.VOICE
    })
  })
})