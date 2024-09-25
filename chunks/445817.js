t.d(s, {
    Z: function () {
        return C;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(570140),
    l = t(2052),
    c = t(932724),
    d = t(716161),
    _ = t(672339),
    u = t(747545),
    E = t(131951),
    T = t(594174),
    S = t(981631),
    I = t(689938),
    N = t(205058);
let A = 387,
    m = 218;
function C(e) {
    let { previewEnabled: s, onEnablePreview: t } = e,
        C = E.Z.getCameraComponent(),
        [g, h] = a.useState((0, c.P)(T.default.getCurrentUser())),
        O = a.useRef(!1),
        p = a.useRef(g),
        R = (0, l.O)(),
        x = (0, i.e7)([E.Z], () => Object.values(E.Z.getVideoDevices()).length > 0);
    return (
        a.useEffect(
            () => () => {
                O.current && o.Z.wait(() => (0, d.Up)(p.current));
            },
            []
        ),
        (0, n.jsx)(u.Z, {
            selectedBackgroundOption: g,
            onSelectBackgroundOption: (e) => {
                (O.current = !0), (p.current = e), h(e), (0, _.wG)(e, { location: R.location }).catch(S.dG4);
            },
            renderCamera: (e) =>
                s
                    ? (0, n.jsx)('div', {
                          className: N.cameraWrapper,
                          children: (0, n.jsxs)('div', {
                              className: N.camera,
                              children: [
                                  (0, n.jsx)(C, {
                                      deviceId: e,
                                      width: A,
                                      height: m,
                                      disabled: !s
                                  }),
                                  (0, n.jsx)(u.S, {})
                              ]
                          })
                      })
                    : (0, n.jsxs)('div', {
                          className: N.cameraWrapper,
                          children: [
                              (0, n.jsx)('div', { className: N.previewImage }),
                              (0, n.jsx)(r.Tooltip, {
                                  text: x ? null : I.Z.Messages.CAMERA_UNAVAILABLE,
                                  children: (e) =>
                                      (0, n.jsx)(r.Button, {
                                          ...e,
                                          onClick: t,
                                          disabled: !x,
                                          children: I.Z.Messages.TEST_VIDEO
                                      })
                              })
                          ]
                      })
        })
    );
}
