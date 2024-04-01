"use strict";
n.r(t);
var s = n("735250");
n("470079");
var l = n("481060"),
  a = n("285952"),
  i = n("245315"),
  r = n("689938"),
  o = n("64038");
t.default = () => (0, s.jsxs)(a.default, {
  align: a.default.Align.CENTER,
  justify: a.default.Justify.CENTER,
  direction: a.default.Direction.VERTICAL,
  className: o.popout,
  children: [(0, s.jsx)("img", {
    alt: "",
    src: (0, i.getPublicSystemMessageAvatar)(),
    className: o.avatar
  }), (0, s.jsxs)(a.default, {
    align: a.default.Align.CENTER,
    justify: a.default.Justify.CENTER,
    className: o.nameWrapper,
    children: [(0, s.jsx)(l.Tooltip, {
      text: r.default.Messages.STAFF_BADGE_TOOLTIP,
      children: e => (0, s.jsx)("div", {
        ...e,
        className: o.staffBadge
      })
    }), (0, s.jsx)(l.Heading, {
      className: o.header,
      variant: "heading-md/semibold",
      children: r.default.Messages.ANNOUNCEMENT_GUILD_POPOUT_NAME
    })]
  }), (0, s.jsx)(l.Text, {
    className: o.description,
    color: "header-secondary",
    variant: "text-sm/normal",
    children: r.default.Messages.ANNOUNCEMENT_GUILD_DESCRIPTION
  }), (0, s.jsx)(l.Text, {
    className: o.description,
    color: "header-secondary",
    variant: "text-sm/normal",
    children: r.default.Messages.ANNOUNCEMENT_GUILD_HERE_TO_HELP
  })]
})