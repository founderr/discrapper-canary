"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("866442"),
  o = n("717772"),
  c = n("931622"),
  d = n("19602"),
  u = n("322282"),
  f = n("585797"),
  m = n("889812"),
  h = n("788670"),
  p = n("773565"),
  E = n("254147"),
  T = n("640024"),
  C = n("442837"),
  x = n("481060"),
  _ = n("231467"),
  g = n("650774"),
  I = n("430824"),
  N = n("175557"),
  v = n("688298"),
  A = n("116175"),
  S = n("308083"),
  L = n("689938"),
  y = n("106832"),
  R = n("661926");
let b = S.CLAN_BRAND_PALETTE_PRESETS.length + 1,
  M = [{
    name: "Night Sky",
    bannerKind: S.ClanBannerKind.NIGHT_SKY,
    icon: p.ThemeDarkIcon
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
    icon: E.TreehouseIcon
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
      primaryColor: n,
      secondaryColor: r,
      isCustom: s
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [s ? (0, a.jsx)(d.EyeDropperIcon, {
        width: 24,
        height: 24
      }) : (0, a.jsx)("div", {
        className: y.brandItemCircle,
        style: {
          background: "linear-gradient(-45deg, ".concat(r, " 50%, ").concat(n, " 50% )")
        }
      }), (0, a.jsx)(x.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: y.noWrap,
        children: t
      })]
    })
  };
t.default = e => {
  var t, n, s, o, c, d, u, f;
  let {
    handleUpdate: m,
    progress: h,
    guildId: p
  } = e, E = (0, C.useStateFromStores)([I.default], () => I.default.getGuild(p)), T = null !== (t = (0, C.useStateFromStores)([g.default], () => g.default.getMemberCount(p))) && void 0 !== t ? t : 0, [O, D] = r.useState(h.banner), [P, F] = r.useState({
    primary: null !== (n = h.brandPrimaryColor) && void 0 !== n ? n : S.CLAN_BRAND_PRIMARY_DEFAULT,
    secondary: null !== (s = h.brandSecondaryColor) && void 0 !== s ? s : S.CLAN_BRAND_SECONDARY_DEFAULT
  }), [w, B] = r.useState(() => {
    if (h.brandPrimaryColor === h.badgePrimaryColor && h.brandSecondaryColor === h.badgeSecondaryColor) return 0;
    for (let e = 0; e < S.CLAN_BRAND_PALETTE_PRESETS.length; e++)
      if (S.CLAN_BRAND_PALETTE_PRESETS[e].primary === h.brandPrimaryColor && S.CLAN_BRAND_PALETTE_PRESETS[e].secondary === h.brandSecondaryColor) return e + 1;
    return b
  }), [G, U] = r.useState(!1), H = b === w, k = 0 === w, V = r.useMemo(() => {
    if (H) return P;
    if (k) {
      var e, t;
      return {
        primary: null !== (e = h.badgePrimaryColor) && void 0 !== e ? e : A.CLAN_BADGE_PRIMARY_DEFAULT,
        secondary: null !== (t = h.badgeSecondaryColor) && void 0 !== t ? t : A.CLAN_BADGE_SECONDARY_DEFAULT
      }
    } {
      let e = S.CLAN_BRAND_PALETTE_PRESETS[w - 1];
      return {
        primary: e.primary,
        secondary: e.secondary
      }
    }
  }, [P, k, H, h.badgePrimaryColor, h.badgeSecondaryColor, w]);
  return r.useEffect(() => {
    m({
      banner: O,
      brandPrimaryColor: V.primary,
      brandSecondaryColor: V.secondary
    })
  }, [m, O, V.primary, V.secondary]), (0, a.jsxs)("div", {
    className: R.slideContent,
    children: [(0, a.jsx)(x.Heading, {
      variant: "heading-xxl/medium",
      className: R.title,
      children: L.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, a.jsx)(x.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: R.subtitle,
      children: L.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: y.content,
      children: [(0, a.jsx)("div", {
        className: y.leftColumn,
        children: (0, a.jsxs)("div", {
          className: y.colorsContainer,
          children: [(0, a.jsxs)("div", {
            className: y.colorPickerContainer,
            children: [(0, a.jsx)(x.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: L.default.Messages.CLAN_LOOK_BRAND_COLOR
            }), (0, a.jsxs)("div", {
              className: y.colorPickerGrid,
              children: [(0, a.jsx)(x.Clickable, {
                onClick: () => {
                  var e, t;
                  B(0), F({
                    primary: null !== (e = h.badgePrimaryColor) && void 0 !== e ? e : S.CLAN_BRAND_PRIMARY_DEFAULT,
                    secondary: null !== (t = h.badgeSecondaryColor) && void 0 !== t ? t : S.CLAN_BRAND_SECONDARY_DEFAULT
                  })
                },
                className: i()(y.brandItemContainer, {
                  [y.brandItemContainerSelected]: 0 === w
                }),
                children: (0, a.jsx)(j, {
                  name: L.default.Messages.CLAN_LOOK_PRESET_BADGE,
                  primaryColor: h.badgePrimaryColor,
                  secondaryColor: h.badgeSecondaryColor
                })
              }), S.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, a.jsx)(x.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  B(t + 1), F(S.CLAN_BRAND_PALETTE_PRESETS[t])
                },
                className: i()(y.brandItemContainer, {
                  [y.brandItemContainerSelected]: w === t + 1
                }),
                children: (0, a.jsx)(j, {
                  name: e.name,
                  primaryColor: e.primary,
                  secondaryColor: e.secondary
                })
              }, t)), (0, a.jsx)(v.default, {
                showSecondaryColor: !0,
                palette: P,
                onPrimaryColorChange: e => {
                  F(t => ({
                    ...t,
                    primary: (0, l.int2hex)(e)
                  }))
                },
                onSecondaryColorChange: e => {
                  F(t => ({
                    ...t,
                    secondary: (0, l.int2hex)(e)
                  }))
                },
                shouldShow: G,
                onRequestClose: () => U(!1),
                children: e => (0, a.jsx)(x.Clickable, {
                  ...e,
                  onClick: () => {
                    B(b), U(e => !e)
                  },
                  className: i()(y.brandItemContainer, {
                    [y.brandItemContainerSelected]: w === b
                  }),
                  children: (0, a.jsx)(j, {
                    name: L.default.Messages.CLAN_LOOK_PRESET_CUSTOM,
                    isCustom: !0
                  })
                })
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: y.bannerPickerContainer,
            children: [(0, a.jsx)(x.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: L.default.Messages.CLAN_LOOK_BANNER
            }), (0, a.jsx)("div", {
              className: y.bannerPickerGrid,
              children: M.map((e, t) => (0, a.jsxs)(x.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  D(e.bannerKind)
                },
                className: i()(y.bannerItemContainer, {
                  [y.bannerItemContainerSelected]: e.bannerKind === O
                }),
                children: [(0, a.jsx)(e.icon, {
                  width: 24,
                  height: 24
                }), (0, a.jsx)(x.Text, {
                  variant: "text-sm/medium",
                  color: "interactive-normal",
                  className: y.noWrap,
                  children: e.name
                })]
              }, t))
            })]
          })]
        })
      }), (0, a.jsx)("div", {
        className: y.clanCardWrapper,
        children: (0, a.jsx)(_.ClanDiscoveryCardView, {
          bannerComponent: (0, a.jsx)(N.default, {
            banner: O,
            primaryTintColor: V.primary,
            secondaryTintColor: V.secondary,
            className: y.clanBannerPreview
          }),
          clan: {
            ...h,
            id: p,
            name: null !== (o = null == E ? void 0 : E.name) && void 0 !== o ? o : "",
            icon: null == E ? void 0 : E.icon,
            memberCount: T,
            games: Array.from(h.gameApplicationIds),
            traits: Array.from(h.interests),
            banner: O,
            badge: {
              badgeKind: h.badgeKind,
              primaryColor: null !== (c = h.badgePrimaryColor) && void 0 !== c ? c : S.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null !== (d = h.badgeSecondaryColor) && void 0 !== d ? d : S.CLAN_BRAND_SECONDARY_DEFAULT
            },
            branding: {
              primaryColor: null !== (u = V.primary) && void 0 !== u ? u : S.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null !== (f = V.secondary) && void 0 !== f ? f : S.CLAN_BRAND_SECONDARY_DEFAULT
            }
          }
        })
      })]
    })]
  })
}