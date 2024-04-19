"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
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
  m = s("981631"),
  f = s("689938"),
  _ = s("676600");
let g = {
  width: 387,
  height: 218
};

function I(e) {
  let {
    previewEnabled: t,
    onEnablePreview: s
  } = e, I = E.default.getCameraComponent(), [h, N] = n.useState((0, d.getLastUsedVideoBackgroundOption)(T.default.getCurrentUser())), p = n.useRef(!1), C = n.useRef(h), A = (0, o.useAnalyticsContext)(), O = (0, l.useStateFromStores)([E.default], () => Object.values(E.default.getVideoDevices()).length > 0);
  return n.useEffect(() => () => {
    p.current && r.default.wait(() => (0, u.saveLastUsedBackgroundOption)(C.current))
  }, []), (0, a.jsx)(S.default, {
    selectedBackgroundOption: h,
    onSelectBackgroundOption: e => {
      p.current = !0, C.current = e, N(e), (0, c.applyBackgroundOptionLive)(e, {
        location: A.location
      }).catch(m.NOOP)
    },
    renderCamera: e => t ? (0, a.jsx)("div", {
      className: _.cameraWrapper,
      children: (0, a.jsxs)("div", {
        className: _.camera,
        children: [(0, a.jsx)(I, {
          deviceId: e,
          width: g.width,
          height: g.height,
          disabled: !t
        }), (0, a.jsx)(S.FilterLoadingIndicator, {})]
      })
    }) : (0, a.jsxs)("div", {
      className: _.cameraWrapper,
      children: [(0, a.jsx)("div", {
        className: _.previewImage
      }), (0, a.jsx)(i.Tooltip, {
        text: O ? null : f.default.Messages.CAMERA_UNAVAILABLE,
        children: e => (0, a.jsx)(i.Button, {
          ...e,
          onClick: s,
          disabled: !O,
          children: f.default.Messages.TEST_VIDEO
        })
      })]
    })
  })
}