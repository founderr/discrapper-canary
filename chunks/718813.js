n.d(t, {
  Z: function() {
    return y
  }
}), n(653041);
var i, s = n(735250),
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
  g = n(819640),
  p = n(725568),
  T = n(585483),
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
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("77298"), n.e("23357"), n.e("19503"), n.e("15972"), n.e("12013"), n.e("6416"), n.e("43906"), n.e("32776"), n.e("95900"), n.e("33053"), n.e("8016"), n.e("45397"), n.e("68136"), n.e("76540"), n.e("4934"), n.e("22646"), n.e("87624"), n.e("5528"), n.e("44517"), n.e("43331"), n.e("30419"), n.e("18824"), n.e("31649"), n.e("79618")]).then(n.bind(n, 989804)),
    webpackId: 989804,
    name: "UserSettings"
  }),
  Z = (0, I.Un)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("7654"), n.e("33053"), n.e("85093"), n.e("78587")]).then(n.bind(n, 869779)),
    webpackId: 869779,
    name: "ChannelSettings"
  }),
  v = (0, I.Un)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("77298"), n.e("23357"), n.e("15972"), n.e("12013"), n.e("6416"), n.e("43906"), n.e("32776"), n.e("95900"), n.e("4934"), n.e("87624"), n.e("43331"), n.e("30006")]).then(n.bind(n, 838819)),
    webpackId: 838819,
    name: "CollectiblesShop"
  }),
  L = (0, I.Un)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("7654"), n.e("33053"), n.e("45397"), n.e("75475"), n.e("85093"), n.e("85552"), n.e("58227"), n.e("43502")]).then(n.bind(n, 994763)),
    webpackId: 994763,
    name: "GuildSettings"
  }),
  O = {
    [S.S9g.USER_SETTINGS]: () => (0, s.jsx)(f, {}),
    [S.S9g.CHANNEL_SETTINGS]: () => (0, s.jsx)(Z, {}),
    [S.S9g.GUILD_SETTINGS]: () => (0, s.jsx)(L, {}),
    [S.S9g.COLLECTIBLES_SHOP]: () => (0, s.jsx)(v, {})
  },
  R = "SHOWN",
  x = "HIDDEN",
  M = {
    friction: 10,
    tension: 100
  };

function P() {
  return l.useEffect(() => (_.Z.enable(), _.Z.enableTemp(h.u), () => _.Z.disableTemp()), []), null
}
class D extends(i = l.PureComponent) {
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
    return t === n ? void 0 : t === R && n === x ? this.animateIn() : t === x && n === R ? this.animateUnder() : void 0
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
      ...M
    }), o.Z.spring(n, {
      toValue: 1,
      ...M
    })]).start(() => this.animateComplete(e))
  }
  animateOut(e) {
    c.ZP.Emitter.pause(500);
    let {
      opacity: t,
      scale: n
    } = this.state;
    T.S.dispatch(S.CkL.LAYER_POP_START), o.Z.parallel([o.Z.spring(t, {
      toValue: 0,
      ...M
    }), o.Z.spring(n, {
      toValue: 1.1,
      ...M
    })]).start(() => {
      e(), T.S.dispatch(S.CkL.LAYER_POP_COMPLETE)
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
      ...M
    }), o.Z.spring(t, {
      toValue: .93,
      ...M
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
      baseLayer: i,
      ...l
    } = this.props, a = e || t === x ? this.getAnimatedStyle() : null, c = (0, s.jsx)(o.Z.div, {
      ref: e => this.containerRef.current = null != e ? e.refs.node : void 0,
      "aria-hidden": t === x,
      className: r()(C.layer, {
        [C.baseLayer]: i,
        [C.animating]: e,
        "stop-animations": t === x
      }),
      style: a,
      ...l,
      children: n
    });
    return i ? c : (0, s.jsx)(d.FocusLock, {
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
    e.mode === x && (t = .93, n = 0), this.state = {
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
    T.S.subscribe(S.CkL.LAYER_POP_ESCAPE_KEY, E.xf)
  }
  componentWillUnmount() {
    T.S.unsubscribe(S.CkL.LAYER_POP_ESCAPE_KEY, E.xf)
  }
  renderLayers() {
    let {
      children: e,
      layers: t,
      hasFullScreenLayer: n
    } = this.props, {
      length: i
    } = t, l = [];
    return l.push((0, s.jsx)(D, {
      mode: 0 !== i || n ? x : R,
      baseLayer: !0,
      children: e
    }, "layer-base")), t.forEach((e, t) => l.push(this.renderComponent(e, t, i))), l
  }
  renderComponent(e, t, n) {
    let i;
    return i = "string" == typeof e ? O[e]() : (0, s.jsx)(e, {}), (0, s.jsxs)(D, {
      mode: t === n - 1 ? R : x,
      children: [(0, s.jsx)(P, {}), i]
    }, "layer-".concat(t))
  }
  renderArtisanalHack() {
    return (0, s.jsx)("div", {
      className: r()(C.bg, (0, N.Q)(this.props.sidebarTheme))
    })
  }
  render() {
    return (0, s.jsxs)(s.Fragment, {
      children: [this.renderArtisanalHack(), (0, s.jsx)(u.W, {
        component: "div",
        className: r()(C.layers, this.props.className),
        children: this.renderLayers()
      })]
    })
  }
}

function y(e) {
  let t = (0, c.e7)([m.Z], () => m.Z.darkSidebar) ? S.BRd.DARK : void 0,
    n = (0, c.e7)([g.Z], () => g.Z.getLayers()),
    i = (0, p.QP)(e => e.fullScreenLayers.length > 0);
  return (0, s.jsx)(b, {
    ...e,
    sidebarTheme: t,
    layers: n,
    hasFullScreenLayer: i
  })
}