n.d(t, {
    Z: function () {
        return _;
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
    S = n(642507);
let T = 387,
    C = 218;
function _(e) {
    let { previewEnabled: t, onEnablePreview: n } = e,
        _ = h.Z.getCameraComponent(),
        [E, f] = s.useState((0, c.P)(g.default.getCurrentUser())),
        I = s.useRef(!1),
        N = s.useRef(E),
        b = (0, o.O)(),
        A = (0, r.e7)([h.Z], () => Object.values(h.Z.getVideoDevices()).length > 0);
    return (
        s.useEffect(
            () => () => {
                I.current && a.Z.wait(() => (0, d.Up)(N.current));
            },
            []
        ),
        (0, i.jsx)(m.Z, {
            selectedBackgroundOption: E,
            onSelectBackgroundOption: (e) => {
                (I.current = !0), (N.current = e), f(e), (0, u.wG)(e, { location: b.location }).catch(p.dG4);
            },
            renderCamera: (e) =>
                t
                    ? (0, i.jsx)('div', {
                          className: S.cameraWrapper,
                          children: (0, i.jsxs)('div', {
                              className: S.camera,
                              children: [
                                  (0, i.jsx)(_, {
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
                                  text: A ? null : x.intl.string(x.t['8jSzSU']),
                                  children: (e) =>
                                      (0, i.jsx)(l.Button, {
                                          ...e,
                                          onClick: n,
                                          disabled: !A,
                                          children: x.intl.string(x.t.JIf4v7)
                                      })
                              })
                          ]
                      })
        })
    );
}
