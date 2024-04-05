"use strict";
n.r(t), n("47120");
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
  m = n("308083"),
  S = n("689938"),
  I = n("653196");
let p = e => {
  if (1 === e.length) return e[0];
  if (2 === e.length) return S.default.Messages.CLAN_OVERVIEW_LIST_TWO_ITEMS.format({
    item1: e[0],
    item2: e[1]
  });
  {
    let t = e.slice(0, -1).join(", "),
      n = e[e.length - 1];
    return S.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
      items: t,
      last: n
    })
  }
};
t.default = e => {
  var t;
  let {
    guildId: n,
    signed: l,
    setSigned: r,
    animatedTextStyle: T,
    signRef: g
  } = e, A = (0, d.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getGuild(n)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : ""
  }), {
    selectedGames: N,
    playstyle: v,
    interests: R,
    primetime: O
  } = (0, d.useStateFromStoresObject)([_.default], () => {
    var e;
    return null !== (e = _.default.getState(n)) && void 0 !== e ? e : {}
  }), L = s.useMemo(() => (null == N ? void 0 : N.size) > 0 ? p(Array.from(N.values()).map(e => e.name)) : null, [N]), P = s.useMemo(() => (0, m.getPlaystyleTitle)(v), [v]), M = s.useMemo(() => (null == R ? void 0 : R.size) > 0 ? p(Array.from(R)) : null, [R]), y = s.useMemo(() => {
    let e = (null == O ? void 0 : O.length) > 0 ? O.map(e => (0, C.primetimeToString)(e)).filter(h.isNotNullish) : [];
    return (null == e ? void 0 : e.length) > 0 ? p(e) : null
  }, [O]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: I.scrollBg,
      children: [(0, a.jsx)("div", {
        className: I.scrollBgTop
      }), (0, a.jsx)("div", {
        className: I.scrollBgBottom
      })]
    }), (0, a.jsx)("div", {
      className: I.overviewSidebarWrapper,
      children: (0, a.jsx)(u.animated.div, {
        className: I.flex,
        style: T,
        children: (0, a.jsxs)(c.ScrollerNone, {
          fade: !0,
          className: I.overviewSidebarContent,
          children: [(0, a.jsx)(c.Heading, {
            variant: "heading-xl/normal",
            color: "text-muted",
            className: I.overviewHeaderText,
            children: S.default.Messages.CLAN_SETUP_OVERVIEW_TITLE.format({
              guildName: A
            })
          }), (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: I.overviewText,
            children: S.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
              date: o()().format("MMMM YYYY")
            })
          }), null != L ? null != P ? (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: I.overviewText,
            children: S.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
              playstyle: P,
              games: L
            })
          }) : (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: I.overviewText,
            children: S.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({
              games: L
            })
          }) : (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: I.overviewText,
            children: S.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT
          }), null != M ? (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: I.overviewText,
            children: S.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
              traits: M
            })
          }) : null, null != y ? (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: I.overviewText,
            children: S.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMETIME.format({
              selectedTimes: y
            })
          }) : null, (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: i()(I.overviewText, I.lastParagraph),
            children: S.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
          }), (0, a.jsxs)(c.Clickable, {
            onClick: () => {
              null == r || r(!0)
            },
            className: i()(I.signatureBlock, {
              [I.clickable]: null != r
            }),
            children: [(0, a.jsx)("div", {
              ref: g
            }), (0, a.jsx)(c.Text, {
              variant: "text-md/normal",
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
              children: S.default.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
            })]
          })]
        })
      })
    })]
  })
}