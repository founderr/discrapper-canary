"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("688619"),
  i = a.n(s),
  l = a("120356"),
  o = a.n(l),
  c = a("866442"),
  d = a("717772"),
  u = a("931622"),
  f = a("322282"),
  m = a("585797"),
  h = a("878903"),
  E = a("889812"),
  p = a("788670"),
  T = a("773565"),
  C = a("254147"),
  _ = a("640024"),
  x = a("442837"),
  g = a("481060"),
  N = a("231467"),
  I = a("650774"),
  v = a("430824"),
  A = a("175557"),
  S = a("688298"),
  L = a("995119"),
  R = a("116175"),
  y = a("308083"),
  M = a("689938"),
  b = a("106832"),
  j = a("661926");
let O = [{
    name: "Night Sky",
    bannerKind: y.ClanBannerKind.NIGHT_SKY,
    icon: T.ThemeDarkIcon
  }, {
    name: "Castle",
    bannerKind: y.ClanBannerKind.CASTLE,
    icon: u.CrownIcon
  }, {
    name: "World Map",
    bannerKind: y.ClanBannerKind.WORLD_MAP,
    icon: f.GlobeEarthIcon
  }, {
    name: "Sea Foam",
    bannerKind: y.ClanBannerKind.SEA_FOAM,
    icon: p.PrivacyAndSafetyIcon
  }, {
    name: "Warp",
    bannerKind: y.ClanBannerKind.WARP_TUNNEL,
    icon: d.BlurBackgroundIcon
  }, {
    name: "House",
    bannerKind: y.ClanBannerKind.HOUSE,
    icon: C.TreehouseIcon
  }, {
    name: "Pulsar",
    bannerKind: y.ClanBannerKind.HEIGHTMAP,
    icon: _.WaveformIcon
  }, {
    name: "Mesh",
    bannerKind: y.ClanBannerKind.MESH,
    icon: m.GridVerticalIcon
  }, {
    name: "Spatter",
    bannerKind: y.ClanBannerKind.SPATTER,
    icon: E.PaintbrushThickIcon
  }],
  D = e => {
    let {
      name: t,
      primaryColor: a,
      secondaryColor: r,
      isCustom: s
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [s ? (0, n.jsx)(h.PaintPaletteIcon, {
        width: 24,
        height: 24
      }) : (0, n.jsx)("div", {
        className: b.brandItemCircle,
        style: {
          background: "linear-gradient(-45deg, ".concat(r, " 50%, ").concat(a, " 50% )")
        }
      }), (0, n.jsx)(g.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: b.noWrap,
        children: t
      })]
    })
  };
t.default = e => {
  var t, a, s, l;
  let {
    handleUpdate: d,
    progress: u,
    guildId: f
  } = e, {
    banner: m,
    brandPrimaryColor: h,
    brandSecondaryColor: E,
    badgePrimaryColor: p,
    badgeSecondaryColor: T
  } = u, C = (0, x.useStateFromStores)([v.default], () => v.default.getGuild(f)), _ = null !== (t = (0, x.useStateFromStores)([I.default], () => I.default.getMemberCount(f))) && void 0 !== t ? t : 0, P = r.useMemo(() => ({
    primary: null != h ? h : y.CLAN_BRAND_PRIMARY_DEFAULT,
    secondary: null != E ? E : y.CLAN_BRAND_SECONDARY_DEFAULT
  }), [h, E]), F = r.useMemo(() => {
    if (h === p && E === T) return 1;
    for (let e = 0; e < y.CLAN_BRAND_PALETTE_PRESETS.length; e++)
      if (y.CLAN_BRAND_PALETTE_PRESETS[e].primary === u.brandPrimaryColor && y.CLAN_BRAND_PALETTE_PRESETS[e].secondary === u.brandSecondaryColor) return 2 + e;
    return 0
  }, [h, E, p, T, u.brandPrimaryColor, u.brandSecondaryColor]), [w, B] = r.useState(!1), G = 0 === F, U = 1 === F, H = r.useMemo(() => {
    if (G) return P;
    {
      if (U) return {
        primary: null != p ? p : R.CLAN_BADGE_PRIMARY_DEFAULT,
        secondary: null != T ? T : R.CLAN_BADGE_SECONDARY_DEFAULT
      };
      let e = y.CLAN_BRAND_PALETTE_PRESETS[F - 2];
      return {
        primary: e.primary,
        secondary: e.secondary
      }
    }
  }, [P, U, G, p, T, F]), k = r.useCallback(() => {
    let e = O[Math.floor(Math.random() * O.length)].bannerKind,
      t = i().random().hex();
    d({
      banner: e,
      brandPrimaryColor: t,
      brandSecondaryColor: i().random().hex()
    })
  }, [d]);
  return r.useEffect(() => {
    d({
      banner: m,
      brandPrimaryColor: H.primary,
      brandSecondaryColor: H.secondary
    })
  }, [d, m, H.primary, H.secondary]), (0, n.jsxs)("div", {
    className: j.slideContent,
    children: [(0, n.jsx)(g.Heading, {
      variant: "heading-xxl/medium",
      className: j.title,
      children: M.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, n.jsx)(g.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: j.subtitle,
      children: M.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, n.jsxs)("div", {
      className: b.content,
      children: [(0, n.jsx)("div", {
        className: b.leftColumn,
        children: (0, n.jsxs)("div", {
          className: b.colorsContainer,
          children: [(0, n.jsx)(L.default, {
            onClick: k
          }), (0, n.jsxs)("div", {
            className: b.colorPickerContainer,
            children: [(0, n.jsx)(g.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: M.default.Messages.CLAN_LOOK_BRAND_COLOR
            }), (0, n.jsxs)("div", {
              className: b.colorPickerGrid,
              children: [(0, n.jsx)(S.default, {
                showSecondaryColor: !0,
                palette: P,
                onPrimaryColorChange: e => {
                  d({
                    brandPrimaryColor: (0, c.int2hex)(e)
                  })
                },
                onSecondaryColorChange: e => {
                  d({
                    brandSecondaryColor: (0, c.int2hex)(e)
                  })
                },
                shouldShow: w,
                onRequestClose: () => B(!1),
                children: e => (0, n.jsx)(g.Clickable, {
                  ...e,
                  onClick: () => {
                    B(e => !e)
                  },
                  className: o()(b.brandItemContainer, {
                    [b.brandItemContainerSelected]: 0 === F
                  }),
                  children: (0, n.jsx)(D, {
                    name: M.default.Messages.CLAN_LOOK_PRESET_CUSTOM,
                    isCustom: !0
                  })
                })
              }), (0, n.jsx)(g.Clickable, {
                onClick: () => {
                  d({
                    brandPrimaryColor: null != p ? p : y.CLAN_BRAND_PRIMARY_DEFAULT,
                    brandSecondaryColor: null != T ? T : y.CLAN_BRAND_SECONDARY_DEFAULT
                  })
                },
                className: o()(b.brandItemContainer, {
                  [b.brandItemContainerSelected]: 1 === F
                }),
                children: (0, n.jsx)(D, {
                  name: M.default.Messages.CLAN_LOOK_PRESET_BADGE,
                  primaryColor: p,
                  secondaryColor: T
                })
              }), y.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, n.jsx)(g.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  d({
                    brandPrimaryColor: y.CLAN_BRAND_PALETTE_PRESETS[t].primary,
                    brandSecondaryColor: y.CLAN_BRAND_PALETTE_PRESETS[t].secondary
                  })
                },
                className: o()(b.brandItemContainer, {
                  [b.brandItemContainerSelected]: F === t + 2
                }),
                children: (0, n.jsx)(D, {
                  name: e.name,
                  primaryColor: e.primary,
                  secondaryColor: e.secondary
                })
              }, t))]
            })]
          }), (0, n.jsxs)("div", {
            className: b.bannerPickerContainer,
            children: [(0, n.jsx)(g.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: M.default.Messages.CLAN_LOOK_BANNER
            }), (0, n.jsx)("div", {
              className: b.bannerPickerGrid,
              children: O.map((e, t) => (0, n.jsxs)(g.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  d({
                    banner: e.bannerKind
                  })
                },
                className: o()(b.bannerItemContainer, {
                  [b.bannerItemContainerSelected]: e.bannerKind === m
                }),
                children: [(0, n.jsx)(e.icon, {
                  width: 24,
                  height: 24
                }), (0, n.jsx)(g.Text, {
                  variant: "text-sm/medium",
                  color: "interactive-normal",
                  className: b.noWrap,
                  children: e.name
                })]
              }, t))
            })]
          })]
        })
      }), (0, n.jsx)("div", {
        className: b.clanCardWrapper,
        children: (0, n.jsx)(N.ClanDiscoveryCardView, {
          bannerComponent: (0, n.jsx)(A.default, {
            banner: m,
            primaryTintColor: H.primary,
            secondaryTintColor: H.secondary,
            className: b.clanBannerPreview
          }),
          clan: {
            ...u,
            id: f,
            name: null !== (a = null == C ? void 0 : C.name) && void 0 !== a ? a : "",
            icon: null == C ? void 0 : C.icon,
            memberCount: _,
            games: Array.from(u.gameApplicationIds),
            traits: Array.from(u.interests),
            banner: m,
            badge: {
              badgeKind: u.badgeKind,
              primaryColor: null != p ? p : y.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null != T ? T : y.CLAN_BRAND_SECONDARY_DEFAULT
            },
            branding: {
              primaryColor: null !== (s = H.primary) && void 0 !== s ? s : y.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null !== (l = H.secondary) && void 0 !== l ? l : y.CLAN_BRAND_SECONDARY_DEFAULT
            }
          }
        })
      })]
    })]
  })
}