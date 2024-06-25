n.d(t, {
  Z: function() {
    return y
  }
}), n(653041);
var s, i = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  o = n(748780),
  c = n(442837),
  u = n(215569),
  d = n(481060),
  E = n(37234),
  h = n(134616),
  _ = n(714338),
  I = n(663993),
  m = n(210887),
  T = n(819640),
  g = n(725568),
  p = n(585483),
  N = n(792125),
  S = n(981631),
  C = n(153144);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = (0, I.Un)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("77298"), n.e("23357"), n.e("19503"), n.e("15972"), n.e("12013"), n.e("6416"), n.e("43906"), n.e("32776"), n.e("95900"), n.e("8016"), n.e("33053"), n.e("68136"), n.e("19464"), n.e("76540"), n.e("4934"), n.e("22646"), n.e("87624"), n.e("5528"), n.e("44517"), n.e("43331"), n.e("30419"), n.e("18824"), n.e("31649"), n.e("15727")]).then(n.bind(n, 989804)),
    webpackId: 989804,
    name: "UserSettings"
  }),
  Z = (0, I.Un)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("33053"), n.e("7654"), n.e("85093"), n.e("78587")]).then(n.bind(n, 869779)),
    webpackId: 869779,
    name: "ChannelSettings"
  }),
  L = (0, I.Un)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("77298"), n.e("23357"), n.e("15972"), n.e("12013"), n.e("6416"), n.e("43906"), n.e("32776"), n.e("95900"), n.e("4934"), n.e("87624"), n.e("43331"), n.e("87793")]).then(n.bind(n, 838819)),
    webpackId: 838819,
    name: "CollectiblesShop"
  }),
  O = (0, I.Un)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("33053"), n.e("19464"), n.e("7654"), n.e("44156"), n.e("85093"), n.e("85552"), n.e("58227"), n.e("43502")]).then(n.bind(n, 994763)),
    webpackId: 994763,
    name: "GuildSettings"
  }),
  v = {
    [S.S9g.USER_SETTINGS]: () => (0, i.jsx)(f, {}),
    [S.S9g.CHANNEL_SETTINGS]: () => (0, i.jsx)(Z, {}),
    [S.S9g.GUILD_SETTINGS]: () => (0, i.jsx)(O, {}),
    [S.S9g.COLLECTIBLES_SHOP]: () => (0, i.jsx)(L, {})
  },
  R = "SHOWN",
  P = "HIDDEN",
  x = {
    friction: 10,
    tension: 100
  };

function M() {
  return l.useEffect(() => (_.Z.enable(), _.Z.enableTemp(h.u), () => _.Z.disableTemp()), []), null
}
class D extends(s = l.PureComponent) {
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
      mode: n
    } = e;
    return t === n ? void 0 : t === R && n === P ? this.animateIn() : t === P && n === R ? this.animateUnder() : void 0
  }
  componentWillEnter(e) {
    let {
      opacity: t,
      scale: n
    } = this.state;
    n.setValue(1.1), t.setValue(0), e(), this.setState({
      animating: !0
    }, () => this.animateIn())
  }
  componentWillLeave(e) {
    this.setState({
      animating: !0
    }, () => this.animateOut(e))
  }
  animateIn(e) {
    c.ZP.Emitter.pause(500);
    let {
      opacity: t,
      scale: n
    } = this.state;
    o.Z.parallel([o.Z.spring(t, {
      toValue: 1,
      ...x
    }), o.Z.spring(n, {
      toValue: 1,
      ...x
    })]).start(() => this.animateComplete(e))
  }
  animateOut(e) {
    c.ZP.Emitter.pause(500);
    let {
      opacity: t,
      scale: n
    } = this.state;
    p.S.dispatch(S.CkL.LAYER_POP_START), o.Z.parallel([o.Z.spring(t, {
      toValue: 0,
      ...x
    }), o.Z.spring(n, {
      toValue: 1.1,
      ...x
    })]).start(() => {
      e(), p.S.dispatch(S.CkL.LAYER_POP_COMPLETE)
    })
  }
  animateUnder() {
    c.ZP.Emitter.pause(500);
    let {
      opacity: e,
      scale: t
    } = this.state;
    o.Z.parallel([o.Z.spring(e, {
      toValue: 0,
      ...x
    }), o.Z.spring(t, {
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
      children: n,
      baseLayer: s,
      ...l
    } = this.props, a = e || t === P ? this.getAnimatedStyle() : null, c = (0, i.jsx)(o.Z.div, {
      ref: e => this.containerRef.current = null != e ? e.refs.node : void 0,
      "aria-hidden": t === P,
      className: r()(C.layer, {
        [C.baseLayer]: s,
        [C.animating]: e,
        "stop-animations": t === P
      }),
      style: a,
      ...l,
      children: n
    });
    return s ? c : (0, i.jsx)(d.FocusLock, {
      containerRef: this.containerRef,
      children: c
    })
  }
  getAnimatedStyle() {
    let {
      opacity: e,
      scale: t
    } = this.state, {
      reducedMotion: n
    } = this.context;
    return {
      opacity: e,
      transform: n.enabled ? void 0 : [{
        scale: t
      }, {
        translateZ: 0
      }]
    }
  }
  constructor(e) {
    super(e), A(this, "containerRef", l.createRef());
    let t = 1,
      n = 1;
    e.mode === P && (t = .93, n = 0), this.state = {
      animating: !1,
      scale: new o.Z.Value(t),
      opacity: new o.Z.Value(n),
      mode: e.mode
    }
  }
}
A(D, "defaultProps", {
  baseLayer: !1
}), A(D, "contextType", d.AccessibilityPreferencesContext);
class b extends l.PureComponent {
  componentDidMount() {
    p.S.subscribe(S.CkL.LAYER_POP_ESCAPE_KEY, E.xf)
  }
  componentWillUnmount() {
    p.S.unsubscribe(S.CkL.LAYER_POP_ESCAPE_KEY, E.xf)
  }
  renderLayers() {
    let {
      children: e,
      layers: t,
      hasFullScreenLayer: n
    } = this.props, {
      length: s
    } = t, l = [];
    return l.push((0, i.jsx)(D, {
      mode: 0 !== s || n ? P : R,
      baseLayer: !0,
      children: e
    }, "layer-base")), t.forEach((e, t) => l.push(this.renderComponent(e, t, s))), l
  }
  renderComponent(e, t, n) {
    let s;
    return s = "string" == typeof e ? v[e]() : (0, i.jsx)(e, {}), (0, i.jsxs)(D, {
      mode: t === n - 1 ? R : P,
      children: [(0, i.jsx)(M, {}), s]
    }, "layer-".concat(t))
  }
  renderArtisanalHack() {
    return (0, i.jsx)("div", {
      className: r()(C.bg, (0, N.Q)(this.props.sidebarTheme))
    })
  }
  render() {
    return (0, i.jsxs)(i.Fragment, {
      children: [this.renderArtisanalHack(), (0, i.jsx)(u.W, {
        component: "div",
        className: r()(C.layers, this.props.className),
        children: this.renderLayers()
      })]
    })
  }
}

function y(e) {
  let t = (0, c.e7)([m.Z], () => m.Z.darkSidebar) ? S.BRd.DARK : void 0,
    n = (0, c.e7)([T.Z], () => T.Z.getLayers()),
    s = (0, g.QP)(e => e.fullScreenLayers.length > 0);
  return (0, i.jsx)(b, {
    ...e,
    sidebarTheme: t,
    layers: n,
    hasFullScreenLayer: s
  })
}