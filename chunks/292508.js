"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  o = n.n(r),
  u = n("90915"),
  d = n("446674"),
  c = n("77078"),
  f = n("988738"),
  h = n("244201"),
  m = n("206230"),
  p = n("320679"),
  E = n("191225"),
  S = n("229661"),
  g = n("812204"),
  C = n("685665"),
  _ = n("338733"),
  I = n("779601"),
  T = n("967889"),
  v = n("160139"),
  x = n("983689"),
  N = n("628922"),
  A = n("928741"),
  M = n("915639"),
  R = n("161778"),
  j = n("168973"),
  L = n("471671"),
  y = n("983782"),
  O = n("587974"),
  P = n("773336"),
  b = n("439932"),
  D = n("50885"),
  U = n("336921"),
  w = n("292687"),
  F = n("49111"),
  k = n("782340"),
  V = n("928319");
class B extends a.Component {
  componentDidMount() {
    let {
      guestWindow: e
    } = this.props, t = e.document, n = t.querySelector("title");
    null == n && null != t.head && t.head.appendChild(t.createElement("title")), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), (0, U.setupWindow)(e), e.addEventListener("blur", this.handleBlur), t.addEventListener("contextmenu", this.handleContextMenu, !0), e.addEventListener("beforeunload", this.warnPopoutClose)
  }
  componentDidUpdate(e) {
    let {
      title: t,
      fontScale: n,
      locale: l,
      clientThemesCSS: a
    } = this.props;
    e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== l && this.updateLocale(), e.clientThemesCSS !== a && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor()
  }
  componentWillUnmount() {
    let {
      guestWindow: e
    } = this.props, t = e.document;
    e.removeEventListener("blur", this.handleBlur), t.removeEventListener("contextmenu", this.handleContextMenu, !0), c.useModalsStore.setState(e => ({
      ...e,
      [c.POPOUT_MODAL_CONTEXT]: []
    })), e.removeEventListener("beforeunload", this.warnPopoutClose)
  }
  updateSaturationFactor() {
    let {
      saturation: e,
      guestWindow: t
    } = this.props, n = t.document.documentElement;
    o(null != n, "Window document element was null"), n.style.setProperty("--saturation-factor", e.toString())
  }
  updateLocale() {
    let {
      locale: e,
      guestWindow: t
    } = this.props, n = t.document.documentElement;
    o(null != n, "Window document element was null"), n.lang = e
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
    o(null != n, "Window document element was null"), n.style.fontSize = "".concat(e, "%")
  }
  updateClientTheme() {
    let {
      clientThemesCSS: e,
      guestWindow: t
    } = this.props, n = t.document, l = (0, n.head);
    o(null != l, "Window document ".concat("head", " was null"));
    let a = l.querySelector("style[".concat(_.CLIENT_THEMES_DATA_ATTRIBUTE, "]"));
    if (null != a) {
      a.textContent = e;
      return
    }
    let s = n.createElement("style");
    s.setAttribute(_.CLIENT_THEMES_DATA_ATTRIBUTE, "true"), s.textContent = e, l.appendChild(s)
  }
  render() {
    let {
      theme: e,
      forcedColors: t,
      focused: n,
      appFocused: a,
      children: s,
      windowKey: r,
      mouseModeEnabled: o,
      keyboardModeEnabled: d,
      reducedMotionEnabled: m,
      fontScaleClass: E,
      saturation: S,
      withTitleBar: g,
      guestWindow: C,
      clientThemesClassName: _,
      contentClassName: x
    } = this.props, N = (0, P.getPlatform)(), M = i(E, {
      "mouse-mode": o,
      "reduce-motion": m,
      "full-motion": !m,
      "keyboard-mode": d,
      "app-focused": n || a,
      "low-saturation": S <= .4
    });
    return (0, l.jsx)(u.BrowserRouter, {
      children: (0, l.jsx)(A.default, {
        children: (0, l.jsx)(c.ThemeContextProvider, {
          theme: e,
          children: (0, l.jsx)(c.RedesignIconContextProvider, {
            children: (0, l.jsx)("div", {
              "data-popout-root": !0,
              ref: this.rootRef,
              className: i((0, b.getThemeClass)(e), (0, I.default)(), M, _),
              children: (0, l.jsx)(c.FocusRingScope, {
                containerRef: this.rootRef,
                children: (0, l.jsx)(p.default, {
                  children: (0, l.jsxs)(T.default, {
                    children: [(0, l.jsx)(O.MaskLibrary, {}), (0, l.jsx)(h.AppWindowContextProvider, {
                      appContext: F.AppContext.POPOUT,
                      renderWindow: C,
                      children: (0, l.jsxs)(y.AppLayerProvider, {
                        children: [(0, l.jsxs)("div", {
                          className: V.popout,
                          children: [g && null != N ? (0, l.jsx)(v.default, {
                            focused: n,
                            type: N,
                            windowKey: r,
                            macOSFrame: !0
                          }) : null, (0, l.jsx)("div", {
                            className: i(V.content, x),
                            children: s
                          })]
                        }), (0, l.jsx)(c.Modals, {}), (0, l.jsx)(f.default, {}), (0, l.jsx)(y.AppLayerContainer, {})]
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
    super(...e), this.rootRef = a.createRef(), this._cleanupWindowActionCreators = void 0, this.warnPopoutClose = e => {
      this.props.connectedToEmbeddedActivity && !j.default.disableEmbeddedActivityPopOutAlert && (e.returnValue = k.default.Messages.EMBEDDED_ACTIVITIES_ARE_YOU_SURE_WANT_TO_LEAVE, P.isPlatformEmbedded && (0, S.default)(() => {
        w.default.unmountWindow(this.props.windowKey), P.isPlatformEmbedded && D.default.close(this.props.windowKey)
      }))
    }, this.handleBlur = () => {
      var e, t;
      null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t)
    }, this.handleContextMenu = e => {
      e.preventDefault()
    }
  }
}
B.defaultProps = {
  withTitleBar: !0
};
let H = a.forwardRef(function(e, t) {
  let {
    guestWindow: n,
    focused: a
  } = (0, d.useStateFromStoresObject)([w.default], () => ({
    guestWindow: w.default.getWindow(e.windowKey),
    focused: w.default.getWindowFocused(e.windowKey)
  }));
  o(null != n, "Missing guestWindow reference");
  let s = (0, d.useStateFromStores)([L.default], () => L.default.isFocused()),
    {
      locale: i,
      theme: r
    } = (0, d.useStateFromStoresObject)([R.default, M.default], () => ({
      locale: M.default.locale,
      theme: R.default.theme
    })),
    u = (0, d.useStateFromStores)([m.default], () => m.default.useForcedColors ? "yes" : "no"),
    {
      fontScale: f,
      keyboardModeEnabled: h,
      reducedMotionEnabled: p,
      fontScaleClass: S,
      saturation: I
    } = (0, d.useStateFromStoresObject)([m.default], () => ({
      fontScale: m.default.fontScale,
      keyboardModeEnabled: m.default.keyboardModeEnabled,
      reducedMotionEnabled: m.default.useReducedMotion,
      fontScaleClass: m.default.fontScaleClass,
      saturation: m.default.saturation
    })),
    T = (0, d.useStateFromStores)([E.default], () => null != e.channelId && null !== E.default.getSelfEmbeddedActivityForChannel(e.channelId));
  (0, x.default)(n, !1);
  let v = (0, N.default)(n, a),
    {
      AnalyticsLocationProvider: A
    } = (0, C.default)(g.default.POPOUT_WINDOW),
    {
      clientThemesClassName: j,
      clientThemesCSS: y
    } = (0, _.default)();
  return null == n ? null : (0, l.jsx)(c.DnDProvider, {
    children: (0, l.jsx)(A, {
      children: (0, l.jsx)(B, {
        ref: t,
        ...e,
        guestWindow: n,
        focused: a,
        appFocused: s,
        locale: i,
        theme: r,
        forcedColors: u,
        fontScale: f,
        keyboardModeEnabled: h,
        mouseModeEnabled: v,
        reducedMotionEnabled: p,
        connectedToEmbeddedActivity: T,
        fontScaleClass: S,
        saturation: I,
        clientThemesClassName: j,
        clientThemesCSS: y
      })
    })
  })
});
var G = H