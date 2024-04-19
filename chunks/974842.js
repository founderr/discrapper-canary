"use strict";
n.r(t), n("47120"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
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
let m = "clan-badge-render",
  S = [f.ClanBadgeKind.SWORD, f.ClanBadgeKind.SWORD_1, f.ClanBadgeKind.SWORD_2, f.ClanBadgeKind.SWORD_3, f.ClanBadgeKind.SWORD_4, f.ClanBadgeKind.SWORD_5, f.ClanBadgeKind.SWORD_6, f.ClanBadgeKind.SWORD_7, f.ClanBadgeKind.SWORD_8, f.ClanBadgeKind.SWORD_9, f.ClanBadgeKind.SWORD_10, f.ClanBadgeKind.SWORD_11, f.ClanBadgeKind.SWORD_12, f.ClanBadgeKind.SWORD_13, f.ClanBadgeKind.SWORD_14, f.ClanBadgeKind.SWORD_15, f.ClanBadgeKind.SWORD_16, f.ClanBadgeKind.SWORD_17, f.ClanBadgeKind.SWORD_18, f.ClanBadgeKind.SWORD_19, f.ClanBadgeKind.SWORD_20],
  I = f.CLAN_BADGE_PALETTE_PRESETS.length;
t.default = e => {
  let {
    handleUpdate: t,
    badge: n,
    primaryColor: l,
    secondaryColor: p,
    tag: T,
    error: g,
    furthestStep: A
  } = e, N = s.useRef(null), [v, R] = s.useState(n), [O, L] = s.useState({
    primary: l,
    secondary: p
  }), [P, M] = s.useState(() => {
    for (let e = 0; e < f.CLAN_BADGE_PALETTE_PRESETS.length; e++)
      if (f.CLAN_BADGE_PALETTE_PRESETS[e].primary === l && f.CLAN_BADGE_PALETTE_PRESETS[e].secondary === p) return e;
    return I
  }), x = I === P, y = x ? O : f.CLAN_BADGE_PALETTE_PRESETS[P];
  return s.useEffect(() => {
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
    let n = A === E.ClanSetupSteps.CUSTOMIZE_TAG_BADGE ? {
      brandPrimaryColor: y.primary,
      brandSecondaryColor: y.secondary
    } : {};
    t({
      badgeKind: v,
      badgePrimaryColor: y.primary,
      badgeSecondaryColor: y.secondary,
      ...n
    })
  }, [t, v, y.primary, y.secondary, A]), (0, a.jsxs)("div", {
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
              onClick: () => R(e),
              className: i()(_.badgeAssetContainer, {
                [_.badgeAssetContainerSelected]: e === v
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
                M(t), L(f.CLAN_BADGE_PALETTE_PRESETS[t])
              },
              className: i()(_.badgeAssetContainer, {
                [_.badgeAssetContainerSelected]: t === P
              }),
              children: (0, a.jsx)(c.ClanBadge, {
                badge: v,
                width: 32,
                height: 32,
                primaryTintColor: e.primary,
                secondaryTintColor: e.secondary
              })
            }, "".concat(e.primary, ":").concat(e.secondary))), (0, a.jsx)(u.Clickable, {
              onClick: () => M(I),
              className: i()(_.badgeAssetContainer, {
                [_.badgeAssetContainerSelected]: I === P
              }),
              children: (0, a.jsx)(o.EyeDropperIcon, {
                width: 20,
                height: 20
              })
            })]
          }), (0, a.jsxs)("div", {
            className: i()(_.customColorPickerContainer, {
              [_.customColorPickerContainerHidden]: !x
            }),
            children: [(0, a.jsx)(d.CustomColorPicker, {
              className: _.colorPicker,
              value: O.primary,
              eagerUpdate: !0,
              wrapperComponentType: "div",
              onChange: e => {
                L(t => ({
                  ...t,
                  primary: (0, r.int2hex)(e)
                }))
              }
            }), (0, a.jsx)(d.CustomColorPicker, {
              className: _.colorPicker,
              value: O.secondary,
              eagerUpdate: !0,
              wrapperComponentType: "div",
              onChange: e => {
                L(t => ({
                  ...t,
                  secondary: (0, r.int2hex)(e)
                }))
              }
            })]
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: _.tagContainer,
        children: [null != g && (0, a.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: C.errorText,
          children: g
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
            badge: v,
            width: 40,
            height: 40,
            primaryTintColor: y.primary,
            secondaryTintColor: y.secondary
          })
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: h.default.Messages.CLAN_TAG_VALIDATION_RULES
        }), (0, a.jsxs)("div", {
          style: {
            visibility: "hidden"
          },
          children: [(0, a.jsx)(c.ClanBadge, {
            id: m,
            badge: v,
            width: 16,
            height: 16,
            primaryTintColor: y.primary,
            secondaryTintColor: y.secondary
          }), (0, a.jsx)("canvas", {
            ref: N,
            id: "png-render-canvas"
          })]
        })]
      })]
    })]
  })
}