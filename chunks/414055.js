"use strict";
n.r(t), n.d(t, {
  TooltipColors: function() {
    return i
  },
  TooltipLayer: function() {
    return v
  },
  Tooltip: function() {
    return y
  },
  TooltipContainer: function() {
    return O
  }
}), n("70102"), n("222007");
var i, r, s = n("37983"),
  a = n("884691"),
  o = n("414456"),
  l = n.n(o),
  u = n("817736"),
  c = n.n(u),
  d = n("907002"),
  p = n("394846"),
  h = n("118810"),
  f = n("862337"),
  E = n("413197"),
  _ = n("120590"),
  m = n("206230"),
  S = n("983782"),
  g = n("207758");
(r = i || (i = {})).PRIMARY = "primary", r.BLACK = "black", r.GREY = "grey", r.BRAND = "brand", r.GREEN = "green", r.YELLOW = "yellow", r.RED = "red", r.CUSTOM = "custom", r.PREMIUM = "premium";
let T = Object.freeze({}),
  I = Object.freeze({
    top: g.tooltipTop,
    bottom: g.tooltipBottom,
    left: g.tooltipLeft,
    right: g.tooltipRight,
    center: g.tooltipCenter,
    window_center: g.tooltipCenter,
    primary: g.tooltipPrimary,
    black: g.tooltipBlack,
    grey: g.tooltipGrey,
    brand: g.tooltipBrand,
    green: g.tooltipGreen,
    yellow: g.tooltipYellow,
    red: g.tooltipRed,
    custom: null,
    premium: g.tooltipPremium
  }),
  v = e => {
    let {
      targetElementRef: t,
      align: n = "center",
      position: i,
      color: r,
      children: a,
      onNonAccessibleClick: o,
      tooltipClassName: u,
      tooltipContentClassName: c,
      spacing: p = 8,
      animationStyle: h,
      disableTooltipPointerEvents: f = !1,
      allowOverflow: E = !1
    } = e, _ = "".concat("string" == typeof a ? a : "", ":").concat(i);
    return (0, s.jsx)(S.AppReferencePositionLayer, {
      disablePointerEvents: f,
      reference: t,
      position: i,
      autoInvert: !0,
      align: n,
      positionKey: _,
      spacing: p,
      nudgeAlignIntoViewport: !0,
      children: e => {
        let {
          position: t,
          nudge: p
        } = e;
        return (0, s.jsxs)(d.animated.div, {
          onClick: o,
          className: l(g.tooltip, I[null != t ? t : i], I[r], {
            [g.tooltipDisablePointerEvents]: f
          }, u),
          style: h,
          children: [(0, s.jsx)("div", {
            className: g.tooltipPointer,
            style: function(e, t, n) {
              let i = "left" === e || "right" === e,
                r = "50%",
                s = n;
              return t === (i ? "top" : "left") ? (r = "0%", s += 16) : t === (i ? "bottom" : "right") && (r = "100%", s -= 20), {
                [i ? "top" : "left"]: "calc(".concat(r, " + ").concat(s, "px)")
              }
            }(null != t ? t : i, n, p)
          }), (0, s.jsx)("div", {
            className: l(g.tooltipContent, {
              [g.tooltipContentAllowOverflow]: E
            }, c),
            children: a
          })]
        })
      }
    })
  },
  C = {
    scale: .95,
    opacity: 0
  },
  A = {
    scale: 1,
    opacity: 0
  },
  R = {
    scale: 1,
    opacity: 1
  },
  N = e => {
    let {
      isVisible: t,
      onAnimationRest: n,
      targetElementRef: i,
      ...r
    } = e, {
      reducedMotion: o
    } = a.useContext(E.AccessibilityPreferencesContext), l = (0, d.useTransition)(t, {
      keys: e => e ? "tooltip" : "empty",
      config: _.TOOLTIP_SPRING_CONFIG,
      from: o.enabled ? A : C,
      enter: R,
      leave: o.enabled ? A : C,
      onRest: n
    });
    return l((e, t) => t ? (0, s.jsx)(v, {
      animationStyle: e,
      targetElementRef: i,
      ...r
    }) : null)
  };
class y extends a.Component {
  static getDerivedStateFromProps(e, t) {
    return t.shouldShowTooltip && null == e.text ? {
      shouldShowTooltip: !1
    } : null
  }
  componentDidMount() {
    this.shouldShowTooltip(this.props, this.state) && this.setDomElement()
  }
  componentDidUpdate(e, t) {
    let n = this.shouldShowTooltip(this.props, this.state);
    n !== this.shouldShowTooltip(e, t) && (n ? this.setDomElement() : this.hasDomElement = !1)
  }
  setDomElement() {
    let e = c.findDOMNode(this);
    if (!(0, h.isElement)(e)) throw Error("Tooltip cannot find DOM node");
    this.domElementRef.current = e, this.hasDomElement = !0, this.forceUpdate()
  }
  componentWillUnmount() {
    this.showTimeout.stop(), this.domElementRef.current = null
  }
  render() {
    let e;
    let {
      children: t,
      text: n,
      "aria-label": i
    } = this.props;
    if (null == n) return t(T);
    "string" == typeof i ? e = i : "string" == typeof n && !1 !== i && (e = n);
    let r = {
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onContextMenu: this.handleContextMenu,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    };
    return null != e && (r["aria-label"] = e), (0, s.jsxs)(a.Fragment, {
      children: [t(r), this.renderTooltip()]
    })
  }
  shouldShowTooltip(e, t) {
    return e.shouldShow && (t.shouldShowTooltip || e.forceOpen)
  }
  renderTooltip() {
    let {
      text: e,
      align: t,
      position: n,
      color: i,
      spacing: r,
      tooltipClassName: a,
      tooltipContentClassName: o,
      disableTooltipPointerEvents: l,
      onAnimationRest: u,
      allowOverflow: c,
      clickableOnMobile: d,
      hideOnClick: h
    } = this.props, f = (p.isMobile || p.isTablet) && !0 === d && h, E = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement, _ = null;
    return _ = e instanceof Function ? E ? e() : null : e, (0, s.jsx)(N, {
      disableTooltipPointerEvents: !1 !== l && !f || !0 === l,
      targetElementRef: this.domElementRef,
      tooltipClassName: a,
      tooltipContentClassName: o,
      align: t,
      position: n,
      color: i,
      spacing: r,
      isVisible: E,
      onAnimationRest: u,
      onNonAccessibleClick: f ? this.handleClick : void 0,
      allowOverflow: c,
      children: _
    })
  }
  show() {
    let {
      delay: e,
      overflowOnly: t
    } = this.props;
    if (t) {
      let e = c.findDOMNode(this);
      if (null == e || (0, h.isElement)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return
    }
    null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0)
  }
  hide() {
    this.showTimeout.stop(), this.toggleShow(!1)
  }
  toggleShow(e) {
    if (this.state.shouldShowTooltip !== e) {
      if (e) {
        var t, n;
        null === (t = (n = this.props).onTooltipShow) || void 0 === t || t.call(n)
      }
      c.flushSync(() => {
        this.setState({
          shouldShowTooltip: e
        })
      })
    }
  }
  constructor(...e) {
    super(...e), this.showTimeout = new f.Timeout, this.domElementRef = a.createRef(), this.hasDomElement = !1, this.state = {
      shouldShowTooltip: !1
    }, this.handleMouseEnter = () => {
      !((p.isMobile || p.isTablet) && !0 === this.props.clickableOnMobile) && this.show()
    }, this.handleMouseLeave = () => {
      !((p.isMobile || p.isTablet) && !0 === this.props.clickableOnMobile) && this.hide()
    }, this.handleFocus = () => {
      m.default.keyboardModeEnabled && this.show()
    }, this.handleBlur = () => {
      this.hide()
    }, this.handleClick = () => {
      let e = this.hasDomElement;
      e && this.props.hideOnClick ? this.hide() : !e && (p.isMobile || p.isTablet) && !0 === this.props.clickableOnMobile && this.show()
    }, this.handleContextMenu = () => {
      this.hide()
    }
  }
}
y.Colors = i, y.defaultProps = {
  hideOnClick: !0,
  position: "top",
  color: "primary",
  forceOpen: !1,
  spacing: 8,
  shouldShow: !0,
  allowOverflow: !1,
  overflowOnly: !1
};
let O = e => {
  let {
    children: t,
    className: n,
    element: i = "div",
    ...r
  } = e;
  return (0, s.jsx)(y, {
    ...r,
    children: e => a.createElement(i, null != n ? {
      ...e,
      className: n
    } : e, t)
  })
}