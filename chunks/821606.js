n.r(e), n.d(e, {
  default: function() {
    return d
  }
});
var a = n(735250);
n(470079);
var r = n(481060),
  s = n(988158),
  o = n(285952),
  l = n(153124),
  i = n(689938),
  c = n(116512);

function d(t) {
  let {
    url: e,
    onClose: d,
    transitionState: u
  } = t, x = (0, l.Dt)(), {
    protocol: h,
    hostname: m,
    theRestOfTheUrl: f
  } = (0, s.h)(e);
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: u,
    "aria-labelledby": x,
    children: [(0, a.jsx)("img", {
      className: c.art,
      src: n(902623),
      alt: ""
    }), (0, a.jsx)(r.ModalContent, {
      children: (0, a.jsxs)(o.Z, {
        direction: o.Z.Direction.VERTICAL,
        justify: o.Z.Justify.CENTER,
        children: [(0, a.jsx)(r.Heading, {
          id: x,
          variant: "heading-lg/semibold",
          className: c.title,
          children: i.Z.Messages.BAD_LINK_WARNING_TITLE_V2
        }), (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          className: c.body,
          children: i.Z.Messages.BAD_LINK_WARNING_BODY_V2.format()
        }), (0, a.jsxs)(r.Scroller, {
          className: c.linkCalloutContainer,
          children: [(0, a.jsxs)(r.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: [h, "//"]
          }), (0, a.jsx)(r.Text, {
            tag: "span",
            variant: "text-md/semibold",
            color: "text-normal",
            children: m
          }), (0, a.jsx)(r.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: f
          })]
        })]
      })
    }), (0, a.jsx)(r.ModalFooter, {
      children: (0, a.jsx)(r.Button, {
        type: "button",
        size: r.Button.Sizes.MEDIUM,
        color: r.Button.Colors.BRAND,
        onClick: d,
        children: i.Z.Messages.GO_BACK
      })
    })]
  })
}