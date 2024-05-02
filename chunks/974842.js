"use strict";
n.r(t), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648");
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("866442"),
  o = n("19602"),
  c = n("481060"),
  d = n("550271"),
  u = n("688298"),
  f = n("116175"),
  m = n("308083"),
  h = n("689938"),
  p = n("765731"),
  E = n("418571");
let T = "clan-badge-render",
  C = [f.ClanBadgeKind.SWORD, f.ClanBadgeKind.WATER_DROP, f.ClanBadgeKind.SKULL, f.ClanBadgeKind.TOADSTOOL, f.ClanBadgeKind.MOON, f.ClanBadgeKind.LIGHTNING, f.ClanBadgeKind.LEAF, f.ClanBadgeKind.HEART, f.ClanBadgeKind.FIRE, f.ClanBadgeKind.COMPASS, f.ClanBadgeKind.CROSSHAIRS, f.ClanBadgeKind.FLOWER, f.ClanBadgeKind.FORCE, f.ClanBadgeKind.GEM, f.ClanBadgeKind.LAVA, f.ClanBadgeKind.PSYCHIC, f.ClanBadgeKind.SMOKE, f.ClanBadgeKind.SNOW, f.ClanBadgeKind.SOUND, f.ClanBadgeKind.SUN, f.ClanBadgeKind.WIND],
  _ = f.CLAN_BADGE_PALETTE_PRESETS.length;
t.default = e => {
  let {
    handleUpdate: t,
    badge: n,
    primaryColor: s,
    secondaryColor: g,
    tag: x,
    error: I,
    furthestStep: N
  } = e, v = r.useRef(null), [A, S] = r.useState(n), [L, R] = r.useState({
    primary: null != s ? s : f.CLAN_BADGE_PRIMARY_DEFAULT,
    secondary: null != g ? g : f.CLAN_BADGE_SECONDARY_DEFAULT
  }), [y, b] = r.useState(() => {
    for (let e = 0; e < f.CLAN_BADGE_PALETTE_PRESETS.length; e++)
      if (f.CLAN_BADGE_PALETTE_PRESETS[e].primary === s && f.CLAN_BADGE_PALETTE_PRESETS[e].secondary === g) return e;
    return _
  }), [j, M] = r.useState(!1), O = _ === y ? L : f.CLAN_BADGE_PALETTE_PRESETS[y];
  return r.useEffect(() => {
    if (A === n && O.primary === s && O.secondary === g) return;
    let e = document.querySelector("#".concat(T));
    if (null != e) {
      let n = new XMLSerializer().serializeToString(e),
        a = new Blob([n], {
          type: "image/svg+xml;charset=utf-8"
        }),
        r = URL.createObjectURL(a),
        s = new Image;
      s.width = e.width.baseVal.value, s.height = e.height.baseVal.value, s.onload = function() {
        if (null == v.current) return;
        v.current.width = s.width, v.current.height = s.height;
        let e = v.current.getContext("2d");
        if (null != e) e.drawImage(s, 0, 0), URL.revokeObjectURL(r), t({
          badgeImage: v.current.toDataURL("image/png")
        })
      }, s.src = r
    }
    let a = N === m.ClanSetupSteps.CUSTOMIZE_TAG_BADGE ? {
      brandPrimaryColor: O.primary,
      brandSecondaryColor: O.secondary
    } : {};
    t({
      badgeKind: A,
      badgePrimaryColor: O.primary,
      badgeSecondaryColor: O.secondary,
      ...a
    })
  }, [t, A, O.primary, O.secondary, N, n, s, g]), (0, a.jsxs)("div", {
    className: E.slideContent,
    children: [(0, a.jsx)(c.Heading, {
      variant: "heading-xxl/medium",
      className: E.title,
      children: h.default.Messages.CLAN_SETUP_CUSTOMIZE_TITLE
    }), (0, a.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: E.subtitle,
      children: h.default.Messages.CLAN_SETUP_CUSTOMIZE_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: p.container,
      children: [(0, a.jsxs)("div", {
        className: p.badgesContainer,
        children: [(0, a.jsxs)("div", {
          className: p.pickerContainer,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: h.default.Messages.CLAN_BADGE
          }), (0, a.jsx)("div", {
            className: p.pickerGrid,
            children: C.map(e => (0, a.jsx)(c.Clickable, {
              onClick: () => S(e),
              className: i()(p.badgeAssetContainer, {
                [p.badgeAssetContainerSelected]: e === A
              }),
              children: (0, a.jsx)(d.ClanBadge, {
                badge: e,
                width: 32,
                height: 32
              })
            }, "".concat(e)))
          })]
        }), (0, a.jsxs)("div", {
          className: p.pickerContainer,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: h.default.Messages.CLAN_BADGE_COLORS
          }), (0, a.jsxs)("div", {
            className: p.pickerGrid,
            children: [f.CLAN_BADGE_PALETTE_PRESETS.map((e, t) => (0, a.jsx)(c.Clickable, {
              onClick: () => {
                b(t), R(f.CLAN_BADGE_PALETTE_PRESETS[t])
              },
              className: i()(p.badgeAssetContainer, {
                [p.badgeAssetContainerSelected]: t === y
              }),
              children: (0, a.jsx)(d.ClanBadge, {
                badge: A,
                width: 32,
                height: 32,
                primaryTintColor: e.primary,
                secondaryTintColor: e.secondary
              })
            }, "".concat(e.primary, ":").concat(e.secondary))), (0, a.jsx)(u.default, {
              showSecondaryColor: f.CLAN_BADGE_NUM_CUSTOMIZABLE_COLORS[A] >= 2,
              palette: L,
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
              shouldShow: j,
              onRequestClose: () => M(!1),
              children: e => (0, a.jsx)(c.Clickable, {
                ...e,
                onClick: () => {
                  b(_), M(e => !e)
                },
                className: i()(p.badgeAssetContainer, {
                  [p.badgeAssetContainerSelected]: _ === y
                }),
                children: (0, a.jsx)(o.EyeDropperIcon, {
                  width: 20,
                  height: 20
                })
              })
            })]
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: p.tagContainer,
        children: [null != I && (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: E.errorText,
          children: I
        }), (0, a.jsx)(c.TextInput, {
          className: p.tagInputWrapper,
          inputClassName: p.tagInput,
          value: x,
          onChange: e => t({
            tag: e
          }),
          maxLength: m.MAX_TAG_LENGTH,
          placeholder: h.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER,
          prefixElement: (0, a.jsx)(d.ClanBadge, {
            badge: A,
            width: 40,
            height: 40,
            primaryTintColor: O.primary,
            secondaryTintColor: O.secondary
          })
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: h.default.Messages.CLAN_TAG_VALIDATION_RULES
        }), (0, a.jsxs)("div", {
          style: {
            visibility: "hidden"
          },
          children: [(0, a.jsx)(d.ClanBadge, {
            id: T,
            badge: A,
            width: 64,
            height: 64,
            primaryTintColor: O.primary,
            secondaryTintColor: O.secondary
          }), (0, a.jsx)("canvas", {
            ref: v,
            id: "png-render-canvas"
          })]
        })]
      })]
    })]
  })
}