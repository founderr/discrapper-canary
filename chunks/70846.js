a.r(s);
var r = a(735250);
a(470079);
var l = a(481060),
  t = a(153124),
  o = a(426642),
  n = a(689938),
  c = a(296277);
s.default = e => {
  let {
    transitionState: s,
    errors: a,
    onClose: d
  } = e, i = (0, t.Dt)();
  return (0, r.jsxs)(l.ModalRoot, {
    transitionState: s,
    "aria-labelledby": i,
    children: [(0, r.jsx)(l.ModalHeader, {
      separator: !1,
      className: c.modalHeader,
      children: (0, r.jsx)(l.ModalCloseButton, {
        onClick: d,
        className: c.closeButton
      })
    }), (0, r.jsxs)(l.ModalContent, {
      className: c.modalContent,
      children: [(0, r.jsxs)(l.FormSection, {
        className: c.header,
        children: [(0, r.jsx)(l.FormTitle, {
          id: i,
          className: c.title,
          children: n.Z.Messages.UPLOAD_ERROR_TITLE
        }), (0, r.jsx)(l.FormText, {
          type: l.FormTextTypes.DESCRIPTION,
          children: n.Z.Messages.UPLOAD_ERROR_DESCRIPTION
        })]
      }), (0, r.jsx)("div", {
        className: c.errors,
        children: (0, r.jsx)(l.Scroller, {
          children: a.map(e => (0, r.jsx)(o.Z, {
            error: e
          }, e.filename))
        })
      }), (0, r.jsx)(l.Button, {
        onClick: d,
        children: n.Z.Messages.GOT_IT
      })]
    })]
  })
}