"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(470716),
  l = n(266067),
  u = n(873546),
  _ = n(442837),
  c = n(316792),
  d = n(481060),
  E = n(607070),
  I = n(168551),
  T = n(19759),
  h = n(706454),
  f = n(210887),
  S = n(451478),
  A = n(792125),
  N = n(597952),
  m = n(252618),
  O = n(587061),
  p = n(392358),
  R = n(981631);
n(209525);
let g = new Set([R.Z5c.LOGIN, R.Z5c.REGISTER]);
t.Z = r.memo(function(e) {
  let {
    children: t,
    skipsSettingDefaultPageTitle: s
  } = e;
  (0, m.ZD)({
    skipsSettingDefaultPageTitle: s
  });
  let {
    clientThemesClassName: R,
    clientThemesCSS: C
  } = (0, I.ZP)(), v = r.createElement("style", {
    [I.PQ]: !0
  }, C);
  return (0, i.jsxs)(a.ql, {
    children: [function(e) {
      let {
        locale: t,
        theme: n
      } = (0, _.cj)([f.Z, h.default], () => ({
        locale: h.default.locale,
        theme: f.Z.theme
      })), s = (0, _.e7)([S.Z], () => S.Z.isFocused(), []), {
        reducedMotion: a,
        alwaysShowLinkDecorations: c
      } = r.useContext(d.AccessibilityPreferencesContext), {
        fontScale: I,
        fontScaleClass: m,
        keyboardModeEnabled: R,
        saturation: C,
        desaturateUserColors: v,
        useForcedColors: L,
        systemForcedColors: D
      } = (0, _.cj)([E.Z], () => {
        let {
          fontScale: e,
          fontScaleClass: t,
          keyboardModeEnabled: n,
          saturation: i,
          desaturateUserColors: r,
          useForcedColors: s,
          systemForcedColors: o
        } = E.Z;
        return {
          fontScale: e,
          fontScaleClass: t,
          keyboardModeEnabled: n,
          saturation: i,
          desaturateUserColors: r,
          useForcedColors: s,
          systemForcedColors: o
        }
      }), M = (0, l.TH)(), P = r.useMemo(() => g.has(M.pathname), [M.pathname]);
      (0, O.Z)(window, P);
      let y = (0, p.Z)(window, __OVERLAY__ || s),
        U = (0, _.e7)([T.Z], () => T.Z.sidebarWidth),
        b = (0, d.useRedesignIconContext)().enabled,
        G = window.CSS.supports("selector(::-webkit-scrollbar)");
      return (0, i.jsx)("html", {
        lang: t,
        style: "font-size: ".concat(I, "%; --saturation-factor: ").concat(C, "; --devtools-sidebar-width: ").concat(U, "px;"),
        className: o()(e, {
          overlay: __OVERLAY__,
          "mouse-mode": y,
          "keyboard-mode": R,
          "reduce-motion": a.enabled,
          "full-motion": !a.enabled,
          "is-mobile": u.tq,
          "app-focused": s,
          "low-saturation": C <= d.LOW_SATURATION_THRESHOLD,
          "decorate-links": c,
          "desaturate-user-colors": v,
          "disable-forced-colors": !L && "active" === D,
          "enable-forced-colors": L,
          "show-redesigned-icons": b,
          "no-webkit-scrollbar": !G,
          "has-webkit-scrollbar": G
        }, (0, A.Q)(n), (0, N.Z)(), m)
      })
    }(R), function() {
      let [e, t] = r.useState([]);
      return r.useEffect(() => {
        Promise.all(c.L.map(e => n(529305)("./".concat(e, ".woff2")).then(e => {
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
    }(), v, t]
  })
})