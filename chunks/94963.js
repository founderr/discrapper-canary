"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("866442"),
  o = n("19602"),
  u = n("947110"),
  d = n("911504"),
  c = n("86934"),
  f = n("683692"),
  E = n("442837"),
  h = n("481060"),
  _ = n("231467"),
  C = n("650774"),
  m = n("430824"),
  S = n("703685"),
  I = n("924801"),
  p = n("308083"),
  T = n("689938"),
  g = n("509741"),
  A = n("597338");
let N = p.CLAN_BRAND_PALETTE_PRESETS.length + 1,
  v = [{
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
  R = e => {
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
        className: g.brandItemCircle,
        style: {
          background: "linear-gradient(-45deg, ".concat(s, " 50%, ").concat(n, " 50% )")
        }
      }), (0, a.jsx)(h.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: g.noWrap,
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
  } = e, d = (0, E.useStateFromStores)([m.default], () => m.default.getGuild(u)), c = null !== (t = (0, E.useStateFromStores)([C.default], () => C.default.getMemberCount(u))) && void 0 !== t ? t : 0, [f, O] = s.useState(o.banner), [L, M] = s.useState({
    primary: o.brandPrimaryColor,
    secondary: o.brandSecondaryColor
  }), [P, x] = s.useState(() => {
    if (o.brandPrimaryColor === o.badgePrimaryColor && o.brandSecondaryColor === o.badgeSecondaryColor) return 0;
    for (let e = 0; e < p.CLAN_BRAND_PALETTE_PRESETS.length; e++)
      if (p.CLAN_BRAND_PALETTE_PRESETS[e].primary === o.brandPrimaryColor && p.CLAN_BRAND_PALETTE_PRESETS[e].secondary === o.brandSecondaryColor) return e + 1;
    return N
  }), y = N === P, D = y ? L : 0 === P ? {
    primary: o.badgePrimaryColor,
    secondary: o.badgeSecondaryColor
  } : p.CLAN_BRAND_PALETTE_PRESETS[P - 1];
  return s.useEffect(() => {
    l({
      banner: f,
      brandPrimaryColor: D.primary,
      brandSecondaryColor: D.secondary
    })
  }, [l, f, D.primary, D.secondary]), (0, a.jsxs)("div", {
    className: i()(A.slideContent, g.content),
    children: [(0, a.jsx)(h.Heading, {
      variant: "heading-xxl/medium",
      className: A.title,
      children: T.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, a.jsx)(h.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: A.subtitle,
      children: T.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: g.container,
      children: [(0, a.jsxs)("div", {
        className: g.colorsContainer,
        children: [(0, a.jsxs)("div", {
          className: g.colorPickerContainer,
          children: [(0, a.jsx)(h.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: T.default.Messages.CLAN_LOOK_BRAND_COLOR
          }), (0, a.jsxs)("div", {
            className: g.colorPickerGrid,
            children: [(0, a.jsx)(h.Clickable, {
              onClick: () => x(0),
              className: i()(g.brandItemContainer, {
                [g.brandItemContainerSelected]: 0 === P
              }),
              children: (0, a.jsx)(R, {
                name: T.default.Messages.CLAN_LOOK_PRESET_BADGE,
                primaryColor: o.badgePrimaryColor,
                secondaryColor: o.badgeSecondaryColor
              })
            }), p.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, a.jsx)(h.Clickable, {
              "aria-label": e.name,
              onClick: () => x(t + 1),
              className: i()(g.brandItemContainer, {
                [g.brandItemContainerSelected]: P === t + 1
              }),
              children: (0, a.jsx)(R, {
                name: e.name,
                primaryColor: e.primary,
                secondaryColor: e.secondary
              })
            }, t)), (0, a.jsx)(h.Clickable, {
              onClick: () => x(N),
              className: i()(g.brandItemContainer, {
                [g.brandItemContainerSelected]: P === N
              }),
              children: (0, a.jsx)(R, {
                name: T.default.Messages.CLAN_LOOK_PRESET_CUSTOM,
                isCustom: !0
              })
            })]
          }), y && (0, a.jsxs)("div", {
            className: g.customColorPickerContainer,
            children: [(0, a.jsx)(S.CustomColorPicker, {
              className: g.colorPicker,
              value: L.primary,
              eagerUpdate: !0,
              wrapperComponentType: "div",
              onChange: e => {
                M(t => ({
                  ...t,
                  primary: (0, r.int2hex)(e)
                }))
              }
            }), (0, a.jsx)(S.CustomColorPicker, {
              className: g.colorPicker,
              value: L.secondary,
              eagerUpdate: !0,
              wrapperComponentType: "div",
              onChange: e => {
                M(t => ({
                  ...t,
                  secondary: (0, r.int2hex)(e)
                }))
              }
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: g.bannerPickerContainer,
          children: [(0, a.jsx)(h.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: T.default.Messages.CLAN_LOOK_BANNER
          }), (0, a.jsx)("div", {
            className: g.bannerPickerGrid,
            children: v.map((e, t) => (0, a.jsxs)(h.Clickable, {
              "aria-label": e.name,
              onClick: () => {
                O(e.bannerKind)
              },
              className: i()(g.bannerItemContainer, {
                [g.bannerItemContainerSelected]: e.bannerKind === f
              }),
              children: [(0, a.jsx)(e.icon, {
                width: 24,
                height: 24
              }), (0, a.jsx)(h.Text, {
                variant: "text-sm/medium",
                color: "interactive-normal",
                className: g.noWrap,
                children: e.name
              })]
            }, t))
          })]
        })]
      }), (0, a.jsx)("div", {
        className: g.clanCardWrapper,
        children: (0, a.jsx)(_.ClanDiscoveryCardView, {
          clan: {
            id: u,
            name: null !== (n = null == d ? void 0 : d.name) && void 0 !== n ? n : "",
            icon: null == d ? void 0 : d.icon,
            description: o.description,
            memberCount: c,
            games: Array.from(o.gameApplicationIds),
            playstyle: o.playstyle,
            traits: Array.from(o.interests),
            primetime: (0, I.convertPrimeTimeSelectionToRRule)(o.primetime),
            tag: o.tag,
            banner: f,
            badge: {
              badgeKind: o.badgeKind,
              primaryColor: o.badgePrimaryColor,
              secondaryColor: o.badgeSecondaryColor
            },
            branding: {
              primaryColor: D.primary,
              secondaryColor: D.secondary
            },
            location: p.PLACEHOLDER_CLAN_LOCATION,
            language: p.PLACEHOLDER_CLAN_LANGUAGE
          }
        })
      })]
    })]
  })
}