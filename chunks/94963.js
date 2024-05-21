"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("866442"),
  o = a("717772"),
  c = a("931622"),
  d = a("19602"),
  u = a("322282"),
  f = a("585797"),
  m = a("889812"),
  h = a("788670"),
  E = a("773565"),
  p = a("254147"),
  T = a("640024"),
  C = a("442837"),
  _ = a("481060"),
  x = a("231467"),
  g = a("650774"),
  N = a("430824"),
  I = a("175557"),
  v = a("688298"),
  A = a("116175"),
  S = a("308083"),
  L = a("689938"),
  R = a("106832"),
  y = a("661926");
let M = S.CLAN_BRAND_PALETTE_PRESETS.length + 1,
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
    icon: p.TreehouseIcon
  }, {
    name: "Pulsar",
    bannerKind: S.ClanBannerKind.HEIGHTMAP,
    icon: T.WaveformIcon
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
      isCustom: s
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [s ? (0, n.jsx)(d.EyeDropperIcon, {
        width: 24,
        height: 24
      }) : (0, n.jsx)("div", {
        className: R.brandItemCircle,
        style: {
          background: "linear-gradient(-45deg, ".concat(r, " 50%, ").concat(a, " 50% )")
        }
      }), (0, n.jsx)(_.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: R.noWrap,
        children: t
      })]
    })
  };
t.default = e => {
  var t, a, s, o;
  let {
    handleUpdate: c,
    progress: d,
    guildId: u
  } = e, {
    banner: f,
    brandPrimaryColor: m,
    brandSecondaryColor: h,
    badgePrimaryColor: E,
    badgeSecondaryColor: p
  } = d, T = (0, C.useStateFromStores)([N.default], () => N.default.getGuild(u)), O = null !== (t = (0, C.useStateFromStores)([g.default], () => g.default.getMemberCount(u))) && void 0 !== t ? t : 0, D = r.useMemo(() => ({
    primary: null != m ? m : S.CLAN_BRAND_PRIMARY_DEFAULT,
    secondary: null != h ? h : S.CLAN_BRAND_SECONDARY_DEFAULT
  }), [m, h]), F = r.useMemo(() => {
    if (m === E && h === p) return 0;
    for (let e = 0; e < S.CLAN_BRAND_PALETTE_PRESETS.length; e++)
      if (S.CLAN_BRAND_PALETTE_PRESETS[e].primary === d.brandPrimaryColor && S.CLAN_BRAND_PALETTE_PRESETS[e].secondary === d.brandSecondaryColor) return e + 1;
    return M
  }, [m, h, E, p, d.brandPrimaryColor, d.brandSecondaryColor]), [P, w] = r.useState(!1), B = M === F, G = 0 === F, U = r.useMemo(() => {
    if (B) return D;
    {
      if (G) return {
        primary: null != E ? E : A.CLAN_BADGE_PRIMARY_DEFAULT,
        secondary: null != p ? p : A.CLAN_BADGE_SECONDARY_DEFAULT
      };
      let e = S.CLAN_BRAND_PALETTE_PRESETS[F - 1];
      return {
        primary: e.primary,
        secondary: e.secondary
      }
    }
  }, [D, G, B, E, p, F]);
  return r.useEffect(() => {
    c({
      banner: f,
      brandPrimaryColor: U.primary,
      brandSecondaryColor: U.secondary
    })
  }, [c, f, U.primary, U.secondary]), (0, n.jsxs)("div", {
    className: y.slideContent,
    children: [(0, n.jsx)(_.Heading, {
      variant: "heading-xxl/medium",
      className: y.title,
      children: L.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, n.jsx)(_.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: y.subtitle,
      children: L.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, n.jsxs)("div", {
      className: R.content,
      children: [(0, n.jsx)("div", {
        className: R.leftColumn,
        children: (0, n.jsxs)("div", {
          className: R.colorsContainer,
          children: [(0, n.jsxs)("div", {
            className: R.colorPickerContainer,
            children: [(0, n.jsx)(_.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: L.default.Messages.CLAN_LOOK_BRAND_COLOR
            }), (0, n.jsxs)("div", {
              className: R.colorPickerGrid,
              children: [(0, n.jsx)(_.Clickable, {
                onClick: () => {
                  c({
                    brandPrimaryColor: null != E ? E : S.CLAN_BRAND_PRIMARY_DEFAULT,
                    brandSecondaryColor: null != p ? p : S.CLAN_BRAND_SECONDARY_DEFAULT
                  })
                },
                className: i()(R.brandItemContainer, {
                  [R.brandItemContainerSelected]: 0 === F
                }),
                children: (0, n.jsx)(j, {
                  name: L.default.Messages.CLAN_LOOK_PRESET_BADGE,
                  primaryColor: E,
                  secondaryColor: p
                })
              }), S.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, n.jsx)(_.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  c({
                    brandPrimaryColor: S.CLAN_BRAND_PALETTE_PRESETS[t].primary,
                    brandSecondaryColor: S.CLAN_BRAND_PALETTE_PRESETS[t].secondary
                  })
                },
                className: i()(R.brandItemContainer, {
                  [R.brandItemContainerSelected]: F === t + 1
                }),
                children: (0, n.jsx)(j, {
                  name: e.name,
                  primaryColor: e.primary,
                  secondaryColor: e.secondary
                })
              }, t)), (0, n.jsx)(v.default, {
                showSecondaryColor: !0,
                palette: D,
                onPrimaryColorChange: e => {
                  c({
                    brandPrimaryColor: (0, l.int2hex)(e)
                  })
                },
                onSecondaryColorChange: e => {
                  c({
                    brandSecondaryColor: (0, l.int2hex)(e)
                  })
                },
                shouldShow: P,
                onRequestClose: () => w(!1),
                children: e => (0, n.jsx)(_.Clickable, {
                  ...e,
                  onClick: () => {
                    w(e => !e)
                  },
                  className: i()(R.brandItemContainer, {
                    [R.brandItemContainerSelected]: F === M
                  }),
                  children: (0, n.jsx)(j, {
                    name: L.default.Messages.CLAN_LOOK_PRESET_CUSTOM,
                    isCustom: !0
                  })
                })
              })]
            })]
          }), (0, n.jsxs)("div", {
            className: R.bannerPickerContainer,
            children: [(0, n.jsx)(_.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: L.default.Messages.CLAN_LOOK_BANNER
            }), (0, n.jsx)("div", {
              className: R.bannerPickerGrid,
              children: b.map((e, t) => (0, n.jsxs)(_.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  c({
                    banner: e.bannerKind
                  })
                },
                className: i()(R.bannerItemContainer, {
                  [R.bannerItemContainerSelected]: e.bannerKind === f
                }),
                children: [(0, n.jsx)(e.icon, {
                  width: 24,
                  height: 24
                }), (0, n.jsx)(_.Text, {
                  variant: "text-sm/medium",
                  color: "interactive-normal",
                  className: R.noWrap,
                  children: e.name
                })]
              }, t))
            })]
          })]
        })
      }), (0, n.jsx)("div", {
        className: R.clanCardWrapper,
        children: (0, n.jsx)(x.ClanDiscoveryCardView, {
          bannerComponent: (0, n.jsx)(I.default, {
            banner: f,
            primaryTintColor: U.primary,
            secondaryTintColor: U.secondary,
            className: R.clanBannerPreview
          }),
          clan: {
            ...d,
            id: u,
            name: null !== (a = null == T ? void 0 : T.name) && void 0 !== a ? a : "",
            icon: null == T ? void 0 : T.icon,
            memberCount: O,
            games: Array.from(d.gameApplicationIds),
            traits: Array.from(d.interests),
            banner: f,
            badge: {
              badgeKind: d.badgeKind,
              primaryColor: null != E ? E : S.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null != p ? p : S.CLAN_BRAND_SECONDARY_DEFAULT
            },
            branding: {
              primaryColor: null !== (s = U.primary) && void 0 !== s ? s : S.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null !== (o = U.secondary) && void 0 !== o ? o : S.CLAN_BRAND_SECONDARY_DEFAULT
            }
          }
        })
      })]
    })]
  })
}