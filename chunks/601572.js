"use strict";
t.r(a), t.d(a, {
  default: function() {
    return m
  }
}), t("47120");
var s = t("735250"),
  l = t("470079"),
  i = t("481060"),
  n = t("846027"),
  d = t("410575"),
  o = t("2052"),
  c = t("100527"),
  r = t("906732"),
  u = t("695346"),
  h = t("932724"),
  E = t("716161"),
  f = t("672339"),
  A = t("898531"),
  v = t("131951"),
  C = t("594174"),
  g = t("285952"),
  p = t("153124"),
  M = t("626135"),
  R = t("747545"),
  _ = t("981631"),
  x = t("689938"),
  V = t("768454");
let w = {
  width: 368,
  height: 207
};

function m(e) {
  let {
    transitionState: a,
    videoEnabled: t,
    onEnable: w,
    onClose: m
  } = e, I = v.default.getCameraComponent(), j = (0, p.useUID)(), L = (0, A.default)(), y = u.AlwaysPreviewVideo.useSetting(), [N, P] = l.useState((0, h.getLastUsedVideoBackgroundOption)(C.default.getCurrentUser())), O = (0, o.useAnalyticsContext)(), {
    analyticsLocations: k
  } = (0, r.default)(c.default.CAMERA_PREVIEW), D = l.useRef(null);
  l.useEffect(() => {
    M.default.track(_.AnalyticEvents.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), l.useEffect(() => {
    var e;
    null === (e = D.current) || void 0 === e || e.scrollToTop()
  }, []);
  let B = async () => {
    await H(), n.default.setVideoEnabled(!0), null == w || w()
  }, H = async () => {
    try {
      await (0, f.applyBackgroundOptionLive)(N, {
        location: {
          page: _.AnalyticsPages.PREVIEW_CAMERA_MODAL,
          ...O.location
        }
      })
    } catch (e) {}
    await m(), (0, E.saveLastUsedBackgroundOption)(N)
  };
  return (0, s.jsx)(r.AnalyticsLocationProvider, {
    value: k,
    children: (0, s.jsx)(d.default, {
      page: _.AnalyticsPages.PREVIEW_CAMERA_MODAL,
      children: (0, s.jsxs)(i.ModalRoot, {
        className: V.modalRoot,
        size: i.ModalSize.DYNAMIC,
        "aria-labelledby": j,
        transitionState: a,
        children: [(0, s.jsxs)(i.ModalContent, {
          className: L ? V.contentWithVideoBackgrounds : V.content,
          scrollerRef: D,
          children: [(0, s.jsx)(i.Heading, {
            id: j,
            className: V.header,
            variant: "heading-xl/semibold",
            children: t ? x.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER : x.default.Messages.CAMERA_PREVIEW_MODAL_HEADER
          }), (0, s.jsx)(R.default, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            selectedBackgroundOption: N,
            onSelectBackgroundOption: P,
            hideDeviceSelector: t,
            renderCamera: e => (0, s.jsxs)("div", {
              className: V.cameraPreview,
              children: [(0, s.jsx)("div", {
                className: V.camera,
                children: (0, s.jsx)(I, {
                  disabled: !1,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, s.jsx)(R.FilterLoadingIndicator, {})]
            }),
            onLearnMore: m
          })]
        }), (0, s.jsxs)(i.ModalFooter, {
          justify: g.default.Justify.BETWEEN,
          children: [(() => {
            let e = t ? x.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND : x.default.Messages.CAMERA_ON;
            return (0, s.jsx)(i.Button, {
              onClick: t ? H : B,
              size: i.Button.Sizes.SMALL,
              autoFocus: !t,
              children: e
            })
          })(), (0, s.jsx)(i.Checkbox, {
            size: 18,
            type: i.Checkbox.Types.INVERTED,
            value: y,
            onChange: () => {
              u.AlwaysPreviewVideo.updateSetting(!y), M.default.track(_.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !y
              })
            },
            children: (0, s.jsx)(i.Text, {
              variant: "text-sm/normal",
              children: x.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
            })
          })]
        }), (0, s.jsx)(i.ModalCloseButton, {
          onClick: m,
          className: V.modalClose
        })]
      })
    })
  })
}