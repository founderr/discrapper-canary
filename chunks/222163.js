"use strict";
n.r(t), n.d(t, {
  referencePortalAwareContains: function() {
    return S
  },
  ReferencePositionLayer: function() {
    return v
  }
}), n("222007"), n("70102");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("627445"),
  l = n.n(o),
  u = n("718776"),
  c = n("36763"),
  d = n("659500"),
  p = n("439932"),
  h = n("411093"),
  f = n("228256"),
  E = n("49111"),
  _ = n("855265");
let m = new WeakMap;

function S(e, t) {
  if (e.contains(t)) return !0;
  let n = (0, h.default)(t, _.layer);
  for (; null != n;) {
    let t = m.get(n);
    if (null == t) break;
    if (e.contains(t)) return !0;
    n = (0, h.default)(t, _.layer)
  }
  return !1
}

function g(e) {
  let {
    positionKey: t,
    position: n,
    align: i
  } = e;
  return null != t ? t : "".concat(n, ":").concat(i)
}

function T(e, t, n, i) {
  switch (e) {
    case "top":
      return l(null != t.bottom, "Missing bottom"), i.offsetHeight - (t.bottom + n.offsetHeight);
    case "bottom":
      return l(null != t.top, "Missing top"), i.offsetHeight - (t.top + n.offsetHeight);
    case "left":
      return l(null != t.right, "Missing right"), i.offsetWidth - (t.right + n.offsetWidth);
    case "right":
      return l(null != t.left, "Missing left"), i.offsetWidth - (t.left + n.offsetWidth);
    case "center":
    case "window_center":
      return l(null != t.left, "Missing left"), i.offsetWidth - (t.left + n.offsetWidth / 2);
    default:
      throw Error("Unexpected position: ".concat(e))
  }
}

function I(e, t, n) {
  if (null != e && e < 0 && ("top" === n.position || "bottom" === n.position)) {
    let i = null != t && Math.abs(e) < (null == t ? void 0 : t.offsetHeight);
    if (i && null != n.style) {
      let t = "top" === n.position ? "bottom" : "top",
        i = n.style[t];
      return {
        ...n,
        style: {
          ...n.style,
          [t]: (null == i ? 0 : i) + e
        }
      }
    }
  }
  return n
}
class v extends r.Component {
  nudgeLeftAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: i
    } = this.props;
    if (!i) return e;
    let r = n.offsetWidth,
      s = e + t.offsetWidth,
      a = s - r + 12;
    return a > 0 ? Math.max(12, e - a) : e
  }
  getHorizontalAlignmentStyle(e, t, n, i) {
    let {
      align: r
    } = this.props;
    switch (r) {
      case "left": {
        let r = Math.ceil(this.nudgeLeftAlignment(e.left, t, n)),
          s = Math.ceil(e.left) - r;
        return {
          style: {
            ...i,
            left: r
          },
          nudge: s
        }
      }
      case "right": {
        let t = Math.ceil(n.offsetWidth - e.right);
        return {
          style: {
            ...i,
            right: t
          },
          nudge: 0
        }
      }
      case "center": {
        let r = e.left + (e.width - t.offsetWidth) / 2,
          s = Math.ceil(this.nudgeLeftAlignment(r, t, n)),
          a = Math.ceil(r) - s;
        return {
          style: {
            ...i,
            left: s
          },
          nudge: a
        }
      }
      default:
        throw Error("Unsupported align: ".concat(r))
    }
  }
  nudgeTopAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: i
    } = this.props;
    if (!i) return e;
    if (e < 0) return 0;
    let r = t.getBoundingClientRect().height,
      s = n.offsetHeight,
      a = e + r - s + 12;
    return a > 0 ? Math.max(12, e - a) : e
  }
  nudgeBottomAlignment(e, t, n) {
    let {
      nudgeAlignIntoViewport: i
    } = this.props, r = n.offsetHeight, s = r - e;
    if (!i) return s;
    let a = s + t.offsetHeight - r + 12;
    return a > 0 ? Math.max(12, s - a) : s
  }
  getVerticalAlignmentStyle(e, t, n, i) {
    let {
      align: r
    } = this.props;
    switch (r) {
      case "top": {
        let r = Math.ceil(this.nudgeTopAlignment(e.top, t, n)),
          s = Math.ceil(e.top) - r;
        return {
          style: {
            ...i,
            top: r
          },
          nudge: s
        }
      }
      case "bottom": {
        let r = Math.ceil(this.nudgeBottomAlignment(e.bottom, t, n)),
          s = Math.ceil(e.bottom) - r;
        return {
          style: {
            ...i,
            bottom: r
          },
          nudge: s
        }
      }
      case "center": {
        let r = e.top + (e.height - t.offsetHeight) / 2,
          s = Math.ceil(this.nudgeTopAlignment(r, t, n)),
          a = Math.ceil(r) - s;
        return {
          style: {
            ...i,
            top: s
          },
          nudge: a
        }
      }
      default:
        throw Error("Unsupported align: ".concat(r))
    }
  }
  calculatePositionStyle(e, t, n) {
    var i, r, s, a;
    let {
      reference: o,
      spacing: u = 0
    } = this.props;
    let c = "function" == typeof(i = o) ? i() : (l(null != i.current, "Invalid ref"), i.current.getBoundingClientRect()),
      d = n.getBoundingClientRect();
    let p = (r = c, s = d.left, a = d.top, {
      top: r.top - a,
      left: r.left - s,
      bottom: r.bottom - a,
      right: r.right - s,
      width: r.width,
      height: r.height
    });
    switch (e) {
      case "top":
        return this.getHorizontalAlignmentStyle(p, t, n, {
          bottom: n.offsetHeight - p.top + u
        });
      case "bottom":
        return this.getHorizontalAlignmentStyle(p, t, n, {
          top: p.bottom + u
        });
      case "left":
        return this.getVerticalAlignmentStyle(p, t, n, {
          right: n.offsetWidth - p.left + u
        });
      case "right":
        return this.getVerticalAlignmentStyle(p, t, n, {
          left: p.right + u
        });
      case "center":
        return this.getVerticalAlignmentStyle(p, t, n, {
          left: p.left + p.width / 2 - t.offsetWidth / 2 + u
        });
      case "window_center":
        return this.getVerticalAlignmentStyle(p, t, n, {
          left: Math.max((window.innerWidth - t.offsetWidth) / 2, 0)
        });
      default:
        throw Error("Unexpected position: ".concat(e))
    }
  }
  calculateState() {
    let {
      position: e,
      autoInvert: t
    } = this.props, n = this.elementRef.current;
    l(null != n, "Unexpected null element");
    let i = (0, f.getParentLayerContainer)(n),
      {
        style: r,
        nudge: s
      } = this.calculatePositionStyle(e, n, i),
      a = null,
      o = null;
    if (t && (a = T(e, r, n, i)) < 0) {
      let t = function(e) {
          switch (e) {
            case "top":
              return "bottom";
            case "bottom":
              return "top";
            case "left":
              return "right";
            case "right":
              return "left";
            case "center":
              return "center";
            case "window_center":
              return "window_center";
            default:
              throw Error()
          }
        }(e),
        {
          style: r,
          nudge: s
        } = this.calculatePositionStyle(t, n, i);
      if ((o = T(t, r, n, i)) > a) return I(o, n, {
        position: t,
        nudge: s,
        style: r
      })
    }
    return I(a, n, {
      position: e,
      nudge: s,
      style: r
    })
  }
  componentDidMount() {
    var e, t;
    let {
      reference: n,
      onMount: i
    } = this.props;
    this.setState({
      isPositioned: !0,
      ...this.calculateState()
    });
    let r = this.elementRef.current;
    l(null != r, "Missing elementRef"), "function" != typeof n && null != n.current && m.set(r, n.current), d.ComponentDispatch.subscribe(E.ComponentActions.LAYER_POP_START, this.handleLayerPopStart), d.ComponentDispatch.subscribe(E.ComponentActions.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == r || null === (t = r.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.addEventListener("resize", this.handleLayerPopComplete), null == i || i()
  }
  componentDidUpdate(e, t) {
    if (g(e) !== g(this.props) ? this.updatePosition() : ! function(e, t) {
        if ("function" == typeof e && "function" == typeof t) {
          let n = e(),
            i = t();
          return n.top === i.top && n.left === i.left
        }
        return e === t
      }(e.reference, this.props.reference) && this.updatePosition(), t.position !== this.state.position) {
      var n, i;
      null === (n = (i = this.props).onPositionChange) || void 0 === n || n.call(i, this.state.position)
    }
  }
  componentWillUnmount() {
    var e, t, n, i;
    let r = this.elementRef.current;
    l(null != r, "Missing elementRef"), m.delete(r), d.ComponentDispatch.unsubscribe(E.ComponentActions.LAYER_POP_START, this.handleLayerPopStart), d.ComponentDispatch.unsubscribe(E.ComponentActions.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == r || null === (t = r.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.removeEventListener("resize", this.handleLayerPopComplete), null === (n = (i = this.props).onUnmount) || void 0 === n || n.call(i)
  }
  render() {
    let {
      id: e,
      className: t,
      children: n,
      fixed: r,
      disablePointerEvents: s
    } = this.props, {
      position: o,
      isPositioned: l,
      isSettingsLayerTransitioning: d,
      nudge: h
    } = this.state;
    return (0, i.jsx)(c.UseThemeContext, {
      children: c => {
        let {
          theme: f
        } = c;
        return (0, i.jsx)("div", {
          id: e,
          className: a(t, (0, p.getThemeClass)(f), _.layer, {
            [_.emptyError]: !1,
            [_.layerHidden]: d,
            [_.disabledPointerEvents]: s
          }),
          style: {
            position: r ? "fixed" : "absolute",
            ...this.state.style
          },
          ref: this.elementRef,
          children: (0, i.jsx)(u.FocusRingScope, {
            containerRef: this.elementRef,
            children: n({
              position: o,
              nudge: h,
              isPositioned: l
            }, this.updatePosition)
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), this.elementRef = r.createRef(), this.state = {
      style: Object.freeze({}),
      position: this.props.autoInvert ? null : this.props.position,
      nudge: 0,
      isPositioned: !1,
      isSettingsLayerTransitioning: !1
    }, this.handleLayerPopStart = () => {
      this.setState({
        isSettingsLayerTransitioning: !0
      })
    }, this.handleLayerPopComplete = () => {
      let e = this.calculateState();
      this.setState({
        ...e,
        isSettingsLayerTransitioning: !1
      })
    }, this.updatePosition = () => {
      this.setState(this.calculateState())
    }
  }
}
v.defaultProps = {
  nudgeAlignIntoViewport: !1,
  spacing: 0,
  autoInvert: !1,
  disablePointerEvents: !1
}