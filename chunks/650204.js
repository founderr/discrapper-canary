    "use strict";
    t.r(a), t("610138"), t("216116"), t("78328"), t("815648"), t("47120"), t("177593");
    var d, c, n, i, f, o = t("735250");
    t("92138"), t("470079");
    var r = t("202226"),
      l = t("512722"),
      s = t.n(l),
      b = t("832037"),
      u = t("464253"),
      p = t("485359"),
      h = t("395727"),
      m = t("471638"),
      _ = t("585275"),
      E = t("960048"),
      I = t("63063"),
      g = t("240849"),
      O = t("998502"),
      T = t("513566"),
      S = t("534713"),
      A = t("358085"),
      w = t("703656"),
      v = t("284737"),
      N = t("473159"),
      R = t("846519"),
      D = t("579806"),
      C = t("896361"),
      L = t("892254");
    t("235817");
    var P = t("798105"),
      y = t("44163"),
      M = t("710845");
    let k = 5 * t("70956").default.Millis.MINUTE,
      U = document.getElementById("app-mount");
    s()(null != U, "Could not find app-mount"), U.className = __OVERLAY__ ? "" : P.appMount;
    let x = (0, r.createRoot)(U),
      j = {
        "/oauth2/authorize": S.default
      },
      V = e => x.render((0, o.jsx)(L.default, {
        children: (0, o.jsx)(C.default, {
          children: (0, o.jsx)(e, {})
        })
      }));
    if (null != D.default) {
      null === (d = D.default.setUncaughtExceptionHandler) || void 0 === d || d.call(D.default, (e, a) => {
        setImmediate(() => {
          throw E.default.captureCrash(e), e
        })
      });
      let e = null === (c = (n = D.default.remoteApp).getVersion) || void 0 === c ? void 0 : c.call(n),
        a = null === (i = (f = D.default.remoteApp).getBuildNumber) || void 0 === i ? void 0 : i.call(f),
        t = {};
      null != D.default.remoteApp.getModuleVersions && (t = D.default.remoteApp.getModuleVersions()), E.default.setExtra({
        hostVersion: e,
        moduleVersions: t
      }), E.default.setTags({
        nativeBuildNumber: null == a ? void 0 : a.toString()
      });
      let o = Object.keys(t).filter(e => null != t[e]).map(e => "".concat(e, ": ").concat(t[e])).join(", ");
      new M.default().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(o, ", build: ").concat(a)), O.default.initializeExitHook()
    }
    if ((0, N.setupWindow)(window), __OVERLAY__) V(b.default.Overlay);
    else if (null != window.require && null == window.DiscordNative) V(b.default.OutdatedClient);
    else {
      if (document.addEventListener("scroll", e => e.preventDefault()), A.isPlatformEmbedded) {
        window.onbeforeunload = () => O.default.beforeUnload(), O.default.on("HELP_OPEN", () => window.open(I.default.getCommunityURL()));
        let e = new R.DelayedCall(k, () => O.default.purgeMemory());
        O.default.on("MAIN_WINDOW_BLUR", () => {
          e.delay(), O.default.setFocused(!1), (0, v.focus)(window, !1)
        }), O.default.on("MAIN_WINDOW_FOCUS", () => {
          e.cancel(), O.default.setFocused(!0), (0, v.focus)(window, !0)
        }), O.default.on("MAIN_WINDOW_PATH", function(e, a, t) {
          var d;
          let c = null != t ? new URLSearchParams(t) : null;
          (null === (d = j[a]) || void 0 === d || !d.call(j, c)) && (0, w.transitionTo)(a)
        }), O.default.on("MAIN_WINDOW_HIDDEN", () => {
          (0, v.hidden)(window)
        })
      }
      h.default.initialize(), u.default.init(), _.default.init(), y.default.init(), p.default.initialize(), g.default.initialize(), T.default.initialize(), m.initialize(), V(b.default.App)
    }