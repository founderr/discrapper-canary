"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("481060"),
  o = n("441674"),
  u = n("308083"),
  d = n("689938"),
  c = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    playstyle: n
  } = e, l = (0, r.useToken)(r.tokens.colors.WHITE), f = s.useMemo(() => [{
    type: u.ClanPlaystyles.SOCIAL,
    emoji: "\uD83D\uDC4B",
    title: d.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE,
    subtitle: d.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_SUBTITLE
  }, {
    type: u.ClanPlaystyles.CASUAL,
    emoji: "\uD83C\uDFAE",
    title: d.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE,
    subtitle: d.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_SUBTITLE
  }, {
    type: u.ClanPlaystyles.COMPETITIVE,
    emoji: "⚔️",
    title: d.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE,
    subtitle: d.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_SUBTITLE
  }, {
    type: u.ClanPlaystyles.VERY_HARDCORE,
    emoji: "\uD83D\uDC80",
    title: d.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE,
    subtitle: d.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_SUBTITLE
  }], []);
  return (0, a.jsxs)("div", {
    className: c.slideContent,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: c.title,
      children: d.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: c.subtitle,
      children: d.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE
    }), (0, a.jsx)("div", {
      className: c.playstyleSelect,
      children: f.map(e => (0, a.jsxs)(r.Clickable, {
        className: i()(c.playstyleOption, {
          [c.selectedPlaystyle]: e.type === n
        }),
        onClick: () => t({
          playstyle: e.type
        }),
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-xxl/medium",
          children: e.emoji
        }), (0, a.jsx)(r.Heading, {
          variant: "heading-md/medium",
          className: c.playstyleTitle,
          children: e.title
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: e.subtitle
        }), e.type === n && (0, a.jsx)(o.default, {
          backgroundColor: l.hex(),
          className: c.checkmark
        })]
      }, e.type))
    })]
  })
}