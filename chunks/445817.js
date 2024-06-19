t.d(s, {
  Z: function() {
    return O
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(481060),
  r = t(570140),
  o = t(2052),
  c = t(932724),
  E = t(716161),
  d = t(672339),
  _ = t(747545),
  T = t(131951),
  S = t(594174),
  u = t(981631),
  I = t(689938),
  N = t(350043);
let A = 387,
  C = 218;

function O(e) {
  let {
    previewEnabled: s,
    onEnablePreview: t
  } = e, O = T.Z.getCameraComponent(), [m, h] = i.useState((0, c.P)(S.default.getCurrentUser())), g = i.useRef(!1), R = i.useRef(m), M = (0, o.O)(), x = (0, a.e7)([T.Z], () => Object.values(T.Z.getVideoDevices()).length > 0);
  return i.useEffect(() => () => {
    g.current && r.Z.wait(() => (0, E.Up)(R.current))
  }, []), (0, n.jsx)(_.Z, {
    selectedBackgroundOption: m,
    onSelectBackgroundOption: e => {
      g.current = !0, R.current = e, h(e), (0, d.wG)(e, {
        location: M.location
      }).catch(u.dG4)
    },
    renderCamera: e => s ? (0, n.jsx)("div", {
      className: N.cameraWrapper,
      children: (0, n.jsxs)("div", {
        className: N.camera,
        children: [(0, n.jsx)(O, {
          deviceId: e,
          width: A,
          height: C,
          disabled: !s
        }), (0, n.jsx)(_.S, {})]
      })
    }) : (0, n.jsxs)("div", {
      className: N.cameraWrapper,
      children: [(0, n.jsx)("div", {
        className: N.previewImage
      }), (0, n.jsx)(l.Tooltip, {
        text: x ? null : I.Z.Messages.CAMERA_UNAVAILABLE,
        children: e => (0, n.jsx)(l.Button, {
          ...e,
          onClick: t,
          disabled: !x,
          children: I.Z.Messages.TEST_VIDEO
        })
      })]
    })
  })
}