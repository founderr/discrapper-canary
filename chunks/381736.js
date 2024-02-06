"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  u = n("77078"),
  o = n("629109"),
  a = n("901582"),
  s = n("997289"),
  l = n("812204"),
  c = n("685665"),
  d = n("845579"),
  E = n("659558"),
  f = n("154867"),
  _ = n("439141"),
  h = n("648911"),
  I = n("42887"),
  R = n("697218"),
  A = n("145131"),
  C = n("476765"),
  p = n("599110"),
  S = n("739477"),
  L = n("49111"),
  T = n("782340"),
  v = n("684003");
let O = {
  width: 368,
  height: 207
};

function N(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: O,
    onClose: N
  } = e, m = I.default.getCameraComponent(), M = (0, C.useUID)(), g = (0, h.default)(), H = d.AlwaysPreviewVideo.useSetting(), [D, U] = i.useState((0, E.getLastUsedVideoBackgroundOption)(R.default.getCurrentUser())), P = (0, s.useAnalyticsContext)(), {
    AnalyticsLocationProvider: x
  } = (0, c.default)(l.default.CAMERA_PREVIEW), y = i.useRef(null);
  i.useEffect(() => {
    p.default.track(L.AnalyticEvents.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), i.useEffect(() => {
    var e;
    null === (e = y.current) || void 0 === e || e.scrollToTop()
  }, []);
  let w = async () => {
    await B(), o.default.setVideoEnabled(!0), null == O || O()
  }, B = async () => {
    try {
      await (0, _.applyBackgroundOptionLive)(D, {
        location: {
          page: L.AnalyticsPages.PREVIEW_CAMERA_MODAL,
          ...P.location
        }
      })
    } catch (e) {}
    await N(), (0, f.saveLastUsedBackgroundOption)(D)
  };
  return (0, r.jsx)(x, {
    children: (0, r.jsx)(a.default, {
      page: L.AnalyticsPages.PREVIEW_CAMERA_MODAL,
      children: (0, r.jsxs)(u.ModalRoot, {
        className: v.modalRoot,
        size: u.ModalSize.DYNAMIC,
        "aria-labelledby": M,
        transitionState: t,
        children: [(0, r.jsxs)(u.ModalContent, {
          className: g ? v.contentWithVideoBackgrounds : v.content,
          scrollerRef: y,
          children: [(0, r.jsx)(u.Heading, {
            id: M,
            className: v.header,
            variant: "heading-xl/semibold",
            children: n ? T.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER : T.default.Messages.CAMERA_PREVIEW_MODAL_HEADER
          }), (0, r.jsx)(S.default, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            selectedBackgroundOption: D,
            onSelectBackgroundOption: U,
            hideDeviceSelector: n,
            renderCamera: e => (0, r.jsxs)("div", {
              className: v.cameraPreview,
              children: [(0, r.jsx)("div", {
                className: v.camera,
                children: (0, r.jsx)(m, {
                  disabled: !1,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, r.jsx)(S.FilterLoadingIndicator, {})]
            }),
            onLearnMore: N
          })]
        }), (0, r.jsxs)(u.ModalFooter, {
          justify: A.default.Justify.BETWEEN,
          children: [(() => {
            let e = n ? T.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND : T.default.Messages.CAMERA_ON;
            return (0, r.jsx)(u.Button, {
              onClick: n ? B : w,
              size: u.Button.Sizes.SMALL,
              autoFocus: !n,
              children: e
            })
          })(), (0, r.jsx)(u.Checkbox, {
            size: 18,
            type: u.Checkbox.Types.INVERTED,
            value: H,
            onChange: () => {
              d.AlwaysPreviewVideo.updateSetting(!H), p.default.track(L.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !H
              })
            },
            children: (0, r.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: T.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
            })
          })]
        }), (0, r.jsx)(u.ModalCloseButton, {
          onClick: N,
          className: v.modalClose
        })]
      })
    })
  })
}