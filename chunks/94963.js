"use strict";
a.r(t), a("47120");
var n = a("735250"),
  i = a("470079"),
  r = a("120356"),
  s = a.n(r),
  l = a("866442"),
  o = a("717772"),
  c = a("931622"),
  d = a("19602"),
  u = a("322282"),
  f = a("585797"),
  m = a("889812"),
  h = a("788670"),
  E = a("773565"),
  T = a("254147"),
  p = a("640024"),
  _ = a("442837"),
  C = a("481060"),
  g = a("231467"),
  x = a("650774"),
  I = a("430824"),
  v = a("175557"),
  N = a("688298"),
  A = a("116175"),
  S = a("308083"),
  R = a("689938"),
  L = a("868878"),
  M = a("418571");
let b = S.CLAN_BRAND_PALETTE_PRESETS.length + 1,
  j = [{
    name: "Night Sky",
    bannerKind: S.ClanBannerKind.NIGHT_SKY,
    icon: E.ThemeDarkIcon
  }, {
    name: "Castle",
    bannerKind: S.ClanBannerKind.CASTLE,
    icon: c.CrownIcon
  }, {
    name: "World Map",
    bannerKind: S.ClanBannerKind.WORLD_MAP,
    icon: u.GlobeEarthIcon
  }, {
    name: "Sea Foam",
    bannerKind: S.ClanBannerKind.SEA_FOAM,
    icon: h.PrivacyAndSafetyIcon
  }, {
    name: "Warp",
    bannerKind: S.ClanBannerKind.WARP_TUNNEL,
    icon: o.BlurBackgroundIcon
  }, {
    name: "House",
    bannerKind: S.ClanBannerKind.HOUSE,
    icon: T.TreehouseIcon
  }, {
    name: "Pulsar",
    bannerKind: S.ClanBannerKind.HEIGHTMAP,
    icon: p.WaveformIcon
  }, {
    name: "Mesh",
    bannerKind: S.ClanBannerKind.MESH,
    icon: f.GridVerticalIcon
  }, {
    name: "Spatter",
    bannerKind: S.ClanBannerKind.SPATTER,
    icon: m.PaintbrushThickIcon
  }],
  y = e => {
    let {
      name: t,
      primaryColor: a,
      secondaryColor: i,
      isCustom: r
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [r ? (0, n.jsx)(d.EyeDropperIcon, {
        width: 24,
        height: 24
      }) : (0, n.jsx)("div", {
        className: L.brandItemCircle,
        style: {
          background: "linear-gradient(-45deg, ".concat(i, " 50%, ").concat(a, " 50% )")
        }
      }), (0, n.jsx)(C.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: L.noWrap,
        children: t
      })]
    })
  };
t.default = e => {
  var t, a, r, o, c, d, u, f;
  let {
    handleUpdate: m,
    progress: h,
    guildId: E
  } = e, T = (0, _.useStateFromStores)([I.default], () => I.default.getGuild(E)), p = null !== (t = (0, _.useStateFromStores)([x.default], () => x.default.getMemberCount(E))) && void 0 !== t ? t : 0, [O, D] = i.useState(h.banner), [P, F] = i.useState({
    primary: null !== (a = h.brandPrimaryColor) && void 0 !== a ? a : S.CLAN_BRAND_PRIMARY_DEFAULT,
    secondary: null !== (r = h.brandSecondaryColor) && void 0 !== r ? r : S.CLAN_BRAND_SECONDARY_DEFAULT
  }), [w, G] = i.useState(() => {
    if (h.brandPrimaryColor === h.badgePrimaryColor && h.brandSecondaryColor === h.badgeSecondaryColor) return 0;
    for (let e = 0; e < S.CLAN_BRAND_PALETTE_PRESETS.length; e++)
      if (S.CLAN_BRAND_PALETTE_PRESETS[e].primary === h.brandPrimaryColor && S.CLAN_BRAND_PALETTE_PRESETS[e].secondary === h.brandSecondaryColor) return e + 1;
    return b
  }), [U, B] = i.useState(!1), k = b === w, H = 0 === w, V = i.useMemo(() => {
    if (k) return P;
    if (H) {
      var e, t;
      return {
        primary: null !== (e = h.badgePrimaryColor) && void 0 !== e ? e : A.CLAN_BADGE_PRIMARY_DEFAULT,
        secondary: null !== (t = h.badgeSecondaryColor) && void 0 !== t ? t : A.CLAN_BADGE_SECONDARY_DEFAULT
      }
    } {
      let e = S.CLAN_BRAND_PALETTE_PRESETS[w - 1];
      return {
        primary: e.primary,
        secondary: e.secondary
      }
    }
  }, [P, H, k, h.badgePrimaryColor, h.badgeSecondaryColor, w]);
  return i.useEffect(() => {
    m({
      banner: O,
      brandPrimaryColor: V.primary,
      brandSecondaryColor: V.secondary
    })
  }, [m, O, V.primary, V.secondary]), (0, n.jsxs)("div", {
    className: M.slideContent,
    children: [(0, n.jsx)(C.Heading, {
      variant: "heading-xxl/medium",
      className: M.title,
      children: R.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, n.jsx)(C.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: M.subtitle,
      children: R.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, n.jsxs)("div", {
      className: L.content,
      children: [(0, n.jsx)("div", {
        className: L.leftColumn,
        children: (0, n.jsxs)("div", {
          className: L.colorsContainer,
          children: [(0, n.jsxs)("div", {
            className: L.colorPickerContainer,
            children: [(0, n.jsx)(C.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: R.default.Messages.CLAN_LOOK_BRAND_COLOR
            }), (0, n.jsxs)("div", {
              className: L.colorPickerGrid,
              children: [(0, n.jsx)(C.Clickable, {
                onClick: () => {
                  var e, t;
                  G(0), F({
                    primary: null !== (e = h.badgePrimaryColor) && void 0 !== e ? e : S.CLAN_BRAND_PRIMARY_DEFAULT,
                    secondary: null !== (t = h.badgeSecondaryColor) && void 0 !== t ? t : S.CLAN_BRAND_SECONDARY_DEFAULT
                  })
                },
                className: s()(L.brandItemContainer, {
                  [L.brandItemContainerSelected]: 0 === w
                }),
                children: (0, n.jsx)(y, {
                  name: R.default.Messages.CLAN_LOOK_PRESET_BADGE,
                  primaryColor: h.badgePrimaryColor,
                  secondaryColor: h.badgeSecondaryColor
                })
              }), S.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, n.jsx)(C.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  G(t + 1), F(S.CLAN_BRAND_PALETTE_PRESETS[t])
                },
                className: s()(L.brandItemContainer, {
                  [L.brandItemContainerSelected]: w === t + 1
                }),
                children: (0, n.jsx)(y, {
                  name: e.name,
                  primaryColor: e.primary,
                  secondaryColor: e.secondary
                })
              }, t)), (0, n.jsx)(N.default, {
                showSecondaryColor: !0,
                palette: P,
                onPrimaryColorChange: e => {
                  F(t => ({
                    ...t,
                    primary: (0, l.int2hex)(e)
                  }))
                },
                onSecondaryColorChange: e => {
                  F(t => ({
                    ...t,
                    secondary: (0, l.int2hex)(e)
                  }))
                },
                shouldShow: U,
                onRequestClose: () => B(!1),
                children: e => (0, n.jsx)(C.Clickable, {
                  ...e,
                  onClick: () => {
                    G(b), B(e => !e)
                  },
                  className: s()(L.brandItemContainer, {
                    [L.brandItemContainerSelected]: w === b
                  }),
                  children: (0, n.jsx)(y, {
                    name: R.default.Messages.CLAN_LOOK_PRESET_CUSTOM,
                    isCustom: !0
                  })
                })
              })]
            })]
          }), (0, n.jsxs)("div", {
            className: L.bannerPickerContainer,
            children: [(0, n.jsx)(C.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: R.default.Messages.CLAN_LOOK_BANNER
            }), (0, n.jsx)("div", {
              className: L.bannerPickerGrid,
              children: j.map((e, t) => (0, n.jsxs)(C.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  D(e.bannerKind)
                },
                className: s()(L.bannerItemContainer, {
                  [L.bannerItemContainerSelected]: e.bannerKind === O
                }),
                children: [(0, n.jsx)(e.icon, {
                  width: 24,
                  height: 24
                }), (0, n.jsx)(C.Text, {
                  variant: "text-sm/medium",
                  color: "interactive-normal",
                  className: L.noWrap,
                  children: e.name
                })]
              }, t))
            })]
          })]
        })
      }), (0, n.jsx)("div", {
        className: L.clanCardWrapper,
        children: (0, n.jsx)(g.ClanDiscoveryCardView, {
          bannerComponent: (0, n.jsx)(v.default, {
            banner: O,
            primaryTintColor: V.primary,
            secondaryTintColor: V.secondary,
            className: L.clanBannerPreview
          }),
          clan: {
            ...h,
            id: E,
            name: null !== (o = null == T ? void 0 : T.name) && void 0 !== o ? o : "",
            icon: null == T ? void 0 : T.icon,
            memberCount: p,
            games: Array.from(h.gameApplicationIds),
            traits: Array.from(h.interests),
            banner: O,
            badge: {
              badgeKind: h.badgeKind,
              primaryColor: null !== (c = h.badgePrimaryColor) && void 0 !== c ? c : S.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null !== (d = h.badgeSecondaryColor) && void 0 !== d ? d : S.CLAN_BRAND_SECONDARY_DEFAULT
            },
            branding: {
              primaryColor: null !== (u = V.primary) && void 0 !== u ? u : S.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null !== (f = V.secondary) && void 0 !== f ? f : S.CLAN_BRAND_SECONDARY_DEFAULT
            }
          }
        })
      })]
    })]
  })
}