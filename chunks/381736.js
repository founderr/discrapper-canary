"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  u = n("77078"),
  s = n("629109"),
  o = n("901582"),
  l = n("997289"),
  a = n("812204"),
  c = n("685665"),
  d = n("845579"),
  E = n("659558"),
  f = n("154867"),
  _ = n("439141"),
  h = n("648911"),
  I = n("42887"),
  A = n("697218"),
  R = n("145131"),
  C = n("476765"),
  p = n("599110"),
  L = n("739477"),
  S = n("49111"),
  M = n("782340"),
  O = n("424382");
let v = {
  width: 368,
  height: 207
};

function T(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: v,
    onClose: T
  } = e, m = I.default.getCameraComponent(), H = (0, C.useUID)(), N = (0, h.default)(), g = d.AlwaysPreviewVideo.useSetting(), [D, P] = i.useState((0, E.getLastUsedVideoBackgroundOption)(A.default.getCurrentUser())), U = (0, l.useAnalyticsContext)(), {
    AnalyticsLocationProvider: x
  } = (0, c.default)(a.default.CAMERA_PREVIEW), y = i.useRef(null);
  i.useEffect(() => {
    p.default.track(S.AnalyticEvents.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), i.useEffect(() => {
    var e;
    null === (e = y.current) || void 0 === e || e.scrollToTop()
  }, []);
  let w = async () => {
    await V(), s.default.setVideoEnabled(!0), null == v || v()
  }, V = async () => {
    try {
      await (0, _.applyBackgroundOptionLive)(D, {
        location: {
          page: S.AnalyticsPages.PREVIEW_CAMERA_MODAL,
          ...U.location
        }
      })
    } catch (e) {}
    await T(), (0, f.saveLastUsedBackgroundOption)(D)
  };
  return (0, r.jsx)(x, {
    children: (0, r.jsx)(o.default, {
      page: S.AnalyticsPages.PREVIEW_CAMERA_MODAL,
      children: (0, r.jsxs)(u.ModalRoot, {
        className: O.modalRoot,
        size: u.ModalSize.DYNAMIC,
        "aria-labelledby": H,
        transitionState: t,
        children: [(0, r.jsxs)(u.ModalContent, {
          className: N ? O.contentWithVideoBackgrounds : O.content,
          scrollerRef: y,
          children: [(0, r.jsx)(u.Heading, {
            id: H,
            className: O.header,
            variant: "heading-xl/semibold",
            children: n ? M.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER : M.default.Messages.CAMERA_PREVIEW_MODAL_HEADER
          }), (0, r.jsx)(L.default, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            selectedBackgroundOption: D,
            onSelectBackgroundOption: P,
            hideDeviceSelector: n,
            renderCamera: e => (0, r.jsxs)("div", {
              className: O.cameraPreview,
              children: [(0, r.jsx)("div", {
                className: O.camera,
                children: (0, r.jsx)(m, {
                  disabled: !1,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, r.jsx)(L.FilterLoadingIndicator, {})]
            }),
            onLearnMore: T
          })]
        }), (0, r.jsxs)(u.ModalFooter, {
          justify: R.default.Justify.BETWEEN,
          children: [(() => {
            let e = n ? M.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND : M.default.Messages.CAMERA_ON;
            return (0, r.jsx)(u.Button, {
              onClick: n ? V : w,
              size: u.Button.Sizes.SMALL,
              autoFocus: !n,
              children: e
            })
          })(), (0, r.jsx)(u.Checkbox, {
            size: 18,
            type: u.Checkbox.Types.INVERTED,
            value: g,
            onChange: () => {
              d.AlwaysPreviewVideo.updateSetting(!g), p.default.track(S.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !g
              })
            },
            children: (0, r.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: M.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
            })
          })]
        }), (0, r.jsx)(u.ModalCloseButton, {
          onClick: T,
          className: O.modalClose
        })]
      })
    })
  })
}