n.d(t, {
  p: function() {
    return Z
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(913527),
  o = n.n(r),
  c = n(442837),
  u = n(481060),
  d = n(430824),
  h = n(650461),
  m = n(353093),
  p = n(105671),
  E = n(532490),
  g = n(979264),
  f = n(570938),
  C = n(550271),
  _ = n(116175),
  I = n(308083),
  x = n(689938),
  T = n(772661);

function N(e) {
  let {
    guildId: t,
    tag: n,
    badge: i,
    primaryColor: s,
    secondaryColor: a
  } = e;
  return null == n || 0 === n.length ? (0, l.jsx)("div", {
    className: T.placeholderIcon,
    children: (0, l.jsx)(f.Z, {
      height: 42,
      width: 42
    })
  }) : (0, l.jsx)(g.aG, {
    guildId: t,
    className: T.charterClanTag,
    clanTag: n,
    textVariant: "heading-lg/semibold",
    textColor: "text-normal",
    badgeSize: I.NC.SIZE_24,
    clanBadge: (0, l.jsx)(C.A, {
      className: T.charterClanBadge,
      badge: i,
      width: I.NC.SIZE_24,
      height: I.NC.SIZE_24,
      primaryTintColor: s,
      secondaryTintColor: a
    })
  })
}

function Z(e) {
  let {
    applicationIds: t,
    playstyle: n,
    className: s
  } = e, r = i.useMemo(() => Array.from(t), [t]), o = (0, p.i)(r), c = i.useMemo(() => {
    if (null == o) return null;
    let e = (0, I.mv)(n);
    return null == e ? x.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({
      games: o
    }) : x.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
      playstyle: e,
      games: o
    })
  }, [o, n]);
  return (0, l.jsx)(u.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    className: a()(T.overviewText, s),
    children: null == c ? x.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT : c
  })
}
t.Z = 12633 == n.j ? e => {
  let {
    guildId: t
  } = e, n = (0, h.Wg)(), s = (0, c.e7)([d.Z], () => {
    var e, n;
    return null !== (n = null === (e = d.Z.getGuild(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : ""
  }), {
    gameApplicationIds: a,
    playstyle: r,
    interests: p,
    tag: g,
    badgeKind: f,
    badgePrimaryColor: C,
    badgeSecondaryColor: S
  } = (0, c.cj)([h.ZP], () => {
    var e;
    return null !== (e = h.ZP.getStateForGuild(t).progress) && void 0 !== e ? e : n
  }), v = i.useMemo(() => (null == p ? void 0 : p.size) > 0 ? (0, m.f6)(Array.from(p), I.nt) : null, [p]);
  return (0, l.jsxs)(E.Z, {
    ...e,
    children: [(0, l.jsx)(N, {
      guildId: t,
      tag: g,
      badge: f,
      primaryColor: null != C ? C : _.Nh,
      secondaryColor: null != S ? S : _.vY
    }), (0, l.jsx)(u.Heading, {
      variant: "heading-xl/normal",
      color: "text-muted",
      className: T.overviewHeaderPrelude,
      children: x.Z.Messages.CLAN_SETUP_OVERVIEW_TITLE
    }), (0, l.jsx)(u.Heading, {
      variant: "heading-xl/bold",
      color: "interactive-active",
      className: T.overviewGuildName,
      children: s
    }), (0, l.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      className: T.overviewText,
      children: x.Z.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
        date: o()().format("MMMM YYYY")
      })
    }), (0, l.jsx)(Z, {
      applicationIds: a,
      playstyle: r
    }), null != v ? (0, l.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      className: T.overviewText,
      children: x.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
        traits: v
      })
    }) : null, (0, l.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      className: T.overviewText,
      children: x.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
    })]
  })
} : null