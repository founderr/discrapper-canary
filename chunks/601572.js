s.r(a), s.d(a, {
  default: function() {
    return O
  }
}), s(47120);
var t = s(735250),
  i = s(470079),
  n = s(481060),
  l = s(846027),
  o = s(410575),
  r = s(2052),
  c = s(100527),
  d = s(906732),
  E = s(695346),
  u = s(932724),
  A = s(716161),
  h = s(672339),
  C = s(898531),
  _ = s(131951),
  M = s(594174),
  R = s(285952),
  x = s(153124),
  g = s(626135),
  p = s(747545),
  m = s(981631),
  v = s(689938),
  D = s(717933);
let N = 368,
  j = 207;

function O(e) {
  let {
    transitionState: a,
    videoEnabled: s,
    onEnable: O,
    onClose: f
  } = e, P = _.Z.getCameraComponent(), S = (0, x.Dt)(), Z = (0, C.Z)(), k = E.qF.useSetting(), [I, w] = i.useState((0, u.P)(M.default.getCurrentUser())), V = (0, r.O)(), {
    analyticsLocations: B
  } = (0, d.ZP)(c.Z.CAMERA_PREVIEW), W = i.useRef(null);
  i.useEffect(() => {
    g.default.track(m.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), i.useEffect(() => {
    var e;
    null === (e = W.current) || void 0 === e || e.scrollToTop()
  }, []);
  let y = async () => {
    await L(), l.Z.setVideoEnabled(!0), null == O || O()
  }, L = async () => {
    try {
      await (0, h.wG)(I, {
        location: {
          page: m.ZY5.PREVIEW_CAMERA_MODAL,
          ...V.location
        }
      })
    } catch (e) {}
    await f(), (0, A.Up)(I)
  };
  return (0, t.jsx)(d.Gt, {
    value: B,
    children: (0, t.jsx)(o.Z, {
      page: m.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, t.jsxs)(n.ModalRoot, {
        className: D.modalRoot,
        size: n.ModalSize.DYNAMIC,
        "aria-labelledby": S,
        transitionState: a,
        children: [(0, t.jsxs)(n.ModalContent, {
          className: Z ? D.contentWithVideoBackgrounds : D.content,
          scrollerRef: W,
          children: [(0, t.jsx)(n.Heading, {
            id: S,
            className: D.header,
            variant: "heading-xl/semibold",
            children: s ? v.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER : v.Z.Messages.CAMERA_PREVIEW_MODAL_HEADER
          }), (0, t.jsx)(p.Z, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            selectedBackgroundOption: I,
            onSelectBackgroundOption: w,
            hideDeviceSelector: s,
            renderCamera: e => (0, t.jsxs)("div", {
              className: D.cameraPreview,
              children: [(0, t.jsx)("div", {
                className: D.camera,
                children: (0, t.jsx)(P, {
                  disabled: !1,
                  deviceId: e,
                  width: N,
                  height: j
                })
              }), (0, t.jsx)(p.S, {})]
            }),
            onLearnMore: f
          })]
        }), (0, t.jsxs)(n.ModalFooter, {
          justify: R.Z.Justify.BETWEEN,
          children: [(() => {
            let e = s ? v.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND : v.Z.Messages.CAMERA_ON;
            return (0, t.jsx)(n.Button, {
              onClick: s ? L : y,
              size: n.Button.Sizes.SMALL,
              autoFocus: !s,
              children: e
            })
          })(), (0, t.jsx)(n.Checkbox, {
            size: 18,
            type: n.Checkbox.Types.INVERTED,
            value: k,
            onChange: () => {
              E.qF.updateSetting(!k), g.default.track(m.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !k
              })
            },
            children: (0, t.jsx)(n.Text, {
              variant: "text-sm/normal",
              children: v.Z.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
            })
          })]
        }), (0, t.jsx)(n.ModalCloseButton, {
          onClick: f,
          className: D.modalClose
        })]
      })
    })
  })
}