"use strict";
n.r(t);
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
  h = n("650461"),
  _ = n("353093"),
  C = n("105671"),
  m = n("287679"),
  S = n("979264"),
  p = n("550271"),
  I = n("308083"),
  g = n("689938"),
  T = n("156610");

function A(e) {
  let {
    tag: t,
    badge: n,
    primaryColor: s,
    secondaryColor: l
  } = e;
  return null == t || 0 === t.length ? (0, a.jsx)(m.default, {
    height: 41,
    width: 41,
    className: T.placeholderIcon
  }) : (0, a.jsx)(S.BaseClanTagChiplet, {
    className: T.charterClanTag,
    clanTag: t,
    textVariant: "heading-lg/semibold",
    textColor: "text-normal",
    badgeSize: I.ClanTagBadgeSize.SIZE_24,
    clanBadge: (0, a.jsx)(p.ClanBadge, {
      className: T.charterClanBadge,
      badge: n,
      width: I.ClanTagBadgeSize.SIZE_24,
      height: I.ClanTagBadgeSize.SIZE_24,
      primaryTintColor: s,
      secondaryTintColor: l
    })
  })
}

function N(e) {
  let {
    applicationIds: t,
    playstyle: n
  } = e, l = s.useMemo(() => Array.from(t), [t]), i = (0, C.useFormattedGameNames)(l), r = s.useMemo(() => {
    if (null == i) return null;
    let e = (0, I.getPlaystyleTitle)(n);
    return null == e ? g.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({
      games: i
    }) : g.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
      playstyle: e,
      games: i
    })
  }, [i, n]);
  return (0, a.jsx)(c.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    className: T.overviewText,
    children: null == r ? g.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT : r
  })
}
t.default = e => {
  var t;
  let {
    guildId: n,
    signed: l,
    setSigned: r,
    animatedTextStyle: C,
    signRef: m
  } = e, S = (0, d.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getGuild(n)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : ""
  }), {
    gameApplicationIds: p,
    playstyle: v,
    interests: L,
    tag: R,
    badgeKind: O,
    badgePrimaryColor: M,
    badgeSecondaryColor: P
  } = (0, d.useStateFromStoresObject)([h.default], () => {
    var e;
    return null !== (e = h.default.getStateForGuild(n).progress) && void 0 !== e ? e : h.DEFAULT_CLAN_PROGRESS
  }), y = s.useMemo(() => (null == L ? void 0 : L.size) > 0 ? (0, _.formatSelectionList)(Array.from(L), I.MAX_TRAITS_TO_DISPLAY) : null, [L]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: T.scrollBg,
      children: [(0, a.jsx)("div", {
        className: T.scrollBgTop
      }), (0, a.jsx)("div", {
        className: T.scrollBgBottom
      })]
    }), (0, a.jsx)(u.animated.div, {
      className: T.overviewSidebarWrapper,
      style: C,
      children: (0, a.jsxs)(c.ScrollerNone, {
        fade: !0,
        className: T.overviewSidebarContent,
        children: [(0, a.jsx)(A, {
          tag: R,
          badge: O,
          primaryColor: M,
          secondaryColor: P
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-xl/normal",
          color: "text-muted",
          className: T.overviewHeaderPrelude,
          children: g.default.Messages.CLAN_SETUP_OVERVIEW_TITLE
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          color: "interactive-active",
          className: T.overviewGuildName,
          children: S
        }), (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: T.overviewText,
          children: g.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
            date: o()().format("MMMM YYYY")
          })
        }), (0, a.jsx)(N, {
          applicationIds: p,
          playstyle: v
        }), null != y ? (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: T.overviewText,
          children: g.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
            traits: y
          })
        }) : null, (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: T.overviewText,
          children: g.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
        }), (0, a.jsxs)(c.Clickable, {
          onClick: () => {
            null == r || r(!0)
          },
          className: i()(T.signatureBlock, {
            [T.clickable]: null != r
          }),
          children: [(0, a.jsx)("div", {
            ref: m
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
            children: g.default.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
          })]
        })]
      })
    })]
  })
}