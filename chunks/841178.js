t.r(e), t.d(e, {
  default: function() {
    return c
  }
});
var n = t(735250);
t(470079);
var a = t(481060),
  o = t(285952),
  i = t(153124),
  d = t(952164),
  r = t(689938),
  l = t(41565);

function c(s) {
  let {
    transitionState: e,
    onClose: t
  } = s, c = (0, i.Dt)();
  return (0, n.jsxs)(a.ModalRoot, {
    "aria-labelledby": c,
    transitionState: e,
    size: a.ModalSize.SMALL,
    children: [(0, n.jsx)(a.ModalHeader, {
      separator: !1,
      children: (0, n.jsx)(a.Heading, {
        id: c,
        variant: "heading-lg/semibold",
        children: r.Z.Messages.SPOTIFY_PREMIUM_UPGRADE_HEADER
      })
    }), (0, n.jsxs)(a.ModalContent, {
      children: [(0, n.jsx)(o.Z, {
        justify: o.Z.Justify.CENTER,
        children: (0, n.jsx)("div", {
          className: l.image
        })
      }), (0, n.jsx)(a.Text, {
        className: l.text,
        variant: "text-sm/normal",
        children: r.Z.Messages.SPOTIFY_PREMIUM_UPGRADE_BODY
      })]
    }), (0, n.jsxs)(a.ModalFooter, {
      children: [(0, n.jsx)(a.Button, {
        onClick: function() {
          (0, d.KK)(), t()
        },
        children: r.Z.Messages.SPOTIFY_PREMIUM_UPGRADE_BUTTON
      }), (0, n.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.PRIMARY,
        onClick: t,
        children: r.Z.Messages.CANCEL
      })]
    })]
  })
}