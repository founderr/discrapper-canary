n.d(e, {
  Z: function() {
    return S
  }
}), n(47120), n(653041);
var s, i = n(735250),
  o = n(470079),
  r = n(120356),
  l = n.n(r),
  a = n(299608),
  c = n.n(a),
  u = n(748780),
  h = n(215569),
  p = n(376641),
  d = n(714338),
  g = n(134432),
  m = n(494735),
  C = n(585483),
  f = n(981631),
  L = n(531844);

function b(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t
}
let N = {
  friction: 10,
  tension: 100
};

function x(t, e) {
  return (t % e + e) % e
}
class E extends o.Component {
  componentWillEnter(t) {
    let {
      directionHistory: e
    } = this.props, {
      translate: n,
      opacity: s
    } = this.state;
    n.setValue(e[e.length - 1]), s.setValue(0), t(), u.Z.parallel([u.Z.timing(s, {
      toValue: 1,
      easing: u.Z.Easing.out(u.Z.Easing.linear),
      duration: 200
    }), u.Z.spring(n, {
      toValue: 0,
      ...N
    })]).start()
  }
  componentWillLeave(t) {
    let {
      directionHistory: e
    } = this.props, {
      opacity: n,
      translate: s
    } = this.state;
    u.Z.parallel([u.Z.timing(n, {
      toValue: 0,
      easing: u.Z.Easing.in(u.Z.Easing.linear),
      duration: 200
    }), u.Z.spring(s, {
      toValue: -1 * e[e.length - 1],
      ...N
    })]).start(t)
  }
  getStyle() {
    let {
      translate: t,
      opacity: e
    } = this.state;
    return u.Z.accelerate({
      opacity: e,
      transform: [{
        translateX: t.interpolate({
          inputRange: [0, 1],
          outputRange: ["0px", "300px"]
        })
      }]
    })
  }
  render() {
    let {
      item: t
    } = this.props, {
      className: e
    } = this.props;
    return (0, i.jsx)(u.Z.img, {
      src: t.src,
      alt: "",
      className: l()(L.slide, e),
      style: this.getStyle()
    })
  }
  constructor(...t) {
    super(...t), b(this, "state", {
      translate: new u.Z.Value(0),
      opacity: new u.Z.Value(1)
    })
  }
}
class S extends(s = o.Component) {
  componentDidMount() {
    this.preloadNextImages(), d.Z.disable(), d.Z.enableTemp(p.P), C.S.subscribe(f.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), C.S.subscribe(f.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
  }
  componentWillUnmount() {
    d.Z.disableTemp(), C.S.unsubscribe(f.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), C.S.unsubscribe(f.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
  }
  preloadNextImages() {
    var t, e;
    let {
      currentIndex: n
    } = this.state, {
      items: s
    } = this.props;
    let i = ((n + 1) % (t = s.length) + t) % t;
    let o = ((n - 1) % (e = s.length) + e) % e;
    this.preloadImage(s[i]), this.preloadImage(s[o])
  }
  preloadImage(t) {
    (0, g.po)(t.src)
  }
  componentDidUpdate(t, e) {
    let {
      currentIndex: n
    } = this.state;
    n !== e.currentIndex && this.preloadNextImages()
  }
  navigateTo(t) {
    var e, n, s;
    let {
      directionHistory: i,
      currentIndex: o
    } = this.state;
    i.push(t - o), t = (t % (s = this.props.items.length) + s) % s, this.setState({
      currentIndex: t,
      directionHistory: i
    }), null === (e = (n = this.props).onIndexChange) || void 0 === e || e.call(n, t)
  }
  render() {
    var t;
    let {
      className: e
    } = this.props, {
      currentIndex: n,
      directionHistory: s
    } = this.state, {
      modalCarouselItemClassName: o
    } = this.props, r = this.props.items[n], a = this.props.items;
    return (0, i.jsxs)(h.W, {
      component: "div",
      className: l()(L.wrapper, e),
      children: [a.length > 1 ? (0, i.jsx)(m.am, {
        className: L.navPrev,
        onClick: this.gotoPrev
      }) : null, null !== (t = r.component) && void 0 !== t ? t : (0, i.jsx)(E, {
        item: r,
        directionHistory: s,
        className: o
      }, r.src), a.length > 1 ? (0, i.jsx)(m.Pz, {
        className: L.navNext,
        onClick: this.gotoNext
      }) : null]
    })
  }
  constructor(t) {
    super(t), b(this, "gotoNext", () => {
      let {
        currentIndex: t
      } = this.state;
      this.navigateTo(t + 1)
    }), b(this, "gotoPrev", () => {
      let {
        currentIndex: t
      } = this.state;
      this.navigateTo(t - 1)
    }), b(this, "gotoNextThrottled", c()(this.gotoNext, 300)), b(this, "gotoPrevThrottled", c()(this.gotoPrev, 300)), this.state = {
      currentIndex: t.startWith,
      directionHistory: []
    }
  }
}
b(S, "defaultProps", {
  startWith: 0
})