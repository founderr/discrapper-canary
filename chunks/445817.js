t.d(s, {
  Z: function() {
    return m
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(481060),
  o = t(570140),
  l = t(2052),
  c = t(932724),
  d = t(716161),
  _ = t(672339),
  E = t(747545),
  u = t(131951),
  T = t(594174),
  S = t(981631),
  I = t(689938),
  N = t(350043);
let C = 387,
  A = 218;

function m(e) {
  let {
    previewEnabled: s,
    onEnablePreview: t
  } = e, m = u.Z.getCameraComponent(), [O, g] = a.useState((0, c.P)(T.default.getCurrentUser())), h = a.useRef(!1), R = a.useRef(O), p = (0, l.O)(), x = (0, i.e7)([u.Z], () => Object.values(u.Z.getVideoDevices()).length > 0);
  return a.useEffect(() => () => {
    h.current && o.Z.wait(() => (0, d.Up)(R.current))
  }, []), (0, n.jsx)(E.Z, {
    selectedBackgroundOption: O,
    onSelectBackgroundOption: e => {
      h.current = !0, R.current = e, g(e), (0, _.wG)(e, {
        location: p.location
      }).catch(S.dG4)
    },
    renderCamera: e => s ? (0, n.jsx)("div", {
      className: N.cameraWrapper,
      children: (0, n.jsxs)("div", {
        className: N.camera,
        children: [(0, n.jsx)(m, {
          deviceId: e,
          width: C,
          height: A,
          disabled: !s
        }), (0, n.jsx)(E.S, {})]
      })
    }) : (0, n.jsxs)("div", {
      className: N.cameraWrapper,
      children: [(0, n.jsx)("div", {
        className: N.previewImage
      }), (0, n.jsx)(r.Tooltip, {
        text: x ? null : I.Z.Messages.CAMERA_UNAVAILABLE,
        children: e => (0, n.jsx)(r.Button, {
          ...e,
          onClick: t,
          disabled: !x,
          children: I.Z.Messages.TEST_VIDEO
        })
      })]
    })
  })
}