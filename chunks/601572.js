"use strict";
t.r(a), t.d(a, {
  default: function() {
    return V
  }
}), t("47120");
var l = t("735250"),
  s = t("470079"),
  n = t("481060"),
  i = t("846027"),
  c = t("410575"),
  r = t("2052"),
  o = t("100527"),
  d = t("906732"),
  u = t("695346"),
  f = t("932724"),
  h = t("716161"),
  v = t("672339"),
  A = t("898531"),
  E = t("131951"),
  g = t("594174"),
  M = t("285952"),
  C = t("153124"),
  p = t("626135"),
  R = t("747545"),
  x = t("981631"),
  _ = t("689938"),
  w = t("801682");
let m = {
  width: 368,
  height: 207
};

function V(e) {
  let {
    transitionState: a,
    videoEnabled: t,
    onEnable: m,
    onClose: V
  } = e, I = E.default.getCameraComponent(), L = (0, C.useUID)(), j = (0, A.default)(), N = u.AlwaysPreviewVideo.useSetting(), [y, O] = s.useState((0, f.getLastUsedVideoBackgroundOption)(g.default.getCurrentUser())), P = (0, r.useAnalyticsContext)(), {
    analyticsLocations: B
  } = (0, d.default)(o.default.CAMERA_PREVIEW), k = s.useRef(null);
  s.useEffect(() => {
    p.default.track(x.AnalyticEvents.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), s.useEffect(() => {
    var e;
    null === (e = k.current) || void 0 === e || e.scrollToTop()
  }, []);
  let Z = async () => {
    await D(), i.default.setVideoEnabled(!0), null == m || m()
  }, D = async () => {
    try {
      await (0, v.applyBackgroundOptionLive)(y, {
        location: {
          page: x.AnalyticsPages.PREVIEW_CAMERA_MODAL,
          ...P.location
        }
      })
    } catch (e) {}
    await V(), (0, h.saveLastUsedBackgroundOption)(y)
  };
  return (0, l.jsx)(d.AnalyticsLocationProvider, {
    value: B,
    children: (0, l.jsx)(c.default, {
      page: x.AnalyticsPages.PREVIEW_CAMERA_MODAL,
      children: (0, l.jsxs)(n.ModalRoot, {
        className: w.modalRoot,
        size: n.ModalSize.DYNAMIC,
        "aria-labelledby": L,
        transitionState: a,
        children: [(0, l.jsxs)(n.ModalContent, {
          className: j ? w.contentWithVideoBackgrounds : w.content,
          scrollerRef: k,
          children: [(0, l.jsx)(n.Heading, {
            id: L,
            className: w.header,
            variant: "heading-xl/semibold",
            children: t ? _.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER : _.default.Messages.CAMERA_PREVIEW_MODAL_HEADER
          }), (0, l.jsx)(R.default, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            selectedBackgroundOption: y,
            onSelectBackgroundOption: O,
            hideDeviceSelector: t,
            renderCamera: e => (0, l.jsxs)("div", {
              className: w.cameraPreview,
              children: [(0, l.jsx)("div", {
                className: w.camera,
                children: (0, l.jsx)(I, {
                  disabled: !1,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, l.jsx)(R.FilterLoadingIndicator, {})]
            }),
            onLearnMore: V
          })]
        }), (0, l.jsxs)(n.ModalFooter, {
          justify: M.default.Justify.BETWEEN,
          children: [(() => {
            let e = t ? _.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND : _.default.Messages.CAMERA_ON;
            return (0, l.jsx)(n.Button, {
              onClick: t ? D : Z,
              size: n.Button.Sizes.SMALL,
              autoFocus: !t,
              children: e
            })
          })(), (0, l.jsx)(n.Checkbox, {
            size: 18,
            type: n.Checkbox.Types.INVERTED,
            value: N,
            onChange: () => {
              u.AlwaysPreviewVideo.updateSetting(!N), p.default.track(x.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !N
              })
            },
            children: (0, l.jsx)(n.Text, {
              variant: "text-sm/normal",
              children: _.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
            })
          })]
        }), (0, l.jsx)(n.ModalCloseButton, {
          onClick: V,
          className: w.modalClose
        })]
      })
    })
  })
}