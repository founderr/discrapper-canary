n.d(t, {
    Z: function () {
        return V;
    }
}),
    n(47120);
var i,
    s,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(512722),
    d = n.n(c),
    u = n(442837),
    m = n(622535),
    h = n(481060),
    g = n(570140),
    p = n(232567),
    x = n(809206),
    S = n(497321),
    T = n(634894),
    C = n(100527),
    _ = n(906732),
    E = n(475977),
    I = n(957730),
    f = n(31590),
    N = n(53691),
    A = n(267717),
    b = n(296810),
    v = n(921813),
    j = n(610794),
    O = n(935147),
    R = n(246946),
    P = n(25990),
    D = n(594174),
    y = n(626135),
    B = n(74538),
    L = n(413182),
    Z = n(695346),
    F = n(265159),
    M = n(532495),
    k = n(981631),
    w = n(388032),
    U = n(520443);
function V() {
    let e = (0, u.e7)([D.default], () => {
        let e = D.default.getCurrentUser();
        return d()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
    });
    l.useEffect(() => {
        (0, p.In)(e.id);
    }, [e.id]);
    let t = (0, u.e7)([R.Z], () => R.Z.hidePersonalInformation),
        { pendingBio: n, ...i } = (0, u.cj)([P.Z], () => P.Z.getAllPending()),
        s = (0, u.e7)([P.Z], () => P.Z.showNotice()),
        a = Z.dN.useSetting() && null != n ? I.ZP.parse(void 0, n).content : n,
        c = B.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: V } = (0, _.ZP)(C.Z.PROFILE);
    l.useEffect(() => () => g.Z.wait(x.W3), []);
    let G = 'UserSettingsProfileCustomization';
    (0, T.j)({
        location: G + ' auto on',
        autoTrackExposure: !0
    }),
        (0, T.j)({
            location: G + ' auto off',
            autoTrackExposure: !1
        });
    let {
            enabled: Y,
            showSegmentedControl: H,
            showFloatingUpsell: z
        } = f.Z.useExperiment(
            { location: 'UserSettingsProfileCustomization' },
            {
                autoTrackExposure: !c,
                disable: c
            }
        ),
        [W, K] = l.useState(0),
        [q, Q] = l.useState(!1),
        X = l.useMemo(
            () =>
                H
                    ? [
                          {
                              name: w.intl.string(w.t['q/MslJ']),
                              value: 0
                          },
                          {
                              name: w.intl.string(w.t['5SObwM']),
                              value: 1
                          }
                      ]
                    : [],
            [H]
        ),
        J = !Y || z || (H && 0 === W),
        $ = !c && (!Y || z || (H && 1 === W)),
        { showRedesign: ee } = L.b.useExperiment({ location: 'profile customization' }),
        et = l.useRef(null),
        en = l.useCallback((e) => {
            1 === e && y.default.track(k.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'segmented_control' }), K(e);
        }, []);
    return t
        ? (0, r.jsx)(S.Z, {})
        : (0, r.jsxs)(_.Gt, {
              value: V,
              children: [
                  (0, r.jsx)(E.Z, {}),
                  H &&
                      !c &&
                      (0, r.jsx)(h.SegmentedControl, {
                          className: o()({
                              [U.segmentedControlNonNitro]: 0 === W,
                              [U.segmentedControlTryItOut]: 1 === W
                          }),
                          options: X,
                          value: W,
                          onChange: (e) => en(e.value),
                          look: 'pill'
                      }),
                  J &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(b.Z, {
                                  profilePreview: (0, r.jsx)(v.Z, {
                                      user: e,
                                      canUsePremiumCustomization: c,
                                      onUpsellClick: F.Z,
                                      pendingBio: a,
                                      ...i
                                  }),
                                  children: (0, r.jsx)(M.Z, {})
                              }),
                              ee && (0, r.jsx)(j.Z, {})
                          ]
                      }),
                  (0, r.jsx)(m.$, {
                      onChange: (e) => Q(e),
                      threshold: 0.25,
                      active: z,
                      children: (0, r.jsx)('div', {
                          ref: et,
                          children: (0, r.jsx)(O.Z, {
                              user: e,
                              shouldShow: $,
                              isVisible: q
                          })
                      })
                  }),
                  z &&
                      !s &&
                      (0, r.jsx)(N.p, {
                          className: U.floatingNitroUpsell,
                          showUpsell: z && !q,
                          text: w.intl.format(w.t.TmfgIy, { onClick: () => (0, A.openPremiumTryItOutProfileUpsell)() }),
                          textVariant: 'heading-md/medium',
                          button: (0, r.jsxs)(h.ShinyButton, {
                              className: U.floatingNitroButton,
                              innerClassName: U.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  y.default.track(k.rMx.TRY_IT_OUT_PRESET_CLICKED, { cta_variant: 'floating_action_button' }), null == et || null === (e = et.current) || void 0 === e || e.scrollIntoView({ behavior: 'smooth' });
                              },
                              color: h.Button.Colors.GREEN,
                              size: h.ButtonSizes.MEDIUM,
                              children: [
                                  (0, r.jsx)(h.NitroWheelIcon, {
                                      size: 'sm',
                                      color: 'currentColor'
                                  }),
                                  (0, r.jsx)(h.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'currentColor',
                                      children: w.intl.string(w.t.uw9zIy)
                                  })
                              ]
                          })
                      })
              ]
          });
}
((s = i || (i = {}))[(s.NON_NITRO = 0)] = 'NON_NITRO'), (s[(s.TRY_IT_OUT = 1)] = 'TRY_IT_OUT');
