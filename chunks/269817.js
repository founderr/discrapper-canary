e.r(s), e.d(s, {
  default: function() {
    return d
  }
});
var o = e(735250);
e(470079);
var n = e(481060),
  a = e(782568),
  i = e(153124),
  l = e(689938),
  r = e(650744);

function d(t) {
  let {
    url: s,
    onClose: d,
    transitionState: N
  } = t, c = (0, i.Dt)();
  return (0, o.jsxs)(n.ModalRoot, {
    transitionState: N,
    "aria-labelledby": c,
    children: [(0, o.jsx)("img", {
      className: r.art,
      src: e(902623),
      alt: ""
    }), (0, o.jsx)(n.ModalContent, {
      children: (0, o.jsxs)("div", {
        className: r.modalContent,
        children: [(0, o.jsx)(n.Heading, {
          id: c,
          variant: "heading-lg/semibold",
          className: r.title,
          children: l.Z.Messages.LINK_NOT_DISCORD_WARNING_TITLE
        }), (0, o.jsx)(n.Text, {
          variant: "text-md/normal",
          className: r.body,
          children: l.Z.Messages.LINK_NOT_DISCORD_WARNING_BODY.format({
            url: s
          })
        })]
      })
    }), (0, o.jsxs)(n.ModalFooter, {
      children: [(0, o.jsx)(n.Button, {
        type: "button",
        size: n.Button.Sizes.MEDIUM,
        color: n.Button.Colors.BRAND,
        onClick: d,
        children: l.Z.Messages.LINK_NOT_DISCORD_WARNING_CANCEL
      }), (0, o.jsx)(n.Button, {
        type: "button",
        size: n.Button.Sizes.MEDIUM,
        color: n.Button.Colors.TRANSPARENT,
        look: n.Button.Looks.LINK,
        onClick: () => {
          (0, a.Z)(s, !0)
        },
        children: l.Z.Messages.LINK_NOT_DISCORD_WARNING_CONTINUE
      })]
    })]
  })
}