"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("913527"),
  o = n.n(r),
  u = n("718017"),
  d = n("442837"),
  c = n("481060"),
  f = n("430824"),
  E = n("594174"),
  h = n("823379"),
  _ = n("45680"),
  C = n("650461"),
  m = n("353093"),
  S = n("924801"),
  I = n("308083"),
  p = n("689938"),
  T = n("653196");
t.default = e => {
  var t;
  let {
    guildId: n,
    signed: l,
    setSigned: r,
    animatedTextStyle: g,
    signRef: A
  } = e, N = (0, d.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getGuild(n)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : ""
  }), {
    gameApplicationIds: v,
    playstyle: R,
    interests: O,
    primetime: L
  } = (0, d.useStateFromStoresObject)([C.default], () => {
    var e;
    return null !== (e = C.default.getStateForGuild(n).progress) && void 0 !== e ? e : {}
  }), P = (0, _.useGameNamesString)(Array.from(null != v ? v : new Set)), M = s.useMemo(() => (0, I.getPlaystyleTitle)(R), [R]), x = s.useMemo(() => (null == O ? void 0 : O.size) > 0 ? (0, m.formatSelectionList)(Array.from(O)) : null, [O]), y = s.useMemo(() => {
    let e = (null == L ? void 0 : L.length) > 0 ? L.map(e => (0, S.primetimeToString)(e)).filter(h.isNotNullish) : [];
    return (null == e ? void 0 : e.length) > 0 ? (0, m.formatSelectionList)(e) : null
  }, [L]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: T.scrollBg,
      children: [(0, a.jsx)("div", {
        className: T.scrollBgTop
      }), (0, a.jsx)("div", {
        className: T.scrollBgBottom
      })]
    }), (0, a.jsx)("div", {
      className: T.overviewSidebarWrapper,
      children: (0, a.jsx)(u.animated.div, {
        className: T.flex,
        style: g,
        children: (0, a.jsxs)(c.ScrollerNone, {
          fade: !0,
          className: T.overviewSidebarContent,
          children: [(0, a.jsx)(c.Heading, {
            variant: "heading-xl/normal",
            color: "text-muted",
            className: T.overviewHeaderText,
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_TITLE.format({
              guildName: N
            })
          }), (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: T.overviewText,
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
              date: o()().format("MMMM YYYY")
            })
          }), null != P ? null != M ? (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: T.overviewText,
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
              playstyle: M,
              games: P
            })
          }) : (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: T.overviewText,
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({
              games: P
            })
          }) : (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: T.overviewText,
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT
          }), null != x ? (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: T.overviewText,
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
              traits: x
            })
          }) : null, null != y ? (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: T.overviewText,
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMETIME.format({
              selectedTimes: y
            })
          }) : null, (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: i()(T.overviewText, T.lastParagraph),
            children: p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
          }), (0, a.jsxs)(c.Clickable, {
            onClick: () => {
              null == r || r(!0)
            },
            className: i()(T.signatureBlock, {
              [T.clickable]: null != r
            }),
            children: [(0, a.jsx)("div", {
              ref: A
            }), (0, a.jsx)(c.Text, {
              variant: "text-md/normal",
              color: "none",
              children: "x"
            }), l ? (0, a.jsx)(c.Text, {
              variant: "text-lg/normal",
              color: "header-primary",
              className: T.signatureText,
              children: null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.username
            }) : (0, a.jsx)(c.Text, {
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