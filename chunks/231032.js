"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ea
  }
}), n("222007"), n("424973");
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  r = n("965955"),
  o = n("803182"),
  u = n("90915"),
  d = n("394846"),
  c = n("446674"),
  f = n("151426"),
  E = n("143435"),
  h = n("77078"),
  _ = n("913144"),
  C = n("916580"),
  S = n("988738"),
  g = n("521735"),
  T = n("572544"),
  m = n("244201"),
  p = n("206230"),
  I = n("320679"),
  A = n("428958"),
  N = n("154403"),
  O = n("805199"),
  v = n("529531"),
  R = n("44164"),
  M = n("714657"),
  L = n("262194"),
  y = n("36773"),
  D = n("374036"),
  P = n("384997"),
  w = n("234819"),
  b = n("182033"),
  U = n("928741"),
  F = n("161778"),
  G = n("778588"),
  k = n("697218"),
  x = n("471671"),
  H = n("791106"),
  V = n("542489"),
  B = n("983782"),
  j = n("708169"),
  W = n("668596"),
  Y = n("587974"),
  K = n("773336"),
  z = n("719923"),
  q = n("269936"),
  Q = n("302537"),
  Z = n("967889"),
  X = n("102999"),
  J = n("160139"),
  $ = n("49111"),
  ee = n("994428"),
  et = n("414482");
n("551184"), n.el("573055").then(n.bind(n, "573055")).then(e => {
  K.isPlatformEmbedded ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1) : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1)
}), (0, E.setDesignConfig)({
  getDefaultLinkInterceptor: T.default
}), (0, q.makeLazy)({
  createPromise: () => n.el("737511").then(n.bind(n, "737511")),
  webpackId: "737511"
}), (0, q.makeLazy)({
  createPromise: () => n.el("424797").then(n.bind(n, "424797")),
  webpackId: "424797"
});
let en = (0, q.makeLazy)({
    createPromise: () => n.el("406915").then(n.bind(n, "406915")),
    webpackId: "406915"
  }),
  ei = a.memo(function(e) {
    let t = (0, c.useStateFromStores)([x.default], () => x.default.isFocused());
    return (0, i.jsx)(J.default, {
      ...e,
      focused: t
    })
  });
var ea = function(e) {
  let {
    children: t,
    skipsSettingDefaultPageTitle: n
  } = e, {
    pathname: l
  } = (0, u.useLocation)(), E = (0, K.getPlatform)(), T = d.isMobile || d.isTablet, x = (0, c.useStateFromStores)([F.default], () => F.default.darkSidebar ? $.ThemeTypes.DARK : void 0), q = (0, c.useStateFromStores)([p.default], () => p.default.useForcedColors ? "yes" : "no"), [J, ea] = (0, c.useStateFromStoresArray)([M.default], () => [M.default.isEditorOpen, M.default.isCoachmark]), el = (0, c.useStateFromStores)([O.default], () => O.default.isEditorOpen), {
    enabled: es
  } = b.default.useExperiment({
    location: "client_themes_coachmark_reintro"
  }, {
    autoTrackExposure: !0
  }), er = (0, c.useStateFromStores)([G.default], () => G.default.getLayers().includes($.Layers.USER_SETTINGS)), eo = (0, c.useStateFromStores)([k.default], () => z.default.canUseClientThemes(k.default.getCurrentUser())), eu = J && !er, ed = [];
  eu && ea && es && !eo && ed.push(f.DismissibleContent.CLIENT_THEMES_COACHMARK);
  let [ec, ef] = (0, P.useSelectedDismissibleContent)(ed, ee.DismissibleContentGroupName.SIDEBAR, !0);
  ed.push(f.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
  let eE = ec === f.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
    eh = ec === f.DismissibleContent.CLIENT_THEMES_COACHMARK;
  a.useEffect(() => {
    let e = (0, o.matchPath)(l, {
      path: "invite",
      exact: !1,
      strict: !1
    });
    null == e && eE && !eh && (_.default.dispatch({
      type: "APP_ICON_EDITOR_OPEN"
    }), _.default.dispatch({
      type: "APP_ICON_TRACK_IMPRESSION",
      markAsDismissed: ef
    }))
  }, [eE, eh, ef, l]);
  let e_ = a.useRef(document.body);
  return (0, i.jsx)(U.default, {
    children: (0, i.jsx)(I.default, {
      children: (0, i.jsxs)(h.RedesignIconContextProvider, {
        children: [(0, i.jsx)(Q.default, {
          skipsSettingDefaultPageTitle: n
        }), (0, i.jsx)(X.default, {
          children: (0, i.jsx)(Z.default, {
            children: (0, i.jsxs)(h.FocusRingScope, {
              containerRef: e_,
              children: [(0, i.jsx)(Y.MaskLibrary, {}), (0, i.jsx)(H.default, {}), (0, i.jsx)(r.FocusGuard, {}), null != E ? (0, i.jsx)(ei, {
                type: E,
                themeOverride: x
              }) : null, (0, i.jsx)(m.AppWindowContextProvider, {
                appContext: $.AppContext.APP,
                renderWindow: window,
                children: (0, i.jsxs)(B.AppLayerProvider, {
                  children: [(0, i.jsxs)("div", {
                    className: s(et.appAsidePanelWrapper, T && et.mobileAppAsidePanelWrapper, {
                      [et.allowsScrolling]: (() => {
                        let e = (0, o.matchPath)(l, {
                          path: $.Routes.APPLICATION_DIRECTORY,
                          exact: !1,
                          strict: !1
                        });
                        return (!!d.isMobile || !!d.isTablet) && null != e || !1
                      })()
                    }),
                    children: [(0, i.jsx)("div", {
                      className: et.notAppAsidePanel,
                      "data-app-not-dev-tools": !0,
                      children: (0, i.jsx)(y.CommonConfettiCannonContextProvider, {
                        children: (0, i.jsx)(W.VerificationLayerProvider, {
                          children: (0, i.jsxs)(V.default.Provider, {
                            value: A.default,
                            children: [(0, i.jsx)("div", {
                              className: s(T ? et.mobileApp : et.app),
                              children: t
                            }), (0, i.jsx)(R.default, {}), (0, i.jsx)(S.default, {}), (0, i.jsx)(h.Modals, {}), (0, i.jsx)(g.default, {}), (0, i.jsx)(j.FullScreenLayers, {}), (0, i.jsx)(B.AppLayerContainer, {}), (0, i.jsx)(W.VerificationLayerContainer, {}), (0, i.jsx)(h.ToastContainer, {}), (0, i.jsx)(N.default, {}), (0, i.jsx)(w.default, {}), (0, i.jsx)(en, {})]
                          })
                        })
                      })
                    }), (0, i.jsx)(C.default, {}), eu && !ea || eh ? (0, i.jsx)(L.default, {
                      markAsDismissed: ef
                    }) : null, !el || er || eh ? null : (0, i.jsx)(v.default, {
                      isCoachmark: eE,
                      markAsDismissed: ef
                    }), (0, i.jsx)(D.default, {
                      mobile: T
                    })]
                  }), !1]
                })
              }), (0, i.jsx)(r.FocusGuard, {})]
            })
          })
        })]
      })
    })
  }, q)
}