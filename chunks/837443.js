"use strict";
n.r(t), n.d(t, {
  Slider: function() {
    return S
  }
}), n("808653"), n("70102");
var i, r, s = n("37983"),
  a = n("884691"),
  o = n("414456"),
  l = n.n(o),
  u = n("917351"),
  c = n.n(u),
  d = n("118810"),
  p = n("718776"),
  h = n("414055"),
  f = n("206230"),
  E = n("455298");

function _(e, t) {
  let n = 0;
  for (let i = 0; i < t.length; i++) {
    let r = t[i];
    if (e === r) return i;
    if (e < r) {
      if (0 === n || r - e < n) return i;
      return i - 1
    }
    n = e - r
  }
  return null
}(r = i || (i = {}))[r.ABOVE = 0] = "ABOVE", r[r.BELOW = 1] = "BELOW";

function m(e) {
  let t = Math.min(Math.max(e.initialValue, e.minValue), e.maxValue);
  return {
    value: t,
    initialValueProp: e.initialValue,
    newClosestIndex: null,
    ... function(e) {
      let {
        markers: t,
        initialValue: n,
        minValue: i,
        maxValue: r,
        equidistant: s
      } = e, a = [], o = [];
      if (null == t) return {
        min: i,
        max: r,
        range: r - i,
        sortedMarkers: a,
        markerPositions: o
      };
      a = t.sort((e, t) => e - t);
      let l = _(n, a),
        u = a[0],
        c = a[a.length - 1],
        d = c - u;
      if (s) {
        let e = 100 / (a.length - 1);
        o = a.map((t, n) => n * e)
      } else {
        let e = e => 100 * (e - u) / d;
        o = a.map(t => e(t))
      }
      return {
        min: u,
        max: c,
        range: d,
        sortedMarkers: a,
        markerPositions: o,
        closestMarkerIndex: l
      }
    }(e)
  }
}
class S extends a.PureComponent {
  static getDerivedStateFromProps(e, t) {
    return e.initialValue !== t.initialValueProp ? {
      ...m(e),
      active: t.active
    } : null
  }
  componentWillUnmount() {
    this.reset()
  }
  renderMark(e) {
    let {
      onMarkerRender: t
    } = this.props;
    return null != t ? t(e) : e
  }
  render() {
    var e;
    let {
      value: t,
      active: n,
      focused: i,
      sortedMarkers: r,
      markerPositions: a,
      closestMarkerIndex: o,
      newClosestIndex: u,
      min: c,
      max: d
    } = this.state, {
      disabled: _,
      stickToMarkers: m,
      className: S,
      children: g,
      barStyles: T,
      fillStyles: I,
      mini: v,
      hideBubble: C,
      defaultValue: A,
      orientation: R,
      onValueRender: N,
      renderMarker: y,
      getAriaValueText: O,
      barClassName: D,
      grabberClassName: b,
      grabberStyles: P = {},
      markerPosition: L = 0,
      "aria-hidden": M,
      "aria-label": U,
      "aria-labelledby": w,
      "aria-describedby": k
    } = this.props, G = 0;
    m ? null != a && (null != u ? G = a[u] : null != o && (G = a[o])) : G = this.scaleValue(t);
    let x = "".concat(G, "%"),
      F = null != a && null != r ? a.map((e, t) => {
        let n = r[t],
          i = null != A && A === n,
          a = this.renderMark(n);
        return (0, s.jsx)("div", {
          className: l(E.mark, {
            [E.defaultValue]: i,
            [E.markAbove]: 0 === L,
            [E.markBelow]: 1 === L
          }),
          style: {
            left: "".concat(e, "%")
          },
          children: null != y ? y(n) : (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("div", {
              className: E.markValue,
              children: a
            }), (0, s.jsx)("div", {
              className: E["markDash".concat(null == a ? "simple" : "")]
            })]
          })
        }, t)
      }) : null,
      V = null != N ? N(t) : "".concat(G.toFixed(0), "%"),
      B = null !== (e = null == O ? void 0 : O(t)) && void 0 !== e ? e : void 0;
    return (0, s.jsx)(p.FocusRing, {
      focusTarget: this.containerRef,
      ringTarget: this.grabberRef,
      children: (0, s.jsxs)("div", {
        className: l(E.slider, S, {
          [E.disabled]: _,
          [E.mini]: v
        }),
        "aria-valuemin": c,
        "aria-valuemax": d,
        "aria-valuenow": t,
        "aria-disabled": _,
        "aria-orientation": R,
        "aria-hidden": M,
        "aria-label": U,
        "aria-labelledby": w,
        "aria-describedby": k,
        "aria-valuetext": B,
        role: "slider",
        tabIndex: 0,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleContainerMouseDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        ref: this.containerRef,
        children: [(0, s.jsx)("div", {
          className: E.track,
          children: F
        }), (0, s.jsx)("div", {
          className: l(E.bar, D),
          style: T,
          children: (0, s.jsx)("div", {
            className: E.barFill,
            style: {
              ...I,
              width: x
            }
          })
        }), g, (0, s.jsx)("div", {
          className: E.track,
          children: (0, s.jsx)(h.Tooltip, {
            color: h.Tooltip.Colors.GREY,
            hideOnClick: !1,
            text: C || m ? null : V,
            forceOpen: n || i && f.default.keyboardModeEnabled,
            children: e => (0, s.jsx)("div", {
              ...e,
              className: l(E.grabber, b),
              style: {
                ...P,
                left: x
              },
              onMouseDown: this.handleMouseDown,
              ref: this.grabberRef
            })
          })
        })]
      })
    })
  }
  reset() {
    var e, t, n, i;
    null === (t = this.containerRef.current) || void 0 === t || null === (e = t.ownerDocument) || void 0 === e || e.removeEventListener("mousemove", this.handleMouseMove, !0), null === (i = this.containerRef.current) || void 0 === i || null === (n = i.ownerDocument) || void 0 === n || n.removeEventListener("mouseup", this.handleMouseUp, !0)
  }
  scaleValue(e) {
    return 100 * (e - this.state.min) / this.state.range
  }
  unscaleValue(e) {
    return e * this.state.range / 100 + this.state.min
  }
  focus() {
    var e;
    null === (e = this.containerRef.current) || void 0 === e || e.focus()
  }
  blur() {
    var e;
    null === (e = this.containerRef.current) || void 0 === e || e.blur()
  }
  moveStaggered(e) {
    let t;
    let {
      boundingRect: n,
      x: i = 0,
      closestMarkerIndex: r,
      markerPositions: s,
      sortedMarkers: a
    } = this.state, {
      asValueChanges: o
    } = this.props;
    if (null == n) return;
    let {
      left: l,
      right: u
    } = n;
    if (e.clientX <= l || e.clientX >= u) return;
    let c = e.clientX - i,
      d = s[r] + 100 * (c / (u - l));
    if (this.props.equidistant) t = _(d, s);
    else {
      let e = this.unscaleValue(d);
      t = _(e, a)
    }
    null != t && (null == o || o(a[t])), this.setState({
      newClosestIndex: t
    })
  }
  constructor(e) {
    super(e), this.containerRef = a.createRef(), this.grabberRef = a.createRef(), this.moveGrabber = e => {
      let {
        sortedMarkers: t,
        value: n,
        min: i,
        max: r
      } = this.state, {
        asValueChanges: s,
        onValueChange: a,
        stickToMarkers: o
      } = this.props, l = {};
      if (o) {
        let i = t.indexOf(n);
        if (i < 0) return;
        let r = i + e,
          s = t[r];
        if (null == s) return;
        l.value = s, l.closestMarkerIndex = r, l.newClosestIndex = r
      } else l.value = c.clamp(n + e, i, r);
      this.setState(l), l.value !== this.state.value && (null == s || s(l.value), null == a || a(l.value))
    }, this.handleContainerMouseDown = e => {
      let t;
      let {
        disabled: n,
        maxValue: i,
        minValue: r,
        asValueChanges: s,
        onValueChange: a,
        stickToMarkers: o
      } = this.props, {
        sortedMarkers: l,
        markerPositions: u
      } = this.state;
      if (n) return;
      let {
        clientX: c,
        currentTarget: p
      } = e;
      if (!(0, d.isElement)(p)) return;
      let {
        left: h,
        width: f
      } = p.getBoundingClientRect(), E = (c - h) / f;
      if (o) {
        let {
          nextClosestMarkerIndex: e
        } = u.reduce((e, t, n) => {
          let i = Math.abs(t / 100 - E);
          return i <= e.smallestDelta ? {
            smallestDelta: i,
            nextClosestMarkerIndex: n
          } : e
        }, {
          smallestDelta: 1,
          nextClosestMarkerIndex: -1
        });
        if (-1 === e) return;
        this.setState({
          closestMarkerIndex: e
        }), t = l[e]
      } else t = r + (i - r) * E, this.setState({
        value: t
      }), this.handleMouseDown(e);
      null != a && a(t), null != s && s(t)
    }, this.handleKeyDown = e => {
      let {
        disabled: t,
        orientation: n,
        keyboardStep: i = 1
      } = this.props;
      if (t) return;
      let {
        key: r
      } = e, s = [], a = [];
      switch (n) {
        case "horizontal":
          s = ["ArrowRight"], a = ["ArrowLeft"];
          break;
        case "vertical":
          s = ["ArrowUp"], a = ["ArrowDown"];
          break;
        default:
          s = ["ArrowRight", "ArrowUp"], a = ["ArrowLeft", "ArrowDown"]
      }
      a.includes(r) ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-i)) : s.includes(r) && (e.preventDefault(), e.stopPropagation(), this.moveGrabber(i))
    }, this.handleMouseDown = e => {
      var t, n;
      if (this.props.disabled) return;
      e.stopPropagation();
      let {
        current: i
      } = this.containerRef;
      if (null == i || null === (t = i.ownerDocument) || void 0 === t || t.addEventListener("mousemove", this.handleMouseMove, !0), null == i || null === (n = i.ownerDocument) || void 0 === n || n.addEventListener("mouseup", this.handleMouseUp, !0), !(0, d.isElement)(i)) throw Error("[UIKit]Slider.handleMouseDown(): assert failed: domNode nodeType !== Element");
      this.setState({
        x: e.clientX,
        active: !0,
        boundingRect: i.getBoundingClientRect(),
        newClosestIndex: this.state.closestMarkerIndex
      })
    }, this.handleMouseUp = e => {
      e.stopPropagation(), this.reset();
      let {
        onValueChange: t,
        stickToMarkers: n
      } = this.props, {
        newClosestIndex: i
      } = this.state;
      n && null != i ? (null == t || t(this.state.sortedMarkers[i]), this.setState({
        newClosestIndex: null,
        closestMarkerIndex: i
      })) : null == t || t(this.state.value), this.setState({
        active: !1
      })
    }, this.handleMouseMove = e => {
      e.preventDefault(), this.props.stickToMarkers ? this.moveStaggered(e) : this.moveSmoothly(e)
    }, this.onFocus = () => {
      this.setState({
        focused: !0
      })
    }, this.onBlur = () => {
      this.setState({
        focused: !1
      })
    }, this.moveSmoothly = e => {
      let {
        minValue: t,
        maxValue: n,
        asValueChanges: i
      } = this.props, {
        boundingRect: r
      } = this.state;
      if (null == r) return;
      let {
        left: s,
        right: a
      } = r, o = n - t, l = e.clientX - s, u = Math.min(Math.max(t + l / (a - s) * o, t), n);
      null == i || i(u), this.setState({
        value: u
      })
    }, this.state = {
      active: !1,
      focused: !1,
      ...m(e)
    }
  }
}
S.defaultProps = {
  initialValue: 10,
  minValue: 0,
  maxValue: 100,
  keyboardStep: 1,
  handleSize: 10,
  disabled: !1,
  stickToMarkers: !1,
  fillStyles: {}
}