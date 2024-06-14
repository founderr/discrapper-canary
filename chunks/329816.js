"use strict";
n.r(t), n("47120"), n("653041");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("802498"),
  l = n("266067"),
  u = n("613828"),
  d = n("873546"),
  _ = n("442837"),
  c = n("704215"),
  E = n("335854"),
  I = n("481060"),
  T = n("570140"),
  f = n("721037"),
  S = n("490173"),
  h = n("114250"),
  A = n("315263"),
  m = n("40851"),
  N = n("607070"),
  p = n("545006"),
  O = n("213609"),
  C = n("613413"),
  R = n("327943"),
  g = n("907459"),
  L = n("559407"),
  v = n("556766"),
  D = n("514361"),
  M = n("724145"),
  y = n("260035"),
  P = n("947519"),
  U = n("243778"),
  b = n("813744"),
  G = n("892254"),
  w = n("210887"),
  k = n("819640"),
  B = n("594174"),
  V = n("451478"),
  x = n("672752"),
  F = n("812663"),
  H = n("153850"),
  Y = n("725568"),
  j = n("78415"),
  W = n("806519"),
  K = n("358085"),
  z = n("74538"),
  Z = n("663993"),
  Q = n("823453"),
  X = n("628123"),
  q = n("962745"),
  J = n("151851"),
  $ = n("981631"),
  ee = n("921944"),
  et = n("776954");
n("792295"), Promise.resolve().then(n.bind(n, "62883")).then(e => {
  K.isPlatformEmbedded ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1) : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1)
}), (0, E.setDesignConfig)({
  getDefaultLinkInterceptor: A.default
}), (0, Z.makeLazy)({
  createPromise: () => Promise.all([n.e("99387"), n.e("40326"), n.e("80451"), n.e("30634"), n.e("54343")]).then(n.bind(n, "849493")),
  webpackId: "849493"
}), (0, Z.makeLazy)({
  createPromise: () => Promise.all([n.e("40326"), n.e("80451"), n.e("30634"), n.e("81811")]).then(n.bind(n, "80753")),
  webpackId: "80753"
});
let en = (0, Z.makeLazy)({
    createPromise: () => Promise.all([n.e("99387"), n.e("46369")]).then(n.bind(n, "177741")),
    webpackId: "177741"
  }),
  ei = r.memo(function(e) {
    let t = (0, _.useStateFromStores)([V.default], () => V.default.isFocused());
    return (0, i.jsx)(J.default, {
      ...e,
      focused: t
    })
  });
t.default = function(e) {
  let {
    children: t,
    skipsSettingDefaultPageTitle: n
  } = e, {
    pathname: s
  } = (0, u.useLocation)(), E = (0, K.getPlatform)(), A = d.isMobile || d.isTablet, V = (0, _.useStateFromStores)([w.default], () => w.default.darkSidebar ? $.ThemeTypes.DARK : void 0), Z = (0, _.useStateFromStores)([N.default], () => N.default.useForcedColors ? "yes" : "no"), [J, er] = (0, _.useStateFromStoresArray)([D.default], () => [D.default.isEditorOpen, D.default.isCoachmark]), es = (0, _.useStateFromStores)([R.default], () => R.default.isEditorOpen), ea = (0, _.useStateFromStores)([k.default], () => k.default.getLayers().includes($.Layers.USER_SETTINGS)), eo = (0, _.useStateFromStores)([B.default], () => z.default.canUseClientThemes(B.default.getCurrentUser())), el = J && !ea, eu = [];
  el && er && !eo && eu.push(c.DismissibleContent.CLIENT_THEMES_COACHMARK);
  let [ed, e_] = (0, U.useSelectedDismissibleContent)(eu, ee.DismissibleContentGroupName.SIDEBAR, !0);
  eu.push(c.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
  let ec = ed === c.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
    eE = ed === c.DismissibleContent.CLIENT_THEMES_COACHMARK;
  r.useEffect(() => {
    null == (0, l.matchPath)(s, {
      path: "invite",
      exact: !1,
      strict: !1
    }) && ec && !eE && (T.default.dispatch({
      type: "APP_ICON_EDITOR_OPEN"
    }), T.default.dispatch({
      type: "APP_ICON_TRACK_IMPRESSION",
      markAsDismissed: e_
    }))
  }, [ec, eE, e_, s]);
  let eI = r.useRef(document.body);
  return (0, i.jsx)(G.default, {
    children: (0, i.jsx)(p.default, {
      children: (0, i.jsxs)(I.RedesignIconContextProvider, {
        children: [(0, i.jsx)(Q.default, {
          skipsSettingDefaultPageTitle: n
        }), (0, i.jsx)(q.default, {
          children: (0, i.jsx)(X.default, {
            children: (0, i.jsxs)(I.FocusRingScope, {
              containerRef: eI,
              children: [(0, i.jsx)(W.MaskLibrary, {}), (0, i.jsx)(x.default, {}), (0, i.jsx)(o.FocusGuard, {}), null != E ? (0, i.jsx)(ei, {
                type: E,
                themeOverride: V
              }) : null, (0, i.jsx)(m.AppWindowContextProvider, {
                appContext: $.AppContext.APP,
                renderWindow: window,
                children: (0, i.jsxs)(H.AppLayerProvider, {
                  children: [(0, i.jsxs)("div", {
                    className: a()(et.appAsidePanelWrapper, A && et.mobileAppAsidePanelWrapper, {
                      [et.allowsScrolling]: (() => {
                        let e = (0, l.matchPath)(s, {
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
                        children: (0, i.jsx)(j.VerificationLayerProvider, {
                          children: (0, i.jsxs)(F.default.Provider, {
                            value: O.default,
                            children: [(0, i.jsx)("div", {
                              className: a()(A ? et.mobileApp : et.app),
                              children: t
                            }), (0, i.jsx)(L.default, {}), (0, i.jsx)(S.default, {}), (0, i.jsx)(I.Modals, {}), (0, i.jsx)(h.default, {}), (0, i.jsx)(Y.FullScreenLayers, {}), (0, i.jsx)(H.AppLayerContainer, {}), (0, i.jsx)(j.VerificationLayerContainer, {}), (0, i.jsx)(I.ToastContainer, {}), (0, i.jsx)(C.default, {}), (0, i.jsx)(b.default, {}), (0, i.jsx)(en, {})]
                          })
                        })
                      })
                    }), (0, i.jsx)(v.default, {}), (0, i.jsx)(f.default, {}), el && !er || eE ? (0, i.jsx)(M.default, {
                      markAsDismissed: e_
                    }) : null, !es || ea || eE ? null : (0, i.jsx)(g.default, {
                      isCoachmark: ec,
                      markAsDismissed: e_
                    }), (0, i.jsx)(P.default, {
                      mobile: A
                    })]
                  }), !1]
                })
              }), (0, i.jsx)(o.FocusGuard, {})]
            })
          })
        })]
      })
    })
  }, Z)
}