"use strict";
s.r(t), s("47120"), s("315314"), s("610138"), s("216116"), s("78328"), s("815648");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("866442"),
  _ = s("19602"),
  r = s("481060"),
  u = s("550271"),
  o = s("688298"),
  T = s("116175"),
  d = s("308083"),
  A = s("689938"),
  I = s("765731"),
  L = s("418571");
let c = "clan-badge-render",
  N = [T.ClanBadgeKind.SWORD, T.ClanBadgeKind.WATER_DROP, T.ClanBadgeKind.SKULL, T.ClanBadgeKind.TOADSTOOL, T.ClanBadgeKind.MOON, T.ClanBadgeKind.LIGHTNING, T.ClanBadgeKind.LEAF, T.ClanBadgeKind.HEART, T.ClanBadgeKind.FIRE, T.ClanBadgeKind.COMPASS, T.ClanBadgeKind.CROSSHAIRS, T.ClanBadgeKind.FLOWER, T.ClanBadgeKind.FORCE, T.ClanBadgeKind.GEM, T.ClanBadgeKind.LAVA, T.ClanBadgeKind.PSYCHIC, T.ClanBadgeKind.SMOKE, T.ClanBadgeKind.SNOW, T.ClanBadgeKind.SOUND, T.ClanBadgeKind.SUN, T.ClanBadgeKind.WIND],
  S = T.CLAN_BADGE_PALETTE_PRESETS.length;
t.default = e => {
  let {
    handleUpdate: t,
    badge: s,
    primaryColor: i,
    secondaryColor: g,
    tag: D,
    error: C,
    furthestStep: f
  } = e, O = n.useRef(null), [G, M] = n.useState(s), [U, R] = n.useState({
    primary: null != i ? i : T.CLAN_BADGE_PRIMARY_DEFAULT,
    secondary: null != g ? g : T.CLAN_BADGE_SECONDARY_DEFAULT
  }), [h, m] = n.useState(() => {
    for (let e = 0; e < T.CLAN_BADGE_PALETTE_PRESETS.length; e++)
      if (T.CLAN_BADGE_PALETTE_PRESETS[e].primary === i && T.CLAN_BADGE_PALETTE_PRESETS[e].secondary === g) return e;
    return S
  }), [p, v] = n.useState(!1), y = S === h ? U : T.CLAN_BADGE_PALETTE_PRESETS[h];
  return n.useEffect(() => {
    if (G === s && y.primary === i && y.secondary === g) return;
    let e = document.querySelector("#".concat(c));
    if (null != e) {
      let s = new XMLSerializer().serializeToString(e),
        a = new Blob([s], {
          type: "image/svg+xml;charset=utf-8"
        }),
        n = URL.createObjectURL(a),
        i = new Image;
      i.width = e.width.baseVal.value, i.height = e.height.baseVal.value, i.onload = function() {
        if (null == O.current) return;
        O.current.width = i.width, O.current.height = i.height;
        let e = O.current.getContext("2d");
        if (null != e) e.drawImage(i, 0, 0), URL.revokeObjectURL(n), t({
          badgeImage: O.current.toDataURL("image/png")
        })
      }, i.src = n
    }
    let a = f === d.ClanSetupSteps.CUSTOMIZE_TAG_BADGE ? {
      brandPrimaryColor: y.primary,
      brandSecondaryColor: y.secondary
    } : {};
    t({
      badgeKind: G,
      badgePrimaryColor: y.primary,
      badgeSecondaryColor: y.secondary,
      ...a
    })
  }, [t, G, y.primary, y.secondary, f, s, i, g]), (0, a.jsxs)("div", {
    className: L.slideContent,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: L.title,
      children: A.default.Messages.CLAN_SETUP_CUSTOMIZE_TITLE
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: L.subtitle,
      children: A.default.Messages.CLAN_SETUP_CUSTOMIZE_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: I.container,
      children: [(0, a.jsxs)("div", {
        className: I.badgesContainer,
        children: [(0, a.jsxs)("div", {
          className: I.pickerContainer,
          children: [(0, a.jsx)(r.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: A.default.Messages.CLAN_BADGE
          }), (0, a.jsx)("div", {
            className: I.pickerGrid,
            children: N.map(e => (0, a.jsx)(r.Clickable, {
              onClick: () => M(e),
              className: E()(I.badgeAssetContainer, {
                [I.badgeAssetContainerSelected]: e === G
              }),
              children: (0, a.jsx)(u.ClanBadge, {
                badge: e,
                width: 32,
                height: 32
              })
            }, "".concat(e)))
          })]
        }), (0, a.jsxs)("div", {
          className: I.pickerContainer,
          children: [(0, a.jsx)(r.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: A.default.Messages.CLAN_BADGE_COLORS
          }), (0, a.jsxs)("div", {
            className: I.pickerGrid,
            children: [T.CLAN_BADGE_PALETTE_PRESETS.map((e, t) => (0, a.jsx)(r.Clickable, {
              onClick: () => {
                m(t), R(T.CLAN_BADGE_PALETTE_PRESETS[t])
              },
              className: E()(I.badgeAssetContainer, {
                [I.badgeAssetContainerSelected]: t === h
              }),
              children: (0, a.jsx)(u.ClanBadge, {
                badge: G,
                width: 32,
                height: 32,
                primaryTintColor: e.primary,
                secondaryTintColor: e.secondary
              })
            }, "".concat(e.primary, ":").concat(e.secondary))), (0, a.jsx)(o.default, {
              showSecondaryColor: T.CLAN_BADGE_NUM_CUSTOMIZABLE_COLORS[G] >= 2,
              palette: U,
              onPrimaryColorChange: e => {
                R(t => ({
                  ...t,
                  primary: (0, l.int2hex)(e)
                }))
              },
              onSecondaryColorChange: e => {
                R(t => ({
                  ...t,
                  secondary: (0, l.int2hex)(e)
                }))
              },
              shouldShow: p,
              onRequestClose: () => v(!1),
              children: e => (0, a.jsx)(r.Clickable, {
                ...e,
                onClick: () => {
                  m(S), v(e => !e)
                },
                className: E()(I.badgeAssetContainer, {
                  [I.badgeAssetContainerSelected]: S === h
                }),
                children: (0, a.jsx)(_.EyeDropperIcon, {
                  width: 20,
                  height: 20
                })
              })
            })]
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: I.tagContainer,
        children: [(0, a.jsx)(r.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: A.default.Messages.CLAN_OVERVIEW_LABEL_CLAN_TAG
        }), null != C && (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: L.errorText,
          children: C
        }), (0, a.jsx)(r.TextInput, {
          className: I.tagInputWrapper,
          inputClassName: I.tagInput,
          value: D,
          onChange: e => t({
            tag: e
          }),
          maxLength: d.MAX_TAG_LENGTH,
          placeholder: A.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER,
          autoFocus: !0,
          prefixElement: (0, a.jsx)(u.ClanBadge, {
            badge: G,
            width: 40,
            height: 40,
            primaryTintColor: y.primary,
            secondaryTintColor: y.secondary
          })
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: I.tagValidationText,
          children: A.default.Messages.CLAN_TAG_VALIDATION_RULES
        }), (0, a.jsxs)("div", {
          style: {
            visibility: "hidden"
          },
          children: [(0, a.jsx)(u.ClanBadge, {
            id: c,
            badge: G,
            width: 64,
            height: 64,
            primaryTintColor: y.primary,
            secondaryTintColor: y.secondary
          }), (0, a.jsx)("canvas", {
            ref: O,
            id: "png-render-canvas"
          })]
        })]
      })]
    })]
  })
}