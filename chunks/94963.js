"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("688619"),
  s = a.n(i),
  l = a("120356"),
  o = a.n(l),
  d = a("866442"),
  c = a("717772"),
  u = a("931622"),
  f = a("322282"),
  m = a("585797"),
  E = a("878903"),
  h = a("889812"),
  T = a("788670"),
  _ = a("773565"),
  C = a("254147"),
  x = a("640024"),
  p = a("442837"),
  I = a("481060"),
  g = a("231467"),
  N = a("650774"),
  A = a("430824"),
  v = a("175557"),
  S = a("688298"),
  R = a("995119"),
  L = a("116175"),
  y = a("308083"),
  M = a("689938"),
  j = a("106832"),
  b = a("661926");
let O = [{
    name: "Night Sky",
    bannerKind: y.ClanBannerKind.NIGHT_SKY,
    icon: _.ThemeDarkIcon
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
    icon: T.PrivacyAndSafetyIcon
  }, {
    name: "Warp",
    bannerKind: y.ClanBannerKind.WARP_TUNNEL,
    icon: c.BlurBackgroundIcon
  }, {
    name: "House",
    bannerKind: y.ClanBannerKind.HOUSE,
    icon: C.TreehouseIcon
  }, {
    name: "Pulsar",
    bannerKind: y.ClanBannerKind.HEIGHTMAP,
    icon: x.WaveformIcon
  }, {
    name: "Mesh",
    bannerKind: y.ClanBannerKind.MESH,
    icon: m.GridVerticalIcon
  }, {
    name: "Spatter",
    bannerKind: y.ClanBannerKind.SPATTER,
    icon: h.PaintbrushThickIcon
  }],
  D = e => {
    let {
      name: t,
      primaryColor: a,
      secondaryColor: r,
      isCustom: i
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [i ? (0, n.jsx)(E.PaintPaletteIcon, {
        width: 24,
        height: 24
      }) : (0, n.jsx)("div", {
        className: j.brandItemCircle,
        style: {
          background: "linear-gradient(-45deg, ".concat(r, " 50%, ").concat(a, " 50% )")
        }
      }), (0, n.jsx)(I.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: j.noWrap,
        children: t
      })]
    })
  };
t.default = e => {
  var t, a, i, l;
  let {
    handleUpdate: c,
    progress: u,
    guildId: f
  } = e, {
    banner: m,
    brandPrimaryColor: E,
    brandSecondaryColor: h,
    badgePrimaryColor: T,
    badgeSecondaryColor: _
  } = u, C = (0, p.useStateFromStores)([A.default], () => A.default.getGuild(f)), x = null !== (t = (0, p.useStateFromStores)([N.default], () => N.default.getMemberCount(f))) && void 0 !== t ? t : 0, F = r.useMemo(() => ({
    primary: null != E ? E : y.CLAN_BRAND_PRIMARY_DEFAULT,
    secondary: null != h ? h : y.CLAN_BRAND_SECONDARY_DEFAULT
  }), [E, h]), P = r.useMemo(() => {
    if (E === T && h === _) return 1;
    for (let e = 0; e < y.CLAN_BRAND_PALETTE_PRESETS.length; e++)
      if (y.CLAN_BRAND_PALETTE_PRESETS[e].primary === u.brandPrimaryColor && y.CLAN_BRAND_PALETTE_PRESETS[e].secondary === u.brandSecondaryColor) return 2 + e;
    return 0
  }, [E, h, T, _, u.brandPrimaryColor, u.brandSecondaryColor]), [w, B] = r.useState(!1), G = 0 === P, U = 1 === P, H = r.useMemo(() => {
    if (G) return F;
    {
      if (U) return {
        primary: null != T ? T : L.CLAN_BADGE_PRIMARY_DEFAULT,
        secondary: null != _ ? _ : L.CLAN_BADGE_SECONDARY_DEFAULT
      };
      let e = y.CLAN_BRAND_PALETTE_PRESETS[P - 2];
      return {
        primary: e.primary,
        secondary: e.secondary
      }
    }
  }, [F, U, G, T, _, P]), k = r.useCallback(() => {
    let e = O[Math.floor(Math.random() * O.length)].bannerKind,
      t = s().random().hex();
    c({
      banner: e,
      brandPrimaryColor: t,
      brandSecondaryColor: s().random().hex()
    })
  }, [c]);
  return r.useEffect(() => {
    c({
      banner: m,
      brandPrimaryColor: H.primary,
      brandSecondaryColor: H.secondary
    })
  }, [c, m, H.primary, H.secondary]), (0, n.jsxs)("div", {
    className: b.slideContent,
    children: [(0, n.jsx)(I.Heading, {
      variant: "heading-xxl/medium",
      className: b.title,
      children: M.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, n.jsx)(I.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: b.subtitle,
      children: M.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, n.jsxs)("div", {
      className: j.content,
      children: [(0, n.jsx)("div", {
        className: j.leftColumn,
        children: (0, n.jsxs)("div", {
          className: j.colorsContainer,
          children: [(0, n.jsx)(R.default, {
            onClick: k
          }), (0, n.jsxs)("div", {
            className: j.colorPickerContainer,
            children: [(0, n.jsx)(I.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: M.default.Messages.CLAN_LOOK_BRAND_COLOR
            }), (0, n.jsxs)("div", {
              className: j.colorPickerGrid,
              children: [(0, n.jsx)(S.default, {
                showSecondaryColor: !0,
                palette: F,
                onPrimaryColorChange: e => {
                  c({
                    brandPrimaryColor: (0, d.int2hex)(e)
                  })
                },
                onSecondaryColorChange: e => {
                  c({
                    brandSecondaryColor: (0, d.int2hex)(e)
                  })
                },
                shouldShow: w,
                onRequestClose: () => B(!1),
                children: e => (0, n.jsx)(I.Clickable, {
                  ...e,
                  onClick: () => {
                    B(e => !e)
                  },
                  className: o()(j.brandItemContainer, {
                    [j.brandItemContainerSelected]: 0 === P
                  }),
                  children: (0, n.jsx)(D, {
                    name: M.default.Messages.CLAN_LOOK_PRESET_CUSTOM,
                    isCustom: !0
                  })
                })
              }), (0, n.jsx)(I.Clickable, {
                onClick: () => {
                  c({
                    brandPrimaryColor: null != T ? T : y.CLAN_BRAND_PRIMARY_DEFAULT,
                    brandSecondaryColor: null != _ ? _ : y.CLAN_BRAND_SECONDARY_DEFAULT
                  })
                },
                className: o()(j.brandItemContainer, {
                  [j.brandItemContainerSelected]: 1 === P
                }),
                children: (0, n.jsx)(D, {
                  name: M.default.Messages.CLAN_LOOK_PRESET_BADGE,
                  primaryColor: T,
                  secondaryColor: _
                })
              }), y.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, n.jsx)(I.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  c({
                    brandPrimaryColor: y.CLAN_BRAND_PALETTE_PRESETS[t].primary,
                    brandSecondaryColor: y.CLAN_BRAND_PALETTE_PRESETS[t].secondary
                  })
                },
                className: o()(j.brandItemContainer, {
                  [j.brandItemContainerSelected]: P === t + 2
                }),
                children: (0, n.jsx)(D, {
                  name: e.name,
                  primaryColor: e.primary,
                  secondaryColor: e.secondary
                })
              }, t))]
            })]
          }), (0, n.jsxs)("div", {
            className: j.bannerPickerContainer,
            children: [(0, n.jsx)(I.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: M.default.Messages.CLAN_LOOK_BANNER
            }), (0, n.jsx)("div", {
              className: j.bannerPickerGrid,
              children: O.map((e, t) => (0, n.jsxs)(I.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  c({
                    banner: e.bannerKind
                  })
                },
                className: o()(j.bannerItemContainer, {
                  [j.bannerItemContainerSelected]: e.bannerKind === m
                }),
                children: [(0, n.jsx)(e.icon, {
                  width: 24,
                  height: 24
                }), (0, n.jsx)(I.Text, {
                  variant: "text-sm/medium",
                  color: "interactive-normal",
                  className: j.noWrap,
                  children: e.name
                })]
              }, t))
            })]
          })]
        })
      }), (0, n.jsx)("div", {
        className: j.clanCardWrapper,
        children: (0, n.jsx)(g.ClanDiscoveryCardView, {
          bannerComponent: (0, n.jsx)(v.default, {
            banner: m,
            primaryTintColor: H.primary,
            secondaryTintColor: H.secondary,
            className: j.clanBannerPreview
          }),
          clan: {
            ...u,
            id: f,
            name: null !== (a = null == C ? void 0 : C.name) && void 0 !== a ? a : "",
            icon: null == C ? void 0 : C.icon,
            memberCount: x,
            games: Array.from(u.gameApplicationIds),
            traits: Array.from(u.interests),
            banner: m,
            badge: {
              badgeKind: u.badgeKind,
              primaryColor: null != T ? T : y.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null != _ ? _ : y.CLAN_BRAND_SECONDARY_DEFAULT
            },
            branding: {
              primaryColor: null !== (i = H.primary) && void 0 !== i ? i : y.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null !== (l = H.secondary) && void 0 !== l ? l : y.CLAN_BRAND_SECONDARY_DEFAULT
            }
          }
        })
      })]
    })]
  })
}