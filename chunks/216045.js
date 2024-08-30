t.d(s, {
    Z: function () {
        return f;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(512722),
    r = t.n(i),
    o = t(442837),
    l = t(570140),
    c = t(232567),
    d = t(809206),
    u = t(497321),
    _ = t(634894),
    E = t(100527),
    T = t(906732),
    I = t(475977),
    S = t(957730),
    N = t(296810),
    m = t(921813),
    C = t(935147),
    g = t(246946),
    A = t(25990),
    h = t(594174),
    O = t(74538),
    p = t(695346),
    x = t(265159),
    R = t(532495);
function f() {
    let e = (0, o.e7)([h.default], () => {
        let e = h.default.getCurrentUser();
        return r()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
    });
    a.useEffect(() => {
        (0, c.In)(e.id);
    }, [e.id]);
    let s = (0, o.e7)([g.Z], () => g.Z.hidePersonalInformation),
        { pendingBio: t, ...i } = (0, o.cj)([A.Z], () => A.Z.getAllPending()),
        f = p.dN.useSetting() && null != t ? S.ZP.parse(void 0, t).content : t,
        M = O.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: D } = (0, T.ZP)(E.Z.PROFILE);
    a.useEffect(() => () => l.Z.wait(d.W3), []);
    let P = 'UserSettingsProfileCustomization';
    return ((0, _.j)({
        location: P + ' auto on',
        autoTrackExposure: !0
    }),
    (0, _.j)({
        location: P + ' auto off',
        autoTrackExposure: !1
    }),
    s)
        ? (0, n.jsx)(u.Z, {})
        : (0, n.jsxs)(T.Gt, {
              value: D,
              children: [
                  (0, n.jsx)(I.Z, {}),
                  (0, n.jsx)(N.Z, {
                      profilePreview: (0, n.jsx)(m.Z, {
                          user: e,
                          canUsePremiumCustomization: M,
                          onUpsellClick: x.Z,
                          pendingBio: f,
                          ...i
                      }),
                      children: (0, n.jsx)(R.Z, {})
                  }),
                  !M && (0, n.jsx)(C.Z, { user: e })
              ]
          });
}
