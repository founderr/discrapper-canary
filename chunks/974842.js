"use strict";
a.r(t), a("47120"), a("315314"), a("610138"), a("216116"), a("78328"), a("815648");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("866442"),
  o = a("19602"),
  u = a("481060"),
  d = a("550271"),
  c = a("688298"),
  f = a("116175"),
  E = a("308083"),
  h = a("689938"),
  _ = a("765731"),
  C = a("418571");
let m = "clan-badge-render",
  S = [f.ClanBadgeKind.SWORD, f.ClanBadgeKind.WATER_DROP, f.ClanBadgeKind.SKULL, f.ClanBadgeKind.TOADSTOOL, f.ClanBadgeKind.MOON, f.ClanBadgeKind.LIGHTNING, f.ClanBadgeKind.LEAF, f.ClanBadgeKind.HEART, f.ClanBadgeKind.FIRE, f.ClanBadgeKind.COMPASS, f.ClanBadgeKind.SWORD_10, f.ClanBadgeKind.SWORD_11, f.ClanBadgeKind.SWORD_12, f.ClanBadgeKind.SWORD_13, f.ClanBadgeKind.SWORD_14, f.ClanBadgeKind.SWORD_15, f.ClanBadgeKind.SWORD_16, f.ClanBadgeKind.SWORD_17, f.ClanBadgeKind.SWORD_18, f.ClanBadgeKind.SWORD_19, f.ClanBadgeKind.SWORD_20],
  p = f.CLAN_BADGE_PALETTE_PRESETS.length;
t.default = e => {
  let {
    handleUpdate: t,
    badge: a,
    primaryColor: l,
    secondaryColor: I,
    tag: T,
    error: g,
    furthestStep: A
  } = e, N = s.useRef(null), [v, L] = s.useState(a), [R, O] = s.useState({
    primary: l,
    secondary: I
  }), [M, P] = s.useState(() => {
    for (let e = 0; e < f.CLAN_BADGE_PALETTE_PRESETS.length; e++)
      if (f.CLAN_BADGE_PALETTE_PRESETS[e].primary === l && f.CLAN_BADGE_PALETTE_PRESETS[e].secondary === I) return e;
    return p
  }), [y, x] = s.useState(!1), D = p === M ? R : f.CLAN_BADGE_PALETTE_PRESETS[M];
  return s.useEffect(() => {
    if (v === a && D.primary === l && D.secondary === I) return;
    let e = document.querySelector("#".concat(m));
    if (null != e) {
      let a = new XMLSerializer().serializeToString(e),
        n = new Blob([a], {
          type: "image/svg+xml;charset=utf-8"
        }),
        s = URL.createObjectURL(n),
        l = new Image;
      l.width = e.width.baseVal.value, l.height = e.height.baseVal.value, l.onload = function() {
        if (null == N.current) return;
        N.current.width = l.width, N.current.height = l.height;
        let e = N.current.getContext("2d");
        if (null != e) e.drawImage(l, 0, 0), URL.revokeObjectURL(s), t({
          badgeImage: N.current.toDataURL("image/png")
        })
      }, l.src = s
    }
    let n = A === E.ClanSetupSteps.CUSTOMIZE_TAG_BADGE ? {
      brandPrimaryColor: D.primary,
      brandSecondaryColor: D.secondary
    } : {};
    t({
      badgeKind: v,
      badgePrimaryColor: D.primary,
      badgeSecondaryColor: D.secondary,
      ...n
    })
  }, [t, v, D.primary, D.secondary, A, a, l, I]), (0, n.jsxs)("div", {
    className: C.slideContent,
    children: [(0, n.jsx)(u.Heading, {
      variant: "heading-xxl/medium",
      className: C.title,
      children: h.default.Messages.CLAN_SETUP_CUSTOMIZE_TITLE
    }), (0, n.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: C.subtitle,
      children: h.default.Messages.CLAN_SETUP_CUSTOMIZE_SUBTITLE
    }), (0, n.jsxs)("div", {
      className: _.container,
      children: [(0, n.jsxs)("div", {
        className: _.badgesContainer,
        children: [(0, n.jsxs)("div", {
          className: _.pickerContainer,
          children: [(0, n.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: h.default.Messages.CLAN_BADGE
          }), (0, n.jsx)("div", {
            className: _.pickerGrid,
            children: S.map(e => (0, n.jsx)(u.Clickable, {
              onClick: () => L(e),
              className: i()(_.badgeAssetContainer, {
                [_.badgeAssetContainerSelected]: e === v
              }),
              children: (0, n.jsx)(d.ClanBadge, {
                badge: e,
                width: 32,
                height: 32
              })
            }, "".concat(e)))
          })]
        }), (0, n.jsxs)("div", {
          className: _.pickerContainer,
          children: [(0, n.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: h.default.Messages.CLAN_BADGE_COLORS
          }), (0, n.jsxs)("div", {
            className: _.pickerGrid,
            children: [f.CLAN_BADGE_PALETTE_PRESETS.map((e, t) => (0, n.jsx)(u.Clickable, {
              onClick: () => {
                P(t), O(f.CLAN_BADGE_PALETTE_PRESETS[t])
              },
              className: i()(_.badgeAssetContainer, {
                [_.badgeAssetContainerSelected]: t === M
              }),
              children: (0, n.jsx)(d.ClanBadge, {
                badge: v,
                width: 32,
                height: 32,
                primaryTintColor: e.primary,
                secondaryTintColor: e.secondary
              })
            }, "".concat(e.primary, ":").concat(e.secondary))), (0, n.jsx)(c.default, {
              showSecondaryColor: f.CLAN_BADGE_NUM_CUSTOMIZABLE_COLORS[v] >= 2,
              palette: R,
              onPrimaryColorChange: e => {
                O(t => ({
                  ...t,
                  primary: (0, r.int2hex)(e)
                }))
              },
              onSecondaryColorChange: e => {
                O(t => ({
                  ...t,
                  secondary: (0, r.int2hex)(e)
                }))
              },
              shouldShow: y,
              onRequestClose: () => x(!1),
              children: e => (0, n.jsx)(u.Clickable, {
                ...e,
                onClick: () => {
                  P(p), x(e => !e)
                },
                className: i()(_.badgeAssetContainer, {
                  [_.badgeAssetContainerSelected]: p === M
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
        className: _.tagContainer,
        children: [null != g && (0, n.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: C.errorText,
          children: g
        }), (0, n.jsx)(u.TextInput, {
          className: _.tagInputWrapper,
          inputClassName: _.tagInput,
          value: T,
          onChange: e => t({
            tag: e
          }),
          maxLength: E.MAX_TAG_LENGTH,
          placeholder: h.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER,
          prefixElement: (0, n.jsx)(d.ClanBadge, {
            badge: v,
            width: 40,
            height: 40,
            primaryTintColor: D.primary,
            secondaryTintColor: D.secondary
          })
        }), (0, n.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: h.default.Messages.CLAN_TAG_VALIDATION_RULES
        }), (0, n.jsxs)("div", {
          style: {
            visibility: "hidden"
          },
          children: [(0, n.jsx)(d.ClanBadge, {
            id: m,
            badge: v,
            width: 64,
            height: 64,
            primaryTintColor: D.primary,
            secondaryTintColor: D.secondary
          }), (0, n.jsx)("canvas", {
            ref: N,
            id: "png-render-canvas"
          })]
        })]
      })]
    })]
  })
}