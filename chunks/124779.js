t.r(e), t.d(e, {
  default: function() {
    return d
  }
});
var i = t(735250);
t(470079);
var s = t(481060),
  l = t(287734),
  a = t(153124),
  r = t(471253),
  u = t(939863),
  o = t(689938),
  c = t(472659);

function d(n) {
  let {
    channel: e,
    transitionState: t,
    onClose: d
  } = n, _ = (0, a.Dt)();

  function E() {
    l.default.disconnect(), d()
  }
  return (0, i.jsxs)(s.ModalRoot, {
    transitionState: t,
    "aria-labelledby": _,
    children: [(0, i.jsxs)(s.ModalContent, {
      className: c.content,
      children: [(0, i.jsx)(u.Z, {
        children: (0, i.jsx)("div", {
          className: c.iconBackground,
          children: (0, i.jsx)(s.StageXIcon, {
            size: "custom",
            color: "currentColor",
            width: 40,
            height: 40,
            className: c.headerIcon
          })
        })
      }), (0, i.jsx)(s.Heading, {
        id: _,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: c.title,
        children: o.Z.Messages.EXPLICIT_END_STAGE_TITLE
      }), (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: c.subtitle,
        children: o.Z.Messages.EXPLICIT_END_STAGE_SUBTITLE
      })]
    }), (0, i.jsxs)(s.ModalFooter, {
      children: [(0, i.jsx)(s.Button, {
        color: s.Button.Colors.RED,
        onClick: function() {
          (0, r.NZ)(e), E()
        },
        children: o.Z.Messages.EXPLICIT_END_STAGE_CONFIRM
      }), (0, i.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        className: c.cancelButton,
        onClick: E,
        children: o.Z.Messages.EXPLICIT_END_STAGE_CANCEL
      })]
    })]
  })
}