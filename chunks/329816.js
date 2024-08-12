n(47120), n(653041);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(802498),
  l = n(266067),
  u = n(873546),
  c = n(442837),
  d = n(704215),
  _ = n(335854),
  E = n(481060),
  f = n(570140),
  h = n(721037),
  p = n(490173),
  m = n(114250),
  I = n(315263),
  T = n(40851),
  g = n(607070),
  S = n(899663),
  A = n(793903),
  N = n(213609),
  v = n(613413),
  O = n(94795),
  R = n(327943),
  C = n(907459),
  y = n(559407),
  D = n(556766),
  L = n(514361),
  b = n(724145),
  M = n(260035),
  P = n(947519),
  U = n(243778),
  w = n(314910),
  x = n(84615),
  G = n(429142),
  k = n(813744),
  B = n(311476),
  F = n(892254),
  V = n(210887),
  H = n(978781),
  Z = n(819640),
  Y = n(594174),
  j = n(451478),
  W = n(358085),
  K = n(74538),
  z = n(663993),
  q = n(823453),
  Q = n(628123),
  X = n(436774),
  $ = n(962745),
  J = n(686546),
  ee = n(151851),
  et = n(981631),
  en = n(921944),
  er = n(376593);
n(167666), Promise.resolve().then(n.bind(n, 62883)).then(e => {
  W.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
}), (0, _.E)({
  getDefaultLinkInterceptor: I.default
}), (0, z.Un)({
  createPromise: () => Promise.all([
n.e('77298'),
n.e('80451'),
n.e('30634'),
n.e('54343')
  ]).then(n.bind(n, 849493)),
  webpackId: 849493
}), (0, z.Un)({
  createPromise: () => Promise.all([
n.e('77298'),
n.e('80451'),
n.e('30634'),
n.e('81811')
  ]).then(n.bind(n, 80753)),
  webpackId: 80753
});
let ei = (0, z.Un)({
createPromise: () => n.e('46369').then(n.bind(n, 177741)),
webpackId: 177741
  }),
  ea = i.memo(function(e) {
let t = (0, c.e7)([j.Z], () => j.Z.isFocused());
return (0, r.jsx)(ee.Z, {
  ...e,
  focused: t
});
  });
t.Z = function(e) {
  let {
children: t,
skipsSettingDefaultPageTitle: n
  } = e, {
pathname: a
  } = (0, l.TH)(), _ = (0, W.getPlatform)(), I = u.tq || u.Em, j = (0, c.e7)([V.Z], () => V.Z.darkSidebar ? et.BRd.DARK : void 0), z = (0, c.e7)([g.Z], () => g.Z.useForcedColors ? 'yes' : 'no'), [ee, es, eo] = (0, c.Wu)([L.Z], () => [
L.Z.isEditorOpen,
L.Z.isCoachmark,
L.Z.isPreview
  ]), [el, eu] = (0, c.Wu)([R.Z], () => [
R.Z.isEditorOpen,
R.Z.isUpsellPreview
  ]), ec = (0, c.e7)([Z.Z], () => Z.Z.getLayers().includes(et.S9g.USER_SETTINGS)), ed = (0, c.e7)([Y.default], () => K.ZP.canUseClientThemes(Y.default.getCurrentUser())), e_ = ee && !ec, eE = [];
  e_ && es && !ed && eE.push(d.z.CLIENT_THEMES_COACHMARK);
  let [ef, eh] = (0, U.US)(eE, en.R.SIDEBAR, !0);
  eE.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
  let ep = ef === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
em = ef === d.z.CLIENT_THEMES_COACHMARK;
  i.useEffect(() => {
null == (0, l.LX)(a, {
  path: 'invite',
  exact: !1,
  strict: !1
}) && ep && !em && ((0, O.nJ)(), f.Z.dispatch({
  type: 'APP_ICON_TRACK_IMPRESSION',
  markAsDismissed: eh
}));
  }, [
ep,
em,
eh,
a
  ]);
  let eI = i.useRef(document.body),
eT = e_ && !es || em,
eg = el && !ec && !em,
eS = eo || eu,
{
  enabled: eA
} = B.Z.useExperiment({
  location: 'AppSkeleton'
}, {
  autoTrackExposure: eS && (eT || eg),
  disable: !eS
});
  return (0, r.jsx)(F.Z, {
children: (0, r.jsx)(S.Z, {
  children: (0, r.jsxs)(E.RedesignIconContextProvider, {
    children: [
      (0, r.jsx)(q.Z, {
        skipsSettingDefaultPageTitle: n
      }),
      (0, r.jsx)($.Z, {
        children: (0, r.jsx)(Q.Z, {
          children: (0, r.jsxs)(E.FocusRingScope, {
            containerRef: eI,
            children: [
              (0, r.jsx)(J.Co, {}),
              (0, r.jsx)(X.ZP, {}),
              (0, r.jsx)(o.OU, {}),
              null != _ ? (0, r.jsx)(ea, {
                type: _,
                themeOverride: j
              }) : null,
              (0, r.jsx)(T.Wu, {
                appContext: et.IlC.APP,
                renderWindow: window,
                children: (0, r.jsxs)(w.yP, {
                  children: [
                    (0, r.jsxs)('div', {
                      className: s()(er.appAsidePanelWrapper, I && er.mobileAppAsidePanelWrapper, {
                        [er.allowsScrolling]: (() => {
                          let e = (0, l.LX)(a, {
                            path: et.Z5c.APPLICATION_DIRECTORY,
                            exact: !1,
                            strict: !1
                          });
                          return (!!u.tq || !!u.Em) && null != e || !1;
                        })()
                      }),
                      children: [
                        (0, r.jsx)('div', {
                          className: er.notAppAsidePanel,
                          'data-app-not-dev-tools': !0,
                          children: (0, r.jsx)(M.m, {
                            children: (0, r.jsx)(G.OR, {
                              children: (0, r.jsxs)(A.Z.Provider, {
                                value: N.Z,
                                children: [
                                  (0, r.jsx)('div', {
                                    className: s()(I ? er.mobileApp : er.app),
                                    children: t
                                  }),
                                  (0, r.jsx)(y.Z, {}),
                                  (0, r.jsx)(p.Z, {}),
                                  (0, r.jsx)(E.Modals, {}),
                                  (0, r.jsx)(m.Z, {}),
                                  (0, r.jsx)(x.Ox, {}),
                                  (0, r.jsx)(w.Un, {}),
                                  (0, r.jsx)(G.ot, {}),
                                  (0, r.jsx)(E.ToastContainer, {}),
                                  (0, r.jsx)(v.Z, {}),
                                  (0, r.jsx)(k.Z, {}),
                                  (0, r.jsx)(ei, {})
                                ]
                              })
                            })
                          })
                        }),
                        (0, r.jsx)(D.Z, {}),
                        (0, r.jsx)(h.Z, {}),
                        eT && !eA && (0, r.jsx)(b.Z, {
                          markAsDismissed: eh
                        }),
                        eg && !eA && (0, r.jsx)(C.Z, {
                          isCoachmark: ep,
                          markAsDismissed: eh
                        }),
                        (eT || eg) && eA && (0, r.jsx)(H.Z, {
                          initialTab: eg ? H._.APP_ICONS : H._.CLIENT_THEMES,
                          markAsDismissed: eh
                        }),
                        (0, r.jsx)(P.Z, {
                          mobile: I
                        })
                      ]
                    }),
                    !1
                  ]
                })
              }),
              (0, r.jsx)(o.OU, {})
            ]
          })
        })
      })
    ]
  })
})
  }, z);
};