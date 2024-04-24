"use strict";
a.r(t);
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
  h = a("650461"),
  _ = a("353093"),
  C = a("105671"),
  m = a("287679"),
  S = a("979264"),
  I = a("308083"),
  p = a("689938"),
  T = a("653196");

function g(e) {
  let {
    tag: t
  } = e;
  return null == t || 0 === t.length ? (0, n.jsx)(m.default, {
    height: 41,
    width: 41,
    className: T.placeholderIcon
  }) : (0, n.jsx)(S.BaseClanTagChiplet, {
    className: T.charterClanTag,
    clanTag: t,
    textVariant: "heading-lg/semibold",
    textColor: "text-normal",
    badgeSize: S.ClanTagBadgeSize.SIZE_24
  })
}

function A(e) {
  let {
    applicationIds: t,
    playstyle: a
  } = e, l = s.useMemo(() => Array.from(t), [t]), i = (0, C.useFormattedGameNames)(l), r = s.useMemo(() => {
    if (null == i) return null;
    let e = (0, I.getPlaystyleTitle)(a);
    return null == e ? p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({
      games: i
    }) : p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
      playstyle: e,
      games: i
    })
  }, [i, a]);
  return (0, n.jsx)(c.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    className: T.overviewText,
    children: null == r ? p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT : r
  })
}
t.default = e => {
  var t;
  let {
    guildId: a,
    signed: l,
    setSigned: r,
    animatedTextStyle: C,
    signRef: m
  } = e, S = (0, d.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getGuild(a)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : ""
  }), {
    gameApplicationIds: N,
    playstyle: v,
    interests: R,
    tag: O
  } = (0, d.useStateFromStoresObject)([h.default], () => {
    var e;
    return null !== (e = h.default.getStateForGuild(a).progress) && void 0 !== e ? e : h.DEFAULT_CLAN_PROGRESS
  }), L = s.useMemo(() => (null == R ? void 0 : R.size) > 0 ? (0, _.formatSelectionList)(Array.from(R), I.MAX_TRAITS_TO_DISPLAY) : null, [R]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: T.scrollBg,
      children: [(0, n.jsx)("div", {
        className: T.scrollBgTop
      }), (0, n.jsx)("div", {
        className: T.scrollBgBottom
      })]
    }), (0, n.jsx)(u.animated.div, {
      className: T.overviewSidebarWrapper,
      style: C,
      children: (0, n.jsxs)(c.ScrollerNone, {
        fade: !0,
        className: T.overviewSidebarContent,
        children: [(0, n.jsx)(g, {
          tag: O
        }), (0, n.jsx)(c.Heading, {
          variant: "heading-xl/normal",
          color: "text-muted",
          className: T.overviewHeaderPrelude,
          children: p.default.Messages.CLAN_SETUP_OVERVIEW_TITLE
        }), (0, n.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          color: "interactive-active",
          className: T.overviewGuildName,
          children: S
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: T.overviewText,
          children: p.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
            date: o()().format("MMMM YYYY")
          })
        }), (0, n.jsx)(A, {
          applicationIds: N,
          playstyle: v
        }), null != L ? (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: T.overviewText,
          children: p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
            traits: L
          })
        }) : null, (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: T.overviewText,
          children: p.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
        }), (0, n.jsxs)(c.Clickable, {
          onClick: () => {
            null == r || r(!0)
          },
          className: i()(T.signatureBlock, {
            [T.clickable]: null != r
          }),
          children: [(0, n.jsx)("div", {
            ref: m
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
    })]
  })
}