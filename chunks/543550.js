n.d(t, {
  $: function() {
    return v
  },
  J: function() {
    return Z
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(920906),
  o = n(143927),
  c = n(597312),
  u = n(481060),
  d = n(393238),
  E = n(410030),
  h = n(963202),
  _ = n(353093),
  I = n(702646),
  m = n(207796),
  g = n(497189),
  p = n(304231),
  N = n(895068),
  T = n(490610),
  C = n(981631),
  S = n(689938),
  A = n(698829);
let f = (e, t) => {
  switch (e) {
    case m.hz.GENSHIN:
      return t === C.BRd.DARK ? A.genshinUpsellBackgroundImageDark : A.genshinUpsellBackgroundImageLight;
    case m.hz.VALORANT:
      return t === C.BRd.DARK ? A.valorantUpsellBackgroundImageDark : A.valorantUpsellBackgroundImageLight
  }
};

function Z() {
  let e = (0, m.GN)(e => e.game, o.Z),
    t = (0, m.GN)(e => e.userUpsellScreen, o.Z),
    n = (0, m.GN)(e => e.setUserUpsellScreen, o.Z),
    {
      ref: l,
      width: c
    } = (0, d.Z)(),
    [h, _] = s.useState(0),
    g = (0, r.useSpring)({
      from: {
        scrollHeight: 0
      },
      to: {
        scrollHeight: h
      }
    }),
    T = (0, E.ZP)(),
    S = s.useMemo(() => f(e, T), [e, T]),
    Z = s.useCallback(e => {
      _(e.currentTarget.scrollTop)
    }, [_]),
    v = s.useMemo(() => {
      switch (e) {
        case m.hz.GENSHIN:
          return T === C.BRd.DARK ? A.genshinOnboardingBackgroundImageDark : A.genshinOnboardingBackgroundImageLight;
        case m.hz.VALORANT:
          return T === C.BRd.DARK ? A.valorantOnboardingBackgroundImageDark : A.valorantOnboardingBackgroundImageLight
      }
    }, [e, T]),
    L = (0, u.useToken)(u.tokens.colors.BG_MOD_STRONG);
  switch (t) {
    case m.o2.USER_UPSELL:
      return (0, i.jsxs)("div", {
        ref: l,
        className: A.container,
        children: [(0, i.jsxs)("div", {
          className: A.toolbar,
          style: {
            width: c
          },
          children: [(0, i.jsx)(r.animated.div, {
            className: A.toolbarBackground,
            style: {
              width: c,
              opacity: g.scrollHeight.to([100, 364], [0, 1]),
              borderBottom: g.scrollHeight.to([100, 364], [0, 1]).to(e => "1px solid ".concat(L.hex({
                opacity: e
              })))
            }
          }), (0, i.jsx)(I.Z, {})]
        }), (0, i.jsxs)("div", {
          className: A.upsellContainer,
          children: [(0, i.jsxs)(r.animated.div, {
            className: A.backgroundImageContainer,
            style: {
              opacity: g.scrollHeight.to([100, 364], [1, 0])
            },
            children: [(0, i.jsx)("div", {
              className: S
            }), (0, i.jsx)("div", {
              className: A.backgroundImageBlur
            })]
          }), (0, i.jsx)("div", {
            className: a()(A.backgroundImageContent, A.userUpsell),
            children: (0, i.jsx)(N.ZP, {
              onScroll: Z,
              width: null != c ? c : 0,
              isAnimating: !1,
              variant: N.Bj.UPSELL
            })
          })]
        })]
      });
    case m.o2.USER_ONBOARDING:
      return (0, i.jsx)("div", {
        className: A.container,
        children: (0, i.jsxs)("div", {
          className: a()(v, A.userOnboarding),
          children: [(0, i.jsx)("div", {
            className: A.backgroundImageBlur
          }), (0, i.jsx)("div", {
            className: A.backgroundImageContent,
            children: (0, i.jsx)(p.Z, {
              selectedGame: e,
              setScreen: n
            })
          })]
        })
      })
  }
}

function v() {
  let e = (0, m.GN)(e => e.started, o.Z),
    t = (0, m.GN)(e => e.game, o.Z),
    {
      enableApplication: n
    } = (0, h.Fg)("ClanDiscoveryAdminContainer"),
    {
      guilds: l
    } = (0, h.C3)({
      location: "ClanDiscoveryAdminContainer",
      includeConverted: !0
    }),
    r = s.useMemo(() => l.filter(e => !(0, _.EJ)(e)), [l]),
    u = (0, E.ZP)(),
    d = s.useMemo(() => f(t, u), [t, u]),
    I = !e && n;
  return 0 === l.length ? null : (0, i.jsx)("div", {
    className: A.container,
    children: (0, i.jsxs)(c.u2, {
      className: A.upsellScroller,
      fade: !0,
      children: [(0, i.jsxs)("div", {
        className: a()(d, A.adminUpsell),
        children: [(0, i.jsx)("div", {
          className: A.backgroundImageBlur
        }), (0, i.jsx)("div", {
          className: A.backgroundImageContent,
          children: (0, i.jsx)(g.Z, {
            isBrowseButtonVisible: I,
            selectedGame: t,
            eligibleGuilds: r,
            eligibleGuildsIncludingConverted: l
          })
        })]
      }), (0, i.jsx)(T.Z, {
        title: S.Z.Messages.CLAN_DISCOVERY_INSPIRATION_TITLE,
        subtitle: I ? S.Z.Messages.CLAN_DISCOVERY_PILOT_SUBTITLE.format() : void 0
      })]
    })
  })
}