"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("411104"), n("47120");
var a, s, i, l, r, o = n("735250"),
  u = n("470079"),
  d = n("981631");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = (e, t) => {
  let {
    x: n,
    y: a
  } = e, {
    x: s,
    y: i
  } = t;
  return Math.pow(n - s, 2) + Math.pow(a - i, 2)
};

function E(e, t, n, a, s) {
  let {
    top: i,
    bottom: l,
    left: r,
    right: o
  } = e;
  if (null == i && null == l ? (i = 0, l = n - s) : null == i && null != l ? i = n - (l + s) : null != i && (l = n - (i + s)), null == r && null == o ? (r = 0, o = t - a) : null == r && null != o ? r = t - (o + a) : null == o && null != r && (o = t - (r + a)), null == i || null == l || null == r || null == o) throw Error("Logically this can never happen based on our if/else statements");
  return {
    top: i,
    left: r,
    bottom: l,
    right: o
  }
}(l = a || (a = {}))[l.DISABLED = 0] = "DISABLED", l[l.DEFAULT = 1] = "DEFAULT", l[l.OFFSET = 2] = "OFFSET", (r = s || (s = {})).TOP = "TOP", r.BOTTOM = "BOTTOM", r.RIGHT = "RIGHT", r.LEFT = "LEFT";

function h(e) {
  return [null == e.bottom ? "TOP" : "BOTTOM", null == e.right ? "LEFT" : "RIGHT"]
}

function _(e) {
  let {
    top: t,
    left: n,
    bottom: a,
    right: s
  } = e;
  return 0 === t || t <= a ? a = null : t = null, 0 === n || n <= s ? s = null : n = null, {
    top: t,
    left: n,
    bottom: a,
    right: s
  }
}

function C(e) {
  let {
    top: t,
    left: n,
    bottom: a,
    right: s
  } = e;
  return a < 0 && (t += a, a = 0), t < 0 && (a += t, t = 0), s < 0 && (n += s, s = 0), n < 0 && (s += n, n = 0), {
    top: t,
    left: n,
    bottom: a,
    right: s
  }
}

function m(e) {
  return null != e ? "".concat(e, "px") : "auto"
}
class S extends(i = u.PureComponent) {
  componentDidMount() {
    this.checkBounds(), this.setDOMPositions(this.position)
  }
  componentDidUpdate(e, t) {
    let {
      state: {
        verticalOrientation: n,
        horizontalOrientation: a,
        atTopEdge: s
      },
      props: {
        maxX: i,
        maxY: l,
        onRelocated: r,
        snapOrientation: o
      }
    } = this;
    (e.maxX !== i || e.maxY !== l || e.onRelocated !== r || e.snapOrientation !== o || t.verticalOrientation !== n || t.horizontalOrientation !== a || t.atTopEdge !== s) && this.checkBounds()
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleMouseUp)
  }
  setDOMPositions(e) {
    let {
      top: t,
      left: n,
      bottom: a,
      right: s
    } = e, {
      draggableRef: {
        current: i
      }
    } = this;
    this.position = {
      top: t,
      left: n,
      bottom: a,
      right: s
    }, null != i && (i.style.top = m(t), i.style.bottom = m(a), i.style.left = m(n), i.style.right = m(s))
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      dragging: n,
      verticalOrientation: a,
      horizontalOrientation: s,
      atTopEdge: i
    } = this.state, {
      top: l,
      left: r,
      right: d,
      bottom: c
    } = this.position;
    return (0, o.jsx)("div", {
      ref: this.draggableRef,
      className: t,
      onMouseDown: this.handleMouseDown,
      style: {
        pointerEvents: n ? "none" : "auto",
        position: "absolute",
        top: l,
        left: r,
        bottom: c,
        right: d
      },
      children: u.cloneElement(u.Children.only(e), {
        flipped: "RIGHT" === s,
        verticalFlipped: "BOTTOM" === a,
        checkBounds: this.checkBounds,
        atTopEdge: i
      })
    })
  }
  constructor(e) {
    super(e), c(this, "draggableRef", u.createRef()), c(this, "_dragStart", {
      x: 0,
      y: 0
    }), c(this, "_offsetX", void 0), c(this, "_offsetY", void 0), c(this, "position", void 0), c(this, "handleMouseDown", e => {
      let {
        top: t,
        left: n,
        bottom: a,
        right: s
      } = this.position, {
        dragAnywhere: i,
        selector: l,
        maxX: r,
        maxY: o
      } = this.props, {
        target: u
      } = e, {
        current: c
      } = this.draggableRef;
      if (null != c && e.button === d.MouseButtons.PRIMARY && (i || null != u && null != l && "" !== l && null != u.closest(l))) {
        let {
          x: i,
          y: l
        } = function(e) {
          let {
            top: t,
            left: n
          } = e;
          return {
            x: n,
            y: t
          }
        }(E({
          top: t,
          left: n,
          bottom: a,
          right: s
        }, r, o, c.clientWidth, c.clientHeight));
        this._dragStart = {
          x: e.clientX,
          y: e.clientY
        }, this._offsetX = e.clientX - i, this._offsetY = e.clientY - l, window.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleMouseUp)
      }
    }), c(this, "handleMouseMove", e => {
      e.preventDefault();
      let {
        clientX: t,
        clientY: n
      } = e, {
        current: a
      } = this.draggableRef, {
        maxX: s,
        maxY: i,
        flipVertical: l,
        flipHorizontal: r,
        onDragStart: o,
        onDrag: u,
        onFlip: d,
        snapOrientation: c
      } = this.props, {
        dragging: m,
        dragging: S,
        verticalOrientation: p,
        horizontalOrientation: g
      } = this.state, I = !1;
      if (null == a || !m && 9 > f(this._dragStart, {
          x: t,
          y: n
        })) return;
      m = !0;
      let {
        clientWidth: T,
        clientHeight: A
      } = a, N = n - this._offsetY, v = C(E({
        top: N,
        left: t - this._offsetX
      }, s, i, T, A));
      if (c) {
        let e = h(v = _(v));
        p = e[0], g = e[1]
      } else v = {
        top: v.top,
        left: v.left
      };
      2 === r && g !== this.state.horizontalOrientation && (this._offsetX = T - this._offsetX, I = !0), 2 === l && p !== this.state.verticalOrientation && (this._offsetY = A - this._offsetY, I = !0), this.setDOMPositions(v), !S && (null == o || o(v, a)), null == u || u(v, a), I && (null == d || d([p, g])), this.setState({
        dragging: m,
        verticalOrientation: p,
        horizontalOrientation: g,
        atTopEdge: 0 === v.top
      })
    }), c(this, "handleMouseUp", () => {
      window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleMouseUp), this.state.dragging && this.setState({
        dragging: !1
      }, () => {
        let {
          onDragEnd: e
        } = this.props, {
          current: t
        } = this.draggableRef;
        null != t && null != e && e(this.position, t)
      })
    }), c(this, "_checkBoundsRAF", null), c(this, "checkBounds", () => {
      null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF), this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds)
    }), c(this, "_performCheckBounds", () => {
      let e;
      let {
        position: t,
        state: n,
        draggableRef: {
          current: a
        },
        props: {
          maxX: s,
          maxY: i,
          onRelocated: l,
          snapOrientation: r
        }
      } = this, {
        verticalOrientation: o,
        horizontalOrientation: u
      } = this.state;
      if (null == a) return;
      let {
        clientHeight: d,
        clientWidth: c
      } = a, f = E(t, s, i, c, d);
      if (f = C(f), r) {
        let t = h(e = _(f));
        o = t[0], u = t[1]
      } else e = {
        top: f.top,
        left: f.left,
        right: null,
        bottom: null
      };
      if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom) return;
      null == l || l(e, a), this.setDOMPositions(e);
      let m = 0 === e.top;
      (o !== n.verticalOrientation || u !== n.horizontalOrientation || m !== n.atTopEdge) && this.setState({
        verticalOrientation: o,
        horizontalOrientation: u,
        atTopEdge: m
      })
    });
    let [t, n] = h(e.initialPosition);
    this.position = function(e) {
      let {
        top: t,
        left: n,
        bottom: a,
        right: s
      } = e;
      return null == n && null == s && (n = 0), null != n && null != s && (s = null), null == t && null == a && (t = 0), null != t && null != a && (a = null), {
        top: t,
        left: n,
        bottom: a,
        right: s
      }
    }(e.initialPosition), this.state = {
      dragging: !1,
      verticalOrientation: t,
      horizontalOrientation: n,
      atTopEdge: 0 === this.position.top
    }
  }
}
c(S, "FlipTypes", a), c(S, "defaultProps", {
  snapOrientation: !1,
  maxX: 0,
  maxY: 0,
  flipVertical: 0,
  flipHorizontal: 0,
  dragAnywhere: !1
})