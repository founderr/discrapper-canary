n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(570140),
    o = n(2052),
    c = n(932724),
    d = n(716161),
    u = n(672339),
    m = n(747545),
    h = n(131951),
    g = n(594174),
    p = n(981631),
    x = n(388032),
    S = n(205058);
let T = 387,
    C = 218;
function E(e) {
    let { previewEnabled: t, onEnablePreview: n } = e,
        E = h.Z.getCameraComponent(),
        [_, I] = s.useState((0, c.P)(g.default.getCurrentUser())),
        f = s.useRef(!1),
        N = s.useRef(_),
        A = (0, o.O)(),
        b = (0, r.e7)([h.Z], () => Object.values(h.Z.getVideoDevices()).length > 0);
    return (
        s.useEffect(
            () => () => {
                f.current && a.Z.wait(() => (0, d.Up)(N.current));
            },
            []
        ),
        (0, i.jsx)(m.Z, {
            selectedBackgroundOption: _,
            onSelectBackgroundOption: (e) => {
                (f.current = !0), (N.current = e), I(e), (0, u.wG)(e, { location: A.location }).catch(p.dG4);
            },
            renderCamera: (e) =>
                t
                    ? (0, i.jsx)('div', {
                          className: S.cameraWrapper,
                          children: (0, i.jsxs)('div', {
                              className: S.camera,
                              children: [
                                  (0, i.jsx)(E, {
                                      deviceId: e,
                                      width: T,
                                      height: C,
                                      disabled: !t
                                  }),
                                  (0, i.jsx)(m.S, {})
                              ]
                          })
                      })
                    : (0, i.jsxs)('div', {
                          className: S.cameraWrapper,
                          children: [
                              (0, i.jsx)('div', { className: S.previewImage }),
                              (0, i.jsx)(l.Tooltip, {
                                  text: b ? null : x.intl.string(x.t['8jSzSU']),
                                  children: (e) =>
                                      (0, i.jsx)(l.Button, {
                                          ...e,
                                          onClick: n,
                                          disabled: !b,
                                          children: x.intl.string(x.t.JIf4v7)
                                      })
                              })
                          ]
                      })
        })
    );
}
