n.d(t, {
  $: function() {
    return L
  },
  J: function() {
    return Z
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
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
  T = n(497189),
  g = n(304231),
  p = n(895068),
  N = n(490610),
  S = n(981631),
  C = n(689938),
  A = n(698829);
let f = (e, t) => {
  switch (e) {
    case m.hz.GENSHIN:
      return t === S.BRd.DARK ? A.genshinUpsellBackgroundImageDark : A.genshinUpsellBackgroundImageLight;
    case m.hz.VALORANT:
      return t === S.BRd.DARK ? A.valorantUpsellBackgroundImageDark : A.valorantUpsellBackgroundImageLight
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
    [h, _] = i.useState(0),
    T = (0, r.useSpring)({
      from: {
        scrollHeight: 0
      },
      to: {
        scrollHeight: h
      }
    }),
    N = (0, E.ZP)(),
    C = i.useMemo(() => f(e, N), [e, N]),
    Z = i.useCallback(e => {
      _(e.currentTarget.scrollTop)
    }, [_]),
    L = i.useMemo(() => {
      switch (e) {
        case m.hz.GENSHIN:
          return N === S.BRd.DARK ? A.genshinOnboardingBackgroundImageDark : A.genshinOnboardingBackgroundImageLight;
        case m.hz.VALORANT:
          return N === S.BRd.DARK ? A.valorantOnboardingBackgroundImageDark : A.valorantOnboardingBackgroundImageLight
      }
    }, [e, N]),
    O = (0, u.useToken)(u.tokens.colors.BG_MOD_STRONG);
  switch (t) {
    case m.o2.USER_UPSELL:
      return (0, s.jsxs)("div", {
        ref: l,
        className: A.container,
        children: [(0, s.jsxs)("div", {
          className: A.toolbar,
          style: {
            width: c
          },
          children: [(0, s.jsx)(r.animated.div, {
            className: A.toolbarBackground,
            style: {
              width: c,
              opacity: T.scrollHeight.to([100, 364], [0, 1]),
              borderBottom: T.scrollHeight.to([100, 364], [0, 1]).to(e => "1px solid ".concat(O.hex({
                opacity: e
              })))
            }
          }), (0, s.jsx)(I.Z, {})]
        }), (0, s.jsxs)("div", {
          className: A.upsellContainer,
          children: [(0, s.jsxs)(r.animated.div, {
            className: A.backgroundImageContainer,
            style: {
              opacity: T.scrollHeight.to([100, 364], [1, 0])
            },
            children: [(0, s.jsx)("div", {
              className: C
            }), (0, s.jsx)("div", {
              className: A.backgroundImageBlur
            })]
          }), (0, s.jsx)("div", {
            className: a()(A.backgroundImageContent, A.userUpsell),
            children: (0, s.jsx)(p.ZP, {
              onScroll: Z,
              width: null != c ? c : 0,
              isAnimating: !1,
              variant: p.Bj.UPSELL
            })
          })]
        })]
      });
    case m.o2.USER_ONBOARDING:
      return (0, s.jsx)("div", {
        className: A.container,
        children: (0, s.jsxs)("div", {
          className: a()(L, A.userOnboarding),
          children: [(0, s.jsx)("div", {
            className: A.backgroundImageBlur
          }), (0, s.jsx)("div", {
            className: A.backgroundImageContent,
            children: (0, s.jsx)(g.Z, {
              selectedGame: e,
              setScreen: n
            })
          })]
        })
      })
  }
}

function L() {
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
    r = i.useMemo(() => l.filter(e => !(0, _.EJ)(e)), [l]),
    u = (0, E.ZP)(),
    d = i.useMemo(() => f(t, u), [t, u]),
    I = !e && n;
  return 0 === l.length ? null : (0, s.jsx)("div", {
    className: A.container,
    children: (0, s.jsxs)(c.u2, {
      className: A.upsellScroller,
      fade: !0,
      children: [(0, s.jsxs)("div", {
        className: a()(d, A.adminUpsell),
        children: [(0, s.jsx)("div", {
          className: A.backgroundImageBlur
        }), (0, s.jsx)("div", {
          className: A.backgroundImageContent,
          children: (0, s.jsx)(T.Z, {
            isBrowseButtonVisible: I,
            selectedGame: t,
            eligibleGuilds: r,
            eligibleGuildsIncludingConverted: l
          })
        })]
      }), (0, s.jsx)(N.Z, {
        title: C.Z.Messages.CLAN_DISCOVERY_INSPIRATION_TITLE,
        subtitle: I ? C.Z.Messages.CLAN_DISCOVERY_PILOT_SUBTITLE.format() : void 0
      })]
    })
  })
}