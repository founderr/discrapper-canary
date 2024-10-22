t.d(s, {
    Z: function () {
        return y;
    }
}),
    t(47120);
var n,
    a,
    i = t(200651),
    r = t(192379),
    o = t(120356),
    l = t.n(o),
    c = t(512722),
    d = t.n(c),
    _ = t(442837),
    u = t(622535),
    E = t(481060),
    T = t(570140),
    S = t(232567),
    I = t(809206),
    N = t(497321),
    m = t(634894),
    C = t(100527),
    A = t(906732),
    g = t(475977),
    h = t(957730),
    O = t(31590),
    p = t(53691),
    R = t(267717),
    x = t(296810),
    M = t(921813),
    f = t(935147),
    D = t(246946),
    L = t(25990),
    P = t(594174),
    b = t(626135),
    Z = t(74538),
    v = t(695346),
    j = t(265159),
    B = t(532495),
    U = t(981631),
    G = t(689938),
    F = t(111265);
function y() {
    let e = (0, _.e7)([P.default], () => {
        let e = P.default.getCurrentUser();
        return d()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
    });
    r.useEffect(() => {
        (0, S.In)(e.id);
    }, [e.id]);
    let s = (0, _.e7)([D.Z], () => D.Z.hidePersonalInformation),
        { pendingBio: t, ...n } = (0, _.cj)([L.Z], () => L.Z.getAllPending()),
        a = (0, _.e7)([L.Z], () => L.Z.showNotice()),
        o = v.dN.useSetting() && null != t ? h.ZP.parse(void 0, t).content : t,
        c = Z.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: y } = (0, A.ZP)(C.Z.PROFILE);
    r.useEffect(() => () => T.Z.wait(I.W3), []);
    let V = 'UserSettingsProfileCustomization';
    (0, m.j)({
        location: V + ' auto on',
        autoTrackExposure: !0
    }),
        (0, m.j)({
            location: V + ' auto off',
            autoTrackExposure: !1
        });
    let {
            enabled: Y,
            showSegmentedControl: k,
            showFloatingUpsell: w
        } = O.Z.useExperiment(
            { location: 'UserSettingsProfileCustomization' },
            {
                autoTrackExposure: !c,
                disable: c
            }
        ),
        [H, W] = r.useState(0),
        [K, z] = r.useState(!1),
        Q = r.useMemo(
            () =>
                k
                    ? [
                          {
                              name: G.Z.Messages.PREMIUM_UPSELL_PROFILE_SEGMENTED_CONTROL_NON_NITRO,
                              value: 0
                          },
                          {
                              name: G.Z.Messages.PREMIUM_UPSELL_PROFILE_SEGMENTED_CONTROL_NITRO,
                              value: 1
                          }
                      ]
                    : [],
            [k]
        ),
        X = !Y || w || (k && 0 === H),
        q = !c && (!Y || w || (k && 1 === H)),
        J = r.useRef(null),
        $ = r.useCallback((e) => {
            1 === e && b.default.track(U.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'segmented_control' }), W(e);
        }, []);
    return s
        ? (0, i.jsx)(N.Z, {})
        : (0, i.jsxs)(A.Gt, {
              value: y,
              children: [
                  (0, i.jsx)(g.Z, {}),
                  k &&
                      !c &&
                      (0, i.jsx)(E.SegmentedControl, {
                          className: l()({
                              [F.segmentedControlNonNitro]: 0 === H,
                              [F.segmentedControlTryItOut]: 1 === H
                          }),
                          options: Q,
                          value: H,
                          onChange: (e) => $(e.value),
                          look: 'pill'
                      }),
                  X &&
                      (0, i.jsx)(x.Z, {
                          profilePreview: (0, i.jsx)(M.Z, {
                              user: e,
                              canUsePremiumCustomization: c,
                              onUpsellClick: j.Z,
                              pendingBio: o,
                              ...n
                          }),
                          children: (0, i.jsx)(B.Z, {})
                      }),
                  (0, i.jsx)(u.$, {
                      onChange: (e) => z(e),
                      threshold: 0.25,
                      active: w,
                      children: (0, i.jsx)('div', {
                          ref: J,
                          children: (0, i.jsx)(f.Z, {
                              user: e,
                              shouldShow: q,
                              isVisible: K
                          })
                      })
                  }),
                  w &&
                      !a &&
                      (0, i.jsx)(p.p, {
                          className: F.floatingNitroUpsell,
                          showUpsell: w && !K,
                          text: G.Z.Messages.PREMIUM_UPSELL_PROFILE_TRY_IT_OUT_UPSELL.format({ onClick: R.openPremiumTryItOutProfileUpsell }),
                          textVariant: 'heading-md/medium',
                          button: (0, i.jsxs)(E.ShinyButton, {
                              className: F.floatingNitroButton,
                              innerClassName: F.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  b.default.track(U.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == J || null === (e = J.current) || void 0 === e || e.scrollIntoView({ behavior: 'smooth' });
                              },
                              color: E.Button.Colors.GREEN,
                              size: E.ButtonSizes.MEDIUM,
                              children: [
                                  (0, i.jsx)(E.NitroWheelIcon, {
                                      size: 'sm',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(E.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: G.Z.Messages.TRY_IT_OUT
                                  })
                              ]
                          })
                      })
              ]
          });
}
((a = n || (n = {}))[(a.NON_NITRO = 0)] = 'NON_NITRO'), (a[(a.TRY_IT_OUT = 1)] = 'TRY_IT_OUT');
