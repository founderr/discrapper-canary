"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("688619"),
  s = a.n(i),
  l = a("120356"),
  o = a.n(l),
  d = a("866442"),
  c = a("878903"),
  u = a("481060"),
  f = a("550271"),
  m = a("688298"),
  E = a("995119"),
  h = a("116175"),
  T = a("308083"),
  _ = a("689938"),
  C = a("410453"),
  x = a("661926");
let p = [h.ClanBadgeKind.SWORD, h.ClanBadgeKind.WATER_DROP, h.ClanBadgeKind.SKULL, h.ClanBadgeKind.TOADSTOOL, h.ClanBadgeKind.MOON, h.ClanBadgeKind.LIGHTNING, h.ClanBadgeKind.LEAF, h.ClanBadgeKind.HEART, h.ClanBadgeKind.FIRE, h.ClanBadgeKind.COMPASS, h.ClanBadgeKind.CROSSHAIRS, h.ClanBadgeKind.FLOWER, h.ClanBadgeKind.FORCE, h.ClanBadgeKind.GEM, h.ClanBadgeKind.LAVA, h.ClanBadgeKind.PSYCHIC, h.ClanBadgeKind.SMOKE, h.ClanBadgeKind.SNOW, h.ClanBadgeKind.SOUND, h.ClanBadgeKind.SUN, h.ClanBadgeKind.WIND];
t.default = e => {
  let {
    handleUpdate: t,
    badge: a,
    primaryColor: i,
    secondaryColor: l,
    tag: I,
    error: g,
    furthestStep: N,
    inSettings: A
  } = e, v = r.useMemo(() => {
    let e = (0, h.getRandomClanBadgePreset)();
    return {
      primary: null != i ? i : e.primary,
      secondary: null != l ? l : e.secondary
    }
  }, [i, l]);
  r.useEffect(() => {
    (null == i || null == l) && t({
      badgePrimaryColor: v.primary,
      badgeSecondaryColor: v.secondary
    })
  }, [v.primary, v.secondary, t, i, l]);
  let S = r.useMemo(() => {
      for (let e = 0; e < h.CLAN_BADGE_PALETTE_PRESETS.length; e++)
        if (h.CLAN_BADGE_PALETTE_PRESETS[e].primary === v.primary && h.CLAN_BADGE_PALETTE_PRESETS[e].secondary === v.secondary) return 1 + e;
      return 0
    }, [v.primary, v.secondary]),
    [R, L] = r.useState(!1),
    y = r.useCallback(() => {
      let e = p[Math.floor(Math.random() * p.length)],
        a = s().random().hex();
      t({
        badgeKind: e,
        badgePrimaryColor: a,
        badgeSecondaryColor: s().random().hex()
      })
    }, [t]);
  return r.useEffect(() => {
    N === T.ClanSetupSteps.CUSTOMIZE_TAG_BADGE && !A && t({
      brandPrimaryColor: v.primary,
      brandSecondaryColor: v.secondary
    })
  }, [t, v.primary, v.secondary, N, i, l, A]), (0, n.jsxs)("div", {
    className: x.slideContent,
    children: [(0, n.jsx)(u.Heading, {
      variant: "heading-xxl/medium",
      className: x.title,
      children: _.default.Messages.CLAN_SETUP_CUSTOMIZE_TITLE
    }), (0, n.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: x.subtitle,
      children: _.default.Messages.CLAN_SETUP_CUSTOMIZE_SUBTITLE
    }), (0, n.jsx)(E.default, {
      onClick: y
    }), (0, n.jsxs)("div", {
      className: C.container,
      children: [(0, n.jsxs)("div", {
        className: C.badgesContainer,
        children: [(0, n.jsxs)("div", {
          className: C.pickerContainer,
          children: [(0, n.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: _.default.Messages.CLAN_BADGE
          }), (0, n.jsx)("div", {
            className: C.pickerGrid,
            children: p.map(e => (0, n.jsx)(u.Clickable, {
              onClick: () => t({
                badgeKind: e
              }),
              className: o()(C.badgeAssetContainer, {
                [C.badgeAssetContainerSelected]: e === a
              }),
              children: (0, n.jsx)(f.ClanBadge, {
                badge: e,
                width: 32,
                height: 32
              })
            }, "".concat(e)))
          })]
        }), (0, n.jsxs)("div", {
          className: C.pickerContainer,
          children: [(0, n.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: _.default.Messages.CLAN_BADGE_COLORS
          }), (0, n.jsxs)("div", {
            className: C.pickerGrid,
            children: [(0, n.jsx)(m.default, {
              showSecondaryColor: h.CLAN_BADGE_NUM_CUSTOMIZABLE_COLORS[a] >= 2,
              palette: v,
              onPrimaryColorChange: e => {
                t({
                  badgePrimaryColor: (0, d.int2hex)(e)
                })
              },
              onSecondaryColorChange: e => {
                t({
                  badgeSecondaryColor: (0, d.int2hex)(e)
                })
              },
              shouldShow: R,
              onRequestClose: () => L(!1),
              children: e => (0, n.jsx)(u.Clickable, {
                ...e,
                onClick: () => {
                  L(e => !e)
                },
                className: o()(C.badgeAssetContainer, {
                  [C.badgeAssetContainerSelected]: 0 === S
                }),
                children: (0, n.jsx)(c.PaintPaletteIcon, {
                  width: 20,
                  height: 20
                })
              })
            }), h.CLAN_BADGE_PALETTE_PRESETS.map((e, r) => (0, n.jsx)(u.Clickable, {
              onClick: () => {
                t({
                  badgePrimaryColor: h.CLAN_BADGE_PALETTE_PRESETS[r].primary,
                  badgeSecondaryColor: h.CLAN_BADGE_PALETTE_PRESETS[r].secondary
                })
              },
              className: o()(C.badgeAssetContainer, {
                [C.badgeAssetContainerSelected]: r + 1 === S
              }),
              children: (0, n.jsx)(f.ClanBadge, {
                badge: a,
                width: 32,
                height: 32,
                primaryTintColor: e.primary,
                secondaryTintColor: e.secondary
              })
            }, "".concat(e.primary, ":").concat(e.secondary)))]
          })]
        })]
      }), (0, n.jsxs)("div", {
        className: C.tagContainer,
        children: [(0, n.jsx)(u.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: _.default.Messages.CLAN_OVERVIEW_LABEL_CLAN_TAG
        }), null != g && (0, n.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: x.errorText,
          children: g
        }), (0, n.jsx)(u.TextInput, {
          className: C.tagInputWrapper,
          inputClassName: C.tagInput,
          value: null != I ? I : "",
          onChange: e => t({
            tag: e
          }),
          maxLength: T.MAX_TAG_LENGTH,
          placeholder: _.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER,
          autoFocus: !0,
          prefixElement: (0, n.jsx)(f.ClanBadge, {
            badge: a,
            width: 40,
            height: 40,
            primaryTintColor: v.primary,
            secondaryTintColor: v.secondary
          })
        }), (0, n.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: C.tagValidationText,
          children: _.default.Messages.CLAN_TAG_VALIDATION_RULES
        })]
      })]
    })]
  })
}