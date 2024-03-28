"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  i = n("913527"),
  r = n.n(i),
  o = n("718017"),
  u = n("481060"),
  d = n("689938"),
  c = n("653196");
t.default = e => {
  let {
    guildName: t,
    playstyleString: n,
    gamesString: s,
    interestsString: i,
    timeString: f,
    animatedTextStyle: E
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: c.scrollBg,
      children: [(0, a.jsx)("div", {
        className: c.scrollBgTop
      }), (0, a.jsx)("div", {
        className: c.scrollBgBottom
      })]
    }), (0, a.jsxs)(o.animated.div, {
      className: c.overviewSidebarContent,
      style: E,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        color: "text-muted",
        className: c.overviewText,
        children: d.default.Messages.CLAN_SETUP_OVERVIEW_TITLE.format({
          guildName: t
        })
      }), (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: c.overviewText,
        children: d.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
          date: r()().format("MMMM YYYY")
        })
      }), null != s ? null != n ? (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: c.overviewText,
        children: d.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
          playstyle: n,
          games: s
        })
      }) : (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: c.overviewText,
        children: d.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({
          games: s
        })
      }) : (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: c.overviewText,
        children: d.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT
      }), null != i ? (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: c.overviewText,
        children: d.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
          traits: i
        })
      }) : null, null != f ? (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: c.overviewText,
        children: d.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMETIME.format({
          selectedTimes: f
        })
      }) : null, (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: l()(c.overviewText, c.lastParagraph),
        children: d.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
      }), (0, a.jsxs)("div", {
        className: c.signatureBlock,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "none",
          children: "x"
        }), (0, a.jsx)(u.Text, {
          variant: "text-lg/normal",
          color: "none",
          className: c.signatureText,
          children: d.default.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
        })]
      })]
    })]
  })
}