"use strict";
n.r(t), n.d(t, {
  Sequencer: function() {
    return f
  }
}), n("222007");
var i, r, s = n("37983"),
  a = n("884691"),
  o = n("414456"),
  l = n.n(o),
  u = n("458960"),
  c = n("266491"),
  d = n("413197"),
  p = n("86337");
(r = i || (i = {}))[r.ENTERING = 0] = "ENTERING", r[r.LEAVING = 1] = "LEAVING", r[r.APPEARING = 2] = "APPEARING", r[r.STATIC = 3] = "STATIC";
class h extends a.PureComponent {
  componentDidMount() {
    if (null != this._measureRef.current) {
      let {
        height: e
      } = this._measureRef.current.getBoundingClientRect();
      this.setState({
        targetHeight: e,
        baseHeight: this.props.getBaseHeight()
      })
    }
  }
  componentDidUpdate(e, t) {
    t.targetHeight !== this.state.targetHeight && this.props.setHeight(this.state.targetHeight)
  }
  componentWillAppear(e) {
    this.setState({
      animationState: 2
    }), e()
  }
  componentDidAppear() {
    let {
      animationProgress: e,
      targetHeight: t
    } = this.state;
    e.setValue(2), this.setState({
      animationState: 3,
      baseHeight: t
    })
  }
  componentWillEnter(e) {
    let {
      duration: t
    } = this.props, {
      animationProgress: n
    } = this.state;
    this.setState({
      animationState: 0
    }), this.props.setHeight(this.state.targetHeight), u.default.timing(n, {
      toValue: 2,
      duration: t,
      delay: t / 2
    }).start(e)
  }
  componentDidEnter() {
    this.setState({
      animationState: 3
    })
  }
  componentWillLeave(e) {
    let {
      animationProgress: t
    } = this.state, {
      duration: n,
      getDirection: i
    } = this.props;
    this.direction = i(), this.setState({
      animationState: 1
    }), u.default.timing(t, {
      toValue: 0,
      duration: n
    }).start(e)
  }
  componentDidLeave() {
    this.setState({
      animationState: 3
    })
  }
  getAnimatedStyle() {
    var e, t;
    let {
      reducedMotion: n
    } = this.context, {
      fillParent: i
    } = this.props, {
      animationProgress: r,
      animationState: s,
      baseHeight: a,
      targetHeight: o
    } = this.state, l = null !== (e = this.props.sideMargin) && void 0 !== e ? e : 0, c = null !== (t = this.props.verticalMargin) && void 0 !== t ? t : 0, d = 1 === s, p = 0 === s, h = (d ? -1 : 1) * this.direction, f = {
      transform: [{
        translateX: r.interpolate({
          inputRange: [0, 2],
          outputRange: ["".concat(150 * h, "%"), "0%"],
          extrapolate: "clamp",
          easing: u.default.Easing.inOut(u.default.Easing.ease)
        })
      }]
    };
    return {
      overflow: p || d ? "hidden" : "visible",
      position: d ? "absolute" : void 0,
      top: d ? c : void 0,
      left: d ? l : void 0,
      right: d ? l : void 0,
      bottom: d ? c : void 0,
      ...n.enabled ? null : f,
      opacity: r.interpolate({
        inputRange: [0, 2],
        outputRange: [0, 1],
        extrapolate: "clamp",
        easing: u.default.Easing.inOut(u.default.Easing.ease)
      }),
      height: p ? r.interpolate({
        inputRange: [0, 1],
        outputRange: [a, o],
        extrapolate: "clamp",
        easing: u.default.Easing.inOut(u.default.Easing.ease)
      }) : i ? "100%" : "auto"
    }
  }
  render() {
    let {
      fillParent: e,
      className: t,
      animatedNodeClassName: n,
      staticClassName: i
    } = this.props, {
      animationState: r
    } = this.state;
    return e ? (0, s.jsx)("div", {
      ref: this._measureRef,
      className: l(p.measurementFill, t, {
        [l(p.measurementFillStatic, i)]: 3 === r
      }),
      children: (0, s.jsx)(u.default.div, {
        className: l(p.animatedNode, n),
        style: this.getAnimatedStyle(),
        children: this.props.children
      })
    }) : (0, s.jsx)("div", {
      ref: this._measureRef,
      className: l(p.measurement, t),
      children: (0, s.jsx)(u.default.div, {
        className: l(p.animatedNode, n),
        style: this.getAnimatedStyle(),
        children: this.props.children
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      animationProgress: new u.default.Value(0),
      targetHeight: 0,
      baseHeight: 0,
      animationState: null
    }, this.direction = this.props.getDirection(), this._measureRef = a.createRef()
  }
}
h.contextType = d.AccessibilityPreferencesContext, h.defaultProps = {
  duration: 300
};
class f extends a.Component {
  componentDidMount() {
    this.setPrevSteps()
  }
  componentDidUpdate() {
    this.setPrevSteps()
  }
  setPrevSteps() {
    let {
      step: e,
      steps: t
    } = this.props;
    this.prevStep = e, this.prevSteps = t
  }
  render() {
    let {
      step: e,
      className: t,
      innerClassName: n,
      animatedNodeClassName: i,
      staticClassName: r,
      sideMargin: a,
      verticalMargin: o,
      children: u,
      fillParent: d
    } = this.props;
    return (0, s.jsx)(c.default, {
      component: "div",
      className: l(p.transitionGroup, t),
      children: (0, s.jsx)(h, {
        fillParent: d,
        sideMargin: a,
        verticalMargin: o,
        getDirection: this.getDirection,
        getBaseHeight: this.getBaseHeight,
        className: n,
        animatedNodeClassName: i,
        staticClassName: r,
        setHeight: this.setHeight,
        children: u
      }, "".concat(e))
    })
  }
  constructor(...e) {
    super(...e), this.stepHeights = {}, this.prevStep = null, this.prevSteps = [], this.getBaseHeight = () => null != this.prevStep && null != this.stepHeights[this.prevStep] ? this.stepHeights[this.prevStep] : 0, this.getDirection = () => {
      let {
        steps: e,
        step: t
      } = this.props, n = null != this.prevStep ? e.indexOf(this.prevStep) : -1, i = -1 === n && null != this.prevStep ? this.prevSteps.indexOf(this.prevStep) : -1, r = e.indexOf(t);
      return Math.max(n, i) > r ? -1 : 1
    }, this.setHeight = e => {
      let {
        step: t
      } = this.props;
      this.stepHeights[t] = e
    }
  }
}
f.defaultProps = {
  fillParent: !1
}