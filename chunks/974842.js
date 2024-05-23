"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("688619"),
  i = a.n(s),
  l = a("120356"),
  o = a.n(l),
  c = a("866442"),
  d = a("878903"),
  u = a("481060"),
  f = a("550271"),
  m = a("688298"),
  h = a("995119"),
  E = a("116175"),
  p = a("308083"),
  C = a("689938"),
  T = a("410453"),
  _ = a("661926");
let x = [E.ClanBadgeKind.SWORD, E.ClanBadgeKind.WATER_DROP, E.ClanBadgeKind.SKULL, E.ClanBadgeKind.TOADSTOOL, E.ClanBadgeKind.MOON, E.ClanBadgeKind.LIGHTNING, E.ClanBadgeKind.LEAF, E.ClanBadgeKind.HEART, E.ClanBadgeKind.FIRE, E.ClanBadgeKind.COMPASS, E.ClanBadgeKind.CROSSHAIRS, E.ClanBadgeKind.FLOWER, E.ClanBadgeKind.FORCE, E.ClanBadgeKind.GEM, E.ClanBadgeKind.LAVA, E.ClanBadgeKind.PSYCHIC, E.ClanBadgeKind.SMOKE, E.ClanBadgeKind.SNOW, E.ClanBadgeKind.SOUND, E.ClanBadgeKind.SUN, E.ClanBadgeKind.WIND];
t.default = e => {
  let {
    handleUpdate: t,
    badge: a,
    primaryColor: s,
    secondaryColor: l,
    tag: g,
    error: N,
    furthestStep: I,
    inSettings: v
  } = e, A = r.useMemo(() => {
    let e = (0, E.getRandomClanBadgePreset)();
    return {
      primary: null != s ? s : e.primary,
      secondary: null != l ? l : e.secondary
    }
  }, [s, l]);
  r.useEffect(() => {
    (null == s || null == l) && t({
      badgePrimaryColor: A.primary,
      badgeSecondaryColor: A.secondary
    })
  }, [A.primary, A.secondary, t, s, l]);
  let S = r.useMemo(() => {
      for (let e = 0; e < E.CLAN_BADGE_PALETTE_PRESETS.length; e++)
        if (E.CLAN_BADGE_PALETTE_PRESETS[e].primary === A.primary && E.CLAN_BADGE_PALETTE_PRESETS[e].secondary === A.secondary) return 1 + e;
      return 0
    }, [A.primary, A.secondary]),
    [L, R] = r.useState(!1),
    y = r.useCallback(() => {
      let e = x[Math.floor(Math.random() * x.length)],
        a = i().random().hex();
      t({
        badgeKind: e,
        badgePrimaryColor: a,
        badgeSecondaryColor: i().random().hex()
      })
    }, [t]);
  return r.useEffect(() => {
    I === p.ClanSetupSteps.CUSTOMIZE_TAG_BADGE && !v && t({
      brandPrimaryColor: A.primary,
      brandSecondaryColor: A.secondary
    })
  }, [t, A.primary, A.secondary, I, s, l, v]), (0, n.jsxs)("div", {
    className: _.slideContent,
    children: [(0, n.jsx)(u.Heading, {
      variant: "heading-xxl/medium",
      className: _.title,
      children: C.default.Messages.CLAN_SETUP_CUSTOMIZE_TITLE
    }), (0, n.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: _.subtitle,
      children: C.default.Messages.CLAN_SETUP_CUSTOMIZE_SUBTITLE
    }), (0, n.jsx)(h.default, {
      onClick: y
    }), (0, n.jsxs)("div", {
      className: T.container,
      children: [(0, n.jsxs)("div", {
        className: T.badgesContainer,
        children: [(0, n.jsxs)("div", {
          className: T.pickerContainer,
          children: [(0, n.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: C.default.Messages.CLAN_BADGE
          }), (0, n.jsx)("div", {
            className: T.pickerGrid,
            children: x.map(e => (0, n.jsx)(u.Clickable, {
              onClick: () => t({
                badgeKind: e
              }),
              className: o()(T.badgeAssetContainer, {
                [T.badgeAssetContainerSelected]: e === a
              }),
              children: (0, n.jsx)(f.ClanBadge, {
                badge: e,
                width: 32,
                height: 32
              })
            }, "".concat(e)))
          })]
        }), (0, n.jsxs)("div", {
          className: T.pickerContainer,
          children: [(0, n.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: C.default.Messages.CLAN_BADGE_COLORS
          }), (0, n.jsxs)("div", {
            className: T.pickerGrid,
            children: [(0, n.jsx)(m.default, {
              showSecondaryColor: E.CLAN_BADGE_NUM_CUSTOMIZABLE_COLORS[a] >= 2,
              palette: A,
              onPrimaryColorChange: e => {
                t({
                  badgePrimaryColor: (0, c.int2hex)(e)
                })
              },
              onSecondaryColorChange: e => {
                t({
                  badgeSecondaryColor: (0, c.int2hex)(e)
                })
              },
              shouldShow: L,
              onRequestClose: () => R(!1),
              children: e => (0, n.jsx)(u.Clickable, {
                ...e,
                onClick: () => {
                  R(e => !e)
                },
                className: o()(T.badgeAssetContainer, {
                  [T.badgeAssetContainerSelected]: 0 === S
                }),
                children: (0, n.jsx)(d.PaintPaletteIcon, {
                  width: 20,
                  height: 20
                })
              })
            }), E.CLAN_BADGE_PALETTE_PRESETS.map((e, r) => (0, n.jsx)(u.Clickable, {
              onClick: () => {
                t({
                  badgePrimaryColor: E.CLAN_BADGE_PALETTE_PRESETS[r].primary,
                  badgeSecondaryColor: E.CLAN_BADGE_PALETTE_PRESETS[r].secondary
                })
              },
              className: o()(T.badgeAssetContainer, {
                [T.badgeAssetContainerSelected]: r + 1 === S
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
        className: T.tagContainer,
        children: [(0, n.jsx)(u.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: C.default.Messages.CLAN_OVERVIEW_LABEL_CLAN_TAG
        }), null != N && (0, n.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: _.errorText,
          children: N
        }), (0, n.jsx)(u.TextInput, {
          className: T.tagInputWrapper,
          inputClassName: T.tagInput,
          value: null != g ? g : "",
          onChange: e => t({
            tag: e
          }),
          maxLength: p.MAX_TAG_LENGTH,
          placeholder: C.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER,
          autoFocus: !0,
          prefixElement: (0, n.jsx)(f.ClanBadge, {
            badge: a,
            width: 40,
            height: 40,
            primaryTintColor: A.primary,
            secondaryTintColor: A.secondary
          })
        }), (0, n.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: T.tagValidationText,
          children: C.default.Messages.CLAN_TAG_VALIDATION_RULES
        })]
      })]
    })]
  })
}