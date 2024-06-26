n(47120);
var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(748780),
  o = n(846519),
  c = n(585483),
  u = n(981631),
  d = n(689938),
  h = n(97124);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {
  friction: 15,
  tension: 100
};
class f extends l.PureComponent {
  componentDidMount() {
    this.setState({
      shown: !0
    }), c.S.subscribe(u.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
  }
  componentWillUnmount() {
    this.focusTimeout.stop(), c.S.unsubscribe(u.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
  }
  componentDidUpdate() {
    let {
      hasQuery: e
    } = this.props;
    !e && this.springTo(0)
  }
  springTo(e) {
    s.Z.spring(this.state.translateY, {
      toValue: Math.min(e, 250),
      ..._
    }).start()
  }
  renderArrowGroup(e) {
    return (0, i.jsxs)("div", {
      className: a()(h.arrowGroup, e),
      children: [(0, i.jsx)(s.Z.div, {
        className: a()(h.arrowContainer, h.horizontal),
        style: this.getStyle(),
        children: (0, i.jsx)("img", {
          alt: "",
          src: n(403756),
          className: h.arrowIcon
        })
      }), (0, i.jsx)("div", {
        className: a()(h.arrowContainer, h.diag1),
        children: (0, i.jsx)("img", {
          alt: "",
          src: n(536404),
          className: h.arrowIcon
        })
      }), (0, i.jsx)("div", {
        className: a()(h.arrowContainer, h.diag2),
        children: (0, i.jsx)("img", {
          alt: "",
          src: n(569347),
          className: h.arrowIcon
        })
      })]
    })
  }
  renderContent() {
    return (0, i.jsxs)("div", {
      className: h.tutorialMessages,
      children: [(0, i.jsx)("div", {
        className: h.searchMessage,
        children: d.Z.Messages.QUICKSWITCHER_TUTORIAL_MESSAGE_SEARCH
      }), (0, i.jsx)("div", {
        className: h.selectMessage,
        children: d.Z.Messages.QUICKSWITCHER_TUTORIAL_MESSAGE_SELECT
      })]
    })
  }
  render() {
    let {
      hasQuery: e
    } = this.props, {
      shown: t
    } = this.state;
    return (0, i.jsxs)("div", {
      ref: this.rootRef,
      className: a()(h.tutorial, {
        [h.shown]: t,
        [h.hasQuery]: e
      }),
      children: [this.renderContent(), this.renderArrowGroup(h.__invalid_left), this.renderArrowGroup(h.right)]
    })
  }
  getStyle() {
    return {
      transform: [{
        translateY: this.state.translateY.interpolate({
          inputRange: [0, 250],
          outputRange: ["0px", "".concat(250, "px")]
        })
      }, {
        translateZ: 0
      }]
    }
  }
  constructor(...e) {
    super(...e), p(this, "state", {
      shown: !1,
      translateY: new s.Z.Value(0)
    }), p(this, "rootRef", l.createRef()), p(this, "focusTimeout", new o.V7), p(this, "handleResultFocus", e => {
      let {
        node: t
      } = e;
      this.focusTimeout.start(1, () => {
        if (this.props.hasQuery && null != t && null != this.rootRef.current) {
          let {
            top: e
          } = this.rootRef.current.getBoundingClientRect(), {
            top: n
          } = t.getBoundingClientRect(), i = Math.abs(e - n);
          this.springTo(i - 118 + 9)
        } else this.springTo(0)
      })
    })
  }
}
t.Z = f