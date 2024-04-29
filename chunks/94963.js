"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("866442"),
  o = n("19602"),
  u = n("911504"),
  d = n("86934"),
  c = n("683692"),
  f = n("442837"),
  E = n("481060"),
  h = n("231467"),
  _ = n("650774"),
  C = n("430824"),
  m = n("175557"),
  S = n("688298"),
  p = n("308083"),
  I = n("689938"),
  T = n("868878"),
  g = n("418571");
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
      primaryColor: n,
      secondaryColor: s,
      isCustom: l
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [l ? (0, a.jsx)(o.EyeDropperIcon, {
        width: 24,
        height: 24
      }) : (0, a.jsx)("div", {
        className: T.brandItemCircle,
        style: {
          background: "linear-gradient(-45deg, ".concat(s, " 50%, ").concat(n, " 50% )")
        }
      }), (0, a.jsx)(E.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: T.noWrap,
        children: t
      })]
    })
  };
t.default = e => {
  var t, n;
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
  }, [l, L, U.primary, U.secondary]), (0, a.jsxs)("div", {
    className: i()(g.slideContent, T.content),
    children: [(0, a.jsx)(E.Heading, {
      variant: "heading-xxl/medium",
      className: g.title,
      children: I.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, a.jsx)(E.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: g.subtitle,
      children: I.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: T.container,
      children: [(0, a.jsxs)("div", {
        className: T.colorsContainer,
        children: [(0, a.jsxs)("div", {
          className: T.colorPickerContainer,
          children: [(0, a.jsx)(E.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: I.default.Messages.CLAN_LOOK_BRAND_COLOR
          }), (0, a.jsxs)("div", {
            className: T.colorPickerGrid,
            children: [(0, a.jsx)(E.Clickable, {
              onClick: () => {
                y(0), M({
                  primary: o.badgePrimaryColor,
                  secondary: o.badgeSecondaryColor
                })
              },
              className: i()(T.brandItemContainer, {
                [T.brandItemContainerSelected]: 0 === P
              }),
              children: (0, a.jsx)(v, {
                name: I.default.Messages.CLAN_LOOK_PRESET_BADGE,
                primaryColor: o.badgePrimaryColor,
                secondaryColor: o.badgeSecondaryColor
              })
            }), p.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, a.jsx)(E.Clickable, {
              "aria-label": e.name,
              onClick: () => {
                y(t + 1), M(p.CLAN_BRAND_PALETTE_PRESETS[t])
              },
              className: i()(T.brandItemContainer, {
                [T.brandItemContainerSelected]: P === t + 1
              }),
              children: (0, a.jsx)(v, {
                name: e.name,
                primaryColor: e.primary,
                secondaryColor: e.secondary
              })
            }, t)), (0, a.jsx)(S.default, {
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
              children: e => (0, a.jsx)(E.Clickable, {
                ...e,
                onClick: () => {
                  y(A), D(e => !e)
                },
                className: i()(T.brandItemContainer, {
                  [T.brandItemContainerSelected]: P === A
                }),
                children: (0, a.jsx)(v, {
                  name: I.default.Messages.CLAN_LOOK_PRESET_CUSTOM,
                  isCustom: !0
                })
              })
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: T.bannerPickerContainer,
          children: [(0, a.jsx)(E.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: I.default.Messages.CLAN_LOOK_BANNER
          }), (0, a.jsx)("div", {
            className: T.bannerPickerGrid,
            children: N.map((e, t) => (0, a.jsxs)(E.Clickable, {
              "aria-label": e.name,
              onClick: () => {
                R(e.bannerKind)
              },
              className: i()(T.bannerItemContainer, {
                [T.bannerItemContainerSelected]: e.bannerKind === L
              }),
              children: [(0, a.jsx)(e.icon, {
                width: 24,
                height: 24
              }), (0, a.jsx)(E.Text, {
                variant: "text-sm/medium",
                color: "interactive-normal",
                className: T.noWrap,
                children: e.name
              })]
            }, t))
          })]
        })]
      }), (0, a.jsx)("div", {
        className: T.clanCardWrapper,
        children: (0, a.jsx)(h.ClanDiscoveryCardView, {
          banner: (0, a.jsx)(m.default, {
            banner: L,
            primaryTintColor: U.primary,
            secondaryTintColor: U.secondary,
            className: T.clanBannerPreview
          }),
          clan: {
            ...o,
            id: u,
            name: null !== (n = null == d ? void 0 : d.name) && void 0 !== n ? n : "",
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