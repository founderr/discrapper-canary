n.d(t, {
    Z: function () {
        return F;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(570140),
    u = n(232567),
    m = n(809206),
    g = n(497321),
    h = n(634894),
    p = n(100527),
    x = n(906732),
    T = n(475977),
    S = n(957730),
    _ = n(53691),
    E = n(267717),
    C = n(296810),
    f = n(921813),
    I = n(610794),
    N = n(935147),
    A = n(246946),
    b = n(25990),
    v = n(594174),
    j = n(626135),
    O = n(74538),
    R = n(413182),
    P = n(695346),
    D = n(265159),
    y = n(532495),
    B = n(981631),
    L = n(388032),
    Z = n(676258);
function F() {
    let e = (0, a.e7)([v.default], () => {
        let e = v.default.getCurrentUser();
        return l()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
    });
    s.useEffect(() => {
        (0, u.In)(e.id);
    }, [e.id]);
    let t = (0, a.e7)([A.Z], () => A.Z.hidePersonalInformation),
        { pendingBio: n, ...r } = (0, a.cj)([b.Z], () => b.Z.getAllPending()),
        F = (0, a.e7)([b.Z], () => b.Z.showNotice()),
        M = P.dN.useSetting() && null != n ? S.ZP.parse(void 0, n).content : n,
        k = O.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: w } = (0, x.ZP)(p.Z.PROFILE);
    s.useEffect(() => () => d.Z.wait(m.W3), []);
    let U = 'UserSettingsProfileCustomization';
    (0, h.j)({
        location: U + ' auto on',
        autoTrackExposure: !0
    }),
        (0, h.j)({
            location: U + ' auto off',
            autoTrackExposure: !1
        });
    let [V, G] = s.useState(!1),
        { showRedesign: Y } = R.b.useExperiment({ location: 'profile customization' }),
        H = !k,
        z = s.useRef(null);
    return t
        ? (0, i.jsx)(g.Z, {})
        : (0, i.jsxs)(x.Gt, {
              value: w,
              children: [
                  (0, i.jsx)(T.Z, {}),
                  (0, i.jsx)(C.Z, {
                      profilePreview: (0, i.jsx)(f.Z, {
                          user: e,
                          canUsePremiumCustomization: k,
                          onUpsellClick: D.Z,
                          pendingBio: M,
                          ...r
                      }),
                      children: (0, i.jsx)(y.Z, {})
                  }),
                  Y && (0, i.jsx)(I.Z, {}),
                  (0, i.jsx)(o.$, {
                      onChange: (e) => G(e),
                      threshold: 0.25,
                      active: H,
                      children: (0, i.jsx)('div', {
                          ref: z,
                          children: (0, i.jsx)(N.Z, {
                              user: e,
                              shouldShow: H,
                              isVisible: V
                          })
                      })
                  }),
                  H &&
                      !F &&
                      (0, i.jsx)(_.p, {
                          className: Z.floatingNitroUpsell,
                          showUpsell: H && !V,
                          text: L.intl.format(L.t.TmfgIy, { onClick: () => (0, E.openPremiumTryItOutProfileUpsell)() }),
                          textVariant: 'heading-md/medium',
                          button: (0, i.jsxs)(c.ShinyButton, {
                              className: Z.floatingNitroButton,
                              innerClassName: Z.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  j.default.track(B.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == z || null === (e = z.current) || void 0 === e || e.scrollIntoView({ behavior: 'smooth' });
                              },
                              color: c.Button.Colors.GREEN,
                              size: c.ButtonSizes.MEDIUM,
                              children: [
                                  (0, i.jsx)(c.NitroWheelIcon, {
                                      size: 'sm',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: L.intl.string(L.t.uw9zIy)
                                  })
                              ]
                          })
                      })
              ]
          });
}
