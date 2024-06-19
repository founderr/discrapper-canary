n.d(t, {
  o: function() {
    return I
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(481060),
  r = n(230711),
  o = n(266843),
  c = n(981631),
  u = n(689938),
  d = n(342101),
  E = n(87181);

function _() {
  return (0, s.jsx)("div", {
    className: d.buttonContainer,
    children: (0, s.jsx)(a.Button, {
      className: d.button,
      color: a.ButtonColors.BRAND,
      onClick: () => {
        r.Z.open(c.oAB.INVENTORY)
      },
      children: u.Z.Messages.GIFT_INVENTORY
    })
  })
}

function I() {
  let {
    containerRef: e,
    size: t
  } = (0, o.h)();
  return (0, s.jsxs)("div", {
    ref: t => e.current = t,
    className: l()(d.container, {
      [d.wide]: "lg" === t,
      [d.tall]: "lg" !== t
    }),
    children: [(0, s.jsxs)("div", {
      className: d.contentContainer,
      children: [(0, s.jsx)(a.Heading, {
        variant: "lg" === t ? "heading-xl/bold" : "heading-lg/bold",
        color: "header-primary",
        children: u.Z.Messages.QUESTS_EMBED_INVALID_HEADING
      }), (0, s.jsx)(a.Text, {
        variant: "lg" === t ? "text-sm/medium" : "text-xs/medium",
        color: "text-normal",
        className: d.__invalid_mobileWebCopy,
        children: u.Z.Messages.QUESTS_EMBED_INVALID_BODY_2
      }), (0, s.jsx)(_, {})]
    }), (0, s.jsx)("div", {
      className: d.imgContainer,
      children: (0, s.jsx)("img", {
        src: E,
        alt: "",
        className: d.missingQuestImage
      })
    })]
  })
}