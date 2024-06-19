t.r(s), t.d(s, {
  default: function() {
    return h
  }
});
var a = t(735250);
t(470079);
var o = t(780384),
  l = t(481060),
  n = t(410030),
  r = t(153124),
  i = t(689938),
  c = t(376065),
  d = t(167969),
  u = t(557256);

function h(e) {
  let {
    onClose: s,
    transitionState: t
  } = e, h = (0, r.Dt)(), m = (0, o.wj)((0, n.ZP)());
  return (0, a.jsxs)(l.ModalRoot, {
    transitionState: t,
    "aria-labelledby": h,
    size: l.ModalSize.SMALL,
    children: [(0, a.jsxs)(l.ModalContent, {
      className: c.content,
      children: [(0, a.jsx)(l.ModalCloseButton, {
        className: c.closeButton,
        onClick: s
      }), (0, a.jsx)("img", {
        className: c.image,
        src: m ? d : u,
        alt: ""
      }), (0, a.jsx)(l.Text, {
        variant: "text-lg/semibold",
        color: "header-primary",
        className: c.title,
        children: i.Z.Messages.GUILD_PRODUCT_NOT_AVAILABLE_TITLE
      }), (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: c.body,
        children: i.Z.Messages.GUILD_PRODUCT_NOT_AVAILABLE_BODY
      })]
    }), (0, a.jsx)(l.ModalFooter, {
      children: (0, a.jsx)(l.Button, {
        className: c.button,
        color: l.Button.Colors.BRAND,
        onClick: s,
        size: l.Button.Sizes.LARGE,
        children: i.Z.Messages.OKAY
      })
    })]
  })
}