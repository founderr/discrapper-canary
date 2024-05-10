"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("411104"), n("47120");
var i, r, a, s, o, l = n("735250"),
  u = n("470079"),
  d = n("981631");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = (e, t) => {
  let {
    x: n,
    y: i
  } = e, {
    x: r,
    y: a
  } = t;
  return Math.pow(n - r, 2) + Math.pow(i - a, 2)
};

function E(e, t, n, i, r) {
  let {
    top: a,
    bottom: s,
    left: o,
    right: l
  } = e;
  if (null == a && null == s ? (a = 0, s = n - r) : null == a && null != s ? a = n - (s + r) : null != a && (s = n - (a + r)), null == o && null == l ? (o = 0, l = t - i) : null == o && null != l ? o = t - (l + i) : null == l && null != o && (l = t - (o + i)), null == a || null == s || null == o || null == l) throw Error("Logically this can never happen based on our if/else statements");
  return {
    top: a,
    left: o,
    bottom: s,
    right: l
  }
}(s = i || (i = {}))[s.DISABLED = 0] = "DISABLED", s[s.DEFAULT = 1] = "DEFAULT", s[s.OFFSET = 2] = "OFFSET", (o = r || (r = {})).TOP = "TOP", o.BOTTOM = "BOTTOM", o.RIGHT = "RIGHT", o.LEFT = "LEFT";

function I(e) {
  return [null == e.bottom ? "TOP" : "BOTTOM", null == e.right ? "LEFT" : "RIGHT"]
}

function T(e) {
  let {
    top: t,
    left: n,
    bottom: i,
    right: r
  } = e;
  return 0 === t || t <= i ? i = null : t = null, 0 === n || n <= r ? r = null : n = null, {
    top: t,
    left: n,
    bottom: i,
    right: r
  }
}

function f(e) {
  let {
    top: t,
    left: n,
    bottom: i,
    right: r
  } = e;
  return i < 0 && (t += i, i = 0), t < 0 && (i += t, t = 0), r < 0 && (n += r, r = 0), n < 0 && (r += n, n = 0), {
    top: t,
    left: n,
    bottom: i,
    right: r
  }
}

function S(e) {
  return null != e ? "".concat(e, "px") : "auto"
}
class h extends(a = u.PureComponent) {
  componentDidMount() {
    this.checkBounds(), this.setDOMPositions(this.position)
  }
  componentDidUpdate(e, t) {
    let {
      state: {
        verticalOrientation: n,
        horizontalOrientation: i,
        atTopEdge: r
      },
      props: {
        maxX: a,
        maxY: s,
        onRelocated: o,
        snapOrientation: l
      }
    } = this;
    (e.maxX !== a || e.maxY !== s || e.onRelocated !== o || e.snapOrientation !== l || t.verticalOrientation !== n || t.horizontalOrientation !== i || t.atTopEdge !== r) && this.checkBounds()
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleMouseUp)
  }
  setDOMPositions(e) {
    let {
      top: t,
      left: n,
      bottom: i,
      right: r
    } = e, {
      draggableRef: {
        current: a
      }
    } = this;
    this.position = {
      top: t,
      left: n,
      bottom: i,
      right: r
    }, null != a && (a.style.top = S(t), a.style.bottom = S(i), a.style.left = S(n), a.style.right = S(r))
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      dragging: n,
      verticalOrientation: i,
      horizontalOrientation: r,
      atTopEdge: a
    } = this.state, {
      top: s,
      left: o,
      right: d,
      bottom: _
    } = this.position;
    return (0, l.jsx)("div", {
      ref: this.draggableRef,
      className: t,
      onMouseDown: this.handleMouseDown,
      style: {
        pointerEvents: n ? "none" : "auto",
        position: "absolute",
        top: s,
        left: o,
        bottom: _,
        right: d
      },
      children: u.cloneElement(u.Children.only(e), {
        flipped: "RIGHT" === r,
        verticalFlipped: "BOTTOM" === i,
        checkBounds: this.checkBounds,
        atTopEdge: a
      })
    })
  }
  constructor(e) {
    super(e), _(this, "draggableRef", u.createRef()), _(this, "_dragStart", {
      x: 0,
      y: 0
    }), _(this, "_offsetX", void 0), _(this, "_offsetY", void 0), _(this, "position", void 0), _(this, "handleMouseDown", e => {
      let {
        top: t,
        left: n,
        bottom: i,
        right: r
      } = this.position, {
        dragAnywhere: a,
        selector: s,
        maxX: o,
        maxY: l
      } = this.props, {
        target: u
      } = e, {
        current: _
      } = this.draggableRef;
      if (null != _ && e.button === d.MouseButtons.PRIMARY && (a || null != u && null != s && "" !== s && null != u.closest(s))) {
        let {
          x: a,
          y: s
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
          bottom: i,
          right: r
        }, o, l, _.clientWidth, _.clientHeight));
        this._dragStart = {
          x: e.clientX,
          y: e.clientY
        }, this._offsetX = e.clientX - a, this._offsetY = e.clientY - s, window.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleMouseUp)
      }
    }), _(this, "handleMouseMove", e => {
      e.preventDefault();
      let {
        clientX: t,
        clientY: n
      } = e, {
        current: i
      } = this.draggableRef, {
        maxX: r,
        maxY: a,
        flipVertical: s,
        flipHorizontal: o,
        onDragStart: l,
        onDrag: u,
        onFlip: d,
        snapOrientation: _
      } = this.props, {
        dragging: S,
        dragging: h,
        verticalOrientation: A,
        horizontalOrientation: m
      } = this.state, N = !1;
      if (null == i || !S && 9 > c(this._dragStart, {
          x: t,
          y: n
        })) return;
      S = !0;
      let {
        clientWidth: p,
        clientHeight: O
      } = i, C = n - this._offsetY, R = f(E({
        top: C,
        left: t - this._offsetX
      }, r, a, p, O));
      if (_) {
        let e = I(R = T(R));
        A = e[0], m = e[1]
      } else R = {
        top: R.top,
        left: R.left
      };
      2 === o && m !== this.state.horizontalOrientation && (this._offsetX = p - this._offsetX, N = !0), 2 === s && A !== this.state.verticalOrientation && (this._offsetY = O - this._offsetY, N = !0), this.setDOMPositions(R), !h && (null == l || l(R, i)), null == u || u(R, i), N && (null == d || d([A, m])), this.setState({
        dragging: S,
        verticalOrientation: A,
        horizontalOrientation: m,
        atTopEdge: 0 === R.top
      })
    }), _(this, "handleMouseUp", () => {
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
    }), _(this, "_checkBoundsRAF", null), _(this, "checkBounds", () => {
      null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF), this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds)
    }), _(this, "_performCheckBounds", () => {
      let e;
      let {
        position: t,
        state: n,
        draggableRef: {
          current: i
        },
        props: {
          maxX: r,
          maxY: a,
          onRelocated: s,
          snapOrientation: o
        }
      } = this, {
        verticalOrientation: l,
        horizontalOrientation: u
      } = this.state;
      if (null == i) return;
      let {
        clientHeight: d,
        clientWidth: _
      } = i, c = E(t, r, a, _, d);
      if (c = f(c), o) {
        let t = I(e = T(c));
        l = t[0], u = t[1]
      } else e = {
        top: c.top,
        left: c.left,
        right: null,
        bottom: null
      };
      if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom) return;
      null == s || s(e, i), this.setDOMPositions(e);
      let S = 0 === e.top;
      (l !== n.verticalOrientation || u !== n.horizontalOrientation || S !== n.atTopEdge) && this.setState({
        verticalOrientation: l,
        horizontalOrientation: u,
        atTopEdge: S
      })
    });
    let [t, n] = I(e.initialPosition);
    this.position = function(e) {
      let {
        top: t,
        left: n,
        bottom: i,
        right: r
      } = e;
      return null == n && null == r && (n = 0), null != n && null != r && (r = null), null == t && null == i && (t = 0), null != t && null != i && (i = null), {
        top: t,
        left: n,
        bottom: i,
        right: r
      }
    }(e.initialPosition), this.state = {
      dragging: !1,
      verticalOrientation: t,
      horizontalOrientation: n,
      atTopEdge: 0 === this.position.top
    }
  }
}
_(h, "FlipTypes", i), _(h, "defaultProps", {
  snapOrientation: !1,
  maxX: 0,
  maxY: 0,
  flipVertical: 0,
  flipHorizontal: 0,
  dragAnywhere: !1
})