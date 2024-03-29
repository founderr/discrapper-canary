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
    gameDetails: l,
    signed: r,
    setSigned: p,
    animatedTextStyle: T
  } = e, g = (0, d.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getGuild(n)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : ""
  }), {
    selectedGames: A,
    playstyle: N,
    interests: R,
    primetime: O
  } = (0, d.useStateFromStoresObject)([_.default], () => {
    var e;
    return null !== (e = _.default.getState(n)) && void 0 !== e ? e : {}
  }), v = (null == A ? void 0 : A.size) > 0 && null != l ? Array.from(A).map(e => {
    var t;
    return null === (t = l[e]) || void 0 === t ? void 0 : t.name
  }).join(", ") : null, L = s.useMemo(() => {
    switch (N) {
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
  }, [N]), P = (null == R ? void 0 : R.size) > 0 ? Array.from(R).join(", ") : null, M = (null == O ? void 0 : O.length) > 0 ? O.map(e => (0, C.primetimeToString)(e)).filter(h.isNotNullish) : [], y = (null == M ? void 0 : M.length) > 0 ? M.join(", ") : null;
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
      style: T,
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        color: "text-muted",
        className: I.overviewText,
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_TITLE.format({
          guildName: g
        })
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: I.overviewText,
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
          date: o()().format("MMMM YYYY")
        })
      }), null != v ? null != L ? (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: I.overviewText,
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
          playstyle: L,
          games: v
        })
      }) : (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: I.overviewText,
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({
          games: v
        })
      }) : (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: I.overviewText,
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT
      }), null != P ? (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: I.overviewText,
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
          traits: P
        })
      }) : null, null != y ? (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: I.overviewText,
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMETIME.format({
          selectedTimes: y
        })
      }) : null, (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: i()(I.overviewText, I.lastParagraph),
        children: m.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
      }), (0, a.jsxs)(c.Clickable, {
        onClick: () => {
          null == p || p(!0)
        },
        className: i()(I.signatureBlock, {
          [I.clickable]: null != p
        }),
        children: [(0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "none",
          children: "x"
        }), r ? (0, a.jsx)(c.Text, {
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