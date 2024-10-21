t.d(l, {
    p: function () {
        return E;
    }
});
var a = t(200651),
    s = t(192379),
    n = t(120356),
    i = t.n(n),
    r = t(913527),
    o = t.n(r),
    c = t(442837),
    d = t(481060),
    u = t(430824),
    x = t(650461),
    m = t(353093),
    h = t(105671),
    g = t(532490),
    C = t(979264),
    v = t(570938),
    f = t(550271),
    j = t(116175),
    N = t(308083),
    p = t(689938),
    _ = t(691994);
function T(e) {
    let { guildId: l, tag: t, badge: s, primaryColor: n, secondaryColor: i } = e;
    return null == t || 0 === t.length
        ? (0, a.jsx)('div', {
              className: _.placeholderIcon,
              children: (0, a.jsx)(v.Z, {
                  height: 42,
                  width: 42
              })
          })
        : (0, a.jsx)(C.aG, {
              guildId: l,
              className: _.charterClanTag,
              clanTag: t,
              textVariant: 'heading-lg/semibold',
              textColor: 'text-normal',
              badgeSize: N.NC.SIZE_24,
              clanBadge: (0, a.jsx)(f.A, {
                  className: _.charterClanBadge,
                  badge: s,
                  width: N.NC.SIZE_24,
                  height: N.NC.SIZE_24,
                  primaryTintColor: n,
                  secondaryTintColor: i
              })
          });
}
function E(e) {
    let { applicationIds: l, playstyle: t, className: n } = e,
        r = s.useMemo(() => Array.from(l), [l]),
        o = (0, h.i)(r),
        c = s.useMemo(() => {
            if (null == o) return null;
            let e = (0, N.mv)(t);
            return null == e
                ? p.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({ games: o })
                : p.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
                      playstyle: e,
                      games: o
                  });
        }, [o, t]);
    return (0, a.jsx)(d.Text, {
        variant: 'text-sm/normal',
        color: 'text-muted',
        className: i()(_.overviewText, n),
        children: null == c ? p.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT : c
    });
}
l.Z =
    12633 == t.j
        ? (e) => {
              let { guildId: l } = e,
                  t = (0, x.Wg)(),
                  n = (0, c.e7)([u.Z], () => {
                      var e, t;
                      return null !== (t = null === (e = u.Z.getGuild(l)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : '';
                  }),
                  {
                      gameApplicationIds: i,
                      playstyle: r,
                      interests: h,
                      tag: C,
                      badgeKind: v,
                      badgePrimaryColor: f,
                      badgeSecondaryColor: S
                  } = (0, c.cj)([x.ZP], () => {
                      var e;
                      return null !== (e = x.ZP.getStateForGuild(l).progress) && void 0 !== e ? e : t;
                  }),
                  Z = s.useMemo(() => ((null == h ? void 0 : h.size) > 0 ? (0, m.f6)(Array.from(h), N.nt) : null), [h]);
              return (0, a.jsxs)(g.Z, {
                  ...e,
                  children: [
                      (0, a.jsx)(T, {
                          guildId: l,
                          tag: C,
                          badge: v,
                          primaryColor: null != f ? f : j.Nh,
                          secondaryColor: null != S ? S : j.vY
                      }),
                      (0, a.jsx)(d.Heading, {
                          variant: 'heading-xl/normal',
                          color: 'text-muted',
                          className: _.overviewHeaderPrelude,
                          children: p.Z.Messages.CLAN_SETUP_OVERVIEW_TITLE
                      }),
                      (0, a.jsx)(d.Heading, {
                          variant: 'heading-xl/bold',
                          color: 'interactive-active',
                          className: _.overviewGuildName,
                          children: n
                      }),
                      (0, a.jsx)(d.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: _.overviewText,
                          children: p.Z.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({ date: o()().format('MMMM YYYY') })
                      }),
                      (0, a.jsx)(E, {
                          applicationIds: i,
                          playstyle: r
                      }),
                      null != Z
                          ? (0, a.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: _.overviewText,
                                children: p.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({ traits: Z })
                            })
                          : null,
                      (0, a.jsx)(d.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: _.overviewText,
                          children: p.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
                      })
                  ]
              });
          }
        : null;
