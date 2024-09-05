t.d(s, {
    Z: function () {
        return U;
    }
}),
    t(47120);
var n,
    a,
    i = t(735250),
    r = t(470079),
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
    R = t(296810),
    x = t(921813),
    f = t(935147),
    M = t(246946),
    D = t(25990),
    P = t(594174),
    L = t(74538),
    b = t(695346),
    Z = t(265159),
    v = t(532495),
    j = t(689938),
    B = t(663921);
function U() {
    let e = (0, _.e7)([P.default], () => {
        let e = P.default.getCurrentUser();
        return d()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
    });
    r.useEffect(() => {
        (0, S.In)(e.id);
    }, [e.id]);
    let s = (0, _.e7)([M.Z], () => M.Z.hidePersonalInformation),
        { pendingBio: t, ...n } = (0, _.cj)([D.Z], () => D.Z.getAllPending()),
        a = b.dN.useSetting() && null != t ? h.ZP.parse(void 0, t).content : t,
        o = L.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, A.ZP)(C.Z.PROFILE);
    r.useEffect(() => () => T.Z.wait(I.W3), []);
    let U = 'UserSettingsProfileCustomization';
    (0, m.j)({
        location: U + ' auto on',
        autoTrackExposure: !0
    }),
        (0, m.j)({
            location: U + ' auto off',
            autoTrackExposure: !1
        });
    let {
            enabled: G,
            showSegmentedControl: F,
            showFloatingUpsell: y
        } = O.Z.useExperiment(
            { location: 'UserSettingsProfileCustomization' },
            {
                autoTrackExposure: !o,
                disable: o
            }
        ),
        [V, Y] = r.useState(0),
        [w, k] = r.useState(!1),
        H = r.useMemo(
            () =>
                F
                    ? [
                          {
                              name: 'Non Nitro',
                              value: 0
                          },
                          {
                              name: 'Try It Out',
                              value: 1
                          }
                      ]
                    : [],
            [F]
        ),
        W = !G || y || (F && 0 === V),
        K = !G || (!o && (y || (F && 1 === V))),
        z = r.useRef(null);
    return s
        ? (0, i.jsx)(N.Z, {})
        : (0, i.jsxs)(A.Gt, {
              value: c,
              children: [
                  (0, i.jsx)(g.Z, {}),
                  F &&
                      !o &&
                      (0, i.jsx)(E.SegmentedControl, {
                          className: l()({
                              [B.segmentedControlNonNitro]: 0 === V,
                              [B.segmentedControlTryItOut]: 1 === V
                          }),
                          options: H,
                          value: V,
                          onChange: (e) => Y(e.value),
                          look: 'pill'
                      }),
                  W &&
                      (0, i.jsx)(R.Z, {
                          profilePreview: (0, i.jsx)(x.Z, {
                              user: e,
                              canUsePremiumCustomization: o,
                              onUpsellClick: Z.Z,
                              pendingBio: a,
                              ...n
                          }),
                          children: (0, i.jsx)(v.Z, {})
                      }),
                  K &&
                      (0, i.jsx)(u.$, {
                          onChange: (e) => k(e),
                          threshold: 0.25,
                          active: y,
                          children: (0, i.jsx)('div', {
                              ref: z,
                              children: (0, i.jsx)(f.Z, { user: e })
                          })
                      }),
                  y &&
                      (0, i.jsx)(p.p, {
                          className: B.floatingNitroUpsell,
                          showUpsell: y && !w,
                          text: 'Get Nitro and Stuff',
                          textVariant: 'heading-md/medium',
                          button: (0, i.jsxs)(E.ShinyButton, {
                              className: B.floatingNitroButton,
                              innerClassName: B.floatingNitroButtonInner,
                              onClick: () => {
                                  var e;
                                  return null == z ? void 0 : null === (e = z.current) || void 0 === e ? void 0 : e.scrollIntoView({ behavior: 'smooth' });
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
                                      children: j.Z.Messages.TRY_IT_OUT
                                  })
                              ]
                          })
                      })
              ]
          });
}
((a = n || (n = {}))[(a.NON_NITRO = 0)] = 'NON_NITRO'), (a[(a.TRY_IT_OUT = 1)] = 'TRY_IT_OUT');
