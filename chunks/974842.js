"use strict";
n.r(t), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("866442"),
  o = n("19602"),
  u = n("481060"),
  d = n("550271"),
  c = n("688298"),
  f = n("116175"),
  E = n("308083"),
  h = n("689938"),
  _ = n("765731"),
  C = n("418571");
let m = "clan-badge-render",
  S = [f.ClanBadgeKind.SWORD, f.ClanBadgeKind.WATER_DROP, f.ClanBadgeKind.SKULL, f.ClanBadgeKind.TOADSTOOL, f.ClanBadgeKind.MOON, f.ClanBadgeKind.LIGHTNING, f.ClanBadgeKind.LEAF, f.ClanBadgeKind.HEART, f.ClanBadgeKind.FIRE, f.ClanBadgeKind.COMPASS, f.ClanBadgeKind.SWORD_10, f.ClanBadgeKind.SWORD_11, f.ClanBadgeKind.SWORD_12, f.ClanBadgeKind.SWORD_13, f.ClanBadgeKind.SWORD_14, f.ClanBadgeKind.SWORD_15, f.ClanBadgeKind.SWORD_16, f.ClanBadgeKind.SWORD_17, f.ClanBadgeKind.SWORD_18, f.ClanBadgeKind.SWORD_19, f.ClanBadgeKind.SWORD_20],
  p = f.CLAN_BADGE_PALETTE_PRESETS.length;
t.default = e => {
  let {
    handleUpdate: t,
    badge: n,
    primaryColor: l,
    secondaryColor: I,
    tag: g,
    error: T,
    furthestStep: A
  } = e, N = s.useRef(null), [v, L] = s.useState(n), [R, O] = s.useState({
    primary: l,
    secondary: I
  }), [M, P] = s.useState(() => {
    for (let e = 0; e < f.CLAN_BADGE_PALETTE_PRESETS.length; e++)
      if (f.CLAN_BADGE_PALETTE_PRESETS[e].primary === l && f.CLAN_BADGE_PALETTE_PRESETS[e].secondary === I) return e;
    return p
  }), [y, x] = s.useState(!1), D = p === M ? R : f.CLAN_BADGE_PALETTE_PRESETS[M];
  return s.useEffect(() => {
    if (v === n && D.primary === l && D.secondary === I) return;
    let e = document.querySelector("#".concat(m));
    if (null != e) {
      let n = new XMLSerializer().serializeToString(e),
        a = new Blob([n], {
          type: "image/svg+xml;charset=utf-8"
        }),
        s = URL.createObjectURL(a),
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
    let a = A === E.ClanSetupSteps.CUSTOMIZE_TAG_BADGE ? {
      brandPrimaryColor: D.primary,
      brandSecondaryColor: D.secondary
    } : {};
    t({
      badgeKind: v,
      badgePrimaryColor: D.primary,
      badgeSecondaryColor: D.secondary,
      ...a
    })
  }, [t, v, D.primary, D.secondary, A, n, l, I]), (0, a.jsxs)("div", {
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
            children: S.map(e => (0, a.jsx)(u.Clickable, {
              onClick: () => L(e),
              className: i()(_.badgeAssetContainer, {
                [_.badgeAssetContainerSelected]: e === v
              }),
              children: (0, a.jsx)(d.ClanBadge, {
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
                P(t), O(f.CLAN_BADGE_PALETTE_PRESETS[t])
              },
              className: i()(_.badgeAssetContainer, {
                [_.badgeAssetContainerSelected]: t === M
              }),
              children: (0, a.jsx)(d.ClanBadge, {
                badge: v,
                width: 32,
                height: 32,
                primaryTintColor: e.primary,
                secondaryTintColor: e.secondary
              })
            }, "".concat(e.primary, ":").concat(e.secondary))), (0, a.jsx)(c.default, {
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
              children: e => (0, a.jsx)(u.Clickable, {
                ...e,
                onClick: () => {
                  P(p), x(e => !e)
                },
                className: i()(_.badgeAssetContainer, {
                  [_.badgeAssetContainerSelected]: p === M
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
        className: _.tagContainer,
        children: [null != T && (0, a.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: C.errorText,
          children: T
        }), (0, a.jsx)(u.TextInput, {
          className: _.tagInputWrapper,
          inputClassName: _.tagInput,
          value: g,
          onChange: e => t({
            tag: e
          }),
          maxLength: E.MAX_TAG_LENGTH,
          placeholder: h.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER,
          prefixElement: (0, a.jsx)(d.ClanBadge, {
            badge: v,
            width: 40,
            height: 40,
            primaryTintColor: D.primary,
            secondaryTintColor: D.secondary
          })
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: h.default.Messages.CLAN_TAG_VALIDATION_RULES
        }), (0, a.jsxs)("div", {
          style: {
            visibility: "hidden"
          },
          children: [(0, a.jsx)(d.ClanBadge, {
            id: m,
            badge: v,
            width: 64,
            height: 64,
            primaryTintColor: D.primary,
            secondaryTintColor: D.secondary
          }), (0, a.jsx)("canvas", {
            ref: N,
            id: "png-render-canvas"
          })]
        })]
      })]
    })]
  })
}