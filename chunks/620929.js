l.d(t, {
    p: function () {
        return S;
    }
});
var n = l(200651),
    i = l(192379),
    a = l(120356),
    r = l.n(a),
    s = l(913527),
    o = l.n(s),
    d = l(442837),
    c = l(481060),
    u = l(430824),
    x = l(650461),
    m = l(353093),
    h = l(105671),
    g = l(532490),
    v = l(979264),
    f = l(570938),
    C = l(550271),
    j = l(116175),
    p = l(308083),
    N = l(388032),
    Z = l(691994);
function T(e) {
    let { guildId: t, tag: l, badge: i, primaryColor: a, secondaryColor: r } = e;
    return null == l || 0 === l.length
        ? (0, n.jsx)('div', {
              className: Z.placeholderIcon,
              children: (0, n.jsx)(f.Z, {
                  height: 42,
                  width: 42
              })
          })
        : (0, n.jsx)(v.aG, {
              guildId: t,
              className: Z.charterClanTag,
              clanTag: l,
              textVariant: 'heading-lg/semibold',
              textColor: 'text-normal',
              badgeSize: p.NC.SIZE_24,
              clanBadge: (0, n.jsx)(C.A, {
                  className: Z.charterClanBadge,
                  badge: i,
                  width: p.NC.SIZE_24,
                  height: p.NC.SIZE_24,
                  primaryTintColor: a,
                  secondaryTintColor: r
              })
          });
}
function S(e) {
    let { applicationIds: t, playstyle: l, className: a } = e,
        s = i.useMemo(() => Array.from(t), [t]),
        o = (0, h.i)(s),
        d = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, p.mv)(l);
            return null == e
                ? N.intl.format(N.t.dlplKi, { games: o })
                : N.intl.format(N.t['+qicDA'], {
                      playstyle: e,
                      games: o
                  });
        }, [o, l]);
    return (0, n.jsx)(c.Text, {
        variant: 'text-sm/normal',
        color: 'text-muted',
        className: r()(Z.overviewText, a),
        children: null == d ? N.intl.string(N.t.AIp7Hx) : d
    });
}
t.Z =
    12633 == l.j
        ? (e) => {
              let { guildId: t } = e,
                  l = (0, x.Wg)(),
                  a = (0, d.e7)([u.Z], () => {
                      var e, l;
                      return null !== (l = null === (e = u.Z.getGuild(t)) || void 0 === e ? void 0 : e.name) && void 0 !== l ? l : '';
                  }),
                  {
                      gameApplicationIds: r,
                      playstyle: s,
                      interests: h,
                      tag: v,
                      badgeKind: f,
                      badgePrimaryColor: C,
                      badgeSecondaryColor: y
                  } = (0, d.cj)([x.ZP], () => {
                      var e;
                      return null !== (e = x.ZP.getStateForGuild(t).progress) && void 0 !== e ? e : l;
                  }),
                  w = i.useMemo(() => ((null == h ? void 0 : h.size) > 0 ? (0, m.f6)(Array.from(h), p.nt) : null), [h]);
              return (0, n.jsxs)(g.Z, {
                  ...e,
                  children: [
                      (0, n.jsx)(T, {
                          guildId: t,
                          tag: v,
                          badge: f,
                          primaryColor: null != C ? C : j.Nh,
                          secondaryColor: null != y ? y : j.vY
                      }),
                      (0, n.jsx)(c.Heading, {
                          variant: 'heading-xl/normal',
                          color: 'text-muted',
                          className: Z.overviewHeaderPrelude,
                          children: N.intl.string(N.t['85S0//'])
                      }),
                      (0, n.jsx)(c.Heading, {
                          variant: 'heading-xl/bold',
                          color: 'interactive-active',
                          className: Z.overviewGuildName,
                          children: a
                      }),
                      (0, n.jsx)(c.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: Z.overviewText,
                          children: N.intl.format(N.t['7RpSYW'], { date: o()().format('MMMM YYYY') })
                      }),
                      (0, n.jsx)(S, {
                          applicationIds: r,
                          playstyle: s
                      }),
                      null != w
                          ? (0, n.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                className: Z.overviewText,
                                children: N.intl.format(N.t.VKgkfH, { traits: w })
                            })
                          : null,
                      (0, n.jsx)(c.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: Z.overviewText,
                          children: N.intl.string(N.t['YDTd9/'])
                      })
                  ]
              });
          }
        : null;
