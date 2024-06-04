"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("570140"),
  o = s("2052"),
  d = s("932724"),
  u = s("716161"),
  c = s("672339"),
  S = s("747545"),
  E = s("131951"),
  T = s("594174"),
  _ = s("981631"),
  f = s("689938"),
  I = s("688725");
let m = {
  width: 387,
  height: 218
};

function N(e) {
  let {
    previewEnabled: t,
    onEnablePreview: s
  } = e, N = E.default.getCameraComponent(), [g, h] = n.useState((0, d.getLastUsedVideoBackgroundOption)(T.default.getCurrentUser())), C = n.useRef(!1), A = n.useRef(g), O = (0, o.useAnalyticsContext)(), p = (0, l.useStateFromStores)([E.default], () => Object.values(E.default.getVideoDevices()).length > 0);
  return n.useEffect(() => () => {
    C.current && r.default.wait(() => (0, u.saveLastUsedBackgroundOption)(A.current))
  }, []), (0, a.jsx)(S.default, {
    selectedBackgroundOption: g,
    onSelectBackgroundOption: e => {
      C.current = !0, A.current = e, h(e), (0, c.applyBackgroundOptionLive)(e, {
        location: O.location
      }).catch(_.NOOP)
    },
    renderCamera: e => t ? (0, a.jsx)("div", {
      className: I.cameraWrapper,
      children: (0, a.jsxs)("div", {
        className: I.camera,
        children: [(0, a.jsx)(N, {
          deviceId: e,
          width: m.width,
          height: m.height,
          disabled: !t
        }), (0, a.jsx)(S.FilterLoadingIndicator, {})]
      })
    }) : (0, a.jsxs)("div", {
      className: I.cameraWrapper,
      children: [(0, a.jsx)("div", {
        className: I.previewImage
      }), (0, a.jsx)(i.Tooltip, {
        text: p ? null : f.default.Messages.CAMERA_UNAVAILABLE,
        children: e => (0, a.jsx)(i.Button, {
          ...e,
          onClick: s,
          disabled: !p,
          children: f.default.Messages.TEST_VIDEO
        })
      })]
    })
  })
}