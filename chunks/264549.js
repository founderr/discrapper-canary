n(653041), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(392711),
  o = n.n(a),
  u = n(714338),
  c = n(585483),
  d = n(981631),
  h = n(971933);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = {
    PRIMARY: () => !0,
    SECONDARY: () => !0
  },
  m = () => (0, l.jsxs)("div", {
    className: h.symbol,
    children: [(0, l.jsx)("div", {
      className: h.symbolBackground
    }), (0, l.jsx)("img", {
      alt: "",
      src: n(977706)
    })]
  }, "symbol");
class C extends i.PureComponent {
  componentDidMount() {
    this.setState({
      animating: !0
    }), this._renderSecondaryTimeout = setTimeout(() => {
      this.setState({
        renderSecondary: !0
      })
    }, 120), this._doneTimeout = setTimeout(this.done, 1e3), p.PRIMARY()
  }
  componentDidUpdate(e, t) {
    this.state.renderSecondary && !t.renderSecondary && p.SECONDARY()
  }
  componentWillUnmount() {
    clearTimeout(this._renderSecondaryTimeout), clearTimeout(this._doneTimeout)
  }
  renderPrimary() {
    return (0, l.jsxs)("div", {
      className: h.primaryExplosion,
      children: [(0, l.jsx)("img", {
        alt: "",
        className: h.circleInner,
        src: n(273226),
        width: 70,
        height: 69
      }), (0, l.jsx)("img", {
        alt: "",
        className: h.circleOuter,
        src: n(922026),
        width: 96,
        height: 95
      }), (0, l.jsx)("img", {
        alt: "",
        className: h.linesSecondary,
        src: n(827926),
        width: 183,
        height: 104
      }), (0, l.jsx)("img", {
        alt: "",
        className: h.linesMain,
        src: n(873180),
        width: 69,
        height: 180
      })]
    }, "primary-explosion")
  }
  renderSecondary(e, t) {
    return (0, l.jsxs)("div", {
      className: h.secondaryExplosion,
      style: {
        top: t,
        left: e
      },
      children: [(0, l.jsx)("img", {
        alt: "",
        className: h.circleInner,
        src: n(272162),
        width: 61,
        height: 58
      }, "circle-inner"), (0, l.jsx)("img", {
        alt: "",
        className: h.circleOuter,
        src: n(632989),
        width: 85,
        height: 85
      }, "circle-outer"), (0, l.jsx)("img", {
        alt: "",
        className: h.linesSecondary,
        src: n(376252),
        width: 162,
        height: 173
      }, "lines-secondary"), (0, l.jsx)("img", {
        alt: "",
        className: h.linesMain,
        src: n(720617),
        width: 156,
        height: 306
      }, "lines-main")]
    }, "secondary-explosion")
  }
  render() {
    let {
      renderSecondary: e,
      offsetX: t,
      offsetY: n,
      animating: i,
      scale: s
    } = this.state, a = [this.renderPrimary()];
    return e && a.push(this.renderSecondary(t, n)), (0, l.jsx)("div", {
      className: r()(h.container, {
        [h.animate]: i
      }),
      style: {
        top: this.props.top,
        left: this.props.left,
        transform: "scale(".concat(s, ")")
      },
      children: a
    })
  }
  constructor(...e) {
    super(...e), g(this, "_renderSecondaryTimeout", null), g(this, "_doneTimeout", null), g(this, "state", {
      animating: !1,
      renderSecondary: !1,
      scale: o().random(.6, 1, !0),
      offsetX: o().random(0, 140, !1) - 70,
      offsetY: o().random(0, 140, !1) - 70
    }), g(this, "done", () => {
      this.props.onAnimationComplete(this.props.componentId)
    })
  }
}
let E = 240;
class f extends i.PureComponent {
  componentDidMount() {
    this.setTimeout(() => {
      this.setState({
        visible: !0
      }), c.S.dispatch(d.CkL.SHAKE_APP, {
        duration: 2400
      })
    }, 1800), this.setTimeout(this.createExplosion, 1800)
  }
  componentWillUnmount() {
    for (let e of (u.Z.enable(), this.children.length = 0, this._timeouts)) clearTimeout(e)
  }
  render() {
    return (0, l.jsx)("div", {
      className: r()(h.ragingDemon, {
        [h.visible]: this.state.visible
      }),
      children: this.children
    })
  }
  constructor(...e) {
    super(...e), g(this, "_timeouts", []), g(this, "children", []), g(this, "state", {
      explosions: 0,
      visible: !1
    }), g(this, "setTimeout", (e, t) => {
      let n = setTimeout(e, t);
      return this._timeouts.push(n), n
    }), g(this, "removeExplosion", e => {
      let t = this.children,
        n = t.findIndex(t => {
          if (t.type !== C) return !1;
          let n = t.props;
          return null != n.componentId && n.componentId === e
        });
      n >= 0 && t.splice(n, 1), this.forceUpdate()
    }), g(this, "createExplosion", () => {
      let e = this.children,
        t = window.innerWidth / 2 >> 0,
        n = window.innerHeight / 2 >> 0;
      if (this.state.explosions < 8) {
        let i = "expl-".concat(this.state.explosions);
        e.push((0, l.jsx)(C, {
          componentId: i,
          top: o().random(n - 100, n + 100, !1),
          left: o().random(t - 200, t + 200, !1),
          onAnimationComplete: this.removeExplosion
        }, i)), this.setTimeout(this.createExplosion, E), this.setState({
          explosions: this.state.explosions + 1
        })
      } else this.setTimeout(this.addSymbol, 750)
    }), g(this, "addSymbol", () => {
      this.children = [(0, l.jsx)(m, {}, "symbol")], this.forceUpdate(), this.setTimeout(this.delayedClose, 3e3)
    }), g(this, "delayedClose", () => {
      this.props.onClose()
    })
  }
}
t.Z = f