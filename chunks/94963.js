t(47120);
var a = t(735250),
  r = t(470079),
  s = t(688619),
  i = t.n(s),
  o = t(120356),
  l = t.n(o),
  c = t(866442),
  d = t(442837),
  u = t(481060),
  m = t(231467),
  h = t(650774),
  C = t(430824),
  x = t(175557),
  f = t(688298),
  E = t(995119),
  T = t(116175),
  _ = t(308083),
  I = t(689938),
  g = t(275548),
  p = t(360884);
let N = [{
    name: "Night Sky",
    bannerKind: _.qC.NIGHT_SKY,
    icon: u.ThemeDarkIcon
  }, {
    name: "Castle",
    bannerKind: _.qC.CASTLE,
    icon: u.CrownIcon
  }, {
    name: "World Map",
    bannerKind: _.qC.WORLD_MAP,
    icon: u.GlobeEarthIcon
  }, {
    name: "Sea Foam",
    bannerKind: _.qC.SEA_FOAM,
    icon: u.PrivacyAndSafetyIcon
  }, {
    name: "Warp",
    bannerKind: _.qC.WARP_TUNNEL,
    icon: u.BlurBackgroundIcon
  }, {
    name: "House",
    bannerKind: _.qC.HOUSE,
    icon: u.TreehouseIcon
  }, {
    name: "Pulsar",
    bannerKind: _.qC.HEIGHTMAP,
    icon: u.WaveformIcon
  }, {
    name: "Mesh",
    bannerKind: _.qC.MESH,
    icon: u.GridVerticalIcon
  }, {
    name: "Spatter",
    bannerKind: _.qC.SPATTER,
    icon: u.PaintbrushThickIcon
  }],
  v = e => {
    let {
      name: n,
      primaryColor: t,
      secondaryColor: r,
      isCustom: s
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [s ? (0, a.jsx)(u.PaintPaletteIcon, {
        size: "md"
      }) : (0, a.jsx)("div", {
        className: g.brandItemCircle,
        style: {
          background: "linear-gradient(-45deg, ".concat(r, " 50%, ").concat(t, " 50% )")
        }
      }), (0, a.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: g.noWrap,
        children: n
      })]
    })
  };
n.Z = e => {
  var n, t, s, o;
  let {
    handleUpdate: y,
    progress: A,
    guildId: S
  } = e, {
    banner: M,
    brandPrimaryColor: j,
    brandSecondaryColor: b,
    badgePrimaryColor: R,
    badgeSecondaryColor: L
  } = A, O = (0, d.e7)([C.Z], () => C.Z.getGuild(S)), Z = null !== (n = (0, d.e7)([h.Z], () => h.Z.getMemberCount(S))) && void 0 !== n ? n : 0, D = r.useMemo(() => ({
    primary: null != j ? j : _.OH,
    secondary: null != b ? b : _.K_
  }), [j, b]), P = r.useMemo(() => {
    if (j === R && b === L) return 1;
    for (let e = 0; e < _.ym.length; e++)
      if (_.ym[e].primary === A.brandPrimaryColor && _.ym[e].secondary === A.brandSecondaryColor) return 2 + e;
    return 0
  }, [j, b, R, L, A.brandPrimaryColor, A.brandSecondaryColor]), [F, w] = r.useState(!1), k = 0 === P, U = 1 === P, G = r.useMemo(() => {
    if (k) return D;
    if (U) return {
      primary: null != R ? R : T.Nh,
      secondary: null != L ? L : T.vY
    };
    {
      let e = _.ym[P - 2];
      return {
        primary: e.primary,
        secondary: e.secondary
      }
    }
  }, [D, U, k, R, L, P]), B = r.useCallback(() => {
    let e = N[Math.floor(Math.random() * N.length)].bannerKind,
      n = i().random().hex();
    y({
      banner: e,
      brandPrimaryColor: n,
      brandSecondaryColor: i().random().hex()
    })
  }, [y]);
  return r.useEffect(() => {
    y({
      banner: M,
      brandPrimaryColor: G.primary,
      brandSecondaryColor: G.secondary
    })
  }, [y, M, G.primary, G.secondary]), (0, a.jsxs)("div", {
    className: p.slideContent,
    children: [(0, a.jsx)(u.Heading, {
      variant: "heading-xxl/medium",
      className: p.title,
      children: I.Z.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: p.subtitle,
      children: I.Z.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: g.content,
      children: [(0, a.jsx)("div", {
        className: g.leftColumn,
        children: (0, a.jsxs)("div", {
          className: g.colorsContainer,
          children: [(0, a.jsx)(E.Z, {
            onClick: B
          }), (0, a.jsxs)("div", {
            className: g.colorPickerContainer,
            children: [(0, a.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: I.Z.Messages.CLAN_LOOK_BRAND_COLOR
            }), (0, a.jsxs)("div", {
              className: g.colorPickerGrid,
              children: [(0, a.jsx)(f.Z, {
                showSecondaryColor: !0,
                palette: D,
                onPrimaryColorChange: e => {
                  y({
                    brandPrimaryColor: (0, c.Rf)(e)
                  })
                },
                onSecondaryColorChange: e => {
                  y({
                    brandSecondaryColor: (0, c.Rf)(e)
                  })
                },
                shouldShow: F,
                onRequestClose: () => w(!1),
                children: e => (0, a.jsx)(u.Clickable, {
                  ...e,
                  onClick: () => {
                    w(e => !e)
                  },
                  className: l()(g.brandItemContainer, {
                    [g.brandItemContainerSelected]: 0 === P
                  }),
                  children: (0, a.jsx)(v, {
                    name: I.Z.Messages.CLAN_LOOK_PRESET_CUSTOM,
                    isCustom: !0
                  })
                })
              }), (0, a.jsx)(u.Clickable, {
                onClick: () => {
                  y({
                    brandPrimaryColor: null != R ? R : _.OH,
                    brandSecondaryColor: null != L ? L : _.K_
                  })
                },
                className: l()(g.brandItemContainer, {
                  [g.brandItemContainerSelected]: 1 === P
                }),
                children: (0, a.jsx)(v, {
                  name: I.Z.Messages.CLAN_LOOK_PRESET_BADGE,
                  primaryColor: R,
                  secondaryColor: L
                })
              }), _.ym.map((e, n) => (0, a.jsx)(u.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  y({
                    brandPrimaryColor: _.ym[n].primary,
                    brandSecondaryColor: _.ym[n].secondary
                  })
                },
                className: l()(g.brandItemContainer, {
                  [g.brandItemContainerSelected]: P === n + 2
                }),
                children: (0, a.jsx)(v, {
                  name: e.name,
                  primaryColor: e.primary,
                  secondaryColor: e.secondary
                })
              }, n))]
            })]
          }), (0, a.jsxs)("div", {
            className: g.bannerPickerContainer,
            children: [(0, a.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: I.Z.Messages.CLAN_LOOK_BANNER
            }), (0, a.jsx)("div", {
              className: g.bannerPickerGrid,
              children: N.map((e, n) => (0, a.jsxs)(u.Clickable, {
                "aria-label": e.name,
                onClick: () => {
                  y({
                    banner: e.bannerKind
                  })
                },
                className: l()(g.bannerItemContainer, {
                  [g.bannerItemContainerSelected]: e.bannerKind === M
                }),
                children: [(0, a.jsx)(e.icon, {
                  size: "md",
                  color: "currentColor"
                }), (0, a.jsx)(u.Text, {
                  variant: "text-sm/medium",
                  color: "interactive-normal",
                  className: g.noWrap,
                  children: e.name
                })]
              }, n))
            })]
          })]
        })
      }), (0, a.jsx)("div", {
        className: g.clanCardWrapper,
        children: (0, a.jsx)(m.xV, {
          bannerComponent: (0, a.jsx)(x.Z, {
            banner: M,
            primaryTintColor: G.primary,
            secondaryTintColor: G.secondary,
            className: g.clanBannerPreview
          }),
          clan: {
            ...A,
            id: S,
            name: null !== (t = null == O ? void 0 : O.name) && void 0 !== t ? t : "",
            icon: null == O ? void 0 : O.icon,
            memberCount: Z,
            games: Array.from(A.gameApplicationIds),
            traits: Array.from(A.interests),
            banner: M,
            badge: {
              badgeKind: A.badgeKind,
              primaryColor: null != R ? R : _.OH,
              secondaryColor: null != L ? L : _.K_
            },
            branding: {
              primaryColor: null !== (s = G.primary) && void 0 !== s ? s : _.OH,
              secondaryColor: null !== (o = G.secondary) && void 0 !== o ? o : _.K_
            }
          }
        })
      })]
    })]
  })
}