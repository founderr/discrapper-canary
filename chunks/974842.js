"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("866442"),
  o = a("19602"),
  c = a("481060"),
  d = a("550271"),
  u = a("688298"),
  f = a("116175"),
  m = a("308083"),
  h = a("689938"),
  E = a("410453"),
  T = a("661926");
let p = [f.ClanBadgeKind.SWORD, f.ClanBadgeKind.WATER_DROP, f.ClanBadgeKind.SKULL, f.ClanBadgeKind.TOADSTOOL, f.ClanBadgeKind.MOON, f.ClanBadgeKind.LIGHTNING, f.ClanBadgeKind.LEAF, f.ClanBadgeKind.HEART, f.ClanBadgeKind.FIRE, f.ClanBadgeKind.COMPASS, f.ClanBadgeKind.CROSSHAIRS, f.ClanBadgeKind.FLOWER, f.ClanBadgeKind.FORCE, f.ClanBadgeKind.GEM, f.ClanBadgeKind.LAVA, f.ClanBadgeKind.PSYCHIC, f.ClanBadgeKind.SMOKE, f.ClanBadgeKind.SNOW, f.ClanBadgeKind.SOUND, f.ClanBadgeKind.SUN, f.ClanBadgeKind.WIND],
  C = f.CLAN_BADGE_PALETTE_PRESETS.length;
t.default = e => {
  let {
    handleUpdate: t,
    badge: a,
    primaryColor: s,
    secondaryColor: _,
    tag: x,
    error: g,
    furthestStep: N,
    inSettings: I
  } = e, v = r.useMemo(() => {
    let e = (0, f.getRandomClanBadgePreset)();
    return {
      primary: null != s ? s : e.primary,
      secondary: null != _ ? _ : e.secondary
    }
  }, [s, _]), A = r.useMemo(() => {
    for (let e = 0; e < f.CLAN_BADGE_PALETTE_PRESETS.length; e++)
      if (f.CLAN_BADGE_PALETTE_PRESETS[e].primary === v.primary && f.CLAN_BADGE_PALETTE_PRESETS[e].secondary === v.secondary) return e;
    return C
  }, [v.primary, v.secondary]), [S, L] = r.useState(!1), R = C === A ? v : f.CLAN_BADGE_PALETTE_PRESETS[A];
  return r.useEffect(() => {
    (R.primary !== s || R.secondary !== _) && N === m.ClanSetupSteps.CUSTOMIZE_TAG_BADGE && !I && t({
      brandPrimaryColor: R.primary,
      brandSecondaryColor: R.secondary
    })
  }, [t, R.primary, R.secondary, N, s, _, I]), (0, n.jsxs)("div", {
    className: T.slideContent,
    children: [(0, n.jsx)(c.Heading, {
      variant: "heading-xxl/medium",
      className: T.title,
      children: h.default.Messages.CLAN_SETUP_CUSTOMIZE_TITLE
    }), (0, n.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: T.subtitle,
      children: h.default.Messages.CLAN_SETUP_CUSTOMIZE_SUBTITLE
    }), (0, n.jsxs)("div", {
      className: E.container,
      children: [(0, n.jsxs)("div", {
        className: E.badgesContainer,
        children: [(0, n.jsxs)("div", {
          className: E.pickerContainer,
          children: [(0, n.jsx)(c.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: h.default.Messages.CLAN_BADGE
          }), (0, n.jsx)("div", {
            className: E.pickerGrid,
            children: p.map(e => (0, n.jsx)(c.Clickable, {
              onClick: () => t({
                badgeKind: e
              }),
              className: i()(E.badgeAssetContainer, {
                [E.badgeAssetContainerSelected]: e === a
              }),
              children: (0, n.jsx)(d.ClanBadge, {
                badge: e,
                width: 32,
                height: 32
              })
            }, "".concat(e)))
          })]
        }), (0, n.jsxs)("div", {
          className: E.pickerContainer,
          children: [(0, n.jsx)(c.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: h.default.Messages.CLAN_BADGE_COLORS
          }), (0, n.jsxs)("div", {
            className: E.pickerGrid,
            children: [f.CLAN_BADGE_PALETTE_PRESETS.map((e, r) => (0, n.jsx)(c.Clickable, {
              onClick: () => {
                t({
                  badgePrimaryColor: f.CLAN_BADGE_PALETTE_PRESETS[r].primary,
                  badgeSecondaryColor: f.CLAN_BADGE_PALETTE_PRESETS[r].secondary
                })
              },
              className: i()(E.badgeAssetContainer, {
                [E.badgeAssetContainerSelected]: r === A
              }),
              children: (0, n.jsx)(d.ClanBadge, {
                badge: a,
                width: 32,
                height: 32,
                primaryTintColor: e.primary,
                secondaryTintColor: e.secondary
              })
            }, "".concat(e.primary, ":").concat(e.secondary))), (0, n.jsx)(u.default, {
              showSecondaryColor: f.CLAN_BADGE_NUM_CUSTOMIZABLE_COLORS[a] >= 2,
              palette: v,
              onPrimaryColorChange: e => {
                t({
                  badgePrimaryColor: (0, l.int2hex)(e)
                })
              },
              onSecondaryColorChange: e => {
                t({
                  badgeSecondaryColor: (0, l.int2hex)(e)
                })
              },
              shouldShow: S,
              onRequestClose: () => L(!1),
              children: e => (0, n.jsx)(c.Clickable, {
                ...e,
                onClick: () => {
                  L(e => !e)
                },
                className: i()(E.badgeAssetContainer, {
                  [E.badgeAssetContainerSelected]: C === A
                }),
                children: (0, n.jsx)(o.EyeDropperIcon, {
                  width: 20,
                  height: 20
                })
              })
            })]
          })]
        })]
      }), (0, n.jsxs)("div", {
        className: E.tagContainer,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: h.default.Messages.CLAN_OVERVIEW_LABEL_CLAN_TAG
        }), null != g && (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: T.errorText,
          children: g
        }), (0, n.jsx)(c.TextInput, {
          className: E.tagInputWrapper,
          inputClassName: E.tagInput,
          value: null != x ? x : "",
          onChange: e => t({
            tag: e
          }),
          maxLength: m.MAX_TAG_LENGTH,
          placeholder: h.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER,
          autoFocus: !0,
          prefixElement: (0, n.jsx)(d.ClanBadge, {
            badge: a,
            width: 40,
            height: 40,
            primaryTintColor: R.primary,
            secondaryTintColor: R.secondary
          })
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: E.tagValidationText,
          children: h.default.Messages.CLAN_TAG_VALIDATION_RULES
        })]
      })]
    })]
  })
}