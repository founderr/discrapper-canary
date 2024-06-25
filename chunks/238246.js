n(47120);
var l, i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  o = n(512722),
  c = n.n(o),
  u = n(613828),
  d = n(442837),
  h = n(481060),
  m = n(490173),
  E = n(40851),
  p = n(607070),
  g = n(899663),
  f = n(317381),
  C = n(496616),
  _ = n(100527),
  I = n(906732),
  x = n(168551),
  T = n(597952),
  N = n(628123),
  Z = n(151851),
  S = n(587061),
  v = n(392358),
  A = n(892254),
  M = n(706454),
  R = n(210887),
  j = n(740492),
  L = n(451478),
  O = n(153850),
  P = n(806519),
  y = n(358085),
  b = n(792125),
  D = n(998502),
  U = n(473159),
  k = n(928518),
  w = n(981631),
  H = n(689938),
  G = n(559286);

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class V extends(l = s.Component) {
  componentDidMount() {
    let {
      guestWindow: e
    } = this.props, t = e.document;
    null == t.querySelector("title") && null != t.head && t.head.appendChild(t.createElement("title")), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, U.O)(e), e.addEventListener("blur", this.handleBlur), t.addEventListener("contextmenu", this.handleContextMenu, !0), e.addEventListener("beforeunload", this.warnPopoutClose)
  }
  componentDidUpdate(e) {
    let {
      title: t,
      fontScale: n,
      locale: l,
      clientThemesCSS: i
    } = this.props;
    e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== l && this.updateLocale(), e.clientThemesCSS !== i && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors()
  }
  componentWillUnmount() {
    let {
      guestWindow: e
    } = this.props, t = e.document;
    e.removeEventListener("blur", this.handleBlur), t.removeEventListener("contextmenu", this.handleContextMenu, !0), h.useModalsStore.setState(e => ({
      ...e,
      [h.POPOUT_MODAL_CONTEXT]: []
    })), e.removeEventListener("beforeunload", this.warnPopoutClose)
  }
  updateSaturationFactor() {
    let {
      saturation: e,
      guestWindow: t
    } = this.props, n = t.document.documentElement;
    c()(null != n, "Window document element was null"), n.style.setProperty("--saturation-factor", e.toString())
  }
  updateLocale() {
    let {
      locale: e,
      guestWindow: t
    } = this.props, n = t.document.documentElement;
    c()(null != n, "Window document element was null"), n.lang = e
  }
  updateTitle() {
    let {
      title: e,
      guestWindow: t
    } = this.props, n = t.document.querySelector("title");
    null != n && (n.innerText = e)
  }
  updateFontScale() {
    let {
      fontScale: e,
      guestWindow: t
    } = this.props, n = t.document.documentElement;
    c()(null != n, "Window document element was null"), n.style.fontSize = "".concat(e, "%")
  }
  updateClientTheme() {
    let {
      clientThemesCSS: e,
      guestWindow: t
    } = this.props, n = t.document, l = (0, n.head);
    c()(null != l, "Window document ".concat("head", " was null"));
    let i = l.querySelector("style[".concat(x.PQ, "]"));
    if (null != i) {
      i.textContent = e;
      return
    }
    let s = n.createElement("style");
    s.setAttribute(x.PQ, "true"), s.textContent = e, l.appendChild(s)
  }
  updateForcedColors() {
    let {
      useForcedColors: e,
      systemForcedColors: t,
      guestWindow: n
    } = this.props;
    n.document.documentElement.classList.toggle("disable-forced-colors", !e && "active" === t)
  }
  render() {
    let {
      theme: e,
      forcedColors: t,
      focused: n,
      appFocused: l,
      children: s,
      windowKey: a,
      mouseModeEnabled: o,
      keyboardModeEnabled: c,
      reducedMotionEnabled: d,
      fontScaleClass: p,
      saturation: f,
      withTitleBar: C,
      guestWindow: _,
      clientThemesClassName: I,
      contentClassName: x
    } = this.props, S = (0, y.getPlatform)(), v = r()(p, {
      "mouse-mode": o,
      "reduce-motion": d,
      "full-motion": !d,
      "keyboard-mode": c,
      "app-focused": n || l,
      "low-saturation": f <= .4
    });
    return (0, i.jsx)(u.VK, {
      children: (0, i.jsx)(A.Z, {
        children: (0, i.jsx)(h.ThemeContextProvider, {
          theme: e,
          children: (0, i.jsx)(h.RedesignIconContextProvider, {
            children: (0, i.jsx)("div", {
              "data-popout-root": !0,
              ref: this.rootRef,
              className: r()((0, b.Q)(e), (0, T.Z)(), v, I),
              children: (0, i.jsx)(h.FocusRingScope, {
                containerRef: this.rootRef,
                children: (0, i.jsx)(g.Z, {
                  children: (0, i.jsxs)(N.Z, {
                    children: [(0, i.jsx)(P.Co, {}), (0, i.jsx)(E.Wu, {
                      appContext: w.IlC.POPOUT,
                      renderWindow: _,
                      children: (0, i.jsxs)(O.yP, {
                        children: [(0, i.jsxs)("div", {
                          className: G.popout,
                          children: [C && null != S ? (0, i.jsx)(Z.Z, {
                            focused: n,
                            type: S,
                            windowKey: a,
                            macOSFrame: !0
                          }) : null, (0, i.jsx)("div", {
                            className: r()(G.content, x),
                            children: s
                          })]
                        }), (0, i.jsx)(h.Modals, {}), (0, i.jsx)(m.Z, {}), (0, i.jsx)(O.Un, {})]
                      })
                    })]
                  })
                })
              })
            })
          })
        })
      }, t)
    })
  }
  constructor(...e) {
    super(...e), B(this, "rootRef", s.createRef()), B(this, "_cleanupWindowActionCreators", void 0), B(this, "warnPopoutClose", e => {
      if (this.props.connectedToEmbeddedActivity && !j.ZP.disableEmbeddedActivityPopOutAlert) {
        if (e.returnValue = H.Z.Messages.EMBEDDED_ACTIVITIES_ARE_YOU_SURE_WANT_TO_LEAVE, !!y.isPlatformEmbedded)(0, C.Z)(() => {
          k.Z.unmountWindow(this.props.windowKey), y.isPlatformEmbedded && D.ZP.close(this.props.windowKey)
        })
      }
    }), B(this, "handleBlur", () => {
      var e, t;
      null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t)
    }), B(this, "handleContextMenu", e => {
      e.preventDefault()
    })
  }
}
B(V, "defaultProps", {
  withTitleBar: !0
});
let F = s.forwardRef(function(e, t) {
  let {
    guestWindow: n,
    focused: l
  } = (0, d.cj)([k.Z], () => ({
    guestWindow: k.Z.getWindow(e.windowKey),
    focused: k.Z.getWindowFocused(e.windowKey)
  }));
  c()(null != n, "Missing guestWindow reference");
  let s = (0, d.e7)([L.Z], () => L.Z.isFocused()),
    {
      locale: a,
      theme: r
    } = (0, d.cj)([R.Z, M.default], () => ({
      locale: M.default.locale,
      theme: R.Z.theme
    })),
    o = (0, d.e7)([p.Z], () => p.Z.useForcedColors ? "yes" : "no"),
    {
      fontScale: u,
      keyboardModeEnabled: m,
      reducedMotionEnabled: E,
      fontScaleClass: g,
      saturation: C,
      systemForcedColors: T,
      useForcedColors: N
    } = (0, d.cj)([p.Z], () => ({
      fontScale: p.Z.fontScale,
      keyboardModeEnabled: p.Z.keyboardModeEnabled,
      reducedMotionEnabled: p.Z.useReducedMotion,
      fontScaleClass: p.Z.fontScaleClass,
      saturation: p.Z.saturation,
      systemForcedColors: p.Z.systemForcedColors,
      useForcedColors: p.Z.useForcedColors
    })),
    Z = (0, d.e7)([f.ZP], () => null != e.channelId && null !== f.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
  (0, S.Z)(n, !1);
  let A = (0, v.Z)(n, l),
    {
      analyticsLocations: j
    } = (0, I.ZP)(_.Z.POPOUT_WINDOW),
    {
      clientThemesClassName: O,
      clientThemesCSS: P
    } = (0, x.ZP)();
  return null == n ? null : (0, i.jsx)(h.DnDProvider, {
    children: (0, i.jsx)(I.Gt, {
      value: j,
      children: (0, i.jsx)(V, {
        ref: t,
        ...e,
        guestWindow: n,
        focused: l,
        appFocused: s,
        locale: a,
        theme: r,
        forcedColors: o,
        useForcedColors: N,
        systemForcedColors: T,
        fontScale: u,
        keyboardModeEnabled: m,
        mouseModeEnabled: A,
        reducedMotionEnabled: E,
        connectedToEmbeddedActivity: Z,
        fontScaleClass: g,
        saturation: C,
        clientThemesClassName: O,
        clientThemesCSS: P
      })
    })
  })
});
t.Z = F