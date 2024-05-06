"use strict";
a.r(t), a("47120"), a("315314"), a("610138"), a("216116"), a("78328"), a("815648");
var n = a("735250"),
  i = a("470079"),
  r = a("120356"),
  s = a.n(r),
  l = a("866442"),
  o = a("19602"),
  c = a("481060"),
  d = a("550271"),
  u = a("688298"),
  f = a("116175"),
  m = a("308083"),
  h = a("689938"),
  E = a("765731"),
  T = a("418571");
let p = "clan-badge-render",
  _ = [f.ClanBadgeKind.SWORD, f.ClanBadgeKind.WATER_DROP, f.ClanBadgeKind.SKULL, f.ClanBadgeKind.TOADSTOOL, f.ClanBadgeKind.MOON, f.ClanBadgeKind.LIGHTNING, f.ClanBadgeKind.LEAF, f.ClanBadgeKind.HEART, f.ClanBadgeKind.FIRE, f.ClanBadgeKind.COMPASS, f.ClanBadgeKind.CROSSHAIRS, f.ClanBadgeKind.FLOWER, f.ClanBadgeKind.FORCE, f.ClanBadgeKind.GEM, f.ClanBadgeKind.LAVA, f.ClanBadgeKind.PSYCHIC, f.ClanBadgeKind.SMOKE, f.ClanBadgeKind.SNOW, f.ClanBadgeKind.SOUND, f.ClanBadgeKind.SUN, f.ClanBadgeKind.WIND],
  C = f.CLAN_BADGE_PALETTE_PRESETS.length;
t.default = e => {
  let {
    handleUpdate: t,
    badge: a,
    primaryColor: r,
    secondaryColor: g,
    tag: x,
    error: I,
    furthestStep: v
  } = e, N = i.useRef(null), [A, S] = i.useState(a), [R, L] = i.useState({
    primary: null != r ? r : f.CLAN_BADGE_PRIMARY_DEFAULT,
    secondary: null != g ? g : f.CLAN_BADGE_SECONDARY_DEFAULT
  }), [M, b] = i.useState(() => {
    for (let e = 0; e < f.CLAN_BADGE_PALETTE_PRESETS.length; e++)
      if (f.CLAN_BADGE_PALETTE_PRESETS[e].primary === r && f.CLAN_BADGE_PALETTE_PRESETS[e].secondary === g) return e;
    return C
  }), [j, y] = i.useState(!1), O = C === M ? R : f.CLAN_BADGE_PALETTE_PRESETS[M];
  return i.useEffect(() => {
    if (A === a && O.primary === r && O.secondary === g) return;
    let e = document.querySelector("#".concat(p));
    if (null != e) {
      let a = new XMLSerializer().serializeToString(e),
        n = new Blob([a], {
          type: "image/svg+xml;charset=utf-8"
        }),
        i = URL.createObjectURL(n),
        r = new Image;
      r.width = e.width.baseVal.value, r.height = e.height.baseVal.value, r.onload = function() {
        if (null == N.current) return;
        N.current.width = r.width, N.current.height = r.height;
        let e = N.current.getContext("2d");
        if (null != e) e.drawImage(r, 0, 0), URL.revokeObjectURL(i), t({
          badgeImage: N.current.toDataURL("image/png")
        })
      }, r.src = i
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
  }, [t, A, O.primary, O.secondary, v, a, r, g]), (0, n.jsxs)("div", {
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
            children: _.map(e => (0, n.jsx)(c.Clickable, {
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
                b(t), L(f.CLAN_BADGE_PALETTE_PRESETS[t])
              },
              className: s()(E.badgeAssetContainer, {
                [E.badgeAssetContainerSelected]: t === M
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
                L(t => ({
                  ...t,
                  primary: (0, l.int2hex)(e)
                }))
              },
              onSecondaryColorChange: e => {
                L(t => ({
                  ...t,
                  secondary: (0, l.int2hex)(e)
                }))
              },
              shouldShow: j,
              onRequestClose: () => y(!1),
              children: e => (0, n.jsx)(c.Clickable, {
                ...e,
                onClick: () => {
                  b(C), y(e => !e)
                },
                className: s()(E.badgeAssetContainer, {
                  [E.badgeAssetContainerSelected]: C === M
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
          value: x,
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