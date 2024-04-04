"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
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
  I = n("810090"),
  p = n("641826"),
  T = n("635869"),
  g = n("232700"),
  A = n("981631"),
  N = n("921944"),
  R = n("689938"),
  O = n("127906");
let v = n("205281");

function L() {
  let [e, t] = s.useState(!1), n = (0, p.useShouldShowMainLootboxEntrypoint)("lootbox_entrypoint"), l = !(0, C.useIsDismissibleContentDismissed)(d.DismissibleContent.LOOTBOXES_ENTRYPOINT), {
    analyticsLocations: L
  } = (0, _.default)(h.default.LOOTBOXES_UPSELL), P = s.useRef(null), M = e => {
    (0, C.markDismissibleContentAsDismissed)(d.DismissibleContent.LOOTBOXES_ENTRYPOINT, {
      dismissAction: e
    })
  };
  return (s.useEffect(() => {
    var t, n;
    e ? null === (t = P.current) || void 0 === t || t.play() : null === (n = P.current) || void 0 === n || n.pause()
  }, [e]), n && l) ? (0, a.jsx)(m.default, {
    children: (0, a.jsxs)("div", {
      className: i()(O.wrapper, e ? O.wrapperHovered : null),
      onMouseLeave: () => t(!1),
      children: [(0, a.jsxs)(f.Clickable, {
        className: O.closeButton,
        onClick: () => M(N.ContentDismissActionType.DISMISS),
        children: [(0, a.jsx)(o.CloseSmallIcon, {
          className: O.closeIcon,
          color: c.default.colors.WHITE
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/bold",
          color: "always-white",
          children: R.default.Messages.PACKAGES_ENTRYPOINT_CLOSE
        })]
      }), (0, a.jsxs)("div", {
        className: O.contentWrapper,
        children: [(0, a.jsx)("div", {
          className: O.videoWrapper,
          children: (0, a.jsx)(I.default, {
            ref: P,
            className: O.video,
            src: v,
            muted: !0,
            loop: !0
          })
        }), (0, a.jsxs)(f.Clickable, {
          className: O.entrypoint,
          onClick: () => {
            M(N.ContentDismissActionType.PRIMARY), E.default.open(A.UserSettingsSections.LOOTBOXES, null, {
              analyticsLocations: L
            })
          },
          onMouseEnter: () => t(!0),
          children: [(0, a.jsx)("div", {
            className: O.backgroundWrapper,
            children: (0, a.jsx)(T.default, {
              className: O.backgroundImage,
              pageMultiplier: 5
            })
          }), (0, a.jsx)(S.default, {
            className: O.animation,
            importData: p.importLootboxAnimationData,
            nextScene: g.BoxAnimationScenes.IDLE,
            sceneSegments: g.BoxAnimationSceneSegments
          }), (0, a.jsxs)("div", {
            className: O.body,
            children: [(0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              color: "always-white",
              children: R.default.Messages.PACKAGES_ENTRYPOINT_TITLE
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: R.default.Messages.PACKAGES_ENTRYPOINT_DESCRIPTION
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