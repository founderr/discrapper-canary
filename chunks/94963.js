"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("688619"),
  i = n.n(s),
  l = n("120356"),
  o = n.n(l),
  c = n("866442"),
  d = n("717772"),
  u = n("931622"),
  f = n("322282"),
  m = n("585797"),
  h = n("878903"),
  E = n("889812"),
  p = n("788670"),
  C = n("773565"),
  T = n("254147"),
  _ = n("640024"),
  x = n("442837"),
  g = n("481060"),
  I = n("231467"),
  N = n("650774"),
  v = n("430824"),
  A = n("175557"),
  S = n("688298"),
  L = n("995119"),
  R = n("116175"),
  y = n("308083"),
  M = n("689938"),
  b = n("106832"),
  j = n("661926");
let O = [{
    name: "Night Sky",
    bannerKind: y.ClanBannerKind.NIGHT_SKY,
    icon: C.ThemeDarkIcon
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
    icon: T.TreehouseIcon
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
      primaryColor: n,
      secondaryColor: r,
      isCustom: s
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [s ? (0, a.jsx)(h.PaintPaletteIcon, {
        width: 24,
        height: 24
      }) : (0, a.jsx)("div", {
        className: b.brandItemCircle,
        style: {
          background: "linear-gradient(-45deg, ".concat(r, " 50%, ").concat(n, " 50% )")
        }
      }), (0, a.jsx)(g.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: b.noWrap,
        children: t
      })]
    })
  };
t.default = e => {
  var t, n, s, l;
  let {
    handleUpdate: d,
    progress: u,
    guildId: f
  } = e, {
    banner: m,
    brandPrimaryColor: h,
    brandSecondaryColor: E,
    badgePrimaryColor: p,
    badgeSecondaryColor: C
  } = u, T = (0, x.useStateFromStores)([v.default], () => v.default.getGuild(f)), _ = null !== (t = (0, x.useStateFromStores)([N.default], () => N.default.getMemberCount(f))) && void 0 !== t ? t : 0, F = r.useMemo(() => ({
    primary: null != h ? h : y.CLAN_BRAND_PRIMARY_DEFAULT,
    secondary: null != E ? E : y.CLAN_BRAND_SECONDARY_DEFAULT
  }), [h, E]), P = r.useMemo(() => {
    if (h === p && E === C) return 1;
    for (let e = 0; e < y.CLAN_BRAND_PALETTE_PRESETS.length; e++)
      if (y.CLAN_BRAND_PALETTE_PRESETS[e].primary === u.brandPrimaryColor && y.CLAN_BRAND_PALETTE_PRESETS[e].secondary === u.brandSecondaryColor) return 2 + e;
    return 0
  }, [h, E, p, C, u.brandPrimaryColor, u.brandSecondaryColor]), [w, B] = r.useState(!1), G = 0 === P, U = 1 === P, k = r.useMemo(() => {
    if (G) return F;
    {
      if (U) return {
        primary: null != p ? p : R.CLAN_BADGE_PRIMARY_DEFAULT,
        secondary: null != C ? C : R.CLAN_BADGE_SECONDARY_DEFAULT
      };
      let e = y.CLAN_BRAND_PALETTE_PRESETS[P - 2];
      return {
        primary: e.primary,
        secondary: e.secondary
      }
    }
  }, [F, U, G, p, C, P]), H = r.useCallback(() => {
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
      brandPrimaryColor: k.primary,
      brandSecondaryColor: k.secondary
    })
  }, [d, m, k.primary, k.secondary]), (0, a.jsxs)("div", {
    className: j.slideContent,
    children: [(0, a.jsx)(g.Heading, {
      variant: "heading-xxl/medium",
      className: j.title,
      children: M.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, a.jsx)(g.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: j.subtitle,
      children: M.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: b.content,
      children: [(0, a.jsx)("div", {
        className: b.leftColumn,
        children: (0, a.jsxs)("div", {
          className: b.colorsContainer,
          children: [(0, a.jsx)(L.default, {
            onClick: H
          }), (0, a.jsxs)("div", {
            className: b.colorPickerContainer,
            children: [(0, a.jsx)(g.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: M.default.Messages.CLAN_LOOK_BRAND_COLOR
            }), (0, a.jsxs)("div", {
              className: b.colorPickerGrid,
              children: [(0, a.jsx)(S.default, {
                showSecondaryColor: !0,
                palette: F,
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
                children: e => (0, a.jsx)(g.Clickable, {
                  ...e,
                  onClick: () => {
                    B(e => !e)
                  },
                  className: o()(b.brandItemContainer, {
                    [b.brandItemContainerSelected]: 0 === P
                  }),
                  children: (0, a.jsx)(D, {
                    name: M.default.Messages.CLAN_LOOK_PRESET_CUSTOM,
                    isCustom: !0
                  })
                })
              }), (0, a.jsx)(g.Clickable, {
                onClick: () => {
                  d({
                    brandPrimaryColor: null != p ? p : y.CLAN_BRAND_PRIMARY_DEFAULT,
                    brandSecondaryColor: null != C ? C : y.CLAN_BRAND_SECONDARY_DEFAULT
                  })
                },
                className: o()(b.brandItemContainer, {
                  [b.brandItemContainerSelected]: 1 === P
                }),
                children: (0, a.jsx)(D, {
                  name: M.default.Messages.CLAN_LOOK_PRESET_BADGE,
                  primaryColor: p,
                  secondaryColor: C
                })
              }), y.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, a.jsx)(g.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  d({
                    brandPrimaryColor: y.CLAN_BRAND_PALETTE_PRESETS[t].primary,
                    brandSecondaryColor: y.CLAN_BRAND_PALETTE_PRESETS[t].secondary
                  })
                },
                className: o()(b.brandItemContainer, {
                  [b.brandItemContainerSelected]: P === t + 2
                }),
                children: (0, a.jsx)(D, {
                  name: e.name,
                  primaryColor: e.primary,
                  secondaryColor: e.secondary
                })
              }, t))]
            })]
          }), (0, a.jsxs)("div", {
            className: b.bannerPickerContainer,
            children: [(0, a.jsx)(g.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: M.default.Messages.CLAN_LOOK_BANNER
            }), (0, a.jsx)("div", {
              className: b.bannerPickerGrid,
              children: O.map((e, t) => (0, a.jsxs)(g.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  d({
                    banner: e.bannerKind
                  })
                },
                className: o()(b.bannerItemContainer, {
                  [b.bannerItemContainerSelected]: e.bannerKind === m
                }),
                children: [(0, a.jsx)(e.icon, {
                  width: 24,
                  height: 24
                }), (0, a.jsx)(g.Text, {
                  variant: "text-sm/medium",
                  color: "interactive-normal",
                  className: b.noWrap,
                  children: e.name
                })]
              }, t))
            })]
          })]
        })
      }), (0, a.jsx)("div", {
        className: b.clanCardWrapper,
        children: (0, a.jsx)(I.ClanDiscoveryCardView, {
          bannerComponent: (0, a.jsx)(A.default, {
            banner: m,
            primaryTintColor: k.primary,
            secondaryTintColor: k.secondary,
            className: b.clanBannerPreview
          }),
          clan: {
            ...u,
            id: f,
            name: null !== (n = null == T ? void 0 : T.name) && void 0 !== n ? n : "",
            icon: null == T ? void 0 : T.icon,
            memberCount: _,
            games: Array.from(u.gameApplicationIds),
            traits: Array.from(u.interests),
            banner: m,
            badge: {
              badgeKind: u.badgeKind,
              primaryColor: null != p ? p : y.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null != C ? C : y.CLAN_BRAND_SECONDARY_DEFAULT
            },
            branding: {
              primaryColor: null !== (s = k.primary) && void 0 !== s ? s : y.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null !== (l = k.secondary) && void 0 !== l ? l : y.CLAN_BRAND_SECONDARY_DEFAULT
            }
          }
        })
      })]
    })]
  })
}