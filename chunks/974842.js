"use strict";
a.r(t), a("47120"), a("315314"), a("610138"), a("216116"), a("78328"), a("815648");
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  s = a.n(i),
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
let p = "clan-badge-render",
  C = [f.ClanBadgeKind.SWORD, f.ClanBadgeKind.WATER_DROP, f.ClanBadgeKind.SKULL, f.ClanBadgeKind.TOADSTOOL, f.ClanBadgeKind.MOON, f.ClanBadgeKind.LIGHTNING, f.ClanBadgeKind.LEAF, f.ClanBadgeKind.HEART, f.ClanBadgeKind.FIRE, f.ClanBadgeKind.COMPASS, f.ClanBadgeKind.CROSSHAIRS, f.ClanBadgeKind.FLOWER, f.ClanBadgeKind.FORCE, f.ClanBadgeKind.GEM, f.ClanBadgeKind.LAVA, f.ClanBadgeKind.PSYCHIC, f.ClanBadgeKind.SMOKE, f.ClanBadgeKind.SNOW, f.ClanBadgeKind.SOUND, f.ClanBadgeKind.SUN, f.ClanBadgeKind.WIND],
  _ = f.CLAN_BADGE_PALETTE_PRESETS.length;
t.default = e => {
  let {
    handleUpdate: t,
    badge: a,
    primaryColor: i,
    secondaryColor: x,
    tag: g,
    error: I,
    furthestStep: v
  } = e, N = r.useRef(null), [A, S] = r.useState(a), [R, M] = r.useState({
    primary: null != i ? i : f.CLAN_BADGE_PRIMARY_DEFAULT,
    secondary: null != x ? x : f.CLAN_BADGE_SECONDARY_DEFAULT
  }), [L, y] = r.useState(() => {
    for (let e = 0; e < f.CLAN_BADGE_PALETTE_PRESETS.length; e++)
      if (f.CLAN_BADGE_PALETTE_PRESETS[e].primary === i && f.CLAN_BADGE_PALETTE_PRESETS[e].secondary === x) return e;
    return _
  }), [b, j] = r.useState(!1), O = _ === L ? R : f.CLAN_BADGE_PALETTE_PRESETS[L];
  return r.useEffect(() => {
    if (A === a && O.primary === i && O.secondary === x) return;
    let e = document.querySelector("#".concat(p));
    if (null != e) {
      let a = new XMLSerializer().serializeToString(e),
        n = new Blob([a], {
          type: "image/svg+xml;charset=utf-8"
        }),
        r = URL.createObjectURL(n),
        i = new Image;
      i.width = e.width.baseVal.value, i.height = e.height.baseVal.value, i.onload = function() {
        if (null == N.current) return;
        N.current.width = i.width, N.current.height = i.height;
        let e = N.current.getContext("2d");
        if (null != e) e.drawImage(i, 0, 0), URL.revokeObjectURL(r), t({
          badgeImage: N.current.toDataURL("image/png")
        })
      }, i.src = r
    }
    let n = v === m.ClanSetupSteps.CUSTOMIZE_TAG_BADGE ? {
      brandPrimaryColor: O.primary,
      brandSecondaryColor: O.secondary
    } : {};
    t({
      badgeKind: A,
      badgePrimaryColor: O.primary,
      badgeSecondaryColor: O.secondary,
      ...n
    })
  }, [t, A, O.primary, O.secondary, v, a, i, x]), (0, n.jsxs)("div", {
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
            children: C.map(e => (0, n.jsx)(c.Clickable, {
              onClick: () => S(e),
              className: s()(E.badgeAssetContainer, {
                [E.badgeAssetContainerSelected]: e === A
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
            children: [f.CLAN_BADGE_PALETTE_PRESETS.map((e, t) => (0, n.jsx)(c.Clickable, {
              onClick: () => {
                y(t), M(f.CLAN_BADGE_PALETTE_PRESETS[t])
              },
              className: s()(E.badgeAssetContainer, {
                [E.badgeAssetContainerSelected]: t === L
              }),
              children: (0, n.jsx)(d.ClanBadge, {
                badge: A,
                width: 32,
                height: 32,
                primaryTintColor: e.primary,
                secondaryTintColor: e.secondary
              })
            }, "".concat(e.primary, ":").concat(e.secondary))), (0, n.jsx)(u.default, {
              showSecondaryColor: f.CLAN_BADGE_NUM_CUSTOMIZABLE_COLORS[A] >= 2,
              palette: R,
              onPrimaryColorChange: e => {
                M(t => ({
                  ...t,
                  primary: (0, l.int2hex)(e)
                }))
              },
              onSecondaryColorChange: e => {
                M(t => ({
                  ...t,
                  secondary: (0, l.int2hex)(e)
                }))
              },
              shouldShow: b,
              onRequestClose: () => j(!1),
              children: e => (0, n.jsx)(c.Clickable, {
                ...e,
                onClick: () => {
                  y(_), j(e => !e)
                },
                className: s()(E.badgeAssetContainer, {
                  [E.badgeAssetContainerSelected]: _ === L
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
        }), null != I && (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: T.errorText,
          children: I
        }), (0, n.jsx)(c.TextInput, {
          className: E.tagInputWrapper,
          inputClassName: E.tagInput,
          value: g,
          onChange: e => t({
            tag: e
          }),
          maxLength: m.MAX_TAG_LENGTH,
          placeholder: h.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER,
          autoFocus: !0,
          prefixElement: (0, n.jsx)(d.ClanBadge, {
            badge: A,
            width: 40,
            height: 40,
            primaryTintColor: O.primary,
            secondaryTintColor: O.secondary
          })
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: E.tagValidationText,
          children: h.default.Messages.CLAN_TAG_VALIDATION_RULES
        }), (0, n.jsxs)("div", {
          style: {
            visibility: "hidden"
          },
          children: [(0, n.jsx)(d.ClanBadge, {
            id: p,
            badge: A,
            width: 64,
            height: 64,
            primaryTintColor: O.primary,
            secondaryTintColor: O.secondary
          }), (0, n.jsx)("canvas", {
            ref: N,
            id: "png-render-canvas"
          })]
        })]
      })]
    })]
  })
}