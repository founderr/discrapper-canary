"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("866442"),
  _ = s("717772"),
  r = s("931622"),
  u = s("19602"),
  o = s("322282"),
  T = s("585797"),
  d = s("889812"),
  A = s("788670"),
  I = s("773565"),
  L = s("254147"),
  c = s("640024"),
  N = s("442837"),
  S = s("481060"),
  g = s("231467"),
  D = s("650774"),
  C = s("430824"),
  f = s("175557"),
  O = s("688298"),
  G = s("116175"),
  M = s("308083"),
  U = s("689938"),
  R = s("106832"),
  h = s("661926");
let m = M.CLAN_BRAND_PALETTE_PRESETS.length + 1,
  p = [{
    name: "Night Sky",
    bannerKind: M.ClanBannerKind.NIGHT_SKY,
    icon: I.ThemeDarkIcon
  }, {
    name: "Castle",
    bannerKind: M.ClanBannerKind.CASTLE,
    icon: r.CrownIcon
  }, {
    name: "World Map",
    bannerKind: M.ClanBannerKind.WORLD_MAP,
    icon: o.GlobeEarthIcon
  }, {
    name: "Sea Foam",
    bannerKind: M.ClanBannerKind.SEA_FOAM,
    icon: A.PrivacyAndSafetyIcon
  }, {
    name: "Warp",
    bannerKind: M.ClanBannerKind.WARP_TUNNEL,
    icon: _.BlurBackgroundIcon
  }, {
    name: "House",
    bannerKind: M.ClanBannerKind.HOUSE,
    icon: L.TreehouseIcon
  }, {
    name: "Pulsar",
    bannerKind: M.ClanBannerKind.HEIGHTMAP,
    icon: c.WaveformIcon
  }, {
    name: "Mesh",
    bannerKind: M.ClanBannerKind.MESH,
    icon: T.GridVerticalIcon
  }, {
    name: "Spatter",
    bannerKind: M.ClanBannerKind.SPATTER,
    icon: d.PaintbrushThickIcon
  }],
  v = e => {
    let {
      name: t,
      primaryColor: s,
      secondaryColor: n,
      isCustom: i
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [i ? (0, a.jsx)(u.EyeDropperIcon, {
        width: 24,
        height: 24
      }) : (0, a.jsx)("div", {
        className: R.brandItemCircle,
        style: {
          background: "linear-gradient(-45deg, ".concat(n, " 50%, ").concat(s, " 50% )")
        }
      }), (0, a.jsx)(S.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: R.noWrap,
        children: t
      })]
    })
  };
t.default = e => {
  var t, s, i, _, r, u, o, T;
  let {
    handleUpdate: d,
    progress: A,
    guildId: I
  } = e, L = (0, N.useStateFromStores)([C.default], () => C.default.getGuild(I)), c = null !== (t = (0, N.useStateFromStores)([D.default], () => D.default.getMemberCount(I))) && void 0 !== t ? t : 0, [y, P] = n.useState(A.banner), [x, H] = n.useState({
    primary: null !== (s = A.brandPrimaryColor) && void 0 !== s ? s : M.CLAN_BRAND_PRIMARY_DEFAULT,
    secondary: null !== (i = A.brandSecondaryColor) && void 0 !== i ? i : M.CLAN_BRAND_SECONDARY_DEFAULT
  }), [B, F] = n.useState(() => {
    if (A.brandPrimaryColor === A.badgePrimaryColor && A.brandSecondaryColor === A.badgeSecondaryColor) return 0;
    for (let e = 0; e < M.CLAN_BRAND_PALETTE_PRESETS.length; e++)
      if (M.CLAN_BRAND_PALETTE_PRESETS[e].primary === A.brandPrimaryColor && M.CLAN_BRAND_PALETTE_PRESETS[e].secondary === A.brandSecondaryColor) return e + 1;
    return m
  }), [V, j] = n.useState(!1), b = m === B, K = 0 === B, w = n.useMemo(() => {
    if (b) return x;
    if (K) {
      var e, t;
      return {
        primary: null !== (e = A.badgePrimaryColor) && void 0 !== e ? e : G.CLAN_BADGE_PRIMARY_DEFAULT,
        secondary: null !== (t = A.badgeSecondaryColor) && void 0 !== t ? t : G.CLAN_BADGE_SECONDARY_DEFAULT
      }
    } {
      let e = M.CLAN_BRAND_PALETTE_PRESETS[B - 1];
      return {
        primary: e.primary,
        secondary: e.secondary
      }
    }
  }, [x, K, b, A.badgePrimaryColor, A.badgeSecondaryColor, B]);
  return n.useEffect(() => {
    d({
      banner: y,
      brandPrimaryColor: w.primary,
      brandSecondaryColor: w.secondary
    })
  }, [d, y, w.primary, w.secondary]), (0, a.jsxs)("div", {
    className: h.slideContent,
    children: [(0, a.jsx)(S.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: U.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, a.jsx)(S.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: U.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: R.content,
      children: [(0, a.jsx)("div", {
        className: R.leftColumn,
        children: (0, a.jsxs)("div", {
          className: R.colorsContainer,
          children: [(0, a.jsxs)("div", {
            className: R.colorPickerContainer,
            children: [(0, a.jsx)(S.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: U.default.Messages.CLAN_LOOK_BRAND_COLOR
            }), (0, a.jsxs)("div", {
              className: R.colorPickerGrid,
              children: [(0, a.jsx)(S.Clickable, {
                onClick: () => {
                  var e, t;
                  F(0), H({
                    primary: null !== (e = A.badgePrimaryColor) && void 0 !== e ? e : M.CLAN_BRAND_PRIMARY_DEFAULT,
                    secondary: null !== (t = A.badgeSecondaryColor) && void 0 !== t ? t : M.CLAN_BRAND_SECONDARY_DEFAULT
                  })
                },
                className: E()(R.brandItemContainer, {
                  [R.brandItemContainerSelected]: 0 === B
                }),
                children: (0, a.jsx)(v, {
                  name: U.default.Messages.CLAN_LOOK_PRESET_BADGE,
                  primaryColor: A.badgePrimaryColor,
                  secondaryColor: A.badgeSecondaryColor
                })
              }), M.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, a.jsx)(S.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  F(t + 1), H(M.CLAN_BRAND_PALETTE_PRESETS[t])
                },
                className: E()(R.brandItemContainer, {
                  [R.brandItemContainerSelected]: B === t + 1
                }),
                children: (0, a.jsx)(v, {
                  name: e.name,
                  primaryColor: e.primary,
                  secondaryColor: e.secondary
                })
              }, t)), (0, a.jsx)(O.default, {
                showSecondaryColor: !0,
                palette: x,
                onPrimaryColorChange: e => {
                  H(t => ({
                    ...t,
                    primary: (0, l.int2hex)(e)
                  }))
                },
                onSecondaryColorChange: e => {
                  H(t => ({
                    ...t,
                    secondary: (0, l.int2hex)(e)
                  }))
                },
                shouldShow: V,
                onRequestClose: () => j(!1),
                children: e => (0, a.jsx)(S.Clickable, {
                  ...e,
                  onClick: () => {
                    F(m), j(e => !e)
                  },
                  className: E()(R.brandItemContainer, {
                    [R.brandItemContainerSelected]: B === m
                  }),
                  children: (0, a.jsx)(v, {
                    name: U.default.Messages.CLAN_LOOK_PRESET_CUSTOM,
                    isCustom: !0
                  })
                })
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: R.bannerPickerContainer,
            children: [(0, a.jsx)(S.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: U.default.Messages.CLAN_LOOK_BANNER
            }), (0, a.jsx)("div", {
              className: R.bannerPickerGrid,
              children: p.map((e, t) => (0, a.jsxs)(S.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  P(e.bannerKind)
                },
                className: E()(R.bannerItemContainer, {
                  [R.bannerItemContainerSelected]: e.bannerKind === y
                }),
                children: [(0, a.jsx)(e.icon, {
                  width: 24,
                  height: 24
                }), (0, a.jsx)(S.Text, {
                  variant: "text-sm/medium",
                  color: "interactive-normal",
                  className: R.noWrap,
                  children: e.name
                })]
              }, t))
            })]
          })]
        })
      }), (0, a.jsx)("div", {
        className: R.clanCardWrapper,
        children: (0, a.jsx)(g.ClanDiscoveryCardView, {
          bannerComponent: (0, a.jsx)(f.default, {
            banner: y,
            primaryTintColor: w.primary,
            secondaryTintColor: w.secondary,
            className: R.clanBannerPreview
          }),
          clan: {
            ...A,
            id: I,
            name: null !== (_ = null == L ? void 0 : L.name) && void 0 !== _ ? _ : "",
            icon: null == L ? void 0 : L.icon,
            memberCount: c,
            games: Array.from(A.gameApplicationIds),
            traits: Array.from(A.interests),
            banner: y,
            badge: {
              badgeKind: A.badgeKind,
              primaryColor: null !== (r = A.badgePrimaryColor) && void 0 !== r ? r : M.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null !== (u = A.badgeSecondaryColor) && void 0 !== u ? u : M.CLAN_BRAND_SECONDARY_DEFAULT
            },
            branding: {
              primaryColor: null !== (o = w.primary) && void 0 !== o ? o : M.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null !== (T = w.secondary) && void 0 !== T ? T : M.CLAN_BRAND_SECONDARY_DEFAULT
            }
          }
        })
      })]
    })]
  })
}