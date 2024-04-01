"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("913527"),
  o = n.n(r),
  u = n("718017"),
  d = n("442837"),
  c = n("481060"),
  f = n("430824"),
  E = n("594174"),
  h = n("823379"),
  _ = n("650461"),
  C = n("924801"),
  S = n("308083"),
  m = n("689938"),
  I = n("653196");
t.default = e => {
  var t;
  let {
    guildId: n,
    signed: l,
    setSigned: r,
    animatedTextStyle: p
  } = e, T = (0, d.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getGuild(n)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : ""
  }), {
    selectedGames: g,
    playstyle: A,
    interests: N,
    primetime: R
  } = (0, d.useStateFromStoresObject)([_.default], () => {
    var e;
    return null !== (e = _.default.getState(n)) && void 0 !== e ? e : {}
  }), O = null != g && Object.keys(g).length > 0 ? Object.values(g).map(e => e.name).join(", ") : null, v = s.useMemo(() => {
    switch (A) {
      case S.ClanPlaystyles.SOCIAL:
        return m.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE;
      case S.ClanPlaystyles.CASUAL:
        return m.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE;
      case S.ClanPlaystyles.COMPETITIVE:
        return m.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE;
      case S.ClanPlaystyles.VERY_HARDCORE:
        return m.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE;
      default:
        return null
    }
  }, [A]), L = (null == N ? void 0 : N.size) > 0 ? Array.from(N).join(", ") : null, P = (null == R ? void 0 : R.length) > 0 ? R.map(e => (0, C.primetimeToString)(e)).filter(h.isNotNullish) : [], M = (null == P ? void 0 : P.length) > 0 ? P.join(", ") : null;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: I.scrollBg,
      children: [(0, a.jsx)("div", {
        className: I.scrollBgTop
      }), (0, a.jsx)("div", {
        className: I.scrollBgBottom
      })]
    }), (0, a.jsxs)(u.animated.div, {
      className: I.overviewSidebarContent,
      style: p,
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        color: "text-muted",
        className: I.overviewText,
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_TITLE.format({
          guildName: T
        })
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: I.overviewText,
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
          date: o()().format("MMMM YYYY")
        })
      }), null != O ? null != v ? (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: I.overviewText,
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
          playstyle: v,
          games: O
        })
      }) : (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: I.overviewText,
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({
          games: O
        })
      }) : (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: I.overviewText,
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT
      }), null != L ? (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: I.overviewText,
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
          traits: L
        })
      }) : null, null != M ? (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: I.overviewText,
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMETIME.format({
          selectedTimes: M
        })
      }) : null, (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: i()(I.overviewText, I.lastParagraph),
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
      }), (0, a.jsxs)(c.Clickable, {
        onClick: () => {
          null == r || r(!0)
        },
        className: i()(I.signatureBlock, {
          [I.clickable]: null != r
        }),
        children: [(0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "none",
          children: "x"
        }), l ? (0, a.jsx)(c.Text, {
          variant: "text-lg/normal",
          color: "header-primary",
          className: I.signatureText,
          children: null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.username
        }) : (0, a.jsx)(c.Text, {
          variant: "text-lg/normal",
          color: "none",
          className: I.signatureText,
          children: m.default.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
        })]
      })]
    })]
  })
}