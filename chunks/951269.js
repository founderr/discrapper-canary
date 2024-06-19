t.r(e), t.d(e, {
  default: function() {
    return d
  }
});
var a = t(735250);
t(470079);
var o = t(481060),
  l = t(153124),
  n = t(154921),
  i = t(689938),
  c = t(161161),
  r = t(462991);

function d(s) {
  let {
    onClose: e,
    transitionState: t,
    kind: d
  } = s, u = (0, l.Dt)();
  return (0, a.jsxs)(o.ModalRoot, {
    transitionState: t,
    "aria-labelledby": u,
    size: o.ModalSize.SMALL,
    children: [(0, a.jsxs)(o.ModalContent, {
      className: c.content,
      children: [(0, a.jsx)(o.ModalCloseButton, {
        className: c.closeButton,
        onClick: e
      }), (0, a.jsx)("img", {
        className: c.image,
        src: r,
        alt: ""
      }), (0, a.jsx)(n.Z, {
        className: c.title,
        id: u,
        size: n.Z.Sizes.SIZE_24,
        color: n.Z.Colors.HEADER_PRIMARY,
        children: i.Z.Messages.INACCESSIBLE_CHANNEL_LINK_TITLE
      }), (0, a.jsx)(o.Text, {
        className: c.subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: "user" === d ? i.Z.Messages.INACCESSIBLE_USER_LINK_SUBTITLE : i.Z.Messages.INACCESSIBLE_CHANNEL_LINK_SUBTITLE
      })]
    }), (0, a.jsx)(o.ModalFooter, {
      children: (0, a.jsx)(o.Button, {
        className: c.button,
        color: o.Button.Colors.BRAND,
        onClick: e,
        size: o.Button.Sizes.LARGE,
        children: i.Z.Messages.OKAY
      })
    })]
  })
}