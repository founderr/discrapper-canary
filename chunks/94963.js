"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("866442"),
  o = a("19602"),
  u = a("947110"),
  d = a("911504"),
  c = a("86934"),
  f = a("683692"),
  E = a("442837"),
  h = a("481060"),
  _ = a("231467"),
  C = a("650774"),
  m = a("430824"),
  S = a("688298"),
  p = a("308083"),
  I = a("689938"),
  T = a("106832"),
  g = a("661926");
let A = p.CLAN_BRAND_PALETTE_PRESETS.length + 1,
  N = [{
    name: "Pixel Rush",
    bannerKind: p.ClanBannerKind.PIXEL_RUSH,
    icon: f.ScreenSystemRequirementsIcon
  }, {
    name: "Scanlines",
    bannerKind: p.ClanBannerKind.SCANLINES,
    icon: c.MenuIcon
  }, {
    name: "Textured",
    bannerKind: p.ClanBannerKind.TEXTURED,
    icon: o.EyeDropperIcon
  }, {
    name: "Magic",
    bannerKind: p.ClanBannerKind.MAGIC,
    icon: d.MagicWandIcon
  }, {
    name: "Custom",
    bannerKind: p.ClanBannerKind.CUSTOM,
    icon: u.ImageFileUpIcon
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
      }), (0, n.jsx)(h.Text, {
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
  } = e, d = (0, E.useStateFromStores)([m.default], () => m.default.getGuild(u)), c = null !== (t = (0, E.useStateFromStores)([C.default], () => C.default.getMemberCount(u))) && void 0 !== t ? t : 0, [f, R] = s.useState(o.banner), [L, O] = s.useState({
    primary: o.brandPrimaryColor,
    secondary: o.brandSecondaryColor
  }), [M, P] = s.useState(() => {
    if (o.brandPrimaryColor === o.badgePrimaryColor && o.brandSecondaryColor === o.badgeSecondaryColor) return 0;
    for (let e = 0; e < p.CLAN_BRAND_PALETTE_PRESETS.length; e++)
      if (p.CLAN_BRAND_PALETTE_PRESETS[e].primary === o.brandPrimaryColor && p.CLAN_BRAND_PALETTE_PRESETS[e].secondary === o.brandSecondaryColor) return e + 1;
    return A
  }), [x, y] = s.useState(!1), D = A === M, b = D ? L : 0 === M ? {
    primary: o.badgePrimaryColor,
    secondary: o.badgeSecondaryColor
  } : p.CLAN_BRAND_PALETTE_PRESETS[M - 1];
  return s.useEffect(() => {
    l({
      banner: f,
      brandPrimaryColor: b.primary,
      brandSecondaryColor: b.secondary
    })
  }, [l, f, b.primary, b.secondary]), (0, n.jsxs)("div", {
    className: i()(g.slideContent, T.content),
    children: [(0, n.jsx)(h.Heading, {
      variant: "heading-xxl/medium",
      className: g.title,
      children: I.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, n.jsx)(h.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: g.subtitle,
      children: I.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, n.jsxs)("div", {
      className: T.container,
      children: [(0, n.jsxs)("div", {
        className: T.colorsContainer,
        children: [(0, n.jsxs)("div", {
          className: T.colorPickerContainer,
          children: [(0, n.jsx)(h.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: I.default.Messages.CLAN_LOOK_BRAND_COLOR
          }), (0, n.jsxs)("div", {
            className: T.colorPickerGrid,
            children: [(0, n.jsx)(h.Clickable, {
              onClick: () => {
                P(0), O({
                  primary: o.badgePrimaryColor,
                  secondary: o.badgeSecondaryColor
                })
              },
              className: i()(T.brandItemContainer, {
                [T.brandItemContainerSelected]: 0 === M
              }),
              children: (0, n.jsx)(v, {
                name: I.default.Messages.CLAN_LOOK_PRESET_BADGE,
                primaryColor: o.badgePrimaryColor,
                secondaryColor: o.badgeSecondaryColor
              })
            }), p.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, n.jsx)(h.Clickable, {
              "aria-label": e.name,
              onClick: () => {
                P(t + 1), O(p.CLAN_BRAND_PALETTE_PRESETS[t])
              },
              className: i()(T.brandItemContainer, {
                [T.brandItemContainerSelected]: M === t + 1
              }),
              children: (0, n.jsx)(v, {
                name: e.name,
                primaryColor: e.primary,
                secondaryColor: e.secondary
              })
            }, t)), (0, n.jsx)(S.default, {
              showSecondaryColor: !0,
              palette: L,
              onPrimaryColorChange: e => {
                O(t => ({
                  ...t,
                  primary: (0, r.int2hex)(e)
                }))
              },
              onSecondaryColorChange: e => {
                O(t => ({
                  ...t,
                  secondary: (0, r.int2hex)(e)
                }))
              },
              shouldShow: x,
              onRequestClose: () => y(!1),
              children: e => (0, n.jsx)(h.Clickable, {
                ...e,
                onClick: () => {
                  P(A), y(e => !e)
                },
                className: i()(T.brandItemContainer, {
                  [T.brandItemContainerSelected]: M === A
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
          children: [(0, n.jsx)(h.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: I.default.Messages.CLAN_LOOK_BANNER
          }), (0, n.jsx)("div", {
            className: T.bannerPickerGrid,
            children: N.map((e, t) => (0, n.jsxs)(h.Clickable, {
              "aria-label": e.name,
              onClick: () => {
                R(e.bannerKind)
              },
              className: i()(T.bannerItemContainer, {
                [T.bannerItemContainerSelected]: e.bannerKind === f
              }),
              children: [(0, n.jsx)(e.icon, {
                width: 24,
                height: 24
              }), (0, n.jsx)(h.Text, {
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
        children: (0, n.jsx)(_.ClanDiscoveryCardView, {
          clan: {
            ...o,
            id: u,
            name: null !== (a = null == d ? void 0 : d.name) && void 0 !== a ? a : "",
            icon: null == d ? void 0 : d.icon,
            memberCount: c,
            games: Array.from(o.gameApplicationIds),
            traits: Array.from(o.interests),
            banner: f,
            badge: {
              badgeKind: o.badgeKind,
              primaryColor: o.badgePrimaryColor,
              secondaryColor: o.badgeSecondaryColor
            },
            branding: {
              primaryColor: b.primary,
              secondaryColor: b.secondary
            }
          }
        })
      })]
    })]
  })
}