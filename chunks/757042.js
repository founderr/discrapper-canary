"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
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
  h = n("605236"),
  _ = n("903958"),
  C = n("153850"),
  S = n("641826"),
  m = n("635869"),
  I = n("232700"),
  p = n("981631"),
  T = n("921944"),
  g = n("689938"),
  A = n("127906");
let N = "https://www.youtube.com/embed/".concat(I.LOOTBOX_VIDEO_ID, "?autoplay=1&mute=1&controls=0&loop=1&playlist=").concat(I.LOOTBOX_VIDEO_ID, "&origin=https://").concat(p.PRIMARY_DOMAIN);

function R() {
  let [e, t] = s.useState(!1), n = (0, S.useShouldShowMainLootboxEntrypoint)("lootbox_entrypoint"), l = !(0, h.useIsDismissibleContentDismissed)(d.DismissibleContent.LOOTBOXES_ENTRYPOINT), R = e => {
    (0, h.markDismissibleContentAsDismissed)(d.DismissibleContent.LOOTBOXES_ENTRYPOINT, {
      dismissAction: e
    })
  };
  return n && l ? (0, a.jsx)(C.default, {
    children: (0, a.jsxs)("div", {
      className: i()(A.wrapper, e ? A.wrapperHovered : null),
      onMouseLeave: () => t(!1),
      children: [(0, a.jsxs)(f.Clickable, {
        className: A.closeButton,
        onClick: () => R(T.ContentDismissActionType.DISMISS),
        children: [(0, a.jsx)(o.CloseSmallIcon, {
          className: A.closeIcon,
          color: c.default.colors.WHITE
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/bold",
          color: "always-white",
          children: g.default.Messages.PACKAGES_ENTRYPOINT_CLOSE
        })]
      }), (0, a.jsxs)("div", {
        className: A.contentWrapper,
        children: [(0, a.jsx)("div", {
          className: A.videoWrapper,
          children: (0, a.jsx)("iframe", {
            className: A.video,
            src: N,
            sandbox: "allow-same-origin allow-scripts allow-popups"
          })
        }), (0, a.jsxs)(f.Clickable, {
          className: A.entrypoint,
          onClick: () => {
            R(T.ContentDismissActionType.PRIMARY), E.default.open(p.UserSettingsSections.LOOTBOXES)
          },
          onMouseEnter: () => t(!0),
          children: [(0, a.jsx)("div", {
            className: A.backgroundWrapper,
            children: (0, a.jsx)(m.default, {
              className: A.backgroundImage,
              pageMultiplier: 5
            })
          }), (0, a.jsx)(_.default, {
            className: A.animation,
            importData: S.importLootboxAnimationData,
            nextScene: I.BoxAnimationScenes.IDLE,
            sceneSegments: I.BoxAnimationSceneSegments
          }), (0, a.jsxs)("div", {
            className: A.body,
            children: [(0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              color: "always-white",
              children: g.default.Messages.PACKAGES_ENTRYPOINT_TITLE
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: g.default.Messages.PACKAGES_ENTRYPOINT_DESCRIPTION
            })]
          }), (0, a.jsx)("div", {
            className: A.buttonWrapper,
            children: (0, a.jsx)("div", {
              className: A.iconButton,
              children: (0, a.jsx)(r.ArrowLargeRightIcon, {
                className: A.buttonIcon,
                color: c.default.colors.WHITE
              })
            })
          })]
        })]
      })]
    })
  }) : null
}