"use strict";
n.r(t), n.d(t, {
  CharterScrollGameSection: function() {
    return N
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("913527"),
  o = n.n(r),
  u = n("718017"),
  d = n("442837"),
  c = n("481060"),
  f = n("430824"),
  h = n("594174"),
  m = n("650461"),
  p = n("353093"),
  E = n("105671"),
  C = n("287679"),
  g = n("979264"),
  S = n("550271"),
  _ = n("308083"),
  T = n("689938"),
  I = n("156610");

function A(e) {
  let {
    tag: t,
    badge: n,
    primaryColor: l,
    secondaryColor: s
  } = e;
  return null == t || 0 === t.length ? (0, a.jsx)(C.default, {
    height: 41,
    width: 41,
    className: I.placeholderIcon
  }) : (0, a.jsx)(g.BaseClanTagChiplet, {
    className: I.charterClanTag,
    clanTag: t,
    textVariant: "heading-lg/semibold",
    textColor: "text-normal",
    badgeSize: _.ClanTagBadgeSize.SIZE_24,
    clanBadge: (0, a.jsx)(S.ClanBadge, {
      className: I.charterClanBadge,
      badge: n,
      width: _.ClanTagBadgeSize.SIZE_24,
      height: _.ClanTagBadgeSize.SIZE_24,
      primaryTintColor: l,
      secondaryTintColor: s
    })
  })
}

function N(e) {
  let {
    applicationIds: t,
    playstyle: n,
    className: s
  } = e, r = l.useMemo(() => Array.from(t), [t]), o = (0, E.useFormattedGameNames)(r), u = l.useMemo(() => {
    if (null == o) return null;
    let e = (0, _.getPlaystyleTitle)(n);
    return null == e ? T.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({
      games: o
    }) : T.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
      playstyle: e,
      games: o
    })
  }, [o, n]);
  return (0, a.jsx)(c.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    className: i()(I.overviewText, s),
    children: null == u ? T.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT : u
  })
}
t.default = e => {
  var t;
  let {
    guildId: n,
    signed: s,
    setSigned: r,
    animatedTextStyle: E,
    signRef: C
  } = e, g = (0, d.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getGuild(n)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : ""
  }), {
    gameApplicationIds: S,
    playstyle: v,
    interests: x,
    tag: M,
    badgeKind: R,
    badgePrimaryColor: L,
    badgeSecondaryColor: y
  } = (0, d.useStateFromStoresObject)([m.default], () => {
    var e;
    return null !== (e = m.default.getStateForGuild(n).progress) && void 0 !== e ? e : m.DEFAULT_CLAN_PROGRESS
  }), O = l.useMemo(() => (null == x ? void 0 : x.size) > 0 ? (0, p.formatSelectionList)(Array.from(x), _.MAX_TRAITS_TO_DISPLAY) : null, [x]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: I.scrollBg,
      children: [(0, a.jsx)("div", {
        className: I.scrollBgTop
      }), (0, a.jsx)("div", {
        className: I.scrollBgBottom
      })]
    }), (0, a.jsx)(u.animated.div, {
      className: I.overviewSidebarWrapper,
      style: E,
      children: (0, a.jsxs)(c.ScrollerNone, {
        fade: !0,
        className: I.overviewSidebarContent,
        children: [(0, a.jsx)(A, {
          tag: M,
          badge: R,
          primaryColor: L,
          secondaryColor: y
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-xl/normal",
          color: "text-muted",
          className: I.overviewHeaderPrelude,
          children: T.default.Messages.CLAN_SETUP_OVERVIEW_TITLE
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          color: "interactive-active",
          className: I.overviewGuildName,
          children: g
        }), (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: I.overviewText,
          children: T.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
            date: o()().format("MMMM YYYY")
          })
        }), (0, a.jsx)(N, {
          applicationIds: S,
          playstyle: v
        }), null != O ? (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: I.overviewText,
          children: T.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
            traits: O
          })
        }) : null, (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: I.overviewText,
          children: T.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
        }), (0, a.jsxs)(c.Clickable, {
          onClick: () => {
            null == r || r(!0)
          },
          className: i()(I.signatureBlock, {
            [I.clickable]: null != r
          }),
          children: [(0, a.jsx)("div", {
            ref: C
          }), (0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "none",
            children: "x"
          }), s ? (0, a.jsx)(c.Text, {
            variant: "text-lg/normal",
            color: "header-primary",
            className: I.signatureText,
            children: null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.username
          }) : (0, a.jsx)(c.Text, {
            variant: "text-lg/normal",
            color: "none",
            className: I.signatureText,
            children: T.default.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
          })]
        })]
      })
    })]
  })
}