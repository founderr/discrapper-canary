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
  S = a("703685"),
  I = a("308083"),
  p = a("689938"),
  T = a("509741"),
  g = a("597338");
let A = I.CLAN_BRAND_PALETTE_PRESETS.length + 1,
  N = [{
    name: "Pixel Rush",
    bannerKind: I.ClanBannerKind.PIXEL_RUSH,
    icon: f.ScreenSystemRequirementsIcon
  }, {
    name: "Scanlines",
    bannerKind: I.ClanBannerKind.SCANLINES,
    icon: c.MenuIcon
  }, {
    name: "Textured",
    bannerKind: I.ClanBannerKind.TEXTURED,
    icon: o.EyeDropperIcon
  }, {
    name: "Magic",
    bannerKind: I.ClanBannerKind.MAGIC,
    icon: d.MagicWandIcon
  }, {
    name: "Custom",
    bannerKind: I.ClanBannerKind.CUSTOM,
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
  } = e, d = (0, E.useStateFromStores)([m.default], () => m.default.getGuild(u)), c = null !== (t = (0, E.useStateFromStores)([C.default], () => C.default.getMemberCount(u))) && void 0 !== t ? t : 0, [f, R] = s.useState(o.banner), [O, L] = s.useState({
    primary: o.brandPrimaryColor,
    secondary: o.brandSecondaryColor
  }), [P, M] = s.useState(() => {
    if (o.brandPrimaryColor === o.badgePrimaryColor && o.brandSecondaryColor === o.badgeSecondaryColor) return 0;
    for (let e = 0; e < I.CLAN_BRAND_PALETTE_PRESETS.length; e++)
      if (I.CLAN_BRAND_PALETTE_PRESETS[e].primary === o.brandPrimaryColor && I.CLAN_BRAND_PALETTE_PRESETS[e].secondary === o.brandSecondaryColor) return e + 1;
    return A
  }), x = A === P, y = x ? O : 0 === P ? {
    primary: o.badgePrimaryColor,
    secondary: o.badgeSecondaryColor
  } : I.CLAN_BRAND_PALETTE_PRESETS[P - 1];
  return s.useEffect(() => {
    l({
      banner: f,
      brandPrimaryColor: y.primary,
      brandSecondaryColor: y.secondary
    })
  }, [l, f, y.primary, y.secondary]), (0, n.jsxs)("div", {
    className: i()(g.slideContent, T.content),
    children: [(0, n.jsx)(h.Heading, {
      variant: "heading-xxl/medium",
      className: g.title,
      children: p.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, n.jsx)(h.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: g.subtitle,
      children: p.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, n.jsxs)("div", {
      className: T.container,
      children: [(0, n.jsxs)("div", {
        className: T.colorsContainer,
        children: [(0, n.jsxs)("div", {
          className: T.colorPickerContainer,
          children: [(0, n.jsx)(h.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: p.default.Messages.CLAN_LOOK_BRAND_COLOR
          }), (0, n.jsxs)("div", {
            className: T.colorPickerGrid,
            children: [(0, n.jsx)(h.Clickable, {
              onClick: () => M(0),
              className: i()(T.brandItemContainer, {
                [T.brandItemContainerSelected]: 0 === P
              }),
              children: (0, n.jsx)(v, {
                name: p.default.Messages.CLAN_LOOK_PRESET_BADGE,
                primaryColor: o.badgePrimaryColor,
                secondaryColor: o.badgeSecondaryColor
              })
            }), I.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, n.jsx)(h.Clickable, {
              "aria-label": e.name,
              onClick: () => M(t + 1),
              className: i()(T.brandItemContainer, {
                [T.brandItemContainerSelected]: P === t + 1
              }),
              children: (0, n.jsx)(v, {
                name: e.name,
                primaryColor: e.primary,
                secondaryColor: e.secondary
              })
            }, t)), (0, n.jsx)(h.Clickable, {
              onClick: () => M(A),
              className: i()(T.brandItemContainer, {
                [T.brandItemContainerSelected]: P === A
              }),
              children: (0, n.jsx)(v, {
                name: p.default.Messages.CLAN_LOOK_PRESET_CUSTOM,
                isCustom: !0
              })
            })]
          }), x && (0, n.jsxs)("div", {
            className: T.customColorPickerContainer,
            children: [(0, n.jsx)(S.CustomColorPicker, {
              className: T.colorPicker,
              value: O.primary,
              eagerUpdate: !0,
              wrapperComponentType: "div",
              onChange: e => {
                L(t => ({
                  ...t,
                  primary: (0, r.int2hex)(e)
                }))
              }
            }), (0, n.jsx)(S.CustomColorPicker, {
              className: T.colorPicker,
              value: O.secondary,
              eagerUpdate: !0,
              wrapperComponentType: "div",
              onChange: e => {
                L(t => ({
                  ...t,
                  secondary: (0, r.int2hex)(e)
                }))
              }
            })]
          })]
        }), (0, n.jsxs)("div", {
          className: T.bannerPickerContainer,
          children: [(0, n.jsx)(h.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: p.default.Messages.CLAN_LOOK_BANNER
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
              primaryColor: y.primary,
              secondaryColor: y.secondary
            }
          }
        })
      })]
    })]
  })
}