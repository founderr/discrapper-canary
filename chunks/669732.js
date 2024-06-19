a.r(s);
var t = a(735250);
a(470079);
var r = a(120356),
  n = a.n(r),
  i = a(481060),
  l = a(923928),
  o = a(285952),
  c = a(689938),
  d = a(306798),
  m = a(337667);
s.default = e => {
  let {
    onClose: s,
    transitionState: a,
    showHideSuppressWarning: r = !1
  } = e;
  return (0, t.jsx)(i.ModalRoot, {
    transitionState: a,
    className: d.container,
    "aria-label": c.Z.Messages.HUB_STUDY_ROOM_NOTICE_TITLE,
    children: (0, t.jsxs)("form", {
      onSubmit: e => {
        null == e || e.preventDefault(), l.Z.clearSuppressWarning(), null == s || s()
      },
      className: d.form,
      children: [(0, t.jsxs)(i.ModalContent, {
        className: d.modalContent,
        children: [(0, t.jsx)("img", {
          src: m,
          alt: "",
          className: d.hero
        }), (0, t.jsx)(i.Text, {
          className: d.title,
          color: "header-primary",
          variant: "text-md/semibold",
          children: c.Z.Messages.HUB_STUDY_ROOM_SUPPRESS_TITLE
        }), (0, t.jsx)(i.Text, {
          className: d.description,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: c.Z.Messages.HUB_STUDY_ROOM_SUPPRESS_DESCRIPTION
        })]
      }), (0, t.jsxs)(i.ModalFooter, {
        justify: o.Z.Justify.BETWEEN,
        wrap: o.Z.Wrap.WRAP,
        children: [(0, t.jsx)(i.Button, {
          type: "submit",
          size: i.Button.Sizes.LARGE,
          className: n()(d.primaryButton, d.gutter),
          autoFocus: !0,
          children: c.Z.Messages.GOT_IT
        }), r && (0, t.jsx)(i.Clickable, {
          onClick: () => l.Z.clearSuppressWarning(!0),
          className: d.minorContainer,
          children: (0, t.jsx)(i.Text, {
            className: d.minorAction,
            variant: "text-xs/normal",
            children: c.Z.Messages.DONT_SHOW_AGAIN
          })
        })]
      })]
    })
  })
}