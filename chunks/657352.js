var l = n(735250);
n(470079);
var i = n(481060),
  s = n(689938),
  a = n(995637);
t.Z = e => {
  let {
    guild: t,
    onClose: r
  } = e;
  return (0, l.jsxs)("div", {
    className: a.container,
    children: [(0, l.jsx)("img", {
      alt: "",
      className: a.image,
      src: n(238980)
    }), (0, l.jsxs)("div", {
      className: a.content,
      children: [(0, l.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        children: s.Z.Messages.LURKER_MODE_POPOUT_SUCCESS_HEADER.format({
          guild: t.name
        })
      }), (0, l.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: s.Z.Messages.LURKER_MODE_POPOUT_SUCCESS_BODY
      }), (0, l.jsx)("div", {
        className: a.buttonContainer,
        children: (0, l.jsx)(i.Button, {
          onClick: r,
          children: s.Z.Messages.LURKER_MODE_POPOUT_SUCCESS_BUTTON
        })
      })]
    })]
  })
}