"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("866442"),
  o = n("19602"),
  c = n("911504"),
  d = n("86934"),
  u = n("683692"),
  f = n("442837"),
  m = n("481060"),
  h = n("231467"),
  p = n("650774"),
  E = n("430824"),
  T = n("175557"),
  C = n("688298"),
  _ = n("116175"),
  g = n("308083"),
  x = n("689938"),
  I = n("868878"),
  N = n("418571");
let v = g.CLAN_BRAND_PALETTE_PRESETS.length + 1,
  A = [{
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
  S = e => {
    let {
      name: t,
      primaryColor: n,
      secondaryColor: r,
      isCustom: s
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [s ? (0, a.jsx)(o.EyeDropperIcon, {
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
  var t, n, s, o, c, d, u, L;
  let {
    handleUpdate: R,
    progress: y,
    guildId: b
  } = e, j = (0, f.useStateFromStores)([E.default], () => E.default.getGuild(b)), M = null !== (t = (0, f.useStateFromStores)([p.default], () => p.default.getMemberCount(b))) && void 0 !== t ? t : 0, [O, D] = r.useState(y.banner), [P, F] = r.useState({
    primary: null !== (n = y.brandPrimaryColor) && void 0 !== n ? n : g.CLAN_BRAND_PRIMARY_DEFAULT,
    secondary: null !== (s = y.brandSecondaryColor) && void 0 !== s ? s : g.CLAN_BRAND_SECONDARY_DEFAULT
  }), [B, w] = r.useState(() => {
    if (y.brandPrimaryColor === y.badgePrimaryColor && y.brandSecondaryColor === y.badgeSecondaryColor) return 0;
    for (let e = 0; e < g.CLAN_BRAND_PALETTE_PRESETS.length; e++)
      if (g.CLAN_BRAND_PALETTE_PRESETS[e].primary === y.brandPrimaryColor && g.CLAN_BRAND_PALETTE_PRESETS[e].secondary === y.brandSecondaryColor) return e + 1;
    return v
  }), [G, U] = r.useState(!1), H = v === B, k = 0 === B, V = r.useMemo(() => {
    if (H) return P;
    if (k) {
      var e, t;
      return {
        primary: null !== (e = y.badgePrimaryColor) && void 0 !== e ? e : _.CLAN_BADGE_PRIMARY_DEFAULT,
        secondary: null !== (t = y.badgeSecondaryColor) && void 0 !== t ? t : _.CLAN_BADGE_SECONDARY_DEFAULT
      }
    } {
      let e = g.CLAN_BRAND_PALETTE_PRESETS[B - 1];
      return {
        primary: e.primary,
        secondary: e.secondary
      }
    }
  }, [P, k, H, y.badgePrimaryColor, y.badgeSecondaryColor, B]);
  return r.useEffect(() => {
    R({
      banner: O,
      brandPrimaryColor: V.primary,
      brandSecondaryColor: V.secondary
    })
  }, [R, O, V.primary, V.secondary]), (0, a.jsxs)("div", {
    className: N.slideContentWithSidebar,
    children: [(0, a.jsx)(m.Heading, {
      variant: "heading-xxl/medium",
      className: N.title,
      children: x.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, a.jsx)(m.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: N.subtitle,
      children: x.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: N.content,
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
                  primary: null !== (e = y.badgePrimaryColor) && void 0 !== e ? e : g.CLAN_BRAND_PRIMARY_DEFAULT,
                  secondary: null !== (t = y.badgeSecondaryColor) && void 0 !== t ? t : g.CLAN_BRAND_SECONDARY_DEFAULT
                })
              },
              className: i()(I.brandItemContainer, {
                [I.brandItemContainerSelected]: 0 === B
              }),
              children: (0, a.jsx)(S, {
                name: x.default.Messages.CLAN_LOOK_PRESET_BADGE,
                primaryColor: y.badgePrimaryColor,
                secondaryColor: y.badgeSecondaryColor
              })
            }), g.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, a.jsx)(m.Clickable, {
              "aria-label": e.name,
              onClick: () => {
                w(t + 1), F(g.CLAN_BRAND_PALETTE_PRESETS[t])
              },
              className: i()(I.brandItemContainer, {
                [I.brandItemContainerSelected]: B === t + 1
              }),
              children: (0, a.jsx)(S, {
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
                  w(v), U(e => !e)
                },
                className: i()(I.brandItemContainer, {
                  [I.brandItemContainerSelected]: B === v
                }),
                children: (0, a.jsx)(S, {
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
            children: A.map((e, t) => (0, a.jsxs)(m.Clickable, {
              "aria-label": e.name,
              onClick: () => {
                D(e.bannerKind)
              },
              className: i()(I.bannerItemContainer, {
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
          banner: (0, a.jsx)(T.default, {
            banner: O,
            primaryTintColor: V.primary,
            secondaryTintColor: V.secondary,
            className: I.clanBannerPreview
          }),
          clan: {
            ...y,
            id: b,
            name: null !== (o = null == j ? void 0 : j.name) && void 0 !== o ? o : "",
            icon: null == j ? void 0 : j.icon,
            memberCount: M,
            games: Array.from(y.gameApplicationIds),
            traits: Array.from(y.interests),
            banner: O,
            badge: {
              badgeKind: y.badgeKind,
              primaryColor: null !== (c = y.badgePrimaryColor) && void 0 !== c ? c : g.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null !== (d = y.badgeSecondaryColor) && void 0 !== d ? d : g.CLAN_BRAND_SECONDARY_DEFAULT
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