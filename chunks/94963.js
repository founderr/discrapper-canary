"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  l = a.n(i),
  s = a("866442"),
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
  C = a("442837"),
  _ = a("481060"),
  x = a("231467"),
  g = a("650774"),
  I = a("430824"),
  v = a("175557"),
  N = a("688298"),
  A = a("116175"),
  S = a("308083"),
  R = a("689938"),
  M = a("106832"),
  L = a("661926");
let y = S.CLAN_BRAND_PALETTE_PRESETS.length + 1,
  b = [{
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
  j = e => {
    let {
      name: t,
      primaryColor: a,
      secondaryColor: r,
      isCustom: i
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [i ? (0, n.jsx)(d.EyeDropperIcon, {
        width: 24,
        height: 24
      }) : (0, n.jsx)("div", {
        className: M.brandItemCircle,
        style: {
          background: "linear-gradient(-45deg, ".concat(r, " 50%, ").concat(a, " 50% )")
        }
      }), (0, n.jsx)(_.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: M.noWrap,
        children: t
      })]
    })
  };
t.default = e => {
  var t, a, i, o, c, d, u, f;
  let {
    handleUpdate: m,
    progress: h,
    guildId: E
  } = e, T = (0, C.useStateFromStores)([I.default], () => I.default.getGuild(E)), p = null !== (t = (0, C.useStateFromStores)([g.default], () => g.default.getMemberCount(E))) && void 0 !== t ? t : 0, [O, D] = r.useState(h.banner), [F, P] = r.useState({
    primary: null !== (a = h.brandPrimaryColor) && void 0 !== a ? a : S.CLAN_BRAND_PRIMARY_DEFAULT,
    secondary: null !== (i = h.brandSecondaryColor) && void 0 !== i ? i : S.CLAN_BRAND_SECONDARY_DEFAULT
  }), [w, G] = r.useState(() => {
    if (h.brandPrimaryColor === h.badgePrimaryColor && h.brandSecondaryColor === h.badgeSecondaryColor) return 0;
    for (let e = 0; e < S.CLAN_BRAND_PALETTE_PRESETS.length; e++)
      if (S.CLAN_BRAND_PALETTE_PRESETS[e].primary === h.brandPrimaryColor && S.CLAN_BRAND_PALETTE_PRESETS[e].secondary === h.brandSecondaryColor) return e + 1;
    return y
  }), [U, B] = r.useState(!1), k = y === w, H = 0 === w, V = r.useMemo(() => {
    if (k) return F;
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
  }, [F, H, k, h.badgePrimaryColor, h.badgeSecondaryColor, w]);
  return r.useEffect(() => {
    m({
      banner: O,
      brandPrimaryColor: V.primary,
      brandSecondaryColor: V.secondary
    })
  }, [m, O, V.primary, V.secondary]), (0, n.jsxs)("div", {
    className: L.slideContent,
    children: [(0, n.jsx)(_.Heading, {
      variant: "heading-xxl/medium",
      className: L.title,
      children: R.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, n.jsx)(_.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: L.subtitle,
      children: R.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, n.jsxs)("div", {
      className: M.content,
      children: [(0, n.jsx)("div", {
        className: M.leftColumn,
        children: (0, n.jsxs)("div", {
          className: M.colorsContainer,
          children: [(0, n.jsxs)("div", {
            className: M.colorPickerContainer,
            children: [(0, n.jsx)(_.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: R.default.Messages.CLAN_LOOK_BRAND_COLOR
            }), (0, n.jsxs)("div", {
              className: M.colorPickerGrid,
              children: [(0, n.jsx)(_.Clickable, {
                onClick: () => {
                  var e, t;
                  G(0), P({
                    primary: null !== (e = h.badgePrimaryColor) && void 0 !== e ? e : S.CLAN_BRAND_PRIMARY_DEFAULT,
                    secondary: null !== (t = h.badgeSecondaryColor) && void 0 !== t ? t : S.CLAN_BRAND_SECONDARY_DEFAULT
                  })
                },
                className: l()(M.brandItemContainer, {
                  [M.brandItemContainerSelected]: 0 === w
                }),
                children: (0, n.jsx)(j, {
                  name: R.default.Messages.CLAN_LOOK_PRESET_BADGE,
                  primaryColor: h.badgePrimaryColor,
                  secondaryColor: h.badgeSecondaryColor
                })
              }), S.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, n.jsx)(_.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  G(t + 1), P(S.CLAN_BRAND_PALETTE_PRESETS[t])
                },
                className: l()(M.brandItemContainer, {
                  [M.brandItemContainerSelected]: w === t + 1
                }),
                children: (0, n.jsx)(j, {
                  name: e.name,
                  primaryColor: e.primary,
                  secondaryColor: e.secondary
                })
              }, t)), (0, n.jsx)(N.default, {
                showSecondaryColor: !0,
                palette: F,
                onPrimaryColorChange: e => {
                  P(t => ({
                    ...t,
                    primary: (0, s.int2hex)(e)
                  }))
                },
                onSecondaryColorChange: e => {
                  P(t => ({
                    ...t,
                    secondary: (0, s.int2hex)(e)
                  }))
                },
                shouldShow: U,
                onRequestClose: () => B(!1),
                children: e => (0, n.jsx)(_.Clickable, {
                  ...e,
                  onClick: () => {
                    G(y), B(e => !e)
                  },
                  className: l()(M.brandItemContainer, {
                    [M.brandItemContainerSelected]: w === y
                  }),
                  children: (0, n.jsx)(j, {
                    name: R.default.Messages.CLAN_LOOK_PRESET_CUSTOM,
                    isCustom: !0
                  })
                })
              })]
            })]
          }), (0, n.jsxs)("div", {
            className: M.bannerPickerContainer,
            children: [(0, n.jsx)(_.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: R.default.Messages.CLAN_LOOK_BANNER
            }), (0, n.jsx)("div", {
              className: M.bannerPickerGrid,
              children: b.map((e, t) => (0, n.jsxs)(_.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  D(e.bannerKind)
                },
                className: l()(M.bannerItemContainer, {
                  [M.bannerItemContainerSelected]: e.bannerKind === O
                }),
                children: [(0, n.jsx)(e.icon, {
                  width: 24,
                  height: 24
                }), (0, n.jsx)(_.Text, {
                  variant: "text-sm/medium",
                  color: "interactive-normal",
                  className: M.noWrap,
                  children: e.name
                })]
              }, t))
            })]
          })]
        })
      }), (0, n.jsx)("div", {
        className: M.clanCardWrapper,
        children: (0, n.jsx)(x.ClanDiscoveryCardView, {
          bannerComponent: (0, n.jsx)(v.default, {
            banner: O,
            primaryTintColor: V.primary,
            secondaryTintColor: V.secondary,
            className: M.clanBannerPreview
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