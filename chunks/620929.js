"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("913527"),
  o = a.n(r),
  u = a("718017"),
  d = a("442837"),
  c = a("481060"),
  f = a("430824"),
  E = a("594174"),
  h = a("823379"),
  _ = a("45680"),
  C = a("650461"),
  m = a("353093"),
  S = a("924801"),
  I = a("308083"),
  p = a("689938"),
  T = a("653196");
t.default = e => {
  var t;
  let {
    guildId: a,
    signed: l,
    setSigned: r,
    animatedTextStyle: g,
    signRef: A
  } = e, N = (0, d.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getGuild(a)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : ""
  }), {
    gameApplicationIds: v,
    playstyle: R,
    interests: O,
    primetime: L
  } = (0, d.useStateFromStoresObject)([C.default], () => {
    var e;
    return null !== (e = C.default.getStateForGuild(a).progress) && void 0 !== e ? e : C.DEFAULT_CLAN_PROGRESS
  }), P = (0, _.useGameNamesString)(Array.from(null != v ? v : new Set)), M = s.useMemo(() => (0, I.getPlaystyleTitle)(R), [R]), x = s.useMemo(() => (null == O ? void 0 : O.size) > 0 ? (0, m.formatSelectionList)(Array.from(O), I.MAX_TRAITS_TO_DISPLAY) : null, [O]), y = s.useMemo(() => {
    let e = (null == L ? void 0 : L.length) > 0 ? L.map(e => (0, S.primetimeToString)(e)).filter(h.isNotNullish) : [];
    return (null == e ? void 0 : e.length) > 0 ? (0, m.formatSelectionList)(e, I.MAX_TIMES_TO_DISPLAY) : null
  }, [L]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: T.scrollBg,
      children: [(0, n.jsx)("div", {
        className: T.scrollBgTop
      }), (0, n.jsx)("div", {
        className: T.scrollBgBottom
      })]
    }), (0, n.jsx)("div", {
      className: T.overviewSidebarWrapper,
      children: (0, n.jsx)(u.animated.div, {
        className: T.flex,
        style: g,
        children: (0, n.jsxs)(c.ScrollerNone, {
          fade: !0,
          className: T.overviewSidebarContent,
          children: [(0, n.jsx)(c.Heading, {
            variant: "heading-xl/normal",
            color: "text-muted",
            className: T.overviewHeaderText,
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_TITLE.format({
              guildName: N
            })
          }), (0, n.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: T.overviewText,
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
              date: o()().format("MMMM YYYY")
            })
          }), null != P ? null != M ? (0, n.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: T.overviewText,
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
              playstyle: M,
              games: P
            })
          }) : (0, n.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: T.overviewText,
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({
              games: P
            })
          }) : (0, n.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: T.overviewText,
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT
          }), null != x ? (0, n.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: T.overviewText,
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
              traits: x
            })
          }) : null, null != y ? (0, n.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: T.overviewText,
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMETIME.format({
              selectedTimes: y
            })
          }) : null, (0, n.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: i()(T.overviewText, T.lastParagraph),
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
          }), (0, n.jsxs)(c.Clickable, {
            onClick: () => {
              null == r || r(!0)
            },
            className: i()(T.signatureBlock, {
              [T.clickable]: null != r
            }),
            children: [(0, n.jsx)("div", {
              ref: A
            }), (0, n.jsx)(c.Text, {
              variant: "text-md/normal",
              color: "none",
              children: "x"
            }), l ? (0, n.jsx)(c.Text, {
              variant: "text-lg/normal",
              color: "header-primary",
              className: T.signatureText,
              children: null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.username
            }) : (0, n.jsx)(c.Text, {
              variant: "text-lg/normal",
              color: "none",
              className: T.signatureText,
              children: p.default.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
            })]
          })]
        })
      })
    })]
  })
}