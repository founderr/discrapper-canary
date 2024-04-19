"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
}), a("411104"), a("47120");
var n, s, l, i, r, o = a("735250"),
  u = a("470079"),
  d = a("981631");

function c(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let f = (e, t) => {
  let {
    x: a,
    y: n
  } = e, {
    x: s,
    y: l
  } = t;
  return Math.pow(a - s, 2) + Math.pow(n - l, 2)
};

function E(e, t, a, n, s) {
  let {
    top: l,
    bottom: i,
    left: r,
    right: o
  } = e;
  if (null == l && null == i ? (l = 0, i = a - s) : null == l && null != i ? l = a - (i + s) : null != l && (i = a - (l + s)), null == r && null == o ? (r = 0, o = t - n) : null == r && null != o ? r = t - (o + n) : null == o && null != r && (o = t - (r + n)), null == l || null == i || null == r || null == o) throw Error("Logically this can never happen based on our if/else statements");
  return {
    top: l,
    left: r,
    bottom: i,
    right: o
  }
}(i = n || (n = {}))[i.DISABLED = 0] = "DISABLED", i[i.DEFAULT = 1] = "DEFAULT", i[i.OFFSET = 2] = "OFFSET", (r = s || (s = {})).TOP = "TOP", r.BOTTOM = "BOTTOM", r.RIGHT = "RIGHT", r.LEFT = "LEFT";

function h(e) {
  return [null == e.bottom ? "TOP" : "BOTTOM", null == e.right ? "LEFT" : "RIGHT"]
}

function _(e) {
  let {
    top: t,
    left: a,
    bottom: n,
    right: s
  } = e;
  return 0 === t || t <= n ? n = null : t = null, 0 === a || a <= s ? s = null : a = null, {
    top: t,
    left: a,
    bottom: n,
    right: s
  }
}

function C(e) {
  let {
    top: t,
    left: a,
    bottom: n,
    right: s
  } = e;
  return n < 0 && (t += n, n = 0), t < 0 && (n += t, t = 0), s < 0 && (a += s, s = 0), a < 0 && (s += a, a = 0), {
    top: t,
    left: a,
    bottom: n,
    right: s
  }
}

function m(e) {
  return null != e ? "".concat(e, "px") : "auto"
}
class S extends(l = u.PureComponent) {
  componentDidMount() {
    this.checkBounds(), this.setDOMPositions(this.position)
  }
  componentDidUpdate(e, t) {
    let {
      state: {
        verticalOrientation: a,
        horizontalOrientation: n,
        atTopEdge: s
      },
      props: {
        maxX: l,
        maxY: i,
        onRelocated: r,
        snapOrientation: o
      }
    } = this;
    (e.maxX !== l || e.maxY !== i || e.onRelocated !== r || e.snapOrientation !== o || t.verticalOrientation !== a || t.horizontalOrientation !== n || t.atTopEdge !== s) && this.checkBounds()
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleMouseUp)
  }
  setDOMPositions(e) {
    let {
      top: t,
      left: a,
      bottom: n,
      right: s
    } = e, {
      draggableRef: {
        current: l
      }
    } = this;
    this.position = {
      top: t,
      left: a,
      bottom: n,
      right: s
    }, null != l && (l.style.top = m(t), l.style.bottom = m(n), l.style.left = m(a), l.style.right = m(s))
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      dragging: a,
      verticalOrientation: n,
      horizontalOrientation: s,
      atTopEdge: l
    } = this.state, {
      top: i,
      left: r,
      right: d,
      bottom: c
    } = this.position;
    return (0, o.jsx)("div", {
      ref: this.draggableRef,
      className: t,
      onMouseDown: this.handleMouseDown,
      style: {
        pointerEvents: a ? "none" : "auto",
        position: "absolute",
        top: i,
        left: r,
        bottom: c,
        right: d
      },
      children: u.cloneElement(u.Children.only(e), {
        flipped: "RIGHT" === s,
        verticalFlipped: "BOTTOM" === n,
        checkBounds: this.checkBounds,
        atTopEdge: l
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
        left: a,
        bottom: n,
        right: s
      } = this.position, {
        dragAnywhere: l,
        selector: i,
        maxX: r,
        maxY: o
      } = this.props, {
        target: u
      } = e, {
        current: c
      } = this.draggableRef;
      if (null != c && e.button === d.MouseButtons.PRIMARY && (l || null != u && null != i && "" !== i && null != u.closest(i))) {
        let {
          x: l,
          y: i
        } = function(e) {
          let {
            top: t,
            left: a
          } = e;
          return {
            x: a,
            y: t
          }
        }(E({
          top: t,
          left: a,
          bottom: n,
          right: s
        }, r, o, c.clientWidth, c.clientHeight));
        this._dragStart = {
          x: e.clientX,
          y: e.clientY
        }, this._offsetX = e.clientX - l, this._offsetY = e.clientY - i, window.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleMouseUp)
      }
    }), c(this, "handleMouseMove", e => {
      e.preventDefault();
      let {
        clientX: t,
        clientY: a
      } = e, {
        current: n
      } = this.draggableRef, {
        maxX: s,
        maxY: l,
        flipVertical: i,
        flipHorizontal: r,
        onDragStart: o,
        onDrag: u,
        onFlip: d,
        snapOrientation: c
      } = this.props, {
        dragging: m,
        dragging: S,
        verticalOrientation: I,
        horizontalOrientation: p
      } = this.state, T = !1;
      if (null == n || !m && 9 > f(this._dragStart, {
          x: t,
          y: a
        })) return;
      m = !0;
      let {
        clientWidth: g,
        clientHeight: A
      } = n, N = a - this._offsetY, v = C(E({
        top: N,
        left: t - this._offsetX
      }, s, l, g, A));
      if (c) {
        let e = h(v = _(v));
        I = e[0], p = e[1]
      } else v = {
        top: v.top,
        left: v.left
      };
      2 === r && p !== this.state.horizontalOrientation && (this._offsetX = g - this._offsetX, T = !0), 2 === i && I !== this.state.verticalOrientation && (this._offsetY = A - this._offsetY, T = !0), this.setDOMPositions(v), !S && (null == o || o(v, n)), null == u || u(v, n), T && (null == d || d([I, p])), this.setState({
        dragging: m,
        verticalOrientation: I,
        horizontalOrientation: p,
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
        state: a,
        draggableRef: {
          current: n
        },
        props: {
          maxX: s,
          maxY: l,
          onRelocated: i,
          snapOrientation: r
        }
      } = this, {
        verticalOrientation: o,
        horizontalOrientation: u
      } = this.state;
      if (null == n) return;
      let {
        clientHeight: d,
        clientWidth: c
      } = n, f = E(t, s, l, c, d);
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
      null == i || i(e, n), this.setDOMPositions(e);
      let m = 0 === e.top;
      (o !== a.verticalOrientation || u !== a.horizontalOrientation || m !== a.atTopEdge) && this.setState({
        verticalOrientation: o,
        horizontalOrientation: u,
        atTopEdge: m
      })
    });
    let [t, a] = h(e.initialPosition);
    this.position = function(e) {
      let {
        top: t,
        left: a,
        bottom: n,
        right: s
      } = e;
      return null == a && null == s && (a = 0), null != a && null != s && (s = null), null == t && null == n && (t = 0), null != t && null != n && (n = null), {
        top: t,
        left: a,
        bottom: n,
        right: s
      }
    }(e.initialPosition), this.state = {
      dragging: !1,
      verticalOrientation: t,
      horizontalOrientation: a,
      atTopEdge: 0 === this.position.top
    }
  }
}
c(S, "FlipTypes", n), c(S, "defaultProps", {
  snapOrientation: !1,
  maxX: 0,
  maxY: 0,
  flipVertical: 0,
  flipHorizontal: 0,
  dragAnywhere: !1
})