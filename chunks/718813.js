"use strict";
a.r(t), a.d(t, {
  default: function() {
    return U
  }
}), a("653041");
var n, s = a("735250"),
  l = a("470079"),
  i = a("120356"),
  r = a.n(i),
  o = a("748780"),
  u = a("442837"),
  d = a("215569"),
  c = a("481060"),
  f = a("37234"),
  E = a("134616"),
  h = a("714338"),
  _ = a("663993"),
  C = a("210887"),
  m = a("819640"),
  S = a("725568"),
  p = a("585483"),
  I = a("792125"),
  T = a("981631"),
  g = a("997171");

function A(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let N = (0, _.makeLazy)({
    createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("66635"), a.e("40326"), a.e("23357"), a.e("8895"), a.e("15972"), a.e("6416"), a.e("440"), a.e("63438"), a.e("58600"), a.e("33053"), a.e("49146"), a.e("17938"), a.e("76540"), a.e("65866"), a.e("93521"), a.e("5528"), a.e("85907"), a.e("18824"), a.e("74753"), a.e("79618")]).then(a.bind(a, "989804")),
    webpackId: "989804",
    name: "UserSettings"
  }),
  v = (0, _.makeLazy)({
    createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("33053"), a.e("85093"), a.e("78587")]).then(a.bind(a, "869779")),
    webpackId: "869779",
    name: "ChannelSettings"
  }),
  R = (0, _.makeLazy)({
    createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("93521"), a.e("18249")]).then(a.bind(a, "838819")),
    webpackId: "838819",
    name: "CollectiblesShop"
  }),
  O = (0, _.makeLazy)({
    createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("66635"), a.e("33053"), a.e("49146"), a.e("75475"), a.e("85093"), a.e("85552"), a.e("58227"), a.e("43502")]).then(a.bind(a, "994763")),
    webpackId: "994763",
    name: "GuildSettings"
  }),
  L = {
    [T.Layers.USER_SETTINGS]: () => (0, s.jsx)(N, {}),
    [T.Layers.CHANNEL_SETTINGS]: () => (0, s.jsx)(v, {}),
    [T.Layers.GUILD_SETTINGS]: () => (0, s.jsx)(O, {}),
    [T.Layers.COLLECTIBLES_SHOP]: () => (0, s.jsx)(R, {})
  },
  M = "SHOWN",
  P = "HIDDEN",
  x = {
    friction: 10,
    tension: 100
  };

function y() {
  return l.useEffect(() => (h.default.enable(), h.default.enableTemp(E.SETTINGS_LAYERS_LAYOUT), () => h.default.disableTemp()), []), null
}
class D extends(n = l.PureComponent) {
  static getDerivedStateFromProps(e, t) {
    return e.mode !== t.mode ? {
      animating: !0,
      mode: e.mode
    } : null
  }
  componentDidUpdate(e) {
    let {
      mode: t
    } = this.props, {
      mode: a
    } = e;
    if (t !== a) {
      if (t === M && a === P) return this.animateIn();
      if (t === P && a === M) return this.animateUnder()
    }
  }
  componentWillEnter(e) {
    let {
      opacity: t,
      scale: a
    } = this.state;
    a.setValue(1.1), t.setValue(0), e(), this.setState({
      animating: !0
    }, () => this.animateIn())
  }
  componentWillLeave(e) {
    this.setState({
      animating: !0
    }, () => this.animateOut(e))
  }
  animateIn(e) {
    u.default.Emitter.pause(500);
    let {
      opacity: t,
      scale: a
    } = this.state;
    o.default.parallel([o.default.spring(t, {
      toValue: 1,
      ...x
    }), o.default.spring(a, {
      toValue: 1,
      ...x
    })]).start(() => this.animateComplete(e))
  }
  animateOut(e) {
    u.default.Emitter.pause(500);
    let {
      opacity: t,
      scale: a
    } = this.state;
    p.ComponentDispatch.dispatch(T.ComponentActions.LAYER_POP_START), o.default.parallel([o.default.spring(t, {
      toValue: 0,
      ...x
    }), o.default.spring(a, {
      toValue: 1.1,
      ...x
    })]).start(() => {
      e(), p.ComponentDispatch.dispatch(T.ComponentActions.LAYER_POP_COMPLETE)
    })
  }
  animateUnder() {
    u.default.Emitter.pause(500);
    let {
      opacity: e,
      scale: t
    } = this.state;
    o.default.parallel([o.default.spring(e, {
      toValue: 0,
      ...x
    }), o.default.spring(t, {
      toValue: .93,
      ...x
    })]).start(() => this.animateComplete())
  }
  animateComplete(e) {
    this.setState({
      animating: !1
    }, e)
  }
  render() {
    let {
      animating: e
    } = this.state, {
      mode: t,
      children: a,
      baseLayer: n,
      ...l
    } = this.props, i = e || t === P ? this.getAnimatedStyle() : null, u = (0, s.jsx)(o.default.div, {
      ref: e => this.containerRef.current = null != e ? e.refs.node : void 0,
      "aria-hidden": t === P,
      className: r()(g.layer, {
        [g.baseLayer]: n,
        [g.animating]: e,
        "stop-animations": t === P
      }),
      style: i,
      ...l,
      children: a
    });
    return n ? u : (0, s.jsx)(c.FocusLock, {
      containerRef: this.containerRef,
      children: u
    })
  }
  getAnimatedStyle() {
    let {
      opacity: e,
      scale: t
    } = this.state, {
      reducedMotion: a
    } = this.context;
    return {
      opacity: e,
      transform: a.enabled ? void 0 : [{
        scale: t
      }, {
        translateZ: 0
      }]
    }
  }
  constructor(e) {
    super(e), A(this, "containerRef", l.createRef());
    let t = 1,
      a = 1;
    e.mode === P && (t = .93, a = 0), this.state = {
      animating: !1,
      scale: new o.default.Value(t),
      opacity: new o.default.Value(a),
      mode: e.mode
    }
  }
}
A(D, "defaultProps", {
  baseLayer: !1
}), A(D, "contextType", c.AccessibilityPreferencesContext);
class b extends l.PureComponent {
  componentDidMount() {
    p.ComponentDispatch.subscribe(T.ComponentActions.LAYER_POP_ESCAPE_KEY, f.popLayer)
  }
  componentWillUnmount() {
    p.ComponentDispatch.unsubscribe(T.ComponentActions.LAYER_POP_ESCAPE_KEY, f.popLayer)
  }
  renderLayers() {
    let {
      children: e,
      layers: t,
      hasFullScreenLayer: a
    } = this.props, {
      length: n
    } = t, l = [];
    return l.push((0, s.jsx)(D, {
      mode: 0 !== n || a ? P : M,
      baseLayer: !0,
      children: e
    }, "layer-base")), t.forEach((e, t) => l.push(this.renderComponent(e, t, n))), l
  }
  renderComponent(e, t, a) {
    let n;
    return n = "string" == typeof e ? L[e]() : (0, s.jsx)(e, {}), (0, s.jsxs)(D, {
      mode: t === a - 1 ? M : P,
      children: [(0, s.jsx)(y, {}), n]
    }, "layer-".concat(t))
  }
  renderArtisanalHack() {
    return (0, s.jsx)("div", {
      className: r()(g.bg, (0, I.getThemeClass)(this.props.sidebarTheme))
    })
  }
  render() {
    return (0, s.jsxs)(s.Fragment, {
      children: [this.renderArtisanalHack(), (0, s.jsx)(d.TransitionGroup, {
        component: "div",
        className: r()(g.layers, this.props.className),
        children: this.renderLayers()
      })]
    })
  }
}

function U(e) {
  let t = (0, u.useStateFromStores)([C.default], () => C.default.darkSidebar) ? T.ThemeTypes.DARK : void 0,
    a = (0, u.useStateFromStores)([m.default], () => m.default.getLayers()),
    n = (0, S.useFullScreenLayerStore)(e => e.fullScreenLayers.length > 0);
  return (0, s.jsx)(b, {
    ...e,
    sidebarTheme: t,
    layers: a,
    hasFullScreenLayer: n
  })
}