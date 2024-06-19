n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(748780),
  o = n(846519),
  u = n(585483),
  c = n(981631),
  d = n(689938),
  h = n(97124);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = {
  friction: 15,
  tension: 100
};
class m extends i.PureComponent {
  componentDidMount() {
    this.setState({
      shown: !0
    }), u.S.subscribe(c.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
  }
  componentWillUnmount() {
    this.focusTimeout.stop(), u.S.unsubscribe(c.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
  }
  componentDidUpdate() {
    let {
      hasQuery: e
    } = this.props;
    !e && this.springTo(0)
  }
  springTo(e) {
    a.Z.spring(this.state.translateY, {
      toValue: Math.min(e, 250),
      ...p
    }).start()
  }
  renderArrowGroup(e) {
    return (0, l.jsxs)("div", {
      className: r()(h.arrowGroup, e),
      children: [(0, l.jsx)(a.Z.div, {
        className: r()(h.arrowContainer, h.horizontal),
        style: this.getStyle(),
        children: (0, l.jsx)("img", {
          alt: "",
          src: n(403756),
          className: h.arrowIcon
        })
      }), (0, l.jsx)("div", {
        className: r()(h.arrowContainer, h.diag1),
        children: (0, l.jsx)("img", {
          alt: "",
          src: n(536404),
          className: h.arrowIcon
        })
      }), (0, l.jsx)("div", {
        className: r()(h.arrowContainer, h.diag2),
        children: (0, l.jsx)("img", {
          alt: "",
          src: n(569347),
          className: h.arrowIcon
        })
      })]
    })
  }
  renderContent() {
    return (0, l.jsxs)("div", {
      className: h.tutorialMessages,
      children: [(0, l.jsx)("div", {
        className: h.searchMessage,
        children: d.Z.Messages.QUICKSWITCHER_TUTORIAL_MESSAGE_SEARCH
      }), (0, l.jsx)("div", {
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
    return (0, l.jsxs)("div", {
      ref: this.rootRef,
      className: r()(h.tutorial, {
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
    super(...e), g(this, "state", {
      shown: !1,
      translateY: new a.Z.Value(0)
    }), g(this, "rootRef", i.createRef()), g(this, "focusTimeout", new o.V7), g(this, "handleResultFocus", e => {
      let {
        node: t
      } = e;
      this.focusTimeout.start(1, () => {
        if (this.props.hasQuery && null != t && null != this.rootRef.current) {
          let {
            top: e
          } = this.rootRef.current.getBoundingClientRect(), {
            top: n
          } = t.getBoundingClientRect(), l = Math.abs(e - n);
          this.springTo(l - 118 + 9)
        } else this.springTo(0)
      })
    })
  }
}
t.Z = m