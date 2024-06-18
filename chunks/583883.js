"use strict";
n.d(t, {
  B: function() {
    return i
  }
}), n(47120), n(411104);
var i, s, l, o = n(735250),
  a = n(470079),
  r = n(120356),
  c = n.n(r),
  d = n(902704),
  u = n(434529),
  h = n(981631),
  p = n(149871);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
(l = i || (i = {})).MOVE = "MOVE", l.RESIZE_NORTH = "RESIZE_NORTH", l.RESIZE_WEST = "RESIZE_WEST", l.RESIZE_EAST = "RESIZE_EAST", l.RESIZE_SOUTH = "RESIZE_SOUTH", l.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST", l.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST", l.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST", l.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST";
let g = new Set(["RESIZE_NORTH", "RESIZE_WEST", "RESIZE_EAST", "RESIZE_SOUTH", "RESIZE_NORTH_WEST", "RESIZE_NORTH_EAST", "RESIZE_SOUTH_WEST", "RESIZE_SOUTH_EAST"]);

function m(e, t, n) {
  let {
    width: i,
    height: s
  } = e;
  return {
    width: "auto" === i ? "auto" : Math.max(t, i),
    height: "auto" === s ? "auto" : Math.max(n, s)
  }
}

function Z(e) {
  let {
    top: t,
    left: n,
    bottom: i,
    right: s
  } = e;
  return null == n && null == s && (n = 0), null != n && null != s && (s = null), null == t && null == i && (t = 0), null != t && null != i && (i = null), {
    top: t,
    left: n,
    bottom: i,
    right: s
  }
}

function I(e) {
  return "auto" === e || null == e ? "auto" : "".concat(e, "px")
}

function S(e, t) {
  let n = 0,
    i = 0;
  return n = "auto" === t.width ? null != e ? e.clientWidth : 0 : t.width, {
    width: n,
    height: i = "auto" === t.height ? null != e ? e.clientHeight : 0 : t.height
  }
}

function _(e, t) {
  let {
    top: n,
    left: i,
    bottom: s,
    right: l
  } = t;
  switch (e) {
    case "RESIZE_EAST":
    case "RESIZE_NORTH_EAST":
    case "RESIZE_NORTH":
      return {
        bottom: s, left: i, right: null, top: null
      };
    case "RESIZE_WEST":
    case "RESIZE_NORTH_WEST":
      return {
        bottom: s, right: l, left: null, top: null
      };
    case "RESIZE_SOUTH_EAST":
      return {
        top: n, left: i, bottom: null, right: null
      };
    case "RESIZE_SOUTH":
    case "RESIZE_SOUTH_WEST":
      return {
        top: n, right: l, bottom: null, left: null
      };
    default:
      throw Error("getOrientedCoords: Invalid orientation: ".concat(e))
  }
}
class C extends(s = a.Component) {
  shouldComponentUpdate(e, t) {
    return !(0, d.Z)(t, this.state) || !(0, d.Z)(e, this.props, ["anchor", "size", "minSize", "container"]) || !(0, d.Z)(e.anchor, this.props.anchor) || !(0, d.Z)(e.size, this.props.size) || !(0, d.Z)(e.minSize, this.props.minSize) || !(0, d.Z)(e.container, this.props.container)
  }
  componentDidUpdate(e, t) {
    null == t.operation && (!(0, d.Z)(this.props.anchor, e.anchor) && this.setDOMPositions(Z(this.props.anchor)), !(0, d.Z)(this.props.size, e.size) && this.setDOMSize(m(this.props.size, this.props.minSize.width, this.props.minSize.height)))
  }
  componentWillUnmount() {
    this.handleOperationEnd()
  }
  handleResizeMouseDown(e, t) {
    let {
      clientX: n,
      clientY: i
    } = e;
    e.stopPropagation(), this.handleOperationStart(t, n, i)
  }
  handleDragMove(e, t) {
    let {
      ref: {
        current: n
      },
      props: {
        id: i,
        container: {
          maxX: s,
          maxY: l,
          minX: o,
          minY: a
        },
        onDragStart: r,
        onDrag: c,
        snapOrientation: d
      },
      dragState: {
        offsetX: h,
        offsetY: p
      },
      state: {
        operationStarted: f
      }
    } = this;
    if (null == n) return null;
    e = Math.max(Math.min(s, e), o), t = Math.max(Math.min(l, t), a);
    let {
      width: E,
      height: g
    } = S(n, this.size), m = t - p, Z = e - h, I = (0, u.ou)((0, u.PY)({
      top: m,
      left: Z,
      bottom: null,
      right: null
    }, s, l, E, g)), C = d ? (0, u.R)(I) : _("RESIZE_SOUTH_EAST", I);
    this.setDOMPositions(C), !f && (null != r && r(), this.setState({
      operationStarted: !0
    })), null != c && c(i, "MOVE", this.anchor, this.size)
  }
  handleResizeMove(e, t) {
    let {
      props: {
        id: n,
        minSize: i,
        container: {
          maxX: s,
          maxY: l,
          minX: o,
          minY: a
        },
        onDragStart: r,
        onDrag: c
      },
      state: {
        operation: d,
        operationStarted: u
      }
    } = this, {
      startX: h,
      startY: p,
      offsetWidth: f,
      offsetHeight: E
    } = this.dragState, g = 0, m = 0;
    if (null != d) {
      switch (e = Math.max(Math.min(s, e), o), t = Math.max(Math.min(l, t), a), d) {
        case "RESIZE_EAST":
        case "RESIZE_SOUTH_EAST":
        case "RESIZE_NORTH_EAST":
          g -= h - e;
          break;
        case "RESIZE_WEST":
        case "RESIZE_SOUTH_WEST":
        case "RESIZE_NORTH_WEST":
          g += h - e
      }
      switch (d) {
        case "RESIZE_SOUTH":
        case "RESIZE_SOUTH_WEST":
        case "RESIZE_SOUTH_EAST":
          m -= p - t;
          break;
        case "RESIZE_NORTH":
        case "RESIZE_NORTH_WEST":
        case "RESIZE_NORTH_EAST":
          m += p - t
      }
      f = Math.max(f + g, i.width), E = Math.max(E + m, i.height), this.setDOMSize({
        width: f,
        height: E
      }), !u && (null != r && r(), this.setState({
        operationStarted: !0
      })), null != c && c(n, d, this.anchor, this.size)
    }
  }
  setDOMPositions(e) {
    let {
      top: t,
      left: n,
      bottom: i,
      right: s
    } = e, {
      current: l
    } = this.ref;
    if (this.anchor = {
        top: t,
        left: n,
        bottom: i,
        right: s
      }, null != l) l.style.top = I(t), l.style.bottom = I(i), l.style.left = I(n), l.style.right = I(s)
  }
  setDOMSize(e) {
    let {
      width: t,
      height: n
    } = e, {
      current: i
    } = this.ref;
    if (t = "auto" === this.size.width ? "auto" : t, n = "auto" === this.size.height ? "auto" : n, this.size = {
        width: t,
        height: n
      }, null != i) i.style.width = I(t), i.style.height = I(n)
  }
  renderResizeHandles() {
    let {
      resizeY: e,
      resizeX: t,
      active: n
    } = this.props;
    return (0, o.jsxs)(a.Fragment, {
      children: [e ? (0, o.jsxs)(a.Fragment, {
        children: [(0, o.jsx)("div", {
          className: c()(p.resizeNorth, {
            [p.resizeNSCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH")
        }), (0, o.jsx)("div", {
          className: c()(p.resizeSouth, {
            [p.resizeNSCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH")
        })]
      }) : null, t ? (0, o.jsxs)(a.Fragment, {
        children: [(0, o.jsx)("div", {
          className: c()(p.resizeEast, {
            [p.resizeEWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_EAST")
        }), (0, o.jsx)("div", {
          className: c()(p.resizeWest, {
            [p.resizeEWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_WEST")
        })]
      }) : null, t && e ? (0, o.jsxs)(a.Fragment, {
        children: [(0, o.jsx)("div", {
          className: c()(p.resizeNorthWest, {
            [p.resizeNWSECursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST")
        }), (0, o.jsx)("div", {
          className: c()(p.resizeNorthEast, {
            [p.resizeNESWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST")
        }), (0, o.jsx)("div", {
          className: c()(p.resizeSouthWest, {
            [p.resizeNESWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST")
        }), (0, o.jsx)("div", {
          className: c()(p.resizeSouthEast, {
            [p.resizeNWSECursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST")
        })]
      }) : null]
    })
  }
  render() {
    let {
      props: {
        children: e,
        hidden: t,
        onClick: n,
        id: i,
        style: s
      },
      size: l,
      anchor: a,
      state: {
        operation: r,
        operationStarted: d
      }
    } = this;
    return (0, o.jsxs)("div", {
      ref: this.ref,
      style: {
        ...a,
        ...l,
        ...s,
        ...null != r ? {
          zIndex: 1e3
        } : void 0,
        ...t ? {
          visibility: "hidden"
        } : void 0
      },
      className: c()({
        [p.wrapper]: !0,
        [p.operation]: d
      }),
      onMouseDown: this.handleMouseDown,
      onClick: null != n ? () => n(i) : void 0,
      children: [e(this.handleOperationStart), this.renderResizeHandles()]
    })
  }
  constructor(e) {
    super(e), f(this, "anchor", void 0), f(this, "size", void 0), f(this, "ref", a.createRef()), f(this, "dragState", {
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
      offsetWidth: 0,
      offsetHeight: 0
    }), f(this, "state", {
      operation: null,
      operationStarted: !1
    }), f(this, "handleMouseDown", e => {
      e.stopPropagation();
      let {
        dragAnywhere: t
      } = this.props, {
        current: n
      } = this.ref;
      null != n && e.button === h.AeJ.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY)
    }), f(this, "handleMouseMove", e => {
      e.preventDefault(), e.stopPropagation();
      let {
        clientX: t,
        clientY: n
      } = e, {
        dragState: {
          startX: i,
          startY: s
        },
        state: {
          operation: l,
          operationStarted: o
        }
      } = this;
      if (!(null == l || !o && 3 > E(i, s, t, n))) "MOVE" === l ? this.handleDragMove(t, n) : g.has(l) && this.handleResizeMove(t, n)
    }), f(this, "handleOperationStart", (e, t, n) => {
      let {
        ref: {
          current: i
        },
        props: {
          active: s,
          container: {
            maxX: l,
            maxY: o
          }
        }
      } = this;
      if (null == i || !s) return;
      let {
        width: a,
        height: r
      } = S(i, this.size), c = (0, u.PY)(this.anchor, l, o, a, r);
      if ("MOVE" === e) {
        let {
          x: e,
          y: i
        } = function(e) {
          let {
            top: t,
            left: n
          } = e;
          return {
            x: n,
            y: t
          }
        }(c);
        this.dragState = {
          ...this.dragState,
          startX: t,
          startY: n,
          offsetX: t - e,
          offsetY: n - i
        }
      } else {
        let i = _(e, c);
        this.setDOMPositions(i), this.dragState = {
          ...this.dragState,
          startX: t,
          startY: n,
          offsetWidth: a,
          offsetHeight: r
        }
      }
      this.setState({
        operation: e,
        operationStarted: !1
      }, () => {
        window.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleOperationEnd)
      })
    }), f(this, "handleOperationEnd", () => {
      let {
        operation: e,
        operationStarted: t
      } = this.state, {
        onDragEnd: n
      } = this.props;
      window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleOperationEnd);
      let i = t ? () => {
        let {
          onUpdate: t,
          id: n
        } = this.props;
        t(e, n, this.anchor, this.size, S(this.ref.current, this.size))
      } : void 0;
      if (t) {
        let {
          maxX: e,
          maxY: t
        } = this.props.container, {
          width: i,
          height: s
        } = S(this.ref.current, this.size), l = (0, u.PY)(this.anchor, e, t, i, s), o = (0, u.R)(l);
        this.setDOMPositions(o), this.setDOMSize({
          width: i,
          height: s
        }), null != n && n()
      }
      this.setState({
        operation: null,
        operationStarted: !1
      }, i)
    }), this.anchor = Z(e.anchor), this.size = m(e.size, e.minSize.width, e.minSize.height)
  }
}
f(C, "Operations", i), f(C, "defaultProps", {
  snapOrientation: !0,
  minSize: {
    width: 0,
    height: 0
  },
  container: {
    minX: 0,
    minY: 0,
    maxX: 1 / 0,
    maxY: 1 / 0
  },
  resizeX: !0,
  resizeY: !0,
  hidden: !1,
  dragAnywhere: !0,
  active: !0
}), t.Z = C