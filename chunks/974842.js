"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("866442"),
  o = n("19602"),
  u = n("481060"),
  d = n("703685"),
  c = n("550271"),
  f = n("116175"),
  E = n("308083"),
  h = n("689938"),
  _ = n("996399"),
  C = n("597338");
let m = [f.ClanBadgeKind.SWORD, f.ClanBadgeKind.SWORD_1, f.ClanBadgeKind.SWORD_2, f.ClanBadgeKind.SWORD_3, f.ClanBadgeKind.SWORD_4, f.ClanBadgeKind.SWORD_5, f.ClanBadgeKind.SWORD_6, f.ClanBadgeKind.SWORD_7, f.ClanBadgeKind.SWORD_8, f.ClanBadgeKind.SWORD_9, f.ClanBadgeKind.SWORD_10, f.ClanBadgeKind.SWORD_11, f.ClanBadgeKind.SWORD_12, f.ClanBadgeKind.SWORD_13, f.ClanBadgeKind.SWORD_14, f.ClanBadgeKind.SWORD_15, f.ClanBadgeKind.SWORD_16, f.ClanBadgeKind.SWORD_17, f.ClanBadgeKind.SWORD_18, f.ClanBadgeKind.SWORD_19, f.ClanBadgeKind.SWORD_20],
  S = f.CLAN_BADGE_PALETTE_PRESETS.length;
t.default = e => {
  let {
    handleUpdate: t,
    badge: n,
    primaryColor: l,
    secondaryColor: I,
    tag: T,
    error: p
  } = e, [g, A] = s.useState(n), [N, R] = s.useState({
    primary: l,
    secondary: I
  }), [v, O] = s.useState(() => {
    for (let e = 0; e < f.CLAN_BADGE_PALETTE_PRESETS.length; e++)
      if (f.CLAN_BADGE_PALETTE_PRESETS[e].primary === l && f.CLAN_BADGE_PALETTE_PRESETS[e].secondary === I) return e;
    return S
  }), L = S === v, M = L ? N : f.CLAN_BADGE_PALETTE_PRESETS[v];
  return s.useEffect(() => {
    t({
      badgeKind: g,
      badgePrimaryColor: M.primary,
      badgeSecondaryColor: M.secondary
    })
  }, [t, g, M.primary, M.secondary]), (0, a.jsxs)("div", {
    className: C.slideContent,
    children: [(0, a.jsx)(u.Heading, {
      variant: "heading-xxl/medium",
      className: C.title,
      children: h.default.Messages.CLAN_SETUP_CUSTOMIZE_TITLE
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: C.subtitle,
      children: h.default.Messages.CLAN_SETUP_CUSTOMIZE_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: _.container,
      children: [(0, a.jsxs)("div", {
        className: _.badgesContainer,
        children: [(0, a.jsxs)("div", {
          className: _.pickerContainer,
          children: [(0, a.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: h.default.Messages.CLAN_BADGE
          }), (0, a.jsx)("div", {
            className: _.pickerGrid,
            children: m.map(e => (0, a.jsx)(u.Clickable, {
              onClick: () => A(e),
              className: i()(_.badgeAssetContainer, {
                [_.badgeAssetContainerSelected]: e === g
              }),
              children: (0, a.jsx)(c.ClanBadge, {
                badge: e,
                width: 32,
                height: 32
              })
            }, "".concat(e)))
          })]
        }), (0, a.jsxs)("div", {
          className: _.pickerContainer,
          children: [(0, a.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: h.default.Messages.CLAN_BADGE_COLORS
          }), (0, a.jsxs)("div", {
            className: _.pickerGrid,
            children: [f.CLAN_BADGE_PALETTE_PRESETS.map((e, t) => (0, a.jsx)(u.Clickable, {
              onClick: () => {
                O(t), R(f.CLAN_BADGE_PALETTE_PRESETS[t])
              },
              className: i()(_.badgeAssetContainer, {
                [_.badgeAssetContainerSelected]: t === v
              }),
              children: (0, a.jsx)(c.ClanBadge, {
                badge: g,
                width: 32,
                height: 32,
                primaryTintColor: e.primary,
                secondaryTintColor: e.secondary
              })
            }, "".concat(e.primary, ":").concat(e.secondary))), (0, a.jsx)(u.Clickable, {
              onClick: () => O(S),
              className: i()(_.badgeAssetContainer, {
                [_.badgeAssetContainerSelected]: S === v
              }),
              children: (0, a.jsx)(o.EyeDropperIcon, {
                width: 20,
                height: 20
              })
            })]
          }), (0, a.jsxs)("div", {
            className: i()(_.customColorPickerContainer, {
              [_.customColorPickerContainerHidden]: !L
            }),
            children: [(0, a.jsx)(d.CustomColorPicker, {
              className: _.colorPicker,
              value: N.primary,
              eagerUpdate: !0,
              wrapperComponentType: "div",
              onChange: e => {
                R(t => ({
                  ...t,
                  primary: (0, r.int2hex)(e)
                }))
              }
            }), (0, a.jsx)(d.CustomColorPicker, {
              className: _.colorPicker,
              value: N.secondary,
              eagerUpdate: !0,
              wrapperComponentType: "div",
              onChange: e => {
                R(t => ({
                  ...t,
                  secondary: (0, r.int2hex)(e)
                }))
              }
            })]
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: _.tagContainer,
        children: [null != p && (0, a.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: C.errorText,
          children: p
        }), (0, a.jsx)(u.TextInput, {
          className: _.tagInputWrapper,
          inputClassName: _.tagInput,
          value: T,
          onChange: e => t({
            tag: e
          }),
          maxLength: E.MAX_TAG_LENGTH,
          placeholder: h.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER,
          prefixElement: (0, a.jsx)(c.ClanBadge, {
            badge: g,
            width: 40,
            height: 40,
            primaryTintColor: M.primary,
            secondaryTintColor: M.secondary
          })
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: h.default.Messages.CLAN_TAG_VALIDATION_RULES
        })]
      })]
    })]
  })
}