"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  r = n("703809"),
  o = n("90915"),
  u = n("394846"),
  d = n("446674"),
  c = n("825573"),
  f = n("77078"),
  E = n("206230"),
  h = n("338733"),
  _ = n("584369"),
  C = n("915639"),
  S = n("161778"),
  g = n("471671"),
  T = n("439932"),
  m = n("779601"),
  p = n("69927"),
  I = n("983689"),
  A = n("628922"),
  N = n("49111");
n("597323");
let O = new Set([N.Routes.LOGIN, N.Routes.REGISTER]);
var v = a.memo(function(e) {
  let {
    children: t,
    skipsSettingDefaultPageTitle: l
  } = e;
  (0, p.usePageTitleManager)({
    skipsSettingDefaultPageTitle: l
  });
  let {
    clientThemesClassName: N,
    clientThemesCSS: v
  } = (0, h.default)(), R = a.createElement("style", {
    [h.CLIENT_THEMES_DATA_ATTRIBUTE]: !0
  }, v);
  return (0, i.jsxs)(r.Helmet, {
    children: [function(e) {
      let {
        locale: t,
        theme: n
      } = (0, d.useStateFromStoresObject)([S.default, C.default], () => ({
        locale: C.default.locale,
        theme: S.default.theme
      })), l = (0, d.useStateFromStores)([g.default], () => g.default.isFocused(), []), {
        reducedMotion: r,
        alwaysShowLinkDecorations: c
      } = a.useContext(f.AccessibilityPreferencesContext), {
        fontScale: h,
        fontScaleClass: p,
        keyboardModeEnabled: N,
        saturation: v,
        desaturateUserColors: R,
        useForcedColors: M,
        systemForcedColors: L
      } = (0, d.useStateFromStoresObject)([E.default], () => {
        let {
          fontScale: e,
          fontScaleClass: t,
          keyboardModeEnabled: n,
          saturation: i,
          desaturateUserColors: a,
          useForcedColors: l,
          systemForcedColors: s
        } = E.default;
        return {
          fontScale: e,
          fontScaleClass: t,
          keyboardModeEnabled: n,
          saturation: i,
          desaturateUserColors: a,
          useForcedColors: l,
          systemForcedColors: s
        }
      }), y = (0, o.useLocation)(), D = a.useMemo(() => O.has(y.pathname), [y.pathname]);
      (0, I.default)(window, D);
      let P = (0, A.default)(window, __OVERLAY__ || l),
        w = (0, d.useStateFromStores)([_.default], () => _.default.sidebarWidth),
        b = (0, f.useRedesignIconContext)().enabled;
      return (0, i.jsx)("html", {
        lang: t,
        style: "font-size: ".concat(h, "%; --saturation-factor: ").concat(v, "; --devtools-sidebar-width: ").concat(w, "px;"),
        className: s(e, {
          overlay: __OVERLAY__,
          "mouse-mode": P,
          "keyboard-mode": N,
          "reduce-motion": r.enabled,
          "full-motion": !r.enabled,
          "is-mobile": u.isMobile,
          "app-focused": l,
          "low-saturation": v <= f.LOW_SATURATION_THRESHOLD,
          "decorate-links": c,
          "desaturate-user-colors": R,
          "disable-forced-colors": !M && "active" === L,
          "enable-forced-colors": M,
          "show-redesigned-icons": b
        }, (0, T.getThemeClass)(n), (0, m.default)(), p)
      })
    }(N), function() {
      let [e, t] = a.useState([]);
      return a.useEffect(() => {
        Promise.all(c.fontsToPreload.map(e => n("437087")("@discordapp/tokens/typography/generated/gg-sans/".concat(e, ".woff2").replace("@discordapp/tokens/typography/generated/gg-sans/", "./")).then(e => {
          let {
            default: t
          } = e;
          return t
        }))).then(e => t(e))
      }, []), (0, i.jsx)(i.Fragment, {
        children: e.map((e, t) => (0, i.jsx)("link", {
          rel: "preload",
          href: e,
          as: "font",
          type: "font/woff2",
          crossOrigin: "true"
        }, t))
      })
    }(), R, t]
  })
})