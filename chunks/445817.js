"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  l = s("481060"),
  r = s("570140"),
  o = s("2052"),
  d = s("932724"),
  u = s("716161"),
  c = s("672339"),
  S = s("747545"),
  E = s("131951"),
  T = s("594174"),
  _ = s("981631"),
  I = s("689938"),
  N = s("688725");
let g = {
  width: 387,
  height: 218
};

function f(e) {
  let {
    previewEnabled: t,
    onEnablePreview: s
  } = e, f = E.default.getCameraComponent(), [m, A] = n.useState((0, d.getLastUsedVideoBackgroundOption)(T.default.getCurrentUser())), C = n.useRef(!1), O = n.useRef(m), h = (0, o.useAnalyticsContext)(), R = (0, i.useStateFromStores)([E.default], () => Object.values(E.default.getVideoDevices()).length > 0);
  return n.useEffect(() => () => {
    C.current && r.default.wait(() => (0, u.saveLastUsedBackgroundOption)(O.current))
  }, []), (0, a.jsx)(S.default, {
    selectedBackgroundOption: m,
    onSelectBackgroundOption: e => {
      C.current = !0, O.current = e, A(e), (0, c.applyBackgroundOptionLive)(e, {
        location: h.location
      }).catch(_.NOOP)
    },
    renderCamera: e => t ? (0, a.jsx)("div", {
      className: N.cameraWrapper,
      children: (0, a.jsxs)("div", {
        className: N.camera,
        children: [(0, a.jsx)(f, {
          deviceId: e,
          width: g.width,
          height: g.height,
          disabled: !t
        }), (0, a.jsx)(S.FilterLoadingIndicator, {})]
      })
    }) : (0, a.jsxs)("div", {
      className: N.cameraWrapper,
      children: [(0, a.jsx)("div", {
        className: N.previewImage
      }), (0, a.jsx)(l.Tooltip, {
        text: R ? null : I.default.Messages.CAMERA_UNAVAILABLE,
        children: e => (0, a.jsx)(l.Button, {
          ...e,
          onClick: s,
          disabled: !R,
          children: I.default.Messages.TEST_VIDEO
        })
      })]
    })
  })
}