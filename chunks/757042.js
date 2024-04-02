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
  r = n("295565"),
  o = n("989600"),
  u = n("727075"),
  d = n("793030"),
  c = n("524437"),
  f = n("692547"),
  E = n("481060"),
  h = n("230711"),
  _ = n("100527"),
  C = n("906732"),
  S = n("605236"),
  m = n("903958"),
  I = n("153850"),
  p = n("641826"),
  T = n("635869"),
  g = n("232700"),
  A = n("981631"),
  N = n("921944"),
  v = n("689938"),
  O = n("127906");
let R = {
  width: 340,
  height: 191,
  playerVars: {
    mute: 1,
    controls: 0,
    loop: 1,
    playlist: g.LOOTBOX_VIDEO_ID
  }
};

function L() {
  let [e, t] = s.useState(!1), n = (0, p.useShouldShowMainLootboxEntrypoint)("lootbox_entrypoint"), l = !(0, S.useIsDismissibleContentDismissed)(c.DismissibleContent.LOOTBOXES_ENTRYPOINT), {
    analyticsLocations: L
  } = (0, C.default)(_.default.LOOTBOXES_UPSELL), P = s.useRef(null), M = e => {
    (0, S.markDismissibleContentAsDismissed)(c.DismissibleContent.LOOTBOXES_ENTRYPOINT, {
      dismissAction: e
    })
  };
  return (s.useEffect(() => {
    var t, n;
    e ? null === (t = P.current) || void 0 === t || t.internalPlayer.playVideo() : null === (n = P.current) || void 0 === n || n.internalPlayer.pauseVideo()
  }, [e]), n && l) ? (0, a.jsx)(I.default, {
    children: (0, a.jsxs)("div", {
      className: i()(O.wrapper, e ? O.wrapperHovered : null),
      onMouseLeave: () => t(!1),
      children: [(0, a.jsxs)(E.Clickable, {
        className: O.closeButton,
        onClick: () => M(N.ContentDismissActionType.DISMISS),
        children: [(0, a.jsx)(u.CloseSmallIcon, {
          className: O.closeIcon,
          color: f.default.colors.WHITE
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "always-white",
          children: v.default.Messages.PACKAGES_ENTRYPOINT_CLOSE
        })]
      }), (0, a.jsxs)("div", {
        className: O.contentWrapper,
        children: [(0, a.jsx)("div", {
          className: O.videoWrapper,
          children: (0, a.jsx)(r.default, {
            ref: P,
            className: O.video,
            videoId: g.LOOTBOX_VIDEO_ID,
            opts: R
          })
        }), (0, a.jsxs)(E.Clickable, {
          className: O.entrypoint,
          onClick: () => {
            M(N.ContentDismissActionType.PRIMARY), h.default.open(A.UserSettingsSections.LOOTBOXES, null, {
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
          }), (0, a.jsx)(m.default, {
            className: O.animation,
            importData: p.importLootboxAnimationData,
            nextScene: g.BoxAnimationScenes.IDLE,
            sceneSegments: g.BoxAnimationSceneSegments
          }), (0, a.jsxs)("div", {
            className: O.body,
            children: [(0, a.jsx)(d.Text, {
              variant: "text-md/bold",
              color: "always-white",
              children: v.default.Messages.PACKAGES_ENTRYPOINT_TITLE
            }), (0, a.jsx)(d.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: v.default.Messages.PACKAGES_ENTRYPOINT_DESCRIPTION
            })]
          }), (0, a.jsx)("div", {
            className: O.buttonWrapper,
            children: (0, a.jsx)("div", {
              className: O.iconButton,
              children: (0, a.jsx)(o.ArrowLargeRightIcon, {
                className: O.buttonIcon,
                color: f.default.colors.WHITE
              })
            })
          })]
        })]
      })]
    })
  }) : null
}