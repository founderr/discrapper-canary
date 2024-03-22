"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  u = n("77078"),
  s = n("629109"),
  o = n("901582"),
  a = n("997289"),
  l = n("812204"),
  c = n("685665"),
  d = n("845579"),
  E = n("659558"),
  f = n("154867"),
  _ = n("439141"),
  I = n("648911"),
  h = n("42887"),
  A = n("697218"),
  R = n("145131"),
  C = n("476765"),
  S = n("599110"),
  p = n("739477"),
  L = n("49111"),
  m = n("782340"),
  M = n("424382");
let O = {
  width: 368,
  height: 207
};

function v(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: O,
    onClose: v
  } = e, T = h.default.getCameraComponent(), H = (0, C.useUID)(), N = (0, I.default)(), g = d.AlwaysPreviewVideo.useSetting(), [D, P] = r.useState((0, E.getLastUsedVideoBackgroundOption)(A.default.getCurrentUser())), U = (0, a.useAnalyticsContext)(), {
    AnalyticsLocationProvider: x
  } = (0, c.default)(l.default.CAMERA_PREVIEW), y = r.useRef(null);
  r.useEffect(() => {
    S.default.track(L.AnalyticEvents.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), r.useEffect(() => {
    var e;
    null === (e = y.current) || void 0 === e || e.scrollToTop()
  }, []);
  let w = async () => {
    await V(), s.default.setVideoEnabled(!0), null == O || O()
  }, V = async () => {
    try {
      await (0, _.applyBackgroundOptionLive)(D, {
        location: {
          page: L.AnalyticsPages.PREVIEW_CAMERA_MODAL,
          ...U.location
        }
      })
    } catch (e) {}
    await v(), (0, f.saveLastUsedBackgroundOption)(D)
  };
  return (0, i.jsx)(x, {
    children: (0, i.jsx)(o.default, {
      page: L.AnalyticsPages.PREVIEW_CAMERA_MODAL,
      children: (0, i.jsxs)(u.ModalRoot, {
        className: M.modalRoot,
        size: u.ModalSize.DYNAMIC,
        "aria-labelledby": H,
        transitionState: t,
        children: [(0, i.jsxs)(u.ModalContent, {
          className: N ? M.contentWithVideoBackgrounds : M.content,
          scrollerRef: y,
          children: [(0, i.jsx)(u.Heading, {
            id: H,
            className: M.header,
            variant: "heading-xl/semibold",
            children: n ? m.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER : m.default.Messages.CAMERA_PREVIEW_MODAL_HEADER
          }), (0, i.jsx)(p.default, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            selectedBackgroundOption: D,
            onSelectBackgroundOption: P,
            hideDeviceSelector: n,
            renderCamera: e => (0, i.jsxs)("div", {
              className: M.cameraPreview,
              children: [(0, i.jsx)("div", {
                className: M.camera,
                children: (0, i.jsx)(T, {
                  disabled: !1,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, i.jsx)(p.FilterLoadingIndicator, {})]
            }),
            onLearnMore: v
          })]
        }), (0, i.jsxs)(u.ModalFooter, {
          justify: R.default.Justify.BETWEEN,
          children: [(() => {
            let e = n ? m.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND : m.default.Messages.CAMERA_ON;
            return (0, i.jsx)(u.Button, {
              onClick: n ? V : w,
              size: u.Button.Sizes.SMALL,
              autoFocus: !n,
              children: e
            })
          })(), (0, i.jsx)(u.Checkbox, {
            size: 18,
            type: u.Checkbox.Types.INVERTED,
            value: g,
            onChange: () => {
              d.AlwaysPreviewVideo.updateSetting(!g), S.default.track(L.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !g
              })
            },
            children: (0, i.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: m.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
            })
          })]
        }), (0, i.jsx)(u.ModalCloseButton, {
          onClick: v,
          className: M.modalClose
        })]
      })
    })
  })
}