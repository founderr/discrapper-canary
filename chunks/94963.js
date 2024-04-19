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
  I = n("308083"),
  p = n("689938"),
  T = n("509741"),
  g = n("597338");
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
      }), (0, a.jsx)(h.Text, {
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
  }, [l, f, y.primary, y.secondary]), (0, a.jsxs)("div", {
    className: i()(g.slideContent, T.content),
    children: [(0, a.jsx)(h.Heading, {
      variant: "heading-xxl/medium",
      className: g.title,
      children: p.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, a.jsx)(h.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: g.subtitle,
      children: p.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: T.container,
      children: [(0, a.jsxs)("div", {
        className: T.colorsContainer,
        children: [(0, a.jsxs)("div", {
          className: T.colorPickerContainer,
          children: [(0, a.jsx)(h.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: p.default.Messages.CLAN_LOOK_BRAND_COLOR
          }), (0, a.jsxs)("div", {
            className: T.colorPickerGrid,
            children: [(0, a.jsx)(h.Clickable, {
              onClick: () => M(0),
              className: i()(T.brandItemContainer, {
                [T.brandItemContainerSelected]: 0 === P
              }),
              children: (0, a.jsx)(v, {
                name: p.default.Messages.CLAN_LOOK_PRESET_BADGE,
                primaryColor: o.badgePrimaryColor,
                secondaryColor: o.badgeSecondaryColor
              })
            }), I.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, a.jsx)(h.Clickable, {
              "aria-label": e.name,
              onClick: () => M(t + 1),
              className: i()(T.brandItemContainer, {
                [T.brandItemContainerSelected]: P === t + 1
              }),
              children: (0, a.jsx)(v, {
                name: e.name,
                primaryColor: e.primary,
                secondaryColor: e.secondary
              })
            }, t)), (0, a.jsx)(h.Clickable, {
              onClick: () => M(A),
              className: i()(T.brandItemContainer, {
                [T.brandItemContainerSelected]: P === A
              }),
              children: (0, a.jsx)(v, {
                name: p.default.Messages.CLAN_LOOK_PRESET_CUSTOM,
                isCustom: !0
              })
            })]
          }), x && (0, a.jsxs)("div", {
            className: T.customColorPickerContainer,
            children: [(0, a.jsx)(S.CustomColorPicker, {
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
            }), (0, a.jsx)(S.CustomColorPicker, {
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
        }), (0, a.jsxs)("div", {
          className: T.bannerPickerContainer,
          children: [(0, a.jsx)(h.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: p.default.Messages.CLAN_LOOK_BANNER
          }), (0, a.jsx)("div", {
            className: T.bannerPickerGrid,
            children: N.map((e, t) => (0, a.jsxs)(h.Clickable, {
              "aria-label": e.name,
              onClick: () => {
                R(e.bannerKind)
              },
              className: i()(T.bannerItemContainer, {
                [T.bannerItemContainerSelected]: e.bannerKind === f
              }),
              children: [(0, a.jsx)(e.icon, {
                width: 24,
                height: 24
              }), (0, a.jsx)(h.Text, {
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
            tag: o.tag,
            banner: f,
            badge: {
              badgeKind: o.badgeKind,
              primaryColor: o.badgePrimaryColor,
              secondaryColor: o.badgeSecondaryColor
            },
            branding: {
              primaryColor: y.primary,
              secondaryColor: y.secondary
            },
            location: I.PLACEHOLDER_CLAN_LOCATION,
            language: I.PLACEHOLDER_CLAN_LANGUAGE
          }
        })
      })]
    })]
  })
}