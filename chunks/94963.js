"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("866442"),
  o = a("19602"),
  u = a("911504"),
  d = a("86934"),
  c = a("683692"),
  f = a("442837"),
  E = a("481060"),
  h = a("231467"),
  _ = a("650774"),
  C = a("430824"),
  m = a("175557"),
  S = a("688298"),
  p = a("308083"),
  I = a("689938"),
  T = a("868878"),
  g = a("418571");
let A = p.CLAN_BRAND_PALETTE_PRESETS.length + 1,
  N = [{
    name: "Night Sky",
    bannerKind: p.ClanBannerKind.NIGHT_SKY,
    icon: c.ScreenSystemRequirementsIcon
  }, {
    name: "Castle",
    bannerKind: p.ClanBannerKind.CASTLE,
    icon: d.MenuIcon
  }, {
    name: "Map",
    bannerKind: p.ClanBannerKind.WORLD_MAP,
    icon: o.EyeDropperIcon
  }, {
    name: "Sea Foam",
    bannerKind: p.ClanBannerKind.SEA_FOAM,
    icon: u.MagicWandIcon
  }, {
    name: "Warp",
    bannerKind: p.ClanBannerKind.WARP_TUNNEL,
    icon: o.EyeDropperIcon
  }, {
    name: "House",
    bannerKind: p.ClanBannerKind.HOUSE,
    icon: c.ScreenSystemRequirementsIcon
  }, {
    name: "Heightmap",
    bannerKind: p.ClanBannerKind.HEIGHTMAP,
    icon: u.MagicWandIcon
  }, {
    name: "Mesh",
    bannerKind: p.ClanBannerKind.MESH,
    icon: c.ScreenSystemRequirementsIcon
  }, {
    name: "Spatter",
    bannerKind: p.ClanBannerKind.SPATTER,
    icon: d.MenuIcon
  }],
  v = e => {
    let {
      name: t,
      primaryColor: a,
      secondaryColor: s,
      isCustom: l
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [l ? (0, n.jsx)(o.EyeDropperIcon, {
        width: 24,
        height: 24
      }) : (0, n.jsx)("div", {
        className: T.brandItemCircle,
        style: {
          background: "linear-gradient(-45deg, ".concat(s, " 50%, ").concat(a, " 50% )")
        }
      }), (0, n.jsx)(E.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: T.noWrap,
        children: t
      })]
    })
  };
t.default = e => {
  var t, a;
  let {
    handleUpdate: l,
    progress: o,
    guildId: u
  } = e, d = (0, f.useStateFromStores)([C.default], () => C.default.getGuild(u)), c = null !== (t = (0, f.useStateFromStores)([_.default], () => _.default.getMemberCount(u))) && void 0 !== t ? t : 0, [L, R] = s.useState(o.banner), [O, M] = s.useState({
    primary: o.brandPrimaryColor,
    secondary: o.brandSecondaryColor
  }), [P, y] = s.useState(() => {
    if (o.brandPrimaryColor === o.badgePrimaryColor && o.brandSecondaryColor === o.badgeSecondaryColor) return 0;
    for (let e = 0; e < p.CLAN_BRAND_PALETTE_PRESETS.length; e++)
      if (p.CLAN_BRAND_PALETTE_PRESETS[e].primary === o.brandPrimaryColor && p.CLAN_BRAND_PALETTE_PRESETS[e].secondary === o.brandSecondaryColor) return e + 1;
    return A
  }), [x, D] = s.useState(!1), b = A === P, U = b ? O : 0 === P ? {
    primary: o.badgePrimaryColor,
    secondary: o.badgeSecondaryColor
  } : p.CLAN_BRAND_PALETTE_PRESETS[P - 1];
  return s.useEffect(() => {
    l({
      banner: L,
      brandPrimaryColor: U.primary,
      brandSecondaryColor: U.secondary
    })
  }, [l, L, U.primary, U.secondary]), (0, n.jsxs)("div", {
    className: g.slideContentWithSidebar,
    children: [(0, n.jsx)(E.Heading, {
      variant: "heading-xxl/medium",
      className: g.title,
      children: I.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, n.jsx)(E.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: g.subtitle,
      children: I.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, n.jsxs)("div", {
      className: g.content,
      children: [(0, n.jsxs)("div", {
        className: T.colorsContainer,
        children: [(0, n.jsxs)("div", {
          className: T.colorPickerContainer,
          children: [(0, n.jsx)(E.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: I.default.Messages.CLAN_LOOK_BRAND_COLOR
          }), (0, n.jsxs)("div", {
            className: T.colorPickerGrid,
            children: [(0, n.jsx)(E.Clickable, {
              onClick: () => {
                y(0), M({
                  primary: o.badgePrimaryColor,
                  secondary: o.badgeSecondaryColor
                })
              },
              className: i()(T.brandItemContainer, {
                [T.brandItemContainerSelected]: 0 === P
              }),
              children: (0, n.jsx)(v, {
                name: I.default.Messages.CLAN_LOOK_PRESET_BADGE,
                primaryColor: o.badgePrimaryColor,
                secondaryColor: o.badgeSecondaryColor
              })
            }), p.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, n.jsx)(E.Clickable, {
              "aria-label": e.name,
              onClick: () => {
                y(t + 1), M(p.CLAN_BRAND_PALETTE_PRESETS[t])
              },
              className: i()(T.brandItemContainer, {
                [T.brandItemContainerSelected]: P === t + 1
              }),
              children: (0, n.jsx)(v, {
                name: e.name,
                primaryColor: e.primary,
                secondaryColor: e.secondary
              })
            }, t)), (0, n.jsx)(S.default, {
              showSecondaryColor: !0,
              palette: O,
              onPrimaryColorChange: e => {
                M(t => ({
                  ...t,
                  primary: (0, r.int2hex)(e)
                }))
              },
              onSecondaryColorChange: e => {
                M(t => ({
                  ...t,
                  secondary: (0, r.int2hex)(e)
                }))
              },
              shouldShow: x,
              onRequestClose: () => D(!1),
              children: e => (0, n.jsx)(E.Clickable, {
                ...e,
                onClick: () => {
                  y(A), D(e => !e)
                },
                className: i()(T.brandItemContainer, {
                  [T.brandItemContainerSelected]: P === A
                }),
                children: (0, n.jsx)(v, {
                  name: I.default.Messages.CLAN_LOOK_PRESET_CUSTOM,
                  isCustom: !0
                })
              })
            })]
          })]
        }), (0, n.jsxs)("div", {
          className: T.bannerPickerContainer,
          children: [(0, n.jsx)(E.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: I.default.Messages.CLAN_LOOK_BANNER
          }), (0, n.jsx)("div", {
            className: T.bannerPickerGrid,
            children: N.map((e, t) => (0, n.jsxs)(E.Clickable, {
              "aria-label": e.name,
              onClick: () => {
                R(e.bannerKind)
              },
              className: i()(T.bannerItemContainer, {
                [T.bannerItemContainerSelected]: e.bannerKind === L
              }),
              children: [(0, n.jsx)(e.icon, {
                width: 24,
                height: 24
              }), (0, n.jsx)(E.Text, {
                variant: "text-sm/medium",
                color: "interactive-normal",
                className: T.noWrap,
                children: e.name
              })]
            }, t))
          })]
        })]
      }), (0, n.jsx)("div", {
        className: T.clanCardWrapper,
        children: (0, n.jsx)(h.ClanDiscoveryCardView, {
          banner: (0, n.jsx)(m.default, {
            banner: L,
            primaryTintColor: U.primary,
            secondaryTintColor: U.secondary,
            className: T.clanBannerPreview
          }),
          clan: {
            ...o,
            id: u,
            name: null !== (a = null == d ? void 0 : d.name) && void 0 !== a ? a : "",
            icon: null == d ? void 0 : d.icon,
            memberCount: c,
            games: Array.from(o.gameApplicationIds),
            traits: Array.from(o.interests),
            banner: L,
            badge: {
              badgeKind: o.badgeKind,
              primaryColor: o.badgePrimaryColor,
              secondaryColor: o.badgeSecondaryColor
            },
            branding: {
              primaryColor: U.primary,
              secondaryColor: U.secondary
            }
          }
        })
      })]
    })]
  })
}