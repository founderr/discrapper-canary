"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("989600"),
  o = n("727075"),
  u = n("793030"),
  d = n("524437"),
  c = n("692547"),
  f = n("481060"),
  E = n("230711"),
  h = n("100527"),
  _ = n("906732"),
  C = n("605236"),
  S = n("903958"),
  m = n("153850"),
  I = n("641826"),
  p = n("635869"),
  T = n("232700"),
  g = n("981631"),
  A = n("921944"),
  N = n("689938"),
  O = n("127906");
let R = "https://www.youtube.com/embed/".concat(T.LOOTBOX_VIDEO_ID, "?autoplay=1&mute=1&controls=0&loop=1&playlist=").concat(T.LOOTBOX_VIDEO_ID, "&origin=https://").concat(g.PRIMARY_DOMAIN);

function v() {
  let [e, t] = s.useState(!1), n = (0, I.useShouldShowMainLootboxEntrypoint)("lootbox_entrypoint"), l = !(0, C.useIsDismissibleContentDismissed)(d.DismissibleContent.LOOTBOXES_ENTRYPOINT), {
    analyticsLocations: v
  } = (0, _.default)(h.default.LOOTBOXES_UPSELL), L = e => {
    (0, C.markDismissibleContentAsDismissed)(d.DismissibleContent.LOOTBOXES_ENTRYPOINT, {
      dismissAction: e
    })
  };
  return n && l ? (0, a.jsx)(m.default, {
    children: (0, a.jsxs)("div", {
      className: i()(O.wrapper, e ? O.wrapperHovered : null),
      onMouseLeave: () => t(!1),
      children: [(0, a.jsxs)(f.Clickable, {
        className: O.closeButton,
        onClick: () => L(A.ContentDismissActionType.DISMISS),
        children: [(0, a.jsx)(o.CloseSmallIcon, {
          className: O.closeIcon,
          color: c.default.colors.WHITE
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/bold",
          color: "always-white",
          children: N.default.Messages.PACKAGES_ENTRYPOINT_CLOSE
        })]
      }), (0, a.jsxs)("div", {
        className: O.contentWrapper,
        children: [(0, a.jsx)("div", {
          className: O.videoWrapper,
          children: (0, a.jsx)("iframe", {
            className: O.video,
            src: R,
            sandbox: "allow-same-origin allow-scripts allow-popups"
          })
        }), (0, a.jsxs)(f.Clickable, {
          className: O.entrypoint,
          onClick: () => {
            L(A.ContentDismissActionType.PRIMARY), E.default.open(g.UserSettingsSections.LOOTBOXES, null, {
              analyticsLocations: v
            })
          },
          onMouseEnter: () => t(!0),
          children: [(0, a.jsx)("div", {
            className: O.backgroundWrapper,
            children: (0, a.jsx)(p.default, {
              className: O.backgroundImage,
              pageMultiplier: 5
            })
          }), (0, a.jsx)(S.default, {
            className: O.animation,
            importData: I.importLootboxAnimationData,
            nextScene: T.BoxAnimationScenes.IDLE,
            sceneSegments: T.BoxAnimationSceneSegments
          }), (0, a.jsxs)("div", {
            className: O.body,
            children: [(0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              color: "always-white",
              children: N.default.Messages.PACKAGES_ENTRYPOINT_TITLE
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: N.default.Messages.PACKAGES_ENTRYPOINT_DESCRIPTION
            })]
          }), (0, a.jsx)("div", {
            className: O.buttonWrapper,
            children: (0, a.jsx)("div", {
              className: O.iconButton,
              children: (0, a.jsx)(r.ArrowLargeRightIcon, {
                className: O.buttonIcon,
                color: c.default.colors.WHITE
              })
            })
          })]
        })]
      })]
    })
  }) : null
}