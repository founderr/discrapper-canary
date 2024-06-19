t(47120);
var a = t(735250),
  r = t(470079),
  s = t(688619),
  i = t.n(s),
  o = t(120356),
  l = t.n(o),
  c = t(866442),
  d = t(481060),
  u = t(550271),
  m = t(688298),
  h = t(995119),
  C = t(116175),
  x = t(308083),
  f = t(689938),
  E = t(802975),
  T = t(360884);
let _ = [C.ZD.SWORD, C.ZD.WATER_DROP, C.ZD.SKULL, C.ZD.TOADSTOOL, C.ZD.MOON, C.ZD.LIGHTNING, C.ZD.LEAF, C.ZD.HEART, C.ZD.FIRE, C.ZD.COMPASS, C.ZD.CROSSHAIRS, C.ZD.FLOWER, C.ZD.FORCE, C.ZD.GEM, C.ZD.LAVA, C.ZD.PSYCHIC, C.ZD.SMOKE, C.ZD.SNOW, C.ZD.SOUND, C.ZD.SUN, C.ZD.WIND];
n.Z = e => {
  let {
    handleUpdate: n,
    badge: t,
    primaryColor: s,
    secondaryColor: o,
    tag: I,
    error: g,
    furthestStep: p,
    inSettings: N
  } = e, v = r.useMemo(() => {
    let e = (0, C.yf)();
    return {
      primary: null != s ? s : e.primary,
      secondary: null != o ? o : e.secondary
    }
  }, [s, o]);
  r.useEffect(() => {
    (null == s || null == o) && n({
      badgePrimaryColor: v.primary,
      badgeSecondaryColor: v.secondary
    })
  }, [v.primary, v.secondary, n, s, o]);
  let y = r.useMemo(() => {
      for (let e = 0; e < C.sg.length; e++)
        if (C.sg[e].primary === v.primary && C.sg[e].secondary === v.secondary) return 1 + e;
      return 0
    }, [v.primary, v.secondary]),
    [A, S] = r.useState(!1),
    M = r.useCallback(() => {
      let e = _[Math.floor(Math.random() * _.length)],
        t = i().random().hex();
      n({
        badgeKind: e,
        badgePrimaryColor: t,
        badgeSecondaryColor: i().random().hex()
      })
    }, [n]);
  return r.useEffect(() => {
    p === x.Wy.CUSTOMIZE_TAG_BADGE && !N && n({
      brandPrimaryColor: v.primary,
      brandSecondaryColor: v.secondary
    })
  }, [n, v.primary, v.secondary, p, s, o, N]), (0, a.jsxs)("div", {
    className: T.slideContent,
    children: [(0, a.jsx)(d.Heading, {
      variant: "heading-xxl/medium",
      className: T.title,
      children: f.Z.Messages.CLAN_SETUP_CUSTOMIZE_TITLE
    }), (0, a.jsx)(d.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: T.subtitle,
      children: f.Z.Messages.CLAN_SETUP_CUSTOMIZE_SUBTITLE
    }), (0, a.jsx)(h.Z, {
      onClick: M
    }), (0, a.jsxs)("div", {
      className: E.container,
      children: [(0, a.jsxs)("div", {
        className: E.badgesContainer,
        children: [(0, a.jsxs)("div", {
          className: E.pickerContainer,
          children: [(0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: f.Z.Messages.CLAN_BADGE
          }), (0, a.jsx)("div", {
            className: E.pickerGrid,
            children: _.map(e => (0, a.jsx)(d.Clickable, {
              onClick: () => n({
                badgeKind: e
              }),
              className: l()(E.badgeAssetContainer, {
                [E.badgeAssetContainerSelected]: e === t
              }),
              children: (0, a.jsx)(u.A, {
                badge: e,
                width: 32,
                height: 32
              })
            }, "".concat(e)))
          })]
        }), (0, a.jsxs)("div", {
          className: E.pickerContainer,
          children: [(0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: f.Z.Messages.CLAN_BADGE_COLORS
          }), (0, a.jsxs)("div", {
            className: E.pickerGrid,
            children: [(0, a.jsx)(m.Z, {
              showSecondaryColor: C.ME[t] >= 2,
              palette: v,
              onPrimaryColorChange: e => {
                n({
                  badgePrimaryColor: (0, c.Rf)(e)
                })
              },
              onSecondaryColorChange: e => {
                n({
                  badgeSecondaryColor: (0, c.Rf)(e)
                })
              },
              shouldShow: A,
              onRequestClose: () => S(!1),
              children: e => (0, a.jsx)(d.Clickable, {
                ...e,
                onClick: () => {
                  S(e => !e)
                },
                className: l()(E.badgeAssetContainer, {
                  [E.badgeAssetContainerSelected]: 0 === y
                }),
                children: (0, a.jsx)(d.PaintPaletteIcon, {
                  size: "custom",
                  width: 20,
                  height: 20
                })
              })
            }), C.sg.map((e, r) => (0, a.jsx)(d.Clickable, {
              onClick: () => {
                n({
                  badgePrimaryColor: C.sg[r].primary,
                  badgeSecondaryColor: C.sg[r].secondary
                })
              },
              className: l()(E.badgeAssetContainer, {
                [E.badgeAssetContainerSelected]: r + 1 === y
              }),
              children: (0, a.jsx)(u.A, {
                badge: t,
                width: 32,
                height: 32,
                primaryTintColor: e.primary,
                secondaryTintColor: e.secondary
              })
            }, "".concat(e.primary, ":").concat(e.secondary)))]
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: E.tagContainer,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: f.Z.Messages.CLAN_OVERVIEW_LABEL_CLAN_TAG
        }), null != g && (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: T.errorText,
          children: g
        }), (0, a.jsx)(d.TextInput, {
          className: E.tagInputWrapper,
          inputClassName: E.tagInput,
          value: null != I ? I : "",
          onChange: e => n({
            tag: e
          }),
          maxLength: x.cG,
          placeholder: f.Z.Messages.CLAN_SETUP_TAG_PLACEHOLDER,
          autoFocus: !0,
          prefixElement: (0, a.jsx)(u.A, {
            badge: t,
            width: 40,
            height: 40,
            primaryTintColor: v.primary,
            secondaryTintColor: v.secondary
          })
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: E.tagValidationText,
          children: f.Z.Messages.CLAN_TAG_VALIDATION_RULES
        })]
      })]
    })]
  })
}