var s = n(735250);
n(470079);
var i = n(481060),
  l = n(285952),
  a = n(245315),
  r = n(689938),
  o = n(404154);
t.Z = () => (0, s.jsxs)(l.Z, {
  align: l.Z.Align.CENTER,
  justify: l.Z.Justify.CENTER,
  direction: l.Z.Direction.VERTICAL,
  className: o.popout,
  children: [(0, s.jsx)("img", {
    alt: "",
    src: (0, a.QA)(),
    className: o.avatar
  }), (0, s.jsxs)(l.Z, {
    align: l.Z.Align.CENTER,
    justify: l.Z.Justify.CENTER,
    className: o.nameWrapper,
    children: [(0, s.jsx)(i.Tooltip, {
      text: r.Z.Messages.STAFF_BADGE_TOOLTIP,
      children: e => (0, s.jsx)("div", {
        ...e,
        className: o.staffBadge
      })
    }), (0, s.jsx)(i.Heading, {
      className: o.header,
      variant: "heading-md/semibold",
      children: r.Z.Messages.ANNOUNCEMENT_GUILD_POPOUT_NAME
    })]
  }), (0, s.jsx)(i.Text, {
    className: o.description,
    color: "header-secondary",
    variant: "text-sm/normal",
    children: r.Z.Messages.ANNOUNCEMENT_GUILD_DESCRIPTION
  }), (0, s.jsx)(i.Text, {
    className: o.description,
    color: "header-secondary",
    variant: "text-sm/normal",
    children: r.Z.Messages.ANNOUNCEMENT_GUILD_HERE_TO_HELP
  })]
})