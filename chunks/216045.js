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
    u = t(442837),
    _ = t(622535),
    E = t(481060),
    T = t(570140),
    I = t(232567),
    S = t(809206),
    N = t(497321),
    m = t(634894),
    C = t(100527),
    g = t(906732),
    A = t(475977),
    h = t(957730),
    O = t(31590),
    p = t(53691),
    x = t(296810),
    R = t(921813),
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
    let e = (0, u.e7)([P.default], () => {
        let e = P.default.getCurrentUser();
        return d()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
    });
    r.useEffect(() => {
        (0, I.In)(e.id);
    }, [e.id]);
    let s = (0, u.e7)([M.Z], () => M.Z.hidePersonalInformation),
        { pendingBio: t, ...n } = (0, u.cj)([D.Z], () => D.Z.getAllPending()),
        a = b.dN.useSetting() && null != t ? h.ZP.parse(void 0, t).content : t,
        o = L.ZP.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, g.ZP)(C.Z.PROFILE);
    r.useEffect(() => () => T.Z.wait(S.W3), []);
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
            showSegmentedControl: y,
            showFloatingUpsell: F
        } = O.Z.useExperiment(
            { location: 'UserSettingsProfileCustomization' },
            {
                autoTrackExposure: !o,
                disable: o
            }
        ),
        [V, w] = r.useState(0),
        [k, Y] = r.useState(!1),
        H = r.useMemo(
            () =>
                y
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
            [y]
        ),
        W = !G || F || (y && 0 === V),
        K = !G || (!o && (F || (y && 1 === V))),
        z = r.useRef(null);
    return s
        ? (0, i.jsx)(N.Z, {})
        : (0, i.jsxs)(g.Gt, {
              value: c,
              children: [
                  (0, i.jsx)(A.Z, {}),
                  y &&
                      !o &&
                      (0, i.jsx)(E.SegmentedControl, {
                          className: l()({
                              [B.segmentedControlNonNitro]: 0 === V,
                              [B.segmentedControlTryItOut]: 1 === V
                          }),
                          options: H,
                          value: V,
                          onChange: (e) => w(e.value),
                          look: 'pill'
                      }),
                  W &&
                      (0, i.jsx)(x.Z, {
                          profilePreview: (0, i.jsx)(R.Z, {
                              user: e,
                              canUsePremiumCustomization: o,
                              onUpsellClick: Z.Z,
                              pendingBio: a,
                              ...n
                          }),
                          children: (0, i.jsx)(v.Z, {})
                      }),
                  K &&
                      (0, i.jsx)(_.$, {
                          onChange: (e) => Y(e),
                          threshold: 0.25,
                          active: F,
                          children: (0, i.jsx)('div', {
                              ref: z,
                              children: (0, i.jsx)(f.Z, { user: e })
                          })
                      }),
                  F &&
                      (0, i.jsx)(p.p, {
                          className: B.floatingNitroUpsell,
                          showUpsell: F && !k,
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
