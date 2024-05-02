"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  i = n("120356"),
  s = n.n(i),
  l = n("866442"),
  o = n("19602"),
  c = n("911504"),
  d = n("86934"),
  u = n("683692"),
  f = n("442837"),
  m = n("481060"),
  h = n("231467"),
  p = n("650774"),
  T = n("430824"),
  E = n("175557"),
  C = n("688298"),
  _ = n("116175"),
  g = n("308083"),
  x = n("689938"),
  I = n("868878"),
  v = n("418571");
let N = g.CLAN_BRAND_PALETTE_PRESETS.length + 1,
  S = [{
    name: "Night Sky",
    bannerKind: g.ClanBannerKind.NIGHT_SKY,
    icon: u.ScreenSystemRequirementsIcon
  }, {
    name: "Castle",
    bannerKind: g.ClanBannerKind.CASTLE,
    icon: d.MenuIcon
  }, {
    name: "Map",
    bannerKind: g.ClanBannerKind.WORLD_MAP,
    icon: o.EyeDropperIcon
  }, {
    name: "Sea Foam",
    bannerKind: g.ClanBannerKind.SEA_FOAM,
    icon: c.MagicWandIcon
  }, {
    name: "Warp",
    bannerKind: g.ClanBannerKind.WARP_TUNNEL,
    icon: o.EyeDropperIcon
  }, {
    name: "House",
    bannerKind: g.ClanBannerKind.HOUSE,
    icon: u.ScreenSystemRequirementsIcon
  }, {
    name: "Heightmap",
    bannerKind: g.ClanBannerKind.HEIGHTMAP,
    icon: c.MagicWandIcon
  }, {
    name: "Mesh",
    bannerKind: g.ClanBannerKind.MESH,
    icon: u.ScreenSystemRequirementsIcon
  }, {
    name: "Spatter",
    bannerKind: g.ClanBannerKind.SPATTER,
    icon: d.MenuIcon
  }],
  A = e => {
    let {
      name: t,
      primaryColor: n,
      secondaryColor: r,
      isCustom: i
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [i ? (0, a.jsx)(o.EyeDropperIcon, {
        width: 24,
        height: 24
      }) : (0, a.jsx)("div", {
        className: I.brandItemCircle,
        style: {
          background: "linear-gradient(-45deg, ".concat(r, " 50%, ").concat(n, " 50% )")
        }
      }), (0, a.jsx)(m.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: I.noWrap,
        children: t
      })]
    })
  };
t.default = e => {
  var t, n, i, o, c, d, u, L;
  let {
    handleUpdate: b,
    progress: R,
    guildId: M
  } = e, y = (0, f.useStateFromStores)([T.default], () => T.default.getGuild(M)), j = null !== (t = (0, f.useStateFromStores)([p.default], () => p.default.getMemberCount(M))) && void 0 !== t ? t : 0, [O, D] = r.useState(R.banner), [P, F] = r.useState({
    primary: null !== (n = R.brandPrimaryColor) && void 0 !== n ? n : g.CLAN_BRAND_PRIMARY_DEFAULT,
    secondary: null !== (i = R.brandSecondaryColor) && void 0 !== i ? i : g.CLAN_BRAND_SECONDARY_DEFAULT
  }), [B, w] = r.useState(() => {
    if (R.brandPrimaryColor === R.badgePrimaryColor && R.brandSecondaryColor === R.badgeSecondaryColor) return 0;
    for (let e = 0; e < g.CLAN_BRAND_PALETTE_PRESETS.length; e++)
      if (g.CLAN_BRAND_PALETTE_PRESETS[e].primary === R.brandPrimaryColor && g.CLAN_BRAND_PALETTE_PRESETS[e].secondary === R.brandSecondaryColor) return e + 1;
    return N
  }), [G, U] = r.useState(!1), k = N === B, H = 0 === B, V = r.useMemo(() => {
    if (k) return P;
    if (H) {
      var e, t;
      return {
        primary: null !== (e = R.badgePrimaryColor) && void 0 !== e ? e : _.CLAN_BADGE_PRIMARY_DEFAULT,
        secondary: null !== (t = R.badgeSecondaryColor) && void 0 !== t ? t : _.CLAN_BADGE_SECONDARY_DEFAULT
      }
    } {
      let e = g.CLAN_BRAND_PALETTE_PRESETS[B - 1];
      return {
        primary: e.primary,
        secondary: e.secondary
      }
    }
  }, [P, H, k, R.badgePrimaryColor, R.badgeSecondaryColor, B]);
  return r.useEffect(() => {
    b({
      banner: O,
      brandPrimaryColor: V.primary,
      brandSecondaryColor: V.secondary
    })
  }, [b, O, V.primary, V.secondary]), (0, a.jsxs)("div", {
    className: v.slideContentWithSidebar,
    children: [(0, a.jsx)(m.Heading, {
      variant: "heading-xxl/medium",
      className: v.title,
      children: x.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, a.jsx)(m.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: v.subtitle,
      children: x.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: v.content,
      children: [(0, a.jsxs)("div", {
        className: I.colorsContainer,
        children: [(0, a.jsxs)("div", {
          className: I.colorPickerContainer,
          children: [(0, a.jsx)(m.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: x.default.Messages.CLAN_LOOK_BRAND_COLOR
          }), (0, a.jsxs)("div", {
            className: I.colorPickerGrid,
            children: [(0, a.jsx)(m.Clickable, {
              onClick: () => {
                var e, t;
                w(0), F({
                  primary: null !== (e = R.badgePrimaryColor) && void 0 !== e ? e : g.CLAN_BRAND_PRIMARY_DEFAULT,
                  secondary: null !== (t = R.badgeSecondaryColor) && void 0 !== t ? t : g.CLAN_BRAND_SECONDARY_DEFAULT
                })
              },
              className: s()(I.brandItemContainer, {
                [I.brandItemContainerSelected]: 0 === B
              }),
              children: (0, a.jsx)(A, {
                name: x.default.Messages.CLAN_LOOK_PRESET_BADGE,
                primaryColor: R.badgePrimaryColor,
                secondaryColor: R.badgeSecondaryColor
              })
            }), g.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, a.jsx)(m.Clickable, {
              "aria-label": e.name,
              onClick: () => {
                w(t + 1), F(g.CLAN_BRAND_PALETTE_PRESETS[t])
              },
              className: s()(I.brandItemContainer, {
                [I.brandItemContainerSelected]: B === t + 1
              }),
              children: (0, a.jsx)(A, {
                name: e.name,
                primaryColor: e.primary,
                secondaryColor: e.secondary
              })
            }, t)), (0, a.jsx)(C.default, {
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
              shouldShow: G,
              onRequestClose: () => U(!1),
              children: e => (0, a.jsx)(m.Clickable, {
                ...e,
                onClick: () => {
                  w(N), U(e => !e)
                },
                className: s()(I.brandItemContainer, {
                  [I.brandItemContainerSelected]: B === N
                }),
                children: (0, a.jsx)(A, {
                  name: x.default.Messages.CLAN_LOOK_PRESET_CUSTOM,
                  isCustom: !0
                })
              })
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: I.bannerPickerContainer,
          children: [(0, a.jsx)(m.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: x.default.Messages.CLAN_LOOK_BANNER
          }), (0, a.jsx)("div", {
            className: I.bannerPickerGrid,
            children: S.map((e, t) => (0, a.jsxs)(m.Clickable, {
              "aria-label": e.name,
              onClick: () => {
                D(e.bannerKind)
              },
              className: s()(I.bannerItemContainer, {
                [I.bannerItemContainerSelected]: e.bannerKind === O
              }),
              children: [(0, a.jsx)(e.icon, {
                width: 24,
                height: 24
              }), (0, a.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: "interactive-normal",
                className: I.noWrap,
                children: e.name
              })]
            }, t))
          })]
        })]
      }), (0, a.jsx)("div", {
        className: I.clanCardWrapper,
        children: (0, a.jsx)(h.ClanDiscoveryCardView, {
          banner: (0, a.jsx)(E.default, {
            banner: O,
            primaryTintColor: V.primary,
            secondaryTintColor: V.secondary,
            className: I.clanBannerPreview
          }),
          clan: {
            ...R,
            id: M,
            name: null !== (o = null == y ? void 0 : y.name) && void 0 !== o ? o : "",
            icon: null == y ? void 0 : y.icon,
            memberCount: j,
            games: Array.from(R.gameApplicationIds),
            traits: Array.from(R.interests),
            banner: O,
            badge: {
              badgeKind: R.badgeKind,
              primaryColor: null !== (c = R.badgePrimaryColor) && void 0 !== c ? c : g.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null !== (d = R.badgeSecondaryColor) && void 0 !== d ? d : g.CLAN_BRAND_SECONDARY_DEFAULT
            },
            branding: {
              primaryColor: null !== (u = V.primary) && void 0 !== u ? u : g.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null !== (L = V.secondary) && void 0 !== L ? L : g.CLAN_BRAND_SECONDARY_DEFAULT
            }
          }
        })
      })]
    })]
  })
}