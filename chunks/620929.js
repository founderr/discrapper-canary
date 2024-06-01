"use strict";
n.r(t), n.d(t, {
  CharterScrollGameSection: function() {
    return v
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("913527"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("430824"),
  f = n("650461"),
  h = n("353093"),
  m = n("105671"),
  p = n("532490"),
  E = n("979264"),
  C = n("570938"),
  g = n("550271"),
  S = n("116175"),
  _ = n("308083"),
  T = n("689938"),
  I = n("695062");

function A(e) {
  let {
    guildId: t,
    tag: n,
    badge: l,
    primaryColor: s,
    secondaryColor: i
  } = e;
  return null == n || 0 === n.length ? (0, a.jsx)("div", {
    className: I.placeholderIcon,
    children: (0, a.jsx)(C.default, {
      height: 42,
      width: 42
    })
  }) : (0, a.jsx)(E.BaseClanTagChiplet, {
    guildId: t,
    className: I.charterClanTag,
    clanTag: n,
    textVariant: "heading-lg/semibold",
    textColor: "text-normal",
    badgeSize: _.ClanTagBadgeSize.SIZE_24,
    clanBadge: (0, a.jsx)(g.ClanBadge, {
      className: I.charterClanBadge,
      badge: l,
      width: _.ClanTagBadgeSize.SIZE_24,
      height: _.ClanTagBadgeSize.SIZE_24,
      primaryTintColor: s,
      secondaryTintColor: i
    })
  })
}

function v(e) {
  let {
    applicationIds: t,
    playstyle: n,
    className: s
  } = e, r = l.useMemo(() => Array.from(t), [t]), o = (0, m.useFormattedGameNames)(r), u = l.useMemo(() => {
    if (null == o) return null;
    let e = (0, _.getPlaystyleTitle)(n);
    return null == e ? T.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({
      games: o
    }) : T.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
      playstyle: e,
      games: o
    })
  }, [o, n]);
  return (0, a.jsx)(d.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    className: i()(I.overviewText, s),
    children: null == u ? T.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT : u
  })
}
t.default = e => {
  let {
    guildId: t
  } = e, n = (0, f.useDefaultClanProgress)(), s = (0, u.useStateFromStores)([c.default], () => {
    var e, n;
    return null !== (n = null === (e = c.default.getGuild(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : ""
  }), {
    gameApplicationIds: i,
    playstyle: r,
    interests: m,
    tag: E,
    badgeKind: C,
    badgePrimaryColor: g,
    badgeSecondaryColor: N
  } = (0, u.useStateFromStoresObject)([f.default], () => {
    var e;
    return null !== (e = f.default.getStateForGuild(t).progress) && void 0 !== e ? e : n
  }), x = l.useMemo(() => (null == m ? void 0 : m.size) > 0 ? (0, h.formatSelectionList)(Array.from(m), _.MAX_TRAITS_TO_DISPLAY) : null, [m]);
  return (0, a.jsxs)(p.default, {
    ...e,
    children: [(0, a.jsx)(A, {
      guildId: t,
      tag: E,
      badge: C,
      primaryColor: null != g ? g : S.CLAN_BADGE_PRIMARY_DEFAULT,
      secondaryColor: null != N ? N : S.CLAN_BADGE_SECONDARY_DEFAULT
    }), (0, a.jsx)(d.Heading, {
      variant: "heading-xl/normal",
      color: "text-muted",
      className: I.overviewHeaderPrelude,
      children: T.default.Messages.CLAN_SETUP_OVERVIEW_TITLE
    }), (0, a.jsx)(d.Heading, {
      variant: "heading-xl/bold",
      color: "interactive-active",
      className: I.overviewGuildName,
      children: s
    }), (0, a.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      className: I.overviewText,
      children: T.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
        date: o()().format("MMMM YYYY")
      })
    }), (0, a.jsx)(v, {
      applicationIds: i,
      playstyle: r
    }), null != x ? (0, a.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      className: I.overviewText,
      children: T.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
        traits: x
      })
    }) : null, (0, a.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      className: I.overviewText,
      children: T.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
    })]
  })
}