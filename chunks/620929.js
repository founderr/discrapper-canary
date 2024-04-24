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
  h = a("823379"),
  _ = a("650461"),
  C = a("353093"),
  m = a("924801"),
  S = a("105671"),
  I = a("287679"),
  p = a("979264"),
  T = a("308083"),
  g = a("689938"),
  A = a("653196");

function N(e) {
  let {
    tag: t
  } = e;
  return null == t || 0 === t.length ? (0, n.jsx)(I.default, {
    height: 41,
    width: 41,
    className: A.placeholderIcon
  }) : (0, n.jsx)(p.BaseClanTagChiplet, {
    className: A.charterClanTag,
    clanTag: t,
    textVariant: "heading-lg/semibold",
    textColor: "text-normal",
    badgeSize: p.ClanTagBadgeSize.SIZE_24
  })
}

function v(e) {
  let {
    applicationIds: t,
    playstyle: a
  } = e, l = s.useMemo(() => Array.from(t), [t]), i = (0, S.useFormattedGameNames)(l), r = s.useMemo(() => {
    if (null == i) return null;
    let e = (0, T.getPlaystyleTitle)(a);
    return null == e ? g.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({
      games: i
    }) : g.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
      playstyle: e,
      games: i
    })
  }, [i, a]);
  return (0, n.jsx)(c.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    className: A.overviewText,
    children: null == r ? g.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT : r
  })
}
t.default = e => {
  var t;
  let {
    guildId: a,
    signed: l,
    setSigned: r,
    animatedTextStyle: S,
    signRef: I
  } = e, p = (0, d.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getGuild(a)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : ""
  }), {
    gameApplicationIds: R,
    playstyle: O,
    interests: L,
    primetime: M,
    tag: P
  } = (0, d.useStateFromStoresObject)([_.default], () => {
    var e;
    return null !== (e = _.default.getStateForGuild(a).progress) && void 0 !== e ? e : _.DEFAULT_CLAN_PROGRESS
  }), x = s.useMemo(() => (null == L ? void 0 : L.size) > 0 ? (0, C.formatSelectionList)(Array.from(L), T.MAX_TRAITS_TO_DISPLAY) : null, [L]), y = s.useMemo(() => {
    let e = (null == M ? void 0 : M.length) > 0 ? M.map(e => (0, m.primetimeToString)(e)).filter(h.isNotNullish) : [];
    return (null == e ? void 0 : e.length) > 0 ? (0, C.formatSelectionList)(e, T.MAX_TIMES_TO_DISPLAY) : null
  }, [M]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: A.scrollBg,
      children: [(0, n.jsx)("div", {
        className: A.scrollBgTop
      }), (0, n.jsx)("div", {
        className: A.scrollBgBottom
      })]
    }), (0, n.jsx)(u.animated.div, {
      className: A.overviewSidebarWrapper,
      style: S,
      children: (0, n.jsxs)(c.ScrollerNone, {
        fade: !0,
        className: A.overviewSidebarContent,
        children: [(0, n.jsx)(N, {
          tag: P
        }), (0, n.jsx)(c.Heading, {
          variant: "heading-xl/normal",
          color: "text-muted",
          className: A.overviewHeaderPrelude,
          children: g.default.Messages.CLAN_SETUP_OVERVIEW_TITLE
        }), (0, n.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          color: "interactive-active",
          className: A.overviewGuildName,
          children: p
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: A.overviewText,
          children: g.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
            date: o()().format("MMMM YYYY")
          })
        }), (0, n.jsx)(v, {
          applicationIds: R,
          playstyle: O
        }), null != x ? (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: A.overviewText,
          children: g.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
            traits: x
          })
        }) : null, null != y ? (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: A.overviewText,
          children: g.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMETIME.format({
            selectedTimes: y
          })
        }) : null, (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: A.overviewText,
          children: g.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
        }), (0, n.jsxs)(c.Clickable, {
          onClick: () => {
            null == r || r(!0)
          },
          className: i()(A.signatureBlock, {
            [A.clickable]: null != r
          }),
          children: [(0, n.jsx)("div", {
            ref: I
          }), (0, n.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "none",
            children: "x"
          }), l ? (0, n.jsx)(c.Text, {
            variant: "text-lg/normal",
            color: "header-primary",
            className: A.signatureText,
            children: null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.username
          }) : (0, n.jsx)(c.Text, {
            variant: "text-lg/normal",
            color: "none",
            className: A.signatureText,
            children: g.default.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
          })]
        })]
      })
    })]
  })
}