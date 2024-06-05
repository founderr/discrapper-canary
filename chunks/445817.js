"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
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
  I = s("689938"),
  N = s("688725");
let f = {
  width: 387,
  height: 218
};

function g(e) {
  let {
    previewEnabled: t,
    onEnablePreview: s
  } = e, g = E.default.getCameraComponent(), [m, C] = n.useState((0, d.getLastUsedVideoBackgroundOption)(T.default.getCurrentUser())), A = n.useRef(!1), h = n.useRef(m), O = (0, o.useAnalyticsContext)(), p = (0, l.useStateFromStores)([E.default], () => Object.values(E.default.getVideoDevices()).length > 0);
  return n.useEffect(() => () => {
    A.current && r.default.wait(() => (0, u.saveLastUsedBackgroundOption)(h.current))
  }, []), (0, a.jsx)(S.default, {
    selectedBackgroundOption: m,
    onSelectBackgroundOption: e => {
      A.current = !0, h.current = e, C(e), (0, c.applyBackgroundOptionLive)(e, {
        location: O.location
      }).catch(_.NOOP)
    },
    renderCamera: e => t ? (0, a.jsx)("div", {
      className: N.cameraWrapper,
      children: (0, a.jsxs)("div", {
        className: N.camera,
        children: [(0, a.jsx)(g, {
          deviceId: e,
          width: f.width,
          height: f.height,
          disabled: !t
        }), (0, a.jsx)(S.FilterLoadingIndicator, {})]
      })
    }) : (0, a.jsxs)("div", {
      className: N.cameraWrapper,
      children: [(0, a.jsx)("div", {
        className: N.previewImage
      }), (0, a.jsx)(i.Tooltip, {
        text: p ? null : I.default.Messages.CAMERA_UNAVAILABLE,
        children: e => (0, a.jsx)(i.Button, {
          ...e,
          onClick: s,
          disabled: !p,
          children: I.default.Messages.TEST_VIDEO
        })
      })]
    })
  })
}