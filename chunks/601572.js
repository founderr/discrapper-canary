"use strict";
t.r(a), t.d(a, {
  default: function() {
    return m
  }
}), t("47120");
var l = t("735250"),
  s = t("470079"),
  i = t("481060"),
  n = t("846027"),
  c = t("410575"),
  o = t("2052"),
  d = t("100527"),
  r = t("906732"),
  u = t("695346"),
  h = t("932724"),
  f = t("716161"),
  A = t("672339"),
  E = t("898531"),
  v = t("131951"),
  g = t("594174"),
  M = t("285952"),
  C = t("153124"),
  p = t("626135"),
  R = t("747545"),
  x = t("981631"),
  _ = t("689938"),
  w = t("360533");
let V = {
  width: 368,
  height: 207
};

function m(e) {
  let {
    transitionState: a,
    videoEnabled: t,
    onEnable: V,
    onClose: m
  } = e, I = v.default.getCameraComponent(), L = (0, C.useUID)(), j = (0, E.default)(), N = u.AlwaysPreviewVideo.useSetting(), [y, O] = s.useState((0, h.getLastUsedVideoBackgroundOption)(g.default.getCurrentUser())), P = (0, o.useAnalyticsContext)(), {
    analyticsLocations: B
  } = (0, r.default)(d.default.CAMERA_PREVIEW), k = s.useRef(null);
  s.useEffect(() => {
    p.default.track(x.AnalyticEvents.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), s.useEffect(() => {
    var e;
    null === (e = k.current) || void 0 === e || e.scrollToTop()
  }, []);
  let Z = async () => {
    await D(), n.default.setVideoEnabled(!0), null == V || V()
  }, D = async () => {
    try {
      await (0, A.applyBackgroundOptionLive)(y, {
        location: {
          page: x.AnalyticsPages.PREVIEW_CAMERA_MODAL,
          ...P.location
        }
      })
    } catch (e) {}
    await m(), (0, f.saveLastUsedBackgroundOption)(y)
  };
  return (0, l.jsx)(r.AnalyticsLocationProvider, {
    value: B,
    children: (0, l.jsx)(c.default, {
      page: x.AnalyticsPages.PREVIEW_CAMERA_MODAL,
      children: (0, l.jsxs)(i.ModalRoot, {
        className: w.modalRoot,
        size: i.ModalSize.DYNAMIC,
        "aria-labelledby": L,
        transitionState: a,
        children: [(0, l.jsxs)(i.ModalContent, {
          className: j ? w.contentWithVideoBackgrounds : w.content,
          scrollerRef: k,
          children: [(0, l.jsx)(i.Heading, {
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
            onLearnMore: m
          })]
        }), (0, l.jsxs)(i.ModalFooter, {
          justify: M.default.Justify.BETWEEN,
          children: [(() => {
            let e = t ? _.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND : _.default.Messages.CAMERA_ON;
            return (0, l.jsx)(i.Button, {
              onClick: t ? D : Z,
              size: i.Button.Sizes.SMALL,
              autoFocus: !t,
              children: e
            })
          })(), (0, l.jsx)(i.Checkbox, {
            size: 18,
            type: i.Checkbox.Types.INVERTED,
            value: N,
            onChange: () => {
              u.AlwaysPreviewVideo.updateSetting(!N), p.default.track(x.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !N
              })
            },
            children: (0, l.jsx)(i.Text, {
              variant: "text-sm/normal",
              children: _.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
            })
          })]
        }), (0, l.jsx)(i.ModalCloseButton, {
          onClick: m,
          className: w.modalClose
        })]
      })
    })
  })
}