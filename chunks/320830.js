n(47120);
var r = n(735250),
  s = n(470079),
  i = n(954955),
  a = n.n(i),
  o = n(748780),
  l = n(873546),
  c = n(477690),
  u = n(481060),
  d = n(624138),
  h = n(983155);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = (0, d.Mg)(c.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
  f = {
    START: 0,
    END: 1
  },
  g = {
    friction: 10,
    tension: 130
  };
t.Z = function(e) {
  return class extends s.Component {
    componentDidMount() {
      !l.tq && (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize())
    }
    componentWillUnmount() {
      clearTimeout(this.timeout), window.removeEventListener("resize", this.handleResizeDebounced)
    }
    componentWillAppear(e) {
      this.state.shouldAnimate ? this.animateTo(f.END, e) : e()
    }
    componentWillEnter(e) {
      this.state.shouldAnimate ? (clearTimeout(this.timeout), this.timeout = setTimeout(() => this.animateTo(f.END, e), 40)) : e()
    }
    componentWillLeave(e) {
      this.state.shouldAnimate ? this.animateTo(f.START, e) : e()
    }
    animateTo(e, t) {
      o.Z.spring(this.anim, {
        toValue: e,
        ...g
      }).start(t)
    }
    getAnimatedStyle(e) {
      return this.state.shouldAnimate ? {
        opacity: this.anim,
        transform: e ? void 0 : [{
          scale: this.anim.interpolate({
            inputRange: [0, 1],
            outputRange: [1.05, 1]
          })
        }, {
          translateY: this.anim.interpolate({
            inputRange: [0, 1],
            outputRange: ["-70px", "0px"]
          })
        }, {
          translateZ: 0
        }]
      } : null
    }
    render() {
      return (0, r.jsx)("div", {
        className: h.wrapper,
        children: (0, r.jsx)(u.AccessibilityPreferencesContext.Consumer, {
          children: t => {
            let {
              reducedMotion: n
            } = t;
            return (0, r.jsx)(o.Z.div, {
              style: this.getAnimatedStyle(n.enabled),
              children: (0, r.jsx)(e, {
                ...this.props
              })
            })
          }
        })
      })
    }
    constructor(...e) {
      super(...e), _(this, "timeout", void 0), _(this, "anim", new o.Z.Value(f.START)), _(this, "state", {
        shouldAnimate: !l.tq
      }), _(this, "handleResize", () => {
        let e = window.innerWidth > p;
        !this.state.shouldAnimate && e && this.anim.setValue(f.END), this.setState({
          shouldAnimate: e
        })
      }), _(this, "handleResizeDebounced", a()(this.handleResize, 60))
    }
  }
}